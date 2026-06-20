import { useState } from "react";
import { motion } from "motion/react";

// Interactive finite automaton: pick a machine and an input string, step through it,
// and watch the current state(s) light up, then accept (green) or reject (rose).
const R = 18;

const MACHINES = {
  endsIn01: {
    label: "DFA: ends in 01", type: "DFA",
    states: [{ id: "A", x: 50, y: 80, start: true }, { id: "B", x: 150, y: 80 }, { id: "C", x: 250, y: 80, accept: true }],
    trans: [
      { from: "A", to: "A", sym: "1" }, { from: "A", to: "B", sym: "0" },
      { from: "B", to: "B", sym: "0" }, { from: "B", to: "C", sym: "1" },
      { from: "C", to: "B", sym: "0" }, { from: "C", to: "A", sym: "1" },
    ],
    inputs: ["1101", "001", "010", "0011"],
  },
  contains01: {
    label: "NFA: contains 01", type: "NFA",
    states: [{ id: "A", x: 50, y: 80, start: true }, { id: "B", x: 150, y: 80 }, { id: "C", x: 250, y: 80, accept: true }],
    trans: [
      { from: "A", to: "A", sym: "0" }, { from: "A", to: "A", sym: "1" }, { from: "A", to: "B", sym: "0" },
      { from: "B", to: "C", sym: "1" },
      { from: "C", to: "C", sym: "0" }, { from: "C", to: "C", sym: "1" },
    ],
    inputs: ["1101", "100", "11", "0101"],
  },
};

const group = (trans) => {
  const m = new Map();
  for (const t of trans) { const k = t.from + ">" + t.to; if (!m.has(k)) m.set(k, { from: t.from, to: t.to, syms: [] }); m.get(k).syms.push(t.sym); }
  return [...m.values()];
};
const closure = (m, start) => new Set([start]); // these machines have no epsilon moves
const stepSet = (m, states, sym) => {
  const next = new Set();
  for (const t of m.trans) if (states.has(t.from) && t.sym === sym) next.add(t.to);
  return next;
};

export default function AutomatonExplainer() {
  const [key, setKey] = useState("endsIn01");
  const [input, setInput] = useState("1101");
  const [pos, setPos] = useState(0); // symbols consumed
  const m = MACHINES[key];
  const byId = Object.fromEntries(m.states.map((s) => [s.id, s]));

  // current state set after consuming `pos` symbols
  let cur = closure(m, m.states.find((s) => s.start).id);
  for (let i = 0; i < pos; i++) cur = stepSet(m, cur, input[i]);
  const done = pos >= input.length;
  const accepted = done && [...cur].some((id) => byId[id].accept);

  const pick = (k) => { setKey(k); setInput(MACHINES[k].inputs[0]); setPos(0); };
  const setStr = (s) => { setInput(s); setPos(0); };

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
        <div className="flex flex-wrap gap-1.5">
          {Object.entries(MACHINES).map(([k, v]) => (
            <button key={k} onClick={() => pick(k)}
              className={"rounded-full border px-2.5 py-1 text-[11px] transition-colors " + (k === key ? "border-amber bg-amber/15 text-amber" : "border-line text-dim hover:text-muted")}>
              {v.label}
            </button>
          ))}
        </div>
      </div>

      <svg viewBox="0 0 300 140" className="mt-3 w-full">
        <defs>
          <marker id="fa-arrow" markerWidth="8" markerHeight="8" refX="7" refY="3.5" orient="auto"><path d="M0 0 L7 3.5 L0 7 z" fill="#6aa6f0" /></marker>
        </defs>
        {/* start arrow */}
        {m.states.filter((s) => s.start).map((s) => (
          <line key={"st" + s.id} x1={s.x - 40} y1={s.y} x2={s.x - R - 2} y2={s.y} stroke="var(--color-dim)" strokeWidth="1.4" markerEnd="url(#fa-arrow)" />
        ))}
        {/* transitions */}
        {group(m.trans).map((e, i) => {
          const a = byId[e.from], b = byId[e.to], label = [...new Set(e.syms)].join(",");
          if (e.from === e.to) {
            const x = a.x, y = a.y - R;
            return (
              <g key={i}>
                <path d={`M${x - 7} ${y} C ${x - 20} ${y - 26}, ${x + 20} ${y - 26}, ${x + 7} ${y}`} fill="none" stroke="#6aa6f0" strokeWidth="1.4" markerEnd="url(#fa-arrow)" />
                <text x={x} y={y - 24} textAnchor="middle" fontSize="10" fontFamily="var(--font-mono)" fill="var(--color-muted)">{label}</text>
              </g>
            );
          }
          const dx = b.x - a.x, dy = b.y - a.y, len = Math.hypot(dx, dy), ux = dx / len, uy = dy / len;
          const hasRev = m.trans.some((t) => t.from === e.to && t.to === e.from);
          const bend = hasRev ? (e.from < e.to ? 16 : -16) : 0;
          const sx = a.x + ux * R, sy = a.y + uy * R, ex = b.x - ux * R, ey = b.y - uy * R;
          const mx = (sx + ex) / 2, my = (sy + ey) / 2, px = -uy, py = ux;
          const cx = mx + px * bend, cy = my + py * bend;
          return (
            <g key={i}>
              <path d={`M${sx} ${sy} Q ${cx} ${cy} ${ex} ${ey}`} fill="none" stroke="#6aa6f0" strokeWidth="1.4" markerEnd="url(#fa-arrow)" />
              <text x={mx + px * (bend + (bend >= 0 ? 11 : -5))} y={my + py * (bend + (bend >= 0 ? 11 : -5)) - 2} textAnchor="middle" fontSize="10" fontFamily="var(--font-mono)" fill="var(--color-muted)">{label}</text>
            </g>
          );
        })}
        {/* states */}
        {m.states.map((s) => {
          const active = cur.has(s.id);
          return (
            <g key={s.id}>
              {s.accept && <circle cx={s.x} cy={s.y} r={R + 4} fill="none" stroke={active ? "var(--color-amber)" : "var(--color-line)"} strokeWidth="1.2" />}
              <motion.circle cx={s.x} cy={s.y} r={R} animate={{ scale: active ? 1.08 : 1 }} transition={{ type: "spring", stiffness: 300, damping: 18 }}
                fill={active ? "var(--color-amber)" : "var(--color-surface)"} fillOpacity={active ? 0.9 : 1} stroke={active ? "var(--color-amber)" : "#6aa6f0"} strokeWidth="1.5" />
              <text x={s.x} y={s.y + 4} textAnchor="middle" fontSize="12" fontFamily="var(--font-mono)" fill={active ? "var(--color-ink)" : "var(--color-text)"}>{s.id}</text>
            </g>
          );
        })}
      </svg>

      {/* input tape */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="text-[11px] text-dim">input</span>
        <div className="flex gap-1 font-mono text-[14px]">
          {input.split("").map((ch, i) => (
            <span key={i} className={"grid h-7 w-7 place-items-center rounded-[6px] border " +
              (i < pos ? "border-line bg-surface/30 text-dim" : i === pos && !done ? "border-amber bg-amber/15 text-amber" : "border-line bg-surface/50 text-text")}>{ch}</span>
          ))}
        </div>
      </div>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {m.inputs.map((s) => (
          <button key={s} onClick={() => setStr(s)} className={"rounded-full border px-2 py-0.5 font-mono text-[11px] " + (s === input ? "border-amber bg-amber/15 text-amber" : "border-line text-dim hover:text-muted")}>{s}</button>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-2">
        <button onClick={() => setPos((p) => Math.min(p + 1, input.length))} disabled={done}
          className="rounded-full bg-amber px-4 py-1.5 text-[13px] font-medium text-ink transition-transform active:scale-95 disabled:opacity-40">Read symbol</button>
        <button onClick={() => setPos(0)} className="text-[12px] text-dim hover:text-muted">reset</button>
        {done && (
          <motion.span initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            className={"ml-auto rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-wide " + (accepted ? "border border-emerald/50 bg-emerald/10 text-emerald" : "border border-rose/50 bg-rose/10 text-rose")}>
            {accepted ? "accepted" : "rejected"}
          </motion.span>
        )}
      </div>
      <p className="mt-3 text-[12px] text-muted">
        {m.type === "NFA"
          ? "An NFA can sit in several states at once (all current states glow); it accepts if any path ends in the double-ringed accepting state."
          : "A DFA is in exactly one state at a time; it accepts when the string ends in the double-ringed accepting state."}
      </p>
    </div>
  );
}
