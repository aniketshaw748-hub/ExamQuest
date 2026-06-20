import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";
import { vpos, ekey, degrees } from "../lib/graph.js";

const N = 5;
const allEdges = (() => { const e = []; for (let a = 0; a < N; a++) for (let b = a + 1; b < N; b++) e.push(ekey(a, b)); return e; })();

// Handshaking lemma: toggle edges and watch the degree sum stay 2x the edge count,
// with the number of odd-degree vertices always even.
export default function GraphDegreeExplainer() {
  const [edges, setEdges] = useState(() => new Set(["0-1", "1-2", "2-3", "0-3", "1-3"]));
  const P = vpos(N);
  const deg = degrees(N, edges);
  const sum = deg.reduce((a, b) => a + b, 0);
  const odd = deg.filter((d) => d % 2 === 1).length;
  const toggle = (e) => setEdges((s) => { const x = new Set(s); x.has(e) ? x.delete(e) : x.add(e); return x; });

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <div className="mt-3 flex flex-col items-center gap-4 sm:flex-row sm:items-start">
        <svg viewBox="0 0 140 140" className="w-[160px] shrink-0">
          {[...edges].map((e) => { const [a, b] = e.split("-").map(Number); return <line key={e} x1={P[a].x} y1={P[a].y} x2={P[b].x} y2={P[b].y} stroke="#6aa6f0" strokeWidth="1.6" />; })}
          {P.map((p) => (
            <g key={p.i}>
              <circle cx={p.x} cy={p.y} r="11" fill="var(--color-amber)" fillOpacity="0.16" stroke="var(--color-amber)" strokeWidth="1.4" />
              <text x={p.x} y={p.y + 3.5} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="var(--color-amber)">{p.i}</text>
              <text x={p.x} y={p.y - 15} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="8.5" fill={deg[p.i] % 2 ? "var(--color-rose)" : "var(--color-dim)"}>d{deg[p.i]}</text>
            </g>
          ))}
        </svg>

        <div className="flex-1">
          <p className="mb-1.5 text-[11px] text-dim">toggle edges</p>
          <div className="flex flex-wrap gap-1.5">
            {allEdges.map((e) => (
              <button key={e} onClick={() => toggle(e)} className={"rounded-full border px-2 py-0.5 font-mono text-[11px] " + (edges.has(e) ? "border-[#6aa6f0] bg-[#6aa6f0]/15 text-[#6aa6f0]" : "border-line text-dim")}>{e}</button>
            ))}
          </div>
          <div className="mt-3 space-y-1 text-[13px]">
            <div><Tex>{`\\sum \\deg = ${deg.join("+")} = ${sum}`}</Tex></div>
            <div className="flex items-baseline gap-2">
              <Tex>{`2 \\times |E| = 2\\times ${edges.size} =`}</Tex>
              <motion.span key={sum} initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="font-display text-xl font-medium text-amber">{2 * edges.size}</motion.span>
            </div>
            <p className="text-[12px] text-muted">odd-degree vertices: <span className={odd % 2 ? "text-rose" : "text-emerald"}>{odd}</span> (always even)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
