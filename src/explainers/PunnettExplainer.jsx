import { useState } from "react";
import { motion } from "motion/react";

// A Punnett square crosses the parents' gametes to predict offspring. A monohybrid cross (Tt x Tt)
// gives a 3:1 phenotype ratio; a dihybrid cross (RrYy x RrYy) gives 9:3:3:1. Toggle between them.
const sortGeno = (s) => s.split("").sort((a, b) => (a.toLowerCase() === b.toLowerCase() ? (a < b ? -1 : 1) : 0)).join("");

export default function PunnettExplainer() {
  const [mode, setMode] = useState("mono");
  const mono = mode === "mono";
  const gam = mono ? ["T", "t"] : ["RY", "Ry", "rY", "ry"];
  const n = gam.length;

  const cellOf = (r, c) => {
    if (mono) return sortGeno(gam[r] + gam[c]);
    // combine per-gene: R/r from index 0, Y/y from index 1
    const g1 = sortGeno(gam[r][0] + gam[c][0]);
    const g2 = sortGeno(gam[r][1] + gam[c][1]);
    return g1 + g2;
  };
  const phenoColor = (g) => {
    if (mono) return /T/.test(g) ? "#f6b53d" : "#6aa6f0";
    const domR = /R/.test(g), domY = /Y/.test(g);
    return domR && domY ? "#f6b53d" : domR ? "#34d39a" : domY ? "#6aa6f0" : "#fb7185";
  };

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
        <div className="flex gap-1.5">
          <button onClick={() => setMode("mono")} className={"rounded-full border px-2.5 py-1 text-[11px] " + (mono ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>monohybrid</button>
          <button onClick={() => setMode("di")} className={"rounded-full border px-2.5 py-1 text-[11px] " + (!mono ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>dihybrid</button>
        </div>
      </div>

      <p className="mt-3 text-center font-mono text-[12px] text-muted">{mono ? "Tt × Tt" : "RrYy × RrYy"}</p>
      <motion.div key={mode} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mx-auto mt-2" style={{ maxWidth: mono ? 220 : 300 }}>
        <div className="grid gap-1" style={{ gridTemplateColumns: `1.1rem repeat(${n}, 1fr)` }}>
          <div />
          {gam.map((g) => <div key={g} className="text-center font-mono text-[11px] text-amber">{g}</div>)}
          {gam.map((rg, r) => (
            <FragmentRow key={rg}>
              <div className="flex items-center justify-center font-mono text-[11px] text-amber">{rg}</div>
              {gam.map((_, c) => {
                const g = cellOf(r, c), col = phenoColor(g);
                return <div key={c} className="grid place-items-center rounded-[4px] py-1.5 font-mono text-[10px]" style={{ background: `${col}26`, color: col }}>{g}</div>;
              })}
            </FragmentRow>
          ))}
        </div>
      </motion.div>

      <p className="mt-3 text-center text-[14px]">Phenotype ratio <b className="font-medium text-amber">{mono ? "3 : 1" : "9 : 3 : 3 : 1"}</b></p>
      <p className="mt-2 text-[12px] text-muted">{mono
        ? "Three of four offspring show the dominant trait (any T), one shows the recessive (tt). The hidden recessive reappears in the next generation, Mendel's law of segregation."
        : "The two genes assort independently, so each 3:1 combines into 9:3:3:1. This is Mendel's law of independent assortment."}</p>
    </div>
  );
}

function FragmentRow({ children }) { return <>{children}</>; }
