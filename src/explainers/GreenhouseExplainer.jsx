import { useState } from "react";
import { motion } from "motion/react";

// The greenhouse effect: short-wave sunlight passes through the atmosphere and warms the ground,
// which re-radiates long-wave infrared. Greenhouse gases (CO2, CH4) absorb that IR and send some
// back down. More greenhouse gas traps more heat, raising the temperature.
export default function GreenhouseExplainer() {
  const [ghg, setGhg] = useState(40);
  const trapped = Math.round((ghg / 100) * 4); // of 4 IR rays, how many bounce back
  const temp = (14 + (ghg - 40) * 0.18).toFixed(1);

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <svg viewBox="0 0 300 150" className="mt-3 w-full">
        {/* sun */}
        <circle cx="34" cy="26" r="13" fill="rgba(246,181,61,0.3)" stroke="var(--color-amber)" strokeWidth="1.2" />
        {/* greenhouse-gas layer */}
        <line x1="20" y1="62" x2="280" y2="62" stroke="#9aa6b2" strokeWidth="1" strokeDasharray="5 4" />
        <text x="280" y="58" textAnchor="end" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-dim)">greenhouse gases</text>
        {/* ground */}
        <rect x="20" y="124" width="260" height="20" fill="rgba(120,140,120,0.22)" />
        {/* incoming solar (passes through) */}
        {[60, 90, 120].map((x, i) => (
          <line key={i} x1={x} y1="34" x2={x + 24} y2="122" stroke="var(--color-amber)" strokeWidth="1.4" markerEnd="url(#ghIn)" />
        ))}
        {/* outgoing IR: some escape, some bounce back */}
        {[170, 200, 230, 260].map((x, i) => {
          const back = i < trapped;
          return back
            ? <motion.g key={i}><line x1={x} y1="122" x2={x} y2="64" stroke="#f08a5d" strokeWidth="1.4" /><line x1={x} y1="64" x2={x + 10} y2="122" stroke="#f08a5d" strokeWidth="1.4" markerEnd="url(#ghBack)" /></motion.g>
            : <line key={i} x1={x} y1="122" x2={x - 6} y2="20" stroke="#6aa6f0" strokeWidth="1.4" markerEnd="url(#ghOut)" />;
        })}
        <defs>
          <marker id="ghIn" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0 0 L5 3 L0 6 z" fill="var(--color-amber)" /></marker>
          <marker id="ghOut" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0 0 L5 3 L0 6 z" fill="#6aa6f0" /></marker>
          <marker id="ghBack" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0 0 L5 3 L0 6 z" fill="#f08a5d" /></marker>
        </defs>
        <text x="74" y="48" fontSize="7" fontFamily="var(--font-mono)" fill="var(--color-amber)">sunlight</text>
        <text x="186" y="100" fontSize="7" fontFamily="var(--font-mono)" fill="#f08a5d">trapped IR</text>
      </svg>

      <div className="mt-1 flex items-center gap-2">
        <span className="text-[12px] text-muted">greenhouse-gas level</span>
        <span className="ml-auto font-mono text-[13px] text-amber">avg temp ≈ {temp}°C</span>
      </div>
      <input type="range" min={10} max={90} step={5} value={ghg} onChange={(e) => setGhg(+e.target.value)} className="mt-1.5 w-full accent-amber" />
      <p className="mt-3 text-[12px] text-muted">Some greenhouse effect is natural and keeps Earth habitable. Burning fossil fuels adds extra CO2, so more infrared is trapped instead of escaping to space, and the planet warms, global warming.</p>
    </div>
  );
}
