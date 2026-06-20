import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// The complexity-class landscape (assuming P != NP): P inside NP, NP-complete at the
// overlap of NP and NP-hard, NP-hard reaching beyond NP. Click a class to read it.
const INFO = {
  P: { name: "P", col: "#34d39a", desc: "Solvable in polynomial time.", ex: "sorting, shortest paths, matching" },
  NP: { name: "NP", col: "#6aa6f0", desc: "A claimed solution is verifiable in polynomial time.", ex: "factoring, graph isomorphism" },
  NPC: { name: "NP-complete", col: "var(--color-amber)", desc: "In NP and as hard as every NP problem; a poly solution to one solves all of NP.", ex: "SAT, 3-colouring, Hamiltonian cycle" },
  NPH: { name: "NP-hard", col: "#fb7185", desc: "At least as hard as NP-complete, but need not be in NP.", ex: "halting problem, TSP optimisation" },
};

export default function NpClassesExplainer() {
  const [sel, setSel] = useState("NPC");
  const cur = INFO[sel];

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center">
        <svg viewBox="0 0 300 170" className="w-[250px] shrink-0 self-center">
          <ellipse cx="190" cy="85" rx="80" ry="62" fill={INFO.NPH.col} fillOpacity={sel === "NPH" ? 0.18 : 0.06} stroke={INFO.NPH.col} strokeWidth={sel === "NPH" ? 2 : 1.2} onClick={() => setSel("NPH")} style={{ cursor: "pointer" }} />
          <ellipse cx="110" cy="85" rx="80" ry="62" fill={INFO.NP.col} fillOpacity={sel === "NP" ? 0.16 : 0.06} stroke={INFO.NP.col} strokeWidth={sel === "NP" ? 2 : 1.2} onClick={() => setSel("NP")} style={{ cursor: "pointer" }} />
          <ellipse cx="78" cy="98" rx="40" ry="32" fill={INFO.P.col} fillOpacity={sel === "P" ? 0.2 : 0.08} stroke={INFO.P.col} strokeWidth={sel === "P" ? 2 : 1.2} onClick={() => setSel("P")} style={{ cursor: "pointer" }} />
          <text x="78" y="101" textAnchor="middle" fontSize="11" fontFamily="var(--font-mono)" fill={INFO.P.col}>P</text>
          <text x="120" y="40" textAnchor="middle" fontSize="10" fontFamily="var(--font-mono)" fill={INFO.NP.col}>NP</text>
          <text x="150" y="90" textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill="var(--color-amber)" onClick={() => setSel("NPC")} style={{ cursor: "pointer" }}>NP-c</text>
          <text x="232" y="40" textAnchor="middle" fontSize="10" fontFamily="var(--font-mono)" fill={INFO.NPH.col}>NP-hard</text>
        </svg>

        <div className="flex-1">
          <div className="flex flex-wrap gap-1.5">
            {Object.keys(INFO).map((k) => (
              <button key={k} onClick={() => setSel(k)} className={"rounded-full border px-2.5 py-1 text-[11px] " + (k === sel ? "border-amber bg-amber/15 text-amber" : "border-line text-dim hover:text-muted")}>{INFO[k].name}</button>
            ))}
          </div>
          <motion.div key={sel} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="mt-3">
            <p className="font-display text-[15px] font-medium" style={{ color: cur.col }}>{cur.name}</p>
            <p className="mt-1 text-[13px] text-muted">{cur.desc}</p>
            <p className="mt-1.5 font-mono text-[11px] text-dim">e.g. {cur.ex}</p>
          </motion.div>
        </div>
      </div>
      <p className="mt-3 text-[12px] text-muted"><Tex>{`P \\subseteq NP`}</Tex>. The big open question is whether <Tex>{`P = NP`}</Tex>. NP-complete problems are the hardest in NP: a fast algorithm for any one would collapse the whole class.</p>
    </div>
  );
}
