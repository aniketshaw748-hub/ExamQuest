import { TEACH } from "../data/dmaths-teach.js";

// Unifies authored teach-lessons (Explanation Ladder) with raw OCR concepts as fallback.
export function getLessons(content, chId) {
  if (TEACH[chId]) return TEACH[chId].map((t) => ({ title: t.title, explainer: t.explainer, teach: t }));
  const c = content.chapters.find((x) => x.id === chId);
  return c.concepts.map((c2) => ({ title: c2.title, body: c2.body, explainer: null }));
}
