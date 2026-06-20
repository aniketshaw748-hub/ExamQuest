import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";
import { NOT, AND, OR, IMP, table, equivalent, TF } from "../lib/prop.js";

// classic equivalences whose two sides share a truth column
const PAIRS = [
  { name: "conditional", vars: ["p", "q"], left: "p\\to q", right: "\\lnot p\\lor q", lf: (a) => IMP(a.p, a.q), rf: (a) => OR(NOT(a.p), a.q) },
  { name: "De Morgan", vars: ["p", "q"], left: "\\lnot(p\\land q)", right: "\\lnot p\\lor\\lnot q", lf: (a) => NOT(AND(a.p, a.q)), rf: (a) => OR(NOT(a.p), NOT(a.q)) },
  { name: "De Morgan 2", vars: ["p", "q"], left: "\\lnot(p\\lor q)", right: "\\lnot p\\land\\lnot q", lf: (a) => NOT(OR(a.p, a.q)), rf: (a) => AND(NOT(a.p), NOT(a.q)) },
];

// Two formulas are logically equivalent when their final truth columns match row for row.
export default function EquivalenceExplainer() {
  const [idx, setIdx] = useState(0);
  const e = PAIRS[idx];
  const L = table(e.vars, e.lf);
  const same = equivalent(e.vars, e.lf, e.rf);

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {PAIRS.map((g, i) => (
          <button key={i} onClick={() => setIdx(i)}
            className={"rounded-full border px-2.5 py-1 text-[11px] transition-colors " + (i === idx ? "border-amber bg-amber/15 text-amber" : "border-line text-dim hover:text-muted")}>
            <Tex>{g.left}</Tex>
          </button>
        ))}
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[300px] border-collapse text-center font-mono text-[12px]">
          <thead>
            <tr className="text-dim">
              {e.vars.map((v) => <th key={v} className="px-2 py-1"><Tex>{v}</Tex></th>)}
              <th className="px-3 py-1 text-[#6aa6f0]"><Tex>{e.left}</Tex></th>
              <th className="px-3 py-1 text-[#34d39a]"><Tex>{e.right}</Tex></th>
            </tr>
          </thead>
          <tbody>
            {L.map((r, i) => {
              const rv = e.rf(r.a);
              return (
                <tr key={i} className="border-t border-line">
                  {e.vars.map((v) => <td key={v} className="px-2 py-1 text-text">{TF(r.a[v])}</td>)}
                  <td className="px-3 py-1 font-bold text-[#6aa6f0]">{TF(r.v)}</td>
                  <td className="px-3 py-1 font-bold text-[#34d39a]">{TF(rv)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <motion.p key={idx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3 text-[13px]">
        {same ? <span className="text-emerald">Columns match in every row, so <Tex>{`${e.left} \\equiv ${e.right}`}</Tex>.</span>
          : <span className="text-rose">Columns differ, so not equivalent.</span>}
      </motion.p>
    </div>
  );
}
