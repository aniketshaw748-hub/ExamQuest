import { useState } from "react";
import { Tex } from "../lib/rich.jsx";
import { znTable } from "../lib/algebra.js";

// A ring has TWO operations: an abelian group under +, a monoid/semigroup under ×,
// tied together by distributivity. Zn is the canonical commutative ring with unity.
export default function RingExplainer() {
  const [n, setN] = useState(4);
  const add = znTable(n, "+");
  const mul = znTable(n, "x");

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
      <div className="mt-3"><Slider label="n" value={n} set={setN} min={2} max={6} /></div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <MiniTable T={add} sym="+" caption="abelian group (id 0)" />
        <MiniTable T={mul} sym="\times" caption="monoid (id 1)" />
      </div>

      <p className="mt-3 text-[12px] text-muted">
        $(\mathbb{Z}_{n}, +, \times)$ is a commutative ring with unity: an abelian group under $+$, a monoid under $\times$, linked by distributivity $a(b+c)=ab+ac$.
      </p>
    </div>
  );
}

function MiniTable({ T, sym, caption }) {
  return (
    <div className="overflow-x-auto">
      <table className="border-collapse text-center font-mono text-[11px]">
        <thead><tr><th className="px-1.5 py-0.5 text-amber"><Tex>{sym}</Tex></th>{T[0].map((_, j) => <th key={j} className="px-1.5 py-0.5 text-dim">{j}</th>)}</tr></thead>
        <tbody>
          {T.map((row, i) => (
            <tr key={i}><th className="px-1.5 py-0.5 text-dim">{i}</th>{row.map((v, j) => <td key={j} className="px-1.5 py-0.5 text-text">{v}</td>)}</tr>
          ))}
        </tbody>
      </table>
      <p className="mt-1 font-mono text-[10px] text-dim">{caption}</p>
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
