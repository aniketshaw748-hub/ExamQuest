import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";

// Biomimicry is solving human problems by copying nature's tested designs. Pick a natural model to
// see the engineering it inspired. Its three levels are the Organism, its Behaviour, the Ecosystem.
const PAIRS = [
  { nature: "Bird wing & body", eng: "Aeroplane wing and fuselage", note: "Streamlined shapes that cut through air with the least drag." },
  { nature: "Gecko foot", eng: "Gecko tape (dry adhesive)", note: "Millions of tiny hairs grip surfaces without glue, using weak molecular forces." },
  { nature: "Lotus leaf", eng: "Self-cleaning surfaces", note: "A micro-rough waxy surface makes water bead up and roll dirt away." },
  { nature: "Whale fin bumps", eng: "Efficient turbine blades", note: "Bumpy (tubercled) leading edges delay stall and improve lift." },
  { nature: "Human eye", eng: "The camera", note: "A lens focuses light onto a sensor, just as the eye focuses onto the retina." },
];

export default function BiomimicryExplainer() {
  const [i, setI] = useState(0);
  const p = PAIRS[i];

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <div className="mt-3 flex flex-col gap-3 sm:flex-row">
        <div className="flex shrink-0 flex-col gap-1.5 sm:w-[42%]">
          {PAIRS.map((pr, k) => (
            <button key={k} onClick={() => setI(k)} className={"rounded-md border px-2.5 py-1.5 text-left text-[12px] " + (k === i ? "border-amber bg-amber/15 text-amber" : "border-line text-dim hover:text-text")}>{pr.nature}</button>
          ))}
        </div>
        <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex-1 rounded-md border border-line bg-surface/50 p-3">
          <div className="flex items-center gap-2 text-[13px]">
            <span className="text-[#34d39a]">{p.nature}</span>
            <ArrowRight size={14} className="text-dim" />
            <span className="text-amber">{p.eng}</span>
          </div>
          <p className="mt-2 text-[12px] text-muted">{p.note}</p>
        </motion.div>
      </div>
      <p className="mt-3 text-[12px] text-muted">Engineers borrow from nature at three levels (O-B-E): the <b className="font-medium text-text">Organism</b> (its shape), its <b className="font-medium text-text">Behaviour</b>, and the whole <b className="font-medium text-text">Ecosystem</b>. Biology becomes a design catalogue billions of years in the making.</p>
    </div>
  );
}
