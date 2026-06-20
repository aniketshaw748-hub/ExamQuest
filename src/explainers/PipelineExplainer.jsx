import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// Pipeline timing chart: k = 4 stages overlap across instructions. After a (k-1)-cycle
// fill, one instruction completes every cycle. n instructions take k + (n-1) cycles.
const STAGES = ["IF", "ID", "EX", "WB"];
const SCOL = ["#6aa6f0", "#34d39a", "var(--color-amber)", "#a78bfa"];
const K = STAGES.length;

export default function PipelineExplainer() {
  const [n, setN] = useState(4);
  const total = K + n - 1;
  const speedup = (n * K) / total;

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
      <p className="mt-2 text-[12px] text-muted">A {K}-stage pipeline (IF, ID, EX, WB). Each instruction shifts one stage per cycle, so they overlap.</p>

      <div className="mt-3 overflow-x-auto">
        <table className="border-collapse text-center font-mono text-[10px]">
          <thead>
            <tr className="text-dim"><th className="px-1 py-0.5"></th>{Array.from({ length: total }, (_, c) => <th key={c} className="px-1 py-0.5 font-normal">{c + 1}</th>)}</tr>
          </thead>
          <tbody>
            {Array.from({ length: n }, (_, i) => (
              <tr key={i}>
                <th className="px-1.5 py-0.5 text-right text-dim">I{i + 1}</th>
                {Array.from({ length: total }, (_, c) => {
                  const s = c - i; const on = s >= 0 && s < K;
                  return (
                    <td key={c} className="p-0.5">
                      {on
                        ? <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: (i + s) * 0.03 }}
                            className="grid h-5 w-7 place-items-center rounded-[4px] text-[9px] font-medium"
                            style={{ background: SCOL[s] + "33", color: SCOL[s], border: `1px solid ${SCOL[s]}` }}>{STAGES[s]}</motion.div>
                        : <div className="h-5 w-7" />}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-3"><label className="block">
        <span className="text-[12px] text-muted">instructions <Tex>n</Tex> = <b className="text-text tabular-nums">{n}</b></span>
        <input type="range" min={2} max={7} step={1} value={n} onChange={(e) => setN(+e.target.value)} className="mt-1.5 w-full accent-amber" />
      </label></div>

      <div className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-[13px]">
        <Tex>{`\\text{cycles} = k + (n-1) = ${K} + ${n - 1} = ${total}`}</Tex>
        <span className="flex items-baseline gap-1.5"><Tex>{`\\text{speedup} = \\dfrac{nk}{k+n-1} =`}</Tex><span className="font-display text-lg font-medium text-amber">{speedup.toFixed(2)}</span></span>
      </div>
      <p className="mt-2 text-[12px] text-muted">The first instruction takes the full {K} cycles to fill the pipe; after that one finishes every cycle. Speedup approaches {K} as <Tex>n</Tex> grows, but hazards (stalls) eat into it.</p>
    </div>
  );
}
