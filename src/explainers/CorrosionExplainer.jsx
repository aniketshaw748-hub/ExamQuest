import { motion } from "motion/react";

// Electrochemical (wet) corrosion: under a water film, one patch of iron acts as an anode
// (Fe -> Fe2+ + 2e-) and another as a cathode (O2 + H2O + electrons -> OH-). Electrons travel
// through the metal from anode to cathode; the Fe2+ and OH- meet and deposit as rust.
export default function CorrosionExplainer() {
  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <svg viewBox="0 0 300 150" className="mt-3 w-full">
        {/* water film */}
        <path d="M50 96 Q150 40 250 96 Z" fill="rgba(106,166,240,0.16)" stroke="#6aa6f0" strokeWidth="1" />
        <text x="150" y="70" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="#6aa6f0">water film + O₂</text>
        {/* metal */}
        <rect x="30" y="96" width="240" height="34" fill="rgba(154,166,178,0.18)" stroke="var(--color-line)" strokeWidth="1" />
        <text x="150" y="146" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-muted)">iron</text>
        {/* anode zone */}
        <rect x="70" y="96" width="34" height="34" fill="rgba(246,181,61,0.16)" />
        <text x="87" y="112" textAnchor="middle" fontSize="7.5" fontFamily="var(--font-mono)" fill="var(--color-amber)">anode</text>
        <text x="87" y="123" textAnchor="middle" fontSize="6.5" fontFamily="var(--font-mono)" fill="var(--color-amber)">Fe→Fe²⁺</text>
        {/* cathode zone */}
        <rect x="196" y="96" width="34" height="34" fill="rgba(52,211,154,0.16)" />
        <text x="213" y="112" textAnchor="middle" fontSize="7.5" fontFamily="var(--font-mono)" fill="#34d39a">cathode</text>
        <text x="213" y="123" textAnchor="middle" fontSize="6.5" fontFamily="var(--font-mono)" fill="#34d39a">O₂→OH⁻</text>
        {/* electrons through the metal */}
        {[0, 1, 2].map((i) => (
          <motion.circle key={i} cy="113" r="2.4" fill="#6aa6f0"
            animate={{ cx: [104, 196] }} transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: i * 0.6 }} />
        ))}
        <text x="150" y="111" textAnchor="middle" fontSize="7" fontFamily="var(--font-mono)" fill="#6aa6f0">e-</text>
        {/* rust deposit */}
        <motion.ellipse cx="87" cy="94" rx="14" ry="5" fill="#b5651d" fillOpacity="0.6"
          animate={{ ry: [3, 6, 3] }} transition={{ duration: 2.5, repeat: Infinity }} />
        <text x="120" y="90" fontSize="7" fontFamily="var(--font-mono)" fill="#b5651d">rust</text>
      </svg>

      <p className="mt-1 text-[13px] text-muted">A water film turns the iron into countless tiny galvanic cells: iron dissolves at <span className="text-amber">anodic</span> patches, oxygen is reduced at <span className="text-[#34d39a]">cathodic</span> patches, and the products meet to form rust.</p>
      <p className="mt-2 text-[12px] text-muted">This is why iron rusts faster in damp, salty, oxygen-rich conditions: water and dissolved ions complete the circuit, and oxygen drives the cathode reaction.</p>
    </div>
  );
}
