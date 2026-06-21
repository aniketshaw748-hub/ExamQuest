import { useState } from "react";
import { motion } from "motion/react";

// Proteins fold in four levels, each adding organisation: primary (sequence), secondary (local
// helix/sheet), tertiary (whole-chain 3-D fold), quaternary (several chains). Tap a level.
const LV = [
  { name: "Primary", desc: "The linear sequence of amino acids.", bond: "Peptide bonds" },
  { name: "Secondary", desc: "Local folding into an alpha-helix or beta-pleated sheet.", bond: "Hydrogen bonds" },
  { name: "Tertiary", desc: "The overall 3-D fold of the whole chain.", bond: "H-bonds, disulphide, ionic, hydrophobic" },
  { name: "Quaternary", desc: "Several folded chains assembled into one protein (e.g. haemoglobin).", bond: "Same as tertiary, between chains" },
];

function Glyph({ i }) {
  if (i === 0) return <g>{[0, 1, 2, 3, 4, 5].map((k) => (<g key={k}>{k < 5 && <line x1={18 + k * 24} y1="24" x2={42 + k * 24} y2="24" stroke="var(--color-amber)" strokeWidth="1.4" />}<circle cx={18 + k * 24} cy="24" r="6" fill="rgba(246,181,61,0.25)" stroke="var(--color-amber)" strokeWidth="1.2" /></g>))}</g>;
  if (i === 1) return <path d="M14 24 q10 -14 20 0 q10 14 20 0 q10 -14 20 0 q10 14 20 0 q10 -14 20 0" fill="none" stroke="var(--color-amber)" strokeWidth="2" />;
  if (i === 2) return <path d="M20 24 q14 -18 30 -6 q18 8 4 22 q-14 12 -30 2 q-16 -10 8 -18 q14 -4 22 6" fill="rgba(246,181,61,0.12)" stroke="var(--color-amber)" strokeWidth="1.8" />;
  return <g>{[[40, 20], [80, 20], [55, 32], [95, 32]].map(([x, y], k) => <circle key={k} cx={x} cy={y} r="11" fill="rgba(246,181,61,0.12)" stroke="var(--color-amber)" strokeWidth="1.6" />)}</g>;
}

export default function ProteinLevelsExplainer() {
  const [i, setI] = useState(0);

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {LV.map((l, k) => (
          <button key={k} onClick={() => setI(k)} className={"rounded-full border px-2.5 py-1 text-[11px] " + (k === i ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>{l.name}</button>
        ))}
      </div>

      <svg viewBox="0 0 150 48" className="mx-auto mt-3 w-full max-w-[260px]">
        <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }}><Glyph i={i} /></motion.g>
      </svg>

      <div className="mt-2 rounded-md border border-line bg-surface/50 p-3">
        <p className="text-[13px] text-amber">{i + 1}. {LV[i].name} structure</p>
        <p className="mt-1 text-[12px] text-muted">{LV[i].desc}</p>
        <p className="mt-1.5 font-mono text-[11px] text-dim">held by: {LV[i].bond}</p>
      </div>
      <p className="mt-3 text-[12px] text-muted">Each level builds on the last. Heat or extreme pH unravels the 2nd, 3rd and 4th levels (denaturation), destroying function, but the primary sequence (peptide bonds) survives.</p>
    </div>
  );
}
