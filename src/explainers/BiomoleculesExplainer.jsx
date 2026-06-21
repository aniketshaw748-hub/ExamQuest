import { useState } from "react";
import { motion } from "motion/react";

// The four major biomolecules, each a polymer of a characteristic monomer. Tap one.
const B = {
  Carbohydrates: { monomer: "Monosaccharides (e.g. glucose)", ex: "starch, glycogen, cellulose", fn: "Quick energy and structure", c: "#34d39a" },
  Lipids: { monomer: "Fatty acids + glycerol", ex: "fats, oils, phospholipids", fn: "Energy store, membranes, insulation", c: "#f6b53d" },
  Proteins: { monomer: "Amino acids (20 kinds)", ex: "enzymes, antibodies, keratin", fn: "Catalysis, structure, transport", c: "#6aa6f0" },
  "Nucleic acids": { monomer: "Nucleotides", ex: "DNA, RNA", fn: "Store and carry genetic information", c: "#fb7185" },
};

export default function BiomoleculesExplainer() {
  const [k, setK] = useState("Carbohydrates");
  const d = B[k];

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {Object.keys(B).map((key) => (
          <button key={key} onClick={() => setK(key)} className={"rounded-full border px-2.5 py-1 text-[11px] " + (key === k ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>{key}</button>
        ))}
      </div>

      <motion.div key={k} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-3 rounded-md border border-line bg-surface/50 p-4">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full" style={{ background: d.c }} />
          <p className="font-display text-[18px] font-medium tracking-tight" style={{ color: d.c }}>{k}</p>
        </div>
        {/* monomer -> polymer beads */}
        <svg viewBox="0 0 220 24" className="mt-2 w-full max-w-[240px]">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <g key={i}>
              {i < 5 && <line x1={20 + i * 36} y1="12" x2={20 + (i + 1) * 36} y2="12" stroke={d.c} strokeWidth="1.4" />}
              <circle cx={20 + i * 36} cy="12" r="6" fill={`${d.c}33`} stroke={d.c} strokeWidth="1.2" />
            </g>
          ))}
        </svg>
        <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-[12px]">
          <dt className="text-dim">Monomer</dt><dd className="text-muted">{d.monomer}</dd>
          <dt className="text-dim">Examples</dt><dd className="text-muted">{d.ex}</dd>
          <dt className="text-dim">Role</dt><dd className="text-muted">{d.fn}</dd>
        </dl>
      </motion.div>
      <p className="mt-3 text-[12px] text-muted">Each biomolecule is a chain of repeating units (monomers) joined into a polymer. The monomer sets the chemistry; the chain length and folding set the function.</p>
    </div>
  );
}
