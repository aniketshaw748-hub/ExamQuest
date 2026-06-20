import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// Polynomial reduction A <=p B: transform an instance of A into one of B in poly time, so a
// solver for B solves A. The implication runs both ways: B easy => A easy; A hard => B hard.
export default function ReductionExplainer() {
  const [hard, setHard] = useState(true); // are we arguing hardness (A hard => B hard) or easiness?

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
      <p className="mt-2 text-[13px] text-muted">A polynomial reduction <Tex>{`A \\le_p B`}</Tex>: turn any instance of <Tex>A</Tex> into an instance of <Tex>B</Tex> in polynomial time.</p>

      <svg viewBox="0 0 300 90" className="mt-3 w-full">
        <defs><marker id="rd-ar" markerWidth="8" markerHeight="8" refX="7" refY="3.5" orient="auto"><path d="M0 0 L7 3.5 L0 7 z" fill="#6aa6f0" /></marker></defs>
        <g>
          <rect x="6" y="32" width="74" height="26" rx="6" fill="rgba(106,166,240,0.1)" stroke="#6aa6f0" strokeWidth="1.2" />
          <text x="43" y="49" textAnchor="middle" fontSize="10" fontFamily="var(--font-mono)" fill="#6aa6f0">A instance</text>
          <line x1="82" y1="45" x2="118" y2="45" stroke="#6aa6f0" strokeWidth="1.4" markerEnd="url(#rd-ar)" />
          <text x="100" y="38" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-dim)">transform</text>
          <rect x="120" y="32" width="74" height="26" rx="6" fill="rgba(246,181,61,0.1)" stroke="var(--color-amber)" strokeWidth="1.2" />
          <text x="157" y="49" textAnchor="middle" fontSize="10" fontFamily="var(--font-mono)" fill="var(--color-amber)">B instance</text>
          <line x1="196" y1="45" x2="232" y2="45" stroke="#6aa6f0" strokeWidth="1.4" markerEnd="url(#rd-ar)" />
          <text x="214" y="38" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-dim)">solve B</text>
          <rect x="234" y="32" width="60" height="26" rx="6" fill="rgba(52,211,154,0.1)" stroke="#34d39a" strokeWidth="1.2" />
          <text x="264" y="49" textAnchor="middle" fontSize="10" fontFamily="var(--font-mono)" fill="#34d39a">answer</text>
        </g>
      </svg>

      <div className="mt-3 flex gap-1.5">
        <button onClick={() => setHard(false)} className={"rounded-full border px-2.5 py-1 text-[11px] " + (!hard ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>if B is easy</button>
        <button onClick={() => setHard(true)} className={"rounded-full border px-2.5 py-1 text-[11px] " + (hard ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>if A is hard</button>
      </div>
      <motion.p key={String(hard)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3 text-[13px]">
        {hard
          ? <span className="text-rose">If <Tex>A</Tex> is hard, then <Tex>B</Tex> must be hard too, otherwise we could solve <Tex>A</Tex> via this reduction. This is how NP-hardness spreads.</span>
          : <span className="text-emerald">If <Tex>B</Tex> is easy (poly-time), then <Tex>A</Tex> is easy: transform, then solve <Tex>B</Tex>.</span>}
      </motion.p>
      <p className="mt-2 text-[12px] text-muted">To prove a new problem is NP-complete, reduce a known NP-complete problem to it. Reductions transfer hardness from the known case to the new one.</p>
    </div>
  );
}
