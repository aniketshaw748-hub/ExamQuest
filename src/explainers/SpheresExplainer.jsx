import { useState } from "react";

// The environment has four interacting segments: the atmosphere (air), hydrosphere (water),
// lithosphere (land), and the biosphere, the thin zone where the other three meet and life exists.
const SEG = [
  { k: "Atmosphere", y: 16, h: 32, fill: "rgba(106,166,240,0.18)", stroke: "#6aa6f0", desc: "The gaseous envelope (N2, O2, CO2, ...) that shields life from radiation and drives weather and climate." },
  { k: "Hydrosphere", y: 48, h: 30, fill: "rgba(52,180,220,0.18)", stroke: "#34b4dc", desc: "All of Earth's water: oceans, rivers, lakes, ice, groundwater and vapour." },
  { k: "Lithosphere", y: 78, h: 38, fill: "rgba(180,140,90,0.20)", stroke: "#b48c5a", desc: "The solid crust and soil, the source of minerals, nutrients and land." },
  { k: "Biosphere", y: 40, h: 50, fill: "rgba(246,181,61,0.14)", stroke: "var(--color-amber)", desc: "The narrow life zone where atmosphere, hydrosphere and lithosphere overlap, the only place organisms live." },
];

export default function SpheresExplainer() {
  const [i, setI] = useState(3);

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
        <div className="flex flex-wrap gap-1.5">
          {SEG.map((s, k) => (
            <button key={k} onClick={() => setI(k)} className={"rounded-full border px-2 py-1 text-[10px] " + (k === i ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>{s.k}</button>
          ))}
        </div>
      </div>

      <svg viewBox="0 0 280 120" className="mt-3 w-full">
        {SEG.slice(0, 3).map((s, k) => (
          <rect key={k} x="20" y={s.y} width="240" height={s.h} fill={s.fill} stroke={i === k ? s.stroke : "var(--color-line)"} strokeWidth={i === k ? 2 : 0.8} />
        ))}
        {SEG.slice(0, 3).map((s, k) => (
          <text key={"t" + k} x="28" y={s.y + 18} fontSize="9" fontFamily="var(--font-mono)" fill={s.stroke}>{s.k}</text>
        ))}
        {/* biosphere overlay bracket */}
        {i === 3 && (
          <g>
            <rect x="20" y={SEG[3].y} width="240" height={SEG[3].h} fill={SEG[3].fill} stroke={SEG[3].stroke} strokeWidth="2" strokeDasharray="4 3" />
            <text x="200" y={SEG[3].y + 30} fontSize="9" fontFamily="var(--font-mono)" fill="var(--color-amber)">biosphere</text>
          </g>
        )}
      </svg>

      <div className="mt-2 rounded-md border border-line bg-surface/50 p-3">
        <p className="text-[13px]" style={{ color: SEG[i].stroke }}>{SEG[i].k}</p>
        <p className="mt-1 text-[12px] text-muted">{SEG[i].desc}</p>
      </div>
      <p className="mt-3 text-[12px] text-muted">These segments constantly exchange matter and energy, rain links air and water, plants link soil and air. The biosphere is just the thin shell where all three overlap enough for life.</p>
    </div>
  );
}
