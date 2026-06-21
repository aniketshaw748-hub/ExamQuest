import { useState } from "react";
import { motion } from "motion/react";

// Two lines of immune defence. Innate immunity is present from birth, non-specific and immediate,
// with no memory (barriers, phagocytes, inflammation). Adaptive immunity develops after exposure,
// is specific and has memory (antibodies, B-cells and T-cells). Toggle between them.
export default function ImmunityExplainer() {
  const [mode, setMode] = useState("innate");
  const innate = mode === "innate";
  const facts = innate
    ? [["When", "present from birth"], ["Target", "non-specific (any invader)"], ["Speed", "immediate"], ["Memory", "none"]]
    : [["When", "develops after exposure"], ["Target", "specific to one pathogen"], ["Speed", "slower (days)"], ["Memory", "yes (faster next time)"]];

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
        <div className="flex gap-1.5">
          <button onClick={() => setMode("innate")} className={"rounded-full border px-2.5 py-1 text-[11px] " + (innate ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>innate</button>
          <button onClick={() => setMode("adaptive")} className={"rounded-full border px-2.5 py-1 text-[11px] " + (!innate ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>adaptive</button>
        </div>
      </div>

      <svg viewBox="0 0 280 80" className="mt-3 w-full">
        {/* pathogen */}
        <circle cx="22" cy="40" r="8" fill="rgba(251,113,133,0.2)" stroke="var(--color-rose)" strokeWidth="1.2" />
        <text x="22" y="64" textAnchor="middle" fontSize="7" fontFamily="var(--font-mono)" fill="var(--color-rose)">pathogen</text>
        {/* first line: innate barrier */}
        <rect x="74" y="14" width="14" height="52" rx="3" fill={innate ? "rgba(246,181,61,0.25)" : "rgba(246,181,61,0.08)"} stroke={innate ? "var(--color-amber)" : "var(--color-line)"} strokeWidth={innate ? 1.8 : 1} />
        <text x="81" y="76" textAnchor="middle" fontSize="6.5" fontFamily="var(--font-mono)" fill={innate ? "var(--color-amber)" : "var(--color-dim)"}>barrier</text>
        {innate && [30, 44, 58].map((y, i) => <circle key={i} cx="120" cy={y} r="5" fill="rgba(52,211,154,0.3)" stroke="#34d39a" strokeWidth="1" />)}
        {innate && <text x="120" y="74" textAnchor="middle" fontSize="6.5" fontFamily="var(--font-mono)" fill="#34d39a">phagocytes</text>}
        {/* second line: adaptive */}
        {!innate && (
          <g>
            {[34, 46].map((y, i) => <path key={i} d={`M150 ${y} l10 -5 l0 10 z`} fill="rgba(106,166,240,0.3)" stroke="#6aa6f0" strokeWidth="1" />)}
            <text x="175" y="30" fontSize="6.5" fontFamily="var(--font-mono)" fill="#6aa6f0">antibodies</text>
            <circle cx="225" cy="40" r="9" fill="rgba(246,181,61,0.18)" stroke="var(--color-amber)" strokeWidth="1.2" />
            <text x="225" y="44" textAnchor="middle" fontSize="6" fontFamily="var(--font-mono)" fill="var(--color-amber)">memory</text>
            <text x="225" y="62" textAnchor="middle" fontSize="6.5" fontFamily="var(--font-mono)" fill="var(--color-dim)">B / T cells</text>
          </g>
        )}
      </svg>

      <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-[12px]">
        {facts.map(([k, v]) => (<><dt key={k} className="text-dim">{k}</dt><dd className="text-muted">{v}</dd></>))}
      </dl>
      <p className="mt-3 text-[12px] text-muted">{innate
        ? "Innate immunity is the body's quick, general first response: barriers (skin, mucus), phagocytes that engulf invaders, and inflammation. It treats every invader the same and keeps no record."
        : "Adaptive immunity is the slower, targeted second response: it makes antibodies and specific B-cells and T-cells against one pathogen, and remembers it, so the next exposure is fought off fast. This is why vaccines work."}</p>
    </div>
  );
}
