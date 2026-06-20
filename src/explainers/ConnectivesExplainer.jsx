import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";
import { NOT, AND, OR, IMP, IFF, TF } from "../lib/prop.js";

const COLS = [
  { head: "\\lnot p", fn: (p) => NOT(p), unary: true },
  { head: "p\\land q", fn: (p, q) => AND(p, q) },
  { head: "p\\lor q", fn: (p, q) => OR(p, q) },
  { head: "p\\to q", fn: (p, q) => IMP(p, q) },
  { head: "p\\leftrightarrow q", fn: (p, q) => IFF(p, q) },
];
const RR = [[true, true], [true, false], [false, true], [false, false]];

// The five basic connectives. Pick p and q; the matching row lights up in every table.
export default function ConnectivesExplainer() {
  const [p, setP] = useState(true);
  const [q, setQ] = useState(false);
  const active = RR.findIndex(([rp, rq]) => rp === p && rq === q);

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>

      <div className="mt-3 flex gap-2">
        <Toggle label="p" on={p} set={() => setP((v) => !v)} />
        <Toggle label="q" on={q} set={() => setQ((v) => !v)} />
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[320px] border-collapse text-center font-mono text-[12px]">
          <thead>
            <tr className="text-dim">
              <th className="px-2 py-1"><Tex>p</Tex></th>
              <th className="px-2 py-1"><Tex>q</Tex></th>
              {COLS.map((c) => <th key={c.head} className="px-2 py-1 text-amber"><Tex>{c.head}</Tex></th>)}
            </tr>
          </thead>
          <tbody>
            {RR.map(([rp, rq], i) => (
              <motion.tr key={i} animate={{ backgroundColor: i === active ? "rgba(246,181,61,0.12)" : "rgba(0,0,0,0)" }}
                className="border-t border-line">
                <Cell on={rp} /><Cell on={rq} />
                {COLS.map((c) => <Cell key={c.head} on={c.unary ? c.fn(rp) : c.fn(rp, rq)} val />)}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-[12px] text-muted">
        Only <Tex>{`p\\to q`}</Tex> trips up beginners: it is false in exactly one case, when <Tex>p</Tex> is true but <Tex>q</Tex> is false.
      </p>
    </div>
  );
}

function Cell({ on, val }) {
  return <td className={"px-2 py-1 " + (val ? (on ? "text-emerald" : "text-rose") : "text-text")}>{TF(on)}</td>;
}
function Toggle({ label, on, set }) {
  return (
    <button onClick={set} className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/40 px-3 py-1.5 text-[12px] text-muted">
      <span className="font-mono">{label} =</span>
      <span className={"font-mono font-bold " + (on ? "text-emerald" : "text-rose")}>{TF(on)}</span>
    </button>
  );
}
