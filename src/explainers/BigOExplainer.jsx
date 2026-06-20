import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// Growth-rate comparison. As n grows, the curves fan out: constant and log stay flat,
// n log n and n^2 and 2^n explode. The chart shows why asymptotic order is what matters.
const CURVES = [
  { key: "1", tex: "O(1)", f: () => 1, color: "#34d39a" },
  { key: "logn", tex: "O(\\log n)", f: (n) => Math.log2(n), color: "#6aa6f0" },
  { key: "n", tex: "O(n)", f: (n) => n, color: "#a78bfa" },
  { key: "nlogn", tex: "O(n\\log n)", f: (n) => n * Math.log2(n), color: "#f6b53d" },
  { key: "n2", tex: "O(n^2)", f: (n) => n * n, color: "#fb923c" },
  { key: "2n", tex: "O(2^n)", f: (n) => Math.pow(2, n), color: "#fb7185" },
];

export default function BigOExplainer() {
  const [n, setN] = useState(8);
  const W = 300, H = 150, pad = 8, NMAX = 16;
  const cap = CURVES.reduce((m, c) => Math.max(m, c.f(NMAX)), 1);
  const sy = (y) => H - pad - (Math.log10(1 + y) / Math.log10(1 + cap)) * (H - 2 * pad); // log-scaled so all fit
  const sx = (x) => pad + (x / NMAX) * (W - 2 * pad);
  const path = (f) => Array.from({ length: NMAX }, (_, i) => i + 1).map((x, k) => `${k ? "L" : "M"}${sx(x).toFixed(1)} ${sy(f(x)).toFixed(1)}`).join(" ");

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <svg viewBox={`0 0 ${W} ${H}`} className="mt-3 w-full">
        <line x1={pad} y1={H - pad} x2={W - pad} y2={H - pad} stroke="var(--color-line)" strokeWidth="1" />
        <line x1={sx(n)} y1={pad} x2={sx(n)} y2={H - pad} stroke="var(--color-amber)" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
        {CURVES.map((c) => <path key={c.key} d={path(c.f)} fill="none" stroke={c.color} strokeWidth="1.8" opacity="0.9" />)}
        <text x={W - pad} y={H - pad - 3} textAnchor="end" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-dim)">n (log-scaled y)</text>
      </svg>

      <div className="mt-3"><Slider label="n" value={n} set={setN} min={1} max={NMAX} /></div>

      <div className="mt-3 grid grid-cols-3 gap-1.5 text-[11px]">
        {CURVES.map((c) => (
          <motion.div key={c.key} className="flex items-center justify-between rounded-[var(--radius-field)] border border-line bg-surface/40 px-2 py-1">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full" style={{ background: c.color }} />
              <Tex>{c.tex}</Tex>
            </span>
            <span className="font-mono text-dim">{Math.round(c.f(n)).toLocaleString()}</span>
          </motion.div>
        ))}
      </div>
      <p className="mt-3 text-[12px] text-muted">At <Tex>{`n=${n}`}</Tex> the gap is already huge. Asymptotic notation keeps only the dominant term and drops constants, because for large <Tex>n</Tex> that term decides everything.</p>
    </div>
  );
}

function Slider({ label, value, set, min, max }) {
  return (
    <label className="block">
      <span className="text-[12px] text-muted">{label} = <b className="text-text tabular-nums">{value}</b></span>
      <input type="range" min={min} max={max} step={1} value={value} onChange={(e) => set(+e.target.value)} className="mt-1.5 w-full accent-amber" />
    </label>
  );
}
