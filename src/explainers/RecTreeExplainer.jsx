import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// Recursion tree for T(n) = 2T(n/2) + n. Each level has 2^i nodes of cost n/2^i, so every
// level costs n; there are log2(n)+1 levels, giving the total n*(log n + 1) = Theta(n log n).
export default function RecTreeExplainer() {
  const [levels, setLevels] = useState(1);
  const N = 8; // n = 8 -> 4 levels (i = 0..3)
  const maxLevels = Math.log2(N) + 1;
  const W = 300;

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
      <p className="mt-2 text-[13px] text-muted"><Tex>{`T(n) = 2\\,T(n/2) + n`}</Tex>, drawn for <Tex>{`n = 8`}</Tex>.</p>

      <svg viewBox={`0 0 ${W} ${20 + levels * 34}`} className="mt-3 w-full">
        {Array.from({ length: levels }).map((_, i) => {
          const count = 2 ** i, cost = N / count, y = 18 + i * 34;
          return (
            <g key={i}>
              {Array.from({ length: count }).map((_, j) => {
                const x = ((j + 0.5) / count) * (W - 24) + 12;
                return (
                  <g key={j}>
                    {i > 0 && <line x1={((Math.floor(j / 2) + 0.5) / (count / 2)) * (W - 24) + 12} y1={y - 34 + 9} x2={x} y2={y - 9} stroke="var(--color-line)" strokeWidth="1" />}
                    <motion.circle cx={x} cy={y} r="9" initial={{ scale: 0 }} animate={{ scale: 1 }} fill="var(--color-amber)" fillOpacity="0.16" stroke="var(--color-amber)" strokeWidth="1.3" />
                    <text x={x} y={y + 3} textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-amber)">{cost}</text>
                  </g>
                );
              })}
              <text x={W - 6} y={y + 3} textAnchor="end" fontSize="9" fontFamily="var(--font-mono)" fill="var(--color-dim)">{count}×{cost} = {N}</text>
            </g>
          );
        })}
      </svg>

      <div className="mt-2 flex items-center gap-2">
        {levels < maxLevels ? (
          <button onClick={() => setLevels((l) => l + 1)} className="rounded-full bg-amber px-4 py-1.5 text-[13px] font-medium text-ink transition-transform active:scale-95">expand a level</button>
        ) : (
          <span className="text-[13px] text-emerald"><Tex>{`${maxLevels}`}</Tex> levels, each costing <Tex>n</Tex>: total <Tex>{`n\\log n = \\Theta(n\\log n)`}</Tex>.</span>
        )}
        <button onClick={() => setLevels(1)} className="ml-auto text-[12px] text-dim hover:text-muted">reset</button>
      </div>
      <p className="mt-3 text-[12px] text-muted">Every level sums to <Tex>n</Tex> (more nodes, each cheaper). With <Tex>{`\\log_2 n + 1`}</Tex> levels the total is <Tex>{`\\Theta(n\\log n)`}</Tex>, the same answer the Master theorem gives.</p>
    </div>
  );
}
