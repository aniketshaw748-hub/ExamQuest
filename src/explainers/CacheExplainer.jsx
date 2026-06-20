import { useState } from "react";
import { motion } from "motion/react";

// Direct-mapped cache (4 lines, slot = address mod 4). Step through an access stream:
// a block already cached is a HIT (fast), otherwise a MISS that loads it (evicting).
const SLOTS = 4;
const STREAM = [0, 4, 1, 0, 4, 2, 1, 0];

function stateAt(step) {
  const cache = Array(SLOTS).fill(null);
  let hits = 0, misses = 0;
  for (let i = 0; i < step; i++) {
    const a = STREAM[i], slot = a % SLOTS;
    if (cache[slot] === a) hits++; else { misses++; cache[slot] = a; }
  }
  return { cache, hits, misses };
}

export default function CacheExplainer() {
  const [step, setStep] = useState(0);
  const { cache, hits, misses } = stateAt(step);
  const done = step >= STREAM.length;
  const lastA = step > 0 ? STREAM[step - 1] : null;
  const lastHit = step > 0 && stateAt(step - 1).cache[STREAM[step - 1] % SLOTS] === STREAM[step - 1];

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
      <p className="mt-2 text-[12px] text-muted">Direct-mapped cache, 4 lines (block goes to slot = address mod 4). Walk the access stream:</p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {STREAM.map((a, i) => (
          <span key={i} className={"grid h-7 w-7 place-items-center rounded-[6px] border font-mono text-[12px] " +
            (i < step ? "border-line bg-surface/30 text-dim" : i === step ? "border-amber bg-amber/15 text-amber" : "border-line bg-surface/50 text-text")}>{a}</span>
        ))}
      </div>

      <p className="mt-4 mb-1 text-[11px] text-dim">cache lines</p>
      <div className="flex gap-2">
        {cache.map((v, i) => (
          <div key={i} className="text-center">
            <motion.div animate={{ scale: lastA != null && lastA % SLOTS === i ? [1, 1.15, 1] : 1 }}
              className={"grid h-10 w-12 place-items-center rounded-[7px] border font-mono text-[14px] " + (v == null ? "border-line bg-surface/30 text-dim" : "border-amber/60 bg-amber/10 text-amber")}>
              {v == null ? "-" : v}
            </motion.div>
            <span className="font-mono text-[9px] text-dim">slot {i}</span>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-3">
        {!done ? (
          <button onClick={() => setStep((s) => s + 1)} className="rounded-full bg-amber px-4 py-1.5 text-[13px] font-medium text-ink transition-transform active:scale-95">access next</button>
        ) : <span className="text-[13px] text-emerald">{hits} hits, {misses} misses (hit rate {Math.round((hits / (hits + misses)) * 100)}%).</span>}
        <button onClick={() => setStep(0)} className="text-[12px] text-dim hover:text-muted">reset</button>
        {step > 0 && !done && <span className={"ml-auto rounded-full px-3 py-1 font-mono text-[11px] uppercase " + (lastHit ? "border border-emerald/50 bg-emerald/10 text-emerald" : "border border-rose/50 bg-rose/10 text-rose")}>{lastHit ? "hit" : "miss"}</span>}
      </div>
      <p className="mt-3 text-[12px] text-muted">Re-accessing a cached block is a hit (temporal locality). A first access or an evicted block is a miss. Bigger blocks also catch nearby addresses (spatial locality).</p>
    </div>
  );
}
