import { useState } from "react";

// DNA packaging hierarchy: ~2 m of DNA is condensed into a ~10 micrometre nucleus through
// successive levels of coiling, from the bare double helix to the metaphase chromosome. Tap a level.
const LEVELS = [
  { name: "Double helix", size: "2 nm", desc: "The bare DNA molecule, two antiparallel strands." },
  { name: "Nucleosome", size: "11 nm", desc: "DNA wrapped on histone octamers, the 'beads on a string'." },
  { name: "30-nm fibre", size: "30 nm", desc: "Nucleosomes coil into a thicker solenoid fibre." },
  { name: "Looped domains", size: "~300 nm", desc: "The fibre loops onto a protein scaffold." },
  { name: "Chromosome", size: "~1400 nm", desc: "Loops condense further into the visible metaphase chromosome." },
];

export default function PackagingExplainer() {
  const [sel, setSel] = useState(0);
  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <svg viewBox="0 0 280 120" className="mt-3 w-full">
        <line x1="22" y1="14" x2="22" y2="106" stroke="var(--color-line)" strokeWidth="1" />
        {LEVELS.map((l, i) => {
          const y = 18 + i * 21, on = sel === i;
          // a bar whose width grows with condensation level to suggest thickening
          const w = 26 + i * 36;
          return (
            <g key={i} onClick={() => setSel(i)} style={{ cursor: "pointer" }}>
              <rect x="30" y={y - 6} width={w} height="12" rx="6" fill={on ? "rgba(246,181,61,0.3)" : "rgba(246,181,61,0.12)"} stroke={on ? "var(--color-amber)" : "var(--color-line)"} strokeWidth={on ? 1.6 : 0.8} />
              <text x={36 + w + 4} y={y + 3} fontSize="8" fontFamily="var(--font-mono)" fill={on ? "var(--color-amber)" : "var(--color-muted)"}>{l.name}</text>
            </g>
          );
        })}
      </svg>

      <div className="mt-1 rounded-md border border-line bg-surface/50 p-3">
        <p className="text-[13px] text-amber">{LEVELS[sel].name} <span className="text-dim">({LEVELS[sel].size})</span></p>
        <p className="mt-1 text-[12px] text-muted">{LEVELS[sel].desc}</p>
      </div>
      <p className="mt-3 text-[12px] text-muted">Each level coils the one before, condensing ~2 m of DNA roughly ten-thousand-fold to fit a nucleus only ~10 micrometre across, while keeping genes accessible.</p>
    </div>
  );
}
