import { useState } from "react";
import { motion } from "motion/react";

// Organic reactions pass through short-lived carbon intermediates that differ by how many
// electrons the central carbon keeps: a carbocation (6, electron-poor), a carbanion (8 with a lone
// pair, electron-rich), or a free radical (7, one unpaired electron).
const KINDS = {
  Carbocation: { sym: "C⁺", charge: "+1", e: "6 electrons (sextet)", nature: "electron-deficient → electrophilic", c: "#f08a5d", mark: "plus" },
  Carbanion: { sym: "C⁻", charge: "-1", e: "8 electrons (lone pair)", nature: "electron-rich → nucleophilic", c: "#6aa6f0", mark: "pair" },
  "Free radical": { sym: "C", charge: "0", e: "7 electrons (one unpaired)", nature: "electron-odd → highly reactive", c: "var(--color-amber)", mark: "dot" },
};

export default function IntermediatesExplainer() {
  const [k, setK] = useState("Carbocation");
  const d = KINDS[k];

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
        <div className="flex gap-1.5">
          {Object.keys(KINDS).map((key) => (
            <button key={key} onClick={() => setK(key)} className={"rounded-full border px-2 py-1 text-[10px] " + (key === k ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>{key.split(" ")[0]}</button>
          ))}
        </div>
      </div>

      <div className="mt-3 flex flex-col items-center gap-4 sm:flex-row">
        <svg viewBox="0 0 140 130" className="w-[140px] shrink-0 self-center">
          {/* three bonds to R groups */}
          <line x1="70" y1="65" x2="34" y2="34" stroke="var(--color-line)" strokeWidth="1.6" />
          <line x1="70" y1="65" x2="106" y2="34" stroke="var(--color-line)" strokeWidth="1.6" />
          <line x1="70" y1="65" x2="70" y2="108" stroke="var(--color-line)" strokeWidth="1.6" />
          {[[34, 30], [106, 30], [70, 116]].map(([x, y], i) => (
            <g key={i}><circle cx={x} cy={y} r="8" fill="rgba(154,166,178,0.12)" stroke="var(--color-line)" strokeWidth="1" />
              <text x={x} y={y + 3} textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-muted)">R</text></g>
          ))}
          {/* central carbon */}
          <circle cx="70" cy="65" r="14" fill={`${d.c}22`} stroke={d.c} strokeWidth="1.5" />
          <text x="70" y="69" textAnchor="middle" fontSize="11" fontFamily="var(--font-mono)" fill={d.c}>{d.sym}</text>
          {/* electron mark */}
          {d.mark === "dot" && <motion.circle cx="70" cy="46" r="2.6" fill={d.c} animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.4, repeat: Infinity }} />}
          {d.mark === "pair" && <g fill={d.c}><circle cx="64" cy="46" r="2.4" /><circle cx="76" cy="46" r="2.4" /></g>}
          {d.mark === "plus" && <path d="M86 50 h8 M90 46 v8" stroke={d.c} strokeWidth="1.6" />}
        </svg>

        <div className="flex-1 self-stretch">
          <p className="font-display text-2xl font-medium" style={{ color: d.c }}>{k}</p>
          <p className="mt-1 font-mono text-[12px] text-muted">charge: {d.charge}</p>
          <p className="mt-0.5 font-mono text-[12px] text-muted">{d.e}</p>
          <p className="mt-1.5 text-[13px]" style={{ color: d.c }}>{d.nature}</p>
        </div>
      </div>
      <p className="mt-3 text-[12px] text-muted">Carbocations crave electrons (attacked by nucleophiles); carbanions donate them (attack electrophiles); radicals chase a partner for their unpaired electron, driving chain reactions. Their stability decides which path a reaction takes.</p>
    </div>
  );
}
