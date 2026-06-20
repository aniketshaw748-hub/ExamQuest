import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// Euler's formula for a connected planar graph: V - E + F = 2. Pick a planar example
// and count vertices, edges and faces (regions, including the outer one).
const EXAMPLES = {
  triangle: { label: "triangle", V: 3, E: 3, F: 2, pts: [[70, 28], [30, 96], [110, 96]], edges: [[0, 1], [1, 2], [2, 0]] },
  square: { label: "square + diagonal", V: 4, E: 5, F: 3, pts: [[34, 32], [106, 32], [106, 104], [34, 104]], edges: [[0, 1], [1, 2], [2, 3], [3, 0], [0, 2]] },
  k4: { label: "K4 (planar)", V: 4, E: 6, F: 4, pts: [[70, 24], [30, 100], [110, 100], [70, 74]], edges: [[0, 1], [0, 2], [1, 2], [0, 3], [1, 3], [2, 3]] },
};

export default function PlanarExplainer() {
  const [key, setKey] = useState("square");
  const g = EXAMPLES[key];
  const euler = g.V - g.E + g.F;

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {Object.entries(EXAMPLES).map(([k, v]) => (
          <button key={k} onClick={() => setKey(k)} className={"rounded-full border px-2.5 py-1 text-[11px] " + (k === key ? "border-amber bg-amber/15 text-amber" : "border-line text-dim hover:text-muted")}>{v.label}</button>
        ))}
      </div>

      <div className="mt-4 flex flex-col items-center gap-5 sm:flex-row">
        <svg viewBox="0 0 140 130" className="w-[150px] shrink-0">
          {g.edges.map(([a, b], i) => <line key={i} x1={g.pts[a][0]} y1={g.pts[a][1]} x2={g.pts[b][0]} y2={g.pts[b][1]} stroke="#6aa6f0" strokeWidth="1.6" />)}
          {g.pts.map((p, i) => (
            <motion.circle key={i} cx={p[0]} cy={p[1]} r="9" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.05 }}
              fill="var(--color-amber)" fillOpacity="0.18" stroke="var(--color-amber)" strokeWidth="1.4" />
          ))}
        </svg>

        <div className="flex-1 text-[14px]">
          <div className="grid grid-cols-3 gap-2 text-center">
            <Stat label="V" value={g.V} />
            <Stat label="E" value={g.E} />
            <Stat label="F" value={g.F} />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <Tex>{`V - E + F = ${g.V} - ${g.E} + ${g.F} =`}</Tex>
            <span className="font-display text-2xl font-medium text-emerald">{euler}</span>
          </div>
          <p className="mt-2 text-[12px] text-muted">Always 2 for a connected planar graph. $K_5$ and $K_{3,3}$ break it, they are the smallest non-planar graphs.</p>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-[var(--radius-field)] border border-line bg-surface/40 p-2">
      <p className="font-mono text-[10px] text-dim">{label}</p>
      <p className="font-display text-lg font-medium text-amber">{value}</p>
    </div>
  );
}
