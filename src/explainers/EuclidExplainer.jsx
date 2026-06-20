import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Tex } from "../lib/rich.jsx";

const PRESETS = [[272, 119], [595, 252], [567, 315], [72, 120]];

// Build the repeated-division rows: m = n*q + r, then (n, r), until r = 0.
function euclidRows(a, b) {
  let m = Math.max(a, b), n = Math.min(a, b);
  const rows = [];
  let guard = 0;
  while (n > 0 && guard++ < 30) {
    const q = Math.floor(m / n), r = m - n * q;
    rows.push({ m, n, q, r });
    m = n; n = r;
  }
  return rows;
}

export default function EuclidExplainer() {
  const [[a, b], setPair] = useState(PRESETS[0]);
  const rows = useMemo(() => euclidRows(a, b), [a, b]);
  const [shown, setShown] = useState(1);
  const done = shown >= rows.length;
  const gcd = rows.length ? rows[rows.length - 1].n : Math.max(a, b);

  function pick(p) { setPair(p); setShown(1); }

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
        <div className="flex flex-wrap gap-1.5">
          {PRESETS.map((p) => (
            <button key={p.join()} onClick={() => pick(p)}
              className={"rounded-full border px-2.5 py-1 font-mono text-[11px] transition-colors " +
                (p[0] === a && p[1] === b ? "border-amber bg-amber/15 text-amber" : "border-line text-dim hover:text-muted")}>
              {p[0]},{p[1]}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-3 text-[13px] text-muted">Keep dividing: replace <Tex>{`(m,n)`}</Tex> with <Tex>{`(n,\\ m\\bmod n)`}</Tex> until the remainder hits 0.</p>

      <div className="mt-3 space-y-1.5 font-mono text-[13px]">
        <AnimatePresence>
          {rows.slice(0, shown).map((row, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 rounded-[var(--radius-field)] border border-line bg-surface/40 px-3 py-2">
              <span className="text-dim">{i + 1}.</span>
              <Tex>{`${row.m} = ${row.n}\\times ${row.q} + ${row.r}`}</Tex>
              {row.r === 0 && <span className="ml-auto text-[11px] text-emerald">remainder 0, stop</span>}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {!done ? (
        <button onClick={() => setShown((s) => s + 1)}
          className="mt-3 rounded-full bg-amber px-4 py-1.5 text-[13px] font-medium text-ink transition-transform active:scale-95">
          Divide again
        </button>
      ) : (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-3 flex items-baseline gap-2">
          <span className="text-[13px] text-dim">last non-zero remainder:</span>
          <Tex>{`\\gcd(${a},${b}) = `}</Tex>
          <span className="font-display text-2xl font-medium text-amber">{gcd}</span>
        </motion.div>
      )}
    </div>
  );
}
