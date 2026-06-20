import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, ListChecks, Check, Lightbulb, FireSimple } from "@phosphor-icons/react";
import { useContent, useNav } from "../App.jsx";
import { useProgress, freq } from "../lib/game.js";
import { getWalks } from "../lib/walks.js";
import { EXPLAINERS } from "../explainers/registry.js";
import { Rich } from "../lib/rich.jsx";

export default function Walkthrough({ ch, i = 0 }) {
  const content = useContent();
  const { go } = useNav();
  const { addXP, markBoss } = useProgress();
  const c = content.chapters.find((x) => x.id === ch);
  const walks = getWalks(content, ch);
  const w = walks[i];
  const [shown, setShown] = useState(1);
  useEffect(() => { setShown(1); }, [i]);

  if (!w) return (
    <div className="pt-20 text-center text-muted">
      Walkthroughs for this chapter are coming next. <button onClick={() => go("zone", { ch })} className="text-amber">Back</button>
    </div>
  );

  const Explainer = w.explainer ? EXPLAINERS[w.explainer] : null;
  const done = shown >= w.steps.length;
  const f = (w.years?.length || 0) + (w.model ? 0.4 : 0);

  function revealNext() {
    if (shown < w.steps.length) setShown((s) => s + 1);
    if (shown + 1 >= w.steps.length && markBoss(`walk.${ch}.${w.id}`)) addXP(14);
  }

  return (
    <div className="pt-8">
      <button onClick={() => go("zone", { ch })} className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted hover:text-text">
        <ArrowLeft size={16} /> {c.title}
      </button>

      <div className="flex items-center gap-2 text-[12px] text-dim">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber/15 px-2.5 py-1 text-amber"><ListChecks size={13} weight="bold" /> Walkthrough {i + 1}/{walks.length}</span>
        {w.marks && <span className="rounded-full bg-raised px-2 py-0.5 text-muted">{w.marks} marks</span>}
        {w.years?.length > 0 && (
          <span className={"inline-flex items-center gap-1 rounded-full px-2 py-0.5 " + (f >= 3 ? "bg-rose/15 text-rose" : "bg-raised text-muted")}>
            <FireSimple size={11} weight="fill" /> asked {w.years.length}× {w.years.length ? `(${w.years.join(", ")})` : ""}
          </span>
        )}
      </div>
      <h1 className="mt-3 font-display text-[24px] font-medium leading-snug tracking-tight"><Rich inline>{w.question}</Rich></h1>

      {Explainer && (
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className="mt-5">
          <Explainer />
        </motion.div>
      )}

      {/* point-by-point */}
      <ol className="mt-6 space-y-3">
        {w.steps.slice(0, shown).map((s, k) => (
          <motion.li key={k} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-3 rounded-[var(--radius-tile)] border border-line bg-surface/40 p-4">
            <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-amber font-mono text-[12px] text-ink">{k + 1}</span>
            <div>
              {s.label && <p className="font-display text-[15px] font-medium tracking-tight text-text">{s.label}</p>}
              <div className={"text-[14px] leading-relaxed text-muted" + (s.label ? " mt-0.5" : "")}><Rich inline>{s.body}</Rich></div>
            </div>
          </motion.li>
        ))}
      </ol>

      {!done ? (
        <button onClick={revealNext} className="mt-5 inline-flex items-center gap-2 rounded-full bg-amber px-5 py-2.5 text-sm font-medium text-ink transition-transform active:scale-95">
          Reveal next point <ArrowRight size={16} />
        </button>
      ) : (
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="mt-6 space-y-3">
          {w.answer ? (
            <>
              <div className="rounded-[var(--radius-tile)] border border-emerald/40 bg-emerald/10 p-4">
                <div className="mb-1.5 flex items-center gap-2 text-emerald"><Check size={18} weight="bold" /><span className="font-mono text-[11px] uppercase tracking-[0.2em]">Final answer</span></div>
                <div className="text-[15px] leading-relaxed text-text"><Rich inline>{w.answer}</Rich></div>
              </div>
              {w.tip && (
                <div className="rounded-[var(--radius-tile)] border border-amber/40 bg-amber/10 p-4">
                  <div className="mb-1.5 flex items-center gap-2 text-amber"><Lightbulb size={18} weight="fill" /><span className="font-mono text-[11px] uppercase tracking-[0.2em]">In the exam</span></div>
                  <div className="text-[14px] leading-relaxed text-text"><Rich inline>{w.tip}</Rich></div>
                </div>
              )}
            </>
          ) : (
            <div className="flex items-center gap-2 rounded-[var(--radius-tile)] border border-emerald/40 bg-emerald/10 p-4 text-[14px] text-emerald">
              <Check size={18} weight="bold" /> That is the full {w.marks}-mark answer, exactly as in the organizer.
            </div>
          )}
        </motion.div>
      )}

      <div className="mt-8 flex items-center justify-between">
        <button onClick={() => go("walkthrough", { ch, i: i - 1 })} disabled={i === 0}
          className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm text-muted enabled:hover:text-text disabled:opacity-40">
          <ArrowLeft size={16} /> Prev
        </button>
        <div className="flex gap-1.5">
          {walks.map((_, k) => <span key={k} className={"h-1.5 rounded-full transition-all " + (k === i ? "w-6 bg-amber" : "w-1.5 bg-line")} />)}
        </div>
        <button onClick={() => (i + 1 < walks.length ? go("walkthrough", { ch, i: i + 1 }) : go("zone", { ch }))}
          className="inline-flex items-center gap-1.5 rounded-full bg-amber px-5 py-2 text-sm font-medium text-ink active:scale-95">
          {i + 1 < walks.length ? "Next" : "Done"} <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
