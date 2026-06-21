import { useState } from "react";
import { motion } from "motion/react";

// An Environmental Management System (ISO 14001) runs on the Plan-Do-Check-Act cycle: a never-
// ending loop of continual improvement. Tap a quadrant to see what it means.
const STAGES = [
  { name: "Plan", x: 110, y: 30, desc: "Set environmental objectives and the processes needed to meet them." },
  { name: "Do", x: 172, y: 92, desc: "Implement the planned processes and controls." },
  { name: "Check", x: 110, y: 154, desc: "Monitor and measure performance against the objectives; audit results." },
  { name: "Act", x: 48, y: 92, desc: "Act on the findings to continually improve the system, then plan again." },
];

export default function PdcaExplainer() {
  const [sel, setSel] = useState(0);

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <div className="mt-3 flex flex-col items-center gap-4 sm:flex-row">
        <svg viewBox="0 0 220 184" className="w-full shrink-0 sm:w-[55%]">
          <circle cx="110" cy="92" r="58" fill="none" stroke="var(--color-line)" strokeWidth="1" strokeDasharray="4 4" />
          <motion.g animate={{ rotate: 360 }} transition={{ duration: 7, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "110px 92px" }}>
            <circle cx="110" cy="34" r="4" fill="var(--color-amber)" />
          </motion.g>
          {STAGES.map((s, i) => {
            const on = sel === i;
            return (
              <g key={i} onClick={() => setSel(i)} style={{ cursor: "pointer" }}>
                <circle cx={s.x} cy={s.y} r="22" fill={on ? "rgba(246,181,61,0.2)" : "rgba(52,211,154,0.08)"} stroke={on ? "var(--color-amber)" : "var(--color-line)"} strokeWidth={on ? 2 : 1} />
                <text x={s.x} y={s.y + 3} textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill={on ? "var(--color-amber)" : "var(--color-muted)"}>{s.name}</text>
              </g>
            );
          })}
          <text x="110" y="95" textAnchor="middle" fontSize="7" fontFamily="var(--font-mono)" fill="var(--color-dim)">continual</text>
          <text x="110" y="104" textAnchor="middle" fontSize="7" fontFamily="var(--font-mono)" fill="var(--color-dim)">improvement</text>
        </svg>

        <div className="flex-1 self-stretch">
          <p className="font-display text-2xl font-medium text-amber">{STAGES[sel].name}</p>
          <p className="mt-1.5 text-[12px] text-muted">{STAGES[sel].desc}</p>
        </div>
      </div>
      <p className="mt-3 text-[12px] text-muted">The cycle never stops: each loop tightens environmental performance a little more. ISO 14000 standards certify that an organisation runs this kind of system to manage and reduce its environmental footprint.</p>
    </div>
  );
}
