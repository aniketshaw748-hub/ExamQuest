import { useState } from "react";
import { motion } from "motion/react";

// The central dogma: information flows DNA -> RNA -> protein. Transcription copies DNA into mRNA;
// translation reads the mRNA in three-base codons to build a protein. Tap a step.
const STEPS = [
  { from: "DNA", to: "RNA", label: "transcription", desc: "RNA polymerase copies one DNA strand into messenger RNA (mRNA). In eukaryotes the mRNA is capped, tailed and spliced." },
  { from: "RNA", to: "Protein", label: "translation", desc: "The ribosome reads the mRNA in three-base codons; tRNA brings the matching amino acid. Start codon AUG, stop codons UAA, UAG, UGA." },
];

export default function CentralDogmaExplainer() {
  const [s, setS] = useState(0);
  const boxes = ["DNA", "RNA", "Protein"];

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <svg viewBox="0 0 280 70" className="mt-3 w-full">
        {boxes.map((b, i) => {
          const x = 20 + i * 100, active = i === s || i === s + 1;
          return (
            <g key={b}>
              <rect x={x} y="22" width="60" height="26" rx="6" fill={active ? "rgba(246,181,61,0.14)" : "rgba(154,166,178,0.08)"} stroke={active ? "var(--color-amber)" : "var(--color-line)"} strokeWidth={active ? 1.6 : 1} />
              <text x={x + 30} y="39" textAnchor="middle" fontSize="11" fontFamily="var(--font-mono)" fill={active ? "var(--color-amber)" : "var(--color-muted)"}>{b}</text>
            </g>
          );
        })}
        {STEPS.map((st, i) => {
          const x = 80 + i * 100, on = i === s;
          return (
            <g key={i} onClick={() => setS(i)} style={{ cursor: "pointer" }}>
              <line x1={x} y1="35" x2={x + 40} y2="35" stroke={on ? "var(--color-amber)" : "var(--color-line)"} strokeWidth="1.6" markerEnd={on ? "url(#cdA)" : "url(#cdB)"} />
              <text x={x + 20} y="18" textAnchor="middle" fontSize="7.5" fontFamily="var(--font-mono)" fill={on ? "var(--color-amber)" : "var(--color-dim)"}>{st.label}</text>
            </g>
          );
        })}
        <defs>
          <marker id="cdA" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="var(--color-amber)" /></marker>
          <marker id="cdB" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="var(--color-line)" /></marker>
        </defs>
      </svg>

      {/* codon strip */}
      <div className="mt-2 flex justify-center gap-1.5">
        {["AUG", "GCU", "GAA", "UAA"].map((c, i) => (
          <span key={i} className={"rounded px-1.5 py-0.5 font-mono text-[11px] " + (i === 0 ? "bg-emerald/15 text-emerald" : i === 3 ? "bg-rose/15 text-rose" : "bg-raised text-muted")}>{c}</span>
        ))}
      </div>
      <p className="mt-1 text-center font-mono text-[10px] text-dim">AUG = start · UAA/UAG/UGA = stop · codon = 3 bases</p>

      <motion.p key={s} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 text-[12px]">
        <span className="text-amber">{STEPS[s].label}:</span> <span className="text-muted">{STEPS[s].desc}</span>
      </motion.p>
    </div>
  );
}
