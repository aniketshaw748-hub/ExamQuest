import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// Work done in expansion is the area under the path on a P-V diagram. A reversible (quasi-static)
// expansion follows the isotherm and does the maximum work; an irreversible expansion against a
// constant lower external pressure does less (a smaller rectangle).
export default function ReversibleExplainer() {
  const [mode, setMode] = useState("rev");
  const W = 300, H = 150, x0 = 34, y0 = 130;
  const V1 = 1, V2 = 3, k = 90; // P = k / V (isotherm), arbitrary units
  const xOf = (V) => x0 + ((V - 0.6) / 3) * (W - x0 - 10);
  const yOf = (P) => y0 - (P / 110) * (y0 - 12);
  const iso = Array.from({ length: 40 }, (_, i) => { const V = V1 + (i / 39) * (V2 - V1); return `${i ? "L" : "M"}${xOf(V).toFixed(1)} ${yOf(k / V).toFixed(1)}`; }).join(" ");
  const Pext = k / V2; // irreversible expands against the final pressure
  // shaded work area
  const revArea = `M${xOf(V1)} ${y0} ${iso.replace(/^M/, "L")} L${xOf(V2)} ${y0} Z`;
  const irrArea = `M${xOf(V1)} ${y0} L${xOf(V1)} ${yOf(Pext)} L${xOf(V2)} ${yOf(Pext)} L${xOf(V2)} ${y0} Z`;

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
        <div className="flex gap-1.5">
          <button onClick={() => setMode("rev")} className={"rounded-full border px-2.5 py-1 text-[11px] " + (mode === "rev" ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>reversible</button>
          <button onClick={() => setMode("irr")} className={"rounded-full border px-2.5 py-1 text-[11px] " + (mode === "irr" ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>irreversible</button>
        </div>
      </div>

      <svg viewBox="0 0 300 150" className="mt-3 w-full">
        <line x1={x0} y1="10" x2={x0} y2={y0} stroke="var(--color-line)" strokeWidth="1" />
        <line x1={x0} y1={y0} x2={W - 6} y2={y0} stroke="var(--color-line)" strokeWidth="1" />
        <text x="8" y="18" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-dim)">P</text>
        <text x={W - 6} y={y0 - 4} fontSize="8" textAnchor="end" fontFamily="var(--font-mono)" fill="var(--color-dim)">V</text>
        <motion.path key={mode} d={mode === "rev" ? revArea : irrArea} fill="rgba(246,181,61,0.16)" stroke="none"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} />
        <path d={iso} fill="none" stroke="var(--color-muted)" strokeWidth="1.4" strokeDasharray={mode === "rev" ? "0" : "3 3"} />
        {mode === "irr" && <line x1={xOf(V1)} y1={yOf(Pext)} x2={xOf(V2)} y2={yOf(Pext)} stroke="var(--color-amber)" strokeWidth="1.6" />}
        <text x={xOf(V1)} y={y0 + 12} fontSize="8" textAnchor="middle" fontFamily="var(--font-mono)" fill="var(--color-dim)">V1</text>
        <text x={xOf(V2)} y={y0 + 12} fontSize="8" textAnchor="middle" fontFamily="var(--font-mono)" fill="var(--color-dim)">V2</text>
      </svg>

      <p className="mt-1 text-[13px] text-muted">{mode === "rev"
        ? <>Work = the area under the smooth isotherm. A reversible expansion does the <span className="text-amber">maximum</span> possible work.</>
        : <>Expanding suddenly against the lower external pressure does less work: the shaded rectangle is smaller than the area under the curve.</>}</p>
      <p className="mt-2 text-[12px] text-muted">Reversible (quasi-static) means the system stays at equilibrium at every step, so it extracts the most work. Every real, finite-rate process is irreversible and falls short.</p>
    </div>
  );
}
