import { useState } from "react";
import { motion } from "motion/react";

// A biogeochemical cycle recycles an element through the living and non-living world: the
// atmosphere feeds producers, which feed consumers, whose remains decomposers break down and
// return to the atmosphere. Carbon and nitrogen follow the same loop with different processes.
const NODES = [
  { x: 110, y: 32, label: "Atmosphere" },
  { x: 176, y: 96, label: "Producers" },
  { x: 110, y: 160, label: "Consumers" },
  { x: 44, y: 96, label: "Decomposers" },
];
const PROC = {
  Carbon: ["photosynthesis", "feeding", "death & waste", "respiration"],
  Nitrogen: ["N2 fixation", "feeding", "death & waste", "denitrification"],
};
const GAS = { Carbon: "CO₂", Nitrogen: "N₂" };

export default function NutrientCycleExplainer() {
  const [el, setEl] = useState("Carbon");
  const procs = PROC[el];

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
        <div className="flex gap-1.5">
          {Object.keys(PROC).map((k) => (
            <button key={k} onClick={() => setEl(k)} className={"rounded-full border px-2.5 py-1 text-[11px] " + (k === el ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>{k}</button>
          ))}
        </div>
      </div>

      <svg viewBox="0 0 220 192" className="mt-3 w-full">
        <defs><marker id="ncArrow" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="var(--color-amber)" /></marker></defs>
        {NODES.map((n, i) => {
          const m = NODES[(i + 1) % 4];
          const dx = m.x - n.x, dy = m.y - n.y, len = Math.hypot(dx, dy);
          const ux = dx / len, uy = dy / len;
          return <line key={"a" + i} x1={n.x + ux * 24} y1={n.y + uy * 24} x2={m.x - ux * 24} y2={m.y - uy * 24} stroke="var(--color-amber)" strokeWidth="1.3" strokeOpacity="0.7" markerEnd="url(#ncArrow)" />;
        })}
        {NODES.map((n, i) => {
          const m = NODES[(i + 1) % 4];
          return <text key={"l" + i} x={(n.x + m.x) / 2 + (i === 0 ? 8 : i === 2 ? -8 : 0)} y={(n.y + m.y) / 2 - 4} textAnchor="middle" fontSize="7" fontFamily="var(--font-mono)" fill="var(--color-dim)">{procs[i]}</text>;
        })}
        {NODES.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="22" fill="rgba(52,211,154,0.10)" stroke="var(--color-line)" strokeWidth="1" />
            <text x={n.x} y={n.y + 2} textAnchor="middle" fontSize="7.5" fontFamily="var(--font-mono)" fill="var(--color-muted)">{i === 0 ? GAS[el] : n.label.slice(0, 9)}</text>
          </g>
        ))}
        <motion.g animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "110px 96px" }}>
          <circle cx="110" cy="32" r="4" fill="var(--color-amber)" />
        </motion.g>
      </svg>

      <p className="mt-1 text-[13px] text-muted">The same atoms cycle endlessly: {el === "Carbon" ? "CO₂ is fixed by plants, eaten up the food chain, and returned by respiration and decomposition." : "N₂ is fixed into usable forms, passed up the food chain, and returned to the air by denitrification."}</p>
      <p className="mt-2 text-[12px] text-muted">Matter is recycled (unlike energy, which flows through once and is lost as heat). Decomposers close the loop, returning nutrients to the pool so producers can use them again.</p>
    </div>
  );
}
