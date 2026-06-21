import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, BookOpen, Sword, Skull, ListChecks, ArrowRight, Lightbulb, X } from "@phosphor-icons/react";
import { useContent, useNav, useSubject } from "../App.jsx";
import { useProgress, masteryOf, topPYQs, CHAPTER_ART } from "../lib/game.js";
import { getLessons } from "../lib/lessons.js";
import { getWalks } from "../lib/walks.js";
import ChapterMotif from "../components/ChapterMotif.jsx";
import { EXPLAINERS } from "../explainers/registry.js";

const spring = { type: "spring", stiffness: 220, damping: 24 };

export default function Zone({ ch }) {
  const content = useContent();
  const { go } = useNav();
  const { key: subject, meta } = useSubject();
  const { mcq } = useProgress();
  const c = content.chapters.find((x) => x.id === ch);
  const m = masteryOf(c, mcq);
  const art = (subject === "dmaths" && CHAPTER_ART[ch]) || { tag: "" };

  const lessons = getLessons(content, ch, subject);
  // preview the chapter with one of its own lesson explainers (no bespoke per-chapter art)
  const previewKey = lessons.find((l) => l.explainer)?.explainer;
  const Preview = previewKey ? EXPLAINERS[previewKey] : null;

  const [hint, setHint] = useState(() => { try { return !localStorage.getItem("quest.hint.zone"); } catch { return true; } });
  const dismissHint = () => { try { localStorage.setItem("quest.hint.zone", "1"); } catch {} setHint(false); };

  const walkN = getWalks(content, ch, subject).length;
  const bossN = topPYQs(c).length;
  const tiles = [
    { id: "learn", icon: BookOpen, title: "Learn", desc: `${lessons.length} guided lessons`, onClick: () => go("lesson", { ch, i: 0 }) },
    { id: "walk", icon: ListChecks, title: "Walkthroughs", desc: walkN ? `${walkN} PYQs, step by step` : "none yet", disabled: !walkN, onClick: () => go("walkthrough", { ch, i: 0 }) },
    { id: "skirmish", icon: Sword, title: "Skirmish", desc: c.mcqs.length ? `${c.mcqs.length} quick questions` : "no quiz yet", disabled: !c.mcqs.length, onClick: () => go("skirmish", { ch }) },
    { id: "boss", icon: Skull, title: "Boss", desc: bossN ? `${bossN} repeated PYQs` : "none yet", disabled: !bossN, onClick: () => go("boss", { ch, i: 0 }) },
  ];

  return (
    <div className="pt-8">
      <button onClick={() => go("overworld")} className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-text">
        <ArrowLeft size={16} /> {meta.name}
      </button>

      <p className="font-mono text-[12px] uppercase tracking-[0.28em] text-amber/80">Chapter {c.num}{art.tag ? ` · ${art.tag}` : ""}</p>
      <h1 className="mt-2 font-display text-4xl font-medium tracking-tight md:text-5xl">{c.title}</h1>

      <div className="mt-4 flex items-center gap-3">
        <div className="h-1.5 w-44 overflow-hidden rounded-full bg-raised">
          <motion.div className="h-full rounded-full bg-amber" initial={{ width: 0 }} animate={{ width: m + "%" }} transition={spring} />
        </div>
        <span className="text-[13px] text-muted">{m}% mastered</span>
      </div>

      {Preview ? (
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className="mt-6">
          <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.25em] text-dim">A glance at this chapter</p>
          <Preview />
        </motion.div>
      ) : (
        <ChapterMotif ch={ch} />
      )}

      {hint && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="mt-8 flex items-start gap-3 rounded-[var(--radius-card)] border border-amber/30 bg-amber/[0.06] p-4">
          <Lightbulb size={20} weight="duotone" className="mt-0.5 shrink-0 text-amber" />
          <p className="min-w-0 flex-1 text-[13px] leading-relaxed text-muted">
            <span className="text-text">New here?</span> Start with <b className="font-medium text-amber">Learn</b> for the ideas, then test yourself. <b className="font-medium text-text">Skirmish</b> is a quick quiz, <b className="font-medium text-text">Boss</b> drills the questions the exam repeats most, and <b className="font-medium text-text">Walkthroughs</b> solve real past questions step by step.
          </p>
          <button onClick={dismissHint} aria-label="Dismiss tip" className="shrink-0 text-dim transition-colors hover:text-text">
            <X size={16} weight="bold" />
          </button>
        </motion.div>
      )}

      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {tiles.map((t, i) => (
          <motion.button key={t.id} onClick={t.disabled ? undefined : t.onClick} disabled={t.disabled} aria-disabled={t.disabled}
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ ...spring, delay: 0.1 + i * 0.08 }}
            whileHover={t.disabled ? undefined : { y: -4 }}
            className={"group flex flex-col items-start rounded-[var(--radius-card)] border p-5 text-left backdrop-blur-sm transition-colors " + (t.disabled ? "cursor-not-allowed border-line bg-surface/30 opacity-50" : "border-line bg-surface/60 hover:border-amber/40")}>
            <t.icon size={30} weight="duotone" className={t.disabled ? "text-dim" : "text-amber"} />
            <h3 className="mt-4 font-display text-[20px] font-medium tracking-tight">{t.title}</h3>
            <p className="mt-1 text-[13px] text-muted">{t.desc}</p>
            {!t.disabled && <ArrowRight size={18} className="mt-4 text-dim transition-all group-hover:translate-x-1 group-hover:text-amber" />}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
