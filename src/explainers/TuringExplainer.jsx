import { useState } from "react";
import { motion } from "motion/react";

// A Turing machine: an infinite tape, a head that reads/writes/moves, and a finite control.
// This one complements every bit (0<->1) moving right, then halts on the first blank.
const INPUT = "0110".split("");
const BLANK = "_";

function stateAfter(steps) {
  const tape = [...INPUT, BLANK, BLANK];
  let head = 0, halted = false;
  for (let s = 0; s < steps; s++) {
    const c = tape[head];
    if (c === BLANK) { halted = true; break; }
    tape[head] = c === "0" ? "1" : "0"; // write the complement
    head += 1; // move right
  }
  if (tape[head] === BLANK) halted = true;
  return { tape, head, halted };
}

export default function TuringExplainer() {
  const [steps, setSteps] = useState(0);
  const { tape, head, halted } = stateAfter(steps);

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
      <p className="mt-2 text-[12px] text-muted">A Turing machine: tape + a head that reads, writes and moves. This one writes each bit's complement and steps right.</p>

      <div className="mt-4 flex justify-center gap-1">
        {tape.map((c, i) => (
          <div key={i} className="relative">
            <div className={"grid h-9 w-9 place-items-center rounded-[6px] border font-mono text-[15px] " + (i === head ? "border-amber bg-amber/15 text-amber" : c === BLANK ? "border-line bg-surface/30 text-dim" : "border-line bg-surface/60 text-text")}>{c}</div>
            {i === head && (
              <motion.div layoutId="tm-head" className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-amber">
                <svg width="12" height="8" viewBox="0 0 12 8"><path d="M6 0 L12 8 L0 8 Z" fill="currentColor" /></svg>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-7 flex items-center gap-3">
        <button onClick={() => setSteps((s) => s + 1)} disabled={halted}
          className="rounded-full bg-amber px-4 py-1.5 text-[13px] font-medium text-ink transition-transform active:scale-95 disabled:opacity-40">Step</button>
        <button onClick={() => setSteps(0)} className="text-[12px] text-dim hover:text-muted">reset</button>
        <span className="ml-auto font-mono text-[12px] text-dim">head at cell {head}{halted ? " · halted" : ""}</span>
      </div>
      <p className="mt-3 text-[12px] text-muted">Read, write, move, repeat. With an unbounded tape this simple loop is enough to compute anything computable, the Turing machine is the most powerful model in the hierarchy.</p>
    </div>
  );
}
