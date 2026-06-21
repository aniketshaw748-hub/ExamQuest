import { useState } from "react";

// Land pollution comes from several sources whose contaminants soak down through the soil and can
// reach groundwater. Pick a source to see what it leaves behind.
const SRC = {
  "Solid waste": { c: "#f08a5d", desc: "Household and municipal garbage; the non-biodegradable parts (metal, glass) persist in the soil for decades." },
  Plastics: { c: "#6aa6f0", desc: "Litter and microplastics that never decompose, choking soil and washing into waterways." },
  Agrochemicals: { c: "#34d39a", desc: "Excess fertilisers and pesticides that poison soil organisms and leach into groundwater." },
  Industrial: { c: "var(--color-rose)", desc: "Toxic and heavy-metal waste from factories and mining that contaminates and sterilises the soil." },
};

export default function LandPollutionExplainer() {
  const [k, setK] = useState("Solid waste");
  const d = SRC[k];

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
        <div className="flex flex-wrap gap-1.5">
          {Object.keys(SRC).map((key) => (
            <button key={key} onClick={() => setK(key)} className={"rounded-full border px-2 py-1 text-[10px] " + (key === k ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>{key}</button>
          ))}
        </div>
      </div>

      <svg viewBox="0 0 300 110" className="mt-3 w-full">
        {/* soil layers */}
        <rect x="14" y="40" width="272" height="22" fill="rgba(150,110,70,0.25)" />
        <rect x="14" y="62" width="272" height="20" fill="rgba(130,100,70,0.18)" />
        <rect x="14" y="82" width="272" height="18" fill="rgba(52,180,220,0.16)" />
        <text x="280" y="54" textAnchor="end" fontSize="7" fontFamily="var(--font-mono)" fill="var(--color-dim)">topsoil</text>
        <text x="280" y="76" textAnchor="end" fontSize="7" fontFamily="var(--font-mono)" fill="var(--color-dim)">subsoil</text>
        <text x="280" y="95" textAnchor="end" fontSize="7" fontFamily="var(--font-mono)" fill="#34b4dc">groundwater</text>
        {/* waste pile on the surface */}
        <path d="M40 40 l16 -16 l16 16 z" fill={d.c} fillOpacity="0.6" />
        <text x="56" y="20" textAnchor="middle" fontSize="7" fontFamily="var(--font-mono)" fill={d.c}>{k}</text>
        {/* leaching plumes */}
        {[56, 110, 170, 230].map((x, i) => (
          <line key={i} x1={x} y1="40" x2={x + (i - 1.5) * 4} y2="98" stroke={d.c} strokeWidth="1.3" strokeDasharray="2 3" opacity="0.7" />
        ))}
        <text x="150" y="36" textAnchor="middle" fontSize="7" fontFamily="var(--font-mono)" fill={d.c}>contaminants leach down</text>
      </svg>

      <div className="mt-1 rounded-md border border-line bg-surface/50 p-3">
        <p className="text-[13px]" style={{ color: d.c }}>{k}</p>
        <p className="mt-1 text-[12px] text-muted">{d.desc}</p>
      </div>
      <p className="mt-3 text-[12px] text-muted">Land pollution does not stay put: rain washes contaminants down through the soil into groundwater, and degraded soil loses fertility. Control means reducing waste at the source and treating it before disposal.</p>
    </div>
  );
}
