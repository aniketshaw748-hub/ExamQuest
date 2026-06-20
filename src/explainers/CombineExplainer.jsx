import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

const fact = (x) => { let p = 1; for (let i = 2; i <= x; i++) p *= i; return p; };
const C = (n, r) => (r < 0 || r > n ? 0 : fact(n) / (fact(r) * fact(n - r)));
const P = (n, r) => (r < 0 || r > n ? 0 : fact(n) / fact(n - r));

// C(n,r): choose r from n when order does NOT matter. C(n,r) = P(n,r)/r!.
export default function CombineExplainer() {
  const [n, setN] = useState(5);
  const [r, setR] = useState(3);
  const rr = Math.min(r, n);
  const val = C(n, rr);

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <div className="mt-3 grid grid-cols-2 gap-4">
        <Slider label="pool n" value={n} set={(v) => { setN(v); if (r > v) setR(v); }} min={1} max={9} />
        <Slider label="choose r" value={r} set={setR} min={0} max={n} />
      </div>

      <div className="mt-4 space-y-1.5 text-[14px]">
        <div className="text-muted"><Tex>{`C(${n},${rr}) = \\dfrac{P(${n},${rr})}{${rr}!} = \\dfrac{${P(n, rr)}}{${fact(rr)}}`}</Tex></div>
        <div className="flex items-baseline gap-2">
          <Tex>{`C(${n},${rr}) = \\dfrac{${n}!}{${rr}!\\,${n - rr}!} =`}</Tex>
          <motion.span key={val} initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="font-display text-3xl font-medium text-amber">{val}</motion.span>
        </div>
      </div>

      <p className="mt-3 rounded-[var(--radius-field)] border border-line bg-surface/40 p-3 text-[13px] text-muted">
        Symmetry: <Tex>{`C(${n},${rr}) = C(${n},${n - rr}) = ${C(n, n - rr)}`}</Tex>. Choosing which <Tex>{`${rr}`}</Tex> to keep is the same as choosing which <Tex>{`${n - rr}`}</Tex> to drop.
      </p>
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
