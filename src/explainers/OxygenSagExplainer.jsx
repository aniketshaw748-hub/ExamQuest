import { useState } from "react";
import { motion } from "motion/react";

// When organic waste enters a river, bacteria decompose it and consume dissolved oxygen (DO). DO
// dips downstream of the discharge (the oxygen sag) then recovers as the river reaerates. A bigger
// waste load (higher BOD) means a deeper sag, and below a threshold fish cannot survive.
export default function OxygenSagExplainer() {
  const [load, setLoad] = useState(3);
  const sat = 90, W = 300, x0 = 30;
  const xOf = (x) => x0 + x * (W - x0 - 10);
  const yOf = (d) => 132 - (d / 100) * 118;
  const DO = (x) => { const xp = Math.max(0, x - 0.1); const deficit = load * 80 * xp * Math.exp(-3 * xp); return Math.max(8, sat - deficit); };
  const pts = Array.from({ length: 60 }, (_, k) => k / 59);
  const path = pts.map((x, k) => `${k ? "L" : "M"}${xOf(x).toFixed(1)} ${yOf(DO(x)).toFixed(1)}`).join(" ");
  const minDO = Math.min(...pts.map(DO));

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <svg viewBox="0 0 300 150" className="mt-3 w-full">
        <line x1={x0} y1={yOf(sat)} x2={W - 8} y2={yOf(sat)} stroke="var(--color-line)" strokeWidth="1" strokeDasharray="3 3" />
        <text x={W - 8} y={yOf(sat) - 3} textAnchor="end" fontSize="7.5" fontFamily="var(--font-mono)" fill="var(--color-dim)">saturation</text>
        <line x1={x0} y1={yOf(40)} x2={W - 8} y2={yOf(40)} stroke="var(--color-rose)" strokeWidth="0.8" strokeDasharray="2 2" />
        <text x={W - 8} y={yOf(40) - 3} textAnchor="end" fontSize="7" fontFamily="var(--font-mono)" fill="var(--color-rose)">fish stress</text>
        <line x1={x0} y1="8" x2={x0} y2="134" stroke="var(--color-line)" strokeWidth="1" />
        <text x="6" y="16" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-dim)">DO</text>
        <text x={W - 8} y="146" textAnchor="end" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-dim)">distance downstream</text>
        {/* discharge point */}
        <line x1={xOf(0.1)} y1="8" x2={xOf(0.1)} y2="134" stroke="var(--color-amber)" strokeWidth="0.8" strokeDasharray="2 2" />
        <text x={xOf(0.1) + 3} y="16" fontSize="7" fontFamily="var(--font-mono)" fill="var(--color-amber)">waste in</text>
        <motion.path key={load} d={path} fill="none" stroke="#34b4dc" strokeWidth="1.8" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5 }} />
      </svg>

      <div className="mt-1 flex items-center gap-2">
        <span className="text-[12px] text-muted">waste load (BOD)</span>
        <span className={"ml-auto rounded-full px-3 py-1 font-mono text-[11px] uppercase " + (minDO < 40 ? "border border-rose/50 bg-rose/10 text-rose" : "border border-emerald/50 bg-emerald/10 text-emerald")}>min DO {Math.round(minDO)}%</span>
      </div>
      <input type="range" min={1} max={5} step={1} value={load} onChange={(e) => setLoad(+e.target.value)} className="mt-1.5 w-full accent-amber" />
      <p className="mt-3 text-[12px] text-muted">Bacteria break down the organic waste using oxygen, so DO drops just downstream (high BOD). Further on, the river reaerates and DO recovers. A heavy load drives DO below the level fish can tolerate, creating a dead stretch.</p>
    </div>
  );
}
