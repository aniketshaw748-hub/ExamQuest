import { useState } from "react";
import { motion } from "motion/react";

// Mitosis makes two identical diploid cells for growth and repair; meiosis makes four genetically
// varied haploid cells for sexual reproduction. Toggle to compare.
export default function CellDivisionExplainer() {
  const [mode, setMode] = useState("mitosis");
  const meio = mode === "meiosis";
  const daughters = meio ? [40, 100, 160, 220] : [85, 175];
  const facts = meio
    ? [["Divisions", "two"], ["Daughters", "4, haploid (n)"], ["Genetics", "variable (crossing over)"], ["Purpose", "gametes"]]
    : [["Divisions", "one"], ["Daughters", "2, diploid (2n)"], ["Genetics", "identical to parent"], ["Purpose", "growth, repair"]];

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
        <div className="flex gap-1.5">
          <button onClick={() => setMode("mitosis")} className={"rounded-full border px-2.5 py-1 text-[11px] " + (!meio ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>mitosis</button>
          <button onClick={() => setMode("meiosis")} className={"rounded-full border px-2.5 py-1 text-[11px] " + (meio ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>meiosis</button>
        </div>
      </div>

      <svg viewBox="0 0 260 120" className="mx-auto mt-3 w-full max-w-[300px]">
        {/* parent (2n: 4 chromosomes, 2 colours) */}
        <circle cx="130" cy="22" r="17" fill="rgba(154,166,178,0.08)" stroke="var(--color-line)" strokeWidth="1.2" />
        <rect x="122" y="14" width="3" height="16" rx="1.5" fill="#6aa6f0" /><rect x="127" y="14" width="3" height="16" rx="1.5" fill="#6aa6f0" />
        <rect x="134" y="14" width="3" height="16" rx="1.5" fill="#f6b53d" /><rect x="139" y="14" width="3" height="16" rx="1.5" fill="#f6b53d" />
        {daughters.map((x) => <line key={x} x1="130" y1="39" x2={x} y2="78" stroke="var(--color-line)" strokeWidth="1" />)}
        {daughters.map((x, i) => (
          <motion.g key={x} initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
            <circle cx={x} cy="92" r="14" fill="rgba(154,166,178,0.08)" stroke="var(--color-line)" strokeWidth="1.2" />
            {meio
              ? <><rect x={x - 4} y="85" width="3" height="13" rx="1.5" fill={i < 2 ? "#6aa6f0" : "#f6b53d"} /><rect x={x + 1} y="85" width="3" height="13" rx="1.5" fill={i % 2 ? "#6aa6f0" : "#f6b53d"} /></>
              : <><rect x={x - 7} y="85" width="3" height="13" rx="1.5" fill="#6aa6f0" /><rect x={x - 2} y="85" width="3" height="13" rx="1.5" fill="#6aa6f0" /><rect x={x + 3} y="85" width="3" height="13" rx="1.5" fill="#f6b53d" /><rect x={x + 8} y="85" width="3" height="13" rx="1.5" fill="#f6b53d" /></>}
          </motion.g>
        ))}
        <text x="130" y="113" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-dim)">{meio ? "4 haploid cells (n)" : "2 diploid cells (2n)"}</text>
      </svg>

      <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-[12px]">
        {facts.map(([k, v]) => (<><dt key={k} className="text-dim">{k}</dt><dd className="text-muted">{v}</dd></>))}
      </dl>
      <p className="mt-3 text-[12px] text-muted">Meiosis halves the chromosome number and shuffles genes (crossing over in prophase I), so gametes are all different. Mitosis copies everything exactly, so the body's cells stay identical.</p>
    </div>
  );
}
