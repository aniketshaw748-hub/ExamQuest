import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// Real-gas compressibility factor Z = PV/nRT vs pressure. An ideal gas keeps Z = 1; real gases
// dip below 1 when attractions dominate (low T) and climb above 1 when the molecules' own volume
// dominates (high P). At the Boyle temperature the dip vanishes and the gas is near-ideal at low P.
export default function RealGasExplainer() {
  const [t, setT] = useState(1);
  const W = 300, x0 = 30, zMid = 72, zScale = 120;
  const m = 0.9 * (t - 3) / 2;
  const q = 1.1;
  const Z = (P) => 1 + m * P + q * P * P;
  const xOf = (P) => x0 + P * (W - x0 - 8);
  const yOf = (z) => Math.max(8, Math.min(140, zMid - (z - 1) * zScale));
  const pts = Array.from({ length: 60 }, (_, k) => k / 59);
  const path = pts.map((P, k) => `${k ? "L" : "M"}${xOf(P).toFixed(1)} ${yOf(Z(P)).toFixed(1)}`).join(" ");
  const tag = t < 3 ? "below Boyle T: attractions win, Z dips below 1" : t === 3 ? "Boyle temperature: near-ideal at low P" : "above Boyle T: volume wins, Z stays above 1";

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
      <p className="mt-2 text-[13px] text-muted">Compressibility factor <Tex>{`Z = \\dfrac{PV}{nRT}`}</Tex>. For an ideal gas <Tex>{`Z = 1`}</Tex> at every pressure; real gases deviate.</p>

      <svg viewBox="0 0 300 152" className="mt-3 w-full">
        <line x1={x0} y1={zMid} x2={W - 6} y2={zMid} stroke="var(--color-line)" strokeWidth="1" strokeDasharray="3 3" />
        <text x={x0 + 2} y={zMid - 4} fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-dim)">Z = 1 (ideal)</text>
        <line x1={x0} y1="6" x2={x0} y2="144" stroke="var(--color-line)" strokeWidth="1" />
        <text x="6" y="14" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-dim)">Z</text>
        <text x={W - 6} y="150" fontSize="8" textAnchor="end" fontFamily="var(--font-mono)" fill="var(--color-dim)">pressure P</text>
        <motion.path key={t} d={path} fill="none" stroke="var(--color-amber)" strokeWidth="1.8"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5 }} />
      </svg>

      <div className="mt-2"><label className="block">
        <span className="text-[12px] text-muted">temperature: <b className="text-text">{tag}</b></span>
        <input type="range" min={1} max={5} step={1} value={t} onChange={(e) => setT(+e.target.value)} className="mt-1.5 w-full accent-amber" />
      </label></div>
      <p className="mt-3 text-[12px] text-muted">At low pressure, attractions pull molecules together and Z drops below 1; at high pressure, the molecules' finite size resists compression and Z rises above 1. The van der Waals equation adds an <Tex>{`a`}</Tex> term for attraction and a <Tex>{`b`}</Tex> term for volume to capture both.</p>
    </div>
  );
}
