import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

const fact = (x) => { let p = 1; for (let i = 2; i <= x; i++) p *= i; return p; };

// Circular arrangements: n around a ring = (n-1)! because rotations of the same cycle
// are identical. A necklace also lets you flip it over, so divide by 2 more.
export default function CircularExplainer() {
  const [n, setN] = useState(5);
  const [necklace, setNecklace] = useState(false);
  const base = fact(n - 1);
  const val = necklace ? base / 2 : base;
  const R = 46, cx = 60, cy = 60;
  const pts = Array.from({ length: n }, (_, i) => {
    const a = (-90 + (360 / n) * i) * (Math.PI / 180);
    return { x: cx + R * Math.cos(a), y: cy + R * Math.sin(a), i };
  });

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
        <button onClick={() => setNecklace((v) => !v)}
          className={"rounded-full border px-2.5 py-1 text-[11px] transition-colors " + (necklace ? "border-amber bg-amber/15 text-amber" : "border-line text-dim hover:text-muted")}>
          necklace (allow flip)
        </button>
      </div>

      <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center">
        <svg viewBox="0 0 120 120" className="w-[130px] shrink-0 self-center">
          <circle cx={cx} cy={cy} r={R} fill="none" stroke="var(--color-line)" strokeWidth="1.5" strokeDasharray="3 3" />
          {pts.map((p) => (
            <motion.g key={p.i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: p.i * 0.06 }}>
              <circle cx={p.x} cy={p.y} r="10" fill="var(--color-amber)" fillOpacity="0.18" stroke="var(--color-amber)" strokeWidth="1.4" />
              <text x={p.x} y={p.y + 3.5} textAnchor="middle" fontSize="10" fontFamily="var(--font-mono)" fill="var(--color-amber)">{String.fromCharCode(65 + p.i)}</text>
            </motion.g>
          ))}
        </svg>

        <div className="flex-1">
          <Slider label="people n" value={n} set={setN} min={3} max={8} />
          <div className="mt-3 space-y-1 text-[14px]">
            <div className="text-muted"><Tex>{necklace ? `\\dfrac{(n-1)!}{2} = \\dfrac{${n - 1}!}{2}` : `(n-1)! = ${n - 1}!`}</Tex></div>
            <div className="flex items-baseline gap-2">
              <span className="text-[13px] text-dim">=</span>
              <motion.span key={val} initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="font-display text-2xl font-medium text-amber">{val}</motion.span>
              <span className="text-[13px] text-dim">arrangements</span>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-3 text-[12px] text-muted">
        Fix one person to kill rotations: the other <Tex>{`${n - 1}`}</Tex> arrange in <Tex>{`(n-1)!`}</Tex> ways. A 7-bead necklace gives <Tex>{`6!/2 = 360`}</Tex>.
      </p>
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
