import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// Intermolecular potential energy vs separation (Lennard-Jones shape): molecules repel hard when
// too close, attract weakly when apart, and sit most stably at the bottom of the well. A deeper
// well = a stronger force (London < dipole < hydrogen bond).
const LABEL = ["", "London / van der Waals (weak)", "London / van der Waals (weak)", "dipole-dipole", "hydrogen bond (strong)", "hydrogen bond (strong)"];

export default function LjPotentialExplainer() {
  const [eps, setEps] = useState(2);
  const W = 300, x0 = 26, yZero = 52, scale = 11;
  const xOf = (r) => x0 + ((r - 0.95) / (3.0 - 0.95)) * (W - x0 - 8);
  const yOf = (V) => Math.max(8, Math.min(150, yZero - V * scale));
  const V = (r) => 4 * eps * (Math.pow(1 / r, 12) - Math.pow(1 / r, 6));
  const pts = Array.from({ length: 90 }, (_, k) => 0.95 + (k / 89) * (3.0 - 0.95));
  const path = pts.map((r, k) => `${k ? "L" : "M"}${xOf(r).toFixed(1)} ${yOf(V(r)).toFixed(1)}`).join(" ");
  const re = Math.pow(2, 1 / 6); // equilibrium separation (sigma = 1)

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
      <p className="mt-2 text-[13px] text-muted">Potential energy <Tex>{`V(r) = 4\\varepsilon\\left[(\\sigma/r)^{12} - (\\sigma/r)^{6}\\right]`}</Tex> between two molecules a distance <Tex>{`r`}</Tex> apart.</p>

      <svg viewBox="0 0 300 165" className="mt-3 w-full">
        <line x1={x0} y1={yZero} x2={W - 6} y2={yZero} stroke="var(--color-line)" strokeWidth="1" strokeDasharray="3 3" />
        <text x={W - 6} y={yZero - 4} fontSize="8" textAnchor="end" fontFamily="var(--font-mono)" fill="var(--color-dim)">V = 0</text>
        <line x1={x0} y1="6" x2={x0} y2="158" stroke="var(--color-line)" strokeWidth="1" />
        <text x="6" y="14" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-dim)">energy</text>
        <text x={W - 6} y="158" fontSize="8" textAnchor="end" fontFamily="var(--font-mono)" fill="var(--color-dim)">distance r</text>
        <motion.path key={eps} d={path} fill="none" stroke="var(--color-amber)" strokeWidth="1.8"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5 }} />
        {/* equilibrium marker at the well minimum */}
        <circle cx={xOf(re)} cy={yOf(-eps)} r="3.5" fill="var(--color-amber)" />
        <line x1={xOf(re)} y1={yOf(-eps)} x2={xOf(re)} y2={yZero} stroke="var(--color-amber)" strokeWidth="0.8" strokeDasharray="2 2" />
        <text x={xOf(re) + 4} y={yOf(-eps) + 4} fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-amber)">most stable</text>
        <text x={x0 + 6} y="20" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-rose)">repulsion</text>
        <text x={W - 70} y={yZero + 22} fontSize="8" fontFamily="var(--font-mono)" fill="#34d39a">attraction</text>
      </svg>

      <div className="mt-2"><label className="block">
        <span className="text-[12px] text-muted">well depth <Tex>{`\\varepsilon`}</Tex> = bond strength: <b className="text-text">{LABEL[eps]}</b></span>
        <input type="range" min={1} max={5} step={1} value={eps} onChange={(e) => setEps(+e.target.value)} className="mt-1.5 w-full accent-amber" />
      </label></div>
      <p className="mt-3 text-[12px] text-muted">Too close and electron clouds repel (steep wall); far apart and the weak attraction fades to zero. The bottom of the well is the equilibrium separation. Hydrogen bonds dig a much deeper well than London forces, which is why water boils so high.</p>
    </div>
  );
}
