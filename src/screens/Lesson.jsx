import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { useContent, useNav } from "../App.jsx";
import { useProgress } from "../lib/game.js";
import { getLessons } from "../lib/lessons.js";
import { Rich } from "../lib/rich.jsx";
import TeachLadder from "../components/TeachLadder.jsx";
import { EXPLAINERS } from "../explainers/registry.js";

export default function Lesson({ ch, i = 0 }) {
  const content = useContent();
  const { go } = useNav();
  const { addXP } = useProgress();
  const c = content.chapters.find((x) => x.id === ch);
  const lessons = getLessons(content, ch);
  const lesson = lessons[i];
  if (!lesson) { go("zone", { ch }); return null; }
  const Explainer = lesson.explainer ? EXPLAINERS[lesson.explainer] : null;
  const last = i === lessons.length - 1;

  return (
    <div className="pt-8">
      <button onClick={() => go("zone", { ch })} className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-text">
        <ArrowLeft size={16} /> {c.title}
      </button>

      <p className="font-mono text-[12px] uppercase tracking-[0.28em] text-amber/80">Lesson {i + 1} of {lessons.length}</p>
      <h1 className="mt-2 font-display text-3xl font-medium leading-tight tracking-tight md:text-4xl">{lesson.title}</h1>

      {Explainer && (
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.05 }} className="mt-6">
          <Explainer />
        </motion.div>
      )}

      {lesson.teach
        ? <TeachLadder teach={lesson.teach} />
        : <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="mt-6 rounded-[var(--radius-card)] border border-line bg-surface/40 p-5">
            <Rich className="text-[15px] leading-relaxed text-muted">{lesson.body}</Rich>
          </motion.div>}

      <div className="mt-10 flex items-center justify-between">
        <button onClick={() => go("lesson", { ch, i: i - 1 })} disabled={i === 0}
          className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm text-muted transition-colors enabled:hover:text-text disabled:opacity-40">
          <ArrowLeft size={16} /> Prev
        </button>
        <div className="flex gap-1.5">
          {lessons.map((_, k) => <span key={k} className={"h-1.5 rounded-full transition-all " + (k === i ? "w-6 bg-amber" : "w-1.5 bg-line")} />)}
        </div>
        <button onClick={() => { if (last) { addXP(10); go("zone", { ch }); } else go("lesson", { ch, i: i + 1 }); }}
          className="inline-flex items-center gap-1.5 rounded-full bg-amber px-5 py-2 text-sm font-medium text-ink transition-transform active:scale-95">
          {last ? "Finish" : "Next"} <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
