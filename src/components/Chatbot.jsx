import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChatCircleDots, X, PaperPlaneTilt, Sparkle, Gear, ArrowUpRight, Key } from "@phosphor-icons/react";
import { useContent, useNav, useSubject } from "../App.jsx";
import { getLessons } from "../lib/lessons.js";
import { Rich } from "../lib/rich.jsx";
import { TEACH_SYSTEM_PROMPT } from "../data/teachPrompt.js";

const BYOK_KEY = "quest.byok.v1";
const AISTUDIO = "https://aistudio.google.com/apikey";
const GEMINI_MODEL = "gemini-2.5-flash";
const blankCfg = { provider: "gemini", key: "", baseUrl: "", model: "" };
const loadCfg = () => { try { return { ...blankCfg, ...JSON.parse(localStorage.getItem(BYOK_KEY) || "null") }; } catch { return { ...blankCfg }; } };
const isQuota = (s = "") => /quota|credit|exceed|insufficient|billing|rate.?limit|429|resource has been exhausted|missing|api.?key/i.test(s);

function buildContext(content, route, subject, name) {
  const ch = route.params?.ch;
  const c = ch && content.chapters.find((x) => x.id === ch);
  if (route.name === "lesson" && c) {
    const L = getLessons(content, ch, subject)[route.params.i || 0];
    return `Subject: ${name}. Chapter: "${c.title}". The learner is reading the lesson "${L?.title}".` +
      (L?.teach ? ` Its key idea: ${L.teach.what} Rule of thumb: ${L.teach.rule}` : "");
  }
  if (c) return `Subject: ${name}. Chapter: "${c.title}" (${route.name === "skirmish" || route.name === "boss" ? "practising exam questions" : "browsing the chapter"}).`;
  return `Subject: ${name} (chapter overview).`;
}

function topicLabel(content, route, subject, name) {
  const ch = route.params?.ch;
  const c = ch && content.chapters.find((x) => x.id === ch);
  if (route.name === "lesson" && c) return getLessons(content, ch, subject)[route.params.i || 0]?.title || c.title;
  if (c) return c.title;
  return name;
}

const systemText = (context) => TEACH_SYSTEM_PROMPT +
  (context ? `\n\nCURRENT LEARNING CONTEXT (ground every answer in this; if the question is unrelated, gently steer back): ${context}` : "");

// Call the chosen provider straight from the browser with the user's own key (works even if our
// shared server key is out of credit). Gemini is recommended; any OpenAI-compatible API also works.
async function callDirect(cfg, system, messages) {
  if (cfg.provider === "openai") {
    const base = (cfg.baseUrl || "https://api.openai.com/v1").replace(/\/+$/, "");
    const r = await fetch(`${base}/chat/completions`, {
      method: "POST",
      headers: { "content-type": "application/json", authorization: `Bearer ${cfg.key}` },
      body: JSON.stringify({
        model: cfg.model || "gpt-4o-mini",
        messages: [{ role: "system", content: system }, ...messages.map((m) => ({ role: m.role === "assistant" ? "assistant" : "user", content: m.text }))],
        temperature: 0.6,
      }),
    });
    const data = await r.json();
    if (!r.ok) throw new Error(data?.error?.message || `Error ${r.status}`);
    return data?.choices?.[0]?.message?.content || "(no response)";
  }
  const model = cfg.model || GEMINI_MODEL;
  const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${cfg.key}`, {
    method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: system }] },
      contents: messages.slice(-12).map((m) => ({ role: m.role === "assistant" ? "model" : "user", parts: [{ text: m.text }] })),
      generationConfig: { temperature: 0.6, maxOutputTokens: 1400, topP: 0.95 },
    }),
  });
  const data = await r.json();
  if (!r.ok) throw new Error(data?.error?.message || `Error ${r.status}`);
  return data?.candidates?.[0]?.content?.parts?.map((p) => p.text).join("") || "(no response)";
}

const STARTERS = ["Explain this more simply", "Give me a different analogy", "Where do students get this wrong?"];

export default function Chatbot() {
  const content = useContent();
  const { route } = useNav();
  const { key: subject, meta } = useSubject();
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState(false);
  const [cfg, setCfg] = useState(loadCfg);
  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef(null);

  const topic = topicLabel(content, route, subject, meta.name);
  useEffect(() => { scrollRef.current?.scrollTo({ top: 9e9, behavior: "smooth" }); }, [msgs, busy]);

  async function send(text) {
    text = (text ?? input).trim();
    if (!text || busy) return;
    setInput("");
    const next = [...msgs, { role: "user", text }];
    setMsgs(next);
    setBusy(true);
    const context = buildContext(content, route, subject, meta.name);
    try {
      let reply;
      if (cfg.key) {
        reply = await callDirect(cfg, systemText(context), next);
      } else {
        const r = await fetch("/api/chat", {
          method: "POST", headers: { "content-type": "application/json" },
          body: JSON.stringify({ messages: next, context }),
        });
        const data = await r.json();
        if (!r.ok || data.error) {
          if (isQuota(data.error || "")) { setSettings(true); throw new Error("__shared_out__"); }
          throw new Error(data.error || "No response.");
        }
        reply = data.text;
      }
      setMsgs((m) => [...m, { role: "assistant", text: reply }]);
    } catch (e) {
      const msg = e.message === "__shared_out__"
        ? "The shared AI key is out of credit right now. Add your own free key in **Settings** (the gear, top right) and you can keep going. It stays in your browser only."
        : `_Couldn't reach the tutor: ${e.message}_`;
      setMsgs((m) => [...m, { role: "assistant", text: msg }]);
    } finally { setBusy(false); }
  }

  const saveCfg = (c) => { setCfg(c); try { localStorage.setItem(BYOK_KEY, JSON.stringify(c)); } catch {} };

  return (
    <>
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-amber text-ink shadow-[0_10px_30px_rgba(246,181,61,0.35)]"
        aria-label="Open doubt solver">
        <AnimatePresence mode="wait" initial={false}>
          {open
            ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}><X size={24} weight="bold" /></motion.span>
            : <motion.span key="c" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}><ChatCircleDots size={24} weight="fill" /></motion.span>}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            className="fixed bottom-24 right-5 z-40 flex max-h-[72vh] w-[min(400px,92vw)] flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-ink-2/95 backdrop-blur-xl">
            <div className="flex items-center gap-2.5 border-b border-line px-4 py-3">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-amber/15 text-amber"><Sparkle size={16} weight="fill" /></span>
              <div className="min-w-0 flex-1">
                <p className="font-display text-[14px] font-medium leading-tight">Doubt solver</p>
                <p className="truncate text-[11px] text-dim">{settings ? "Bring your own API key" : `on: ${topic}`}</p>
              </div>
              {cfg.key && !settings && <span className="rounded-full bg-emerald/15 px-2 py-0.5 text-[10px] text-emerald">your key</span>}
              <button onClick={() => setSettings((s) => !s)} aria-label="Settings"
                className={"grid h-8 w-8 place-items-center rounded-full transition-colors " + (settings ? "bg-amber/15 text-amber" : "text-dim hover:text-text")}>
                <Gear size={17} weight={settings ? "fill" : "regular"} />
              </button>
            </div>

            {settings ? (
              <SettingsPanel cfg={cfg} onSave={saveCfg} onClose={() => setSettings(false)} />
            ) : (
              <>
                <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
                  {msgs.length === 0 && (
                    <div className="text-[13px] leading-relaxed text-muted">
                      Stuck on anything in <span className="text-text">{topic}</span>? Ask away. I teach from first principles, with an analogy and the misconception to avoid.
                    </div>
                  )}
                  {msgs.map((m, i) => (
                    <div key={i} className={m.role === "user" ? "flex justify-end" : ""}>
                      <div className={m.role === "user"
                        ? "max-w-[85%] rounded-2xl rounded-br-sm bg-amber px-3.5 py-2 text-[14px] text-ink"
                        : "chat-prose max-w-full rounded-2xl rounded-bl-sm bg-surface px-3.5 py-2.5 text-[14px] leading-relaxed text-text"}>
                        {m.role === "user" ? m.text : <Rich>{m.text}</Rich>}
                      </div>
                    </div>
                  ))}
                  {busy && <div className="flex gap-1 px-1"><Dot /><Dot d={0.15} /><Dot d={0.3} /></div>}
                </div>

                {msgs.length === 0 && (
                  <div className="flex flex-wrap gap-1.5 px-4 pb-2">
                    {STARTERS.map((s) => (
                      <button key={s} onClick={() => send(s)} className="rounded-full border border-line px-2.5 py-1 text-[12px] text-muted transition-colors hover:border-amber/50 hover:text-text">{s}</button>
                    ))}
                  </div>
                )}

                <form onSubmit={(e) => { e.preventDefault(); send(); }} className="flex items-center gap-2 border-t border-line p-3">
                  <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask a doubt…"
                    className="flex-1 rounded-full border border-line bg-surface px-3.5 py-2 text-[14px] text-text outline-none placeholder:text-dim focus:border-amber/50" />
                  <button type="submit" disabled={busy || !input.trim()}
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-amber text-ink transition-transform active:scale-90 disabled:opacity-40">
                    <PaperPlaneTilt size={17} weight="fill" />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function SettingsPanel({ cfg, onSave, onClose }) {
  const [f, setF] = useState(cfg);
  const set = (k, v) => setF((p) => ({ ...p, [k]: v }));
  const gemini = f.provider === "gemini";

  return (
    <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4 text-[13px]">
      <p className="text-muted">The shared key has limited free usage. Add your own to keep the tutor running, with no limits. Your key is stored <span className="text-text">only in this browser</span> and sent straight to the provider, never to our servers.</p>

      <div>
        <p className="mb-1 font-mono text-[11px] uppercase tracking-wide text-dim">Provider</p>
        <div className="flex gap-1.5">
          <button onClick={() => set("provider", "gemini")} className={"flex-1 rounded-full border px-2.5 py-1.5 text-[12px] " + (gemini ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>Gemini (recommended)</button>
          <button onClick={() => set("provider", "openai")} className={"flex-1 rounded-full border px-2.5 py-1.5 text-[12px] " + (!gemini ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>OpenAI-compatible</button>
        </div>
      </div>

      <label className="block">
        <span className="font-mono text-[11px] uppercase tracking-wide text-dim">API key</span>
        <input type="password" value={f.key} onChange={(e) => set("key", e.target.value)} placeholder={gemini ? "AIza…" : "sk-…"}
          className="mt-1 w-full rounded-[var(--radius-field)] border border-line bg-surface px-3 py-2 text-[13px] text-text outline-none placeholder:text-dim focus:border-amber/50" />
      </label>

      {gemini ? (
        <a href={AISTUDIO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[12px] text-amber hover:underline">
          <Key size={14} weight="fill" /> Get a free Gemini key from Google AI Studio <ArrowUpRight size={12} />
        </a>
      ) : (
        <div className="space-y-2">
          <label className="block">
            <span className="font-mono text-[11px] uppercase tracking-wide text-dim">Base URL</span>
            <input value={f.baseUrl} onChange={(e) => set("baseUrl", e.target.value)} placeholder="https://api.openai.com/v1"
              className="mt-1 w-full rounded-[var(--radius-field)] border border-line bg-surface px-3 py-2 text-[13px] text-text outline-none placeholder:text-dim focus:border-amber/50" />
          </label>
          <label className="block">
            <span className="font-mono text-[11px] uppercase tracking-wide text-dim">Model</span>
            <input value={f.model} onChange={(e) => set("model", e.target.value)} placeholder="gpt-4o-mini"
              className="mt-1 w-full rounded-[var(--radius-field)] border border-line bg-surface px-3 py-2 text-[13px] text-text outline-none placeholder:text-dim focus:border-amber/50" />
          </label>
          <p className="text-[11px] text-dim">Works with any OpenAI-compatible API that allows browser requests (OpenRouter, Groq, etc.). Some providers (incl. OpenAI itself) block direct browser calls; Gemini is the most reliable.</p>
        </div>
      )}

      <div className="flex gap-2 pt-1">
        <button onClick={() => { onSave(f); onClose(); }} disabled={!f.key.trim()}
          className="flex-1 rounded-full bg-amber px-4 py-2 text-[13px] font-medium text-ink transition-transform active:scale-95 disabled:opacity-40">Save key</button>
        <button onClick={() => { onSave({ provider: "gemini", key: "", baseUrl: "", model: "" }); onClose(); }}
          className="rounded-full border border-line px-4 py-2 text-[13px] text-muted transition-colors hover:text-text">Use shared key</button>
      </div>
    </div>
  );
}

function Dot({ d = 0 }) {
  return <motion.span className="h-1.5 w-1.5 rounded-full bg-dim" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: d }} />;
}
