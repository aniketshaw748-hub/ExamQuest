import { useState, useMemo } from "react";
import { motion } from "motion/react";

// Dijkstra's shortest paths from A on a small weighted graph. Each step finalises the
// nearest unvisited node and relaxes its neighbours. Distances only ever shrink.
const NODES = [{ id: "A", x: 40, y: 80 }, { id: "B", x: 130, y: 38 }, { id: "C", x: 120, y: 122 }, { id: "D", x: 222, y: 70 }, { id: "E", x: 282, y: 120 }];
const EDGES = [["A", "B", 4], ["A", "C", 1], ["C", "B", 2], ["C", "D", 5], ["B", "D", 1], ["D", "E", 3], ["B", "E", 7]];
const POS = Object.fromEntries(NODES.map((n) => [n.id, n]));
const INF = Infinity;

function steps() {
  const dist = {}; NODES.forEach((n) => (dist[n.id] = INF)); dist.A = 0;
  const visited = new Set(), out = [{ pick: null, dist: { ...dist }, visited: new Set() }];
  while (visited.size < NODES.length) {
    let u = null, best = INF;
    for (const n of NODES) if (!visited.has(n.id) && dist[n.id] < best) { best = dist[n.id]; u = n.id; }
    if (u == null) break;
    visited.add(u);
    for (const [a, b, w] of EDGES) for (const [x, y] of [[a, b], [b, a]]) if (x === u && dist[u] + w < dist[y]) dist[y] = dist[u] + w;
    out.push({ pick: u, dist: { ...dist }, visited: new Set(visited) });
  }
  return out;
}

export default function DijkstraExplainer() {
  const S = useMemo(steps, []);
  const [i, setI] = useState(0);
  const cur = S[i];
  const done = i >= S.length - 1;

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
      <p className="mt-2 text-[12px] text-muted">Shortest paths from <span className="font-mono text-amber">A</span>. Finalised nodes glow amber; the label is the best distance so far.</p>

      <svg viewBox="0 0 320 160" className="mt-2 w-full">
        {EDGES.map(([a, b, w], k) => {
          const p = POS[a], q = POS[b];
          return (
            <g key={k}>
              <line x1={p.x} y1={p.y} x2={q.x} y2={q.y} stroke="var(--color-line)" strokeWidth="1.4" />
              <text x={(p.x + q.x) / 2} y={(p.y + q.y) / 2 - 3} textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill="var(--color-dim)">{w}</text>
            </g>
          );
        })}
        {NODES.map((n) => {
          const vis = cur.visited.has(n.id), picked = cur.pick === n.id, d = cur.dist[n.id];
          return (
            <g key={n.id}>
              <motion.circle cx={n.x} cy={n.y} r="13" animate={{ scale: picked ? 1.12 : 1 }}
                fill={vis ? "var(--color-amber)" : "var(--color-surface)"} fillOpacity={vis ? 0.9 : 1} stroke={vis ? "var(--color-amber)" : "#6aa6f0"} strokeWidth="1.5" />
              <text x={n.x} y={n.y + 3.5} textAnchor="middle" fontSize="11" fontFamily="var(--font-mono)" fill={vis ? "var(--color-ink)" : "var(--color-text)"}>{n.id}</text>
              <text x={n.x} y={n.y - 18} textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill="var(--color-amber)">{d === INF ? "∞" : d}</text>
            </g>
          );
        })}
      </svg>

      <div className="mt-2 flex items-center gap-2">
        {!done ? (
          <button onClick={() => setI((k) => k + 1)} className="rounded-full bg-amber px-4 py-1.5 text-[13px] font-medium text-ink transition-transform active:scale-95">
            finalise nearest node
          </button>
        ) : (
          <span className="text-[13px] text-emerald">All distances final: B=3, C=1, D=4, E=7.</span>
        )}
        <button onClick={() => setI(0)} className="ml-auto text-[12px] text-dim hover:text-muted">reset</button>
      </div>
      <p className="mt-3 text-[12px] text-muted">Dijkstra always finalises the closest unfinished node, then relaxes its edges. It needs non-negative weights; with negative edges use Bellman-Ford.</p>
    </div>
  );
}
