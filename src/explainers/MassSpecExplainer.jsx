import { useState } from "react";
import { motion } from "motion/react";

// Mass spectrometry: ionise a molecule, smash it into fragments, and sort them by mass-to-charge
// (m/z). The tallest peak is the base peak; the peak at the molecule's own mass is the molecular
// ion M+. The fragment pattern is a fingerprint of the structure.
const SAMPLES = {
  Water: { mol: 18, peaks: [[17, 25], [18, 100]] },
  Methane: { mol: 16, peaks: [[12, 8], [13, 12], [14, 20], [15, 88], [16, 100]] },
  Ethanol: { mol: 46, peaks: [[15, 40], [29, 30], [31, 100], [45, 55], [46, 25]] },
};

export default function MassSpecExplainer() {
  const [name, setName] = useState("Ethanol");
  const s = SAMPLES[name];
  const W = 280, H = 110, x0 = 28, maxMz = 50;
  const xOf = (mz) => x0 + (mz / maxMz) * (W - x0 - 6);

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
        <div className="flex gap-1.5">
          {Object.keys(SAMPLES).map((k) => (
            <button key={k} onClick={() => setName(k)} className={"rounded-full border px-2.5 py-1 text-[11px] " + (k === name ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>{k}</button>
          ))}
        </div>
      </div>

      <svg viewBox={`0 0 ${W} ${H + 18}`} className="mt-3 w-full">
        <line x1={x0} y1={H} x2={W - 4} y2={H} stroke="var(--color-line)" strokeWidth="1" />
        <line x1={x0} y1="6" x2={x0} y2={H} stroke="var(--color-line)" strokeWidth="1" />
        <text x="6" y="12" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-dim)">abund</text>
        <text x={W - 4} y={H + 15} fontSize="8" textAnchor="end" fontFamily="var(--font-mono)" fill="var(--color-dim)">m/z</text>
        {s.peaks.map(([mz, ab], k) => {
          const isMol = mz === s.mol;
          const h = (ab / 100) * (H - 12);
          return (
            <g key={k}>
              <motion.line x1={xOf(mz)} y1={H} x2={xOf(mz)} y2={H} stroke={isMol ? "var(--color-amber)" : "#6aa6f0"} strokeWidth="3"
                animate={{ y2: H - h }} transition={{ duration: 0.5, delay: k * 0.05 }} />
              <text x={xOf(mz)} y={H + 11} fontSize="7.5" textAnchor="middle" fontFamily="var(--font-mono)" fill={isMol ? "var(--color-amber)" : "var(--color-dim)"}>{mz}</text>
            </g>
          );
        })}
      </svg>

      <p className="mt-1 text-[13px] text-muted"><span className="text-amber">M+ at m/z = {s.mol}</span> is the whole molecule's mass; the other peaks are fragments. The tallest peak (base peak) is the most stable fragment.</p>
      <p className="mt-2 text-[12px] text-muted">Unlike absorption methods, mass spec breaks the molecule apart and weighs the pieces, so the pattern reveals which bonds broke and pins down the structure and molecular mass.</p>
    </div>
  );
}
