import { useState } from "react";

// Water and sewage treatment cleans water in stages, each removing finer contaminants: screening
// (large debris) -> sedimentation (settle solids) -> filtration (fine particles) -> disinfection
// (kill pathogens). Tap a stage; the water gets clearer at each step.
const STAGES = [
  { name: "Screening", desc: "Bar screens trap large floating debris: sticks, rags, plastics." },
  { name: "Sedimentation", desc: "Water sits in tanks so suspended solids settle out as sludge; coagulants (alum) clump fine particles to speed it up." },
  { name: "Filtration", desc: "Water trickles through sand and gravel beds that catch fine particles and many microbes." },
  { name: "Disinfection", desc: "Chlorine, UV or ozone kills the remaining pathogens before the water is supplied." },
];

export default function WaterTreatmentExplainer() {
  const [sel, setSel] = useState(0);

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <svg viewBox="0 0 300 64" className="mt-3 w-full">
        {STAGES.map((s, i) => {
          const x = 12 + i * 70;
          const clarity = 0.34 - i * 0.09; // water gets clearer along the train
          const on = sel === i;
          return (
            <g key={i} onClick={() => setSel(i)} style={{ cursor: "pointer" }}>
              <rect x={x} y="14" width="56" height="34" rx="5" fill={`rgba(52,180,220,${clarity})`} stroke={on ? "var(--color-amber)" : "var(--color-line)"} strokeWidth={on ? 2 : 1} />
              <text x={x + 28} y="34" textAnchor="middle" fontSize="7.5" fontFamily="var(--font-mono)" fill={on ? "var(--color-amber)" : "var(--color-muted)"}>{i + 1}</text>
              {i < 3 && <line x1={x + 56} y1="31" x2={x + 70} y2="31" stroke="var(--color-line)" strokeWidth="1.2" markerEnd="url(#wtA)" />}
            </g>
          );
        })}
        <defs><marker id="wtA" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0 0 L5 3 L0 6 z" fill="var(--color-line)" /></marker></defs>
      </svg>

      <div className="mt-1 flex flex-wrap gap-1.5">
        {STAGES.map((s, i) => (
          <button key={i} onClick={() => setSel(i)} className={"rounded-full border px-2 py-1 text-[10px] " + (sel === i ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>{s.name}</button>
        ))}
      </div>
      <div className="mt-2 rounded-md border border-line bg-surface/50 p-3">
        <p className="text-[13px] text-amber">{sel + 1}. {STAGES[sel].name}</p>
        <p className="mt-1 text-[12px] text-muted">{STAGES[sel].desc}</p>
      </div>
      <p className="mt-3 text-[12px] text-muted">Sewage treatment adds a biological step, microbes digest dissolved organic matter (lowering BOD), before the water is disinfected and released. Each stage removes finer contaminants than the one before.</p>
    </div>
  );
}
