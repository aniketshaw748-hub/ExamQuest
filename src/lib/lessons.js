import { TEACH } from "../data/dmaths-teach.js";

// Unifies authored teach-lessons (Explanation Ladder) with raw OCR concepts as fallback.
// Authored ladders currently exist only for Discrete Mathematics; other subjects use the
// verified Chapter-at-a-Glance concepts as lessons.
export function getLessons(content, chId, subject = "dmaths") {
  if (subject === "dmaths" && TEACH[chId]) return TEACH[chId].map((t) => ({ title: t.title, explainer: t.explainer, teach: t }));
  const c = content.chapters.find((x) => x.id === chId);
  if (!c || !c.concepts.length) return [{ title: "Overview", body: c?.fullTitle || "Notes coming soon.", explainer: null }];
  return c.concepts.map((c2) => ({ title: c2.title, body: c2.body, explainer: null }));
}
