import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

const A = [1, 2, 3], B = [1, 2, 3];
const RULES = {
  "a < b": (a, b) => a < b,
  "a = b": (a, b) => a === b,
  "a > b": (a, b) => a > b,
};

const key = (a, b) => `${a},${b}`;

export default function RelationExplainer() {
  const [picked, setPicked] = useState(() => new Set([key(1, 2), key(1, 3), key(2, 3)]));
  const [rule, setRule] = useState("a < b");

  function toggle(a, b) {
    setRule(null);
    setPicked((p) => { const n = new Set(p); const k = key(a, b); n.has(k) ? n.delete(k) : n.add(k); return n; });
  }
  function applyRule(name) {
    setRule(name);
    const f = RULES[name]; const n = new Set();
    A.forEach((a) => B.forEach((b) => { if (f(a, b)) n.add(key(a, b)); }));
    setPicked(n);
  }
  const pairs = [...picked].map((k) => k.split(",").map(Number)).sort((p, q) => p[0] - q[0] || p[1] - q[1]);

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
      <p className="mt-1 text-[13px] text-dim">Tick cells of <Tex>{"A\\times B"}</Tex>, or pick a rule. The ticked cells <span className="text-muted">are</span> the relation.</p>

      <div className="mt-4 overflow-x-auto">
        <div className="mx-auto inline-grid gap-1.5" style={{ gridTemplateColumns: `auto repeat(${B.length}, minmax(46px,1fr))` }}>
          <div />
          {B.map((b) => <div key={"h" + b} className="grid place-items-center pb-1 font-display text-[14px] text-emerald">{b}</div>)}
          {A.map((a) => (
            <Cells key={a} a={a} picked={picked} toggle={toggle} />
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {Object.keys(RULES).map((r) => (
          <button key={r} onClick={() => applyRule(r)}
            className={"relative rounded-full px-3 py-1.5 text-[13px] " + (rule === r ? "text-ink" : "text-muted hover:text-text")}>
            {rule === r && <motion.span layoutId="relRule" className="absolute inset-0 rounded-full bg-amber" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
            <span className="relative"><Tex>{r.replace("a", "a").replace("b", "b")}</Tex></span>
          </button>
        ))}
      </div>

      <div className="mt-4 text-[14px] leading-relaxed">
        <Tex>{`R = \\{${pairs.map(([a, b]) => `(${a},${b})`).join(",\\,") || "\\ "}\\}`}</Tex>
      </div>
      <p className="mt-1 text-[12px] text-dim">
        <Tex>{`|R| = ${pairs.length}`}</Tex> · one of <Tex>{`2^{${A.length * B.length}} = ${2 ** (A.length * B.length)}`}</Tex> possible relations
      </p>
    </div>
  );
}

function Cells({ a, picked, toggle }) {
  return (
    <>
      <div className="grid place-items-center pr-1 font-display text-[14px] text-[#6aa6f0]">{a}</div>
      {B.map((b) => {
        const on = picked.has(`${a},${b}`);
        return (
          <button key={b} onClick={() => toggle(a, b)}
            className="grid aspect-square min-w-[46px] place-items-center rounded-[9px] border text-[12px] font-mono transition-colors"
            style={{ borderColor: on ? "var(--color-amber)" : "var(--color-line)", background: on ? "rgba(246,181,61,0.18)" : "var(--color-surface)", color: on ? "var(--color-amber)" : "var(--color-dim)" }}>
            {on ? "✓" : `${a},${b}`}
          </button>
        );
      })}
    </>
  );
}
