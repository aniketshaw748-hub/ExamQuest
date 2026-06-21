import { useState } from "react";

// Prokaryotic vs eukaryotic cells: the deepest divide in biology. Prokaryotes have no nucleus and
// no membrane-bound organelles; eukaryotes do. Tap a feature to compare.
const ROWS = [
  { f: "Nucleus", pro: "Absent (DNA loose in cytoplasm)", eu: "Present (membrane-bound)" },
  { f: "Size", pro: "0.2 to 2 micrometre", eu: "10 to 100 micrometre" },
  { f: "DNA", pro: "Circular, naked", eu: "Linear, wound on histones" },
  { f: "Ribosome", pro: "70S", eu: "80S" },
  { f: "Organelles", pro: "None (no mitochondria/ER/Golgi)", eu: "Mitochondria, ER, Golgi, etc." },
  { f: "Division", pro: "Binary fission", eu: "Mitosis / meiosis" },
];

export default function CellCompareExplainer() {
  const [sel, setSel] = useState(0);

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <svg viewBox="0 0 280 96" className="mt-3 w-full">
        {/* prokaryote: small, nucleoid + ribosome dots, no organelles */}
        <rect x="14" y="22" width="110" height="56" rx="22" fill="rgba(106,166,240,0.08)" stroke="#6aa6f0" strokeWidth="1.2" />
        <path d="M40 50 q12 -10 24 0 q12 10 24 0" fill="none" stroke="#6aa6f0" strokeWidth="1.4" />
        {[[48,38],[70,62],[92,40],[58,66]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="2" fill="#6aa6f0" />)}
        <text x="69" y="16" textAnchor="middle" fontSize="8.5" fontFamily="var(--font-mono)" fill="#6aa6f0">prokaryote</text>
        {/* eukaryote: larger, nucleus + organelles */}
        <rect x="150" y="14" width="120" height="72" rx="30" fill="rgba(52,211,154,0.08)" stroke="#34d39a" strokeWidth="1.2" />
        <circle cx="200" cy="50" r="14" fill="rgba(52,211,154,0.18)" stroke="#34d39a" strokeWidth="1.2" />
        <text x="200" y="53" textAnchor="middle" fontSize="7" fontFamily="var(--font-mono)" fill="#34d39a">nucleus</text>
        <ellipse cx="238" cy="36" rx="9" ry="5" fill="none" stroke="#34d39a" strokeWidth="1" />
        <ellipse cx="236" cy="66" rx="8" ry="5" fill="none" stroke="#34d39a" strokeWidth="1" />
        <text x="210" y="10" textAnchor="middle" fontSize="8.5" fontFamily="var(--font-mono)" fill="#34d39a">eukaryote</text>
      </svg>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {ROWS.map((r, k) => (
          <button key={k} onClick={() => setSel(k)} className={"rounded-full border px-2.5 py-1 text-[11px] " + (k === sel ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>{r.f}</button>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 text-[12px]">
        <div className="rounded-md border border-[#6aa6f0]/40 bg-[#6aa6f0]/[0.06] p-3">
          <p className="font-mono text-[10px] uppercase tracking-wide text-[#6aa6f0]">Prokaryote</p>
          <p className="mt-1 text-muted">{ROWS[sel].pro}</p>
        </div>
        <div className="rounded-md border border-[#34d39a]/40 bg-[#34d39a]/[0.06] p-3">
          <p className="font-mono text-[10px] uppercase tracking-wide text-[#34d39a]">Eukaryote</p>
          <p className="mt-1 text-muted">{ROWS[sel].eu}</p>
        </div>
      </div>
      <p className="mt-3 text-[12px] text-muted">The defining difference is the <b className="font-medium text-text">nucleus</b>: prokaryotes (bacteria) keep their DNA loose in the cytoplasm; eukaryotes (plants, animals, fungi) seal it in a membrane and add organelles.</p>
    </div>
  );
}
