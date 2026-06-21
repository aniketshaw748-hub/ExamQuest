import { motion } from "motion/react";

// A galvanic (voltaic) cell turns a spontaneous redox reaction into electricity. Oxidation at the
// anode releases electrons that flow through the wire to the cathode (reduction); the salt bridge
// completes the circuit by letting ions move to keep each half-cell neutral. (Daniell cell shown.)
export default function GalvanicCellExplainer() {
  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <svg viewBox="0 0 300 170" className="mt-3 w-full">
        {/* external wire + voltmeter */}
        <path d="M70 40 L70 22 L150 22" fill="none" stroke="var(--color-muted)" strokeWidth="1.5" />
        <path d="M230 40 L230 22 L186 22" fill="none" stroke="var(--color-muted)" strokeWidth="1.5" />
        <circle cx="168" cy="22" r="14" fill="rgba(246,181,61,0.10)" stroke="var(--color-amber)" strokeWidth="1.3" />
        <text x="168" y="26" textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill="var(--color-amber)">1.1V</text>
        {/* flowing electrons (anode -> cathode along the top wire) */}
        {[0, 1, 2, 3].map((i) => (
          <motion.circle key={i} cy="22" r="2.6" fill="#6aa6f0"
            animate={{ cx: [74, 150, 186, 228] }} transition={{ duration: 2.4, repeat: Infinity, ease: "linear", delay: i * 0.6 }} />
        ))}
        <text x="128" y="16" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="#6aa6f0">e- flow</text>
        {/* salt bridge */}
        <path d="M92 70 Q150 48 208 70" fill="none" stroke="#34d39a" strokeWidth="6" strokeOpacity="0.35" />
        <text x="150" y="60" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="#34d39a">salt bridge</text>
        {/* left beaker (anode) */}
        <rect x="40" y="72" width="60" height="74" rx="4" fill="rgba(106,166,240,0.08)" stroke="var(--color-line)" strokeWidth="1.2" />
        <rect x="66" y="40" width="8" height="80" fill="#9aa6b2" />
        <text x="70" y="160" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-muted)">Zn anode (-)</text>
        <text x="70" y="100" textAnchor="middle" fontSize="7.5" fontFamily="var(--font-mono)" fill="var(--color-dim)">oxidation</text>
        {/* right beaker (cathode) */}
        <rect x="200" y="72" width="60" height="74" rx="4" fill="rgba(52,211,154,0.08)" stroke="var(--color-line)" strokeWidth="1.2" />
        <rect x="226" y="40" width="8" height="80" fill="#d98a52" />
        <text x="230" y="160" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-muted)">Cu cathode (+)</text>
        <text x="230" y="100" textAnchor="middle" fontSize="7.5" fontFamily="var(--font-mono)" fill="var(--color-dim)">reduction</text>
      </svg>

      <p className="mt-1 text-[13px] text-muted">Electrons leave the <span className="text-[#6aa6f0]">anode</span> (oxidation, Zn to Zn²⁺), travel the wire to the <span className="text-[#34d39a]">cathode</span> (reduction, Cu²⁺ to Cu). The salt bridge carries ions to keep both sides neutral.</p>
      <p className="mt-2 text-[12px] text-muted">Cell EMF = E(cathode) − E(anode). A positive EMF means the reaction is spontaneous, so the cell delivers current. Reverse it with an external supply and you have an electrolytic cell.</p>
    </div>
  );
}
