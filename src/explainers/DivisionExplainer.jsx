import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// Division algorithm: a = b*q + r with 0 <= r < b. Bar of length a split into q
// full blocks of size b (the quotient) plus a remainder block of size r.
export default function DivisionExplainer() {
  const [a, setA] = useState(37);
  const [b, setB] = useState(5);
  const q = Math.floor(a / b);
  const r = a - b * q;

  const W = 300, pad = 10, scale = (W - 2 * pad) / Math.max(a, 1);
  const blocks = Array.from({ length: q }, (_, i) => i);

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <div className="mt-3 grid grid-cols-2 gap-4">
        <Slider label="dividend a" value={a} set={setA} min={0} max={48} />
        <Slider label="divisor b" value={b} set={setB} min={1} max={12} />
      </div>

      <svg viewBox={`0 0 ${W} 86`} className="mt-4 w-full">
        {/* full quotient blocks of size b */}
        {blocks.map((i) => (
          <motion.rect key={i} layout
            x={pad + i * b * scale + 1} y="20" width={Math.max(b * scale - 2, 1)} height="30" rx="4"
            fill="var(--color-amber)" fillOpacity="0.22" stroke="var(--color-amber)" strokeWidth="1.2"
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }} />
        ))}
        {/* remainder block */}
        {r > 0 && (
          <motion.rect x={pad + q * b * scale + 1} y="20" width={Math.max(r * scale - 2, 1)} height="30" rx="4"
            fill="#6aa6f0" fillOpacity="0.22" stroke="#6aa6f0" strokeWidth="1.2"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
        )}
        {/* ticks at every multiple of b */}
        {Array.from({ length: q + 1 }, (_, i) => (
          <line key={i} x1={pad + i * b * scale} y1="16" x2={pad + i * b * scale} y2="54"
            stroke="var(--color-line)" strokeWidth="1" />
        ))}
        <text x={pad} y="68" fill="var(--color-dim)" fontSize="10" fontFamily="var(--font-mono)">0</text>
        <text x={pad + a * scale} y="68" textAnchor="middle" fill="var(--color-amber)" fontSize="10" fontFamily="var(--font-mono)">a = {a}</text>
        {q > 0 && (
          <text x={pad + (q * b * scale) / 2} y="14" textAnchor="middle" fill="var(--color-dim)" fontSize="9.5" fontFamily="var(--font-mono)">{q} blocks of {b}</text>
        )}
        {r > 0 && (
          <text x={pad + q * b * scale + (r * scale) / 2} y="14" textAnchor="middle" fill="#6aa6f0" fontSize="9.5" fontFamily="var(--font-mono)">r</text>
        )}
      </svg>

      <div className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-[15px]">
        <Tex>{`${a} = ${b}\\cdot ${q} + ${r}`}</Tex>
        <span className="font-mono text-[11px] text-dim">quotient q = {q}, remainder r = {r}</span>
      </div>
      <p className="mt-2 text-[12px] text-muted">
        The remainder always satisfies <Tex>{`0 \\le r < b`}</Tex> ({r} {"<"} {b}). That uniqueness is the whole theorem.
      </p>
    </div>
  );
}

function Slider({ label, value, set, min, max }) {
  return (
    <label className="block">
      <span className="text-[12px] text-muted">{label} = <b className="text-text tabular-nums">{value}</b></span>
      <input type="range" min={min} max={max} step={1} value={value} onChange={(e) => set(+e.target.value)}
        className="mt-1.5 w-full accent-amber" />
    </label>
  );
}
