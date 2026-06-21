import { useState } from "react";
import { Tex } from "../lib/rich.jsx";

// The Carnot cycle: two isothermal and two adiabatic steps form a closed loop on a P-V diagram.
// Its efficiency is the ceiling for any heat engine and depends only on the two temperatures:
// eta = 1 - Tc/Th.
export default function CarnotExplainer() {
  const [th, setTh] = useState(600);
  const [tc, setTc] = useState(300);
  const Tc = Math.min(tc, th - 50);
  const eta = Math.round((1 - Tc / th) * 100);

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <div className="mt-3 flex flex-col items-center gap-4 sm:flex-row">
        <svg viewBox="0 0 300 150" className="w-full shrink-0 sm:w-[58%]">
          <line x1="40" y1="12" x2="40" y2="135" stroke="var(--color-line)" strokeWidth="1" />
          <line x1="40" y1="135" x2="292" y2="135" stroke="var(--color-line)" strokeWidth="1" />
          <text x="16" y="20" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-dim)">P</text>
          <text x="288" y="131" fontSize="8" textAnchor="end" fontFamily="var(--font-mono)" fill="var(--color-dim)">V</text>
          <path d="M80 30 Q140 34 196 56 Q236 74 250 112 Q176 108 104 92 Q80 60 80 30 Z"
            fill="rgba(246,181,61,0.12)" stroke="var(--color-amber)" strokeWidth="1.6" />
          <circle cx="80" cy="30" r="3" fill="var(--color-amber)" /><text x="66" y="28" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-muted)">1</text>
          <circle cx="196" cy="56" r="3" fill="var(--color-amber)" /><text x="200" y="50" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-muted)">2</text>
          <circle cx="250" cy="112" r="3" fill="var(--color-amber)" /><text x="254" y="116" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-muted)">3</text>
          <circle cx="104" cy="92" r="3" fill="var(--color-amber)" /><text x="88" y="100" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-muted)">4</text>
          <text x="120" y="34" fontSize="7.5" fontFamily="var(--font-mono)" fill="#f08a5d">isothermal Th</text>
          <text x="206" y="92" fontSize="7.5" fontFamily="var(--font-mono)" fill="var(--color-dim)">adiabatic</text>
          <text x="120" y="112" fontSize="7.5" fontFamily="var(--font-mono)" fill="#6aa6f0">isothermal Tc</text>
        </svg>

        <div className="flex-1 self-stretch">
          <p className="font-display text-3xl font-medium text-amber">{eta}%</p>
          <p className="mt-1 text-[12px] text-muted">max efficiency <Tex>{`\\eta = 1 - T_c/T_h`}</Tex></p>
          <label className="mt-3 block"><span className="text-[12px] text-muted">hot reservoir Th = {th} K</span>
            <input type="range" min={350} max={900} step={25} value={th} onChange={(e) => setTh(+e.target.value)} className="mt-1.5 w-full accent-amber" /></label>
          <label className="mt-2 block"><span className="text-[12px] text-muted">cold reservoir Tc = {Tc} K</span>
            <input type="range" min={100} max={600} step={25} value={tc} onChange={(e) => setTc(+e.target.value)} className="mt-1.5 w-full accent-amber" /></label>
        </div>
      </div>
      <p className="mt-3 text-[12px] text-muted">Efficiency depends only on the reservoir temperatures, never the working substance. The bigger the temperature gap, the more work you extract, but no engine can beat the Carnot limit, and reaching 100% would need Tc = 0.</p>
    </div>
  );
}
