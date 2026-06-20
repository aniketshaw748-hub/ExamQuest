import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

const DOMAIN = [-2, -1, 0, 1, 2];
const CODOMAIN = [0, 1, 2, 3, 4];
const f = (x) => x * x;
const RANGE = [...new Set(DOMAIN.map(f))];        // {0,1,4}

const dy = (i) => 44 + i * 42;
const cy = (i) => 44 + i * 42;

export default function DomainRangeExplainer() {
  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive · <Tex>{"f(x)=x^2"}</Tex></p>

      <svg viewBox="0 0 360 240" className="mt-3 w-full">
        <text x="40" y="22" fill="#6aa6f0" fontSize="12.5" fontFamily="var(--font-display)">Domain</text>
        <text x="250" y="22" fill="#9fdcc4" fontSize="12.5" fontFamily="var(--font-display)">Co-domain</text>

        {DOMAIN.map((x, i) => {
          const ci = CODOMAIN.indexOf(f(x));
          return (
            <motion.path key={x} d={`M88 ${dy(i)} C 180 ${dy(i)}, 180 ${cy(ci)}, 268 ${cy(ci)}`}
              fill="none" stroke="var(--color-amber)" strokeWidth="1.8" opacity="0.8"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }} />
          );
        })}

        {DOMAIN.map((x, i) => (
          <g key={x}>
            <circle cx="76" cy={dy(i)} r="15" fill="var(--color-surface)" stroke="#6aa6f0" strokeWidth="1.8" />
            <text x="76" y={dy(i) + 4} textAnchor="middle" fontSize="12.5" fontFamily="var(--font-mono)" fill="var(--color-text)">{x}</text>
          </g>
        ))}
        {CODOMAIN.map((y, i) => {
          const inRange = RANGE.includes(y);
          return (
            <g key={y} opacity={inRange ? 1 : 0.4}>
              <circle cx="280" cy={cy(i)} r="15" fill={inRange ? "rgba(246,181,61,0.18)" : "var(--color-surface)"} stroke={inRange ? "var(--color-amber)" : "var(--color-line)"} strokeWidth="1.8" />
              <text x="280" y={cy(i) + 4} textAnchor="middle" fontSize="12.5" fontFamily="var(--font-mono)" fill={inRange ? "var(--color-amber)" : "var(--color-dim)"}>{y}</text>
            </g>
          );
        })}
      </svg>

      <div className="mt-3 grid grid-cols-1 gap-1.5 text-[13px] sm:grid-cols-3">
        <Pill color="#6aa6f0" label="Domain"><Tex>{"\\{-2,-1,0,1,2\\}"}</Tex></Pill>
        <Pill color="var(--color-amber)" label="Range (hit)"><Tex>{"\\{0,1,4\\}"}</Tex></Pill>
        <Pill color="#9fdcc4" label="Co-domain"><Tex>{"\\{0,1,2,3,4\\}"}</Tex></Pill>
      </div>
      <p className="mt-2 text-[12px] text-dim">2 and 3 are in the co-domain but never produced, so <Tex>{"\\text{range}\\subsetneq\\text{co-domain}"}</Tex> here.</p>
    </div>
  );
}

function Pill({ color, label, children }) {
  return (
    <div className="rounded-[10px] border border-line bg-surface/50 px-3 py-2">
      <div className="flex items-center gap-1.5 text-[11px] text-dim"><span className="h-2 w-2 rounded-full" style={{ background: color }} />{label}</div>
      <div className="mt-0.5 text-text">{children}</div>
    </div>
  );
}
