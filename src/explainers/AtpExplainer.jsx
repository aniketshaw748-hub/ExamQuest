import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// ATP is the cell's energy currency: adenine + ribose + three phosphates. Breaking the terminal
// high-energy bond gives ADP + Pi and releases ~7.3 kcal/mol, which powers cellular work.
export default function AtpExplainer() {
  const [hyd, setHyd] = useState(false);
  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
        <button onClick={() => setHyd((h) => !h)} className="rounded-full border border-line px-2.5 py-1 text-[11px] text-dim hover:border-amber/40 hover:text-amber">
          {hyd ? "reset (ADP + Pi)" : "hydrolyse ATP"}
        </button>
      </div>

      <svg viewBox="0 0 300 90" className="mt-3 w-full">
        <rect x="12" y="34" width="46" height="24" rx="5" fill="rgba(106,166,240,0.12)" stroke="#6aa6f0" strokeWidth="1.2" />
        <text x="35" y="49" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="#6aa6f0">adenine</text>
        <rect x="64" y="34" width="42" height="24" rx="5" fill="rgba(52,211,154,0.12)" stroke="#34d39a" strokeWidth="1.2" />
        <text x="85" y="49" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="#34d39a">ribose</text>
        {/* three phosphates */}
        {[130, 162, 194].map((x, i) => {
          const detached = hyd && i === 2;
          return (
            <motion.g key={i} animate={{ x: detached ? 40 : 0, opacity: detached ? 0.5 : 1 }} transition={{ type: "spring", stiffness: 200, damping: 20 }}>
              {i > 0 && <text x={x - 16} y="50" textAnchor="middle" fontSize="11" fill={i === 2 ? "var(--color-amber)" : "var(--color-dim)"}>~</text>}
              <circle cx={x} cy="46" r="12" fill="rgba(246,181,61,0.16)" stroke="var(--color-amber)" strokeWidth="1.3" />
              <text x={x} y="49" textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill="var(--color-amber)">P</text>
            </motion.g>
          );
        })}
        <line x1="58" y1="46" x2="64" y2="46" stroke="var(--color-line)" strokeWidth="1.2" />
        <line x1="106" y1="46" x2="118" y2="46" stroke="var(--color-line)" strokeWidth="1.2" />
        {hyd && <motion.text x="250" y="30" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-amber)" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>+ Pi + energy</motion.text>}
      </svg>

      <p className="mt-1 text-center text-[13px]"><Tex>{hyd ? `\\text{ATP} \\rightarrow \\text{ADP} + P_i + \\text{energy}` : `\\text{ATP} = \\text{adenine} + \\text{ribose} + 3\\,\\text{phosphate}`}</Tex></p>
      <p className="mt-2 text-[12px] text-muted">The two terminal phosphate bonds (shown as ~) are high-energy. Hydrolysing the last one releases about 7.3 kcal/mol, spent on muscle contraction, active transport, biosynthesis and signalling. Respiration and photosynthesis continually rebuild ATP from ADP, so it is recycled, not used up.</p>
    </div>
  );
}
