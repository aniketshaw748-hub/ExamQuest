# Formal Language & Automata Theory (PCC-CS403) — Master Note

> **Subject:** Formal Language & Automata Theory  **Code:** PCC-CS403  (old codes: CS402 / CS401)
> **Course:** MAKAUT (WBUT) B.Tech CSE / IT / CSBS, Semester 4
> **Exam date:** Thursday, 02 July 2026  ·  **Time:** 3 hours  ·  **Full Marks:** 70
> **Paper pattern:** Group A = 10 MCQ × 1 = 10 (answer any 10 of 12) · Group B = 3 short × 5 = 15 (answer any 3 of 5) · Group C = 3 long × 15 = 45 (answer any 3 of 5).
> **How to use:** every topic gives core theory → formal definition → algorithm/steps → worked example with ASCII automata → common mistakes → memory trick → "Questions Asked Previously" (★ = frequency/importance). Each chapter ends with a 5-Minute Revision Sheet. The whole file is one-day revisable. Priority order of trust: **PYQ > organizer > textbook.**
> Notation: ε = λ = empty string; Σ = input alphabet; Σ* = Kleene star; `→` production; `⊢` PDA/TM move; `∪ ∩` set ops.

---

## ★ PAPER STRATEGY (read first)

- **Group A (MCQ):** Closure properties, Chomsky type of a grammar, NFA→DFA max-states (2ⁿ), Arden's `R=Q+RP ⇒ R=QP*`, pumping lemma = pigeon-hole, Mealy vs Moore output dependence. These repeat verbatim.
- **Group B (5-mark):** DFA/NFA design, NFA→DFA, regex↔FA, pumping-lemma proof, CFG construction, remove unit/null productions, PDA design, small TM design.
- **Group C (15-mark):** (1) NFA→DFA + regex/Arden + minimization, (2) CNF/GNF conversion, (3) PDA design + CFG↔PDA + ID trace, (4) Pumping lemma (RL & CFL) + non-regular proof, (5) TM design + halting-problem/undecidability + variants.
- **Highest-return chapters:** Ch 2 (Regular Languages & FA) ≈ 35–40% of marks, Ch 3 (CFL) ≈ 25%, Ch 4 (PDA) ≈ 15%, Ch 6 (TM) ≈ 12%. Ch 1 + Ch 5 are mostly 1-mark MCQs + one short.

### Chapter Weightage Table (from PYQ frequency 2004–2023)

| Ch | Topic | Group A | Group B | Group C | Priority |
|----|-------|:------:|:------:|:------:|:--------:|
| 1 | Introduction (alphabets, grammar, Chomsky hierarchy) | High | Low | Low | ★★★☆☆ |
| 2 | Regular Languages & Finite Automata | **Very High** | **Very High** | **Very High** | ★★★★★ |
| 3 | Context Free Languages | High | High | **High** | ★★★★★ |
| 4 | Pushdown Automata | Medium | High | High | ★★★★☆ |
| 5 | Context Sensitive Languages | Low | Low | Low | ★★☆☆☆ |
| 6 | Turing Machine & Undecidability | Medium | Medium | High | ★★★★☆ |

### The Chomsky Hierarchy (★★★★★ — guaranteed MCQ + asked as short)

| Type | Grammar | Production form | Language | Accepting machine |
|:---:|---|---|---|---|
| **0** | Unrestricted / Phrase-structure | α → β, α ≠ ε (no restriction) | Recursively Enumerable (r.e.) | Turing Machine |
| **1** | Context-Sensitive (CSG) | αAβ → αγβ, \|γ\| ≥ 1 (non-contracting) | Context-Sensitive (CSL) | Linear Bounded Automaton (LBA) |
| **2** | Context-Free (CFG) | A → α  (single NT on LHS) | Context-Free (CFL) | Pushdown Automaton (PDA) |
| **3** | Regular | A → aB / A → a (right-linear) or A → Ba / A → a (left-linear) | Regular | Finite Automaton (DFA/NFA) |

Containment: **Regular ⊂ CFL ⊂ CSL ⊂ Recursive ⊂ r.e.** Each is strictly more powerful going up.
Memory trick: **"Real Cats Catch Rats"** (Regular → Context-free → Context-sensitive → Recursive/r.e.). Or **"0-unrestricted, 1-sensitive, 2-free, 3-regular"** — the bigger the type number, the more restricted the grammar.

---

# CHAPTER 1 — INTRODUCTION

## 1.1 Alphabets, Strings, Languages

- **Alphabet (Σ):** a finite, non-empty set of symbols. e.g. Σ = {0,1}; Σ = {a,b,…,z}.
- **String / word:** a finite sequence of symbols from Σ. ε = empty string (length 0).
- **\|w\|** = length of w. **Σⁿ** = strings of length n. **Σ\*** = all strings (incl. ε) = Kleene closure. **Σ⁺** = Σ\* − {ε} = positive closure (non-empty strings).
- **Language (L):** any subset of Σ\*, i.e. L ⊆ Σ\*. Can be finite or infinite.
  - Example: L = {aⁿbⁿ : n ≥ 0} is infinite; {a, aa, aab} is finite.

**Operations on languages:** Union L₁∪L₂, Intersection L₁∩L₂, Complement L̄ = Σ\*−L, Concatenation L₁L₂ = {uv : u∈L₁, v∈L₂}, Kleene star L\*, Reversal Lᴿ, Homomorphism.

**Homomorphism (★★★☆☆, asked 2018):** a map h that replaces each symbol by a string, preserving concatenation: h(xy)=h(x)h(y).
*Worked:* h(a)=ab, h(b)=bbc, L={aa, aba}. Then h(aa)=abab, h(aba)=ab·bbc·ab = **abbbcab**. So h(L) = {abab, abbbcab}.

**Counting trick (asked 2023):** S={a,b,c,d,e}, strings of length 4 in S\* with no symbol repeated. Source prints the MCQ answer as **360** **[as printed]** (the standard count 5·4·3·2 = 120; quote the source's 360 if that exact MCQ appears).

## 1.2 Grammar — formal definition

A **grammar** is a 4-tuple **G = (V, T, S, P)** where:
- V = finite set of **variables** (non-terminals),
- T = finite set of **terminals** (V ∩ T = ∅),
- S ∈ V = **start symbol**,
- P = finite set of **productions** of the form α → β.

**Derivation:** `⇒` one step, `⇒*` zero-or-more steps. **L(G) = { w ∈ T\* : S ⇒\* w }.** A **sentential form** may contain variables; a **sentence** is all terminals.

*Example:* G = ({S}, {a,b}, S, P), P: S → aSb \| ε. Then S ⇒ aSb ⇒ aabb ⇒ … ⇒ **L = {aⁿbⁿ : n ≥ 0}**.

## 1.3 Recursive vs Recursively Enumerable (quick defs)

- **Recursive set / language:** accepted by a TM that always halts (decider). If both L and L̄ are r.e. ⇒ L is recursive.
- **Recursively enumerable (r.e.):** can be enumerated/generated; TM halts on strings in L but may loop on strings not in L.

## 1.4 Why a Finite-State Machine is limited (★★★★☆ — repeated MCQ + short)

**The basic limitation of an FSM: it cannot remember an arbitrarily large amount of information.** It has only finitely many states, so it cannot count without bound. Hence it cannot recognise aⁿbⁿ or palindromes (it cannot fix/remember the midpoint and match the two halves).

> **Common mistake:** writing "FSM cannot recognise regular grammars" — wrong; an FSM recognises exactly the **regular** languages.

### Sequence-detector / Mealy machine (asked repeatedly: 1111, 1001, 0101, 1010, 1101)
A "detect pattern P with overlap" Mealy machine has one state per matched-prefix length. Output 1 only on the transition that completes P; on overlap, jump back to the longest prefix still valid.
*Template state table for detecting **1101** (overlap):*

| PS | X=0 | X=1 |
|:--:|:--:|:--:|
| S₁ (start) | S₁,0 | S₂,0 |
| S₂ (got 1) | S₃,0 | S₂,0 |
| S₃ (got 11)| S₄,0 | S₃,0 |
| S₄ (got 110)| S₁,0 | S₂,**1** |

### Incompletely-specified machine minimization — Merger Graph (★★★☆☆, Ch-1 long, WBUT 2011/2016/2018-19)
Steps: (1) list all state pairs; draw an **arc** between compatible (non-conflicting output/next-state) pairs in the **merger graph**; (2) write implied pairs on interrupted arcs; cross off a pair if its implied pair is incompatible; (3) find **maximal compatibles** (largest complete polygons); (4) pick a **minimal closed cover**.
Vertices of a *merger graph* = number of states; vertices of a *compatible graph* = number of compatible pairs (common MCQ).

## ★ Questions Asked Previously — Chapter 1
- **Define alphabet / language / recursive language / regular language.** ★★★☆☆ (Model)
- **Limitation of FSM / sequential circuit.** ★★★★☆ (2004, 2007, 2009, 2010, 2012, 2016)
- **Chomsky classification of a given grammar** (e.g. S→aSbb is Type-2). ★★★★★ (2019, 2023)
- **Merger graph / merger table / compatibility graph minimization.** ★★★☆☆ (2011, 2016, 2018-19 Group C)
- **Mealy↔Moore conversion; sequence detector (1001/0101/1010/1101).** ★★★★☆ (2014, 2015, 2017, 2018-19)
- **Homomorphic image; string-count in S\*.** ★★★☆☆ (2018, 2023)

## ⏱ 5-Minute Revision Sheet — Chapter 1
- Σ finite; string = finite sequence; L ⊆ Σ\*. Σ\* incl. ε; Σ⁺ excludes ε.
- Grammar = (V,T,S,P). L(G)={w∈T\* : S⇒\*w}.
- Chomsky: **0 TM (r.e.), 1 LBA (CSL), 2 PDA (CFL), 3 FA (Regular)**. Regular⊂CFL⊂CSL⊂Rec⊂r.e.
- FSM limit = **can't remember unbounded info** ⇒ can't do aⁿbⁿ / palindrome.
- Homomorphism preserves concatenation: h(xy)=h(x)h(y).
- Merger graph vertices = #states; compatible graph vertices = #compatible pairs.

---

# CHAPTER 2 — REGULAR LANGUAGES & FINITE AUTOMATA  ★★★★★ (biggest chapter)

## 2.1 DFA — formal definition

A **DFA** is a 5-tuple **M = (Q, Σ, δ, q₀, F)**:
- Q = finite set of states, Σ = input alphabet,
- **δ : Q × Σ → Q** (single-valued, total),
- q₀ ∈ Q start state, F ⊆ Q accepting states.

Extended: δ\*(q, ε) = q; δ\*(q, xa) = δ(δ\*(q,x), a). **L(M) = { w : δ\*(q₀, w) ∈ F }.**

## 2.2 NFA — formal definition

An **NFA** is a 5-tuple **M = (Q, Σ, δ, q₀, F)** with **δ : Q × Σ → 2^Q** (multi-valued, may be partial). An **ε-NFA** has **δ : Q × (Σ ∪ {ε}) → 2^Q**.

**DFA vs NFA (★★★★☆ short):**
| | DFA | NFA |
|--|--|--|
| δ value | exactly one state | set of states (0,1,many) |
| ε-moves | not allowed | allowed (ε-NFA) |
| construction | harder | easier |
| membership test | easy | needs subset/backtrack |

Both recognise **exactly the regular languages**. Key MCQ: **NFA with n states → DFA has at most 2ⁿ states.**

## 2.3 Subset Construction (NFA → DFA) — ALGORITHM ★★★★★

1. Start state of DFA = ε-closure({q₀}).
2. For each new DFA-state T and each a∈Σ: compute U = ε-closure( ⋃_{q∈T} δ(q,a) ). Add transition T --a--> U. Add U if new.
3. Repeat until no new states.
4. A DFA-state is **accepting** iff it contains at least one NFA accepting state.
- **ε-closure(q):** q plus everything reachable by ε-moves.

**Worked (PYQ 2014/2015/2017/2019):** NFA over {0,1}: q₀--0-->{q₀,q₁}, q₀--1-->q₂, q₁--0-->q₂, q₁--1-->q₁, q₂--0-->q₁, q₂--1-->q₂ (q₂ final).

| DFA state | 0 | 1 |
|---|---|---|
| {q₀} | {q₀,q₁} | {q₂} |
| {q₀,q₁} | {q₀,q₁,q₂} | {q₁,q₂} |
| {q₀,q₁,q₂}\* | {q₀,q₁,q₂} | {q₁,q₂} |
| {q₁,q₂}\* | {q₁,q₂} | {q₁,q₂} |
| {q₂}\* | {q₁} | {q₂} |
| {q₁} | {q₂} | {q₁} |

(\* = contains q₂ ⇒ accepting.)

## 2.4 DFA Design patterns (★★★★★ — Group B staple)

ASCII convention: `-->` start arrow, `((q))` accepting, self-loops written beside the state.

**(a) Strings ending in 00** (Σ={0,1}):
```
   --> (q0) --0--> (q1) --0--> ((q2))
   q0: 1->q0          q1: 1->q0     q2: 0->q2, 1->q0
```
| | 0 | 1 |
|--|--|--|
|→q0|q1|q0|
|q1|q2|q0|
|((q2))|q2|q0|

**(b) 0(0+1)\*1 — starts with 0, ends with 1:** q0 --0--> q1 (q1 self-loops 0,1) --1--> ((q2)); from q2 a 0 returns to q1; a leading 1 from q0 goes to a dead/trap state.

**(c) ends with 'aaa':** chain q0→q1→q2→((q3)) advancing on a; any b resets toward q0 (q3 on a stays q3, on b → q0).

**(d) "starts with 01 OR ends with 01" (PYQ 2023, 2022-23 Group B):** build the "starts-with-01" branch (q0-0->q1-1->qA, qA loops on 0,1 = accept) UNION the "ends-with-01" tracker, then take the product/union DFA. Accept if either branch accepts.

**(e) ends with '001' (PYQ 2022-23 Group C):** q0 -0-> q1 -0-> q2 -1-> ((q3)); reset rules: q1 on 1→q0, q2 on 0→q2, q3 on 0→q1, q3 on 1→q0.

> **Common mistakes:** (1) forgetting the dead/trap state when a symbol has no listed move — a DFA must be total. (2) For "ends with" vs "contains": for "contains P" the accepting state keeps accepting (self-loop on all symbols) once P is seen.

## 2.5 Regular Expressions & identities

Syntax (inductive): ε and Φ are RE; each a∈Σ is RE; if E,F are RE then E+F, EF, E\* are RE. Precedence: **\* > concatenation > +**.
- L(Φ) = ∅, L(ε) = {ε}, **L(Φ\*) = {ε}** (the source MCQ marks the answer (c) {} **[as printed]**; by theory Φ\* = {ε}).

**Identities:** R+R=R; (R\*)\*=R\*; ε+RR\*=R\*; (P+Q)\*=(P\*Q\*)\*; R(SR)\*=(RS)\*R.
- a\*(a+b)\* = (a+b)\* . `1101` is NOT in (10)\*(01)\*(00+11)\*.

**Common REs to memorise:**
- at least one 1,2,3 in order: `11*22*33*`.
- ends with xx, begins with y: `y(x+y)*xx`.
- aⁿbᵐ, n≥4, m≤3: `aaaa·a*·(ε+b+bb+bbb)`.
- A=(a+b)\*a, B=b(a+b)\* ⇒ A∩B = `b(a+b)*a`.
- aⁿ, n>0: `aa*`.

## 2.6 Arden's Theorem (RE from DFA) — ★★★★☆

**If R = Q + RP and P does not contain ε, then R = QP\*** (unique solution).
**Algorithm:** write one equation per state qᵢ = Σ(incoming) ; the start state gets a `+ ε`. Solve by back-substitution, applying Arden whenever a state appears on its own RHS.

*Worked:* q1 = ε + q1·0 + q3·0, q2 = q1·1 + q2·1 + q3·1, q3 = q2·0.
Sub q3 into q2: q2 = q1·1 + q2(1+01) ⇒ (Arden) q2 = q1·1(1+01)\*. Then q1 = ε + q1·0 + q2·00 = ε + q1(0 + 1(1+01)\*00) ⇒ **q1 = (0 + 1(1+01)\*00)\***.

## 2.7 DFA Minimization

**(A) Partition / equivalence-class method (Myhill-Nerode), ★★★★★:**
1. P₀ = {non-final states}, {final states}.
2. Refine: two states stay together iff for every a∈Σ they go to the **same block**. Split otherwise.
3. Repeat until Pₖ = Pₖ₊₁. Each block = one state of the minimal DFA.

*Worked (final states q3,q4,q5):* P₀ = {q0,q1,q2 \| q3,q4,q5}; refine ⇒ {q0}{q1,q2}{q3,q4,q5}; stable. Minimal DFA: A={q0}, B={q1,q2}, C={q3,q4,q5}. A→B,B; B→B,C; ((C))→C,C.

**(B) k-equivalence / partition for Moore-style machines:** P₀ groups by output; Pₖ₊₁ splits a class if two members transition to different Pₖ-classes. Stop when the partition stops changing. *(WBUT 2006/2008/2015 worked exactly this way.)*

**Myhill–Nerode Theorem (★★★★☆ short):** TFAE — (1) L is accepted by a DFA; (2) L is a union of equivalence classes of a right-invariant equivalence relation of finite index; (3) R_L (x R_L y iff ∀z: xz∈L ⇔ yz∈L) has finite index. The number of classes of R_L = number of states of the minimal DFA.
- *Right-invariant:* x R y ⇒ xz R yz for all z.

## 2.8 Regular Grammar ↔ FA (★★★★☆)

**Right-linear:** A→aB or A→a. **Left-linear:** A→Ba or A→a. Both generate regular languages.
**FA → right-linear grammar:** for each transition p--a-->q write `p → a q`; for each accepting state f write `f → ε`.
*Worked:* regular grammar for `a*b(a+b)*`: A0→aA0 \| bA1 \| b, A1→aA1 \| bA1 \| a \| b.

## 2.9 Mealy & Moore Machines (★★★★☆)

- **Moore** = (Q, Σ, Δ, δ, λ, q₀): output **λ:Q→Δ** depends on **present state only**. Output length = \|input\|+1.
- **Mealy** = (Q, Σ, Δ, δ, λ, q₀): output **λ:Q×Σ→Δ** depends on **present state AND input**. Output length = \|input\|.
- **Mealy→Moore:** split each state by the distinct outputs on its incoming edges (qᵢ → qᵢ0, qᵢ1…), attach output to state. **Moore→Mealy:** move each state's output onto its incoming transitions.

## 2.10 Pumping Lemma for Regular Languages (★★★★★)

**Statement:** If L is regular, ∃ constant p (pumping length) s.t. every w∈L with \|w\|≥p can be split **w = xyz** with (1) \|xy\| ≤ p, (2) \|y\| ≥ 1, (3) xyⁱz ∈ L for all i ≥ 0.
Used to **prove a language is NOT regular** (pigeon-hole principle).

**PROOF TEMPLATE (memorise — fill the blanks):**
1. Assume L is regular; let p be the pumping length.
2. Choose a specific **w ∈ L** with \|w\| ≥ p (you pick it cleverly).
3. By the lemma w = xyz with \|xy\|≤p, \|y\|≥1. Since \|xy\|≤p, **y lies entirely in the first block**.
4. Pump: take i=2 (or i=0). Show xy²z ∉ L (count mismatch).
5. Contradiction ⇒ L is not regular. ∎

*Worked — L = {aⁿbⁿ : n≥0} not regular:* pick w = aᵖbᵖ. y is all a's (\|xy\|≤p). Then xy²z has more a's than b's ⇒ ∉ L. Contradiction. (Same idea kills aⁱbʲcᵏ, palindromes, {aⁱ : i=n²}, {aᵖ : p prime}.)

## 2.11 Closure Properties of Regular Languages (★★★★★ MCQ)

Regular languages are **closed under: union, intersection, complement, concatenation, Kleene star, reversal, homomorphism, difference.** ("Regular is closed under everything reasonable.")

## ★ Questions Asked Previously — Chapter 2
- **NFA → DFA (subset construction).** ★★★★★ (2011, 2012, 2014, 2015, 2016, 2017, 2019, 2023, 2022-23)
- **Design DFA/NFA for a given language** (ends 00, starts/ends 01, ends aaa, contains 1100/1010, ends 001). ★★★★★ (every year)
- **RE → FA / FA → RE (Arden).** ★★★★★ (2011, 2012, 2016, 2018-19, 2022-23)
- **DFA minimization / equivalent partitioning.** ★★★★★ (2006, 2008, 2015, 2016, 2018-19)
- **Pumping lemma — prove aⁿbⁿ / aⁱbʲcᵏ not regular.** ★★★★★ (2006, 2007, 2011, 2012, 2016, 2022-23)
- **Mealy↔Moore; Myhill-Nerode; right-invariance.** ★★★★☆ (2005, 2007, 2013, 2015)
- **Closure of regular sets; NFA→DFA max 2ⁿ; Arden R=Q+RP.** ★★★★★ (MCQ every year)

## ⏱ 5-Minute Revision Sheet — Chapter 2
- DFA δ:Q×Σ→Q (one state). NFA δ:Q×Σ→2^Q. ε-NFA adds ε. n-state NFA → ≤2ⁿ-state DFA.
- Subset construction: start ε-closure(q0); accept if block ∩ F ≠ ∅.
- Arden: **R=Q+RP ⇒ R=QP\***. Per-state eqns, start gets +ε, back-substitute.
- Minimize: P₀ = final / non-final; refine on same-block transitions; stop when stable.
- Myhill-Nerode index = #states of minimal DFA. Right-invariant: xRy ⇒ xzRyz.
- Pumping (regular): w=xyz, \|xy\|≤p, \|y\|≥1, xyⁱz∈L; pick w=aᵖbᵖ to break.
- Regular closed under ∪ ∩ ¬ · \* reversal. RE precedence \* > concat > +.
- Mealy: output on state+input (len = input). Moore: output on state (len = input+1).

---

# CHAPTER 3 — CONTEXT FREE LANGUAGES  ★★★★★

## 3.1 CFG — formal definition

**G = (V, T, P, S)**; every production is **A → α** where A∈V (single non-terminal), α∈(V∪T)\*. **L(G) = {w∈T\* : S ⇒\* w}** is a CFL.

- **Leftmost derivation (LMD):** always expand the leftmost variable. **Rightmost (RMD):** the rightmost.
- **Parse / derivation tree:** root S, internal nodes = variables, leaves (read L→R) = yield.
- **Ambiguous grammar:** some string has ≥2 parse trees (equivalently ≥2 LMDs). **Inherently ambiguous CFL:** *every* grammar for it is ambiguous (e.g. {aⁿbⁿcᵐdᵐ}∪{aⁿbᵐcᵐdⁿ}).

**Classic ambiguity example (★★★★☆):** E → E+E \| E\*E \| a is ambiguous (a+a\*a has two trees). **Unambiguous fix (precedence + associativity):**
```
E → E + T | T
T → T * F | F
F → ( E ) | a
```

## 3.2 CFG construction patterns (★★★★★ Group B/C)

| Language | Grammar |
|---|---|
| aⁿbⁿ, n≥0 | S → aSb \| ε |
| aⁿbⁿ, n≥1 | S → aSb \| ab |
| equal #a, #b | S → aSbS \| bSaS \| ε |
| palindromes over {0,1} | P → 0P0 \| 1P1 \| 0 \| 1 \| ε |
| wcwᴿ | S → aSa \| bSb \| c |
| aⁿbᵐ, n≠m | S → S₁ \| S₂; S₁→aS₁b\|aA, A→aA\|a (n>m); S₂→aS₂b\|Bb, B→bB\|b (n<m) |
| 0ⁱ1ʲ2ᵏ, i=j or j=k | S → AB \| C; A→0A\|0\|ε; B→1B2\|ε (the i=j part) and the j=k part symmetrically |

## 3.3 CFG Simplification (★★★★★) — order matters

**Always simplify in this order: (1) ε-productions → (2) unit productions → (3) useless symbols.**

- **Useless symbol:** **non-generating** (derives no terminal string) OR **non-reachable** (from S). Remove non-generating first, then non-reachable.
- **ε-production:** A→ε. Find **nullable** variables; for each production, add versions with nullable vars omitted (keep S→ε only if ε∈L).
- **Unit production:** A→B (both variables). For each unit pair (A,B) with B→α non-unit, add A→α; delete A→B.

*Worked (remove unit prods):* S→AB, A→a, B→C, C→D, D→b. C→D, D→b ⇒ C→b; B→C ⇒ B→b. Final (after dropping unreachable C): **S→AB, A→a, B→b**.

## 3.4 Chomsky Normal Form (CNF) — ALGORITHM ★★★★★

Target: every production is **A → BC** (two variables) or **A → a** (one terminal). (S→ε allowed if ε∈L.)
1. Add new start S₀→S (if S appears on some RHS).
2. Remove ε-productions, then unit productions, then useless symbols.
3. **TERM:** replace each terminal a inside a long RHS by a new variable Cₐ with Cₐ→a.
4. **BIN:** break each RHS of length >2 into a chain of binary productions (A→X₁X₂…Xₙ becomes A→X₁A₁, A₁→X₂A₂, …).

*Worked (PYQ 2023):* S→aSb \| ab \| Aa, A→aab ⇒ add Da→a, Db→b:
S → Da S Db, S → Da Db, S → A Da, A → Da X, X → Da Db (one valid CNF; binarise the length-3 RHS).

## 3.5 Greibach Normal Form (GNF) — ALGORITHM ★★★★☆

Target: every production **A → a A₁A₂…Aₙ** or **A → a** (starts with exactly one terminal, then variables only).
1. Convert to CNF; order variables A₁ < A₂ < … < Aₙ.
2. For i from 1: substitute so every Aᵢ→Aⱼ… has j>i. When Aᵢ→Aᵢ… (immediate left recursion), **remove left recursion** using a new Zᵢ.
3. Back-substitute from Aₙ down to A₁ (and into the Zᵢ) so every RHS begins with a terminal.

**Left-recursion removal rule (memorise):** A → Aα \| β  ⇒  A → βA′, A′ → αA′ \| ε.

*Worked sketch (PYQ 2012/2023):* A₁→A₂A₃, A₂→A₃A₁\|b, A₃→A₁A₂\|a. Substitute up the chain; the substitution into A₃ produces left recursion (A₃→A₃A₁A₃A₂\|…), removed via Z₃: A₃→aZ₃ \| bA₃A₂Z₃, Z₃→A₁A₃A₂Z₃ \| ε. Then back-substitute A₃ into A₂ and A₂ into A₁ until all RHS start with a terminal.

## 3.6 Pumping Lemma for CFL (★★★★☆)

**Statement:** If L is a CFL, ∃ p s.t. every z∈L with \|z\|≥p can be written **z = uvwxy** with (1) \|vwx\| ≤ p, (2) **vx ≠ ε** (\|vx\|≥1), (3) uvⁱwxⁱy ∈ L for all i ≥ 0.
*Use:* prove {aⁿbⁿcⁿ} or {ww} not context-free. Pick z=aᵖbᵖcᵖ; vwx spans at most two symbol-types, so pumping unbalances the third.

## 3.7 Closure Properties of CFLs (★★★★★ MCQ)

**Closed under:** union, concatenation, Kleene star, reversal, homomorphism, **intersection with a regular language**.
**NOT closed under:** **intersection** and **complementation**.
*Proof (not closed under ∩):* L₁={aⁿbⁿcᵐ}, L₂={aᵐbⁿcⁿ} are CFLs but L₁∩L₂ = {aⁿbⁿcⁿ} is not CF. (Then ¬ fails too, since L₁∩L₂ = ¬(¬L₁∪¬L₂).)
*CFL ∩ Regular = CFL* — proved by running the PDA and DFA in parallel (product construction).

## ★ Questions Asked Previously — Chapter 3
- **Convert CFG → CNF.** ★★★★★ (2006, 2007, 2010, 2013, 2019, 2023)
- **Convert CFG → GNF / remove left recursion.** ★★★★★ (2009, 2011, 2012, 2014, 2017, 2023)
- **Leftmost & rightmost derivation + parse tree** for a string. ★★★★★ (2006, 2009, 2011, 2015, 2016, 2019)
- **Remove unit / null / useless productions.** ★★★★★ (2017, 2018, 2023)
- **Prove grammar ambiguous (E→E+E\|E\*E\|a) & remove ambiguity.** ★★★★☆ (2008, 2018, 2019)
- **CFG for a given language** (aⁿbⁿcᵐ, n≠m, palindrome, 0ⁱ1ʲ2ᵏ). ★★★★★ (2008, 2012, 2013, 2014, 2017)
- **CFLs not closed under intersection/complement.** ★★★★☆ (2014, 2017; MCQ every year)

## ⏱ 5-Minute Revision Sheet — Chapter 3
- CFG: A→α, single NT on LHS. Ambiguous = some string has 2 parse trees.
- Simplify order: **ε → unit → useless**. Useless = non-generating + non-reachable.
- **CNF:** A→BC or A→a. Steps: start-var, ε, unit, useless, TERM, BIN.
- **GNF:** A→a·(variables). Order vars, kill left recursion (A→Aα\|β ⇒ A→βA′, A′→αA′\|ε), back-substitute.
- Pumping CFL: z=uvwxy, \|vwx\|≤p, vx≠ε, uvⁱwxⁱy∈L. Breaks aⁿbⁿcⁿ, ww.
- CFL closed: ∪, ·, \*, reversal, ∩-with-regular. NOT closed: ∩, complement.

---

# CHAPTER 4 — PUSHDOWN AUTOMATA  ★★★★☆

## 4.1 PDA — formal definition

**P = (Q, Σ, Γ, δ, q₀, Z₀, F)** (7-tuple):
- Q states, Σ input alphabet, **Γ stack alphabet**, q₀ start, **Z₀** initial stack symbol, F final states,
- **δ : Q × (Σ∪{ε}) × Γ → finite subsets of Q × Γ\*.**

A PDA = ε-NFA **+ a stack**. Each move: read input (or ε) and the top of stack, go to a new state, and replace the stack top by a string (push, pop, or leave). **Notation:** δ(q,a,X) = (p, γ) means "in state q, reading a with X on top, go to p and replace X by γ". **ID (instantaneous description):** (state, remaining input, stack); move = `⊢`.

PDA = machine for **Type-2 / CFL**.

## 4.2 Two acceptance modes (★★★★☆)

- **Final state:** L(P) = { w : (q₀,w,Z₀) ⊢\* (q,ε,γ), q∈F } (stack contents irrelevant).
- **Empty stack:** N(P) = { w : (q₀,w,Z₀) ⊢\* (q,ε,ε) } (state irrelevant).
- The two are equivalent in power (each convertible to the other).

**DPDA vs NPDA:** DPDA — δ has ≤1 choice, and if δ(q,a,X)≠∅ for a∈Σ then δ(q,ε,X)=∅. **NPDA is strictly more powerful than DPDA** (e.g. {wwᴿ} needs an NPDA; {wcwᴿ} is fine on a DPDA). PDA > FA in power.

## 4.3 PDA design (★★★★★ — Group B/C)

**Idea:** push to count/remember; pop to match. Use nondeterminism to "guess the middle".

**(a) Equal #a and #b** (single state, counter symbols 0 and 1):
δ(q0,a,Z)=(q0,0Z); δ(q0,b,Z)=(q0,1Z); δ(q0,a,0)=(q0,00); δ(q0,b,0)=(q0,ε); δ(q0,a,1)=(q0,ε); δ(q0,b,1)=(q0,11); δ(q0,ε,Z)=(qf,Z).

**(b) wwᴿ over {a,b} (empty stack, NPDA):** push w in q0; nondeterministically ε-switch to q1 at the middle; in q1 pop while input matches top; on Z go to qf.
```
push:  δ(q0,a,a)=(q0,aa)  δ(q0,b,a)=(q0,ba) … δ(q0,a,Z)=(q0,aZ)
guess: δ(q0,ε,a)=(q1,a)   δ(q0,ε,b)=(q1,b)
match: δ(q1,a,a)=(q1,ε)   δ(q1,b,b)=(q1,ε)
done:  δ(q1,ε,Z)=(q2,Z)
```

**(c) wcwᴿ** — same machine but the centre marker **c** triggers the switch deterministically (this is a DPDA).

**(d) aⁿbⁿcᵐ, n,m≥1:** push a's; pop on b's; then read c's without touching the stack; accept.

## 4.4 CFG → PDA (★★★★★)

Given a CFG (best in GNF), build a **one-state PDA** that simulates leftmost derivations on the stack:
- For each production **A → α**: δ(q, ε, A) = (q, α).
- For each terminal a: δ(q, a, a) = (q, ε) (match input against stack top).
- Start with S on the stack; accept by empty stack.

*Worked (already-GNF grammar S→aAB\|bBA, A→bS\|a, B→aS\|b):*
δ(q,a,S)=(q,AB); δ(q,b,S)=(q,BA); δ(q,a,A)=(q,ε); δ(q,b,A)=(q,S); δ(q,a,B)=(q,S); δ(q,b,B)=(q,ε). Trace strings with IDs to accept/reject.

**PDA → CFG** also exists (triple construction [qXp]); rarely asked at this level.

## 4.5 CFL ∩ Regular = CFL (proof, ★★★☆☆)
Run the PDA M₁ (for the CFL) and DFA M₂ (for the regular language) **in parallel**: states = Q₁×Q₂, accept iff both accept; the stack is M₁'s. Hence the intersection is accepted by a PDA ⇒ CFL.
**Ogden's lemma** (stronger pumping lemma for CFLs): mark p positions as "distinguished"; z=uvwxy with v,x covering ≥1 distinguished position, vwx ≤ p distinguished, uvⁱwxⁱy∈L. Used when ordinary CFL pumping is too weak.

## ★ Questions Asked Previously — Chapter 4
- **Define PDA / DPDA vs NPDA / block diagram.** ★★★★★ (2006, 2009–2012, 2014, 2018, 2023)
- **Design PDA: equal a&b, wwᴿ, wcwᴿ, aⁿbⁿcᵐ, palindromes.** ★★★★★ (2006–2019, 2022-23)
- **CFG → equivalent PDA + ID trace of a string.** ★★★★★ (2013, 2014, 2016, 2017, 2022-23)
- **Acceptance by empty stack vs final state.** ★★★★☆ (2013, 2017, 2018)
- **CFLs not closed under ∩/¬; CFL∩Regular=CFL; Ogden's lemma.** ★★★★☆ (2008, 2010, 2013, 2016, 2019)
- **Pumping lemma RL & CFL + prove aⁿbⁿ not regular.** ★★★★★ (2023, 2022-23 Group C)

## ⏱ 5-Minute Revision Sheet — Chapter 4
- PDA = (Q,Σ,Γ,δ,q0,Z0,F), δ:Q×(Σ∪ε)×Γ→2^(Q×Γ\*). PDA = FA + stack = CFL machine.
- Accept by final state OR empty stack (equivalent).
- NPDA > DPDA. {wwᴿ} needs NPDA; {wcwᴿ} ok on DPDA.
- Design: push to count, pop to match, guess middle by an ε-move.
- CFG→PDA (1 state): A→α gives δ(q,ε,A)=(q,α); terminal a gives δ(q,a,a)=(q,ε); start S, accept by empty stack.

---

# CHAPTER 5 — CONTEXT SENSITIVE LANGUAGES  ★★☆☆☆

## 5.1 Context-Sensitive Grammar (CSG)

**G = (N, Σ, P, S)**; rules **αAβ → αγβ** with A∈N, α,β∈(N∪Σ)\*, γ∈(N∪Σ)⁺ (non-empty). Equivalently **non-contracting**: \|LHS\| ≤ \|RHS\| for every rule. S→ε allowed only if S never appears on any RHS.
The "context" α…β decides whether A may become γ — hence *context-sensitive*.

## 5.2 Linear Bounded Automaton (LBA)

A **non-deterministic TM whose tape is bounded to the input length** (between left marker ¢ and right marker $); the head cannot move outside the markers or overwrite them. **CSL ⇔ language accepted by an LBA.**
- **L = {aⁿbⁿcⁿ : n≥1}** and **{0ⁿ1ⁿ2ⁿ}** are the canonical CSL-but-not-CFL examples (MCQ).

## 5.3 Properties (MCQ)
- CSLs are closed under **union, intersection, concatenation, complement**.
- Every CFL is a CSL. Every CSL is recursive (decidable).

**Proof idea — every CSL is recursive:** simulate derivations; because rules are non-contracting, intermediate strings never exceed \|input\|, so only finitely many strings of bounded length exist — the machine either reaches the input (accept), exceeds its length (crash), or repeats a string (crash). Hence it always halts ⇒ decidable.

## ★ Questions Asked Previously — Chapter 5
- **aⁿbⁿcⁿ / 0ⁿ1ⁿ2ⁿ is CSL not CFL.** ★★★★☆ (MCQ, Model + 2013)
- **Accepting machine for CSL = LBA.** ★★★★☆ (MCQ)
- **Define CSG; properties; CSG (not CF) example; every CSL is recursive.** ★★☆☆☆ (Model)
- **Derive the sentence from a given CSG** (e.g. S→ABCc\|Abc, BA→AB… ⇒ abc). ★★★☆☆ (2023 MCQ)

## ⏱ 5-Minute Revision Sheet — Chapter 5
- CSG: αAβ→αγβ, non-contracting (\|LHS\|≤\|RHS\|). Type-1. Machine = **LBA** (bounded NTM).
- Canonical CSL: aⁿbⁿcⁿ, 0ⁿ1ⁿ2ⁿ (not CFL). CSL closed under ∪ ∩ · ¬. CFL⊂CSL⊂Recursive.

---

# CHAPTER 6 — TURING MACHINE & UNDECIDABILITY  ★★★★☆

## 6.1 Turing Machine — formal definition

**M = (Q, Σ, Γ, δ, q₀, b, F)** (7-tuple):
- Q states, Γ tape alphabet, **b∈Γ blank**, Σ⊆Γ−{b} input alphabet,
- **δ : Q × Γ → Q × Γ × {L,R}** (read symbol, write symbol, move head L/R),
- q₀ start, F accepting/halting states.

TM is the most powerful model — recognises Type-0 / r.e. languages. **Configuration / ID** = (left tape, state, right tape).

## 6.2 Recognise vs Decide (★★★★☆)

- **Turing-recognisable (r.e.):** TM halts-accept on w∈L; on w∉L it may reject **or loop**.
- **Turing-decidable (recursive):** TM halts on **every** input (accept on w∈L, reject on w∉L).
- **Decidable ⊂ Recognisable.** L decidable ⇔ both L and L̄ are recognisable.

## 6.3 TM design (★★★★☆ — Group C)

ASCII transition convention: `read/write,move`.

**(a) aⁿbⁿ, n≥1 (mark-and-match):** mark the first a as X, move right to the first b, mark it Y, move left to X, repeat; accept when no a's and only Y's remain.
```
q0: a/X,R -> q1 ;  q0: Y/Y,R -> q3 (check tail)
q1: a/a,R, Y/Y,R (skip) ; q1: b/Y,L -> q2
q2: Y/Y,L, a/a,L (skip back) ; q2: X/X,R -> q0
q3: Y/Y,R ; q3: B/B,R -> ((q_accept))
```

**(b) even #0 and even #1:** 4 states tracking parity (ee, eo, oe, oo); accept only in the (even,even) state at blank.

**(c) contains "aba" as substring:** q0 --a--> q1 --b--> q2 --a--> ((H)); mismatches fall back appropriately; loop on other symbols until pattern seen.

**(d) even length over {a,b}:** toggle between q0 (even) and q1 (odd) on each symbol; accept at blank only from q0.

**(e) addition 0ᵐ10ⁿ → 0^(m+n):** replace the separating 1 by 0, then delete the last 0. **Multiplication 0ᵐ10ⁿ:** copy the block of n 0's m times (using a subroutine).

## 6.4 TM variants (★★★☆☆)
- **Multi-tape TM:** k tapes, each with its own head; δ:Q×Γᵏ→(Γ×{L,R,S})ᵏ. **Same power** as single-tape (only polynomial slowdown).
- **Multi-head, multi-track, non-deterministic** TMs — all equivalent in power to the basic TM.
- **Universal TM (UTM):** takes ⟨M⟩ (encoding of a TM) and w, and simulates M on w. This is the "stored-program" idea. A_TM = {⟨M,w⟩ : M accepts w} is r.e. but **not decidable**.

## 6.5 Church–Turing Thesis
Anything **effectively computable by an algorithm is computable by a Turing machine** (and vice versa). No machine model is strictly more powerful than a TM. (Not provable — it is a thesis. Weak form: a TM can compute anything a digital computer can.)

## 6.6 Halting Problem — undecidable (★★★★★ — the marquee proof)

**Statement:** There is no TM `Halt(M,w)` that decides, for every TM M and input w, whether M halts on w.

**PROOF (diagonalisation, memorise the shape):**
1. Assume a decider **H(M,w)** exists: outputs "halt" or "loop".
2. Build **D(M):** run H(M,⟨M⟩); if H says "halt" then **loop forever**, else **halt**.
3. Run D on its own encoding ⟨D⟩:
   - If D(⟨D⟩) halts ⇒ H said D loops ⇒ contradiction.
   - If D(⟨D⟩) loops ⇒ H said D halts ⇒ contradiction.
4. Contradiction either way ⇒ H cannot exist ⇒ the Halting Problem is **undecidable**. ∎

## 6.7 Rice's Theorem & other undecidable problems (★★★☆☆)
**Rice's theorem:** every **non-trivial semantic property** of the language of a TM (a property that depends only on L(M) and that some r.e. languages have and others don't) is **undecidable**.
Undecidable problems to quote: Halting problem; membership in an r.e. language; emptiness/equivalence of TMs; **ambiguity of a CFG**; equivalence of two CFGs `L(G₁)=L(G₂)`; Post Correspondence Problem (PCP).
(MCQ trap: equivalence of two *regular* grammars **is decidable** — that is the "false statement" option.)

## ★ Questions Asked Previously — Chapter 6
- **Halting problem — what is it / prove undecidable.** ★★★★★ (2008, 2013, 2014, 2015, 2016, 2019)
- **Design TM** (aⁿbⁿ, even 0's & 1's, even length, contains "aba", add/multiply). ★★★★☆ (2011, 2013, 2014, 2015, 2016, 2017)
- **Define TM / types of TM / Universal TM / Church's hypothesis.** ★★★★☆ (2015, 2018, 2019)
- **Multi-tape & multi-head TM short note.** ★★★☆☆ (2014, 2017)
- **Decidable vs recognisable; recursive vs r.e.; LBA relation.** ★★★☆☆ (Model, 2018-19 MCQ)

## ⏱ 5-Minute Revision Sheet — Chapter 6
- TM = (Q,Σ,Γ,δ,q0,b,F), δ:Q×Γ→Q×Γ×{L,R}. Type-0 / r.e.
- Decidable (always halts) ⊂ Recognisable (may loop on non-members). L decidable ⇔ L and L̄ both r.e.
- LBA = tape-bounded NTM = CSL machine.
- Variants (multi-tape/head/NDTM) = same power. UTM simulates any M on w. Church–Turing: algorithm ⇔ TM.
- **Halting problem undecidable** (diagonalisation: D loops iff it halts). Rice: any non-trivial property of L(M) is undecidable. CFG ambiguity & CFG equivalence undecidable; regular-grammar equivalence decidable.

---

## 🎯 EXAM PREDICTION (ranked, for 02 Jul 2026)

**Group C (15-mark) — most probable, prepare these cold:**
1. **NFA → DFA** (subset construction) + **RE via Arden** + **DFA minimization** — almost certain, Ch 2. ★★★★★
2. **CFG → CNF** and/or **CFG → GNF** (with left-recursion removal) — Ch 3. ★★★★★
3. **PDA design** (equal a&b / wwᴿ / wcwᴿ / aⁿbⁿcᵐ) + **CFG→PDA with ID trace** — Ch 4. ★★★★★
4. **Pumping lemma (RL & CFL)** state both + **prove aⁿbⁿ not regular** — Ch 2/3/4. ★★★★★
5. **TM design** (aⁿbⁿ / aba-substring / even-length) + **Halting-problem undecidability proof** + TM variants — Ch 6. ★★★★☆
6. **Leftmost/rightmost derivation + parse tree + ambiguity** (E→E+E\|E\*E) — Ch 3. ★★★★☆
7. **Incompletely-specified machine minimization** (merger graph) / Mealy↔Moore — Ch 1/2. ★★★☆☆

**Group B (5-mark) — most probable:**
- Design DFA (ends 00 / starts-or-ends 01 / ends 001). ★★★★★
- RE for a given language / NFA for a RE (e.g. (0+1)\*00(0+1)\*). ★★★★★
- Remove unit + null + useless productions. ★★★★★
- PDA for wcwᴿ. ★★★★☆
- State Myhill-Nerode / DFA vs NFA / Kleene vs positive closure. ★★★★☆

**Group A (1-mark) — bankable answers:**
- NFA→DFA max = **2ⁿ** · Arden **R=Q+RP ⇒ R=QP\*** · pumping = **pigeon-hole** · FSM recognises **regular** · CFL not closed under **intersection/complement** · CSL machine = **LBA** · aⁿbⁿcⁿ = **CSL** · PDA = **Type-2** · Mealy depends on state+input, Moore on state only · regular closed under **union/concat/Kleene** · type of S→aSbb = **Type-2** · #strings length-4 distinct in S\* = **360 [as printed]** · LR(0) item = production with a dot.

*Sources note:* Chapter content and all PYQ tags verified against the scanned MAKAUT/WBUT organizer (Popular Publications, FLAT chapters 1–6) and the 2018-19 (CS-402) and 2022-23 (PCC-CS403, UPID 004423) question papers. Items flagged **[as printed]** keep the source's printed answer even where standard theory differs.
