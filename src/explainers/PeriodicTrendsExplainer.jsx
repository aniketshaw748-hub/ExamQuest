import { useState } from "react";
import { Tex } from "../lib/rich.jsx";

// The periodic trends all come from two competing pulls: nuclear charge rising across a period
// (electrons held tighter) and new shells added down a group (electrons further out). Pick a
// property to see which way it increases across the table.
const PROPS = {
  "atomic radius": { dir: "down and to the left", corner: "bl", note: "More shells down a group enlarge atoms; more nuclear charge across a period shrinks them." },
  "ionization energy": { dir: "up and to the right", corner: "tr", note: "Tightly held electrons (small, high-charge atoms, top right) are hardest to remove." },
  "electronegativity": { dir: "up and to the right", corner: "tr", note: "Small atoms with high nuclear charge (top right, e.g. F) pull bonding electrons hardest." },
};
const COLS = 5, ROWS = 4;

export default function PeriodicTrendsExplainer() {
  const [prop, setProp] = useState("atomic radius");
  const p = PROPS[prop];
  const valueOf = (r, c) => p.corner === "bl" ? r + (COLS - 1 - c) : (ROWS - 1 - r) + c;
  const maxV = (ROWS - 1) + (COLS - 1);
  const x0 = 34, y0 = 8, cw = 30, ch = 24;
  const arrow = p.corner === "bl"
    ? { x1: x0 + COLS * cw - 6, y1: y0 + 8, x2: x0 + 8, y2: y0 + ROWS * ch - 8 }
    : { x1: x0 + 8, y1: y0 + ROWS * ch - 8, x2: x0 + COLS * cw - 6, y2: y0 + 8 };

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
        <div className="flex gap-1.5">
          {Object.keys(PROPS).map((k) => (
            <button key={k} onClick={() => setProp(k)} className={"rounded-full border px-2 py-1 text-[10px] " + (k === prop ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>{k.split(" ")[0]}</button>
          ))}
        </div>
      </div>

      <svg viewBox="0 0 200 112" className="mt-3 w-full">
        <defs>
          <marker id="ptArrow" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="var(--color-amber)" /></marker>
        </defs>
        {Array.from({ length: ROWS }, (_, r) => Array.from({ length: COLS }, (_, c) => (
          <rect key={r + "-" + c} x={x0 + c * cw} y={y0 + r * ch} width={cw - 2} height={ch - 2} rx="2"
            fill="var(--color-amber)" fillOpacity={0.08 + 0.62 * (valueOf(r, c) / maxV)} stroke="var(--color-line)" strokeWidth="0.5" />
        )))}
        <line x1={arrow.x1} y1={arrow.y1} x2={arrow.x2} y2={arrow.y2} stroke="var(--color-amber)" strokeWidth="1.6" markerEnd="url(#ptArrow)" />
        <text x="6" y="20" fontSize="7" fontFamily="var(--font-mono)" fill="var(--color-dim)">group</text>
        <text x={x0} y="108" fontSize="7" fontFamily="var(--font-mono)" fill="var(--color-dim)">period across →</text>
      </svg>

      <p className="mt-1 text-[13px]"><span className="text-text">{prop}</span> <span className="text-muted">increases {p.dir} (toward the brightest cell).</span></p>
      <p className="mt-2 text-[12px] text-muted">{p.note}</p>
    </div>
  );
}
