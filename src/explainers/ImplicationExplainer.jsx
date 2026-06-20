import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";
import { NOT, IMP, rows, TF } from "../lib/prop.js";

const FORMS = [
  { key: "original", label: "p\\to q", fn: (a) => IMP(a.p, a.q), color: "#6aa6f0" },
  { key: "converse", label: "q\\to p", fn: (a) => IMP(a.q, a.p), color: "#94a3bd" },
  { key: "inverse", label: "\\lnot p\\to\\lnot q", fn: (a) => IMP(NOT(a.p), NOT(a.q)), color: "#94a3bd" },
  { key: "contrapositive", label: "\\lnot q\\to\\lnot p", fn: (a) => IMP(NOT(a.q), NOT(a.p)), color: "#f6b53d" },
];

// Original vs converse, inverse, contrapositive. The contrapositive shares the original's
// column; the converse shares the inverse's. That is the whole exam trick.
export default function ImplicationExplainer() {
  const R = rows(["p", "q"]);
  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <div className="mt-3 overflow-x-auto">
        <table className="w-full min-w-[340px] border-collapse text-center font-mono text-[12px]">
          <thead>
            <tr className="text-dim">
              <th className="px-2 py-1"><Tex>p</Tex></th>
              <th className="px-2 py-1"><Tex>q</Tex></th>
              {FORMS.map((f) => (
                <th key={f.key} className="px-2.5 py-1" style={{ color: f.color }}>
                  <div><Tex>{f.label}</Tex></div>
                  <div className="text-[9px] uppercase tracking-wide opacity-80">{f.key}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {R.map((a, i) => (
              <tr key={i} className="border-t border-line">
                <td className="px-2 py-1 text-text">{TF(a.p)}</td>
                <td className="px-2 py-1 text-text">{TF(a.q)}</td>
                {FORMS.map((f) => (
                  <td key={f.key} className="px-2.5 py-1 font-bold" style={{ color: f.color }}>{TF(f.fn(a))}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3 space-y-1 text-[13px] text-muted">
        <p><span className="text-amber">Contrapositive</span> <Tex>{`\\lnot q\\to\\lnot p \\equiv p\\to q`}</Tex> (the original). Always safe to swap.</p>
        <p><span className="text-dim">Converse</span> and <span className="text-dim">inverse</span> match each other, but neither equals the original.</p>
      </motion.div>
    </div>
  );
}
