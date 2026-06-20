import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// Inclusion-Exclusion for two sets: |A∪B| = |A| + |B| - |A∩B|.
// Adjust the three disjoint regions; the union is what you actually count.
export default function InclExclExplainer() {
  const [onlyA, setOnlyA] = useState(5);
  const [onlyB, setOnlyB] = useState(4);
  const [both, setBoth] = useState(3);
  const A = onlyA + both, B = onlyB + both, union = onlyA + onlyB + both;

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <svg viewBox="0 0 240 120" className="mt-3 w-full" style={{ maxHeight: 150 }}>
        <circle cx="95" cy="60" r="48" fill="#6aa6f0" fillOpacity="0.12" stroke="#6aa6f0" strokeWidth="1.5" />
        <circle cx="145" cy="60" r="48" fill="#34d39a" fillOpacity="0.12" stroke="#34d39a" strokeWidth="1.5" />
        <text x="70" y="64" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="14" fill="#6aa6f0">{onlyA}</text>
        <text x="120" y="64" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="14" fill="var(--color-amber)">{both}</text>
        <text x="170" y="64" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="14" fill="#34d39a">{onlyB}</text>
        <text x="62" y="18" fontFamily="var(--font-mono)" fontSize="12" fill="#6aa6f0">A</text>
        <text x="172" y="18" fontFamily="var(--font-mono)" fontSize="12" fill="#34d39a">B</text>
      </svg>

      <div className="mt-2 grid grid-cols-3 gap-3">
        <Slider label="only A" value={onlyA} set={setOnlyA} />
        <Slider label="both" value={both} set={setBoth} />
        <Slider label="only B" value={onlyB} set={setOnlyB} />
      </div>

      <div className="mt-4 flex flex-wrap items-baseline gap-2 text-[14px]">
        <Tex>{`|A\\cup B| = ${A} + ${B} - ${both} =`}</Tex>
        <motion.span key={union} initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="font-display text-2xl font-medium text-amber">{union}</motion.span>
      </div>
      <p className="mt-2 text-[12px] text-muted">
        Add <Tex>{`|A|`}</Tex> and <Tex>{`|B|`}</Tex> and the overlap is counted twice, so subtract <Tex>{`|A\\cap B|`}</Tex> once. For three sets, add back <Tex>{`|A\\cap B\\cap C|`}</Tex>.
      </p>
    </div>
  );
}

function Slider({ label, value, set }) {
  return (
    <label className="block">
      <span className="text-[11px] text-muted">{label} = <b className="text-text tabular-nums">{value}</b></span>
      <input type="range" min={0} max={12} step={1} value={value} onChange={(e) => set(+e.target.value)} className="mt-1.5 w-full accent-amber" />
    </label>
  );
}
