import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// P(n,r): fill r ordered slots. First slot has n choices, next n-1, ... down to n-r+1.
export default function PermuteExplainer() {
  const [n, setN] = useState(6);
  const [r, setR] = useState(4);
  const rr = Math.min(r, n);
  const slots = Array.from({ length: rr }, (_, i) => n - i);
  const value = slots.reduce((a, b) => a * b, 1);

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <div className="mt-3 grid grid-cols-2 gap-4">
        <Slider label="pool n" value={n} set={(v) => { setN(v); if (r > v) setR(v); }} min={1} max={9} />
        <Slider label="slots r" value={r} set={setR} min={0} max={n} />
      </div>

      <div className="mt-4 flex flex-wrap items-end gap-2">
        {slots.length === 0 && <span className="text-[13px] text-dim">r = 0, exactly one arrangement (the empty one).</span>}
        {slots.map((choices, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="text-center">
            <span className="grid h-10 w-10 place-items-center rounded-[var(--radius-field)] border border-amber/50 bg-amber/10 font-mono text-[15px] text-amber">{choices}</span>
            <span className="mt-1 block font-mono text-[9px] text-dim">slot {i + 1}</span>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 space-y-1 text-[14px]">
        <div><Tex>{`P(${n},${rr}) = ${slots.join("\\times ") || "1"} = ${value}`}</Tex></div>
        <div className="text-muted"><Tex>{`P(n,r) = \\dfrac{n!}{(n-r)!} = \\dfrac{${n}!}{${n - rr}!}`}</Tex></div>
      </div>
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
