import { useState } from "react";
import { motion } from "motion/react";

// Bohr model: electrons occupy shells around a nucleus, each shell filling before the next
// (2, 8, 8, 2 for the first 20 elements). Drag Z to build up the configuration.
const CAP = [2, 8, 8, 2];
const SYM = ["", "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca"];
const config = (z) => { const c = []; let r = z; for (const cap of CAP) { const n = Math.min(r, cap); if (n <= 0) break; c.push(n); r -= n; } return c; };

export default function AtomExplainer() {
  const [z, setZ] = useState(11);
  const shells = config(z);
  const cx = 110, cy = 110;

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <div className="mt-3 flex flex-col items-center gap-4 sm:flex-row">
        <svg viewBox="0 0 220 220" className="w-[200px] shrink-0 self-center">
          {shells.map((n, i) => {
            const R = 34 + i * 22;
            return (
              <g key={i}>
                <circle cx={cx} cy={cy} r={R} fill="none" stroke="var(--color-line)" strokeWidth="1" />
                {Array.from({ length: n }, (_, k) => {
                  const a = (-90 + (360 / n) * k) * (Math.PI / 180);
                  return <motion.circle key={k} cx={cx + R * Math.cos(a)} cy={cy + R * Math.sin(a)} r="4" fill="#6aa6f0"
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.08 + k * 0.02 }} />;
                })}
              </g>
            );
          })}
          <circle cx={cx} cy={cy} r="14" fill="var(--color-amber)" fillOpacity="0.85" />
          <text x={cx} y={cy + 4} textAnchor="middle" fontSize="11" fontFamily="var(--font-mono)" fill="var(--color-ink)">{z}p</text>
        </svg>

        <div className="flex-1 self-stretch">
          <p className="font-display text-3xl font-medium text-amber">{SYM[z]}</p>
          <p className="mt-1 font-mono text-[13px] text-muted">Z = {z}, shells: {shells.join(", ")}</p>
          <label className="mt-3 block">
            <span className="text-[12px] text-muted">atomic number Z</span>
            <input type="range" min={1} max={20} step={1} value={z} onChange={(e) => setZ(+e.target.value)} className="mt-1.5 w-full accent-amber" />
          </label>
        </div>
      </div>
      <p className="mt-3 text-[12px] text-muted">Shells fill from the inside out, holding up to 2, 8, 8 electrons. The outermost (valence) electrons drive chemistry; a full outer shell (Ne, Ar) is unreactive.</p>
    </div>
  );
}
