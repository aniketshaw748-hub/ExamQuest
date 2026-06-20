# Exam Quest

A web game that teaches **MAKAUT / WBUT Semester-4** subjects **visually, from first principles**, then drills you on the **most-repeated previous-year questions (PYQs)**. The goal: learn each idea through motion and interactive explainers, then beat the questions the exam actually asks, until you can re-explain every concept from memory.

Built with Vite + React, Tailwind v4, Motion (Framer), KaTeX, and a Gemini-powered doubt-solver.

## Subjects

All six Sem-4 subjects are playable, each parsed from verified, image-checked notes:

| Subject | Status |
|---|---|
| **Discrete Mathematics** | Fully illustrated — every chapter has authored lessons + custom interactive explainers |
| Design & Analysis of Algorithms | Authored ladders for the core chapters + full PYQ practice |
| Formal Language & Automata Theory | Authored ladders for the core chapters + full PYQ practice |
| Computer Architecture | Authored ladders for the core chapters + full PYQ practice |
| Chemistry | Concept lessons + full PYQ practice |
| Environmental Science | Concept lessons + full PYQ practice |

Every chapter, in every subject, has: **Learn** (lessons), **Walkthroughs** (PYQs solved point-by-point), **Skirmish** (MCQ quiz), **Boss** (the most-repeated PYQs), and a floating **AI doubt-solver**.

## How it works

- **Explanation Ladder** — each concept is taught as: what it is → why it exists → intuition → analogy (and where the analogy breaks) → step-by-step → worked example → common misconception → rule of thumb.
- **Interactive explainers** — bespoke, code-drawn graphics (Venn/Cartesian/relation grids, a Bézout tableau, a domino-induction cascade, a truth-table builder, Cayley and zero-divisor tables, graph colouring and chromatic polynomials, a Big-O growth chart, and more). Code-drawn beats AI art because it has to be *accurate* — it teaches.
- **PYQ-driven** — content is weighted by how often each question is actually asked, so the highest-yield material gets the most practice.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5174
```

For the in-app AI doubt-solver, create a `.env` file with a free [Google AI Studio](https://aistudio.google.com/) key:

```
GEMINI_API_KEY=your_key_here
```

The key stays server-side. The rest of the app works fine without it.

```bash
npm run build      # production build to dist/
npm run preview    # preview the production build
```

## Deploy (Vercel)

The repo is Vercel-ready:
- Vite is auto-detected (`vite build` → `dist`).
- The doubt-solver runs as a serverless function at [`api/chat.js`](api/chat.js) in production (the same logic that runs as dev-server middleware locally).

Import the repo in Vercel and add a `GEMINI_API_KEY` environment variable in **Project Settings → Environment Variables** for the chatbot to work. Every push to `main` then auto-deploys.

## Project structure

```
src/
  App.jsx              # subject picker + router (state-based) + contexts
  screens/             # SubjectPicker, Overworld, Zone, Lesson, Skirmish, Boss, Walkthrough
  explainers/          # interactive, code-drawn explainers + registry.js
  components/          # TeachLadder, ChapterMotif, TopBar, Chatbot, Starfield
  data/                # authored lessons (<subject>-teach.js), curated walkthroughs, subjects.js
  lib/                 # prop.js / algebra.js / graph.js engines, game.js (progress), rich.jsx (KaTeX)
  index.css            # locked design system (Tailwind v4 @theme)
public/data/*.json     # parsed content the app reads (one file per subject)
tools/parse.mjs        # turns the verified .md notes into the per-subject JSON
api/chat.js            # Vercel serverless doubt-solver (Gemini 2.5 Flash)
```

## Content pipeline

Source notes are verified, image-checked Markdown (one folder per subject). `tools/parse.mjs` turns them into the per-subject JSON the game reads:

```bash
node tools/parse.mjs "<notes-folder>" "<Subject Name>" public/data/<key>.json
```

Authored lessons and interactive explainers are layered on top of that parsed data; question text and answers always come straight from the verified notes.

---

Built for one student to walk into the exam ready.
