import { useState } from "react";
import { motion } from "motion/react";

// The eye and a camera solve the same problem part-for-part: focus light, control its amount,
// capture an image, and send it on. Tap a stage to see the matching parts.
const PARTS = [
  { eye: "Cornea + lens", cam: "Lens", fn: "Focus the incoming light to a sharp point.", x: 86 },
  { eye: "Iris / pupil", cam: "Aperture", fn: "Control how much light is let in.", x: 120 },
  { eye: "Retina", cam: "Film / sensor", fn: "Capture the image and turn light into an electrical signal.", x: 210 },
  { eye: "Optic nerve", cam: "Data cable", fn: "Carry the signal onward, to the brain.", x: 250 },
];

export default function EyeCameraExplainer() {
  const [i, setI] = useState(0);
  const p = PARTS[i];

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <svg viewBox="0 0 280 90" className="mt-3 w-full">
        {/* light path */}
        <line x1="14" y1="45" x2="250" y2="45" stroke="var(--color-line)" strokeWidth="1.2" strokeDasharray="3 3" />
        <text x="14" y="36" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-amber)">light</text>
        {/* lens */}
        <ellipse cx="86" cy="45" rx="7" ry="18" fill="rgba(106,166,240,0.18)" stroke="#6aa6f0" strokeWidth="1.2" />
        {/* pupil/aperture */}
        <line x1="120" y1="30" x2="120" y2="60" stroke="#34d39a" strokeWidth="3" />
        {/* retina/sensor */}
        <path d="M204 24 Q220 45 204 66" fill="none" stroke="var(--color-amber)" strokeWidth="2.4" />
        {/* optic nerve */}
        <line x1="210" y1="60" x2="250" y2="74" stroke="var(--color-rose)" strokeWidth="2" />
        {/* highlight ring on selected stage */}
        <motion.circle cx={p.x} cy={p.x === 250 ? 74 : 45} r="14" fill="none" stroke="var(--color-amber)" strokeWidth="1.4" initial={false} animate={{ cx: p.x, cy: p.x === 250 ? 74 : 45 }} />
      </svg>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {PARTS.map((pr, k) => (
          <button key={k} onClick={() => setI(k)} className={"rounded-full border px-2.5 py-1 text-[11px] " + (k === i ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>{pr.eye}</button>
        ))}
      </div>
      <div className="mt-3 rounded-md border border-line bg-surface/50 p-3">
        <p className="text-[13px]"><span className="text-[#6aa6f0]">Eye: {p.eye}</span> <span className="text-dim">acts as the</span> <span className="text-amber">camera {p.cam}</span></p>
        <p className="mt-1 text-[12px] text-muted">{p.fn}</p>
      </div>
    </div>
  );
}
