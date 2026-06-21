import { useState } from "react";

// Environmental Impact Assessment (EIA) studies a project's likely environmental effects BEFORE it
// is approved, so harm can be avoided or reduced. It runs as a sequence of stages; tap one.
const STEPS = [
  { name: "Screening", desc: "Decide whether the project is large enough to need a full EIA at all." },
  { name: "Scoping", desc: "Identify which impacts and issues the study must focus on (air, water, land, people)." },
  { name: "Impact assessment", desc: "Predict and evaluate the likely environmental and social impacts." },
  { name: "Mitigation", desc: "Plan measures to avoid, reduce or offset the harmful impacts." },
  { name: "Decision", desc: "Authorities approve, reject or modify the project based on the EIA report and public input." },
  { name: "Monitoring", desc: "After approval, track the actual impacts and enforce the conditions." },
];

export default function EiaExplainer() {
  const [sel, setSel] = useState(0);

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <svg viewBox="0 0 280 134" className="mt-3 w-full">
        <line x1="26" y1="16" x2="26" y2="118" stroke="var(--color-line)" strokeWidth="1" />
        {STEPS.map((s, i) => {
          const y = 16 + i * 20.4;
          const on = sel === i;
          return (
            <g key={i} onClick={() => setSel(i)} style={{ cursor: "pointer" }}>
              <circle cx="26" cy={y} r="8.5" fill={on ? "var(--color-amber)" : "rgba(246,181,61,0.12)"} stroke={on ? "var(--color-amber)" : "var(--color-line)"} strokeWidth="1.2" />
              <text x="26" y={y + 3} textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill={on ? "var(--color-ink)" : "var(--color-muted)"}>{i + 1}</text>
              <text x="44" y={y + 3} fontSize="9.5" fontFamily="var(--font-mono)" fill={on ? "var(--color-amber)" : "var(--color-muted)"}>{s.name}</text>
            </g>
          );
        })}
      </svg>

      <div className="mt-1 rounded-md border border-line bg-surface/50 p-3">
        <p className="text-[13px] text-amber">{sel + 1}. {STEPS[sel].name}</p>
        <p className="mt-1 text-[12px] text-muted">{STEPS[sel].desc}</p>
      </div>
      <p className="mt-3 text-[12px] text-muted">EIA is preventive: by studying impacts before a dam, factory or road is built, decision-makers can demand changes or refuse the project, rather than cleaning up damage afterwards.</p>
    </div>
  );
}
