import { useState } from "react";
import { motion } from "motion/react";

// Photosynthesis runs in two stages inside the chloroplast. The light reaction (in the thylakoid)
// uses water and light to make ATP, NADPH and O2. The Calvin cycle (in the stroma) uses CO2 with
// that ATP and NADPH to build glucose. Tap a stage.
export default function PhotosynthesisExplainer() {
  const [s, setS] = useState("light");
  const light = s === "light";
  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
        <div className="flex gap-1.5">
          <button onClick={() => setS("light")} className={"rounded-full border px-2.5 py-1 text-[11px] " + (light ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>light reaction</button>
          <button onClick={() => setS("dark")} className={"rounded-full border px-2.5 py-1 text-[11px] " + (!light ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>Calvin cycle</button>
        </div>
      </div>

      <svg viewBox="0 0 300 110" className="mt-3 w-full">
        <rect x="10" y="14" width="280" height="88" rx="10" fill="rgba(52,211,154,0.05)" stroke="var(--color-line)" strokeWidth="1" />
        {/* thylakoid (light) */}
        <rect x="24" y="34" width="110" height="50" rx="8" fill={light ? "rgba(246,181,61,0.16)" : "rgba(246,181,61,0.06)"} stroke={light ? "var(--color-amber)" : "var(--color-line)"} strokeWidth={light ? 1.8 : 1} />
        <text x="79" y="30" textAnchor="middle" fontSize="7.5" fontFamily="var(--font-mono)" fill="#34d39a">thylakoid</text>
        <text x="79" y="56" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-amber)">light reaction</text>
        <text x="79" y="70" textAnchor="middle" fontSize="6.5" fontFamily="var(--font-mono)" fill="var(--color-dim)">H2O + light</text>
        {/* stroma (Calvin) */}
        <rect x="166" y="34" width="110" height="50" rx="8" fill={!light ? "rgba(246,181,61,0.16)" : "rgba(246,181,61,0.06)"} stroke={!light ? "var(--color-amber)" : "var(--color-line)"} strokeWidth={!light ? 1.8 : 1} />
        <text x="221" y="30" textAnchor="middle" fontSize="7.5" fontFamily="var(--font-mono)" fill="#34d39a">stroma</text>
        <text x="221" y="56" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-amber)">Calvin cycle</text>
        <text x="221" y="70" textAnchor="middle" fontSize="6.5" fontFamily="var(--font-mono)" fill="var(--color-dim)">CO2 -&gt; glucose</text>
        {/* ATP/NADPH handoff */}
        <line x1="134" y1="59" x2="166" y2="59" stroke="var(--color-amber)" strokeWidth="1.4" markerEnd="url(#psA)" />
        <text x="150" y="52" textAnchor="middle" fontSize="6.5" fontFamily="var(--font-mono)" fill="var(--color-amber)">ATP/NADPH</text>
        <defs><marker id="psA" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="var(--color-amber)" /></marker></defs>
        <text x="79" y="98" textAnchor="middle" fontSize="6.5" fontFamily="var(--font-mono)" fill="#6aa6f0">releases O2</text>
      </svg>

      <p className="mt-1 text-[13px] text-muted">{light
        ? <>In the <span className="text-amber">thylakoid</span>, water is split and light energy makes <span className="text-amber">ATP, NADPH</span> and releases <span className="text-[#6aa6f0]">O2</span>.</>
        : <>In the <span className="text-amber">stroma</span>, the Calvin cycle fixes <span className="text-text">CO2</span> using the ATP and NADPH to build <span className="text-text">glucose</span> (no light needed directly).</>}</p>
      <p className="mt-2 text-[12px] text-muted">Overall: 6 CO2 + 6 H2O, driven by light and chlorophyll (whose central atom is magnesium), give glucose + 6 O2. The light reaction powers the dark reaction.</p>
    </div>
  );
}
