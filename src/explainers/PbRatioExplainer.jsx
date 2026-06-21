import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// Pilling-Bedworth ratio = volume of oxide formed / volume of metal consumed. PBR < 1 gives a thin
// porous film that does not cover the metal; 1 to 2 gives a continuous protective film; > 2 gives a
// bulky film that cracks and flakes off. Only the middle range actually protects.
export default function PbRatioExplainer() {
  const [pbr, setPbr] = useState(1.4);
  const state = pbr < 1 ? { t: "porous, non-protective", c: "var(--color-rose)" }
    : pbr <= 2 ? { t: "continuous, protective", c: "#34d39a" }
    : { t: "cracked, non-protective", c: "var(--color-rose)" };
  // film segments: porous = gaps, protective = solid, cracked = split with gaps
  const segs = [];
  for (let i = 0; i < 12; i++) {
    const x = 40 + i * 18;
    if (pbr < 1 && i % 2 === 0) continue;             // porous: missing patches
    if (pbr > 2 && i % 3 === 2) continue;             // cracked: periodic gaps
    const h = pbr > 2 ? 14 : pbr < 1 ? 6 : 10;
    segs.push(<motion.rect key={i} x={x} width="14" animate={{ y: 70 - h, height: h }} transition={{ duration: 0.3 }} rx="1.5" fill={state.c} fillOpacity="0.55" />);
  }

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
      <p className="mt-2 text-[13px] text-muted">Pilling-Bedworth ratio <Tex>{`= \\dfrac{V_{oxide}}{V_{metal}}`}</Tex>: it decides whether the oxide film shields the metal underneath.</p>

      <svg viewBox="0 0 260 96" className="mt-3 w-full">
        <text x="6" y="40" fontSize="7.5" fontFamily="var(--font-mono)" fill="var(--color-dim)">oxide</text>
        {segs}
        <rect x="40" y="70" width="212" height="20" fill="rgba(154,166,178,0.20)" stroke="var(--color-line)" strokeWidth="1" />
        <text x="146" y="84" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-muted)">metal</text>
      </svg>

      <div className="mt-1 flex items-center gap-2">
        <span className="font-mono text-[13px] text-amber">PBR = {pbr.toFixed(1)}</span>
        <span className="ml-auto rounded-full px-3 py-1 font-mono text-[11px] uppercase" style={{ color: state.c, border: `1px solid ${state.c}66`, background: `${state.c}1a` }}>{state.t}</span>
      </div>
      <input type="range" min={0.5} max={3} step={0.1} value={pbr} onChange={(e) => setPbr(+e.target.value)} className="mt-1.5 w-full accent-amber" />
      <p className="mt-3 text-[12px] text-muted">PBR &lt; 1: the film is too small to cover the metal (porous, like magnesium). 1-2: a continuous adherent layer that seals the surface (aluminium). &gt; 2: too bulky, it stresses, cracks and flakes (iron), exposing fresh metal.</p>
    </div>
  );
}
