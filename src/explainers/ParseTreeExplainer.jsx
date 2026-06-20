import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// Parse tree for the grammar S -> 0 S 1 | epsilon. Each S branches into 0, S, 1; the bottom
// S becomes epsilon. Reading the leaves left to right spells 0^n 1^n, the tree's "yield".
export default function ParseTreeExplainer() {
  const [n, setN] = useState(2);
  const W = 300, dy = 34, top = 16, cx = W / 2;
  const nodes = [], edges = [];
  for (let d = 0; d <= n; d++) {
    const sX = cx, sY = top + d * dy;
    nodes.push({ x: sX, y: sY, label: "S", v: true });
    if (d < n) {
      const off = (n - d) * 24;
      nodes.push({ x: sX - off, y: sY + dy, label: "0" });
      nodes.push({ x: sX + off, y: sY + dy, label: "1" });
      edges.push([sX, sY, sX - off, sY + dy], [sX, sY, sX, sY + dy], [sX, sY, sX + off, sY + dy]);
    } else {
      nodes.push({ x: sX, y: sY + dy, label: "ε" });
      edges.push([sX, sY, sX, sY + dy]);
    }
  }

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
      <p className="mt-2 text-[13px] text-muted">Parse tree for <Tex>{`S \\to 0S1 \\mid \\varepsilon`}</Tex>. Each <Tex>S</Tex> expands to <Tex>0\,S\,1</Tex>; the last one to <Tex>{`\\varepsilon`}</Tex>.</p>

      <svg viewBox={`0 0 ${W} ${top + (n + 1) * dy + 12}`} className="mt-3 w-full">
        {edges.map(([x1, y1, x2, y2], i) => <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--color-line)" strokeWidth="1.2" />)}
        {nodes.map((nd, i) => (
          <motion.g key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.04, type: "spring", stiffness: 300, damping: 18 }}>
            <circle cx={nd.x} cy={nd.y} r="10" fill={nd.v ? "rgba(246,181,61,0.16)" : "rgba(106,166,240,0.12)"} stroke={nd.v ? "var(--color-amber)" : "#6aa6f0"} strokeWidth="1.4" />
            <text x={nd.x} y={nd.y + 3.5} textAnchor="middle" fontSize="10" fontFamily="var(--font-mono)" fill={nd.v ? "var(--color-amber)" : "#6aa6f0"}>{nd.label}</text>
          </motion.g>
        ))}
      </svg>

      <div className="mt-2"><label className="block">
        <span className="text-[12px] text-muted">depth <Tex>{`n = `}</Tex><b className="text-text tabular-nums">{n}</b></span>
        <input type="range" min={1} max={4} step={1} value={n} onChange={(e) => setN(+e.target.value)} className="mt-1.5 w-full accent-amber" />
      </label></div>
      <p className="mt-2 text-[13px]">Yield (leaves, left to right): <span className="font-mono text-amber">{"0".repeat(n) + "1".repeat(n)}</span> = <Tex>{`0^{${n}}1^{${n}}`}</Tex>.</p>
      <p className="mt-2 text-[12px] text-muted">A parse tree shows the structure of a derivation. If a string has two different parse trees, the grammar is ambiguous.</p>
    </div>
  );
}
