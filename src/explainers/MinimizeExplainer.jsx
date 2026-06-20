import { useState, useMemo } from "react";
import { motion } from "motion/react";

// DFA minimization by partition refinement. Group states that no string can tell apart
// (same acceptance, transitions that stay in matching groups) and merge them.
const DFA = {
  states: ["q0", "qA", "qB"], start: "q0", accept: ["qA", "qB"], alpha: ["0", "1"],
  delta: { q0: { 0: "q0", 1: "qA" }, qA: { 0: "q0", 1: "qB" }, qB: { 0: "q0", 1: "qA" } },
};
const CLASS_COL = ["#6aa6f0", "var(--color-amber)", "#34d39a"];

function minimize(d) {
  let part = [d.states.filter((s) => !d.accept.includes(s)), d.states.filter((s) => d.accept.includes(s))].filter((g) => g.length);
  const classOf = (s, p) => p.findIndex((g) => g.includes(s));
  let changed = true;
  while (changed) {
    changed = false;
    const np = [];
    for (const g of part) {
      const buckets = new Map();
      for (const s of g) {
        const sig = d.alpha.map((a) => classOf(d.delta[s][a], part)).join("|");
        if (!buckets.has(sig)) buckets.set(sig, []);
        buckets.get(sig).push(s);
      }
      const groups = [...buckets.values()];
      if (groups.length > 1) changed = true;
      np.push(...groups);
    }
    part = np;
  }
  return part;
}

export default function MinimizeExplainer() {
  const classes = useMemo(() => minimize(DFA), []);
  const [merged, setMerged] = useState(false);
  const classOf = (s) => classes.findIndex((g) => g.includes(s));

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
      <p className="mt-2 text-[12px] text-muted">DFA for "ends in 1" (start q0; qA, qB accept). Which states are really the same?</p>

      <div className="mt-3 overflow-x-auto">
        <table className="w-full min-w-[260px] border-collapse text-center font-mono text-[12px]">
          <thead>
            <tr className="text-dim"><th className="px-2 py-1 text-left">state</th><th className="px-2 py-1">on 0</th><th className="px-2 py-1">on 1</th><th className="px-2 py-1">accept</th></tr>
          </thead>
          <tbody>
            {DFA.states.map((s) => {
              const hide = merged && s === "qB"; // qB folds into qA
              const col = CLASS_COL[classOf(s)];
              return (
                <motion.tr key={s} animate={{ opacity: hide ? 0 : 1, height: hide ? 0 : "auto" }} className="border-t border-line">
                  <td className="px-2 py-1.5 text-left" style={{ color: col }}>{merged && s === "qA" ? "{qA,qB}" : s}{s === "q0" ? " (start)" : ""}</td>
                  <td className="px-2 py-1.5 text-muted">{DFA.delta[s][0]}</td>
                  <td className="px-2 py-1.5 text-muted">{merged && DFA.delta[s][1] === "qB" ? "qA" : DFA.delta[s][1]}</td>
                  <td className="px-2 py-1.5">{DFA.accept.includes(s) ? <span className="text-amber">yes</span> : <span className="text-dim">no</span>}</td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {classes.map((g, i) => (
          <span key={i} className="rounded-full border px-2.5 py-0.5 font-mono text-[11px]" style={{ borderColor: CLASS_COL[i], color: CLASS_COL[i] }}>
            {"{" + g.join(",") + "}"}
          </span>
        ))}
      </div>

      <button onClick={() => setMerged((v) => !v)} className="mt-3 rounded-full bg-amber px-4 py-1.5 text-[13px] font-medium text-ink transition-transform active:scale-95">
        {merged ? "show original" : "merge equivalent states"}
      </button>
      <p className="mt-3 text-[12px] text-muted">
        qA and qB accept and transition identically, so no string distinguishes them. Merging gives the unique minimal DFA: {DFA.states.length} states become {classes.length}.
      </p>
    </div>
  );
}
