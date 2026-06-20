import { useState } from "react";
import { motion } from "motion/react";

// The halting problem by diagonalization. Suppose a table says whether program i halts on
// input j. Build D that does the OPPOSITE of the diagonal: D disagrees with every program
// on its own diagonal cell, so D is no program in the table. Contradiction.
const PROGS = [
  ["H", "L", "H", "H"],
  ["L", "L", "H", "L"],
  ["H", "H", "L", "L"],
  ["L", "H", "H", "H"],
];
const flip = (x) => (x === "H" ? "L" : "H");

export default function HaltingExplainer() {
  const [showD, setShowD] = useState(false);
  const diag = PROGS.map((row, i) => row[i]);
  const D = diag.map(flip);

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
      <p className="mt-2 text-[12px] text-muted">Suppose this table told us, for every program i on input j, H = halts or L = loops. The diagonal is each program run on its own code.</p>

      <div className="mt-3 overflow-x-auto">
        <table className="border-collapse text-center font-mono text-[12px]">
          <thead>
            <tr className="text-dim"><th className="px-2 py-1"></th>{PROGS.map((_, j) => <th key={j} className="px-2 py-1">in {j + 1}</th>)}</tr>
          </thead>
          <tbody>
            {PROGS.map((row, i) => (
              <tr key={i} className="border-t border-line">
                <th className="px-2 py-1 text-dim">P{i + 1}</th>
                {row.map((c, j) => (
                  <td key={j} className={"px-2.5 py-1.5 " + (i === j ? "rounded bg-amber/20 font-bold text-amber" : c === "H" ? "text-emerald" : "text-rose")}>{c}</td>
                ))}
              </tr>
            ))}
            {showD && (
              <motion.tr initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} className="border-t border-amber/40">
                <th className="px-2 py-1 text-amber">D</th>
                {D.map((c, j) => <td key={j} className="px-2.5 py-1.5 font-bold text-amber">{c}</td>)}
              </motion.tr>
            )}
          </tbody>
        </table>
      </div>

      <button onClick={() => setShowD((v) => !v)} className="mt-3 rounded-full bg-amber px-4 py-1.5 text-[13px] font-medium text-ink transition-transform active:scale-95">
        {showD ? "hide D" : "build D = opposite of the diagonal"}
      </button>
      <p className="mt-3 text-[12px] text-muted">
        {showD
          ? "D disagrees with P_i exactly on input i, so D is not P1, P2, P3 or P4, nor any program in the list. A general halting-decider would let us build this D, so no such decider can exist. The halting problem is undecidable."
          : "Build D to flip every diagonal cell. Then D cannot be any program in the table, which is the contradiction."}
      </p>
    </div>
  );
}
