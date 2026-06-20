import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// Dynamic programming on Fibonacci: fill a table bottom-up, each cell the sum of the two
// before it. Every subproblem is solved once and reused, turning exponential into linear.
const N = 9;
const FIB = (() => { const f = [0, 1]; for (let i = 2; i <= N; i++) f.push(f[i - 1] + f[i - 2]); return f; })();

export default function DpTableExplainer() {
  const [filled, setFilled] = useState(2); // dp[0], dp[1] are the base cases
  const done = filled > N;

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
      <p className="mt-2 text-[13px] text-muted"><Tex>{`F(i) = F(i-1) + F(i-2)`}</Tex>. Fill the table left to right, reusing the cells already computed.</p>

      <div className="mt-3 overflow-x-auto">
        <table className="border-collapse text-center font-mono text-[12px]">
          <thead><tr className="text-dim">{FIB.map((_, i) => <th key={i} className="px-1.5 py-1">i={i}</th>)}</tr></thead>
          <tbody>
            <tr>
              {FIB.map((v, i) => {
                const shown = i < filled;
                const isNew = i === filled - 1 && i >= 2;
                const isSrc = !done && (i === filled - 1 || i === filled - 2) && filled <= N;
                return (
                  <td key={i} className="px-1.5 py-1">
                    <motion.div animate={{ scale: isNew ? [1, 1.18, 1] : 1 }}
                      className={"grid h-9 w-9 place-items-center rounded-[7px] border " +
                        (!shown ? "border-line/60 bg-surface/20 text-dim/50" : isSrc ? "border-[#6aa6f0]/70 bg-[#6aa6f0]/10 text-[#6aa6f0]" : "border-amber/50 bg-amber/10 text-amber")}>
                      {shown ? v : ""}
                    </motion.div>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-3 flex items-center gap-2">
        {!done ? (
          <button onClick={() => setFilled((f) => f + 1)} className="rounded-full bg-amber px-4 py-1.5 text-[13px] font-medium text-ink transition-transform active:scale-95">
            compute F({filled})
          </button>
        ) : (
          <span className="text-[13px] text-emerald"><Tex>{`F(${N}) = ${FIB[N]}`}</Tex>, in <Tex>{`${N}`}</Tex> additions instead of exponential recursion.</span>
        )}
        <button onClick={() => setFilled(2)} className="ml-auto text-[12px] text-dim hover:text-muted">reset</button>
      </div>
      <p className="mt-3 text-[12px] text-muted">Naive recursion recomputes the same <Tex>F(i)</Tex> exponentially many times. Storing each answer once (overlapping subproblems + optimal substructure) is what makes it <Tex>{`\\Theta(n)`}</Tex>.</p>
    </div>
  );
}
