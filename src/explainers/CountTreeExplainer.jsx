import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// Addition vs Multiplication principle. OR = pick one item from either group (n+m).
// AND = pick one from each group, every pairing (n*m), shown as a grid.
export default function CountTreeExplainer() {
  const [n, setN] = useState(3);
  const [m, setM] = useState(4);
  const [and, setAnd] = useState(true);
  const total = and ? n * m : n + m;

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
        <div className="flex gap-1.5">
          <Mode on={and} set={() => setAnd(true)} label="one from EACH (and)" />
          <Mode on={!and} set={() => setAnd(false)} label="one from EITHER (or)" />
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-4">
        <Slider label="group A = n" value={n} set={setN} />
        <Slider label="group B = m" value={m} set={setM} />
      </div>

      {and ? (
        <div className="mt-4 inline-grid gap-1" style={{ gridTemplateColumns: `repeat(${m}, minmax(0, 1fr))` }}>
          {Array.from({ length: n * m }, (_, i) => (
            <motion.span key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.012 }}
              className="grid h-6 w-6 place-items-center rounded-[6px] border border-amber/50 bg-amber/15 text-[9px] font-mono text-amber">
              {String.fromCharCode(65 + Math.floor(i / m))}{(i % m) + 1}
            </motion.span>
          ))}
        </div>
      ) : (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {Array.from({ length: n }, (_, i) => (
            <span key={"a" + i} className="grid h-6 w-6 place-items-center rounded-full border border-[#6aa6f0]/60 bg-[#6aa6f0]/15 text-[10px] font-mono text-[#6aa6f0]">A{i + 1}</span>
          ))}
          {Array.from({ length: m }, (_, i) => (
            <span key={"b" + i} className="grid h-6 w-6 place-items-center rounded-full border border-[#34d39a]/60 bg-[#34d39a]/15 text-[10px] font-mono text-[#34d39a]">B{i + 1}</span>
          ))}
        </div>
      )}

      <div className="mt-4 flex items-baseline gap-2">
        <Tex>{and ? `${n}\\times ${m} =` : `${n} + ${m} =`}</Tex>
        <motion.span key={total} initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="font-display text-3xl font-medium text-amber">{total}</motion.span>
        <span className="text-[13px] text-dim">{and ? "pairings" : "choices"}</span>
      </div>
    </div>
  );
}

function Mode({ on, set, label }) {
  return (
    <button onClick={set} className={"rounded-full border px-2.5 py-1 text-[11px] transition-colors " + (on ? "border-amber bg-amber/15 text-amber" : "border-line text-dim hover:text-muted")}>{label}</button>
  );
}
function Slider({ label, value, set }) {
  return (
    <label className="block">
      <span className="text-[12px] text-muted">{label} = <b className="text-text tabular-nums">{value}</b></span>
      <input type="range" min={1} max={6} step={1} value={value} onChange={(e) => set(+e.target.value)} className="mt-1.5 w-full accent-amber" />
    </label>
  );
}
