import { useState } from "react";
import { motion } from "motion/react";

// Flynn's taxonomy: classify a machine by how many instruction streams and data streams it
// runs at once. Click a quadrant for what it is and an example.
const CELLS = {
  SISD: { ins: "single", data: "single", name: "SISD", desc: "One instruction on one data item at a time.", ex: "a classic sequential CPU" },
  SIMD: { ins: "single", data: "multiple", name: "SIMD", desc: "One instruction applied to many data items at once.", ex: "vector processors, GPUs" },
  MISD: { ins: "multiple", data: "single", name: "MISD", desc: "Many instructions on a single data stream. Rare.", ex: "some fault-tolerant pipelines" },
  MIMD: { ins: "multiple", data: "multiple", name: "MIMD", desc: "Many instructions on many data streams independently.", ex: "multicore CPUs, clusters" },
};
const GRID = [["SISD", "SIMD"], ["MISD", "MIMD"]];

export default function FlynnExplainer() {
  const [sel, setSel] = useState("SIMD");
  const cur = CELLS[sel];

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="shrink-0">
          <div className="grid grid-cols-[auto_1fr_1fr] gap-1 text-center">
            <div />
            <div className="pb-1 font-mono text-[10px] text-dim">1 data</div>
            <div className="pb-1 font-mono text-[10px] text-dim">N data</div>
            {GRID.map((row, r) => (
              <RowG key={r} r={r} row={row} sel={sel} setSel={setSel} />
            ))}
          </div>
          <p className="mt-1.5 text-center font-mono text-[10px] text-dim">instruction streams (rows) x data streams (cols)</p>
        </div>

        <div className="flex-1">
          <motion.div key={sel} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-display text-[17px] font-medium text-amber">{cur.name}</p>
            <p className="mt-1 text-[13px] text-muted">{cur.desc}</p>
            <p className="mt-1.5 font-mono text-[11px] text-dim">e.g. {cur.ex}</p>
          </motion.div>
        </div>
      </div>
      <p className="mt-3 text-[12px] text-muted">Two yes/no questions, one instruction stream or many, one data stream or many, give the four classes. Most parallel machines today are SIMD (vector/GPU) or MIMD (multicore).</p>
    </div>
  );
}

function RowG({ r, row, sel, setSel }) {
  return (
    <>
      <div className="grid w-6 place-items-center font-mono text-[10px] text-dim">{r === 0 ? "1 ins" : "N ins"}</div>
      {row.map((k) => {
        const active = k === sel;
        return (
          <button key={k} onClick={() => setSel(k)}
            className={"grid h-14 w-20 place-items-center rounded-[8px] border font-mono text-[13px] transition-colors " + (active ? "border-amber bg-amber/15 text-amber" : "border-line bg-surface/40 text-muted hover:border-amber/40")}>{k}</button>
        );
      })}
    </>
  );
}
