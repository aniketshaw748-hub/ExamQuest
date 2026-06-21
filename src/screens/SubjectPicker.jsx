import { motion } from "motion/react";
import { ArrowRight, GithubLogo, Star, ArrowUUpLeft } from "@phosphor-icons/react";
import { SUBJECTS, getSubject } from "../data/subjects.js";
import { getLast, getSubjectStat } from "../lib/game.js";

const spring = { type: "spring", stiffness: 220, damping: 26 };
const REPO_URL = "https://github.com/aniketshaw748-hub/ExamQuest";

export default function SubjectPicker({ openSubject }) {
  const last = getLast();
  const lastSub = last && getSubject(last.subject);
  return (
    <div className="relative px-5 pb-28 pt-16">
      <motion.a
        href={REPO_URL} target="_blank" rel="noopener noreferrer"
        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        whileHover={{ y: -2 }}
        className="group absolute right-5 top-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3.5 py-2 text-[12px] text-muted backdrop-blur-sm transition-colors hover:border-amber/50 hover:text-text"
        title="If you like this or if it helped you, give us a GitHub star">
        <GithubLogo size={16} weight="fill" className="text-text" />
        <span className="hidden sm:inline">If it helped you, give us a GitHub star</span>
        <span className="sm:hidden">Star us</span>
        <Star size={14} weight="fill" className="text-amber transition-transform group-hover:scale-110" />
      </motion.a>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 }}
        className="font-mono text-[12px] uppercase tracking-[0.3em] text-amber/80">MAKAUT / WBUT · Semester 4</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ ...spring, delay: 0.08 }}
        className="mt-2 font-display text-5xl font-medium leading-[0.98] tracking-tight md:text-6xl">
        Exam<span className="text-amber">.</span>Quest
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18 }}
        className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted">
        Every idea is illustrated with an interactive you can play with, then you drill the most repeated previous-year questions until they stick. Six subjects, all fully illustrated.
      </motion.p>

      {lastSub && (
        <motion.button
          onClick={() => openSubject(last.subject, { name: last.route, params: { ch: last.ch, i: last.i } })}
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ ...spring, delay: 0.2 }}
          whileHover={{ y: -2 }}
          className="group mt-7 flex w-full items-center gap-3 rounded-[var(--radius-card)] border border-amber/40 bg-amber/[0.07] p-4 text-left transition-colors hover:border-amber/70">
          <ArrowUUpLeft size={20} weight="bold" className="shrink-0 text-amber" />
          <div className="min-w-0 flex-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber/80">Continue where you left off</p>
            <p className="mt-0.5 truncate font-display text-[16px] font-medium tracking-tight">{lastSub.name}</p>
          </div>
          <ArrowRight size={18} className="shrink-0 text-amber transition-transform group-hover:translate-x-1" />
        </motion.button>
      )}

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {SUBJECTS.map((s, i) => {
          const Icon = s.icon;
          const stat = getSubjectStat(s.key);
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
                  {stat.started && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber/15 px-2 py-0.5 text-[10px] text-amber">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber" /> in progress
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
