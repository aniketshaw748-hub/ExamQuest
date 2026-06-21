import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// Hard water carries dissolved Ca2+ and Mg2+ ions: they waste soap and leave scale. Treatment
// removes them, temporary hardness (bicarbonates) by boiling, permanent hardness by lime-soda or
// ion exchange, leaving soft water that lathers freely.
const IONS = [[48, 50, "Ca"], [96, 78, "Mg"], [150, 54, "Ca"], [120, 100, "Mg"], [186, 88, "Ca"], [72, 104, "Ca"]];

export default function HardnessExplainer() {
  const [treated, setTreated] = useState(false);

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
        <div className="flex gap-1.5">
          <button onClick={() => setTreated(false)} className={"rounded-full border px-2.5 py-1 text-[11px] " + (!treated ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>hard water</button>
          <button onClick={() => setTreated(true)} className={"rounded-full border px-2.5 py-1 text-[11px] " + (treated ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>after treatment</button>
        </div>
      </div>

      <svg viewBox="0 0 240 130" className="mt-3 w-full">
        <rect x="20" y="24" width="200" height="100" rx="5" fill="rgba(106,166,240,0.14)" stroke="var(--color-line)" strokeWidth="1.2" />
        <AnimatePresence>
          {!treated && IONS.map(([x, y, sym], i) => (
            <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: 30 }} transition={{ delay: i * 0.04 }}>
              <circle cx={x} cy={y} r="11" fill={sym === "Ca" ? "rgba(246,181,61,0.22)" : "rgba(52,211,154,0.22)"} stroke={sym === "Ca" ? "var(--color-amber)" : "#34d39a"} strokeWidth="1.2" />
              <text x={x} y={y + 3} textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill={sym === "Ca" ? "var(--color-amber)" : "#34d39a"}>{sym}²⁺</text>
            </motion.g>
          ))}
        </AnimatePresence>
        {treated && <text x="120" y="78" textAnchor="middle" fontSize="10" fontFamily="var(--font-mono)" fill="#6aa6f0">soft water</text>}
      </svg>

      <p className="mt-1 text-[13px] text-muted">{treated
        ? <>The Ca²⁺ and Mg²⁺ ions are gone: soap now lathers freely and no scale forms.</>
        : <>Dissolved <span className="text-amber">Ca²⁺</span> and <span className="text-[#34d39a]">Mg²⁺</span> make the water hard: they react with soap (no lather) and deposit scale in pipes and kettles.</>}</p>
      <p className="mt-2 text-[12px] text-muted">Temporary hardness (bicarbonates) is removed simply by boiling; permanent hardness (sulfates, chlorides) needs lime-soda treatment or an ion-exchange resin that swaps Ca²⁺/Mg²⁺ for harmless ions.</p>
    </div>
  );
}
