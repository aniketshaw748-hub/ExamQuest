import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// Michaelis-Menten kinetics: v = Vmax[S]/(Km+[S]). The v-vs-[S] curve is a rectangular hyperbola;
// Vmax is the ceiling, Km is the [S] at half Vmax. Inhibitors shift Km and/or Vmax differently.
const MODES = {
  none: { Vmax: 100, Km: 22, t: "no inhibitor", note: "The baseline curve. Km is the [S] at half of Vmax, a measure of affinity (low Km = high affinity)." },
  competitive: { Vmax: 100, Km: 48, t: "competitive", note: "Binds the active site. Km rises (lower apparent affinity) but Vmax is unchanged, you can still saturate by adding more substrate." },
  noncompetitive: { Vmax: 58, Km: 22, t: "non-competitive", note: "Binds an allosteric site. Vmax falls; Km is unchanged. Extra substrate cannot overcome it." },
  uncompetitive: { Vmax: 58, Km: 13, t: "uncompetitive", note: "Binds only the ES complex. Both Vmax and Km fall together." },
};

export default function MichaelisExplainer() {
  const [m, setM] = useState("none");
  const cur = MODES[m];
  const W = 300, x0 = 34, y0 = 134;
  const xOf = (s) => x0 + (s / 120) * (W - x0 - 10);
  const yOf = (v) => y0 - (v / 110) * (y0 - 14);
  const curve = (Vmax, Km) => Array.from({ length: 60 }, (_, k) => { const s = (k / 59) * 120; return `${k ? "L" : "M"}${xOf(s).toFixed(1)} ${yOf(Vmax * s / (Km + s)).toFixed(1)}`; }).join(" ");

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
        <div className="flex flex-wrap gap-1.5">
          {Object.keys(MODES).map((k) => (
            <button key={k} onClick={() => setM(k)} className={"rounded-full border px-2 py-1 text-[10px] " + (k === m ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>{k === "none" ? "normal" : MODES[k].t.split(" ")[0]}</button>
          ))}
        </div>
      </div>
      <p className="mt-2 text-[13px] text-muted"><Tex>{`v = \\dfrac{V_{max}\\,[S]}{K_m + [S]}`}</Tex></p>

      <svg viewBox="0 0 300 150" className="mt-2 w-full">
        <line x1={x0} y1="8" x2={x0} y2={y0} stroke="var(--color-line)" strokeWidth="1" />
        <line x1={x0} y1={y0} x2={W - 8} y2={y0} stroke="var(--color-line)" strokeWidth="1" />
        <text x="8" y="16" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-dim)">v</text>
        <text x={W - 8} y={y0 + 12} fontSize="8" textAnchor="end" fontFamily="var(--font-mono)" fill="var(--color-dim)">[S]</text>
        {/* baseline faint */}
        {m !== "none" && <path d={curve(MODES.none.Vmax, MODES.none.Km)} fill="none" stroke="var(--color-line)" strokeWidth="1.2" strokeDasharray="3 3" />}
        {/* Vmax line + Km marker for the current curve */}
        <line x1={x0} y1={yOf(cur.Vmax)} x2={W - 8} y2={yOf(cur.Vmax)} stroke="var(--color-amber)" strokeWidth="0.7" strokeDasharray="2 2" />
        <text x={W - 8} y={yOf(cur.Vmax) - 3} fontSize="7.5" textAnchor="end" fontFamily="var(--font-mono)" fill="var(--color-amber)">Vmax</text>
        <line x1={xOf(cur.Km)} y1={y0} x2={xOf(cur.Km)} y2={yOf(cur.Vmax / 2)} stroke="var(--color-dim)" strokeWidth="0.7" strokeDasharray="2 2" />
        <text x={xOf(cur.Km)} y={y0 + 11} fontSize="7.5" textAnchor="middle" fontFamily="var(--font-mono)" fill="var(--color-dim)">Km</text>
        <motion.path key={m} d={curve(cur.Vmax, cur.Km)} fill="none" stroke="var(--color-amber)" strokeWidth="1.9" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5 }} />
      </svg>

      <p className="mt-1 text-[12px]"><span className="text-amber">{cur.t}</span> <span className="text-muted">{cur.note}</span></p>
    </div>
  );
}
