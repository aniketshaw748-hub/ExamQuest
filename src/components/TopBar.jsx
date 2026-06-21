import { motion } from "motion/react";
import { Sparkle, CaretLeft } from "@phosphor-icons/react";
import { useProgress, level, levelFloor } from "../lib/game.js";
import { useNav, useSubject } from "../App.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

export default function TopBar() {
  const { xp } = useProgress();
  const { go, exitSubject } = useNav();
  const { meta } = useSubject();
  const l = level(xp);
  const into = xp - levelFloor(l), span = levelFloor(l + 1) - levelFloor(l);
  const pct = Math.min(100, Math.round((into / span) * 100));

  return (
    <header className="sticky top-0 z-20 px-5 pt-4">
      <div className="flex items-center gap-3 rounded-[16px] border border-line bg-surface/70 px-4 py-2.5 backdrop-blur-md">
        <button onClick={exitSubject} title="All subjects" className="inline-flex items-center gap-1 font-display text-[15px] font-medium tracking-tight text-dim transition-colors hover:text-text">
          <CaretLeft size={13} weight="bold" />Quest<span className="text-amber">.</span>
        </button>
        <button onClick={() => go("overworld")} className="hidden truncate text-xs text-muted transition-colors hover:text-text sm:block">{meta.name}</button>
        <div className="flex-1" />
        <div className="flex items-center gap-2 text-xs text-muted">
          <span>Lv</span><b className="text-text tabular-nums">{l}</b>
        </div>
        <div className="h-1.5 w-28 overflow-hidden rounded-full bg-raised">
          <motion.div className="h-full rounded-full bg-amber" initial={false} animate={{ width: pct + "%" }} transition={{ type: "spring", stiffness: 120, damping: 20 }} />
        </div>
        <div className="flex items-center gap-1 text-xs text-muted">
          <Sparkle size={14} weight="fill" className="text-amber" />
          <b className="text-text tabular-nums">{xp}</b>
        </div>
        <ThemeToggle className="h-8 w-8" />
      </div>
    </header>
  );
}
