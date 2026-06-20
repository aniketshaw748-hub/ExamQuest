import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

const A = [1, 2, 3], B = ["x", "y"];

// A×B as a grid: each cell is the ordered pair (a,b). Tap a cell to spotlight the pair.
export default function CartesianExplainer() {
  const [sel, setSel] = useState(null);
  const [swap, setSwap] = useState(false);
  const rows = swap ? B : A, cols = swap ? A : B;

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
        <button onClick={() => { setSwap((s) => !s); setSel(null); }}
          className="rounded-full border border-line px-2.5 py-1 text-[12px] text-muted hover:text-text">
          show <Tex>{swap ? "A\\times B" : "B\\times A"}</Tex>
        </button>
      </div>

      <div className="mt-4 overflow-x-auto">
        <div className="mx-auto inline-grid gap-1.5" style={{ gridTemplateColumns: `auto repeat(${cols.length}, minmax(56px, 1fr))` }}>
          <div />
          {cols.map((c) => (
            <div key={"h" + c} className="grid place-items-center pb-1 font-display text-[15px] text-emerald">{c}</div>
          ))}
          {rows.map((r, ri) => (
            <Row key={"r" + r} r={r} ri={ri} cols={cols} swap={swap} sel={sel} setSel={setSel} />
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <Tex>{`|${swap ? "B\\times A" : "A\\times B"}| = ${rows.length}\\times ${cols.length} = ${rows.length * cols.length}`}</Tex>
        <span className="text-[13px] text-dim">
          {sel ? <>selected pair <Tex>{`(${sel[0]},\\,${sel[1]})`}</Tex></> : "tap any cell"}
        </span>
      </div>
    </div>
  );
}

function Row({ r, ri, cols, swap, sel, setSel }) {
  return (
    <>
      <div className="grid place-items-center pr-1 font-display text-[15px] text-[#6aa6f0]">{r}</div>
      {cols.map((c, ci) => {
        const pair = swap ? [r, c] : [r, c];
        const on = sel && sel[0] === pair[0] && sel[1] === pair[1];
        return (
          <motion.button key={c} onClick={() => setSel(pair)}
            initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 22, delay: (ri * cols.length + ci) * 0.04 }}
            className="grid aspect-[5/3] min-w-[56px] place-items-center rounded-[10px] border text-[13px] font-mono transition-colors"
            style={{ borderColor: on ? "var(--color-amber)" : "var(--color-line)", background: on ? "rgba(246,181,61,0.16)" : "var(--color-surface)", color: on ? "var(--color-amber)" : "var(--color-muted)" }}>
            ({pair[0]},{pair[1]})
          </motion.button>
        );
      })}
    </>
  );
}
