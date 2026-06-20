import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// concrete sample sets, with fixed element positions so membership reads visually
const A = [1, 2, 3, 4], B = [3, 4, 5, 6];
const POS = {
  1: [86, 92], 2: [104, 138], // A only (left)
  3: [150, 95], 4: [150, 140], // overlap (center)
  5: [196, 92], 6: [214, 138], // B only (right)
};
const OPS = {
  union: { label: "A \\cup B", tex: "A \\cup B", desc: "in A or B", set: [...new Set([...A, ...B])].sort() },
  inter: { label: "A \\cap B", tex: "A \\cap B", desc: "in both", set: A.filter((x) => B.includes(x)) },
  aMinusB: { label: "A \\setminus B", tex: "A \\setminus B", desc: "in A, not B", set: A.filter((x) => !B.includes(x)) },
  bMinusA: { label: "B \\setminus A", tex: "B \\setminus A", desc: "in B, not A", set: B.filter((x) => !A.includes(x)) },
  sym: { label: "A \\triangle B", tex: "A \\,\\triangle\\, B", desc: "in exactly one", set: [...A, ...B].filter((x) => A.includes(x) !== B.includes(x)).sort() },
};
const ORDER = ["union", "inter", "aMinusB", "bMinusA", "sym"];

export default function VennExplainer() {
  const [op, setOp] = useState("union");
  const active = OPS[op];
  const inResult = (n) => active.set.includes(n);

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <svg viewBox="0 0 300 210" className="mt-2 w-full">
        <defs>
          <clipPath id="inA"><circle cx="120" cy="115" r="62" /></clipPath>
          <mask id="notB"><rect width="300" height="210" fill="#fff" /><circle cx="180" cy="115" r="62" fill="#000" /></mask>
          <mask id="notA"><rect width="300" height="210" fill="#fff" /><circle cx="120" cy="115" r="62" fill="#000" /></mask>
        </defs>

        {/* base circles */}
        <circle cx="120" cy="115" r="62" fill="none" stroke="#60a5fa" strokeWidth="1.5" opacity="0.6" />
        <circle cx="180" cy="115" r="62" fill="none" stroke="#34d39a" strokeWidth="1.5" opacity="0.6" />

        {/* animated highlight regions (only the active one is visible) */}
        <Region show={op === "union"}><circle cx="120" cy="115" r="62" /><circle cx="180" cy="115" r="62" /></Region>
        <Region show={op === "inter"}><circle cx="180" cy="115" r="62" clipPath="url(#inA)" /></Region>
        <Region show={op === "aMinusB"}><circle cx="120" cy="115" r="62" mask="url(#notB)" /></Region>
        <Region show={op === "bMinusA"}><circle cx="180" cy="115" r="62" mask="url(#notA)" /></Region>
        <Region show={op === "sym"}><circle cx="120" cy="115" r="62" mask="url(#notB)" /><circle cx="180" cy="115" r="62" mask="url(#notA)" /></Region>

        <text x="92" y="58" fill="#9fb4d6" fontSize="15" fontFamily="var(--font-display)">A</text>
        <text x="200" y="58" fill="#9fdcc4" fontSize="15" fontFamily="var(--font-display)">B</text>

        {/* element dots */}
        {Object.entries(POS).map(([n, [x, y]]) => {
          const on = inResult(+n);
          return (
            <g key={n}>
              <motion.circle cx={x} cy={y} r="13" animate={{ fill: on ? "#f6b53d" : "#1a2336", scale: on ? 1 : 0.86 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }} style={{ originX: `${x}px`, originY: `${y}px` }} stroke="#25304a" strokeWidth="1" />
              <text x={x} y={y + 4} textAnchor="middle" fontSize="12" fontFamily="var(--font-mono)" fill={on ? "#0a0e17" : "#94a3bd"} fontWeight="600">{n}</text>
            </g>
          );
        })}
      </svg>

      {/* op tabs */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {ORDER.map((k) => (
          <button key={k} onClick={() => setOp(k)}
            className={"relative rounded-full px-3 py-1.5 text-[13px] transition-colors " + (op === k ? "text-ink" : "text-muted hover:text-text")}>
            {op === k && <motion.span layoutId="vennTab" className="absolute inset-0 rounded-full bg-amber" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
            <span className="relative"><Tex>{OPS[k].label}</Tex></span>
          </button>
        ))}
      </div>

      {/* live result */}
      <div className="mt-4 flex items-baseline gap-3">
        <Tex>{active.tex + " = \\{" + active.set.join(", ") + "\\}"}</Tex>
        <span className="text-[13px] text-dim">{active.desc}</span>
      </div>
      <p className="mt-1 text-[12px] text-dim">
        with <Tex>{"A=\\{1,2,3,4\\}"}</Tex>, <Tex>{"B=\\{3,4,5,6\\}"}</Tex>
      </p>
    </div>
  );
}

function Region({ show, children }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 0.22 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }} fill="#f6b53d">
          {children}
        </motion.g>
      )}
    </AnimatePresence>
  );
}
