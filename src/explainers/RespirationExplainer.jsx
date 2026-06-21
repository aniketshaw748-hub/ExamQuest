import { useState } from "react";
import { motion } from "motion/react";

// Cellular respiration releases the energy in glucose in three stages, in different parts of the
// cell, yielding about 36-38 ATP in total. Tap a stage.
const STAGES = [
  { name: "Glycolysis", where: "cytoplasm", atp: "2 ATP", desc: "Glucose is split into two pyruvate, with a small net gain of 2 ATP and some NADH. No oxygen needed." },
  { name: "Krebs cycle", where: "mitochondrial matrix", atp: "2 ATP", desc: "Pyruvate is fully oxidised to CO2, loading electron carriers (NADH, FADH2) for the next stage." },
  { name: "Electron transport chain", where: "inner membrane", atp: "~34 ATP", desc: "NADH/FADH2 drive a proton gradient; oxygen is the final electron acceptor (forming water). Most ATP is made here." },
];

export default function RespirationExplainer() {
  const [sel, setSel] = useState(0);
  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <svg viewBox="0 0 300 64" className="mt-3 w-full">
        <text x="8" y="30" fontSize="7.5" fontFamily="var(--font-mono)" fill="var(--color-dim)">glucose</text>
        {STAGES.map((st, i) => {
          const x = 44 + i * 84, on = sel === i;
          return (
            <g key={i} onClick={() => setSel(i)} style={{ cursor: "pointer" }}>
              <rect x={x} y="14" width="72" height="34" rx="6" fill={on ? "rgba(246,181,61,0.18)" : "rgba(154,166,178,0.08)"} stroke={on ? "var(--color-amber)" : "var(--color-line)"} strokeWidth={on ? 1.8 : 1} />
              <text x={x + 36} y="30" textAnchor="middle" fontSize="7.5" fontFamily="var(--font-mono)" fill={on ? "var(--color-amber)" : "var(--color-muted)"}>{i + 1}</text>
              <text x={x + 36} y="42" textAnchor="middle" fontSize="6.5" fontFamily="var(--font-mono)" fill="var(--color-dim)">{st.atp}</text>
              {i < 2 && <line x1={x + 72} y1="31" x2={x + 84} y2="31" stroke="var(--color-line)" strokeWidth="1.2" markerEnd="url(#rsA)" />}
            </g>
          );
        })}
        <defs><marker id="rsA" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="var(--color-line)" /></marker></defs>
      </svg>

      <div className="mt-1 flex flex-wrap gap-1.5">
        {STAGES.map((st, i) => (
          <button key={i} onClick={() => setSel(i)} className={"rounded-full border px-2 py-1 text-[10px] " + (sel === i ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>{st.name}</button>
        ))}
      </div>
      <div className="mt-2 rounded-md border border-line bg-surface/50 p-3">
        <p className="text-[13px] text-amber">{sel + 1}. {STAGES[sel].name} <span className="text-dim">({STAGES[sel].where})</span></p>
        <p className="mt-1 text-[12px] text-muted">{STAGES[sel].desc}</p>
      </div>
      <p className="mt-3 text-[12px] text-muted">Glucose to CO2 + H2O, in the mitochondria: glycolysis (cytoplasm) then Krebs (matrix) then the electron transport chain (inner membrane), about 36-38 ATP in all. Most of it comes from the final, oxygen-using stage.</p>
    </div>
  );
}
