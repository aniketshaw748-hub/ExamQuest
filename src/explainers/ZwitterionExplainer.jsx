import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// An amino acid's charge depends on pH. At low pH it is a cation (both groups protonated); at high
// pH an anion; at its isoelectric point (pI) it is a zwitterion with net charge zero. Slide the pH.
export default function ZwitterionExplainer() {
  const [pH, setPH] = useState(6);
  const pI = 6;
  const form = pH < 3 ? { t: "cation", net: "+1", amino: "NH₃⁺", acid: "COOH", c: "#f08a5d" }
    : pH > 9 ? { t: "anion", net: "−1", amino: "NH₂", acid: "COO⁻", c: "#6aa6f0" }
    : { t: "zwitterion", net: "0", amino: "NH₃⁺", acid: "COO⁻", c: "var(--color-amber)" };
  const W = 280, x0 = 16;
  const xOf = (p) => x0 + (p / 14) * (W - x0 - 8);

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      {/* the amino acid with its current protonation state */}
      <div className="mt-3 flex items-center justify-center gap-2 font-mono text-[15px]">
        <span style={{ color: form.c }}>{form.amino}</span>
        <span className="text-dim">— CHR —</span>
        <span style={{ color: form.c }}>{form.acid}</span>
      </div>

      <svg viewBox="0 0 280 44" className="mt-3 w-full">
        <line x1={x0} y1="26" x2={W - 8} y2="26" stroke="var(--color-line)" strokeWidth="1.5" />
        {[0, 7, 14].map((p) => (<g key={p}><line x1={xOf(p)} y1="22" x2={xOf(p)} y2="30" stroke="var(--color-dim)" strokeWidth="1" /><text x={xOf(p)} y="40" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-dim)">pH {p}</text></g>))}
        {/* pI marker */}
        <line x1={xOf(pI)} y1="14" x2={xOf(pI)} y2="30" stroke="var(--color-amber)" strokeWidth="1" strokeDasharray="2 2" />
        <text x={xOf(pI)} y="12" textAnchor="middle" fontSize="7.5" fontFamily="var(--font-mono)" fill="var(--color-amber)">pI</text>
        <motion.circle cy="26" r="5" fill={form.c} stroke="var(--color-ink)" strokeWidth="1" initial={false} animate={{ cx: xOf(pH) }} />
      </svg>

      <div className="mt-1 flex items-center gap-2">
        <span className="font-mono text-[12px] text-muted">pH = {pH}</span>
        <span className="ml-auto rounded-full px-3 py-1 font-mono text-[11px] uppercase" style={{ color: form.c, border: `1px solid ${form.c}66`, background: `${form.c}1a` }}>{form.t} · net {form.net}</span>
      </div>
      <input type="range" min={0} max={14} step={1} value={pH} onChange={(e) => setPH(+e.target.value)} className="mt-1.5 w-full accent-amber" />
      <p className="mt-3 text-[12px] text-muted">At the <Tex>{`\\text{isoelectric point (pI)}`}</Tex> the positive and negative charges balance: the amino acid is a <span className="text-amber">zwitterion</span> with net charge zero. This is its most stable, least soluble form, so amino acids act as buffers.</p>
    </div>
  );
}
