import { motion } from "motion/react";

// Organic reactions are electrons moving from rich to poor. A nucleophile (electron-rich, has a
// lone pair or negative charge) donates a pair to an electrophile (electron-poor, positive or
// electron-deficient), forming a new bond. The curved arrow always points rich -> poor.
export default function ReagentsExplainer() {
  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <svg viewBox="0 0 300 110" className="mt-3 w-full">
        {/* nucleophile */}
        <circle cx="58" cy="60" r="24" fill="rgba(106,166,240,0.12)" stroke="#6aa6f0" strokeWidth="1.4" />
        <text x="58" y="58" textAnchor="middle" fontSize="12" fontFamily="var(--font-mono)" fill="#6aa6f0">Nu</text>
        <g fill="#6aa6f0"><circle cx="50" cy="74" r="2.4" /><circle cx="60" cy="76" r="2.4" /></g>
        <text x="58" y="98" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="#6aa6f0">nucleophile (rich)</text>
        {/* electrophile */}
        <circle cx="242" cy="60" r="24" fill="rgba(240,138,93,0.12)" stroke="#f08a5d" strokeWidth="1.4" />
        <text x="242" y="58" textAnchor="middle" fontSize="12" fontFamily="var(--font-mono)" fill="#f08a5d">E</text>
        <path d="M256 44 h8 M260 40 v8" stroke="#f08a5d" strokeWidth="1.6" />
        <text x="242" y="98" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="#f08a5d">electrophile (poor)</text>
        {/* curved electron-pair arrow rich -> poor */}
        <motion.path d="M84 56 Q150 18 216 56" fill="none" stroke="var(--color-amber)" strokeWidth="1.8" markerEnd="url(#rgArrow)"
          initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: [0, 1], opacity: [0, 1, 1, 0] }} transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }} />
        <defs><marker id="rgArrow" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="var(--color-amber)" /></marker></defs>
        <text x="150" y="20" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-amber)">electron pair</text>
      </svg>

      <p className="mt-1 text-[13px] text-muted">The <span className="text-[#6aa6f0]">nucleophile</span> donates its lone pair to the <span className="text-[#f08a5d]">electrophile</span>, forming a new bond. Electrons always flow from electron-rich to electron-poor.</p>
      <p className="mt-2 text-[12px] text-muted">Nucleophiles (OH⁻, NH₃, CN⁻) seek positive centres; electrophiles (H⁺, carbocations, carbonyl carbon) seek electrons. Every substitution, addition and elimination is just this flow, repeated and rearranged.</p>
    </div>
  );
}
