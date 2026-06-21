import { useState } from "react";
import { motion } from "motion/react";

// Whittaker's five-kingdom system (1969) sorts all life by cell type, body organisation and
// nutrition. Tap a kingdom. (Viruses, viroids and lichens are not placed in this system.)
const K = {
  Monera: { cell: "Prokaryotic", nut: "Auto- or heterotrophic", ex: "Bacteria, Archaea", c: "#6aa6f0" },
  Protista: { cell: "Unicellular eukaryote", nut: "Various", ex: "Diatoms, euglena, protozoa", c: "#34b4dc" },
  Fungi: { cell: "Eukaryotic", nut: "Saprophytic (absorptive)", ex: "Yeasts, moulds, mushrooms", c: "#f6b53d" },
  Plantae: { cell: "Multicellular, chlorophyll", nut: "Autotrophic", ex: "Mosses, ferns, flowering plants", c: "#34d39a" },
  Animalia: { cell: "Multicellular, no cell wall", nut: "Holozoic (ingestive)", ex: "Animals", c: "#fb7185" },
};

export default function KingdomsExplainer() {
  const [k, setK] = useState("Monera");
  const d = K[k];

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {Object.keys(K).map((key) => (
          <button key={key} onClick={() => setK(key)} className={"rounded-full border px-2.5 py-1 text-[11px] " + (key === k ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>{key}</button>
        ))}
      </div>

      <motion.div key={k} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-3 rounded-md border border-line bg-surface/50 p-4">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full" style={{ background: d.c }} />
          <p className="font-display text-[18px] font-medium tracking-tight" style={{ color: d.c }}>{k}</p>
        </div>
        <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-[12px]">
          <dt className="text-dim">Cell</dt><dd className="text-muted">{d.cell}</dd>
          <dt className="text-dim">Nutrition</dt><dd className="text-muted">{d.nut}</dd>
          <dt className="text-dim">Examples</dt><dd className="text-muted">{d.ex}</dd>
        </dl>
      </motion.div>
      <p className="mt-3 text-[12px] text-muted">The five kingdoms split by increasing complexity: prokaryotic Monera, then eukaryotes that are unicellular (Protista), absorptive (Fungi), photosynthetic (Plantae) or ingestive (Animalia).</p>
    </div>
  );
}
