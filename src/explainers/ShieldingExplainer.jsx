import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// Shielding: inner-shell electrons screen the valence electrons from the full nuclear charge, so a
// valence electron only feels an effective nuclear charge Z_eff = Z - S. Across period 2 the core
// (S ~ 2) barely changes while protons climb, so Z_eff rises and the atom contracts.
const SYM = { 3: "Li", 4: "Be", 5: "B", 6: "C", 7: "N", 8: "O", 9: "F", 10: "Ne" };

export default function ShieldingExplainer() {
  const [z, setZ] = useState(3);
  const S = 2;                     // 1s core screens ~2 (simplified)
  const zEff = z - S;
  const cx = 90, cy = 90;
  const R1 = 34;                   // inner (shielding) shell
  const R2 = 82 - (zEff - 1) * 6;  // valence shell contracts as Z_eff grows
  const valence = z - 2;

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <div className="mt-3 flex flex-col items-center gap-4 sm:flex-row">
        <svg viewBox="0 0 180 180" className="w-[170px] shrink-0 self-center">
          <motion.circle cx={cx} cy={cy} animate={{ r: R2 }} transition={{ type: "spring", stiffness: 180, damping: 22 }} fill="none" stroke="var(--color-amber)" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx={cx} cy={cy} r={R1} fill="none" stroke="var(--color-line)" strokeWidth="1" />
          {/* shielding (core) electrons */}
          {[0, 1].map((k) => { const a = (k * 180) * Math.PI / 180; return <circle key={k} cx={cx + R1 * Math.cos(a)} cy={cy + R1 * Math.sin(a)} r="4" fill="#6aa6f0" />; })}
          {/* valence electrons */}
          {Array.from({ length: valence }, (_, k) => { const a = (-90 + (360 / Math.max(1, valence)) * k) * Math.PI / 180; return <motion.circle key={k} animate={{ cx: cx + R2 * Math.cos(a), cy: cy + R2 * Math.sin(a) }} transition={{ type: "spring", stiffness: 180, damping: 22 }} r="4" fill="var(--color-amber)" />; })}
          <circle cx={cx} cy={cy} r="14" fill="var(--color-amber)" fillOpacity="0.85" />
          <text x={cx} y={cy + 4} textAnchor="middle" fontSize="10" fontFamily="var(--font-mono)" fill="var(--color-ink)">{z}+</text>
        </svg>

        <div className="flex-1 self-stretch">
          <p className="font-display text-3xl font-medium text-amber">{SYM[z]}</p>
          <p className="mt-1 font-mono text-[13px] text-muted">Z = {z}, core shields S ≈ {S}</p>
          <p className="mt-1 font-mono text-[14px]"><Tex>{`Z_{eff} = ${z} - ${S} = ${zEff}`}</Tex></p>
          <label className="mt-3 block"><span className="text-[12px] text-muted">across period 2 (Z)</span>
            <input type="range" min={3} max={10} step={1} value={z} onChange={(e) => setZ(+e.target.value)} className="mt-1.5 w-full accent-amber" /></label>
        </div>
      </div>
      <p className="mt-3 text-[12px] text-muted">The two inner (blue) electrons screen the nucleus, so each valence (amber) electron feels only <Tex>{`Z_{eff}`}</Tex>, not the full charge. Moving right across a period adds protons but not shielding, so <Tex>{`Z_{eff}`}</Tex> rises, the pull strengthens, and the atom shrinks.</p>
    </div>
  );
}
