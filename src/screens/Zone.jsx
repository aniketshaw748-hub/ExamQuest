import { motion } from "motion/react";
import { ArrowLeft, BookOpen, Sword, Skull, ListChecks, ArrowRight } from "@phosphor-icons/react";
import { useContent, useNav, useSubject } from "../App.jsx";
import { useProgress, masteryOf, topPYQs, CHAPTER_ART } from "../lib/game.js";
import { getLessons } from "../lib/lessons.js";
import { getWalks } from "../lib/walks.js";
import ChapterMotif from "../components/ChapterMotif.jsx";

const spring = { type: "spring", stiffness: 220, damping: 24 };

export default function Zone({ ch }) {
  const content = useContent();
  const { go } = useNav();
  const { key: subject, meta } = useSubject();
  const { mcq } = useProgress();
  const c = content.chapters.find((x) => x.id === ch);
  const m = masteryOf(c, mcq);
  const art = (subject === "dmaths" && CHAPTER_ART[ch]) || { tag: "" };

  const walkN = getWalks(content, ch, subject).length;
  const tiles = [
    { id: "learn", icon: BookOpen, title: "Learn", desc: `${getLessons(content, ch, subject).length} guided lessons`, onClick: () => go("lesson", { ch, i: 0 }) },
    { id: "walk", icon: ListChecks, title: "Walkthroughs", desc: walkN ? `${walkN} PYQs, step by step` : "coming soon", onClick: () => walkN && go("walkthrough", { ch, i: 0 }) },
    { id: "skirmish", icon: Sword, title: "Skirmish", desc: `${c.mcqs.length} questions`, onClick: () => go("skirmish", { ch }) },
    { id: "boss", icon: Skull, title: "Boss", desc: `${topPYQs(c).length} repeated PYQs`, onClick: () => go("boss", { ch, i: 0 }) },
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

      <ChapterMotif ch={ch} />

      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {tiles.map((t, i) => (
          <motion.button key={t.id} onClick={t.onClick}
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ ...spring, delay: 0.1 + i * 0.08 }}
            whileHover={{ y: -4 }}
            className="group flex flex-col items-start rounded-[var(--radius-card)] border border-line bg-surface/60 p-5 text-left backdrop-blur-sm transition-colors hover:border-amber/40">
            <t.icon size={30} weight="duotone" className="text-amber" />
            <h3 className="mt-4 font-display text-[20px] font-medium tracking-tight">{t.title}</h3>
            <p className="mt-1 text-[13px] text-muted">{t.desc}</p>
            <ArrowRight size={18} className="mt-4 text-dim transition-all group-hover:translate-x-1 group-hover:text-amber" />
          </motion.button>
        ))}
      </div>
    </div>
  );
}
