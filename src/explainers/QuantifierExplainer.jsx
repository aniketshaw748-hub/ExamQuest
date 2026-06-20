import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// Domain of 5 objects; the predicate P(x) = "x is filled (amber)". Toggle objects and watch
// the two quantifiers update, plus the negation rules. Universe is non-empty so they relate.
export default function QuantifierExplainer() {
  const [on, setOn] = useState([true, true, false, true, true]);
  const all = on.every(Boolean);
  const some = on.some(Boolean);
  const toggle = (i) => setOn((s) => s.map((v, k) => (k === i ? !v : v)));

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
      <p className="mt-2 text-[12px] text-muted">Tap an object to toggle <Tex>{`P(x)`}</Tex> (amber = true). Domain has 5 objects.</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {on.map((v, i) => (
          <motion.button key={i} onClick={() => toggle(i)} whileTap={{ scale: 0.9 }}
            className="grid h-12 w-12 place-items-center rounded-[var(--radius-field)] border font-mono text-[12px] transition-colors"
            style={{
              borderColor: v ? "var(--color-amber)" : "var(--color-line)",
              background: v ? "rgba(246,181,61,0.15)" : "var(--color-surface)",
              color: v ? "var(--color-amber)" : "var(--color-dim)",
            }}>
            x{i + 1}
          </motion.button>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 text-[13px]">
        <Stmt tex="\forall x\, P(x)" val={all} note="every object true" />
        <Stmt tex="\exists x\, P(x)" val={some} note="at least one true" />
      </div>

      <div className="mt-3 rounded-[var(--radius-field)] border border-line bg-surface/40 p-3 text-[12px] text-muted">
        Negation flips the quantifier: <Tex>{`\\lnot\\forall x\\,P(x) \\equiv \\exists x\\,\\lnot P(x)`}</Tex> and <Tex>{`\\lnot\\exists x\\,P(x) \\equiv \\forall x\\,\\lnot P(x)`}</Tex>.
      </div>
    </div>
  );
}

function Stmt({ tex, val, note }) {
  return (
    <div className={"rounded-[var(--radius-field)] border p-3 " + (val ? "border-emerald/40 bg-emerald/10" : "border-rose/40 bg-rose/10")}>
      <div className="flex items-center justify-between">
        <Tex>{tex}</Tex>
        <span className={"font-mono text-[13px] font-bold " + (val ? "text-emerald" : "text-rose")}>{val ? "T" : "F"}</span>
      </div>
      <p className="mt-1 text-[11px] text-dim">{note}</p>
    </div>
  );
}
