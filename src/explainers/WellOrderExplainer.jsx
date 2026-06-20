import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

const MAXN = 16;
function randomSubset() {
  const s = [];
  for (let i = 1; i <= MAXN; i++) if (Math.random() < 0.4) s.push(i);
  if (!s.length) s.push(1 + Math.floor(Math.random() * MAXN));
  return s;
}

// Well-ordering: every non-empty subset of the naturals has a smallest element.
// Reshuffle the subset; the least element always exists and glows.
export default function WellOrderExplainer() {
  const [set, setSet] = useState(() => [2, 5, 6, 9, 13]);
  const least = Math.min(...set);
  const W = 300, pad = 14, step = (W - 2 * pad) / (MAXN - 1);

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
        <button onClick={() => setSet(randomSubset())}
          className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-dim transition-colors hover:text-muted">
          new subset
        </button>
      </div>

      <svg viewBox="0 0 300 64" className="mt-4 w-full">
        <line x1={pad} y1="40" x2={W - pad} y2="40" stroke="var(--color-line)" strokeWidth="1.5" />
        {Array.from({ length: MAXN }, (_, k) => {
          const v = k + 1, x = pad + k * step, inSet = set.includes(v), isLeast = v === least;
          return (
            <g key={v}>
              <line x1={x} y1="36" x2={x} y2="44" stroke="var(--color-line)" strokeWidth="1" />
              {inSet && (
                <motion.circle cx={x} cy="40" r={isLeast ? 8 : 5.5}
                  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  fill={isLeast ? "var(--color-amber)" : "#6aa6f0"}
                  stroke={isLeast ? "var(--color-amber)" : "#6aa6f0"} strokeWidth="1" fillOpacity={isLeast ? 1 : 0.4} />
              )}
              {(v === 1 || v === MAXN || isLeast) && (
                <text x={x} y="58" textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)"
                  fill={isLeast ? "var(--color-amber)" : "var(--color-dim)"}>{v}</text>
              )}
            </g>
          );
        })}
      </svg>

      <p className="mt-2 text-[14px]">
        <span className="text-muted">Subset </span>
        <Tex>{`S = \\{${[...set].sort((a, b) => a - b).join(", ")}\\}`}</Tex>
        <span className="text-muted"> has least element </span>
        <span className="font-display text-lg font-medium text-amber">{least}</span>.
      </p>
      <p className="mt-2 text-[12px] text-muted">
        This always works for <Tex>{`\\mathbb{N}`}</Tex>. It fails for <Tex>{`\\mathbb{Z}`}</Tex> or <Tex>{`\\mathbb{R}^+`}</Tex> (no smallest positive real), which is exactly why induction lives on the naturals.
      </p>
    </div>
  );
}
