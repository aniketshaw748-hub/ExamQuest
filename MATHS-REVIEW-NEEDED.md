# D.Maths — answers needing human review

Generated 2026-06-27 from the full Discrete Mathematics answer audit (299 questions + curated walkthroughs/lessons). The **33 high-confidence errors that could be fixed automatically have already been corrected** in `public/data/dmaths.json` (and the curated `dmaths-walk.js` / `dmaths-teach.js` for the pigeonhole item). See the HANDOFF.md build log for the full list of applied fixes.

This file lists only the items left for a human, because they need a judgement call, a diagram that the parser dropped, or were too uncertain to change automatically.

---

## 1. Broken question — needs a decision

### ch4 / mcq #6 — "A → B is equivalent to"
Options: a) ¬A→¬B · b) ¬A→B · c) ¬B→A · d) ¬(A→¬B). Marked **d**.
- **None of the options equals A→B.** (d = A∧B; the others are A∨¬B, A∨B, A∨B.) The contrapositive ¬B→¬A is not offered, and there is no "none of these" option.
- The options look duplicated from mcq #1 (an A∧B question). **Decision needed:** fix the options (e.g. make one option ¬B→¬A and mark it), or drop the question. Left unchanged for now.

---

## 2. Diagram-dependent chromatic polynomials (verify against the source figures)

The Ch6 `long` chromatic-polynomial answers depend on figures the parser stored only as `[diagram]`, so they can't be checked from text alone. The automated audit was **unreliable here** (it produced at least one false positive — see §4), so please verify these by hand against the printed graphs in `Clg shit/D.Maths/06 Graph and Tree.md`:

- **ch6 / long #6a** — audit flagged a spurious extra `(x−4)` factor in the reduction of `48·ˣC₄`, giving a wrong evaluation. Plausible (ˣC₄ has only 4 factors) but not confirmed against the figure.
- **ch6 / long #8b** — audit flagged the coefficient set as internally inconsistent (a `−9λ⁴` term implies 9 edges, but `P(2)>0` would force the graph bipartite). The *correct* polynomial needs the actual graph.

Both need the diagram to produce the right answer, so they were not auto-fixed.

---

## 3. Low-confidence / interpretation issues

- **ch3 / mcq #7** — "number of permutations of a k-element set." Source marks `answer: null` / "imprecise [as printed]". Option (a) `k!` is in fact a perfectly correct answer; consider setting the key to **a** rather than null. (Left as the source had it.)
- **ch4 / mcq #20** — "Not p unless q." Marked d (none). Standard reading "p unless q" = ¬q→p gives "not-p unless q" = ¬q→¬p ≡ p→q, which is option **b**. Medium confidence (English-to-logic of "unless" is genuinely ambiguous).
- **ch6 / mcq #26** — "number of elements in an incidence matrix of a digraph." Marked b (2). A digraph incidence matrix uses three values {+1,−1,0}; the wording "number of elements" is ambiguous (entries vs distinct values).
- **ch6 / mcq #27** — "A pseudo graph…" Marked c ("must have parallel edges"). A pseudograph *permits* loops/multi-edges but need not have them; arguably d (none).
- **ch6 / short #9** — "draw the graph for the adjacency matrix." If read as undirected, the answer omits one edge (v2–v3). short #18 notes the same matrix is really a digraph, so this is interpretation-dependent.
- **ch6 / mcq #22** — Σdeg of a described figure; the marked answer (17) is impossible for a simple graph (degree sum is even). Depends on the actual diagram.

### Interpretation inconsistency to standardise
The phrase **"not divisible by any of X, Y and Z"** is read two different ways in the source:
- ch1 short #1 / #2 (now fixed) → "divisible by none" (inclusion–exclusion).
- ch2 long #3a → "not divisible by all three at once" (i.e. not divisible by lcm), giving 977; ch2 short #6 likewise.

Both are internally self-consistent under their own reading, so they were left as-is, but the bank should pick **one** convention. If the "divisible by none" reading is intended for ch2 long #3a, the answer should be **286**, not 977.

---

## 4. Flagged by the audit but verified CORRECT (no action)

- **ch6 / long #2 ("decomposition theorem", answer `λ(λ-1)(λ-2)²`)** — the audit claimed a generating-function error here; that was a **hallucination**. The answer is correct and was left untouched.
- **ch6 / long #1** (χ(Kₙ)=n) — visible answer is correct.

---

## Note on durability
The fixes were applied to `public/data/dmaths.json` (what the deployed app reads). The source notes in `Clg shit/D.Maths/*.md` (gitignored, used only by `tools/parse.mjs`) were **not** all updated — only the pigeonhole item. **Re-running the parser would revert the other fixes.** Either avoid re-parsing D.Maths, or port these corrections back into the `.md` sources first.
