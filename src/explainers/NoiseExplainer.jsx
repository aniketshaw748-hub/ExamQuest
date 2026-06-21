import { useState } from "react";
import { motion } from "motion/react";

// Loudness is measured in decibels (dB) on a logarithmic scale: every +10 dB is ten times the
// sound intensity. Prolonged exposure above about 85 dB damages hearing. Slide to compare sources.
const SOURCES = [
  { db: 30, name: "whisper" },
  { db: 60, name: "conversation" },
  { db: 80, name: "city traffic" },
  { db: 110, name: "rock concert" },
  { db: 130, name: "jet takeoff" },
];

export default function NoiseExplainer() {
  const [db, setDb] = useState(60);
  const W = 300, x0 = 18;
  const xOf = (d) => x0 + (d / 140) * (W - x0 - 10);
  const harm = db >= 85;
  const near = SOURCES.reduce((a, b) => Math.abs(b.db - db) < Math.abs(a.db - db) ? b : a);

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <svg viewBox="0 0 300 96" className="mt-3 w-full">
        <defs>
          <linearGradient id="noiseGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#34d39a" /><stop offset="55%" stopColor="var(--color-amber)" /><stop offset="100%" stopColor="var(--color-rose)" />
          </linearGradient>
        </defs>
        <rect x={x0} y="40" width={W - x0 - 10} height="12" rx="6" fill="url(#noiseGrad)" opacity="0.7" />
        {/* harm threshold */}
        <line x1={xOf(85)} y1="32" x2={xOf(85)} y2="60" stroke="var(--color-rose)" strokeWidth="1" strokeDasharray="3 2" />
        <text x={xOf(85)} y="28" textAnchor="middle" fontSize="7" fontFamily="var(--font-mono)" fill="var(--color-rose)">85 dB harm</text>
        {/* source ticks */}
        {SOURCES.map((s) => (
          <g key={s.db}>
            <line x1={xOf(s.db)} y1="52" x2={xOf(s.db)} y2="58" stroke="var(--color-dim)" strokeWidth="1" />
            <text x={xOf(s.db)} y="70" textAnchor="middle" fontSize="6.5" fontFamily="var(--font-mono)" fill="var(--color-dim)">{s.name}</text>
            <text x={xOf(s.db)} y="79" textAnchor="middle" fontSize="6.5" fontFamily="var(--font-mono)" fill="var(--color-dim)">{s.db}</text>
          </g>
        ))}
        {/* pointer */}
        <motion.path animate={{ x: xOf(db) }} d="M-5 28 l10 0 l-5 10 z" fill="var(--color-text)" />
      </svg>

      <div className="mt-1 flex items-center gap-2">
        <span className="font-mono text-[13px]"><b className="text-text">{db} dB</b> <span className="text-muted">~ {near.name}</span></span>
        <span className={"ml-auto rounded-full px-3 py-1 font-mono text-[11px] uppercase " + (harm ? "border border-rose/50 bg-rose/10 text-rose" : "border border-emerald/50 bg-emerald/10 text-emerald")}>{harm ? "hearing risk" : "safe"}</span>
      </div>
      <input type="range" min={0} max={140} step={5} value={db} onChange={(e) => setDb(+e.target.value)} className="mt-1.5 w-full accent-amber" />
      <p className="mt-3 text-[12px] text-muted">The scale is logarithmic, so 80 dB traffic is ten times more intense than 70 dB, not a little more. Beyond ~85 dB, prolonged exposure causes permanent hearing loss, plus stress, sleep loss and reduced concentration. Control: barriers, mufflers, zoning and limits.</p>
    </div>
  );
}
