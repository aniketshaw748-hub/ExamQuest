import { motion } from "motion/react";
import { Intersect, StackSimple, Hash, ToggleRight, Atom, Graph, ArrowRight, FireSimple, Flask, Lightning, Drop, Function, Thermometer, ArrowUUpLeft, YoutubeLogo, ArrowUpRight } from "@phosphor-icons/react";
import { useContent, useNav, useSubject } from "../App.jsx";
import { useProgress, topPYQs, masteryOf, CHAPTER_ART, freq, overallMastery, startedChapters } from "../lib/game.js";
import { getLessons } from "../lib/lessons.js";

const ICONS = { ch1: Intersect, ch2: StackSimple, ch3: Hash, ch4: ToggleRight, ch5: Atom, ch6: Graph, ch7: Flask, ch8: Lightning, ch9: Function, ch10: Drop, ch11: Thermometer };
const spring = { type: "spring", stiffness: 220, damping: 26 };

export default function Overworld() {
  const content = useContent();
  const { go } = useNav();
  const { key: subject, meta } = useSubject();
  const { mcq, seen } = useProgress();

  const overall = overallMastery(content, mcq);
  const started = startedChapters(content, mcq);
  const resume = seen?.ch && content.chapters.some((c) => c.id === seen.ch) ? seen : null;

  return (
    <div className="pt-10">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 }}
        className="font-mono text-[12px] uppercase tracking-[0.3em] text-amber/80">{meta.world}</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ ...spring, delay: 0.08 }}
        className="mt-2 whitespace-pre-line font-display text-5xl font-medium leading-[0.98] tracking-tight md:text-6xl">
        {meta.title}
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18 }}
        className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
        {meta.blurb}
      </motion.p>

      {/* prefer to learn by video? one topic-complete explainer playlist for this subject */}
      {meta.video && (
        <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          href={meta.video.url} target="_blank" rel="noopener noreferrer"
          className="group mt-4 inline-flex items-center gap-2 rounded-full border border-line bg-surface/50 px-3.5 py-1.5 text-[13px] text-muted transition-colors hover:border-rose/40 hover:text-text">
          <YoutubeLogo size={17} weight="fill" className="text-rose" />
          Prefer video? Watch the {meta.video.channel} playlist
          <ArrowUpRight size={13} className="text-dim transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </motion.a>
      )}

      {/* subject progress + resume */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ ...spring, delay: 0.22 }}
        className="mt-7 flex flex-col gap-3 rounded-[var(--radius-card)] border border-line bg-surface/50 p-4 backdrop-blur-sm sm:flex-row sm:items-center">
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between text-[13px]">
            <span className="text-muted">{started > 0 ? `${overall}% mastered` : "Not started yet"}</span>
            <span className="text-dim">{started} / {content.chapters.length} chapters</span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-raised">
            <motion.div className="h-full rounded-full bg-amber" initial={{ width: 0 }} animate={{ width: overall + "%" }} transition={spring} />
          </div>
        </div>
        <button onClick={() => go(resume ? resume.route : "zone", { ch: resume ? resume.ch : content.chapters[0].id, i: resume?.i || 0 })}
          className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-amber px-5 py-2.5 text-sm font-medium text-ink transition-transform active:scale-95">
          {resume ? <><ArrowUUpLeft size={16} weight="bold" /> Continue</> : <>Start chapter 1 <ArrowRight size={16} weight="bold" /></>}
        </button>
      </motion.div>

      <div className="mt-8 space-y-3">
        {content.chapters.map((ch, i) => {
          const Icon = ICONS[ch.id] || Intersect;
          const art = (subject === "dmaths" && CHAPTER_ART[ch.id]) || { tag: "" };
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
                  {art.tag && <><span className="text-[11px] text-dim">·</span><span className="text-[12px] text-muted">{art.tag}</span></>}
                </div>
                <h3 className="mt-0.5 truncate font-display text-[19px] font-medium tracking-tight">{ch.title}</h3>
                <div className="mt-1 flex items-center gap-3 text-[12px] text-dim">
                  <span>{getLessons(content, ch.id, subject).length} lessons</span>
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
