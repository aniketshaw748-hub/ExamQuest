import { useState } from "react";

// The DNA double helix: two antiparallel strands held by complementary base pairs. A always pairs
// with T (2 hydrogen bonds), G always with C (3 hydrogen bonds). Tap a rung.
const RUNGS = [
  { l: "A", r: "T", h: 2 }, { l: "G", r: "C", h: 3 }, { l: "T", r: "A", h: 2 },
  { l: "C", r: "G", h: 3 }, { l: "A", r: "T", h: 2 }, { l: "G", r: "C", h: 3 },
];
const COL = { A: "#6aa6f0", T: "#f6b53d", G: "#34d39a", C: "#fb7185" };

export default function DnaHelixExplainer() {
  const [sel, setSel] = useState(0);
  const Lx = 70, Rx = 190, y0 = 20, dy = 16;

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <svg viewBox="0 0 260 128" className="mx-auto mt-3 w-full max-w-[280px]">
        <text x={Lx} y="12" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-dim)">5'</text>
        <text x={Rx} y="12" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-dim)">3'</text>
        <line x1={Lx} y1="16" x2={Lx} y2={y0 + RUNGS.length * dy} stroke="var(--color-muted)" strokeWidth="2" />
        <line x1={Rx} y1="16" x2={Rx} y2={y0 + RUNGS.length * dy} stroke="var(--color-muted)" strokeWidth="2" />
        {RUNGS.map((b, i) => {
          const y = y0 + i * dy + 4, on = sel === i;
          return (
            <g key={i} onClick={() => setSel(i)} style={{ cursor: "pointer" }}>
              {Array.from({ length: b.h }).map((_, k) => <line key={k} x1={108 + k * 14} y1={y} x2={114 + k * 14} y2={y} stroke={on ? "var(--color-amber)" : "var(--color-dim)"} strokeWidth="1.4" />)}
              <circle cx={Lx} cy={y} r="7.5" fill={`${COL[b.l]}${on ? "44" : "22"}`} stroke={COL[b.l]} strokeWidth={on ? 1.6 : 1} />
              <text x={Lx} y={y + 3} textAnchor="middle" fontSize="8.5" fontFamily="var(--font-mono)" fill={COL[b.l]}>{b.l}</text>
              <circle cx={Rx} cy={y} r="7.5" fill={`${COL[b.r]}${on ? "44" : "22"}`} stroke={COL[b.r]} strokeWidth={on ? 1.6 : 1} />
              <text x={Rx} y={y + 3} textAnchor="middle" fontSize="8.5" fontFamily="var(--font-mono)" fill={COL[b.r]}>{b.r}</text>
            </g>
          );
        })}
        <text x={Lx} y={y0 + RUNGS.length * dy + 12} textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-dim)">3'</text>
        <text x={Rx} y={y0 + RUNGS.length * dy + 12} textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-dim)">5'</text>
      </svg>

      <p className="mt-2 text-center text-[13px]"><span style={{ color: COL[RUNGS[sel].l] }}>{RUNGS[sel].l}</span> <span className="text-muted">pairs with</span> <span style={{ color: COL[RUNGS[sel].r] }}>{RUNGS[sel].r}</span> <span className="text-amber">({RUNGS[sel].h} hydrogen bonds)</span></p>
      <p className="mt-2 text-[12px] text-muted">The strands run in opposite directions (antiparallel, 5' to 3' against 3' to 5'). Pairing is fixed: A=T with 2 H-bonds, G≡C with 3. So if one strand reads ATGC, the other must read TACG, which is how DNA copies itself faithfully.</p>
    </div>
  );
}
