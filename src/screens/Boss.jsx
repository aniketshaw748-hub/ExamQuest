import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, Skull, Eye, Check, X } from "@phosphor-icons/react";
import { useContent, useNav } from "../App.jsx";
import { useProgress, topPYQs, freq } from "../lib/game.js";
import { Rich } from "../lib/rich.jsx";

export default function Boss({ ch, i = 0 }) {
  const content = useContent();
  const { go } = useNav();
  const { addXP, markBoss } = useProgress();
  const c = content.chapters.find((x) => x.id === ch);
  const bosses = topPYQs(c, 6);
  const q = bosses[i];
  const [picked, setPicked] = useState(null);
  const [revealed, setRevealed] = useState(false);

  if (!q) return (
    <div className="pt-20 text-center text-muted">
      No tagged PYQs here yet. <button onClick={() => go("zone", { ch })} className="text-amber">Back</button>
    </div>
  );

  const elite = freq(q) >= 3;
  // include the boss index so multi-part PYQs that share a question number (e.g. 1a, 1b)
  // get distinct progress keys instead of clearing each other
  const bossId = `${ch}.${q.kind}.${q.n}.${i}`;

  function pick(label) {
    if (picked) return;
    setPicked(label);
    if (label === q.answer && markBoss(bossId)) addXP(15);
  }
  function reveal() { setRevealed(true); if (markBoss(bossId)) addXP(12); }

  return (
    <div className="pt-8">
      <button onClick={() => go("zone", { ch })} className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted hover:text-text">
        <ArrowLeft size={16} /> {c.title}
      </button>

      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 rounded-[var(--radius-card)] border p-4"
        style={{ borderColor: elite ? "rgba(251,113,133,0.5)" : "var(--color-line)", background: elite ? "rgba(251,113,133,0.07)" : "var(--color-surface)" }}>
        <Skull size={34} weight="duotone" className={elite ? "text-rose" : "text-muted"} />
        <div>
          <p className="font-display text-[17px] font-medium tracking-tight">Boss {i + 1} of {bosses.length}{elite && " · Elite"}</p>
          <p className="text-[12px] text-muted">{q.kind.toUpperCase()} · asked {q.years.length}× {q.years.length ? `(${q.years.join(", ")})` : ""}</p>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="mt-5">
          <div className="font-display text-[21px] leading-snug tracking-tight"><Rich>{q.question}</Rich></div>

          {q.kind === "mcq" && q.options.length === 4 ? (
            <div className="mt-5 space-y-2.5">
              {q.options.map((o) => {
                const isAns = o.label === q.answer, isPicked = o.label === picked;
                const state = !picked ? "idle" : isAns ? "right" : isPicked ? "wrong" : "dim";
                return (
                  <button key={o.label} onClick={() => pick(o.label)} disabled={!!picked}
                    className={"flex w-full items-center gap-3 rounded-[var(--radius-field)] border p-3.5 text-left transition-colors " +
                      (state === "idle" ? "border-line bg-surface/50 hover:border-amber/50" :
                       state === "right" ? "border-emerald bg-emerald/10" :
                       state === "wrong" ? "border-rose bg-rose/10" : "border-line opacity-50")}>
                    <span className={"grid h-7 w-7 shrink-0 place-items-center rounded-full text-[13px] " +
                      (state === "right" ? "bg-emerald text-ink" : state === "wrong" ? "bg-rose text-ink" : "bg-raised text-muted")}>
                      {state === "right" ? <Check size={15} weight="bold" /> : state === "wrong" ? <X size={15} weight="bold" /> : o.label}
                    </span>
                    <span className="text-[15px]"><Rich inline>{o.text}</Rich></span>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="mt-5">
              {!revealed ? (
                <button onClick={reveal} className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-muted hover:text-text">
                  <Eye size={16} /> Reveal worked solution
                </button>
              ) : (
                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                  className="prose-quest max-h-[440px] overflow-auto rounded-[var(--radius-card)] border border-dashed border-line bg-ink-2/60 p-5 text-[14px] leading-relaxed text-muted">
                  <Rich>{q.answer || "_Solution not captured._"}</Rich>
                </motion.div>
              )}
            </div>
          )}

          <div className="mt-7 flex items-center justify-between">
            <button onClick={() => go("boss", { ch, i: i - 1 })} disabled={i === 0}
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm text-muted enabled:hover:text-text disabled:opacity-40">
              <ArrowLeft size={16} /> Prev
            </button>
            <button onClick={() => (i + 1 < bosses.length ? go("boss", { ch, i: i + 1 }) : go("zone", { ch }))}
              className="inline-flex items-center gap-1.5 rounded-full bg-amber px-5 py-2 text-sm font-medium text-ink active:scale-95">
              {i + 1 < bosses.length ? "Next boss" : "Done"} <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
