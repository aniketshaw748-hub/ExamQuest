import { useState } from "react";
import { motion } from "motion/react";

// Model organisms stand in for biology in general: simple, fast-breeding, well-mapped species used
// to learn rules that apply more widely. Tap one to see why it is useful.
const ORG = [
  { name: "E. coli", kind: "Bacterium", why: "Doubles every ~20 min, grows on cheap media, harmless lab strains, fully mapped genetics. The workhorse of molecular biology." },
  { name: "S. cerevisiae", kind: "Yeast (eukaryote)", why: "Single-celled eukaryote; short generation, divides by meiosis (sexual genetics) and does homologous recombination for gene knock-out." },
  { name: "D. melanogaster", kind: "Fruit fly", why: "Short life cycle, many offspring, only four chromosome pairs. The classic model for inheritance and developmental genetics." },
  { name: "C. elegans", kind: "Worm", why: "Transparent, with a fixed and fully mapped 959 somatic cells and a known cell lineage. Ideal for development and apoptosis." },
  { name: "A. thaliana", kind: "Plant", why: "Small genome, fast cycle. The standard model for plant genetics." },
  { name: "M. musculus", kind: "Mouse", why: "A mammal genetically and physiologically close to humans, used to model human disease." },
];

export default function ModelOrganismsExplainer() {
  const [i, setI] = useState(0);
  const o = ORG[i];

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {ORG.map((org, k) => (
          <button key={k} onClick={() => setI(k)} className={"rounded-full border px-2.5 py-1 text-[11px] italic " + (k === i ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>{org.name}</button>
        ))}
      </div>

      <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-3 rounded-md border border-line bg-surface/50 p-4">
        <p className="font-display text-[18px] font-medium italic tracking-tight text-amber">{o.name}</p>
        <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wide text-dim">{o.kind}</p>
        <p className="mt-2 text-[12px] text-muted">{o.why}</p>
      </motion.div>
      <p className="mt-3 text-[12px] text-muted">Each climbs the ladder of complexity, from a bacterium to a mammal, so a discovery in a simple, cheap organism can guide work in humans.</p>
    </div>
  );
}
