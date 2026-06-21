# Exam Quest

**Live: [examsmasher.vercel.app](https://examsmasher.vercel.app/)**

A web game that teaches **MAKAUT / WBUT** engineering subjects **visually, from first principles**, then drills you on the **most-repeated previous-year questions (PYQs)**. The goal: learn each idea through motion and interactive explainers, then beat the questions the exam actually asks, until you can re-explain every concept from memory.

Built with Vite + React, Tailwind v4, Motion (Framer), KaTeX, and a Gemini-powered doubt-solver.

## Subjects

Each subject is parsed from verified, image-checked notes. Every chapter has **Learn** (lessons), **Walkthroughs** (PYQs solved point-by-point), **Skirmish** (MCQ quiz), **Boss** (the most-repeated PYQs), a floating **AI doubt-solver**, and a **"Prefer video?"** link to a topic-complete YouTube playlist.

**Semester 4**

| Subject | Status |
|---|---|
| Discrete Mathematics | Fully illustrated |
| Design & Analysis of Algorithms | Fully illustrated |
| Formal Language & Automata Theory | Fully illustrated |
| Computer Architecture | Fully illustrated |
| Environmental Science | Fully illustrated |
| Biology for Engineers | Playable; bespoke explainers in progress |

**Other**

| Subject | Status |
|---|---|
| Chemistry (Sem-2 back paper) | Fully illustrated |

"Fully illustrated" means every lesson has a bespoke, code-drawn, interactive explainer. There are 100+ of them in total.

## How it works

- **Explanation Ladder** — each concept is taught as: what it is, why it exists, intuition, an analogy (and where the analogy breaks), step-by-step, a worked example, the common misconception, and a rule of thumb.
- **Interactive explainers** — bespoke, code-drawn graphics (Venn grids, a Bezout tableau, a domino-induction cascade, a truth-table builder, graph colouring, a Big-O growth chart, a Lennard-Jones potential well, a Carnot cycle, a galvanic cell, a food-chain energy pyramid, a Punnett square, the DNA double helix, and many more). Code-drawn beats AI art because it has to be *accurate*: it teaches.
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

## Contributing

Contributions are very welcome, whether you are adding a whole subject, a single interactive explainer, or fixing a typo in a lesson. The fastest way in is the **Contribute** tile on the home screen, or:

```bash
# 1. Fork the repo on GitHub, then:
git clone https://github.com/<you>/ExamQuest && cd ExamQuest
npm install
git checkout -b my-change
# 2. make your change, verify (see "Before you open a PR" below)
# 3. push your branch and open a Pull Request against main
```

### Add a new subject

1. **Data.** The app reads one JSON file per subject from `public/data/<key>.json`, shaped as `{ chapters: [{ id, num, title, concepts:[{title,body}], mcqs:[{n,question,options:[{label,text}],answer,years,model}], short:[...], long:[...] }] }`. Either run the notes parser or write a small build script (see [`tools/build-biology.mjs`](tools/build-biology.mjs) for a clean example):
   ```bash
   node tools/parse.mjs "<notes-folder>" "<Subject Name>" public/data/<key>.json
   ```
2. **Register it** in [`src/data/subjects.js`](src/data/subjects.js): add `{ key, name, file, icon, world, title, blurb, video }`. `icon` is a [Phosphor](https://phosphoricons.com/) component; `video` is `{ url, channel }` for the "Prefer video?" link.
3. The subject is now fully playable on the **concept-lesson fallback** (lessons, skirmish, boss, walkthroughs, AI tutor). To make it *illustrated*, add authored ladders + explainers below.

### Add authored lessons (the Explanation Ladder)

Create `src/data/<subject>-teach.js` exporting `TEACH_<SUBJECT> = { chN: [lesson, ...] }` and register it in `TEACH_BY_SUBJECT` in [`src/lib/lessons.js`](src/lib/lessons.js). Each lesson is `{ id, title, explainer, what, why, intuition, analogy:{icon,label,text,breaks}, steps:[], example, misconception, rule }`. Set `explainer` to an explainer key (below) or reuse an existing one.

### Add an interactive explainer

1. Create `src/explainers/MyExplainer.jsx` (a small React component; look at any existing one for the house style).
2. Register it in [`src/explainers/registry.js`](src/explainers/registry.js): `import` it and add `mykey: MyExplainer` to the `EXPLAINERS` map.
3. Point a lesson at it with `explainer: "mykey"`.

### House rules (please follow)

- **Locked design system.** Ink-navy canvas, a single amber accent (`#f6b53d`), Space Grotesk / Manrope / JetBrains Mono. No second accent colour, no emoji, no em or en dashes, mobile-first (works at 375px). Tokens live in [`src/index.css`](src/index.css).
- **Code-drawn only.** Explainers are SVG/CSS/Motion, never AI-generated images. They must be *accurate*, they are teaching tools.
- **Never put a raw `$...$` in JSX.** It breaks the build in subtle ways. For math, use `<Tex>{` ... `}</Tex>` or `<Rich inline>`; `$...$` is fine inside the *data* strings in `*-teach.js`.
- **Keep question and answer text faithful** to the verified source notes.

### Before you open a PR

```bash
npm run build      # must be green
npm run dev        # open the app, check the browser console has no errors
# and confirm there are no raw $ in JSX:
grep -rnE '>[^<>{}]*\$' src --include=*.jsx | grep -vE 'Tex>|Rich|`'   # should print nothing
```

## Deploy (Vercel)

The repo is Vercel-ready: Vite is auto-detected (`vite build` to `dist`), and the doubt-solver runs as a serverless function at [`api/chat.js`](api/chat.js) in production. Import the repo in Vercel, add a `GEMINI_API_KEY` environment variable in **Project Settings → Environment Variables**, and every push to `main` auto-deploys.

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
tools/build-biology.mjs# example: builds a subject's JSON from structured notes
api/chat.js            # Vercel serverless doubt-solver (Gemini 2.5 Flash)
```

---

Built so a student can walk into the exam ready. If it helped you, a GitHub star is appreciated.
