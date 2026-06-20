import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// Pumping lemma for context-free languages on L = {0^n 1^n 2^n}. Split s = uvxyz and pump
// v and y together. Because |vxy| <= p they sit within two symbol blocks, so pumping can
// never keep all three counts equal: L is not context-free.
const U = "00", V = "1", Xs = "1", Y = "2", Z = "2"; // s = 001122 (n = 2)
const COL = { u: "#6aa6f0", v: "var(--color-amber)", x: "#6aa6f0", y: "var(--color-amber)", z: "#6aa6f0" };

export default function CflPumpExplainer() {
  const [i, setI] = useState(1);
  const segs = [
    ...[...U].map((c) => ({ c, s: "u" })),
    ...Array.from({ length: i }).flatMap(() => [...V].map((c) => ({ c, s: "v" }))),
    ...[...Xs].map((c) => ({ c, s: "x" })),
    ...Array.from({ length: i }).flatMap(() => [...Y].map((c) => ({ c, s: "y" }))),
    ...[...Z].map((c) => ({ c, s: "z" })),
  ];
  const cnt = (d) => segs.filter((g) => g.c === d).length;
  const z0 = cnt("0"), o1 = cnt("1"), t2 = cnt("2");
  const inL = z0 === o1 && o1 === t2;

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
      <p className="mt-2 text-[13px] text-muted">CFL pumping on <Tex>{`L = \\{0^n 1^n 2^n\\}`}</Tex>: split <Tex>{`s = uvxyz`}</Tex> and repeat <Tex>v</Tex> and <Tex>y</Tex> together <Tex>i</Tex> times.</p>

      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        {segs.map((g, k) => (
          <motion.span key={k} layout initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            className="grid h-8 w-8 place-items-center rounded-[7px] border font-mono text-[14px]"
            style={{ borderColor: COL[g.s], background: g.s === "v" || g.s === "y" ? "rgba(246,181,61,0.18)" : "rgba(106,166,240,0.12)", color: COL[g.s] }}>{g.c}</motion.span>
        ))}
      </div>
      <p className="mt-2 font-mono text-[11px] text-dim">u=00, <span className="text-amber">v=1</span>, x=1, <span className="text-amber">y=2</span>, z=2 (pump v and y)</p>

      <div className="mt-3"><label className="block">
        <span className="text-[12px] text-muted">repeat: <Tex>{`i = `}</Tex><b className="text-text tabular-nums">{i}</b></span>
        <input type="range" min={0} max={3} step={1} value={i} onChange={(e) => setI(+e.target.value)} className="mt-1.5 w-full accent-amber" />
      </label></div>

      <div className="mt-3 flex flex-wrap items-baseline gap-3 text-[13px] font-mono">
        <span style={{ color: "#6aa6f0" }}>{z0} zeros</span>
        <span className="text-amber">{o1} ones</span>
        <span className="text-[#34d39a]">{t2} twos</span>
        <motion.span key={inL ? "in" : "out"} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          className={"ml-auto rounded-full px-3 py-1 text-[11px] uppercase tracking-wide " + (inL ? "border border-emerald/50 bg-emerald/10 text-emerald" : "border border-rose/50 bg-rose/10 text-rose")}>
          {inL ? "in L" : "not in L"}
        </motion.span>
      </div>
      <p className="mt-3 text-[12px] text-muted">Pumping lifts the ones and twos but never the zeros, so the three counts fall out of step for every <Tex>{`i \\ne 1`}</Tex>. No split fixes this, so <Tex>{`\\{0^n 1^n 2^n\\}`}</Tex> is not context-free.</p>
    </div>
  );
}
