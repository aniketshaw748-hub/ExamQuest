import { TEACH } from "../data/dmaths-teach.js";
import { TEACH_DAA } from "../data/daa-teach.js";
import { TEACH_AUTOMATA } from "../data/automata-teach.js";

// Authored Explanation-Ladder content per subject. Chapters not listed here fall back to
// the verified Chapter-at-a-Glance concepts as lessons.
const TEACH_BY_SUBJECT = { dmaths: TEACH, daa: TEACH_DAA, automata: TEACH_AUTOMATA };

// Unifies authored teach-lessons with raw OCR concepts as fallback.
export function getLessons(content, chId, subject = "dmaths") {
  const T = TEACH_BY_SUBJECT[subject];
  if (T && T[chId]) return T[chId].map((t) => ({ title: t.title, explainer: t.explainer, teach: t }));
  const c = content.chapters.find((x) => x.id === chId);
  if (!c || !c.concepts.length) return [{ title: "Overview", body: c?.fullTitle || "Notes coming soon.", explainer: null }];
  return c.concepts.map((c2) => ({ title: c2.title, body: c2.body, explainer: null }));
}
