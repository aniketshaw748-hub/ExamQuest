import { useState } from "react";

// The waste-management hierarchy ranks options from most to least preferred: reduce, reuse,
// recycle, recover (energy), and only as a last resort dispose (landfill). The wider the tier, the
// more we should rely on it. Tap a tier.
const TIERS = [
  { name: "Reduce", desc: "Prevent waste in the first place, the most effective option (less packaging, less consumption)." },
  { name: "Reuse", desc: "Use items again as they are, instead of throwing them away (refill, repair, donate)." },
  { name: "Recycle", desc: "Reprocess materials into new products (paper, glass, metal, plastic)." },
  { name: "Recover", desc: "Extract value from what is left, mainly energy from incineration or biogas." },
  { name: "Dispose", desc: "Landfill or safe disposal, the last resort for what cannot be handled above." },
];

export default function WasteHierarchyExplainer() {
  const [sel, setSel] = useState(0);

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <svg viewBox="0 0 220 134" className="mt-3 w-full">
        {TIERS.map((t, i) => {
          const yTop = 10 + i * 24, yBot = yTop + 22;
          const hwT = 96 - i * 18, hwB = 96 - (i + 1) * 18; // inverted: widest at top
          const on = sel === i;
          // green (best) at top -> rose (worst) at bottom
          const hue = 150 - i * 30;
          const col = i === 0 ? "#34d39a" : i === 4 ? "var(--color-rose)" : `hsl(${hue} 60% 60%)`;
          return (
            <g key={i} onClick={() => setSel(i)} style={{ cursor: "pointer" }}>
              <polygon points={`${110 - hwT},${yTop} ${110 + hwT},${yTop} ${110 + hwB},${yBot} ${110 - hwB},${yBot}`}
                fill={`${col}${on ? "44" : "1f"}`} stroke={on ? col : "var(--color-line)"} strokeWidth={on ? 1.8 : 0.8} />
              <text x="110" y={yTop + 15} textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill={col}>{t.name}</text>
            </g>
          );
        })}
        <text x="6" y="20" fontSize="7" fontFamily="var(--font-mono)" fill="#34d39a">best</text>
        <text x="6" y="128" fontSize="7" fontFamily="var(--font-mono)" fill="var(--color-rose)">worst</text>
      </svg>

      <div className="mt-1 rounded-md border border-line bg-surface/50 p-3">
        <p className="text-[13px] text-amber">{sel + 1}. {TIERS[sel].name}</p>
        <p className="mt-1 text-[12px] text-muted">{TIERS[sel].desc}</p>
      </div>
      <p className="mt-3 text-[12px] text-muted">Always prefer the highest option that works: reducing waste beats recycling it, and recycling beats burying it. Landfill, the bottom tier, wastes resources and pollutes land, so it is the last resort.</p>
    </div>
  );
}
