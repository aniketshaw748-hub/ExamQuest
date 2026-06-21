import { useState } from "react";

// Air pollutants are primary (emitted directly: CO, SO2, NOx, particulates, hydrocarbons) or
// secondary (formed in the air by reactions: ozone, photochemical smog, acid rain). Toggle to see
// how primary emissions turn into secondary pollutants.
const VIEW = {
  Primary: {
    c: "#f08a5d",
    chips: ["CO", "SO₂", "NOₓ", "particulates", "hydrocarbons"],
    desc: "Released straight from the source, vehicle exhaust, factories, burning fuel.",
  },
  Secondary: {
    c: "var(--color-amber)",
    chips: ["ozone (O₃)", "photochemical smog", "PAN", "acid rain"],
    desc: "Formed in the atmosphere when primary pollutants react, often driven by sunlight.",
  },
};

export default function AirPollutionExplainer() {
  const [v, setV] = useState("Primary");
  const d = VIEW[v];

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
        <div className="flex gap-1.5">
          {Object.keys(VIEW).map((k) => (
            <button key={k} onClick={() => setV(k)} className={"rounded-full border px-2.5 py-1 text-[11px] " + (k === v ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>{k}</button>
          ))}
        </div>
      </div>

      <svg viewBox="0 0 300 70" className="mt-3 w-full">
        <rect x="14" y="24" width="70" height="26" rx="5" fill="rgba(154,166,178,0.12)" stroke="var(--color-line)" strokeWidth="1" />
        <text x="49" y="40" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-muted)">source</text>
        <line x1="86" y1="37" x2="120" y2="37" stroke="#f08a5d" strokeWidth="1.4" markerEnd="url(#apA)" />
        <rect x="122" y="24" width="64" height="26" rx="5" fill={v === "Primary" ? "rgba(240,138,93,0.18)" : "rgba(240,138,93,0.08)"} stroke={v === "Primary" ? "#f08a5d" : "var(--color-line)"} strokeWidth={v === "Primary" ? 1.8 : 1} />
        <text x="154" y="40" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="#f08a5d">primary</text>
        <line x1="188" y1="37" x2="222" y2="37" stroke="var(--color-amber)" strokeWidth="1.4" markerEnd="url(#apB)" />
        <text x="205" y="30" textAnchor="middle" fontSize="6.5" fontFamily="var(--font-mono)" fill="var(--color-dim)">+sunlight</text>
        <rect x="224" y="24" width="64" height="26" rx="5" fill={v === "Secondary" ? "rgba(246,181,61,0.18)" : "rgba(246,181,61,0.08)"} stroke={v === "Secondary" ? "var(--color-amber)" : "var(--color-line)"} strokeWidth={v === "Secondary" ? 1.8 : 1} />
        <text x="256" y="40" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-amber)">secondary</text>
        <defs>
          <marker id="apA" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0 0 L5 3 L0 6 z" fill="#f08a5d" /></marker>
          <marker id="apB" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0 0 L5 3 L0 6 z" fill="var(--color-amber)" /></marker>
        </defs>
      </svg>

      <div className="mt-1 flex flex-wrap gap-1.5">
        {d.chips.map((c) => <span key={c} className="rounded-full border px-2 py-0.5 font-mono text-[11px]" style={{ color: d.c, borderColor: `${d.c}66` }}>{c}</span>)}
      </div>
      <p className="mt-2 text-[12px] text-muted">{d.desc}</p>
      <p className="mt-2 text-[12px] text-muted">Acid rain is a classic secondary pollutant: SO₂ and NOₓ react with water vapour to form sulfuric and nitric acids, which fall and damage forests, lakes and buildings. Control devices (scrubbers, electrostatic precipitators) trap pollutants before they leave the chimney.</p>
    </div>
  );
}
