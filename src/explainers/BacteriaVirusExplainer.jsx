import { useState } from "react";

// Bacteria are living cells (prokaryotes) that reproduce on their own; viruses are acellular
// particles that can only reproduce inside a host. Tap a feature to compare.
const ROWS = [
  { f: "Cell", b: "Living, cellular (prokaryote)", v: "Acellular (border of living)" },
  { f: "Genome", b: "DNA (plus plasmids)", v: "DNA or RNA" },
  { f: "Coat", b: "Peptidoglycan cell wall", v: "Protein capsid" },
  { f: "Reproduce", b: "Binary fission (on its own)", v: "Only inside a host cell" },
  { f: "Treatment", b: "Antibiotics", v: "Antivirals / vaccines" },
  { f: "Size", b: "~1 to 10 micrometre", v: "~20 to 300 nm (far smaller)" },
];

export default function BacteriaVirusExplainer() {
  const [sel, setSel] = useState(0);
  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <svg viewBox="0 0 280 88" className="mt-3 w-full">
        {/* bacterium */}
        <ellipse cx="66" cy="44" rx="46" ry="26" fill="rgba(106,166,240,0.08)" stroke="#6aa6f0" strokeWidth="1.4" />
        <ellipse cx="66" cy="44" rx="41" ry="21" fill="none" stroke="#6aa6f0" strokeWidth="0.8" strokeDasharray="2 2" />
        <path d="M48 44 q10 -8 18 0 q8 8 16 0" fill="none" stroke="#6aa6f0" strokeWidth="1.4" />
        <circle cx="86" cy="34" r="3.5" fill="none" stroke="#6aa6f0" strokeWidth="1" />
        <path d="M112 44 q12 -4 22 4" fill="none" stroke="#6aa6f0" strokeWidth="1" />
        <text x="66" y="80" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="#6aa6f0">bacterium</text>
        {/* virus (bacteriophage) */}
        <polygon points="214,18 230,28 230,44 214,54 198,44 198,28" fill="rgba(251,113,133,0.1)" stroke="#fb7185" strokeWidth="1.4" />
        <circle cx="214" cy="35" r="4" fill="none" stroke="#fb7185" strokeWidth="1" />
        <rect x="210" y="54" width="8" height="14" fill="rgba(251,113,133,0.1)" stroke="#fb7185" strokeWidth="1.2" />
        {[-1, 0, 1].map((d, i) => <line key={i} x1="214" y1="68" x2={206 + d * 8} y2="76" stroke="#fb7185" strokeWidth="1" />)}
        <text x="214" y="86" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="#fb7185">virus</text>
      </svg>

      <div className="mt-2 flex flex-wrap gap-1.5">
        {ROWS.map((r, k) => (
          <button key={k} onClick={() => setSel(k)} className={"rounded-full border px-2 py-1 text-[10px] " + (k === sel ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>{r.f}</button>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2 text-[12px]">
        <div className="rounded-md border border-[#6aa6f0]/40 bg-[#6aa6f0]/[0.06] p-3">
          <p className="font-mono text-[10px] uppercase tracking-wide text-[#6aa6f0]">Bacterium</p>
          <p className="mt-1 text-muted">{ROWS[sel].b}</p>
        </div>
        <div className="rounded-md border border-rose/40 bg-rose/[0.06] p-3">
          <p className="font-mono text-[10px] uppercase tracking-wide text-rose">Virus</p>
          <p className="mt-1 text-muted">{ROWS[sel].v}</p>
        </div>
      </div>
      <p className="mt-3 text-[12px] text-muted">A bacterium is a self-sufficient living cell; a virus is just genetic material in a protein coat that hijacks a host to copy itself. A useful virus is the bacteriophage, which infects and kills harmful bacteria.</p>
    </div>
  );
}
