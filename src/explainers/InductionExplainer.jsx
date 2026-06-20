import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

const N = 8;

// Two pillars of induction shown as dominoes. Base case = the first tile is pushed.
// Inductive step = each fallen tile knocks the next. Remove either and the chain fails.
export default function InductionExplainer() {
  const [base, setBase] = useState(true);
  const [step, setStep] = useState(true);
  const [pushed, setPushed] = useState(false);

  // how far the cascade actually reaches
  const fallen = !pushed || !base ? 0 : step ? N : 1;

  const verdict = !pushed
    ? { text: "Press Start to test the chain.", tone: "dim" }
    : !base
    ? { text: "No base case: nothing ever starts. P(n) is unproven.", tone: "rose" }
    : !step
    ? { text: "No inductive step: P(1) holds but the chain stops at the first tile.", tone: "rose" }
    : { text: "Base + step: every tile falls. P(n) holds for all n.", tone: "emerald" };

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <div className="mt-3 flex flex-wrap gap-2">
        <Toggle on={base} set={() => { setBase((v) => !v); setPushed(false); }} label="Base case P(1)" />
        <Toggle on={step} set={() => { setStep((v) => !v); setPushed(false); }} label="Step P(k) ⇒ P(k+1)" />
      </div>

      <svg viewBox="0 0 300 96" className="mt-4 w-full">
        <line x1="6" y1="84" x2="294" y2="84" stroke="var(--color-line)" strokeWidth="1.5" />
        {Array.from({ length: N }, (_, i) => {
          const down = i < fallen;
          const x = 24 + i * 34;
          return (
            <motion.g key={i} style={{ originX: `${x + 5}px`, originY: "84px" }}
              animate={{ rotate: down ? -68 : 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: down ? i * 0.12 : 0 }}>
              <rect x={x} y="40" width="10" height="44" rx="2"
                fill={i === 0 ? "var(--color-amber)" : "#1a2336"}
                fillOpacity={i === 0 ? 0.3 : 1}
                stroke={i === 0 ? "var(--color-amber)" : "#6aa6f0"} strokeWidth="1.4" />
            </motion.g>
          );
        })}
        <text x="24" y="32" fill="var(--color-dim)" fontSize="9.5" fontFamily="var(--font-mono)">P(1)</text>
      </svg>

      <div className="mt-3 flex items-center gap-3">
        <button onClick={() => setPushed(true)}
          className="rounded-full bg-amber px-4 py-1.5 text-[13px] font-medium text-ink transition-transform active:scale-95">
          Start the cascade
        </button>
        <button onClick={() => setPushed(false)} className="text-[12px] text-dim hover:text-muted">reset</button>
      </div>

      <p className={"mt-3 text-[13px] " + (verdict.tone === "rose" ? "text-rose" : verdict.tone === "emerald" ? "text-emerald" : "text-dim")}>
        {verdict.text}
      </p>
      <p className="mt-1 text-[12px] text-muted">
        Proving <Tex>{`P(1)`}</Tex> and <Tex>{`P(k)\\Rightarrow P(k+1)`}</Tex> together force <Tex>{`P(n)`}</Tex> for every <Tex>{`n`}</Tex>.
      </p>
    </div>
  );
}

function Toggle({ on, set, label }) {
  return (
    <button onClick={set}
      className={"inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[12px] transition-colors " +
        (on ? "border-emerald/50 bg-emerald/10 text-emerald" : "border-line bg-surface/40 text-dim")}>
      <span className={"h-2 w-2 rounded-full " + (on ? "bg-emerald" : "bg-dim")} />
      {label}
    </button>
  );
}
