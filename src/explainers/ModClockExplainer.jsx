import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// A mod-m clock: drop n on the dial, the hand lands on n mod m. Two numbers that
// land on the same mark are congruent mod m.
export default function ModClockExplainer() {
  const [m, setM] = useState(5);
  const [n, setN] = useState(37);
  const r = ((n % m) + m) % m;
  const q = Math.floor(n / m);

  const R = 52, cx = 70, cy = 70;
  const marks = Array.from({ length: m }, (_, i) => {
    const ang = (-90 + (360 / m) * i) * (Math.PI / 180);
    return { i, x: cx + R * Math.cos(ang), y: cy + R * Math.sin(ang) };
  });
  const handAng = (-90 + (360 / m) * r) * (Math.PI / 180);
  const hx = cx + (R - 14) * Math.cos(handAng), hy = cy + (R - 14) * Math.sin(handAng);

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center">
        <svg viewBox="0 0 140 140" className="w-[150px] shrink-0 self-center">
          <circle cx={cx} cy={cy} r={R} fill="none" stroke="var(--color-line)" strokeWidth="1.5" />
          {marks.map((mk) => (
            <g key={mk.i}>
              <circle cx={mk.x} cy={mk.y} r={mk.i === r ? 11 : 8}
                fill={mk.i === r ? "var(--color-amber)" : "var(--color-surface)"}
                stroke={mk.i === r ? "var(--color-amber)" : "var(--color-line)"} strokeWidth="1.2" />
              <text x={mk.x} y={mk.y + 3.5} textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)"
                fill={mk.i === r ? "var(--color-ink)" : "var(--color-dim)"}>{mk.i}</text>
            </g>
          ))}
          <motion.line x1={cx} y1={cy} x2={hx} y2={hy} stroke="var(--color-amber)" strokeWidth="2"
            animate={{ x2: hx, y2: hy }} transition={{ type: "spring", stiffness: 120, damping: 14 }} />
          <circle cx={cx} cy={cy} r="3" fill="var(--color-amber)" />
        </svg>

        <div className="flex-1 space-y-3">
          <Slider label="modulus m" value={m} set={setM} min={2} max={12} />
          <Slider label="number n" value={n} set={setN} min={0} max={60} />
          <div className="text-[15px]">
            <Tex>{`${n} = ${m}\\times ${q} + ${r} \\;\\Rightarrow\\; ${n} \\equiv ${r} \\pmod{${m}}`}</Tex>
          </div>
        </div>
      </div>

      <p className="mt-3 text-[12px] text-muted">
        Two numbers are congruent mod {m} when they land on the same mark, i.e. <Tex>{`a \\equiv b \\pmod{${m}}`}</Tex> means {m} divides <Tex>{`a-b`}</Tex>.
      </p>
    </div>
  );
}

function Slider({ label, value, set, min, max }) {
  return (
    <label className="block">
      <span className="text-[12px] text-muted">{label} = <b className="text-text tabular-nums">{value}</b></span>
      <input type="range" min={min} max={max} step={1} value={value} onChange={(e) => set(+e.target.value)}
        className="mt-1.5 w-full accent-amber" />
    </label>
  );
}
