import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Heart, Check, X, ArrowRight, FireSimple } from "@phosphor-icons/react";
import { useContent, useNav } from "../App.jsx";
import { useProgress, freq } from "../lib/game.js";
import { Rich } from "../lib/rich.jsx";

const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0;[a[i], a[j]] = [a[j], a[i]]; } return a; };

export default function Skirmish({ ch }) {
  const content = useContent();
  const { go } = useNav();
  const { addXP, markMCQ } = useProgress();
  const c = content.chapters.find((x) => x.id === ch);
  const order = useMemo(() => shuffle(c.mcqs.filter((q) => q.options.length === 4)), [ch]);

  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState(null);
  const [hearts, setHearts] = useState(5);
  const [correct, setCorrect] = useState(0);
  const done = idx >= order.length || hearts <= 0;
  const q = order[idx];

  function choose(label) {
    if (picked) return;
    setPicked(label);
    const ok = label === q.answer;
    markMCQ(ch, q.n, ok);
    if (ok) { setCorrect((n) => n + 1); addXP(freq(q) >= 3 ? 8 : 5); }
    else setHearts((h) => h - 1);
  }
  function next() { setPicked(null); setIdx((i) => i + 1); }

  if (done) {
    const pct = Math.round((correct / order.length) * 100);
    return (
      <div className="pt-20 text-center">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 200, damping: 18 }}>
          <p className="font-mono text-[12px] uppercase tracking-[0.3em] text-amber/80">{hearts <= 0 ? "Out of hearts" : "Skirmish clear"}</p>
          <p className="mt-3 font-display text-7xl font-medium tracking-tight">{pct}<span className="text-amber">%</span></p>
          <p className="mt-2 text-muted">{correct} of {order.length} correct</p>
        </motion.div>
        <div className="mt-8 flex justify-center gap-3">
          <button onClick={() => go("skirmish", { ch })} className="rounded-full border border-line px-5 py-2.5 text-sm text-muted hover:text-text">Retry</button>
          <button onClick={() => go("zone", { ch })} className="rounded-full bg-amber px-5 py-2.5 text-sm font-medium text-ink active:scale-95">Back to chapter</button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-8">
      <div className="mb-6 flex items-center gap-4">
        <button onClick={() => go("zone", { ch })} className="text-muted hover:text-text"><ArrowLeft size={18} /></button>
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-raised">
          <motion.div className="h-full rounded-full bg-amber" animate={{ width: ((idx) / order.length) * 100 + "%" }} transition={{ type: "spring", stiffness: 120, damping: 20 }} />
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, k) => <Heart key={k} size={16} weight="fill" className={k < hearts ? "text-rose" : "text-raised"} />)}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
          <div className="flex items-center gap-2 text-[12px] text-dim">
            <span className="font-mono">Q{idx + 1}/{order.length}</span>
            {q.years.length > 0 && (
              <span className={"inline-flex items-center gap-1 rounded-full px-2 py-0.5 " + (freq(q) >= 3 ? "bg-rose/15 text-rose" : "bg-raised text-muted")}>
                <FireSimple size={11} weight="fill" /> asked {q.years.length}×
              </span>
            )}
          </div>
          <div className="mt-3 font-display text-[22px] leading-snug tracking-tight"><Rich>{q.question}</Rich></div>

          <div className="mt-5 space-y-2.5">
            {q.options.map((o) => {
              const isAns = o.label === q.answer, isPicked = o.label === picked;
              const state = !picked ? "idle" : isAns ? "right" : isPicked ? "wrong" : "dim";
              return (
                <motion.button key={o.label} onClick={() => choose(o.label)} disabled={!!picked}
                  whileTap={!picked ? { scale: 0.99 } : {}}
                  animate={state === "wrong" ? { x: [0, -6, 6, -4, 4, 0] } : {}}
                  className={"flex w-full items-center gap-3 rounded-[var(--radius-field)] border p-3.5 text-left transition-colors " +
                    (state === "idle" ? "border-line bg-surface/50 hover:border-amber/50" :
                     state === "right" ? "border-emerald bg-emerald/10" :
                     state === "wrong" ? "border-rose bg-rose/10" : "border-line bg-surface/30 opacity-50")}>
                  <span className={"grid h-7 w-7 shrink-0 place-items-center rounded-full text-[13px] font-medium " +
                    (state === "right" ? "bg-emerald text-ink" : state === "wrong" ? "bg-rose text-ink" : "bg-raised text-muted")}>
                    {state === "right" ? <Check size={15} weight="bold" /> : state === "wrong" ? <X size={15} weight="bold" /> : o.label}
                  </span>
                  <span className="text-[15px]"><Rich inline>{o.text}</Rich></span>
                </motion.button>
              );
            })}
          </div>

          <AnimatePresence>
            {picked && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-5 flex items-center justify-between">
                <span className={"text-sm " + (picked === q.answer ? "text-emerald" : "text-rose")}>
                  {picked === q.answer ? "Correct" : <>Answer is ({q.answer})</>}
                </span>
                <button onClick={next} className="inline-flex items-center gap-1.5 rounded-full bg-amber px-5 py-2 text-sm font-medium text-ink active:scale-95">
                  {idx + 1 >= order.length ? "Results" : "Next"} <ArrowRight size={16} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
