import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// Greedy coin change: repeatedly take the largest coin that fits. For canonical
// denominations this local choice is globally optimal (fewest coins).
const COINS = [25, 10, 5, 1];

export default function GreedyExplainer() {
  const [amount, setAmount] = useState(63);
  const picks = [];
  let rem = amount;
  for (const c of COINS) while (rem >= c) { picks.push(c); rem -= c; }

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
      <p className="mt-2 text-[12px] text-muted">Make <b className="text-text">{amount}</b> from coins {COINS.join(", ")}: at each step grab the largest coin that still fits.</p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {picks.map((c, i) => (
          <motion.span key={i} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: i * 0.04 }}
            className="grid h-9 w-9 place-items-center rounded-full border border-amber/60 bg-amber/15 font-mono text-[12px] text-amber">{c}</motion.span>
        ))}
      </div>

      <div className="mt-4"><label className="block">
        <span className="text-[12px] text-muted">amount = <b className="text-text tabular-nums">{amount}</b></span>
        <input type="range" min={1} max={99} step={1} value={amount} onChange={(e) => setAmount(+e.target.value)} className="mt-1.5 w-full accent-amber" />
      </label></div>

      <div className="mt-3 flex items-baseline gap-2 text-[14px]">
        <span className="font-mono text-dim">{picks.length} coins</span>
        <span className="text-dim">·</span>
        <span className="font-mono text-muted">{picks.join(" + ")} = {amount}</span>
      </div>
      <p className="mt-3 text-[12px] text-muted">A greedy algorithm commits to the best-looking choice now and never reconsiders. It is optimal here because the coin system is canonical; with coins like <Tex>{`\\{1,3,4\\}`}</Tex> greedy can miss the best answer, and then you need dynamic programming.</p>
    </div>
  );
}
