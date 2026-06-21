import { useState } from "react";

// Sustainable development means meeting present needs without compromising the ability of future
// generations to meet theirs (Brundtland). It sits where three pillars overlap: a healthy
// environment, a working economy, and an equitable society.
const PILLARS = {
  Environment: { c: "#34d39a", cx: 110, cy: 52, desc: "Protect natural resources, ecosystems and the climate so they last." },
  Economy: { c: "#6aa6f0", cx: 86, cy: 92, desc: "Maintain growth, jobs and livelihoods that people depend on." },
  Society: { c: "#f08a5d", cx: 134, cy: 92, desc: "Ensure equity, health, education and well-being for all people." },
  Sustainable: { c: "var(--color-amber)", cx: 110, cy: 78, desc: "The balance of all three: development that meets today's needs without robbing future generations." },
};

export default function SustainabilityExplainer() {
  const [k, setK] = useState("Sustainable");
  const sel = PILLARS[k];

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
        <div className="flex flex-wrap gap-1.5">
          {Object.keys(PILLARS).map((key) => (
            <button key={key} onClick={() => setK(key)} className={"rounded-full border px-2 py-1 text-[10px] " + (key === k ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>{key}</button>
          ))}
        </div>
      </div>

      <svg viewBox="0 0 220 150" className="mt-3 w-full">
        {["Environment", "Economy", "Society"].map((key) => {
          const p = PILLARS[key];
          return <circle key={key} cx={p.cx} cy={p.cy} r="38" fill={`${p.c}1f`} stroke={k === key ? p.c : "var(--color-line)"} strokeWidth={k === key ? 2 : 1} />;
        })}
        {["Environment", "Economy", "Society"].map((key) => {
          const p = PILLARS[key];
          return <text key={"t" + key} x={p.cx} y={key === "Environment" ? p.cy - 20 : p.cy + 26} textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill={p.c}>{key}</text>;
        })}
        <circle cx="110" cy="78" r="9" fill={k === "Sustainable" ? "var(--color-amber)" : "rgba(246,181,61,0.4)"} />
      </svg>

      <div className="mt-1 rounded-md border border-line bg-surface/50 p-3">
        <p className="text-[13px]" style={{ color: sel.c }}>{k}</p>
        <p className="mt-1 text-[12px] text-muted">{sel.desc}</p>
      </div>
      <p className="mt-3 text-[12px] text-muted">Push only economy and you exhaust resources; push only environment and people go without. Sustainability is the overlap, prosperity that the planet and future generations can keep affording.</p>
    </div>
  );
}
