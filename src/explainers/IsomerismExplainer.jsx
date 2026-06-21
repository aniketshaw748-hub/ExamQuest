import { useState } from "react";

// Isomers share a molecular formula but differ in structure. The family splits into structural
// (different connectivity) and stereo (same connectivity, different 3D arrangement). Tap a type.
const TYPES = {
  Structural: {
    Chain: "Same atoms, different carbon skeleton (straight vs branched).",
    Position: "Same skeleton, the functional group sits on a different carbon.",
    Functional: "Same formula, a different functional group (an alcohol vs an ether).",
    Metamerism: "Same functional group, different alkyl groups around it (diethyl ether vs methyl propyl ether).",
    Tautomerism: "Isomers that rapidly interconvert by shifting a mobile H (keto <-> enol).",
  },
  Stereo: {
    "Geometric (E/Z)": "Same connectivity, groups locked on different sides of a double bond (cis/trans).",
    Enantiomers: "Non-superimposable mirror images, opposite configuration at every chiral centre.",
    Diastereomers: "Stereoisomers that are NOT mirror images (e.g. erythro vs threo).",
  },
};

export default function IsomerismExplainer() {
  const [sel, setSel] = useState(["Stereo", "Enantiomers"]);
  const desc = TYPES[sel[0]][sel[1]];

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <div className="mt-3 grid grid-cols-2 gap-3">
        {Object.entries(TYPES).map(([branch, kids]) => (
          <div key={branch}>
            <p className="font-mono text-[11px] uppercase tracking-wide text-muted">{branch}</p>
            <div className="mt-1.5 flex flex-col gap-1.5">
              {Object.keys(kids).map((k) => {
                const on = sel[0] === branch && sel[1] === k;
                return (
                  <button key={k} onClick={() => setSel([branch, k])}
                    className={"rounded-md border px-2 py-1.5 text-left text-[12px] " + (on ? "border-amber bg-amber/15 text-amber" : "border-line text-dim hover:text-text")}>{k}</button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-md border border-line bg-surface/50 p-3">
        <p className="text-[13px]"><span className="text-amber">{sel[1]}</span> <span className="text-muted">({sel[0].toLowerCase()} isomerism)</span></p>
        <p className="mt-1 text-[12px] text-muted">{desc}</p>
      </div>
      <p className="mt-3 text-[12px] text-muted">Structural isomers differ in which atoms connect to which; stereoisomers connect the same way but point differently in space. That spatial difference is what makes drug molecules chiral and biologically distinct.</p>
    </div>
  );
}
