import { useState } from "react";
import { motion } from "motion/react";

// The axiom ladder. Tick axioms top-down; the highest structure you have earned lights up.
const LEVELS = [
  { need: ["closure"], name: "Algebraic structure" },
  { need: ["closure", "assoc"], name: "Semigroup" },
  { need: ["closure", "assoc", "identity"], name: "Monoid" },
  { need: ["closure", "assoc", "identity", "inverse"], name: "Group" },
  { need: ["closure", "assoc", "identity", "inverse", "commutative"], name: "Abelian group" },
];
const AXIOMS = [
  { key: "closure", label: "Closure" },
  { key: "assoc", label: "Associativity" },
  { key: "identity", label: "Identity element" },
  { key: "inverse", label: "Inverses" },
  { key: "commutative", label: "Commutative" },
];

export default function HierarchyExplainer() {
  const [on, setOn] = useState({ closure: true, assoc: true, identity: true, inverse: true, commutative: false });
  const has = (lvl) => lvl.need.every((k) => on[k]);
  const top = [...LEVELS].reverse().find(has);

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
      <p className="mt-2 text-[12px] text-muted">Toggle the axioms (each builds on the ones above it).</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {AXIOMS.map((ax) => (
          <button key={ax.key} onClick={() => setOn((s) => ({ ...s, [ax.key]: !s[ax.key] }))}
            className={"inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[12px] transition-colors " +
              (on[ax.key] ? "border-emerald/50 bg-emerald/10 text-emerald" : "border-line bg-surface/40 text-dim")}>
            <span className={"h-2 w-2 rounded-full " + (on[ax.key] ? "bg-emerald" : "bg-dim")} />{ax.label}
          </button>
        ))}
      </div>

      <div className="mt-4 space-y-1.5">
        {LEVELS.map((lvl) => {
          const ok = has(lvl);
          const isTop = top && lvl.name === top.name;
          return (
            <motion.div key={lvl.name} animate={{ opacity: ok ? 1 : 0.4 }}
              className={"flex items-center justify-between rounded-[var(--radius-field)] border px-3 py-2 text-[13px] " +
                (isTop ? "border-amber/60 bg-amber/10" : ok ? "border-line bg-surface/40" : "border-line/50")}>
              <span className={isTop ? "font-display font-medium text-amber" : "text-muted"}>{lvl.name}</span>
              <span className="font-mono text-[10px] text-dim">{lvl.need.length} axiom{lvl.need.length > 1 ? "s" : ""}</span>
            </motion.div>
          );
        })}
      </div>
      <p className="mt-3 text-[12px] text-muted">You currently have: <span className="text-amber">{top ? top.name : "not even closed"}</span>. Check axioms in order, never skip closure.</p>
    </div>
  );
}
