import { useState } from "react";
import { Tex, Rich } from "../lib/rich.jsx";
import { vpos, ekey } from "../lib/graph.js";

const N = 4;
const allEdges = (() => { const e = []; for (let a = 0; a < N; a++) for (let b = a + 1; b < N; b++) e.push(ekey(a, b)); return e; })();

// A graph and its adjacency matrix are the same information. Toggle an edge and the
// symmetric pair of 1s flips with it.
export default function AdjMatrixExplainer() {
  const [edges, setEdges] = useState(() => new Set(["0-1", "1-2", "2-3", "0-2"]));
  const P = vpos(N, 60, 60, 44);
  const adj = Array.from({ length: N }, (_, i) => Array.from({ length: N }, (_, j) => (edges.has(ekey(i, j)) && i !== j ? 1 : 0)));
  const toggle = (e) => setEdges((s) => { const x = new Set(s); x.has(e) ? x.delete(e) : x.add(e); return x; });

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <div className="mt-3 flex flex-col items-center gap-5 sm:flex-row sm:items-start">
        <svg viewBox="0 0 120 120" className="w-[130px] shrink-0">
          {[...edges].map((e) => { const [a, b] = e.split("-").map(Number); return <line key={e} x1={P[a].x} y1={P[a].y} x2={P[b].x} y2={P[b].y} stroke="#6aa6f0" strokeWidth="1.6" />; })}
          {P.map((p) => (
            <g key={p.i}>
              <circle cx={p.x} cy={p.y} r="11" fill="var(--color-amber)" fillOpacity="0.16" stroke="var(--color-amber)" strokeWidth="1.4" />
              <text x={p.x} y={p.y + 3.5} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="var(--color-amber)">{p.i}</text>
            </g>
          ))}
        </svg>

        <div>
          <table className="border-collapse text-center font-mono text-[12px]">
            <thead><tr><th className="px-2 py-1 text-dim"></th>{adj.map((_, j) => <th key={j} className="px-2 py-1 text-dim">{j}</th>)}</tr></thead>
            <tbody>
              {adj.map((row, i) => (
                <tr key={i}><th className="px-2 py-1 text-dim">{i}</th>{row.map((v, j) => <td key={j} className={"px-2 py-1 " + (v ? "font-bold text-amber" : "text-dim/60")}>{v}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {allEdges.map((e) => (
          <button key={e} onClick={() => toggle(e)} className={"rounded-full border px-2 py-0.5 font-mono text-[11px] " + (edges.has(e) ? "border-[#6aa6f0] bg-[#6aa6f0]/15 text-[#6aa6f0]" : "border-line text-dim")}>{e}</button>
        ))}
      </div>
      <p className="mt-3 text-[12px] text-muted"><Rich inline>{`The matrix is symmetric for an undirected graph ($A_{ij}=A_{ji}$); the diagonal is 0 with no self-loops. Row sums are the vertex degrees.`}</Rich></p>
    </div>
  );
}
