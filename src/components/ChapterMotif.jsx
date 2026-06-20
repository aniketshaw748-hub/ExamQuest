import { motion } from "motion/react";

// A compact animated banner that previews what each chapter is about.
const draw = (delay = 0) => ({ initial: { pathLength: 0, opacity: 0 }, animate: { pathLength: 1, opacity: 1 }, transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] } });
const pop = (delay = 0) => ({ initial: { scale: 0, opacity: 0 }, animate: { scale: 1, opacity: 1 }, transition: { type: "spring", stiffness: 260, damping: 18, delay } });
const float = { animate: { y: [0, -4, 0] }, transition: { duration: 3, repeat: Infinity, ease: "easeInOut" } };

const BLUE = "#6aa6f0", GREEN = "#34d39a", AMBER = "#f6b53d", LINE = "#25304a";

function Sets() {
  return (
    <>
      <motion.circle cx="135" cy="70" r="40" fill={BLUE} fillOpacity="0.12" stroke={BLUE} strokeWidth="1.5" {...pop(0.1)} />
      <motion.circle cx="185" cy="70" r="40" fill={GREEN} fillOpacity="0.12" stroke={GREEN} strokeWidth="1.5" {...pop(0.2)} />
      {[[120, 60], [122, 88], [160, 70], [200, 62], [198, 86]].map(([x, y], i) => (
        <motion.circle key={i} cx={x} cy={y} r="5" fill={i === 2 ? AMBER : "#1a2336"} stroke={LINE} {...pop(0.3 + i * 0.08)} />
      ))}
      <motion.path d="M250 70 h36" stroke={AMBER} strokeWidth="2" markerEnd="url(#mk)" {...draw(0.6)} />
      <text x="252" y="58" fill="#5e6b85" fontSize="11" fontFamily="var(--font-mono)">maps to</text>
    </>
  );
}
function Dominoes() {
  return (
    <>
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.rect key={i} x={120 + i * 26} y="44" width="10" height="52" rx="2" fill={i === 0 ? AMBER : "#1a2336"} stroke={i === 0 ? AMBER : BLUE} strokeWidth="1.5"
          initial={{ rotate: 0, opacity: 0 }} animate={{ rotate: i === 0 ? -22 : 0, opacity: 1 }} transition={{ delay: 0.1 + i * 0.12, type: "spring", stiffness: 200, damping: 14 }} style={{ originX: "50%", originY: "100%" }} />
      ))}
      <text x="120" y="36" fill="#5e6b85" fontSize="11" fontFamily="var(--font-mono)">n → n+1</text>
    </>
  );
}
function Counting() {
  const pts = [[140, 50], [180, 44], [210, 64], [160, 84], [120, 70]];
  return (
    <>
      {pts.map((p, i) => pts.slice(i + 1).map((q, j) => (
        <motion.line key={`${i}-${j}`} x1={p[0]} y1={p[1]} x2={q[0]} y2={q[1]} stroke={LINE} strokeWidth="1" {...draw(0.2 + (i + j) * 0.05)} />
      )))}
      {pts.map((p, i) => <motion.circle key={i} cx={p[0]} cy={p[1]} r="6" fill={AMBER} {...pop(0.1 + i * 0.08)} />)}
    </>
  );
}
function Logic() {
  return (
    <>
      {["T", "F", "T"].map((t, i) => (
        <motion.g key={i} {...pop(0.1 + i * 0.12)}>
          <rect x={120 + i * 50} y="52" width="38" height="36" rx="8" fill={t === "T" ? "rgba(52,211,154,0.15)" : "rgba(251,113,133,0.12)"} stroke={t === "T" ? GREEN : "#fb7185"} strokeWidth="1.5" />
          <text x={139 + i * 50} y="75" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="15" fill={t === "T" ? GREEN : "#fb7185"}>{t}</text>
        </motion.g>
      ))}
      <text x="120" y="42" fill="#5e6b85" fontSize="11" fontFamily="var(--font-mono)">∧ ∨ ¬ →</text>
    </>
  );
}
function Structures() {
  const pts = [[160, 44], [128, 92], [192, 92]];
  return (
    <>
      <motion.path d={`M${pts[0]} L${pts[1]} L${pts[2]} Z`.replace(/,/g, " ")} fill="none" stroke={LINE} strokeWidth="1.5" {...draw(0.2)} />
      {pts.map((p, i) => <motion.circle key={i} cx={p[0]} cy={p[1]} r="9" fill="rgba(246,181,61,0.15)" stroke={AMBER} strokeWidth="1.5" {...pop(0.2 + i * 0.1)} />)}
      <motion.text x="160" y="76" textAnchor="middle" fill={AMBER} fontSize="16" fontFamily="var(--font-mono)" {...pop(0.5)}>∗</motion.text>
    </>
  );
}
function Graph() {
  const v = [[130, 50], [200, 46], [165, 84], [110, 92], [210, 92]];
  const e = [[0, 1], [0, 2], [1, 2], [2, 3], [2, 4]];
  return (
    <>
      {e.map(([a, b], i) => <motion.line key={i} x1={v[a][0]} y1={v[a][1]} x2={v[b][0]} y2={v[b][1]} stroke={BLUE} strokeWidth="1.5" {...draw(0.2 + i * 0.08)} />)}
      {v.map((p, i) => <motion.circle key={i} cx={p[0]} cy={p[1]} r="8" fill={i === 2 ? AMBER : "#1a2336"} stroke={i === 2 ? AMBER : BLUE} strokeWidth="1.5" {...pop(0.3 + i * 0.08)} />)}
    </>
  );
}

const MOTIFS = { ch1: Sets, ch2: Dominoes, ch3: Counting, ch4: Logic, ch5: Structures, ch6: Graph };

export default function ChapterMotif({ ch }) {
  const M = MOTIFS[ch] || Sets;
  return (
    <motion.div {...float} className="relative mt-6 overflow-hidden rounded-[var(--radius-card)] border border-line bg-ink-2/50">
      <svg viewBox="0 0 320 130" className="w-full" style={{ maxHeight: 150 }}>
        <defs>
          <marker id="mk" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0 0 L7 3.5 L0 7 z" fill={AMBER} /></marker>
        </defs>
        <M />
      </svg>
    </motion.div>
  );
}
