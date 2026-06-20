import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// Grammar S -> 0 S 1 | epsilon generates {0^n 1^n}. Apply productions step by step:
// each S -> 0S1 adds a matched pair, then S -> epsilon finishes.
export default function DerivationExplainer() {
  // each step is the current sentential form as tokens; S is the variable
  const [steps, setSteps] = useState([["S"]]);
  const cur = steps[steps.length - 1];
  const sIdx = cur.indexOf("S");
  const done = sIdx === -1;

  const expand = () => setSteps((st) => [...st, [...cur.slice(0, sIdx), "0", "S", "1", ...cur.slice(sIdx + 1)]]);
  const finish = () => setSteps((st) => [...st, cur.filter((t) => t !== "S")]);
  const reset = () => setSteps([["S"]]);

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
      <p className="mt-2 text-[13px] text-muted">Grammar <Tex>{`S \\to 0S1 \\mid \\varepsilon`}</Tex>. Rewrite the variable <Tex>S</Tex> until only terminals remain.</p>

      <div className="mt-3 space-y-1.5">
        <AnimatePresence>
          {steps.map((tokens, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2 font-mono text-[15px]">
              <span className="text-dim">{i === 0 ? " " : "⇒"}</span>
              {(tokens.length ? tokens : ["ε"]).map((t, k) => (
                <span key={k} className={t === "S" ? "font-bold text-amber" : "text-text"}>{t}</span>
              ))}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-4 flex items-center gap-2">
        {!done ? (
          <>
            <button onClick={expand} className="rounded-full bg-amber px-4 py-1.5 text-[13px] font-medium text-ink transition-transform active:scale-95">apply S to 0S1</button>
            <button onClick={finish} className="rounded-full border border-line px-4 py-1.5 text-[13px] text-muted hover:text-text">apply S to ε</button>
          </>
        ) : (
          <span className="text-[13px] text-emerald">Generated <Tex>{`0^{${(cur.length) / 2}}1^{${(cur.length) / 2}}`}</Tex>, a string of the language.</span>
        )}
        <button onClick={reset} className="ml-auto text-[12px] text-dim hover:text-muted">reset</button>
      </div>
      <p className="mt-3 text-[12px] text-muted">Each <Tex>{`S \\to 0S1`}</Tex> adds one matched <Tex>0</Tex> and <Tex>1</Tex>; <Tex>{`S \\to \\varepsilon`}</Tex> stops. The whole language is <Tex>{`\\{0^n 1^n : n \\ge 0\\}`}</Tex>, which is context-free but not regular.</p>
    </div>
  );
}
