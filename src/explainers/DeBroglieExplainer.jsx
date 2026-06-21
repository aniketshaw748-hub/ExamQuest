import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// Wave-particle duality: every moving object has a de Broglie wavelength lambda = h / (m v).
// Heavy or fast => tiny wavelength (acts like a particle); light and slow => long wavelength
// (wave behaviour shows up). Slide the momentum and watch the wave stretch or shrink.
export default function DeBroglieExplainer() {
  const [p, setP] = useState(30); // relative momentum (m*v), arbitrary units
  // wavelength inversely proportional to momentum; map to a drawable range
  const lambda = Math.max(8, 600 / p);
  const W = 300, mid = 30;
  const path = Array.from({ length: 121 }, (_, i) => {
    const x = i * (W / 120);
    const y = mid - 18 * Math.sin((x / lambda) * 2 * Math.PI);
    return `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(" ");
  const wavy = p < 40;

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
      <p className="mt-2 text-[13px] text-muted">Every moving particle is also a wave, with <Tex>{`\\lambda = \\dfrac{h}{mv}`}</Tex>. More momentum, shorter wavelength.</p>

      <svg viewBox="0 0 300 60" className="mt-3 w-full">
        <motion.path key={lambda} d={path} fill="none" stroke="var(--color-amber)" strokeWidth="1.8"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5 }} />
      </svg>

      <div className="mt-2"><label className="block">
        <span className="text-[12px] text-muted">momentum <Tex>{`m v`}</Tex> = <b className="text-text tabular-nums">{p}</b></span>
        <input type="range" min={6} max={120} step={2} value={p} onChange={(e) => setP(+e.target.value)} className="mt-1.5 w-full accent-amber" />
      </label></div>

      <div className="mt-3 flex items-center gap-2 text-[13px]">
        <Tex>{`\\lambda \\propto 1/(mv)`}</Tex>
        <span className={"ml-auto rounded-full px-3 py-1 font-mono text-[11px] uppercase " + (wavy ? "border border-[#6aa6f0]/50 bg-[#6aa6f0]/10 text-[#6aa6f0]" : "border border-amber/50 bg-amber/10 text-amber")}>
          {wavy ? "wave-like" : "particle-like"}
        </span>
      </div>
      <p className="mt-3 text-[12px] text-muted">An electron is light enough that its wavelength matters (it diffracts); a cricket ball's wavelength is absurdly tiny, so it is purely a particle. This duality is why classical mechanics fails at the atomic scale.</p>
    </div>
  );
}
