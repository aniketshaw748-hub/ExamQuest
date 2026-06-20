import { useState } from "react";
import { Tex } from "../lib/rich.jsx";
import { znTable } from "../lib/algebra.js";

// Cayley (operation) table of Zn under + or ×. Each row a permutation (a Latin square)
// signals a group; the identity row/column and symmetry across the diagonal are visible.
export default function CayleyExplainer() {
  const [n, setN] = useState(5);
  const [op, setOp] = useState("+");
  const T = znTable(n, op);
  const identity = op === "+" ? 0 : 1;
  // a Latin square (every value once per row and column) <=> group under that op
  const latin = T.every((row) => new Set(row).size === n) && T.every((_, j) => new Set(T.map((r) => r[j])).size === n);

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
        <div className="flex gap-1.5">
          {["+", "×"].map((o) => (
            <button key={o} onClick={() => setOp(o === "+" ? "+" : "x")}
              className={"rounded-full border px-3 py-1 font-mono text-[12px] transition-colors " + ((op === "+" ? "+" : "x") === (o === "+" ? "+" : "x") ? "border-amber bg-amber/15 text-amber" : "border-line text-dim hover:text-muted")}>
              {o}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-3"><Slider label="n" value={n} set={setN} min={2} max={8} /></div>

      <div className="mt-4 overflow-x-auto">
        <table className="border-collapse text-center font-mono text-[12px]">
          <thead>
            <tr>
              <th className="px-2 py-1 text-amber"><Tex>{op === "+" ? "+" : "\\times"}</Tex></th>
              {T[0].map((_, j) => <th key={j} className="px-2 py-1 text-dim">{j}</th>)}
            </tr>
          </thead>
          <tbody>
            {T.map((row, i) => (
              <tr key={i}>
                <th className="px-2 py-1 text-dim">{i}</th>
                {row.map((v, j) => (
                  <td key={j} className={"px-2 py-1 " + (v === identity ? "font-bold text-amber" : "text-text")}>{v}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-[12px] text-muted">
        Identity is <Tex>{String(identity)}</Tex> (highlighted). {latin
          ? <span className="text-emerald">Every row and column is a permutation, so <Tex>{`(\\mathbb{Z}_{${n}}, ${op === "+" ? "+" : "\\times"})`}</Tex> is a group.</span>
          : <span className="text-rose">Some row repeats a value, so <Tex>{`(\\mathbb{Z}_{${n}}, \\times)`}</Tex> is only a monoid (not every element has an inverse).</span>}
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
