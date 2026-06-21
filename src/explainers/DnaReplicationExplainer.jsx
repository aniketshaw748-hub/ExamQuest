import { motion } from "motion/react";

// DNA replication is semi-conservative. Helicase unwinds the helix at the fork; DNA polymerase adds
// bases only 5' to 3', so the leading strand is made continuously toward the fork while the lagging
// strand is made in short Okazaki fragments, later joined by ligase.
export default function DnaReplicationExplainer() {
  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <svg viewBox="0 0 280 120" className="mx-auto mt-3 w-full max-w-[300px]">
        {/* parent duplex into the fork */}
        <line x1="10" y1="54" x2="120" y2="54" stroke="var(--color-muted)" strokeWidth="2" />
        <line x1="10" y1="66" x2="120" y2="66" stroke="var(--color-muted)" strokeWidth="2" />
        {/* fork opening */}
        <line x1="120" y1="54" x2="250" y2="22" stroke="var(--color-line)" strokeWidth="1.6" />
        <line x1="120" y1="66" x2="250" y2="98" stroke="var(--color-line)" strokeWidth="1.6" />
        <circle cx="120" cy="60" r="9" fill="rgba(246,181,61,0.18)" stroke="var(--color-amber)" strokeWidth="1.2" />
        <text x="120" y="60" textAnchor="middle" fontSize="6.5" fontFamily="var(--font-mono)" fill="var(--color-amber)">heli</text>
        {/* leading strand: continuous, toward the fork */}
        <line x1="140" y1="30" x2="245" y2="24" stroke="#34d39a" strokeWidth="2.4" />
        <path d="M140 30 l9 -1 l-3 6 z" fill="#34d39a" />
        <text x="200" y="18" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="#34d39a">leading (continuous)</text>
        {/* lagging strand: Okazaki fragments */}
        {[150, 186, 222].map((x, i) => <line key={i} x1={x} y1={92 - i * -0} x2={x + 28} y2={92} stroke="#6aa6f0" strokeWidth="2.4" />)}
        {[178, 214].map((x, i) => <circle key={i} cx={x} cy="92" r="2.4" fill="var(--color-amber)" />)}
        <text x="196" y="112" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="#6aa6f0">lagging (Okazaki fragments)</text>
        <text x="196" y="83" textAnchor="middle" fontSize="6.5" fontFamily="var(--font-mono)" fill="var(--color-amber)">ligase joins</text>
        {/* moving polymerase hint */}
        <motion.circle cy="27" r="3" fill="#34d39a" animate={{ cx: [150, 240] }} transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }} />
      </svg>

      <p className="mt-1 text-[12px] text-muted">Because DNA polymerase only builds 5' to 3', the two new strands are made differently: one runs smoothly toward the opening fork (leading), the other is stitched together backwards from short <span className="text-[#6aa6f0]">Okazaki fragments</span> sealed by <span className="text-amber">ligase</span> (lagging).</p>
      <p className="mt-2 text-[12px] text-muted">Replication is semi-conservative (Meselson & Stahl): each daughter helix keeps one old strand and one new one.</p>
    </div>
  );
}
