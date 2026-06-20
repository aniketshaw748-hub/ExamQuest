import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle, XCircle } from "@phosphor-icons/react";

const A = [1, 2, 3], B = ["a", "b", "c"];
const ay = [55, 110, 165], by = [45, 100, 155];
const VALID = [[0, 0], [1, 0], [2, 1]];        // each input exactly one arrow (two inputs may share an output)
const INVALID = [[0, 0], [0, 2], [1, 1]];       // input 1 fires twice -> not a function

export default function FunctionExplainer() {
  const [valid, setValid] = useState(true);
  const arrows = valid ? VALID : INVALID;
  const fanOut = arrows.reduce((m, [a]) => ((m[a] = (m[a] || 0) + 1), m), {});

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
        <div className="flex gap-1.5">
          <Toggle on={valid} onClick={() => setValid(true)} ok>function</Toggle>
          <Toggle on={!valid} onClick={() => setValid(false)}>not a function</Toggle>
        </div>
      </div>

      <svg viewBox="0 0 360 210" className="mt-3 w-full">
        <text x="46" y="24" fill="#6aa6f0" fontSize="13" fontFamily="var(--font-display)">A (inputs)</text>
        <text x="250" y="24" fill="#9fdcc4" fontSize="13" fontFamily="var(--font-display)">B (outputs)</text>

        {arrows.map(([ai, bi], k) => {
          const bad = !valid && fanOut[ai] > 1;
          return (
            <motion.path key={k} d={`M86 ${ay[ai]} C 180 ${ay[ai]}, 180 ${by[bi]}, 270 ${by[bi]}`}
              fill="none" stroke={bad ? "var(--color-rose)" : "var(--color-amber)"} strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 + k * 0.15, ease: "easeInOut" }} />
          );
        })}

        {A.map((a, i) => {
          const bad = !valid && fanOut[i] > 1;
          return (
            <g key={a}>
              <circle cx="76" cy={ay[i]} r="17" fill="var(--color-surface)" stroke={bad ? "var(--color-rose)" : "#6aa6f0"} strokeWidth="2" />
              <text x="76" y={ay[i] + 5} textAnchor="middle" fontSize="14" fontFamily="var(--font-mono)" fill="var(--color-text)">{a}</text>
              {bad && <text x="76" y={ay[i] - 22} textAnchor="middle" fontSize="11" fill="var(--color-rose)">2 outputs!</text>}
            </g>
          );
        })}
        {B.map((b, i) => (
          <g key={b}>
            <circle cx="280" cy={by[i]} r="17" fill="var(--color-surface)" stroke="#9fdcc4" strokeWidth="2" />
            <text x="280" y={by[i] + 5} textAnchor="middle" fontSize="14" fontFamily="var(--font-mono)" fill="var(--color-text)">{b}</text>
          </g>
        ))}
      </svg>

      <div className={"mt-2 flex items-center gap-2 text-[14px] " + (valid ? "text-emerald" : "text-rose")}>
        {valid ? <CheckCircle size={18} weight="fill" /> : <XCircle size={18} weight="fill" />}
        {valid
          ? <span>Every input has exactly one arrow. Two inputs sharing output <b>a</b> is allowed.</span>
          : <span>Input <b>1</b> points to two outputs. One input, two results, so it breaks the rule.</span>}
      </div>
    </div>
  );
}

function Toggle({ on, onClick, ok, children }) {
  return (
    <button onClick={onClick}
      className={"rounded-full px-3 py-1 text-[12px] transition-colors " +
        (on ? (ok ? "bg-emerald text-ink" : "bg-rose text-ink") : "border border-line text-muted hover:text-text")}>
      {children}
    </button>
  );
}
