import { useState } from "react";
import { motion } from "motion/react";

// Eutrophication: extra nutrients (nitrogen, phosphorus from fertiliser or sewage) feed an algal
// bloom. The algae block light and, when they die, their decomposition consumes the dissolved
// oxygen, suffocating fish. Slide the nutrient load and watch oxygen collapse.
export default function EutrophicationExplainer() {
  const [nut, setNut] = useState(20);
  const algae = 8 + (nut / 100) * 46;        // algal mat thickness
  const o2 = Math.max(2, 100 - nut * 0.95);   // dissolved oxygen (%)
  const state = nut < 35 ? { t: "healthy", c: "#34d39a" } : nut < 70 ? { t: "eutrophic", c: "var(--color-amber)" } : { t: "dead zone", c: "var(--color-rose)" };

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <svg viewBox="0 0 300 150" className="mt-3 w-full">
        {/* water body */}
        <rect x="18" y="34" width="214" height="104" rx="4" fill="rgba(106,166,240,0.16)" stroke="var(--color-line)" strokeWidth="1" />
        {/* algal mat on the surface */}
        <motion.rect x="18" y="34" width="214" animate={{ height: algae }} transition={{ type: "spring", stiffness: 200, damping: 24 }}
          fill="rgba(52,211,154,0.45)" />
        <text x="125" y="48" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="#0d1b2a">algal bloom</text>
        {/* oxygen bar */}
        <text x="266" y="30" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-dim)">O₂</text>
        <rect x="254" y="34" width="24" height="104" rx="3" fill="rgba(255,255,255,0.04)" stroke="var(--color-line)" strokeWidth="1" />
        <motion.rect x="254" width="24" animate={{ y: 34 + (104 * (100 - o2)) / 100, height: (104 * o2) / 100 }} transition={{ type: "spring", stiffness: 200, damping: 24 }}
          fill={state.c} />
        <text x="266" y="148" textAnchor="middle" fontSize="7.5" fontFamily="var(--font-mono)" fill="var(--color-dim)">{Math.round(o2)}%</text>
      </svg>

      <div className="mt-1 flex items-center gap-2">
        <span className="text-[12px] text-muted">nutrient load (N, P)</span>
        <span className="ml-auto rounded-full px-3 py-1 font-mono text-[11px] uppercase" style={{ color: state.c, border: `1px solid ${state.c}66`, background: `${state.c}1a` }}>{state.t}</span>
      </div>
      <input type="range" min={0} max={100} step={5} value={nut} onChange={(e) => setNut(+e.target.value)} className="mt-1.5 w-full accent-amber" />
      <p className="mt-3 text-[12px] text-muted">More nutrients feed a bigger bloom; when the algae die, decomposers strip the oxygen out of the water. Below a critical oxygen level, fish and other aquatic life suffocate, a limiting nutrient (often phosphorus) sets the ceiling on the bloom.</p>
    </div>
  );
}
