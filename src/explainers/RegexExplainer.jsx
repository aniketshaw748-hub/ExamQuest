import { useState } from "react";
import { motion } from "motion/react";

// Regular expressions over {0,1}. Pick a pattern, type a string, see it match or not.
// The formal pattern is shown in automata notation (+ = or, * = zero or more); strings
// are tested with the equivalent matcher. Kleene: every regex has an equivalent automaton.
const PRESETS = [
  { label: "(0+1)*01", desc: "strings ending in 01", re: /^(0|1)*01$/, tests: ["01", "1101", "010", "100"] },
  { label: "0*1*", desc: "some 0s then some 1s", re: /^0*1*$/, tests: ["0011", "000", "11", "0101"] },
  { label: "(00)*", desc: "an even number of 0s", re: /^(00)*$/, tests: ["", "00", "0000", "000"] },
];

export default function RegexExplainer() {
  const [idx, setIdx] = useState(0);
  const [str, setStr] = useState("01");
  const p = PRESETS[idx];
  const ok = p.re.test(str);
  const pick = (i) => { setIdx(i); setStr(PRESETS[i].tests[0]); };

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
        <div className="flex flex-wrap gap-1.5">
          {PRESETS.map((g, i) => (
            <button key={i} onClick={() => pick(i)} className={"rounded-full border px-2.5 py-1 font-mono text-[11px] transition-colors " + (i === idx ? "border-amber bg-amber/15 text-amber" : "border-line text-dim hover:text-muted")}>{g.label}</button>
          ))}
        </div>
      </div>

      <p className="mt-2 text-[13px] text-muted">Matches {p.desc}. The <span className="font-mono text-text">*</span> means "zero or more", <span className="font-mono text-text">+</span> means "or".</p>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="text-[12px] text-dim">test:</span>
        <input value={str} onChange={(e) => setStr(e.target.value.replace(/[^01]/g, "").slice(0, 12))} placeholder="type 0s and 1s"
          className="w-44 rounded-[var(--radius-field)] border border-line bg-surface px-3 py-1.5 font-mono text-[14px] text-text outline-none focus:border-amber/50" />
        <motion.span key={String(ok) + str} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          className={"rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-wide " + (ok ? "border border-emerald/50 bg-emerald/10 text-emerald" : "border border-rose/50 bg-rose/10 text-rose")}>{ok ? "match" : "no match"}</motion.span>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {p.tests.map((t) => {
          const m = p.re.test(t);
          return (
            <button key={t || "eps"} onClick={() => setStr(t)}
              className={"inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[11px] " + (t === str ? "border-amber text-amber" : "border-line text-dim hover:text-muted")}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: m ? "var(--color-emerald)" : "var(--color-rose)" }} />
              {t === "" ? "ε" : t}
            </button>
          );
        })}
      </div>

      <p className="mt-3 text-[12px] text-muted">Kleene's theorem: every regular expression has an equivalent finite automaton, and vice versa, so this pattern and a DFA describe the same language.</p>
    </div>
  );
}
