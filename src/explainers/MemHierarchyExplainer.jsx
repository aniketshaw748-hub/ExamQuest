import { useState } from "react";
import { motion } from "motion/react";

// The memory hierarchy as a pyramid: fast and small at the top, slow and huge at the
// bottom. Each level caches the level below it. Click a tier for its speed and size.
const LEVELS = [
  { name: "Registers", speed: "~1 cycle", size: "~1 KB", col: "#34d39a" },
  { name: "L1 cache", speed: "~4 cycles", size: "~64 KB", col: "#6aa6f0" },
  { name: "L2 / L3 cache", speed: "~10-40 cycles", size: "a few MB", col: "var(--color-amber)" },
  { name: "Main memory (RAM)", speed: "~200 cycles", size: "GBs", col: "#fb923c" },
  { name: "Disk / SSD", speed: "~millions of cycles", size: "TBs", col: "#fb7185" },
];

export default function MemHierarchyExplainer() {
  const [sel, setSel] = useState(2);
  const W = 300, H = 30, gap = 4, cx = 150;
  const cur = LEVELS[sel];

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center">
        <svg viewBox={`0 0 ${W} ${LEVELS.length * (H + gap) + 6}`} className="w-[230px] shrink-0 self-center">
          {LEVELS.map((l, i) => {
            const y = 4 + i * (H + gap);
            const wTop = 50 + i * 46, wBot = 50 + (i + 1) * 46;
            const pts = `${cx - wTop / 2},${y} ${cx + wTop / 2},${y} ${cx + wBot / 2},${y + H} ${cx - wBot / 2},${y + H}`;
            const active = i === sel;
            return (
              <g key={i} onClick={() => setSel(i)} style={{ cursor: "pointer" }}>
                <motion.polygon points={pts} fill={l.col} fillOpacity={active ? 0.28 : 0.1} stroke={l.col} strokeWidth={active ? 2 : 1.2} />
                <text x={cx} y={y + H / 2 + 3.5} textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill={active ? l.col : "var(--color-muted)"}>{l.name}</text>
              </g>
            );
          })}
        </svg>

        <div className="flex-1">
          <div className="flex flex-wrap gap-1.5">
            {LEVELS.map((l, i) => (
              <button key={i} onClick={() => setSel(i)} className={"rounded-full border px-2.5 py-1 text-[11px] " + (i === sel ? "border-amber bg-amber/15 text-amber" : "border-line text-dim hover:text-muted")}>{l.name}</button>
            ))}
          </div>
          <motion.div key={sel} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="mt-3">
            <p className="font-display text-[15px] font-medium" style={{ color: cur.col }}>{cur.name}</p>
            <p className="mt-1 font-mono text-[12px] text-muted">access: {cur.speed}</p>
            <p className="font-mono text-[12px] text-muted">capacity: {cur.size}</p>
          </motion.div>
        </div>
      </div>
      <p className="mt-3 text-[12px] text-muted">No single memory is both fast and large. The hierarchy fakes one by keeping hot data near the top; each level is a cache for the slower, bigger level below it.</p>
    </div>
  );
}
