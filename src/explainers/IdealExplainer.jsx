import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";
import { idealOf } from "../lib/algebra.js";

const divisors = (n) => { const d = []; for (let k = 1; k <= n; k++) if (n % k === 0) d.push(k); return d; };

// An ideal absorbs multiplication: for any ring element r and any i in I, r*i stays in I.
// In Zn the multiples of a divisor d form an ideal. Tap a multiplier to watch it absorb.
export default function IdealExplainer() {
  const [n, setN] = useState(8);
  const divs = useMemo(() => divisors(n).filter((d) => d > 1 && d < n), [n]);
  const [d, setD] = useState(2);
  const dd = divs.includes(d) ? d : divs[0] || 1;
  const I = new Set(idealOf(n, dd));
  const [r, setR] = useState(3);

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <div className="mt-3 grid grid-cols-2 gap-4">
        <Slider label="n" value={n} set={(v) => setN(v)} min={4} max={12} />
        <div>
          <span className="text-[12px] text-muted">generator d</span>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {divs.map((x) => (
              <button key={x} onClick={() => setD(x)} className={"rounded-full border px-2.5 py-0.5 font-mono text-[11px] " + (x === dd ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>{x}</button>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-4 text-[12px] text-muted">Ideal <Tex>{`I = \\langle ${dd}\\rangle`}</Tex> (multiples of {dd}, amber). Multiplier <Tex>r</Tex> = {r}; each <Tex>{`r\\cdot i \\bmod ${n}`}</Tex> lands back in <Tex>I</Tex>.</p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {Array.from({ length: n }, (_, k) => {
          const inI = I.has(k);
          const hit = I.has((r * k) % n) && inI;
          return (
            <motion.span key={k} animate={{ scale: hit ? [1, 1.18, 1] : 1 }} transition={{ duration: 0.4 }}
              className={"grid h-8 w-8 place-items-center rounded-[8px] border font-mono text-[11px] " +
                (inI ? "border-amber/60 bg-amber/15 text-amber" : "border-line bg-surface/40 text-dim")}>{k}</motion.span>
          );
        })}
      </div>

      <div className="mt-3"><Slider label="multiplier r" value={r} set={setR} min={0} max={n - 1} /></div>
      <p className="mt-2 text-[12px] text-muted">Closed under $+$ and absorbs $\times$ by any ring element, that absorption is exactly what makes a subring an ideal.</p>
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
