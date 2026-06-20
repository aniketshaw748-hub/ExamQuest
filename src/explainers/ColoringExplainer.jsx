import { useState } from "react";
import { motion } from "motion/react";
import { Tex, Rich } from "../lib/rich.jsx";
import { vpos } from "../lib/graph.js";

// chromatic number for the families the exam asks about
const FAMILIES = {
  complete: { label: "complete K5", n: 5, edges: "all", chi: 5, note: "every pair adjacent, so all colours differ" },
  cycleEven: { label: "cycle C6", n: 6, edges: "cycle", chi: 2, note: "even cycle alternates two colours" },
  cycleOdd: { label: "cycle C5", n: 5, edges: "cycle", chi: 3, note: "odd cycle needs a third colour to close" },
  bipartite: { label: "bipartite", n: 6, edges: "bip", chi: 2, note: "two sides, edges only across, so 2 colours" },
};
const PAL = ["#f6b53d", "#6aa6f0", "#34d39a", "#fb7185", "#a78bfa"];

function buildEdges(kind, n) {
  const E = [];
  if (kind === "all") { for (let a = 0; a < n; a++) for (let b = a + 1; b < n; b++) E.push([a, b]); }
  else if (kind === "cycle") { for (let i = 0; i < n; i++) E.push([i, (i + 1) % n]); }
  else if (kind === "bip") { const L = [0, 1, 2], R = [3, 4, 5]; for (const a of L) for (const b of R) if ((a + b) % 2 === 0) E.push([a, b]); E.push([0, 3], [1, 4], [2, 5]); }
  return E;
}
// greedy proper colouring just to render a valid assignment
function colour(n, E, chi) {
  const adj = Array.from({ length: n }, () => new Set());
  E.forEach(([a, b]) => { adj[a].add(b); adj[b].add(a); });
  const col = Array(n).fill(-1);
  for (let v = 0; v < n; v++) { const used = new Set([...adj[v]].map((u) => col[u])); let c = 0; while (used.has(c)) c++; col[v] = Math.min(c, chi - 1); }
  return col;
}

export default function ColoringExplainer() {
  const [key, setKey] = useState("cycleOdd");
  const f = FAMILIES[key];
  const P = vpos(f.n);
  const E = buildEdges(f.edges === "all" ? "all" : f.edges === "cycle" ? "cycle" : "bip", f.n);
  const col = colour(f.n, E, f.chi);

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {Object.entries(FAMILIES).map(([k, v]) => (
          <button key={k} onClick={() => setKey(k)} className={"rounded-full border px-2.5 py-1 text-[11px] " + (k === key ? "border-amber bg-amber/15 text-amber" : "border-line text-dim hover:text-muted")}>{v.label}</button>
        ))}
      </div>

      <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
        <svg viewBox="0 0 140 140" className="w-[160px] shrink-0">
          {E.map(([a, b], i) => <line key={i} x1={P[a].x} y1={P[a].y} x2={P[b].x} y2={P[b].y} stroke="var(--color-line)" strokeWidth="1.4" />)}
          {P.map((p) => (
            <motion.circle key={p.i} cx={p.x} cy={p.y} r="10" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: p.i * 0.05 }}
              fill={PAL[col[p.i]]} fillOpacity="0.85" stroke={PAL[col[p.i]]} strokeWidth="1.5" />
          ))}
        </svg>
        <div className="flex-1">
          <div className="flex items-baseline gap-2">
            <span className="text-[13px] text-dim">chromatic number</span>
            <Tex>{`\\chi =`}</Tex>
            <motion.span key={f.chi} initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="font-display text-3xl font-medium text-amber">{f.chi}</motion.span>
          </div>
          <p className="mt-2 text-[13px] text-muted">{f.note}.</p>
          <p className="mt-2 text-[12px] text-dim"><Rich inline>{`Adjacent vertices must differ. $\\chi$ is the fewest colours that works: bipartite and trees are 2, $K_n$ is $n$, a cycle is 2 (even) or 3 (odd).`}</Rich></p>
        </div>
      </div>
    </div>
  );
}
