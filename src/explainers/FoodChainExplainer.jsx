import { useState } from "react";

// A food chain moves energy up trophic levels: producers -> herbivores -> carnivores. Only about
// 10% of the energy at one level reaches the next (the 10% rule), so the pyramid narrows upward
// and food chains are short. Tap a level.
const TIERS = [
  { name: "Tertiary consumers", role: "Top predators (hawk, large fish).", energy: "~0.1%", c: "var(--color-rose)" },
  { name: "Secondary consumers", role: "Carnivores that eat herbivores (snake, toad).", energy: "~1%", c: "#f08a5d" },
  { name: "Primary consumers", role: "Herbivores that eat producers (grasshopper, deer).", energy: "~10%", c: "#6aa6f0" },
  { name: "Producers", role: "Green plants capture sunlight by photosynthesis.", energy: "100%", c: "#34d39a" },
];

export default function FoodChainExplainer() {
  const [sel, setSel] = useState(3);

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <svg viewBox="0 0 220 124" className="mt-3 w-full">
        {TIERS.map((t, v) => {
          const yTop = 12 + v * 24, yBot = yTop + 22;
          const hwT = 18 + v * 22, hwB = 18 + (v + 1) * 22;
          const on = sel === v;
          return (
            <g key={v} onClick={() => setSel(v)} style={{ cursor: "pointer" }}>
              <polygon points={`${110 - hwT},${yTop} ${110 + hwT},${yTop} ${110 + hwB},${yBot} ${110 - hwB},${yBot}`}
                fill={`${t.c}${on ? "33" : "1a"}`} stroke={on ? t.c : "var(--color-line)"} strokeWidth={on ? 1.8 : 0.8} />
              <text x="110" y={yTop + 15} textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill={t.c}>{t.energy}</text>
            </g>
          );
        })}
      </svg>

      <div className="mt-1 rounded-md border border-line bg-surface/50 p-3">
        <p className="text-[13px]" style={{ color: TIERS[sel].c }}>{TIERS[sel].name} <span className="text-dim">({TIERS[sel].energy} of producer energy)</span></p>
        <p className="mt-1 text-[12px] text-muted">{TIERS[sel].role}</p>
      </div>
      <p className="mt-3 text-[12px] text-muted">About 90% of the energy is lost as heat at each step, so only ~10% passes up (the 10% rule). That is why pyramids narrow toward the top and why there are few top predators. Decomposers recycle nutrients from every level back to the producers.</p>
    </div>
  );
}
