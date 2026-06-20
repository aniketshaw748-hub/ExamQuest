import { useState } from "react";
import { Tex } from "../lib/rich.jsx";
import { NOT, AND, OR, IMP, table, dnf, cnf, classify, TF } from "../lib/prop.js";

const FORMULAS = [
  { label: "\\lnot(p\\to(q\\land r))", vars: ["p", "q", "r"], fn: (a) => NOT(IMP(a.p, AND(a.q, a.r))) },
  { label: "(p\\land q)\\lor(\\lnot p\\land q)", vars: ["p", "q"], fn: (a) => OR(AND(a.p, a.q), AND(NOT(a.p), a.q)) },
  { label: "p\\leftrightarrow q", vars: ["p", "q"], fn: (a) => a.p === a.q },
];

// DNF reads off the TRUE rows (minterms, OR'd); CNF reads off the FALSE rows (maxterms, AND'd).
export default function NormalFormExplainer() {
  const [idx, setIdx] = useState(0);
  const f = FORMULAS[idx];
  const rowsT = table(f.vars, f.fn);
  const kind = classify(f.vars, f.fn);

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {FORMULAS.map((g, i) => (
          <button key={i} onClick={() => setIdx(i)}
            className={"rounded-full border px-2.5 py-1 text-[11px] transition-colors " + (i === idx ? "border-amber bg-amber/15 text-amber" : "border-line text-dim hover:text-muted")}>
            <Tex>{g.label}</Tex>
          </button>
        ))}
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[260px] border-collapse text-center font-mono text-[12px]">
          <thead>
            <tr className="text-dim">
              {f.vars.map((v) => <th key={v} className="px-2 py-1"><Tex>{v}</Tex></th>)}
              <th className="px-3 py-1 text-amber"><Tex>f</Tex></th>
              <th className="px-2 py-1 text-dim">row</th>
            </tr>
          </thead>
          <tbody>
            {rowsT.map((r, i) => (
              <tr key={i} className="border-t border-line">
                {f.vars.map((v) => <td key={v} className="px-2 py-1 text-text">{TF(r.a[v])}</td>)}
                <td className={"px-3 py-1 font-bold " + (r.v ? "text-emerald" : "text-rose")}>{TF(r.v)}</td>
                <td className="px-2 py-1 text-[10px]">{r.v ? <span className="text-emerald">minterm</span> : <span className="text-rose">maxterm</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 space-y-2 text-[13px]">
        <div className="rounded-[var(--radius-field)] border border-emerald/30 bg-emerald/5 p-2.5">
          <span className="font-mono text-[10px] uppercase text-emerald">DNF (true rows)</span>
          <div className="mt-1 break-words"><Tex>{kind === "contradiction" ? "F" : dnf(f.vars, f.fn)}</Tex></div>
        </div>
        <div className="rounded-[var(--radius-field)] border border-rose/30 bg-rose/5 p-2.5">
          <span className="font-mono text-[10px] uppercase text-rose">CNF (false rows)</span>
          <div className="mt-1 break-words"><Tex>{kind === "tautology" ? "T" : cnf(f.vars, f.fn)}</Tex></div>
        </div>
      </div>
    </div>
  );
}
