import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// Molecular orbital theory: two atomic orbitals combine into a lower-energy bonding MO and a
// higher-energy antibonding MO. Fill electrons bonding-first; bond order = (bonding - anti)/2.
export default function MotExplainer() {
  const [e, setE] = useState(2);
  const bond = Math.min(e, 2);
  const anti = Math.max(0, Math.min(e - 2, 2));
  const order = (bond - anti) / 2;
  const dots = (n, cxs, y) => cxs.slice(0, n).map((x, i) => <circle key={i} cx={x} cy={y} r="3.5" fill="var(--color-amber)" />);

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <svg viewBox="0 0 300 150" className="mt-3 w-full">
        {/* connectors */}
        <line x1="70" y1="75" x2="150" y2="30" stroke="var(--color-line)" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="230" y1="75" x2="150" y2="30" stroke="var(--color-line)" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="70" y1="75" x2="150" y2="120" stroke="var(--color-line)" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="230" y1="75" x2="150" y2="120" stroke="var(--color-line)" strokeWidth="1" strokeDasharray="3 3" />
        {/* atomic orbitals */}
        <line x1="50" y1="75" x2="90" y2="75" stroke="#6aa6f0" strokeWidth="2" />
        <text x="70" y="68" textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill="#6aa6f0">A</text>
        <line x1="210" y1="75" x2="250" y2="75" stroke="#34d39a" strokeWidth="2" />
        <text x="230" y="68" textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill="#34d39a">B</text>
        {/* antibonding (top) */}
        <line x1="120" y1="30" x2="180" y2="30" stroke="var(--color-rose)" strokeWidth="2" />
        <text x="186" y="33" fontSize="9" fontFamily="var(--font-mono)" fill="var(--color-rose)">σ*</text>
        {dots(anti, [138, 162], 30)}
        {/* bonding (bottom) */}
        <line x1="120" y1="120" x2="180" y2="120" stroke="var(--color-amber)" strokeWidth="2" />
        <text x="186" y="123" fontSize="9" fontFamily="var(--font-mono)" fill="var(--color-amber)">σ</text>
        {dots(bond, [138, 162], 120)}
        <text x="14" y="32" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-dim)">energy</text>
        <line x1="22" y1="40" x2="22" y2="115" stroke="var(--color-line)" strokeWidth="1" markerEnd="" />
      </svg>

      <div className="mt-2"><label className="block">
        <span className="text-[12px] text-muted">total electrons = <b className="text-text tabular-nums">{e}</b></span>
        <input type="range" min={1} max={4} step={1} value={e} onChange={(e2) => setE(+e2.target.value)} className="mt-1.5 w-full accent-amber" />
      </label></div>

      <div className="mt-3 flex flex-wrap items-baseline gap-3 text-[13px]">
        <Tex>{`\\text{bond order} = \\dfrac{${bond} - ${anti}}{2} = ${order}`}</Tex>
        <span className={"ml-auto rounded-full px-3 py-1 font-mono text-[11px] uppercase " + (order > 0 ? "border border-emerald/50 bg-emerald/10 text-emerald" : "border border-rose/50 bg-rose/10 text-rose")}>
          {order > 0 ? "bond forms" : "no bond"}
        </span>
      </div>
      <p className="mt-3 text-[12px] text-muted">Electrons fill the bonding MO first. H₂ (2 electrons) has bond order 1 and is stable; He₂ (4 electrons) fills the antibonding MO too, giving bond order 0, so it does not bond.</p>
    </div>
  );
}
