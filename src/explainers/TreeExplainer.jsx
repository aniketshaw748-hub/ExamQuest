import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// A tree on n vertices always has exactly n-1 edges: every new vertex adds one edge
// to attach it, and adding any further edge would create a cycle.
export default function TreeExplainer() {
  const [n, setN] = useState(6);
  // simple radial-ish tree layout: vertex i (i>=1) attaches to parent floor((i-1)/2)
  const W = 300, levelH = 34;
  const nodes = Array.from({ length: n }, (_, i) => {
    const depth = Math.floor(Math.log2(i + 1));
    const levelStart = (1 << depth) - 1, idxInLevel = i - levelStart, levelCount = 1 << depth;
    return { i, x: ((idxInLevel + 0.5) / levelCount) * (W - 30) + 15, y: 20 + depth * levelH, parent: i === 0 ? null : Math.floor((i - 1) / 2) };
  });

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
      <div className="mt-3"><Slider label="vertices n" value={n} set={setN} min={1} max={12} /></div>

      <svg viewBox={`0 0 ${W} ${20 + Math.ceil(Math.log2(n + 1)) * levelH + 10}`} className="mt-3 w-full">
        {nodes.map((nd) => nd.parent != null && (
          <motion.line key={"e" + nd.i} x1={nodes[nd.parent].x} y1={nodes[nd.parent].y} x2={nd.x} y2={nd.y}
            stroke="#6aa6f0" strokeWidth="1.6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: nd.i * 0.05 }} />
        ))}
        {nodes.map((nd) => (
          <motion.g key={nd.i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: nd.i * 0.05, type: "spring", stiffness: 300, damping: 18 }}>
            <circle cx={nd.x} cy={nd.y} r="9" fill="var(--color-amber)" fillOpacity="0.16" stroke="var(--color-amber)" strokeWidth="1.4" />
            <text x={nd.x} y={nd.y + 3} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="8.5" fill="var(--color-amber)">{nd.i}</text>
          </motion.g>
        ))}
      </svg>

      <div className="mt-2 flex items-baseline gap-2 text-[14px]">
        <Tex>{`n = ${n} \\Rightarrow \\text{edges} = n-1 =`}</Tex>
        <span className="font-display text-xl font-medium text-amber">{Math.max(n - 1, 0)}</span>
      </div>
      <p className="mt-2 text-[12px] text-muted">A tree is connected and acyclic. Any one extra edge makes a cycle; removing any edge disconnects it. A spanning tree of a connected graph keeps all $n$ vertices with exactly $n-1$ edges.</p>
    </div>
  );
}

function Slider({ label, value, set, min, max }) {
  return (
    <label className="block">
      <span className="text-[12px] text-muted">{label} = <b className="text-text tabular-nums">{value}</b></span>
      <input type="range" min={min} max={max} step={1} value={value} onChange={(e) => set(+e.target.value)} className="mt-1.5 w-full accent-amber" />
    </label>
  );
}
