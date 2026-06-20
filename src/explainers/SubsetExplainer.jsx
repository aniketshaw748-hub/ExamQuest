import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";

// Subset construction: determinize the "contains 01" NFA. Each DFA state is a SET of
// NFA states; reading a symbol moves the whole set at once. Reveal the table row by row.
const NFA = {
  start: "A",
  accept: ["C"],
  alpha: ["0", "1"],
  delta: { A: { 0: ["A", "B"], 1: ["A"] }, B: { 0: [], 1: ["C"] }, C: { 0: ["C"], 1: ["C"] } },
};
const name = (set) => "{" + [...set].sort().join(",") + "}";
const move = (set, sym) => { const r = new Set(); for (const s of set) for (const t of NFA.delta[s][sym] || []) r.add(t); return r; };
const accepts = (nm) => NFA.accept.some((a) => nm.includes(a));

function build() {
  const start = new Set([NFA.start]);
  const order = [start], seen = new Set([name(start)]), rows = [];
  for (let i = 0; i < order.length && i < 16; i++) {
    const cur = order[i], row = { name: name(cur), trans: {} };
    for (const sym of NFA.alpha) {
      const nx = move(cur, sym), nm = nx.size ? name(nx) : "∅";
      row.trans[sym] = nm;
      if (nx.size && !seen.has(nm)) { seen.add(nm); order.push(nx); }
    }
    rows.push(row);
  }
  return rows;
}

export default function SubsetExplainer() {
  const rows = useMemo(build, []);
  const [shown, setShown] = useState(1);
  const done = shown >= rows.length;
  const known = new Set(rows.slice(0, shown).map((r) => r.name));

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
      <p className="mt-2 text-[12px] text-muted">
        NFA (start A, accept C): A on 0 to {"{A,B}"}, A on 1 to {"{A}"}, B on 1 to {"{C}"}, C on 0/1 to {"{C}"}. Determinize it:
      </p>

      <div className="mt-3 overflow-x-auto">
        <table className="w-full min-w-[280px] border-collapse text-center font-mono text-[12px]">
          <thead>
            <tr className="text-dim">
              <th className="px-2 py-1 text-left">DFA state</th>
              <th className="px-2 py-1">on 0</th>
              <th className="px-2 py-1">on 1</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {rows.slice(0, shown).map((r, i) => {
                const acc = accepts(r.name);
                return (
                  <motion.tr key={r.name} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} className="border-t border-line">
                    <td className={"px-2 py-1.5 text-left " + (acc ? "font-bold text-amber" : "text-text")}>
                      {i === 0 ? "→ " : ""}{r.name}{acc ? " *" : ""}
                    </td>
                    {NFA.alpha.map((sym) => (
                      <td key={sym} className={"px-2 py-1.5 " + (known.has(r.trans[sym]) ? "text-muted" : "text-emerald")}>{r.trans[sym]}</td>
                    ))}
                  </motion.tr>
                );
              })}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      {!done ? (
        <button onClick={() => setShown((s) => s + 1)}
          className="mt-3 rounded-full bg-amber px-4 py-1.5 text-[13px] font-medium text-ink transition-transform active:scale-95">
          Process next state
        </button>
      ) : (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3 text-[13px] text-emerald">
          Done: the NFA determinizes to a {rows.length}-state DFA (states marked * accept, they contain C).
        </motion.p>
      )}
      <p className="mt-2 text-[12px] text-muted">
        Each DFA state is a set of NFA states; a green target is a newly discovered subset to process. An n-state NFA yields at most 2^n DFA states.
      </p>
    </div>
  );
}
