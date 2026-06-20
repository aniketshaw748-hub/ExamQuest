// Parse the verified MAKAUT chapter .md files into a structured game content bank.
// Usage: node tools/parse.mjs "<subjectFolder>" "<Subject Name>" <outFile>
//   e.g. node tools/parse.mjs "C:/Clg shit/D.Maths" "Discrete Mathematics" data/dmaths.json
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join, basename } from "node:path";

const [, , srcDir, subjectName, outFile] = process.argv;
if (!srcDir || !subjectName || !outFile) {
  console.error('Usage: node tools/parse.mjs "<srcDir>" "<Subject>" <out.json>');
  process.exit(1);
}

const files = readdirSync(srcDir).filter((f) => f.toLowerCase().endsWith(".md")).sort();

const stripInline = (s) =>
  s.replace(/\s+/g, " ").trim();

// pull WBUT years from a chunk of text, e.g. "[WBUT 2006, 2008, 2017]" or "[MODEL QUESTION]"
function extractYears(text) {
  const years = new Set();
  let model = false;
  const re = /\[([^\]]*?)\]/g;
  let m;
  while ((m = re.exec(text))) {
    const inside = m[1];
    if (/MODEL/i.test(inside)) model = true;
    const ys = inside.match(/\b(19|20)\d{2}\b/g);
    if (ys) ys.forEach((y) => years.add(+y));
  }
  return { years: [...years].sort(), model };
}

// remove the *[WBUT ...]* / [WBUT ...] tag, stray bold markers, and the "—" separator
const dropTag = (s) =>
  s.replace(/\*?\[(?:WBUT|MODEL)[^\]]*\]\*?/gi, "")
    .replace(/\*\*/g, "") // stray bold close from "**N. a)**" headers
    .replace(/\s+/g, " ")
    .replace(/[\s—–-]+$/u, "") // trailing dash/space left where the tag was
    .trim();

function splitSections(md) {
  // returns map of H2 heading -> body text
  const lines = md.split(/\r?\n/);
  const sections = {};
  let cur = "__preamble__";
  sections[cur] = [];
  for (const ln of lines) {
    const h2 = ln.match(/^##\s+(.*)$/);
    if (h2) { cur = h2[1].trim(); sections[cur] = []; continue; }
    (sections[cur] = sections[cur] || []).push(ln);
  }
  for (const k of Object.keys(sections)) sections[k] = sections[k].join("\n");
  return sections;
}

// Parse an MCQ block list. Returns [{n, question, options:[{label,text}], answer, years, model}]
function parseMCQs(body) {
  if (!body) return [];
  const out = [];
  // split on bold question numbers like **12.**
  const parts = body.split(/\n(?=\*\*\d+\.\*\*)/);
  for (const part of parts) {
    const nm = part.match(/^\*\*(\d+)\.\*\*\s*([\s\S]*)$/);
    if (!nm) continue;
    const n = +nm[1];
    let rest = nm[2];
    const ans = rest.match(/\*\*Answer:\s*\(([a-dA-D])\)\*\*/);
    const answer = ans ? ans[1].toLowerCase() : null;
    const asPrinted = /\[as printed\]/i.test(rest);
    const { years, model } = extractYears(rest);
    // cut off at the Answer line for option parsing
    const beforeAns = ans ? rest.slice(0, ans.index) : rest;
    // option delimiters: a) b) c) d) not preceded by "(" (avoids "(a)")
    const optRe = /(?<!\()\b([a-d])\)\s/g;
    const idxs = [];
    let mm;
    while ((mm = optRe.exec(beforeAns))) idxs.push({ label: mm[1], at: mm.index, end: optRe.lastIndex });
    let question, options = [];
    if (idxs.length >= 2) {
      question = dropTag(beforeAns.slice(0, idxs[0].at));
      for (let i = 0; i < idxs.length; i++) {
        const s = idxs[i].end;
        const e = i + 1 < idxs.length ? idxs[i + 1].at : beforeAns.length;
        options.push({ label: idxs[i].label, text: stripInline(beforeAns.slice(s, e)) });
      }
    } else {
      question = dropTag(beforeAns);
    }
    out.push({ n, question, options, answer, asPrinted, years, model });
  }
  return out;
}

// Parse short/long answer Q&A blocks. Returns [{n, question, answer, years, model}]
// Handles two source layouts:
//   A) whole question bolded, answer follows directly:  **1. QUESTION**  ANSWER
//   B) only the number bolded, question is plain text before an explicit marker:
//      **1.** QUESTION *[WBUT ...]*   **Answer:**  ANSWER
function parseQA(body) {
  if (!body) return [];
  const out = [];
  const parts = body.split(/\n(?=\*\*\d+\.)/);
  for (const part of parts) {
    const nm = part.match(/^\*\*(\d+)\.\s*([\s\S]*)$/);
    if (!nm) continue;
    const n = +nm[1];
    let rest = nm[2]; // everything after "**N."
    if (/^\*\*/.test(rest)) rest = rest.replace(/^\*\*\s*/, ""); // layout B: drop the number's closing bold

    let question, answer;
    const mk = rest.match(/\*\*\s*Answer\s*:?\s*\*\*|(?:^|\n)\s*Answer\s*:/i);
    if (mk) {
      // explicit Answer marker (layout B): split there
      question = rest.slice(0, mk.index);
      answer = rest.slice(mk.index + mk[0].length);
    } else {
      // no marker (layout A): question is the first bold span, answer is the remainder
      const close = rest.indexOf("**");
      if (close >= 0) {
        const head = rest.slice(0, close), tail = rest.slice(close + 2);
        // "**N. a)**" style: the bold is just a part label, real question follows it,
        // and this chunk has no answer of its own (parts a/b share a later Answer block)
        if (/^\s*([a-z]\))?\s*$/i.test(head)) { question = head + " " + tail; answer = ""; }
        else { question = head; answer = tail; }
      } else { question = rest; answer = ""; }
    }

    // year tag sits at the question/answer boundary, so scan both ends for it
    const { years, model } = extractYears(question + " " + answer.slice(0, 160));
    question = dropTag(question);
    answer = (answer || "")
      .replace(/^\s*\*?\[(?:WBUT|MODEL)[^\]]*\]\*?\s*/i, "") // strip a leading year tag
      .replace(/\n{3,}/g, "\n\n")
      .trim();
    out.push({ n, question, answer, years, model });
  }
  return out;
}

// Parse Chapter-at-a-Glance into concept cards by ### subheadings
function parseConcepts(body) {
  if (!body) return [];
  const out = [];
  const parts = body.split(/\n(?=###\s+)/);
  for (const part of parts) {
    const hm = part.match(/^###\s+(.*)\n([\s\S]*)$/);
    if (!hm) continue;
    out.push({ title: hm[1].trim(), body: hm[2].trim() });
  }
  // fallback: if no ### subheadings, keep whole glance as one card
  if (out.length === 0 && body.trim()) out.push({ title: "Overview", body: body.trim() });
  return out;
}

const chapters = [];
for (const f of files) {
  const md = readFileSync(join(srcDir, f), "utf8");
  const titleM = md.match(/^#\s+(.*)$/m);
  const fullTitle = titleM ? titleM[1].trim() : basename(f, ".md");
  const numM = f.match(/^(\d+)/);
  const num = numM ? +numM[1] : chapters.length + 1;
  const shortTitle = fullTitle.replace(/^.*?Chapter\s*\d+:\s*/i, "").replace(/^.*?—\s*/, "").trim() || fullTitle;
  const sec = splitSections(md);
  const findSec = (re) => {
    const key = Object.keys(sec).find((k) => re.test(k));
    return key ? sec[key] : "";
  };
  const concepts = parseConcepts(findSec(/Chapter at a Glance/i));
  const mcqs = parseMCQs(findSec(/Multiple Choice|Very Short Answer/i));
  const short = parseQA(findSec(/Short\s+(?:Answer|Choice)[^\n]*Type/i) || findSec(/Short\s*&\s*Long/i));
  const long = parseQA(findSec(/Long Answer Type/i));
  chapters.push({
    id: `ch${num}`,
    num,
    file: f,
    title: shortTitle,
    fullTitle,
    concepts,
    mcqs,
    short,
    long,
  });
}

// importance ranking: how many distinct years a question references (PYQ frequency)
let maxFreq = 1;
for (const ch of chapters)
  for (const q of [...ch.mcqs, ...ch.short, ...ch.long])
    maxFreq = Math.max(maxFreq, (q.years || []).length);

const summary = {
  subject: subjectName,
  generatedFrom: srcDir,
  chapterCount: chapters.length,
  totals: {
    mcqs: chapters.reduce((a, c) => a + c.mcqs.length, 0),
    short: chapters.reduce((a, c) => a + c.short.length, 0),
    long: chapters.reduce((a, c) => a + c.long.length, 0),
    concepts: chapters.reduce((a, c) => a + c.concepts.length, 0),
  },
  maxPYQFrequency: maxFreq,
  chapters,
};

writeFileSync(outFile, JSON.stringify(summary, null, 2));
console.log(`Wrote ${outFile}`);
console.log(`Chapters: ${summary.chapterCount}`);
console.log(`Totals:`, summary.totals);
console.log(`Max PYQ frequency (years a single Q repeated): ${maxFreq}`);
for (const ch of chapters)
  console.log(`  ${ch.id} "${ch.title}": ${ch.concepts.length} concepts, ${ch.mcqs.length} MCQ, ${ch.short.length} short, ${ch.long.length} long`);
