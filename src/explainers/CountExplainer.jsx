import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// m*n switches, each a pair that is in/out. Total patterns = 2^(mn).
export default function CountExplainer() {
  const [m, setM] = useState(2), [n, setN] = useState(3);
  const cells = m * n;
  const [on, setOn] = useState(() => new Set());
  const total = 2 ** cells;

  const grid = useMemo(() => Array.from({ length: cells }, (_, i) => i), [cells]);
  function flip(i) { setOn((s) => { const x = new Set(s); x.has(i) ? x.delete(i) : x.add(i); return x; }); }
  function resize(setter, v) { setter(v); setOn(new Set()); }

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <div className="mt-3 grid grid-cols-2 gap-4">
        <Slider label="|A| = m" value={m} set={(v) => resize(setM, v)} />
        <Slider label="|B| = n" value={n} set={(v) => resize(setN, v)} />
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5" style={{ maxWidth: 420 }}>
        {grid.map((i) => {
          const lit = on.has(i);
          return (
            <motion.button key={i} layout onClick={() => flip(i)}
              initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              className="grid h-8 w-12 place-items-center rounded-full border text-[10px] font-mono transition-colors"
              style={{ borderColor: lit ? "var(--color-amber)" : "var(--color-line)", background: lit ? "var(--color-amber)" : "var(--color-surface)", color: lit ? "var(--color-ink)" : "var(--color-dim)" }}>
              {lit ? "in" : "out"}
            </motion.button>
          );
        })}
      </div>

      <p className="mt-4 text-[13px] text-muted">
        <Tex>{`${m}\\times ${n} = ${cells}`}</Tex> switches, each with 2 choices.
      </p>
      <div className="mt-1 flex items-baseline gap-2">
        <Tex>{`2^{${cells}} =`}</Tex>
        <motion.span key={total} initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="font-display text-3xl font-medium text-amber">{total.toLocaleString()}</motion.span>
        <span className="text-[13px] text-dim">possible relations</span>
      </div>
    </div>
  );
}

function Slider({ label, value, set }) {
  return (
    <label className="block">
      <span className="text-[12px] text-muted">{label} = <b className="text-text tabular-nums">{value}</b></span>
      <input type="range" min={1} max={4} step={1} value={value} onChange={(e) => set(+e.target.value)}
        className="mt-1.5 w-full accent-amber" />
    </label>
  );
}
