import { useState } from "react";
import { motion } from "motion/react";

// A chiral carbon has four different groups, so its mirror image cannot be rotated to match it,
// exactly like left and right hands. The two mirror images are enantiomers. Try flipping one.
const GROUPS = [
  { d: "M0 0 L0 -34", x: 0, y: -42, t: "Cl", c: "#34d39a" },
  { d: "M0 0 L-30 22", x: -38, y: 30, t: "F", c: "#6aa6f0" },
  { d: "M0 0 L30 22", x: 38, y: 30, t: "Br", c: "var(--color-amber)" },
  { d: "M0 0 L0 30", x: 0, y: 44, t: "H", c: "var(--color-muted)" },
];

function Mol({ cx, mirror, label }) {
  // mirror flips left/right groups (F and Br swap sides)
  const gs = mirror ? GROUPS.map((g) => ({ ...g, d: g.d.replace(/-?30/g, (m) => String(-Number(m))), x: -g.x })) : GROUPS;
  return (
    <g transform={`translate(${cx} 78)`}>
      {gs.map((g, i) => <path key={i} d={g.d} stroke="var(--color-line)" strokeWidth="1.6" fill="none" />)}
      {gs.map((g, i) => (
        <g key={"t" + i}><circle cx={g.x} cy={g.y} r="9" fill={`${g.c}22`} stroke={g.c} strokeWidth="1" />
          <text x={g.x} y={g.y + 3} textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill={g.c}>{g.t}</text></g>
      ))}
      <circle r="6" fill="var(--color-amber)" fillOpacity="0.85" />
      <text x="0" y="-52" textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill="var(--color-muted)">{label}</text>
    </g>
  );
}

export default function ChiralityExplainer() {
  const [flip, setFlip] = useState(false);

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
        <button onClick={() => setFlip((f) => !f)} className="rounded-full border border-line px-2.5 py-1 text-[11px] text-dim hover:border-amber/40 hover:text-amber">
          {flip ? "undo flip" : "flip right 180°"}
        </button>
      </div>

      <svg viewBox="0 0 300 150" className="mt-3 w-full">
        <line x1="150" y1="14" x2="150" y2="140" stroke="var(--color-line)" strokeWidth="1" strokeDasharray="4 4" />
        <text x="150" y="12" textAnchor="middle" fontSize="7.5" fontFamily="var(--font-mono)" fill="var(--color-dim)">mirror</text>
        <Mol cx={78} mirror={false} label="(R)" />
        <motion.g animate={{ rotate: flip ? 180 : 0 }} transition={{ duration: 0.6 }} style={{ transformOrigin: "222px 78px" }}>
          <Mol cx={222} mirror={true} label="(S)" />
        </motion.g>
      </svg>

      <p className="mt-1 text-[13px] text-muted">{flip
        ? <>Even after rotating, the groups line up differently, you can never overlay them. They are <span className="text-amber">non-superimposable</span>.</>
        : <>The right molecule is the left one's mirror image. Four different groups on the carbon make it <span className="text-amber">chiral</span>.</>}</p>
      <p className="mt-2 text-[12px] text-muted">Like left and right hands, enantiomers are mirror images that no rotation can superimpose. They share most properties but rotate polarised light oppositely and can behave very differently in the body, which is why drug chirality matters.</p>
    </div>
  );
}
