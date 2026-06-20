import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// PDA for L = {0^n 1^n}: push X for each 0, pop an X for each 1. Accept when the input
// is consumed AND the stack is empty. The stack is the memory a finite automaton lacks.
const INPUTS = ["0011", "000111", "001", "0101"];

function run(input, pos) {
  const stack = []; let ok = true, phase = 0;
  for (let i = 0; i < pos; i++) {
    const ch = input[i];
    if (ch === "0") { if (phase === 1) ok = false; else stack.push("X"); }
    else { phase = 1; if (stack.length) stack.pop(); else ok = false; }
  }
  return { stack, ok };
}

export default function PdaExplainer() {
  const [input, setInput] = useState("0011");
  const [pos, setPos] = useState(0);
  const { stack, ok } = run(input, pos);
  const done = pos >= input.length;
  const accepted = done && ok && stack.length === 0;

  const setStr = (s) => { setInput(s); setPos(0); };

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
      <p className="mt-2 text-[12px] text-muted">PDA for <Tex>{`\\{0^n 1^n\\}`}</Tex>: read a 0 to push <span className="font-mono text-amber">X</span>, read a 1 to pop one. Accept if the stack ends empty.</p>

      <div className="mt-3 flex items-end gap-6">
        {/* input tape */}
        <div>
          <p className="mb-1 text-[11px] text-dim">input</p>
          <div className="flex gap-1 font-mono text-[14px]">
            {input.split("").map((ch, i) => (
              <span key={i} className={"grid h-7 w-7 place-items-center rounded-[6px] border " + (i < pos ? "border-line bg-surface/30 text-dim" : i === pos && !done ? "border-amber bg-amber/15 text-amber" : "border-line bg-surface/50 text-text")}>{ch}</span>
            ))}
          </div>
        </div>
        {/* stack */}
        <div>
          <p className="mb-1 text-[11px] text-dim">stack</p>
          <div className="flex w-9 flex-col-reverse items-stretch gap-1 rounded-[8px] border border-line bg-surface/30 p-1" style={{ minHeight: 70 }}>
            <AnimatePresence>
              {stack.map((_, i) => (
                <motion.span key={i} initial={{ y: -12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ opacity: 0 }}
                  className="grid h-6 place-items-center rounded-[5px] bg-amber/20 font-mono text-[12px] text-amber">X</motion.span>
              ))}
            </AnimatePresence>
            {stack.length === 0 && <span className="grid h-6 place-items-center font-mono text-[10px] text-dim">empty</span>}
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {INPUTS.map((s) => <button key={s} onClick={() => setStr(s)} className={"rounded-full border px-2 py-0.5 font-mono text-[11px] " + (s === input ? "border-amber bg-amber/15 text-amber" : "border-line text-dim hover:text-muted")}>{s}</button>)}
      </div>

      <div className="mt-3 flex items-center gap-2">
        <button onClick={() => setPos((p) => Math.min(p + 1, input.length))} disabled={done}
          className="rounded-full bg-amber px-4 py-1.5 text-[13px] font-medium text-ink transition-transform active:scale-95 disabled:opacity-40">Read symbol</button>
        <button onClick={() => setPos(0)} className="text-[12px] text-dim hover:text-muted">reset</button>
        {done && (
          <motion.span initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            className={"ml-auto rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-wide " + (accepted ? "border border-emerald/50 bg-emerald/10 text-emerald" : "border border-rose/50 bg-rose/10 text-rose")}>
            {accepted ? "accepted" : "rejected"}
          </motion.span>
        )}
      </div>
      <p className="mt-3 text-[12px] text-muted">The stack counts the 0s so the PDA can match them against the 1s, something a finite automaton cannot do. That extra memory is exactly what makes PDAs recognize context-free languages.</p>
    </div>
  );
}
