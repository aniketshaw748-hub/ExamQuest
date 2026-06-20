import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// Approximation ratio for an NP-hard minimisation. A rho-approximation guarantees the
// solution cost is at most rho times the (unknown, hard-to-find) optimum.
export default function ApproxRatioExplainer() {
  const [rho, setRho] = useState(2);
  const opt = 10; // pretend optimum
  const worst = Math.round(opt * rho);

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
      <p className="mt-2 text-[13px] text-muted">A <Tex>{`\\rho`}</Tex>-approximation for a minimisation problem guarantees <Tex>{`\\text{cost} \\le \\rho \\cdot \\text{OPT}`}</Tex>.</p>

      <div className="mt-4 space-y-2.5">
        <Bar label="optimum (OPT)" value={opt} max={worst} col="#34d39a" />
        <Bar label={`guarantee (rho x OPT)`} value={worst} max={worst} col="var(--color-amber)" />
      </div>

      <div className="mt-4"><label className="block">
        <span className="text-[12px] text-muted">approximation ratio <Tex>{`\\rho = `}</Tex><b className="text-text tabular-nums">{rho}</b></span>
        <input type="range" min={1} max={4} step={0.5} value={rho} onChange={(e) => setRho(+e.target.value)} className="mt-1.5 w-full accent-amber" />
      </label></div>

      <div className="mt-3 text-[13px] text-muted">Any solution the algorithm returns costs between <span className="font-mono text-emerald">{opt}</span> and <span className="font-mono text-amber">{worst}</span>, never worse than <Tex>{`${rho}\\times`}</Tex> optimal.</div>
      <p className="mt-3 text-[12px] text-muted">When a problem is NP-hard, finding the exact optimum is infeasible, so we settle for a guaranteed-close answer fast. Vertex cover has a simple 2-approximation; metric TSP has a 1.5-approximation.</p>
    </div>
  );
}

function Bar({ label, value, max, col }) {
  return (
    <div>
      <div className="flex items-baseline justify-between text-[12px]"><span className="text-muted">{label}</span><span className="font-mono text-dim">{value}</span></div>
      <div className="mt-1 h-3 overflow-hidden rounded-full bg-surface">
        <motion.div className="h-full rounded-full" style={{ background: col }} animate={{ width: (value / max) * 100 + "%" }} transition={{ type: "spring", stiffness: 120, damping: 20 }} />
      </div>
    </div>
  );
}
