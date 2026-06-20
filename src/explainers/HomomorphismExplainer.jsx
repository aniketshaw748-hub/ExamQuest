import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// Homomorphism f: (Z, +) -> (Zn, +), f(x) = x mod n. It preserves the operation:
// f(a+b) = f(a) + f(b) (mod n). The kernel is everything mapping to 0.
export default function HomomorphismExplainer() {
  const [n, setN] = useState(3);
  const [a, setA] = useState(4);
  const [b, setB] = useState(5);
  const fa = a % n, fb = b % n, fab = (a + b) % n, sum = (fa + fb) % n;

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
      <p className="mt-2 text-[12px] text-muted"><Tex>{`f:(\\mathbb{Z},+)\\to(\\mathbb{Z}_{${n}},+),\\ f(x)=x \\bmod ${n}`}</Tex></p>

      <div className="mt-3 grid grid-cols-3 gap-3">
        <Slider label="n" value={n} set={setN} min={2} max={6} />
        <Slider label="a" value={a} set={setA} min={0} max={11} />
        <Slider label="b" value={b} set={setB} min={0} max={11} />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 text-center text-[13px]">
        <div className="rounded-[var(--radius-field)] border border-[#6aa6f0]/40 bg-[#6aa6f0]/5 p-3">
          <p className="font-mono text-[10px] uppercase text-[#6aa6f0]">map the sum</p>
          <div className="mt-1"><Tex>{`f(${a}+${b}) = f(${a + b}) = ${fab}`}</Tex></div>
        </div>
        <div className="rounded-[var(--radius-field)] border border-[#34d39a]/40 bg-[#34d39a]/5 p-3">
          <p className="font-mono text-[10px] uppercase text-[#34d39a]">sum the maps</p>
          <div className="mt-1"><Tex>{`f(${a})+f(${b}) = ${fa}+${fb} = ${sum}`}</Tex></div>
        </div>
      </div>

      <motion.p key={fab === sum ? "ok" : "no"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3 text-center text-[14px]">
        {fab === sum
          ? <span className="text-emerald"><Tex>{`f(a+b) = f(a)+f(b) = ${fab}`}</Tex>, structure preserved.</span>
          : <span className="text-rose">mismatch</span>}
      </motion.p>
      <p className="mt-2 text-[12px] text-muted">Kernel = elements mapping to 0 = multiples of {n}. By the theorem, $f(e)=e'$ and $f(x^{-1})=f(x)^{-1}$.</p>
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
