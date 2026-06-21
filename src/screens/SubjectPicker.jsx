import { motion } from "motion/react";
import { ArrowRight, GithubLogo, Star, ArrowUUpLeft, Plus, ArrowUpRight } from "@phosphor-icons/react";
import { SUBJECTS, getSubject } from "../data/subjects.js";
import { getLast, getSubjectStat } from "../lib/game.js";
import ThemeToggle from "../components/ThemeToggle.jsx";

const spring = { type: "spring", stiffness: 220, damping: 26 };
const REPO_URL = "https://github.com/aniketshaw748-hub/ExamQuest";

function SubjectCard({ s, i, openSubject }) {
  const Icon = s.icon;
  const stat = getSubjectStat(s.key);
  return (
    <motion.button
      onClick={() => openSubject(s.key)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...spring, delay: 0.22 + i * 0.06 }}
      whileHover={{ y: -4 }}
      className="group flex items-start gap-5 rounded-[var(--radius-card)] border border-line bg-surface/60 p-6 text-left backdrop-blur-sm transition-all hover:border-amber/40"
    >
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-[var(--radius-tile)] border border-amber/25 bg-gradient-to-br from-amber/20 to-amber/[0.05] text-amber shadow-[0_5px_14px_-6px_rgba(20,15,5,0.22)]">
        <Icon size={24} weight="duotone" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber/80">{s.world}</span>
          {stat.started && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber/15 px-2 py-0.5 text-[10px] text-amber">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" /> in progress
            </span>
          )}
        </div>
        <h3 className="mt-1.5 font-display text-[18px] font-medium leading-tight tracking-tight">{s.name}</h3>
        <p className="mt-2 text-[13px] leading-relaxed text-dim">{s.blurb}</p>
      </div>
      <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line bg-surface text-amber shadow-[0_2px_8px_-2px_rgba(30,25,15,0.12)] transition-all group-hover:border-amber group-hover:bg-amber group-hover:text-ink">
        <ArrowRight size={17} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
      </div>
    </motion.button>
  );
}

export default function SubjectPicker({ openSubject }) {
  const last = getLast();
  const lastSub = last && getSubject(last.subject);
  const main = SUBJECTS.filter((s) => !s.back);
  const back = SUBJECTS.filter((s) => s.back);

  return (
    <div className="relative px-5 pb-28 pt-20 md:pt-24">
      <div className="absolute right-5 top-5 flex items-center gap-2">
        <ThemeToggle className="h-9 w-9" />
        <motion.a
          href={REPO_URL} target="_blank" rel="noopener noreferrer"
          initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          whileHover={{ y: -2 }}
          className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3.5 py-2 text-[12px] text-muted backdrop-blur-sm transition-colors hover:border-amber/50 hover:text-text"
          title="If you like this or if it helped you, give us a GitHub star">
          <GithubLogo size={16} weight="fill" className="text-text" />
          <span className="hidden sm:inline">If it helped you, give us a GitHub star</span>
          <span className="sm:hidden">Star us</span>
          <Star size={14} weight="fill" className="text-amber transition-transform group-hover:scale-110" />
        </motion.a>
      </div>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 }}
        className="font-mono text-[12px] uppercase tracking-[0.3em] text-amber/80">MAKAUT / WBUT · Semester 4</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ ...spring, delay: 0.08 }}
        className="mt-2 font-display text-5xl font-medium leading-[0.98] tracking-tight md:text-6xl">
        Exam<span className="text-amber">.</span>Quest
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18 }}
        className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted">
        Every idea is illustrated with an interactive you can play with, then you drill the most repeated previous-year questions until they stick.
      </motion.p>

      {lastSub && (
        <motion.button
          onClick={() => openSubject(last.subject, { name: last.route, params: { ch: last.ch, i: last.i } })}
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ ...spring, delay: 0.2 }}
          whileHover={{ y: -2 }}
          className="group mt-8 flex w-full items-center gap-4 rounded-[var(--radius-card)] border border-amber/30 bg-gradient-to-r from-amber/[0.13] to-amber/[0.03] p-5 text-left transition-all hover:border-amber/50">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-amber/25 bg-surface text-amber shadow-[0_2px_8px_-2px_rgba(30,25,15,0.12)]">
            <ArrowUUpLeft size={18} weight="bold" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber/80">Continue where you left off</p>
            <p className="mt-0.5 truncate font-display text-[16px] font-medium tracking-tight">{lastSub.name}</p>
          </div>
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-amber text-ink shadow-[0_3px_10px_-3px_rgba(20,15,5,0.28)] transition-transform group-hover:translate-x-0.5">
            <ArrowRight size={18} weight="bold" />
          </div>
        </motion.button>
      )}

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {main.map((s, i) => <SubjectCard key={s.key} s={s} i={i} openSubject={openSubject} />)}
      </div>

      {/* the odd one out: Chemistry is a Sem-2 back paper, kept in its own section */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-14">
        <p className="font-mono text-[12px] uppercase tracking-[0.3em] text-dim">Yeah, I had a back...</p>
        <h2 className="mt-1.5 font-display text-2xl font-medium tracking-tight text-muted">A leftover from an earlier semester</h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {back.map((s, i) => <SubjectCard key={s.key} s={s} i={i} openSubject={openSubject} />)}

          <motion.a
            href={REPO_URL} target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ ...spring, delay: 0.34 }}
            whileHover={{ y: -3 }}
            className="group flex items-center justify-center gap-3 rounded-[var(--radius-card)] border border-dashed border-line bg-surface/30 p-5 text-center transition-colors hover:border-amber/50">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-[var(--radius-tile)] border border-dashed border-line text-dim transition-colors group-hover:border-amber/50 group-hover:text-amber">
              <Plus size={24} weight="bold" />
            </div>
            <div className="min-w-0 text-left">
              <div className="flex items-center gap-1.5">
                <h3 className="font-display text-[18px] font-medium leading-tight tracking-tight text-muted transition-colors group-hover:text-text">Contribute</h3>
                <ArrowUpRight size={14} className="text-dim transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-amber" />
              </div>
              <p className="mt-1.5 text-[13px] leading-relaxed text-dim">Add your own subject or notes on GitHub.</p>
            </div>
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
