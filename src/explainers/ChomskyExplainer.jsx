import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// The Chomsky hierarchy as nested sets: Regular subset CFL subset CSL subset RE.
// Click a level to see its grammar form, machine, and an example language.
const LEVELS = [
  { key: "re", type: "Type 0", name: "Recursively enumerable", machine: "Turing machine", rule: "unrestricted", ex: "the halting set", inset: 0, col: "#fb7185" },
  { key: "csl", type: "Type 1", name: "Context-sensitive", machine: "Linear-bounded automaton", rule: "non-contracting", ex: "0^n 1^n 2^n", inset: 26, col: "#a78bfa" },
  { key: "cfl", type: "Type 2", name: "Context-free", machine: "Pushdown automaton", rule: "A → γ", ex: "0^n 1^n", inset: 52, col: "#6aa6f0" },
  { key: "reg", type: "Type 3", name: "Regular", machine: "Finite automaton", rule: "A → aB | a", ex: "(0+1)*01", inset: 78, col: "#34d39a" },
];

export default function ChomskyExplainer() {
  const [sel, setSel] = useState("cfl");
  const cur = LEVELS.find((l) => l.key === sel);
  const W = 280, H = 200;

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-start">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-[230px] shrink-0 self-center">
          {LEVELS.map((l) => {
            const active = l.key === sel;
            return (
              <g key={l.key} onClick={() => setSel(l.key)} style={{ cursor: "pointer" }}>
                <motion.rect x={l.inset} y={l.inset} width={W - 2 * l.inset} height={H - 2 * l.inset} rx="14"
                  fill={l.col} fillOpacity={active ? 0.16 : 0.05} stroke={l.col} strokeWidth={active ? 2 : 1.2} />
                <text x={W / 2} y={l.inset + 15} textAnchor="middle" fontSize="10" fontFamily="var(--font-mono)" fill={l.col}>{l.name}</text>
              </g>
            );
          })}
        </svg>

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px]" style={{ color: cur.col }}>{cur.type}</span>
            <span className="font-display text-[16px] font-medium text-text">{cur.name}</span>
          </div>
          <dl className="mt-2 space-y-1 text-[13px]">
            <Row k="machine" v={cur.machine} />
            <Row k="grammar rule" v={cur.rule} />
            <Row k="example" v={<Tex>{cur.ex.replace(/\^n/g, "^n").replace(/\(0\+1\)\*01/, "(0+1)^*01")}</Tex>} />
          </dl>
          <p className="mt-3 text-[12px] text-muted">Each class strictly contains the one inside it. Loosen the grammar and you climb out, gaining power but a stronger machine (and losing decidability).</p>
        </div>
      </div>
    </div>
  );
}

function Row({ k, v }) {
  return (
    <div className="flex gap-2">
      <dt className="w-24 shrink-0 font-mono text-[11px] text-dim">{k}</dt>
      <dd className="text-muted">{v}</dd>
    </div>
  );
}
