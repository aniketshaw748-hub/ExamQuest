import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// Pumping lemma on L = {0^n 1^n}. Split s = xyz with y inside the 0-block.
// Repeating y i times changes the number of 0s but not 1s, so xy^i z is in L only
// when i = 1. No split survives pumping, therefore L is not regular.
const X = "0", Y = "0", Z = "0111"; // s = 000111 (n = 3); y sits in the first p symbols

const COL = { x: "#6aa6f0", y: "var(--color-amber)", z: "#6aa6f0" };

export default function PumpingExplainer() {
  const [i, setI] = useState(1);
  const segs = [
    ...[...X].map((ch) => ({ ch, seg: "x" })),
    ...Array.from({ length: i }).flatMap(() => [...Y].map((ch) => ({ ch, seg: "y" }))),
    ...[...Z].map((ch) => ({ ch, seg: "z" })),
  ];
  const zeros = segs.filter((s) => s.ch === "0").length;
  const ones = segs.filter((s) => s.ch === "1").length;
  const inL = zeros === ones;

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
      <p className="mt-2 text-[13px] text-muted">
        Take <Tex>{`L = \\{0^n 1^n\\}`}</Tex> and split a string as <Tex>{`s = xyz`}</Tex> with <Tex>{`|xy|\\le p`}</Tex>, <Tex>{`|y|\\ge 1`}</Tex>. The lemma says <Tex>{`xy^i z \\in L`}</Tex> for all <Tex>i</Tex> if <Tex>L</Tex> is regular.
    </p>

    <div className="mt-4 flex flex-wrap items-center gap-1.5">
      {segs.map((s, k) => (
        <motion.span key={k} layout initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
          className="grid h-8 w-8 place-items-center rounded-[7px] border font-mono text-[14px]"
          style={{ borderColor: COL[s.seg], background: s.seg === "y" ? "rgba(246,181,61,0.18)" : "rgba(106,166,240,0.12)", color: COL[s.seg] }}>
          {s.ch}
        </motion.span>
      ))}
    </div>
    <div className="mt-2 flex gap-4 font-mono text-[11px] text-dim">
      <span><span style={{ color: COL.x }}>x</span>=0</span>
      <span><span style={{ color: COL.y }}>y</span>=0 (the pumped part)</span>
      <span><span style={{ color: COL.z }}>z</span>=0111</span>
    </div>

    <div className="mt-4">
      <label className="block">
        <span className="text-[12px] text-muted">repeat y: <Tex>{`i = `}</Tex><b className="text-text tabular-nums">{i}</b></span>
        <input type="range" min={0} max={4} step={1} value={i} onChange={(e) => setI(+e.target.value)} className="mt-1.5 w-full accent-amber" />
      </label>
    </div>

    <div className="mt-4 flex flex-wrap items-baseline gap-3 text-[14px]">
      <Tex>{`xy^{${i}}z`}</Tex>
      <span className="font-mono text-dim">has</span>
      <span style={{ color: COL.x }} className="font-mono">{zeros} zeros</span>
      <span className="font-mono text-dim">and</span>
      <span className="font-mono text-text">{ones} ones</span>
      <motion.span key={inL ? "in" : "out"} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        className={"ml-auto rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-wide " + (inL ? "border border-emerald/50 bg-emerald/10 text-emerald" : "border border-rose/50 bg-rose/10 text-rose")}>
        {inL ? "in L" : "not in L"}
      </motion.span>
    </div>
    <p className="mt-3 text-[12px] text-muted">
      Only <Tex>{`i = 1`}</Tex> keeps the counts equal. Every other <Tex>i</Tex> leaves <Tex>L</Tex>, so no split survives pumping and <Tex>{`\\{0^n 1^n\\}`}</Tex> is not regular.
    </p>
    </div>
  );
}
