# Exam Quest — Project Handoff & Build Context

A web game that teaches a student MAKAUT/WBUT Sem-4 subjects **visually**, from first principles, and drills them on the **most-repeated previous-year questions (PYQs)**. Goal: the player can re-explain each concept 5 minutes later and walk into the exam ready.

This doc is the single source of truth for continuing the build (for a future session, another LLM, or an autonomous loop).

---

## 1. Status (update this section as you go)

- **Stack & shell:** DONE.
- **Subject in progress:** Discrete Mathematics (`D.Maths`).
- **D.Maths Ch1 (Set, Relation & Function):** FEATURE-COMPLETE — chapter motif, 6 ladder lessons each with a bespoke interactive explainer, 29 walkthroughs (auto-built from the organizer's verified short/long answers + 3 curated), skirmish (MCQ), boss (top PYQs), doubt-solver. This chapter is the **reference template**; match its depth everywhere.
- **D.Maths Ch2 (Principle of Mathematical Induction):** FEATURE-COMPLETE (2026-06-20). The PYQ data shows the chapter is really *number theory* (GCD/Euclid/Bezout, congruences, division algorithm) with induction as one technique, so the ladder is authored bottleneck-first to match what is actually asked. 6 ladder lessons + 6 bespoke explainers + motif (Dominoes, already existed) + 2 curated walkthroughs (the rest auto-build from the organizer). See Build Log §13.
- **D.Maths Ch3 (Basic Counting Techniques):** FEATURE-COMPLETE (2026-06-20). PYQs are dominated by pigeonhole + inclusion-exclusion, then permutations/combinations/circular, on the addition/multiplication base. 6 ladder lessons + 6 bespoke explainers + motif (Counting, already existed) + 2 curated walkthroughs. **Also fixed a parser bug** that had dropped all of Ch3's short PYQs (see Build Log §13).
- **D.Maths Ch4 (Introduction to Propositional Calculus):** FEATURE-COMPLETE (2026-06-20). Truth-table-driven chapter. 6 ladder lessons + 6 bespoke explainers (all powered by a shared `src/lib/prop.js` logic engine, so every truth table/normal form is computed, not hand-typed) + motif (Logic, already existed) + 2 curated walkthroughs. Note: source long Q8-16 drift into group theory (Ch5 material) and are deliberately left unpinned. Also fixed a trailing-em-dash parser artifact on all questions (Build Log §13).
- **D.Maths Ch5 (Algebraic Structures and Morphism):** FEATURE-COMPLETE (2026-06-20). Ring-theory weighted (PYQs favour integral domains/fields/zero divisors over basic groups). 6 lessons + 6 explainers on a shared `src/lib/algebra.js` (Zn tables/zero-divisors/units/ideals computed) + motif (Structures, existed) + 1 curated walkthrough. Also fixed parser for the `**N. a)**` shared-answer long format. Build Log §13.
- **D.Maths Ch6:** NOT STARTED. Data parsed (33 MCQ/26 short/26 long).
- **Other subjects (DAA, Automata, CA, Chemistry, EVS):** NOT STARTED in the game (their notes exist, see §7).

**Definition of "a chapter is done":** authored Explanation-Ladder lessons (one per core concept) + a bespoke interactive explainer for (nearly) every lesson + a code-drawn chapter motif + walkthroughs generated/curated for the repeated short/long PYQs + it renders cleanly on mobile with no console errors.

---

## 2. Where things live

- **Game app (this project):** `C:\quest` (Vite + React).
- **Source study notes (verified Markdown, 6 subjects, 42 chapters):** `C:\Clg shit\<Subject>\*.md` (DAA, D.Maths, Automata theory, CA, Chemistry, EVS). These were OCR'd + image-verified from scanned organizers.
- **Parsed content the game reads:** `C:\quest\public\data\dmaths.json` (built by `tools/parse.mjs`).
- **Helper tools used during OCR (not needed for the game):** Poppler at `C:\poppler\...`, Tesseract installed via winget. See the user's memory file.

---

## 3. Run / preview

```
cd C:\quest
npm install        # first time
npm run dev        # Vite dev server on http://localhost:5174  (the Gemini /api/chat proxy lives in the dev server)
```
Preview is driven via the Claude Preview MCP (`.claude/launch.json` config name "quest", port 5174). Screenshots sometimes time out because of the continuous starfield/float animations — retry, or check the DOM via `preview_eval`. Always check `preview_console_logs level:error` after changes.

---

## 4. Architecture

- `src/main.jsx` — entry, imports fonts + `index.css`.
- `src/App.jsx` — loads `public/data/dmaths.json`, holds `{name, params}` route state, renders the active screen inside `<AnimatePresence>` page transitions. Provides `Nav` (`go(name, params)`, `route`) and `Content` contexts. Mounts `<Starfield/>`, `<TopBar/>`, `<Chatbot/>`.
- Screens (`src/screens/`): `Overworld` (chapter list), `Zone` (chapter hub with 4 tiles: Learn / Walkthroughs / Skirmish / Boss + motif), `Lesson` (explainer + TeachLadder), `Skirmish` (MCQ quiz), `Boss` (top PYQs), `Walkthrough` (pinned explainer + point-by-point reveal).
- State/progress: `src/lib/game.js` — `useProgress()` (localStorage: xp, mcq results, boss cleared), `level()`, `masteryOf()`, `topPYQs()`, `freq()`, `CHAPTER_ART`.
- Rich text: `src/lib/rich.jsx` — `<Rich>` (markdown-it + KaTeX). **Use `<Rich inline>` whenever it sits inside `<p>`/`<span>`** (inline = `<span>` + `renderInline`; block = `<div>`). Mixing block Rich inside `<p>`/`<span>` causes invalid-HTML console floods.

---

## 5. Design system (locked — do not drift)

Defined in `src/index.css` via Tailwind v4 `@theme`. Anti-slop rules (from the `design-taste-frontend` skill):
- **Palette:** ink-navy canvas (`--color-ink #0a0e17`), ONE accent `--color-amber #f6b53d`, plus semantic `--color-emerald` (correct) and `--color-rose` (wrong). Blue `#6aa6f0` / green `#34d39a` are used for "set A / set B" coding inside explainers. No AI-purple, no neon glow.
- **Type:** display = Space Grotesk, body = Manrope, mono = JetBrains Mono (self-hosted via `@fontsource-variable/*`). Never Inter.
- **Icons:** Phosphor (`@phosphor-icons/react`) only. **No emoji anywhere.** Verify an icon name exists before using (`node -e 'import("@phosphor-icons/react").then(m=>...)'`) — wrong names crash the app.
- **No em-dashes (`—`) or en-dashes (`–`)** in any user-visible string. Use commas/periods/colons. (`grep -rn "—\|–" src/` should only hit comments.)
- **Radius:** cards 20px, tiles 16px, fields 12px. **Motion:** Motion (framer) with spring physics + `prefers-reduced-motion` honored; motion must be motivated (teach/feedback/hierarchy), not decoration.
- **Mobile:** SVG explainers use `viewBox` (auto-scale); grids use `overflow-x-auto` or stack; test at 375px.

---

## 6. The teaching model

**Explanation Ladder** (the user's required format). Authored content lives in `src/data/dmaths-teach.js` as `TEACH[chId] = [ lesson ]` where each lesson =
`{ id, title, explainer: <registry key|null>, what, why, intuition, analogy:{icon,label,text,breaks}, steps:[...], example, misconception, rule }`.
Rendered by `src/components/TeachLadder.jsx` as: big "what it is" headline → rail rungs (why / intuition / analogy / how-it-works steps / example) → rose "common misconception" → amber "rule of thumb". All fields may contain `$LaTeX$`.

`src/lib/lessons.js` `getLessons(content, chId)` returns the authored ladder for chapters in `TEACH`, else falls back to raw OCR concepts (`{title, body}`). **To author a new chapter:** add its `TEACH[chId]` array of lessons (one per core concept, bottleneck-first).

---

## 7. Interactive explainers (the hard, high-value part)

Each lesson should pin a bespoke interactive graphic. They live in `src/explainers/`, registered in `src/explainers/registry.js` as `EXPLAINERS[key] = Component`. A lesson references one by its `explainer` key.

Existing (all D.Maths Ch1): `venn` (set operations), `cartesian` (A×B grid), `relation` (subset grid + rule presets), `count` (2^(mn) switch panel + sliders), `function` (mapping diagram + valid/invalid toggle), `domainrange` (f(x)=x² arrow diagram).

**Pattern:** a self-contained component, `<svg viewBox>` or CSS grid (responsive), Motion for state, KaTeX via `<Tex>`/`<Rich>`, on-palette colors, an `Interactive` mono label. Keep it ACCURATE (it teaches). Code-drawn beats AI art for precise math. A reusable kit to build next: number line, generic mapping diagram, graph/tree canvas, truth-table grid, geometric figure, step-tracer.

Chapter motifs (the banner on the chapter hub) are in `src/components/ChapterMotif.jsx`, switched by `chId`. (We tried Recraft AI emblems and reverted — code motifs are better and free.)

---

## 8. Walkthroughs (learn PYQs point-by-point)

`Zone` → "Walkthroughs" tile → `Walkthrough` screen: pins an explainer (if any), then reveals the model answer **one point at a time**, ending with a green Final answer + amber "In the exam" tip.

Walkthroughs are built **at runtime from the organizer's own verified answers** by `src/lib/walks.js` `getWalks(content, ch)` — NO LLM, nothing to generate. (We tried generating them via Gemini and removed it: the `.md` files already hold the exact verified Q&A, so re-generating only adds rate limits + paraphrase/hallucination risk.)

How it works:
1. For every short (5-mark) + long (15-mark) PYQ in the chapter's parsed JSON, `segment()` splits the **verified model answer** into point-by-point chunks (on numbered/`(i)`/`Step`/`Part` markers, else sentence-pairs; math is protected). The points ARE the answer.
2. `heuristicExplainer(question, ch)` pins an existing interactive where it genuinely fits (currently only for `ch1` topics; extend per chapter as you build their explainers).
3. Curated hand-authored walkthroughs in `src/data/dmaths-walk.js` (cleaner teaching + good explainer pins) are merged in and win on duplicate questions.
4. Everything sorts by PYQ frequency (years asked).

So walkthroughs appear **automatically** for any chapter whose data is loaded — building a chapter does NOT require a generation step. To improve a chapter's walkthroughs: extend `heuristicExplainer` for its topics and/or add a few curated entries.

---

## 9. Adding another subject

1. Parse its notes: `node tools/parse.mjs "C:\Clg shit\<Subject>" "<Subject Name>" public/data/<key>.json` (parser handles "Multiple Choice"/"Very Short Answer", "Short/Long Answer", "Chapter at a Glance"). Confirm counts.
2. The app currently hardcodes D.Maths (`App.jsx` fetches `data/dmaths.json`, theme strings say "Logic Kingdom"). **To go multi-subject:** add a subject-select overworld, load the right JSON per subject, give each its own `TEACH`, explainers, motifs, walks. This refactor is pending.
3. Author `TEACH`, build explainers + motif, generate walks. Repeat per chapter.

---

## 10. Gemini doubt-solver

Floating chat (`src/components/Chatbot.jsx`) → POSTs to `/api/chat` → dev-server middleware `vite-gemini.js` (wired in `vite.config.js`) → Gemini 2.5 Flash with the teaching system prompt (`src/data/teachPrompt.js`) + the current lesson as context. **Key stays server-side** (`.env` `GEMINI_API_KEY`, gitignored). Free tier = 5 req/min.

---

## 11. Remaining work (the backlog)

In order:
1. D.Maths **Ch2 Mathematical Induction** (domino-cascade explainer + induction walkthroughs), **Ch3 Counting**, **Ch4 Propositional Calculus** (truth-table explainer), **Ch5 Algebraic Structures** (Cayley-table explainer), **Ch6 Graphs & Trees** (graph/tree canvas).
2. Multi-subject refactor (§9 step 2).
3. **DAA, Automata, CA, Chemistry, EVS** — each chapter to the §1 "done" bar.
4. Polish: spaced-repetition review, deploy to a private URL (Vercel) for phone use.
5. CA Ch1/Ch2 source notes still have a few `[OCR — unverified]` formula lines (see `C:\Clg shit\CA`).

---

## 12. Conventions checklist before declaring any chapter done
- [ ] Lessons authored bottleneck-first; each has an explainer (or a clear reason it can't).
- [ ] Walkthroughs auto-appear from the organizer answers (no gen step); spot-check 2–3 segment cleanly, and extend `heuristicExplainer` to pin this chapter's explainers.
- [ ] No emoji, no em-dashes, Phosphor icons verified, one accent color.
- [ ] `preview_console_logs level:error` is clean (watch for div-in-p — use `<Rich inline>`).
- [ ] Renders at 375px mobile.

---

## 13. Build Log (append after every task — keep this current)

### 2026-06-20 — D.Maths Ch2 (Principle of Mathematical Induction) FEATURE-COMPLETE
**Key call:** the chapter title says "Induction" but the 23 MCQs + 14 short + 6 long PYQs are dominated by *number theory* (GCD, Euclidean algorithm, Bezout/`au+bv`, congruences, division algorithm, well-ordering). Authored the ladder bottleneck-first to match the real PYQ distribution rather than the title.

**Files added:**
- `src/explainers/DivisionExplainer.jsx` (`divalg`) — number-line bar split into q blocks of b + remainder, sliders for a,b, shows `a=bq+r`, `0≤r<b`.
- `src/explainers/EuclidExplainer.jsx` (`euclid`) — repeated-division step tracer, presets, "divide again" reveal, gcd = last non-zero remainder.
- `src/explainers/BezoutExplainer.jsx` (`bezout`) — **extended-Euclid tableau**, every row keeps invariant `r=s·a+t·b`, reveals to the gcd row, prints the Bezout identity. Math verified against the organizer's printed answers for 272,119 / 595,252 / 63,55 / 512,320 (exact match).
- `src/explainers/ModClockExplainer.jsx` (`modclock`) — mod-m clock dial, hand lands on `n mod m`, sliders, shows `n=mq+r ⇒ n≡r (mod m)`.
- `src/explainers/InductionExplainer.jsx` (`induction`) — domino cascade with Base-case and Inductive-step toggles; removing either breaks the chain (teaches both pillars).
- `src/explainers/WellOrderExplainer.jsx` (`wellorder`) — number-line subset of ℕ with the least element glowing; "new subset" reshuffles; notes why ℤ/ℝ⁺ aren't well-ordered.

**Files edited:**
- `src/explainers/registry.js` — registered the 6 new keys.
- `src/data/dmaths-teach.js` — added `TEACH.ch2` (6 lessons: division-algorithm → gcd-euclid → bezout → congruence → induction → well-ordering).
- `src/components/TeachLadder.jsx` — added analogy icons: coins, ruler, backsub (ArrowsDownUp), clock, ladder, sort (SortAscending).
- `src/lib/walks.js` — `heuristicExplainer` now has a `ch2` branch; pins bezout/modclock/divalg/induction/wellorder/euclid by keyword, leaves no-clean-fit PYQs (counting, Euclid's lemma) unpinned.
- `src/data/dmaths-walk.js` — added `WALK.ch2` with 2 curated showcases: Bezout `gcd(272,119)` [2014,2017] and induction `6^(n+2)+7^(2n+1)` divisible by 43 [2013]. Question text mirrors the organizer so dedup replaces the auto-built versions.

**Verified:** `npm run build` clean (only the pre-existing >500kB chunk warning). Bezout coefficients and heuristic pins checked with a throwaway node script (removed). Phosphor icon names pre-checked to exist. Motif for ch2 (Dominoes) already existed in `ChapterMotif.jsx`.
**Not done here:** live 375px / `preview_console_logs` pass needs the Preview MCP (not available this session) — do a visual smoke test on next `npm run dev`.

**Next:** D.Maths Ch3 (Basic Counting Techniques) — permutations/combinations, pigeonhole, inclusion-exclusion, binomial. Likely explainers: counting tree / nPr-nCr panel, pigeonhole bins, inclusion-exclusion Venn (can reuse `venn`).

### 2026-06-20 — D.Maths Ch3 (Basic Counting Techniques) FEATURE-COMPLETE
**Key call:** PYQs are weighted to *pigeonhole* and *inclusion-exclusion* (the proof tools), then permutations/combinations/circular, on the addition/multiplication base. Ladder ordered accordingly.

**PARSER BUG FIXED (affects all future chapters):** `tools/parse.mjs` only recognized `## Short Answer Type` headings and only the "whole-question-bolded" layout. Ch3 uses `## Short Choice Type Questions` with a number-only-bolded layout (`**6.** question *[year]*` then `**Answer:**`), so all 12 Ch3 short PYQs were silently dropped and year tags missed.
- Broadened the short-section heading regex to `/Short\s+(?:Answer|Choice)[^\n]*Type/i`.
- Rewrote `parseQA` to handle BOTH layouts (marker-based and bold-span-based) and to scan the question+answer boundary for the year tag; strips a leading year tag from answers.
- Re-ran `node tools/parse.mjs "C:/quest/Clg shit/D.Maths" "Discrete Mathematics" public/data/dmaths.json`. Verified no regression: emptyQ=0 for every chapter; ch1/ch5 still show 0 year-tagged short/long because their notes genuinely tag only MCQs. **If you re-parse any subject, this fix is already in place.**

**Files added:** 6 explainers in `src/explainers/`:
- `CountTreeExplainer.jsx` (`counttree`) — OR (n+m) vs AND (n×m) toggle, grid of pairings.
- `PermuteExplainer.jsx` (`permute`) — r slots with shrinking choices, `P(n,r)=n!/(n-r)!`.
- `CombineExplainer.jsx` (`combine`) — `C(n,r)=P(n,r)/r!`, symmetry `C(n,r)=C(n,n-r)`.
- `CircularExplainer.jsx` (`circular`) — ring of n, `(n-1)!`, necklace toggle `/2` (7 beads → 360).
- `PigeonholeExplainer.jsx` (`pigeonhole`) — N objects into k boxes, fullest = `⌈N/k⌉`, `nk+1` rule.
- `InclExclExplainer.jsx` (`inclexcl`) — 2-set Venn with region sliders, `|A∪B|=|A|+|B|-|A∩B|`.

**Files edited:** `registry.js` (+6 keys), `dmaths-teach.js` (`TEACH.ch3`, 6 lessons), `TeachLadder.jsx` (+icons podium/handshake/circular/boxes/clubs), `walks.js` (ch3 heuristic branch), `dmaths-walk.js` (`WALK.ch3`: pigeonhole-balls→56 [2015], inclexcl 2/3/7→714 [2017]).

**Verified:** `npm run build` clean. Explainer math checked (P(6,4)=360, C(5,3)=10, necklace 6!/2=360, ⌈25/12⌉=3, 5·11+1=56, IE=714). Heuristic pins every keyworded PYQ correctly (congruence→modclock, perms→permute, necklace→circular, functions/letterboxes→counttree, Pascal/choose→combine, IE/pigeonhole pinned), leaves CNF/truth-table (Ch4 topics) and a few keyword-less ones unpinned. Motif for ch3 (Counting) already existed.
**Not done here:** live 375px / console pass (Preview MCP unavailable this session).

**Next:** D.Maths Ch4 (Introduction to Propositional Calculus) — 23 MCQ/17 short/25 long (the biggest so far). Core: connectives & truth tables, tautology/contradiction, logical equivalence, normal forms (CNF/DNF — already appear as Ch3 PYQs S12/L3), implication/converse/inverse/contrapositive, predicates & quantifiers, inference rules. Likely explainers: interactive truth-table builder, connective evaluator, CNF/DNF constructor, quantifier visualizer.

### 2026-06-20 — D.Maths Ch4 (Introduction to Propositional Calculus) FEATURE-COMPLETE
**Key call:** truth-table-driven chapter. Built a shared logic engine `src/lib/prop.js` (connectives + `table`/`classify`/`equivalent`/`dnf`/`cnf`) so every explainer COMPUTES its truth tables and normal forms from JS predicate functions, never hand-typed. Source long Q8-16 drift into group theory (homomorphisms etc., really Ch5) and are deliberately left unpinned.

**Files added:** `src/lib/prop.js` + 6 explainers:
- `ConnectivesExplainer.jsx` (`connectives`) — toggle p,q; matching row lights up across ¬/∧/∨/→/↔ tables.
- `TruthTableExplainer.jsx` (`truthtable`) — preset compound formulas, full table + tautology/contradiction/contingency badge.
- `EquivalenceExplainer.jsx` (`equivalence`) — two formulas side by side (conditional, both De Morgans), match check.
- `ImplicationExplainer.jsx` (`implication`) — original/converse/inverse/contrapositive columns; contrapositive≡original.
- `NormalFormExplainer.jsx` (`normalform`) — truth table → DNF (true rows) + CNF (false rows), minterm/maxterm tagging.
- `QuantifierExplainer.jsx` (`quantifier`) — tap a 5-object domain to toggle P(x); ∀/∃ + negation rules update live.

**Files edited:** `registry.js` (+6 keys), `dmaths-teach.js` (`TEACH.ch4`, 6 lessons), `TeachLadder.jsx` (+icons circuitry/checklist/balance/crowd; reuses handshake/sort), `walks.js` (ch4 heuristic branch; "inverse" guarded so modular-inverse PYQs don't mispin), `dmaths-walk.js` (`WALK.ch4`: hyp-syllogism tautology [2014], CNF of ¬(p→(q∧r)) [2013] — the curated CNF matches the truth table and the source's own fidelity-note correction).
**Parser:** also stripped a trailing `—`/tag separator that was being left on every question (em-dash, violated the design rule). Re-parsed; 0 questions now end in a dash; no regressions.

**Tailwind gotcha noted:** dynamic class names like `bg-${tone}/10` are NOT generated by Tailwind v4 (it scans literals). Use a static map of full class strings (see `BADGE` in TruthTableExplainer).

**Verified:** `npm run build` clean. `prop.js` checked: p∨¬p=tautology, p∧¬p=contradiction, p∨(q∧¬q)=contingency, hyp-syllogism + modus-tollens = tautology, p→q≡¬p∨q, De Morgan, contrapositive≡original, converse≢original. CNF/DNF of ¬(p→(q∧r)) computed correct. Heuristic pins correct after guarding "inverse" (S6 modular-inverse now null, S13 converse still implication).
**Not done here:** live 375px / console pass (Preview MCP unavailable this session).

**Next:** D.Maths Ch5 (Algebraic Structures and Morphism) — 4 MCQ/12 short/17 long. Core: binary operations & properties (closure/assoc/identity/inverse), semigroups/monoids/groups, abelian, subgroups, cyclic groups, cosets/Lagrange, rings/fields, homomorphism/isomorphism, Zn. Likely explainers: interactive Cayley table (check group axioms), Zn modular group dial, homomorphism mapping diagram, subgroup/coset partition.

### 2026-06-20 — D.Maths Ch5 (Algebraic Structures and Morphism) FEATURE-COMPLETE
**Key call:** PYQs are ring-theory heavy (integral domains/fields/zero divisors, subrings/ideals, ring homomorphisms) more than basic groups, so the ladder leans that way. Shared engine `src/lib/algebra.js` (znTable/zeroDivisors/units/idealOf/isPrime).
**Added:** algebra.js + 6 explainers: `CayleyExplainer` (Zn ± table, Latin-square=group), `HierarchyExplainer` (axiom toggles → structure tier), `RingExplainer` (Zn +/× tables), `ZeroDivExplainer` (Zn × zero divisors, prime⇒field — the signature one), `IdealExplainer` (Zn ideal absorbs ×), `HomomorphismExplainer` (Z→Zn map preserves +, kernel).
**Edited:** registry (+6), `TEACH.ch5` (6 lessons), TeachLadder (+icons grid/stack/gear/magnet/map; reuses balance), walks.js (ch5 heuristic), `WALK.ch5` (1 curated: finite integral domain ⇒ field).
**Parser:** fixed `**N. a)**` shared-answer long format (Ch5): strip stray `**` from questions, keep real question when the bold is just a part label. Re-parsed, no regressions (0 `**` leaks, 0 empty Qs).
**Verified:** build clean; algebra engine checked (Z6 zero divisors {2,3,4}, Z5 none & prime⇒field, units, ideal⟨2⟩ in Z8, Cayley rows). Heuristic pins all correct.

**Next:** D.Maths Ch6 (Graph and Tree) — 33 MCQ/26 short/26 long (biggest). Then the multi-subject refactor + parse all 6 subjects. Core Ch6: graph basics/degree/handshake, paths/connectivity, Euler & Hamiltonian, trees/spanning trees, BFS/DFS, adjacency/incidence matrices, planarity/colouring, isomorphism. Likely explainers: interactive graph canvas (add edges, show degrees/handshake), tree builder, BFS/DFS tracer, adjacency-matrix toggler.

### OVERNIGHT GOAL (user, 2026-06-20 night): all 6 subjects present + whole site functioning on localhost; push to GitHub commit-by-commit. Plan: finish Ch6 bespoke → multi-subject refactor (subject picker, per-subject JSON) → parse DAA/Automata/CA/Chemistry/EVS → all playable via OCR-concept lesson fallback + auto walkthroughs + MCQ/boss/chatbot; bespoke-upgrade extra chapters as time allows. Bespoke explainers for all 42 chapters is NOT achievable in one night — others use the functional fallback.
