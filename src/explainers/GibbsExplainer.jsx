import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// Spontaneity is set by the Gibbs free energy: dG = dH - T dS. A reaction is spontaneous when
// dG < 0. Because the TdS term grows with temperature, raising T can flip the sign at the
// crossover temperature T* = dH/dS. Plot dG against T and slide everything.
export default function GibbsExplainer() {
  const [dH, setDH] = useState(40);   // kJ/mol
  const [dS, setDS] = useState(120);  // J/(K mol)
  const [T, setT] = useState(500);    // K
  const G = (t) => dH - (t * dS) / 1000;
  const W = 300, x0 = 34, yZero = 82, scale = 0.5;
  const xOf = (t) => x0 + (t / 1000) * (W - x0 - 10);
  const yOf = (g) => Math.max(14, Math.min(152, yZero - g * scale));
  const gNow = G(T);
  const spont = gNow < -0.5 ? { t: "spontaneous", c: "#34d39a" } : gNow > 0.5 ? { t: "non-spontaneous", c: "var(--color-rose)" } : { t: "equilibrium", c: "var(--color-amber)" };
  const Tstar = dS !== 0 ? Math.round((1000 * dH) / dS) : null;

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
      <p className="mt-2 text-[13px] text-muted">Gibbs free energy <Tex>{`\\Delta G = \\Delta H - T\\,\\Delta S`}</Tex>. Spontaneous when <Tex>{`\\Delta G < 0`}</Tex>.</p>

      <svg viewBox="0 0 300 162" className="mt-3 w-full">
        <line x1={x0} y1={yZero} x2={W - 6} y2={yZero} stroke="var(--color-line)" strokeWidth="1" strokeDasharray="3 3" />
        <text x={x0 + 2} y={yZero - 4} fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-dim)">ΔG = 0</text>
        <line x1={x0} y1="8" x2={x0} y2="156" stroke="var(--color-line)" strokeWidth="1" />
        <text x="6" y="16" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-dim)">ΔG</text>
        <text x={W - 6} y="156" fontSize="8" textAnchor="end" fontFamily="var(--font-mono)" fill="var(--color-dim)">T (K)</text>
        <line x1={xOf(0)} y1={yOf(G(0))} x2={xOf(1000)} y2={yOf(G(1000))} stroke="var(--color-amber)" strokeWidth="1.8" />
        {Tstar !== null && Tstar > 0 && Tstar < 1000 && (
          <g><circle cx={xOf(Tstar)} cy={yZero} r="3" fill="var(--color-amber)" />
            <text x={xOf(Tstar)} y={yZero + 14} fontSize="7.5" textAnchor="middle" fontFamily="var(--font-mono)" fill="var(--color-amber)">T* = {Tstar}K</text></g>
        )}
        <motion.circle cx={xOf(T)} animate={{ cy: yOf(gNow) }} transition={{ type: "spring", stiffness: 200, damping: 22 }} r="4.5" fill={spont.c} stroke="var(--color-ink)" strokeWidth="1" />
      </svg>

      <div className="mt-1 flex items-center gap-2 text-[13px]">
        <span className="font-mono text-[12px] text-muted">ΔG({T}K) = {gNow.toFixed(1)} kJ</span>
        <span className="ml-auto rounded-full px-3 py-1 font-mono text-[11px] uppercase" style={{ color: spont.c, border: `1px solid ${spont.c}66`, background: `${spont.c}1a` }}>{spont.t}</span>
      </div>

      <div className="mt-2 grid grid-cols-3 gap-2">
        <label className="block"><span className="text-[11px] text-muted">ΔH = {dH}</span>
          <input type="range" min={-80} max={80} step={10} value={dH} onChange={(e) => setDH(+e.target.value)} className="mt-1 w-full accent-amber" /></label>
        <label className="block"><span className="text-[11px] text-muted">ΔS = {dS}</span>
          <input type="range" min={-200} max={200} step={20} value={dS} onChange={(e) => setDS(+e.target.value)} className="mt-1 w-full accent-amber" /></label>
        <label className="block"><span className="text-[11px] text-muted">T = {T}</span>
          <input type="range" min={0} max={1000} step={25} value={T} onChange={(e) => setT(+e.target.value)} className="mt-1 w-full accent-amber" /></label>
      </div>
      <p className="mt-3 text-[12px] text-muted">An endothermic (ΔH &gt; 0) reaction with positive ΔS becomes spontaneous only above T* = ΔH/ΔS, where the entropy term finally wins. That is why some reactions only go when heated.</p>
    </div>
  );
}
