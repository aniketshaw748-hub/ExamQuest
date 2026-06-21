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

let activeSubject = "dmaths";
let activeKey = keyFor("dmaths");
let mem = readKey(activeKey);
const subs = new Set();
function commit(next) { mem = next; localStorage.setItem(activeKey, JSON.stringify(mem)); subs.forEach((f) => f(mem)); }

// switch which subject's progress is active (called by App when the subject changes)
export function setProgressSubject(subject) {
  const k = keyFor(subject);
  activeSubject = subject || "dmaths";
  if (k === activeKey) return;
  activeKey = k;
  mem = readKey(k);
  subs.forEach((f) => f(mem));
}

// remember the last place a user was, per subject AND globally (for "continue where you left off")
const LAST_KEY = "quest.last.v1";
export function recordVisit(subject, route, params = {}) {
  if (!subject || !route || route === "overworld") return;
  const k = keyFor(subject);
  const base = k === activeKey ? mem : readKey(k);
  const seen = { ch: params.ch ?? base.seen?.ch ?? "ch1", route, i: params.i ?? 0, at: Date.now() };
  const next = { ...base, seen };
  if (k === activeKey) commit(next); else localStorage.setItem(k, JSON.stringify(next));
  try { localStorage.setItem(LAST_KEY, JSON.stringify({ subject, ...seen })); } catch {}
}
export function getLast() { try { return JSON.parse(localStorage.getItem(LAST_KEY) || "null"); } catch { return null; } }
export function getSubjectStat(subject) {
  const m = readKey(keyFor(subject));
  const answered = Object.keys(m.mcq).length;
  return { xp: m.xp, started: m.xp > 0 || answered > 0, seen: m.seen?.ch ? m.seen : null };
}

export function useProgress() {
  const [s, set] = useState(mem);
  useEffect(() => { const f = (m) => set(m); subs.add(f); return () => subs.delete(f); }, []);
  const addXP = useCallback((n) => commit({ ...mem, xp: mem.xp + n }), []);
  const markMCQ = useCallback((chId, n, ok) => commit({ ...mem, mcq: { ...mem.mcq, [`${chId}.${n}`]: ok ? "ok" : "x" } }), []);
  const markBoss = useCallback((id) => { if (mem.boss[id]) return false; commit({ ...mem, boss: { ...mem.boss, [id]: 1 } }); return true; }, []);
  return { ...s, addXP, markMCQ, markBoss };
}

// overall progress across a whole subject (for the subject header)
export function overallMastery(content, mcq) {
  let got = 0, total = 0;
  for (const ch of content.chapters) { total += ch.mcqs.length; got += ch.mcqs.filter((q) => mcq[`${ch.id}.${q.n}`] === "ok").length; }
  return total ? Math.round((got / total) * 100) : 0;
}
export function startedChapters(content, mcq) {
  return content.chapters.filter((ch) => ch.mcqs.some((q) => mcq[`${ch.id}.${q.n}`])).length;
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
