import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";
import { NOT, AND, OR, IMP, table, classify, TF } from "../lib/prop.js";

// preset compound formulas, one per classification, plus two classic PYQ tautologies
const FORMULAS = [
  { label: "p\\lor\\lnot p", vars: ["p"], fn: (a) => OR(a.p, NOT(a.p)) },
  { label: "p\\land\\lnot p", vars: ["p"], fn: (a) => AND(a.p, NOT(a.p)) },
  { label: "p\\lor(q\\land\\lnot q)", vars: ["p", "q"], fn: (a) => OR(a.p, AND(a.q, NOT(a.q))) },
  { label: "(p\\to q)\\land(q\\to r)\\to(p\\to r)", vars: ["p", "q", "r"], fn: (a) => IMP(AND(IMP(a.p, a.q), IMP(a.q, a.r)), IMP(a.p, a.r)) },
  { label: "(\\lnot q\\land(p\\to q))\\to\\lnot p", vars: ["p", "q"], fn: (a) => IMP(AND(NOT(a.q), IMP(a.p, a.q)), NOT(a.p)) },
];
const BADGE = {
  tautology: "border-emerald/50 bg-emerald/10 text-emerald",
  contradiction: "border-rose/50 bg-rose/10 text-rose",
  contingency: "border-amber/50 bg-amber/10 text-amber",
};

// Build the truth table of a chosen formula and classify its final column.
export default function TruthTableExplainer() {
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
        <table className="w-full min-w-[280px] border-collapse text-center font-mono text-[12px]">
          <thead>
            <tr className="text-dim">
              {f.vars.map((v) => <th key={v} className="px-2 py-1"><Tex>{v}</Tex></th>)}
              <th className="px-3 py-1 text-amber"><Tex>{f.label}</Tex></th>
            </tr>
          </thead>
          <tbody>
            {rowsT.map((r, i) => (
              <tr key={i} className="border-t border-line">
                {f.vars.map((v) => <td key={v} className="px-2 py-1 text-text">{TF(r.a[v])}</td>)}
                <td className={"px-3 py-1 font-bold " + (r.v ? "text-emerald" : "text-rose")}>{TF(r.v)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <span className="text-[12px] text-dim">final column:</span>
        <motion.span key={kind} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          className={"rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wide " + BADGE[kind]}>
          {kind}
        </motion.span>
      </div>
      <p className="mt-2 text-[12px] text-muted">All T = tautology, all F = contradiction, a mix = contingency.</p>
    </div>
  );
}
