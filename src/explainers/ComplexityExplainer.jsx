import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// Best / worst / average case, on linear search of n items: best finds it first (1 op),
// worst scans all (n), average is about n/2. Counts grow with n, the class is the shape.
export default function ComplexityExplainer() {
  const [n, setN] = useState(10);
  const cases = [
    { label: "best", ops: 1, col: "#34d39a", note: "found at position 1" },
    { label: "average", ops: Math.round((n + 1) / 2), col: "var(--color-amber)", note: "found around the middle" },
    { label: "worst", ops: n, col: "#fb7185", note: "absent or last" },
  ];
  const max = Math.max(n, 1);

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
      <p className="mt-2 text-[12px] text-muted">Linear search over <Tex>n</Tex> items: comparisons in the best, average and worst case.</p>

      <div className="mt-3"><label className="block">
        <span className="text-[12px] text-muted">input size <Tex>n</Tex> = <b className="text-text tabular-nums">{n}</b></span>
        <input type="range" min={1} max={40} step={1} value={n} onChange={(e) => setN(+e.target.value)} className="mt-1.5 w-full accent-amber" />
      </label></div>

      <div className="mt-4 space-y-2.5">
        {cases.map((c) => (
          <div key={c.label}>
            <div className="flex items-baseline justify-between text-[12px]">
              <span style={{ color: c.col }} className="font-mono">{c.label}</span>
              <span className="font-mono text-dim">{c.ops} comparisons</span>
            </div>
            <div className="mt-1 h-3 overflow-hidden rounded-full bg-surface">
              <motion.div className="h-full rounded-full" style={{ background: c.col }} animate={{ width: (c.ops / max) * 100 + "%" }} transition={{ type: "spring", stiffness: 120, damping: 20 }} />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[12px] text-muted">Worst and average both grow linearly with <Tex>n</Tex>, so linear search is <Tex>{`\\Theta(n)`}</Tex>. Faster hardware only scales the constant, not the growth.</p>
    </div>
  );
}
