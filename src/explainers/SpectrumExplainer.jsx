import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// All absorption spectroscopy is one idea: a molecule jumps to a higher energy level by
// absorbing a photon whose energy exactly matches the gap, dE = h*nu. Different regions of the
// electromagnetic spectrum match different kinds of jump.
const REGIONS = [
  { name: "Radio (NMR)", probes: "nuclear spin flips in a magnetic field", gap: 1, color: "#6aa6f0" },
  { name: "Infrared (IR)", probes: "bond stretching and bending (vibrations)", gap: 2, color: "#34d39a" },
  { name: "Visible", probes: "outer-electron jumps (colour)", gap: 3, color: "var(--color-amber)" },
  { name: "Ultraviolet", probes: "higher electronic transitions", gap: 4, color: "var(--color-rose)" },
];

export default function SpectrumExplainer() {
  const [i, setI] = useState(1);
  const r = REGIONS[i];
  const lo = 120, hi = lo - r.gap * 20; // higher energy => taller gap

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
      <p className="mt-2 text-[13px] text-muted">A molecule absorbs a photon only when its energy matches an energy gap: <Tex>{`\\Delta E = h\\nu = hc/\\lambda`}</Tex>. Lower energy on the left.</p>

      <div className="mt-3 flex gap-1.5">
        {REGIONS.map((reg, k) => (
          <button key={k} onClick={() => setI(k)}
            className={"flex-1 rounded-md border px-1 py-1.5 text-[10px] leading-tight " + (k === i ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>
            {reg.name}
          </button>
        ))}
      </div>

      <svg viewBox="0 0 300 140" className="mt-3 w-full">
        {/* energy axis */}
        <text x="10" y="20" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-dim)">energy</text>
        <line x1="18" y1="26" x2="18" y2="130" stroke="var(--color-line)" strokeWidth="1" />
        {/* ground + excited levels */}
        <line x1="40" y1={lo} x2="150" y2={lo} stroke="var(--color-muted)" strokeWidth="2" />
        <text x="155" y={lo + 3} fontSize="9" fontFamily="var(--font-mono)" fill="var(--color-muted)">ground</text>
        <motion.line key={"ex" + i} x1="40" y1={hi} x2="150" y2={hi} stroke={r.color} strokeWidth="2"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} />
        <text x="155" y={hi + 3} fontSize="9" fontFamily="var(--font-mono)" fill={r.color}>excited</text>
        {/* photon arrow up the gap */}
        <motion.g key={"ph" + i} initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }}>
          <line x1="95" y1={lo} x2="95" y2={hi} stroke={r.color} strokeWidth="1.5" />
          <path d={`M95 ${hi} l-4 8 l8 0 z`} fill={r.color} />
        </motion.g>
        <text x="100" y={(lo + hi) / 2 + 3} fontSize="9" fontFamily="var(--font-mono)" fill={r.color}>ΔE</text>
      </svg>

      <p className="mt-1 text-[13px]"><span className="font-medium" style={{ color: "var(--color-text)" }}>{r.name}</span> <span className="text-muted">probes {r.probes}.</span></p>
      <p className="mt-2 text-[12px] text-muted">Bigger gap needs a higher-energy (shorter-wavelength) photon. That is why UV/visible light moves electrons while low-energy radio waves only flip nuclear spins (NMR).</p>
    </div>
  );
}
