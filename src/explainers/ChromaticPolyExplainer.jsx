import { useState } from "react";
import { motion } from "motion/react";
import { Tex, Rich } from "../lib/rich.jsx";
import { chromComplete, chromTree, chromCycle, chromNull, chromCompleteTex } from "../lib/graph.js";

const FAMS = {
  complete: { label: "complete Kn", tex: (n) => chromCompleteTex(n), fn: chromComplete },
  tree: { label: "tree", tex: (n) => `k(k-1)^{${n - 1}}`, fn: chromTree },
  cycle: { label: "cycle Cn", tex: (n) => `(k-1)^{${n}} + (-1)^{${n}}(k-1)`, fn: chromCycle },
  null: { label: "empty (no edges)", tex: (n) => `k^{${n}}`, fn: chromNull },
};

// The chromatic polynomial P(G,k) counts proper k-colourings. Each graph family has a
// closed form; plug in k to get the number of ways.
export default function ChromaticPolyExplainer() {
  const [key, setKey] = useState("cycle");
  const [n, setN] = useState(4);
  const [k, setK] = useState(3);
  const f = FAMS[key];
  const val = f.fn(n, k);

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {Object.entries(FAMS).map(([kk, v]) => (
          <button key={kk} onClick={() => setKey(kk)} className={"rounded-full border px-2.5 py-1 text-[11px] " + (kk === key ? "border-amber bg-amber/15 text-amber" : "border-line text-dim hover:text-muted")}>{v.label}</button>
        ))}
      </div>

      <div className="mt-3 grid grid-cols-2 gap-4">
        <Slider label="vertices n" value={n} set={setN} min={2} max={6} />
        <Slider label="colours k" value={k} set={setK} min={1} max={5} />
      </div>

      <div className="mt-4 space-y-1.5 text-[14px]">
        <div className="text-muted"><Tex>{`P(G,k) = ${f.tex(n)}`}</Tex></div>
        <div className="flex items-baseline gap-2">
          <Tex>{`P(G,${k}) =`}</Tex>
          <motion.span key={val} initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="font-display text-3xl font-medium text-amber">{val}</motion.span>
          <span className="text-[13px] text-dim">proper colourings</span>
        </div>
      </div>
      <p className="mt-2 text-[12px] text-muted"><Rich inline>{`$P(G,k)=0$ until $k$ reaches the chromatic number. For $K_n$ that is $k=n$; for a tree or bipartite graph, $k=2$.`}</Rich></p>
    </div>
  );
}

function Slider({ label, value, set, min, max }) {
  return (
    <label className="block">
      <span className="text-[12px] text-muted">{label} = <b className="text-text tabular-nums">{value}</b></span>
      <input type="range" min={min} max={max} step={1} value={value} onChange={(e) => set(+e.target.value)} className="mt-1.5 w-full accent-amber" />
    </label>
  );
}
