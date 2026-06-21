import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// The Nernst equation shows how a cell's voltage depends on concentration:
// E = E0 - (0.059/n) log Q at 298 K. At Q = 1 the cell sits at its standard EMF; piling up
// products (Q > 1) lowers E, using them up (Q < 1) raises it.
export default function NernstExplainer() {
  const [logQ, setLogQ] = useState(0);
  const E0 = 1.1, n = 2;
  const E = (lq) => E0 - (0.059 / n) * lq;
  const W = 300, x0 = 36, yMid = 70, scale = 240;
  const xOf = (lq) => x0 + ((lq + 4) / 8) * (W - x0 - 10);
  const yOf = (e) => Math.max(12, Math.min(132, yMid - (e - E0) * scale));
  const eNow = E(logQ);

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
      <p className="mt-2 text-[13px] text-muted">Nernst equation: <Tex>{`E = E^{\\circ} - \\dfrac{0.059}{n}\\log Q`}</Tex> (at 298 K, here <Tex>{`E^{\\circ}=1.10\\,V,\\ n=2`}</Tex>).</p>

      <svg viewBox="0 0 300 145" className="mt-3 w-full">
        <line x1={x0} y1={yMid} x2={W - 6} y2={yMid} stroke="var(--color-line)" strokeWidth="1" strokeDasharray="3 3" />
        <text x={xOf(0) + 2} y={yMid - 4} fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-dim)">E°</text>
        <line x1={x0} y1="8" x2={x0} y2="135" stroke="var(--color-line)" strokeWidth="1" />
        <text x="6" y="16" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-dim)">E</text>
        <text x={W - 6} y="143" fontSize="8" textAnchor="end" fontFamily="var(--font-mono)" fill="var(--color-dim)">log Q</text>
        <line x1={xOf(-4)} y1={yOf(E(-4))} x2={xOf(4)} y2={yOf(E(4))} stroke="var(--color-amber)" strokeWidth="1.8" />
        <line x1={xOf(0)} y1="8" x2={xOf(0)} y2="135" stroke="var(--color-line)" strokeWidth="0.7" strokeDasharray="2 2" />
        <motion.circle cx={xOf(logQ)} animate={{ cy: yOf(eNow) }} transition={{ type: "spring", stiffness: 200, damping: 22 }} r="4.5" fill="var(--color-amber)" stroke="var(--color-ink)" strokeWidth="1" />
      </svg>

      <div className="mt-1 flex items-center gap-2 text-[13px]">
        <span className="font-mono text-[12px] text-muted">log Q = {logQ}</span>
        <span className="ml-auto font-mono text-[13px] text-amber">E = {eNow.toFixed(3)} V</span>
      </div>
      <label className="mt-2 block"><span className="text-[12px] text-muted">reaction quotient (more products to the right)</span>
        <input type="range" min={-4} max={4} step={0.5} value={logQ} onChange={(e) => setLogQ(+e.target.value)} className="mt-1.5 w-full accent-amber" /></label>
      <p className="mt-3 text-[12px] text-muted">At standard conditions (Q = 1, log Q = 0) the voltage equals E°. As products build up the cell voltage falls; when E reaches 0 the reaction is at equilibrium and the battery is dead.</p>
    </div>
  );
}
