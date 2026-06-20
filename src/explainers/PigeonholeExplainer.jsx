import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// Generalized pigeonhole: put N objects in k boxes, some box holds at least ceil(N/k).
// Distribute as evenly as possible (the best case) and the fullest box still reaches it.
export default function PigeonholeExplainer() {
  const [N, setN] = useState(10);
  const [k, setK] = useState(3);
  const guarantee = Math.ceil(N / k);
  // even spread: first (N mod k) boxes get one extra
  const counts = Array.from({ length: k }, (_, i) => Math.floor(N / k) + (i < N % k ? 1 : 0));

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <div className="mt-3 grid grid-cols-2 gap-4">
        <Slider label="objects N" value={N} set={setN} min={1} max={24} />
        <Slider label="boxes k" value={k} set={setK} min={1} max={8} />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {counts.map((cnt, i) => {
          const fullest = cnt === guarantee;
          return (
            <div key={i} className={"rounded-[var(--radius-field)] border p-1.5 " + (fullest ? "border-amber/70 bg-amber/10" : "border-line bg-surface/40")} style={{ width: 46 }}>
              <div className="flex flex-wrap gap-0.5" style={{ minHeight: 30 }}>
                {Array.from({ length: cnt }, (_, j) => (
                  <motion.span key={j} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: (i * 0.06) + j * 0.02 }}
                    className="h-2.5 w-2.5 rounded-full" style={{ background: fullest ? "var(--color-amber)" : "#6aa6f0" }} />
                ))}
              </div>
              <p className={"mt-1 text-center font-mono text-[10px] " + (fullest ? "text-amber" : "text-dim")}>{cnt}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex items-baseline gap-2 text-[14px]">
        <Tex>{`\\left\\lceil \\dfrac{${N}}{${k}} \\right\\rceil =`}</Tex>
        <span className="font-display text-2xl font-medium text-amber">{guarantee}</span>
        <span className="text-[13px] text-dim">guaranteed in some box</span>
      </div>
      <p className="mt-2 text-[12px] text-muted">
        Even the fairest spread forces one box to hold <Tex>{`\\lceil N/k \\rceil`}</Tex>. To guarantee <Tex>{`k+1`}</Tex> of one kind among <Tex>{`n`}</Tex> kinds, you need <Tex>{`nk+1`}</Tex> picks.
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
