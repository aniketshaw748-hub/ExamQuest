import { motion } from "motion/react";
import { ArrowRight, Sparkle } from "@phosphor-icons/react";
import { SUBJECTS } from "../data/subjects.js";

const spring = { type: "spring", stiffness: 220, damping: 26 };

export default function SubjectPicker({ openSubject }) {
  return (
    <div className="px-5 pb-28 pt-16">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 }}
        className="font-mono text-[12px] uppercase tracking-[0.3em] text-amber/80">MAKAUT / WBUT · Semester 4</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ ...spring, delay: 0.08 }}
        className="mt-2 font-display text-5xl font-medium leading-[0.98] tracking-tight md:text-6xl">
        Exam<span className="text-amber">.</span>Quest
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18 }}
        className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted">
        Pick a subject. Learn each idea visually from first principles, then drill the most repeated previous-year questions until they stick.
      </motion.p>

      <div className="mt-12 grid gap-3 sm:grid-cols-2">
        {SUBJECTS.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.button
              key={s.key}
              onClick={() => openSubject(s.key)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.22 + i * 0.06 }}
              whileHover={{ y: -3 }}
              className="group flex items-start gap-4 rounded-[var(--radius-card)] border border-line bg-surface/60 p-5 text-left backdrop-blur-sm transition-colors hover:border-amber/40"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-[var(--radius-tile)] border border-line bg-ink-2/70 text-amber">
                <Icon size={24} weight="duotone" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim">{s.world}</span>
                  {s.bespoke && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber/15 px-2 py-0.5 text-[10px] text-amber">
                      <Sparkle size={10} weight="fill" /> fully illustrated
                    </span>
                  )}
                </div>
                <h3 className="mt-1 font-display text-[18px] font-medium leading-tight tracking-tight">{s.name}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-dim">{s.blurb}</p>
              </div>
              <ArrowRight size={20} className="mt-1 shrink-0 text-dim transition-all group-hover:translate-x-1 group-hover:text-amber" />
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
