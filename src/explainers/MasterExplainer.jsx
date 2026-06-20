import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// Master theorem: T(n)=aT(n/b)+f(n). Compare f(n)=n^d against the watershed n^(log_b a).
const FS = [
  { key: "1", d: 0, tex: "1" },
  { key: "n", d: 1, tex: "n" },
  { key: "n2", d: 2, tex: "n^2" },
];

export default function MasterExplainer() {
  const [a, setA] = useState(2);
  const [b, setB] = useState(2);
  const [fi, setFi] = useState(1);
  const f = FS[fi];
  const c = Math.log(a) / Math.log(b); // log_b a
  const cR = Math.round(c * 100) / 100;
  const eps = 1e-9;
  let cse, result;
  if (f.d < c - eps) { cse = 1; result = `\\Theta(n^{${cR}})`; }
  else if (Math.abs(f.d - c) <= eps) { cse = 2; result = `\\Theta(n^{${cR}}\\log n)`; }
  else { cse = 3; result = `\\Theta(${f.tex})`; }

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
      <p className="mt-2 text-[13px] text-muted"><Tex>{`T(n) = a\\,T(n/b) + f(n)`}</Tex></p>

      <div className="mt-3 grid grid-cols-2 gap-4">
        <Slider label="a (subproblems)" value={a} set={setA} min={1} max={8} />
        <Slider label="b (shrink factor)" value={b} set={setB} min={2} max={8} />
      </div>
      <div className="mt-3">
        <span className="text-[12px] text-muted">f(n) =</span>
        <div className="mt-1.5 flex gap-1.5">
          {FS.map((g, i) => <button key={g.key} onClick={() => setFi(i)} className={"rounded-full border px-3 py-1 font-mono text-[12px] " + (i === fi ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}><Tex>{g.tex}</Tex></button>)}
        </div>
      </div>

      <div className="mt-4 space-y-1.5 text-[14px]">
        <div className="text-muted">watershed <Tex>{`n^{\\log_b a} = n^{${cR}}`}</Tex>, and <Tex>{`f(n) = n^{${f.d}}`}</Tex></div>
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-amber/40 bg-amber/10 px-2.5 py-0.5 font-mono text-[11px] text-amber">Case {cse}</span>
          <Tex>{`T(n) = ${result}`}</Tex>
        </div>
      </div>
      <p className="mt-3 text-[12px] text-muted">Whichever of leaf-work <Tex>{`n^{\\log_b a}`}</Tex> and combine-work <Tex>{`f(n)`}</Tex> dominates sets the cost; a tie multiplies by <Tex>{`\\log n`}</Tex>. Merge sort: <Tex>{`a=b=2,\\ f=n`}</Tex> gives <Tex>{`\\Theta(n\\log n)`}</Tex>.</p>
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
