import { motion } from "motion/react";

// The hydrological cycle: the sun evaporates water from the sea, it condenses into clouds, falls
// as precipitation, and runs off the land back to the sea. The same water is used over and over.
export default function WaterCycleExplainer() {
  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <svg viewBox="0 0 300 160" className="mt-3 w-full">
        {/* sun */}
        <circle cx="272" cy="24" r="13" fill="rgba(246,181,61,0.25)" stroke="var(--color-amber)" strokeWidth="1.2" />
        {/* sea */}
        <rect x="0" y="128" width="120" height="32" fill="rgba(106,166,240,0.20)" />
        <text x="14" y="148" fontSize="8" fontFamily="var(--font-mono)" fill="#6aa6f0">sea</text>
        {/* land / mountain */}
        <path d="M180 160 L240 96 L300 160 Z" fill="rgba(120,140,120,0.18)" stroke="var(--color-line)" strokeWidth="1" />
        {/* cloud */}
        <g fill="rgba(154,166,178,0.22)" stroke="var(--color-muted)" strokeWidth="1">
          <ellipse cx="150" cy="40" rx="34" ry="16" />
          <ellipse cx="126" cy="46" rx="18" ry="11" /><ellipse cx="176" cy="46" rx="18" ry="11" />
        </g>
        <text x="150" y="44" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-muted)">condensation</text>
        {/* evaporation up-arrows */}
        {[50, 72, 94].map((x, i) => (
          <motion.g key={i} animate={{ y: [0, -10, 0], opacity: [0.2, 1, 0.2] }} transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.5 }}>
            <line x1={x} y1="120" x2={x} y2="64" stroke="#6aa6f0" strokeWidth="1" strokeDasharray="3 3" />
          </motion.g>
        ))}
        <text x="40" y="92" fontSize="8" fontFamily="var(--font-mono)" fill="#6aa6f0" transform="rotate(-90 40 92)">evaporation</text>
        {/* precipitation */}
        {[120, 135, 150, 165, 180].map((x, i) => (
          <motion.line key={i} x1={x} x2={x} y1="56" y2="64" stroke="#6aa6f0" strokeWidth="1.4"
            animate={{ y1: [56, 96], y2: [64, 104], opacity: [0, 1, 0] }} transition={{ duration: 1.3, repeat: Infinity, delay: i * 0.22 }} />
        ))}
        <text x="150" y="118" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="#6aa6f0">precipitation</text>
        {/* runoff */}
        <path d="M232 120 Q180 140 122 138" fill="none" stroke="#34d39a" strokeWidth="1.4" />
        <path d="M122 138 l9 -3 l-1 7 z" fill="#34d39a" />
        <text x="170" y="152" fontSize="8" fontFamily="var(--font-mono)" fill="#34d39a">runoff</text>
      </svg>

      <p className="mt-1 text-[13px] text-muted">Solar heat evaporates water, it condenses into clouds, falls as rain or snow, and runs off the land back to the sea, an endless loop driven by the sun.</p>
      <p className="mt-2 text-[12px] text-muted">The hydrosphere holds all of Earth's water; the cycle constantly redistributes a tiny fresh-water fraction that all life depends on.</p>
    </div>
  );
}
