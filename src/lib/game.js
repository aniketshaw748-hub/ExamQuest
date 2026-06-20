import { useEffect, useState, useCallback } from "react";

/* ---------- content helpers ---------- */
export const freq = (q) => (q.years ? q.years.length : 0) + (q.model ? 0.4 : 0);

export function topPYQs(ch, k = 99) {
  const pool = [
    ...ch.mcqs.map((q) => ({ ...q, kind: "mcq" })),
    ...ch.short.map((q) => ({ ...q, kind: "short" })),
    ...ch.long.map((q) => ({ ...q, kind: "long" })),
  ].filter((q) => freq(q) > 0);
  pool.sort((a, b) => freq(b) - freq(a));
  return pool.slice(0, k);
}

/* ---------- persistent progress (localStorage + hook), namespaced per subject ---------- */
const fresh = () => ({ xp: 0, mcq: {}, seen: {}, boss: {} });
const keyFor = (subject) => `quest.${subject || "dmaths"}.v2`;
function readKey(k) { try { return { ...fresh(), ...JSON.parse(localStorage.getItem(k) || "{}") }; } catch { return fresh(); } }

let activeKey = keyFor("dmaths");
let mem = readKey(activeKey);
const subs = new Set();
function commit(next) { mem = next; localStorage.setItem(activeKey, JSON.stringify(mem)); subs.forEach((f) => f(mem)); }

// switch which subject's progress is active (called by App when the subject changes)
export function setProgressSubject(subject) {
  const k = keyFor(subject);
  if (k === activeKey) return;
  activeKey = k;
  mem = readKey(k);
  subs.forEach((f) => f(mem));
}

export function useProgress() {
  const [s, set] = useState(mem);
  useEffect(() => { const f = (m) => set(m); subs.add(f); return () => subs.delete(f); }, []);
  const addXP = useCallback((n) => commit({ ...mem, xp: mem.xp + n }), []);
  const markMCQ = useCallback((chId, n, ok) => commit({ ...mem, mcq: { ...mem.mcq, [`${chId}.${n}`]: ok ? "ok" : "x" } }), []);
  const markBoss = useCallback((id) => { if (mem.boss[id]) return false; commit({ ...mem, boss: { ...mem.boss, [id]: 1 } }); return true; }, []);
  return { ...s, addXP, markMCQ, markBoss };
}

export const level = (xp) => Math.floor(Math.sqrt(xp / 25)) + 1;
export const levelFloor = (l) => 25 * (l - 1) ** 2;

export function masteryOf(ch, mcq) {
  if (!ch.mcqs.length) return 0;
  const got = ch.mcqs.filter((q) => mcq[`${ch.id}.${q.n}`] === "ok").length;
  return Math.round((got / ch.mcqs.length) * 100);
}

/* per-chapter art direction: emblem glyph handled by icon set, accent hue offset for variety */
export const CHAPTER_ART = {
  ch1: { tag: "Sets & maps", hue: 38 },
  ch2: { tag: "Induction", hue: 150 },
  ch3: { tag: "Counting", hue: 280 },
  ch4: { tag: "Logic", hue: 200 },
  ch5: { tag: "Structures", hue: 330 },
  ch6: { tag: "Graphs & trees", hue: 95 },
};
