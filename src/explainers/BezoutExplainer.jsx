import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Tex } from "../lib/rich.jsx";

const PRESETS = [[272, 119], [595, 252], [63, 55], [512, 320]];

// Extended Euclid tableau. Every row keeps the invariant r = s*a + t*b.
// Each new row = (two rows up) - q*(previous row), so the coefficients ride along.
function tableau(a, b) {
  const rows = [{ r: a, s: 1, t: 0, q: null }, { r: b, s: 0, t: 1, q: null }];
  let guard = 0;
  while (rows[rows.length - 1].r !== 0 && guard++ < 30) {
    const A = rows[rows.length - 2], B = rows[rows.length - 1];
    const q = Math.floor(A.r / B.r);
    rows.push({ r: A.r - q * B.r, s: A.s - q * B.s, t: A.t - q * B.t, q });
  }
  return rows; // last row has r = 0; the one before is the gcd row
}

const term = (k, sym) => (k === 0 ? "" : (k < 0 ? `- ${-k}\\,${sym}` : `+ ${k}\\,${sym}`));

export default function BezoutExplainer() {
  const [[a, b], setPair] = useState(PRESETS[0]);
  const rows = useMemo(() => tableau(a, b), [a, b]);
  const gcdIdx = rows.length - 2;
  const [shown, setShown] = useState(2);
  const revealedGcd = shown > gcdIdx;
  const g = rows[gcdIdx];

  function pick(p) { setPair(p); setShown(2); }

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

      <p className="mt-3 text-[13px] text-muted">Carry the coefficients down each division. Every line stays true: <Tex>{`r = s\\,a + t\\,b`}</Tex>.</p>

      <div className="mt-3 overflow-x-auto">
        <div className="min-w-[300px] space-y-1.5 font-mono text-[13px]">
          <AnimatePresence>
            {rows.slice(0, shown).map((row, i) => {
              const isGcd = i === gcdIdx;
              const expr = `${row.r} = ${row.s}(${a}) ${term(row.t, `(${b})`)}`.replace("+ -", "- ");
              return (
                <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                  className={"flex items-center gap-2 rounded-[var(--radius-field)] border px-3 py-2 " +
                    (isGcd && revealedGcd ? "border-amber/60 bg-amber/10" : "border-line bg-surface/40")}>
                  {row.q != null && <span className="text-dim">q={row.q}</span>}
                  <Tex>{expr}</Tex>
                  {isGcd && revealedGcd && <span className="ml-auto text-[11px] text-amber">gcd row</span>}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {!revealedGcd ? (
        <button onClick={() => setShown((s) => s + 1)}
          className="mt-3 rounded-full bg-amber px-4 py-1.5 text-[13px] font-medium text-ink transition-transform active:scale-95">
          Next division
        </button>
      ) : (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-3 rounded-[var(--radius-field)] border border-amber/40 bg-amber/10 p-3">
          <span className="font-mono text-[11px] text-dim">Bezout identity</span>
          <div className="mt-1 text-[15px] text-text">
            <Tex>{`\\gcd(${a},${b}) = ${g.r} = (${g.s})\\,${a} + (${g.t})\\,${b}`}</Tex>
          </div>
          <p className="mt-1.5 font-mono text-[11px] text-muted">u = {g.s}, v = {g.t}</p>
        </motion.div>
      )}
    </div>
  );
}
