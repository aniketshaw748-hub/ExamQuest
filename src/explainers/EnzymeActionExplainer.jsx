import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// How an enzyme works: the substrate binds the active site, is converted, and leaves as product,
// the enzyme reused. Two models: lock-and-key (rigid matching site) and induced-fit (flexible site
// that moulds around the substrate). Toggle between them.
export default function EnzymeActionExplainer() {
  const [mode, setMode] = useState("lock");
  const induced = mode === "induced";

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
        <div className="flex gap-1.5">
          <button onClick={() => setMode("lock")} className={"rounded-full border px-2.5 py-1 text-[11px] " + (!induced ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>lock & key</button>
          <button onClick={() => setMode("induced")} className={"rounded-full border px-2.5 py-1 text-[11px] " + (induced ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>induced fit</button>
        </div>
      </div>

      <svg viewBox="0 0 260 96" className="mx-auto mt-3 w-full max-w-[300px]">
        {/* enzyme body with an active-site notch */}
        <motion.path
          d={induced
            ? "M120 78 Q90 78 90 56 Q90 44 104 44 Q112 44 112 50 Q112 56 120 56 Q128 56 128 50 Q128 44 136 44 Q150 44 150 56 Q150 78 120 78 Z"
            : "M120 80 Q88 80 88 54 Q88 40 104 40 L104 52 Q104 58 112 58 L128 58 Q136 58 136 52 L136 40 Q152 40 152 54 Q152 80 120 80 Z"}
          fill="rgba(106,166,240,0.12)" stroke="#6aa6f0" strokeWidth="1.4" transition={{ duration: 0.4 }} />
        <text x="120" y="92" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="#6aa6f0">enzyme</text>
        {/* substrate enters, becomes products, repeat */}
        <motion.circle r="7" fill="var(--color-amber)"
          animate={{ cx: [30, 120, 120, 210], cy: [30, 50, 50, 30], opacity: [1, 1, 0, 0] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.55, 1], ease: "easeInOut" }} />
        <motion.g animate={{ opacity: [0, 0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, times: [0, 0.55, 0.7, 1] }}>
          <circle cx="190" cy="26" r="4.5" fill="#34d39a" /><circle cx="206" cy="34" r="4.5" fill="#34d39a" />
        </motion.g>
        <text x="30" y="18" textAnchor="middle" fontSize="7.5" fontFamily="var(--font-mono)" fill="var(--color-amber)">substrate</text>
        <text x="222" y="22" textAnchor="middle" fontSize="7.5" fontFamily="var(--font-mono)" fill="#34d39a">products</text>
      </svg>

      <p className="mt-2 text-center text-[13px]"><Tex>{`E + S \\rightarrow ES \\rightarrow E + P`}</Tex></p>
      <p className="mt-2 text-[12px] text-muted">{induced
        ? "Induced fit (Koshland): the active site is flexible and moulds around the substrate as it binds, straining its bonds to drive the reaction."
        : "Lock and key (Fischer): the active site and substrate have rigid, exactly matching shapes, like a key in a lock."}</p>
      <p className="mt-2 text-[12px] text-muted">Either way the enzyme lowers the activation energy and is released unchanged, ready to catalyse again. (It never changes the equilibrium, only the speed.)</p>
    </div>
  );
}
