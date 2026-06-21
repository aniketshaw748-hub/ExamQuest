import { motion } from "motion/react";

// The nucleosome is the basic unit of DNA packaging: ~147 base pairs of DNA wrapped ~1.65 turns
// around a histone octamer (two copies each of H2A, H2B, H3, H4). A chain of them looks like beads
// on a string; the linker histone H1 sits on the DNA between beads.
export default function NucleosomeExplainer() {
  const beads = [70, 150, 230];
  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <svg viewBox="0 0 300 120" className="mt-3 w-full">
        {/* the DNA "string" weaving through the beads */}
        <path d="M14 60 Q42 60 52 60 M98 60 L132 60 M178 60 L212 60 M268 60 L290 60" stroke="#6aa6f0" strokeWidth="2" fill="none" />
        {beads.map((x, i) => (
          <motion.g key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.12, type: "spring", stiffness: 200, damping: 18 }}>
            {/* histone octamer core */}
            <circle cx={x} cy="60" r="18" fill="rgba(246,181,61,0.16)" stroke="var(--color-amber)" strokeWidth="1.4" />
            {/* DNA wrapped ~1.65 turns */}
            <ellipse cx={x} cy="60" rx="20" ry="13" fill="none" stroke="#6aa6f0" strokeWidth="1.8" transform={`rotate(-20 ${x} 60)`} />
            {/* H1 linker mark */}
            {i < beads.length - 1 && <circle cx={x + 40} cy="60" r="3" fill="#34d39a" />}
          </motion.g>
        ))}
        <text x="150" y="16" textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill="var(--color-amber)">"beads on a string"</text>
        <text x="70" y="92" textAnchor="middle" fontSize="7.5" fontFamily="var(--font-mono)" fill="var(--color-amber)">histone octamer</text>
        <text x="70" y="102" textAnchor="middle" fontSize="7" fontFamily="var(--font-mono)" fill="var(--color-dim)">2x H2A H2B H3 H4</text>
        <text x="194" y="50" fontSize="7.5" fontFamily="var(--font-mono)" fill="#34d39a">H1</text>
        <text x="246" y="74" fontSize="7.5" fontFamily="var(--font-mono)" fill="#6aa6f0">linker DNA</text>
      </svg>

      <p className="mt-1 text-[13px] text-muted">Each bead is about <span className="text-amber">147 base pairs</span> of DNA wrapped ~1.65 turns around a <span className="text-amber">histone octamer</span> (two each of H2A, H2B, H3, H4). The <span className="text-[#34d39a]">H1</span> linker histone clamps the DNA between beads.</p>
      <p className="mt-2 text-[12px] text-muted">Histones are positively charged (rich in arginine and lysine), so they grip the negatively charged DNA backbone. This first level of coiling already shortens the DNA several-fold.</p>
    </div>
  );
}
