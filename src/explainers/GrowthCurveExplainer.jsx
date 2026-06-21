import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// Two population-growth models. Exponential (unlimited): N = N0 e^(Rt), a J-curve. Logistic (real,
// with a carrying capacity K): dN/dt = rN(1 - N/K), an S-curve that levels off at K. Growth is
// fastest, and the maximum sustainable yield (MSY) is taken, at N = K/2.
export default function GrowthCurveExplainer() {
  const [mode, setMode] = useState("logistic");
  const [r, setR] = useState(3);
  const exp = mode === "exp";
  const K = 100, N0 = 8, A = (K - N0) / N0;
  const W = 300, x0 = 30, y0 = 134, maxN = 122;
  const xOf = (t) => x0 + (t / 10) * (W - x0 - 10);
  const yOf = (N) => Math.max(10, y0 - (N / maxN) * (y0 - 12));
  const N = exp ? (t) => N0 * Math.exp(r * 0.12 * t) : (t) => K / (1 + A * Math.exp(-r * 0.18 * t));
  const pts = Array.from({ length: 80 }, (_, k) => (k / 79) * 10);
  const path = pts.map((t, k) => `${k ? "L" : "M"}${xOf(t).toFixed(1)} ${yOf(N(t)).toFixed(1)}`).join(" ");
  const tStar = Math.log(A) / (r * 0.18); // logistic inflection time, N = K/2

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
        <div className="flex gap-1.5">
          <button onClick={() => setMode("exp")} className={"rounded-full border px-2.5 py-1 text-[11px] " + (exp ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>exponential</button>
          <button onClick={() => setMode("logistic")} className={"rounded-full border px-2.5 py-1 text-[11px] " + (!exp ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>logistic</button>
        </div>
      </div>

      <svg viewBox="0 0 300 150" className="mt-3 w-full">
        <line x1={x0} y1="8" x2={x0} y2={y0} stroke="var(--color-line)" strokeWidth="1" />
        <line x1={x0} y1={y0} x2={W - 8} y2={y0} stroke="var(--color-line)" strokeWidth="1" />
        <text x="6" y="16" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-dim)">N</text>
        <text x={W - 8} y={y0 + 12} fontSize="8" textAnchor="end" fontFamily="var(--font-mono)" fill="var(--color-dim)">time</text>
        {!exp && (
          <g>
            <line x1={x0} y1={yOf(K)} x2={W - 8} y2={yOf(K)} stroke="var(--color-line)" strokeWidth="0.8" strokeDasharray="3 3" />
            <text x={W - 8} y={yOf(K) - 3} fontSize="7.5" textAnchor="end" fontFamily="var(--font-mono)" fill="var(--color-dim)">K (carrying capacity)</text>
            <line x1={x0} y1={yOf(K / 2)} x2={xOf(tStar)} y2={yOf(K / 2)} stroke="var(--color-amber)" strokeWidth="0.7" strokeDasharray="2 2" />
            <circle cx={xOf(tStar)} cy={yOf(K / 2)} r="3.5" fill="var(--color-amber)" />
            <text x={xOf(tStar) + 5} y={yOf(K / 2) + 3} fontSize="7.5" fontFamily="var(--font-mono)" fill="var(--color-amber)">MSY (K/2)</text>
          </g>
        )}
        <motion.path key={mode + r} d={path} fill="none" stroke="var(--color-amber)" strokeWidth="1.9" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5 }} />
        <text x={exp ? W - 12 : 70} y={exp ? 24 : 30} fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-amber)">{exp ? "J-curve" : "S-curve"}</text>
      </svg>

      <p className="mt-1 text-[13px] text-muted">{exp
        ? <>Unlimited growth compounds without bound: <Tex>{`N_t = N_0\\,e^{Rt}`}</Tex>, a J-shaped curve.</>
        : <>With a ceiling K, growth slows near the top: <Tex>{`\\dfrac{dN}{dt} = rN\\left(1 - \\dfrac{N}{K}\\right)`}</Tex>. It is fastest at <Tex>{`N = K/2`}</Tex>.</>}</p>
      <label className="mt-2 block"><span className="text-[12px] text-muted">growth rate r</span>
        <input type="range" min={1} max={5} step={1} value={r} onChange={(e) => setR(+e.target.value)} className="mt-1.5 w-full accent-amber" /></label>
      <p className="mt-2 text-[12px] text-muted">Real populations follow the S-curve and level off at the carrying capacity K. The maximum sustainable yield, the most you can harvest without shrinking the population, is taken at <Tex>{`N=K/2`}</Tex> where the growth rate peaks (MSY $= rK/4$).</p>
    </div>
  );
}
