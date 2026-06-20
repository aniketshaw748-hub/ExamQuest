import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChatCircleDots, X, PaperPlaneTilt, Sparkle } from "@phosphor-icons/react";
import { useContent, useNav } from "../App.jsx";
import { getLessons } from "../lib/lessons.js";
import { Rich } from "../lib/rich.jsx";

function buildContext(content, route) {
  const ch = route.params?.ch;
  const c = ch && content.chapters.find((x) => x.id === ch);
  if (route.name === "lesson" && c) {
    const L = getLessons(content, ch)[route.params.i || 0];
    return `Subject: Discrete Mathematics. Chapter: "${c.title}". The learner is reading the lesson "${L?.title}".` +
      (L?.teach ? ` Its key idea: ${L.teach.what} Rule of thumb: ${L.teach.rule}` : "");
  }
  if (c) return `Subject: Discrete Mathematics. Chapter: "${c.title}" (${route.name === "skirmish" || route.name === "boss" ? "practising exam questions" : "browsing the chapter"}).`;
  return "Subject: Discrete Mathematics (chapter overview).";
}

function topicLabel(content, route) {
  const ch = route.params?.ch;
  const c = ch && content.chapters.find((x) => x.id === ch);
  if (route.name === "lesson" && c) return getLessons(content, ch)[route.params.i || 0]?.title || c.title;
  if (c) return c.title;
  return "Discrete Mathematics";
}

const STARTERS = ["Explain this more simply", "Give me a different analogy", "Where do students get this wrong?"];

export default function Chatbot() {
  const content = useContent();
  const { route } = useNav();
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef(null);

  const topic = topicLabel(content, route);
  useEffect(() => { scrollRef.current?.scrollTo({ top: 9e9, behavior: "smooth" }); }, [msgs, busy]);

  async function send(text) {
    text = (text ?? input).trim();
    if (!text || busy) return;
    setInput("");
    const next = [...msgs, { role: "user", text }];
    setMsgs(next);
    setBusy(true);
    try {
      const r = await fetch("/api/chat", {
        method: "POST", headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: next, context: buildContext(content, route) }),
      });
      const data = await r.json();
      setMsgs((m) => [...m, { role: "assistant", text: data.text || `_${data.error || "No response."}_` }]);
    } catch (e) {
      setMsgs((m) => [...m, { role: "assistant", text: `_Couldn't reach the tutor: ${e.message}_` }]);
    } finally { setBusy(false); }
  }

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
              <div className="min-w-0">
                <p className="font-display text-[14px] font-medium leading-tight">Doubt solver</p>
                <p className="truncate text-[11px] text-dim">on: {topic}</p>
              </div>
            </div>

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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Dot({ d = 0 }) {
  return <motion.span className="h-1.5 w-1.5 rounded-full bg-dim" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: d }} />;
}
