import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// First law of thermodynamics: energy is conserved. The internal energy of a system changes by
// the heat added minus the work it does, dU = q - w. Slide q and w and watch dU.
export default function FirstLawExplainer() {
  const [q, setQ] = useState(40);
  const [w, setW] = useState(15);
  const dU = q - w;
  const barH = Math.max(-46, Math.min(46, dU * 0.9));

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
      <p className="mt-2 text-[13px] text-muted">First law: <Tex>{`\\Delta U = q - w`}</Tex>. Heat in raises internal energy; work done by the system lowers it.</p>

      <svg viewBox="0 0 300 130" className="mt-3 w-full">
        {/* system box */}
        <rect x="110" y="42" width="80" height="56" rx="8" fill="rgba(246,181,61,0.10)" stroke="var(--color-amber)" strokeWidth="1.4" />
        <text x="150" y="66" textAnchor="middle" fontSize="10" fontFamily="var(--font-mono)" fill="var(--color-amber)">system</text>
        {/* internal-energy bar inside */}
        <line x1="150" y1="86" x2="150" y2="86" stroke={dU >= 0 ? "#34d39a" : "var(--color-rose)"} strokeWidth="6" />
        <motion.line x1="150" y1="86" x2="150" animate={{ y2: 86 - barH }} transition={{ type: "spring", stiffness: 200, damping: 22 }}
          stroke={dU >= 0 ? "#34d39a" : "var(--color-rose)"} strokeWidth="6" strokeLinecap="round" />
        {/* heat in (left) */}
        <line x1="24" y1="70" x2="104" y2="70" stroke="#f08a5d" strokeWidth="2" />
        <path d="M104 70 l-9 -4 l0 8 z" fill="#f08a5d" />
        <text x="24" y="60" fontSize="9" fontFamily="var(--font-mono)" fill="#f08a5d">heat q = {q}</text>
        {/* work out (right) */}
        <line x1="196" y1="70" x2="276" y2="70" stroke="#6aa6f0" strokeWidth="2" />
        <path d="M276 70 l-9 -4 l0 8 z" fill="#6aa6f0" />
        <text x="210" y="60" fontSize="9" fontFamily="var(--font-mono)" fill="#6aa6f0">work w = {w}</text>
        <text x="150" y="118" textAnchor="middle" fontSize="11" fontFamily="var(--font-mono)" fill={dU >= 0 ? "#34d39a" : "var(--color-rose)"}>ΔU = {q} - {w} = {dU}</text>
      </svg>

      <div className="mt-2 grid grid-cols-2 gap-3">
        <label className="block"><span className="text-[12px] text-muted">heat added q</span>
          <input type="range" min={-50} max={50} step={5} value={q} onChange={(e) => setQ(+e.target.value)} className="mt-1.5 w-full accent-amber" /></label>
        <label className="block"><span className="text-[12px] text-muted">work done w</span>
          <input type="range" min={-50} max={50} step={5} value={w} onChange={(e) => setW(+e.target.value)} className="mt-1.5 w-full accent-amber" /></label>
      </div>
      <p className="mt-3 text-[12px] text-muted">Sign convention: q is positive when heat flows in, w is positive when the system does work on the surroundings. Energy is never created or destroyed, only moved and converted.</p>
    </div>
  );
}
