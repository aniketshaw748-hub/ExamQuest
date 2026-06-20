import { motion } from "motion/react";
import { Intersect, StackSimple, Hash, ToggleRight, Atom, Graph, ArrowRight, FireSimple } from "@phosphor-icons/react";
import { useContent, useNav } from "../App.jsx";
import { useProgress, topPYQs, masteryOf, CHAPTER_ART, freq } from "../lib/game.js";

const ICONS = { ch1: Intersect, ch2: StackSimple, ch3: Hash, ch4: ToggleRight, ch5: Atom, ch6: Graph };
const spring = { type: "spring", stiffness: 220, damping: 26 };

export default function Overworld() {
  const content = useContent();
  const { go } = useNav();
  const { mcq } = useProgress();

  return (
    <div className="pt-10">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 }}
        className="font-mono text-[12px] uppercase tracking-[0.3em] text-amber/80">World II</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ ...spring, delay: 0.08 }}
        className="mt-2 font-display text-5xl font-medium leading-[0.98] tracking-tight md:text-6xl">
        The Logic<br />Kingdom
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18 }}
        className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
        Six realms of discrete maths. Learn each idea through motion, then defeat the questions the exam asks most.
      </motion.p>

      <div className="mt-12 space-y-3">
        {content.chapters.map((ch, i) => {
          const Icon = ICONS[ch.id] || Intersect;
          const art = CHAPTER_ART[ch.id] || { tag: "", hue: 38 };
          const m = masteryOf(ch, mcq);
          const pyq = topPYQs(ch, 1)[0];
          const r = 19, c = 2 * Math.PI * r;
          return (
            <motion.button
              key={ch.id}
              onClick={() => go("zone", { ch: ch.id })}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.25 + i * 0.07 }}
              whileHover={{ y: -3 }}
              className="group flex w-full items-center gap-4 rounded-[var(--radius-card)] border border-line bg-surface/60 p-4 text-left backdrop-blur-sm transition-colors hover:border-amber/40"
            >
              <div className="relative grid h-14 w-14 shrink-0 place-items-center">
                <svg className="absolute inset-0 -rotate-90" viewBox="0 0 48 48">
                  <circle cx="24" cy="24" r={r} fill="none" stroke="var(--color-raised)" strokeWidth="3.5" />
                  <circle cx="24" cy="24" r={r} fill="none" stroke="var(--color-amber)" strokeWidth="3.5" strokeLinecap="round"
                    strokeDasharray={c} strokeDashoffset={c * (1 - m / 100)} />
                </svg>
                <Icon size={24} weight="duotone" className="text-amber" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] text-dim">CH {ch.num}</span>
                  <span className="text-[11px] text-dim">·</span>
                  <span className="text-[12px] text-muted">{art.tag}</span>
                </div>
                <h3 className="mt-0.5 truncate font-display text-[19px] font-medium tracking-tight">{ch.title}</h3>
                <div className="mt-1 flex items-center gap-3 text-[12px] text-dim">
                  <span>{ch.concepts.length} lessons</span>
                  <span>{ch.mcqs.length} questions</span>
                  {pyq && (
                    <span className={"inline-flex items-center gap-1 rounded-full px-2 py-0.5 " + (freq(pyq) >= 3 ? "bg-rose/15 text-rose" : "bg-raised text-muted")}>
                      <FireSimple size={12} weight="fill" /> top PYQ ×{pyq.years.length}
                    </span>
                  )}
                </div>
              </div>

              <ArrowRight size={20} className="shrink-0 text-dim transition-all group-hover:translate-x-1 group-hover:text-amber" />
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
