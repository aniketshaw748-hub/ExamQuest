# DISCRETE MATHEMATICS — MASTER NOTE (Topper's Edition)

| | |
|---|---|
| **Subject** | Discrete Mathematics |
| **Code** | PCC-CS401 (old code CS-503) |
| **Branch / Year** | B.Tech CSE, 2nd Year |
| **Exam Date** | **Saturday, 27 June 2026** |
| **University** | MAKAUT (Maulana Abul Kalam Azad University of Technology, WB) |
| **Duration / Marks** | 3 hours / **70 marks** |
| **Target** | 9+ SGPA |

### Paper Pattern (MAKAUT)
| Group | Type | Count | Marks each | Total | Choice |
|---|---|---|---|---|---|
| **A** | MCQ / very-short | answer **10 of 12** | 1 | **10** | yes |
| **B** | Short answer | answer **3 of 5** | 5 | **15** | yes |
| **C** | Long answer | answer **3 of 5** | 15 | **45** | yes |

> **Marks-strategy:** Group C carries 45 marks and you only attempt 3 of 5. If you master **Set/POSET-Lattice, Counting (Pigeonhole + Inclusion–Exclusion + recurrence/generating fn), Logic (PDNF/PCNF, validity), and Graphs (chromatic polynomial + Euler's formula)** you can already pick 3 strong long answers every single year. These four blocks + Number theory (gcd/congruence) + Induction cover ~95% of the paper.

---

## CHAPTER-WISE PROBABILITY / WEIGHTAGE MAP

Built from PYQs 2012–2019 (CS-503) + 2022-23 (PCC-CS401). ★★★★★ = appears almost every year.

| # | Chapter | Group A | Group B | Group C | Overall weight | Verdict |
|---|---|---|---|---|---|---|
| 1 | Set, Relation, Function (+ POSET, Lattice, Hasse, countability) | ★★★★★ | ★★★★☆ | ★★★★★ | **Very High** | Must-do |
| 2 | Mathematical Induction + Number Theory (gcd, congruence, division algo) | ★★★★★ | ★★★★★ | ★★★★☆ | **Very High** | Must-do |
| 3 | Counting (P&C, Pigeonhole, Incl–Excl, Recurrence, Generating fn) | ★★★★☆ | ★★★★☆ | ★★★★★ | **Very High** | Must-do |
| 4 | Propositional & Predicate Logic (truth tables, PDNF/PCNF, validity, quantifiers) | ★★★★★ | ★★★★☆ | ★★★★★ | **Very High** | Must-do |
| 5 | Algebraic Structures (group, ring, field, homomorphism) | ★★☆☆☆ | ★★☆☆☆ | ★★☆☆☆ | **Medium-Low** | Safety net |
| 6 | Graph & Tree (chromatic poly, Euler, isomorphism, trees, MST, bipartite) | ★★★★★ | ★★★☆☆ | ★★★★★ | **Very High** | Must-do |

> **Note on syllabus drift:** Old CS-503 papers heavily feature **POSET/Lattice, recurrence relations, generating functions, SDR/Hall's matching**. The current PCC-CS401 (2022-23) paper kept Set/Relation/Logic/Counting/Graph but leaned lighter on lattices and added basic **probability** flavour (balls, speakers) and direct definitions. **Prepare both** — examiners recycle the CS-503 bank.

---
---

# CHAPTER 1 — SET, RELATION & FUNCTION

## 1.1 Sets — core theory
- **Set:** well-defined collection of distinct objects.
- **Subset:** A ⊆ B if every element of A is in B. **Power set** P(S) = set of all subsets. **|P(S)| = 2ⁿ** for |S|=n.
- **Cartesian product:** A×B = {(a,b) : a∈A, b∈B}. |A×B| = |A|·|B|.

### Key set operations & laws
| Operation | Definition |
|---|---|
| Union A∪B | x∈A or x∈B |
| Intersection A∩B | x∈A and x∈B |
| Difference A−B | x∈A and x∉B |
| Symmetric diff A△B | (A∪B)−(A∩B) = (A−B)∪(B−A) |
| Complement A′ | U−A |

**De Morgan:** (A∪B)′ = A′∩B′ ; (A∩B)′ = A′∪B′
**Distributive:** A∩(B∪C) = (A∩B)∪(A∩C)
**Absorption:** A∪(A∩B)=A ; A∩(A∪B)=A

**Counts:** Relations from A(m) to B(n): subsets of A×B ⇒ **2^(mn)**. Binary relations on n-set: **2^(n²)**.
Reflexive relations on n-set: **2^(n²−n)**. Functions A→B (|A|=m,|B|=n): **nᵐ**.

### Worked proof — Inclusion–Exclusion for 2 sets (★ PYQ 2012)
**|A∪B| = |A| + |B| − |A∩B|.**
A∪B splits into disjoint parts A∩B′, A∩B, B∩A′.
n(A)=n(A∩B′)+n(A∩B); n(B)=n(A∩B)+n(B∩A′).
n(A∪B)=n(A∩B′)+n(A∩B)+n(B∩A′)=n(A)+n(B)−n(A∩B). ∎

**3-set version:** |A∪B∪C| = |A|+|B|+|C| − |A∩B| − |B∩C| − |C∩A| + |A∩B∩C|.

### Survey / Venn numericals (★★★★ — appears repeatedly)
**Trick:** "do not / none" = Total − |A∪B∪C|. "Exactly one X" = |X| − (its two pairwise) + triple.
*Example (smoking):* A=55,B=50,C=42, AB=28,AC=20,BC=12, ABC=10 ⇒ ∪=97 ⇒ 3% smoke none.

## 1.2 Relations — types
- **Reflexive:** aRa ∀a. **Symmetric:** aRb⇒bRa. **Antisymmetric:** aRb∧bRa⇒a=b. **Transitive:** aRb∧bRc⇒aRc.
- **Equivalence relation = Reflexive + Symmetric + Transitive.** Partitions the set into disjoint **equivalence classes**.
- **Partial order (POSET) = Reflexive + Antisymmetric + Transitive.**

**Memory trick:** Equivalence = **R-S-T** (Reflexive, Symmetric, Transitive). POSET = **R-A-T** (Reflexive, Antisymmetric, Transitive).

**Congruence mod m is an equivalence relation** (proof: x−x=0 ⇒ refl; x−y div m ⇒ y−x div m ⇒ symm; transitive by adding). ★ PYQ.

## 1.3 POSET, Lattice, Hasse Diagram (★★★★★ Group C in CS-503)
- **(N, |)** (divisibility) and **(P(S), ⊆)** are the two standard posets.
- **Hasse diagram:** draw the poset removing self-loops, transitive edges; direction upward = "greater".
- **Maximal:** no element above it. **Minimal:** no element below. **Greatest (1):** ≥ all. **Least (0):** ≤ all.
- **glb (infimum, ∧)** = meet; **lub (supremum, ∨)** = join.
- **Lattice:** a poset in which **every pair has both a glb and an lub**.
- **Distributive lattice:** a∧(b∨c)=(a∧b)∨(a∧c).
- **Complemented lattice:** every element has a complement (a∧a′=0, a∨a′=1).
- **Boolean algebra = complemented + distributive lattice** (e.g. (P(S),⊆)).

**Lattice identities (PYQ 2019 Group C):** In a lattice, **a ≤ b ⇔ a∧b = a ⇔ a∨b = b**.
**De Morgan in complemented distributive lattice (PYQ 2015/2019):** (a∧b)′ = a′∨b′ , (a∨b)′ = a′∧b′.

> **WORKED Hasse (PYQ 2019):** S = {1,2,3,4,6,9,12,18,36}, relation |.
> Level by divisibility: 1 at bottom; 2,3 above 1; 4,6,9 next; 12,18 next; 36 at top.
> **Least=1, Greatest=36, Minimal=1, Maximal=36.** For {6,18}: glb(inf)=6, lub(sup)=18. For {4,6,9}: glb=1, lub=36.

> **(N, |) min/max (PYQ 2019 MCQ):** has **1 minimal (the element 1)** and **0 maximal** (no largest natural number).

## 1.4 Functions
- **Function f:A→B:** every a∈A maps to exactly one b∈B.
- **Injective (one-one):** f(a₁)=f(a₂)⇒a₁=a₂. **Surjective (onto):** range=co-domain. **Bijective:** both.
- **Inverse function f⁻¹** exists ⇔ f is bijective. To find: write y=f(x), solve x in terms of y, swap.
- f(x)=|x| on ℤ is **not one-one** (f(2)=f(−2)). f(x)=2x−3 is one-one. ★ PYQ.

## 1.5 Countability (★★★ — CS-503 Group B/C)
- **Countable:** finite or in bijection with ℕ. ℤ, ℚ, ℕ×ℕ are **countably infinite**.
- **(0,1] is uncountable** — **Cantor's diagonal argument**: assume a listing f(1),f(2),… ; build x differing from f(n) in its nth digit ⇒ x not in list ⇒ contradiction.
- **Cantor's theorem:** card A ≠ card 2^A (power set strictly bigger).
- **Schröder–Bernstein:** injections both ways ⇒ bijection ⇒ same cardinality.

### Equivalences worth knowing
A−(B−C) = (A−B)∪(A∩C); (A×B)∩(C×D) = (A∩C)×(B∩D). (Prove by element-chasing — standard Group B.)

> **Questions Asked Previously (Ch.1):**
> - Draw Hasse diagram of (P(S),⊆) / (D(24),|) / S={1,2,3,…,36}; find min/max/greatest/least, glb/lub ★★★★★
> - Survey/Venn (smoke, languages, tea-milk-coffee); inclusion–exclusion numericals ★★★★★
> - Show (N,|) / (a|b on ℕ) is a poset ★★★★
> - Prove lattice identities a≤b⇔a∧b=a; (a∧b)′=a′∨b′ in complemented distributive lattice ★★★★
> - Inverse of a function; one-one/onto of f(x)=2x−3, |x| ★★★
> - Prove (A∪B)∩C=(A∩C)∪(B∩C); A−(B−C)=(A−B)∪(A∩C) ★★★
> - Countability of ℚ / uncountability of (0,1] / Cantor's diagonal argument ★★★
> - |A∪B|=|A|+|B|−|A∩B| proof ★★★

## ⏱ 5-MINUTE REVISION SHEET — Chapter 1
- |P(S)|=2ⁿ ; |A×B|=mn ; relations=2^(mn) ; binary rel on n-set=2^(n²) ; reflexive=2^(n²−n) ; functions=nᵐ
- Equivalence=Refl+Symm+Trans → classes. POSET=Refl+Antisymm+Trans.
- Lattice = every pair has glb & lub. Boolean = complemented+distributive.
- a≤b ⇔ a∧b=a ⇔ a∨b=b. (a∧b)′=a′∨b′.
- Incl–Excl 3-set: Σ singles − Σ pairs + triple. "None"=Total−∪.
- ℚ countable; (0,1] uncountable (diagonal). Cantor: |A|<|2^A|.
- **Most-likely:** Hasse diagram problem (15m) + a survey numerical (5m).

---
---

# CHAPTER 2 — MATHEMATICAL INDUCTION & NUMBER THEORY

## 2.1 Principle of Mathematical Induction (PMI)
**Steps:** (1) **Base:** prove P(1) [or P(0)] true. (2) **Inductive hypothesis:** assume P(k). (3) **Inductive step:** prove P(k+1) using P(k). Conclude ∀n.

### Standard summation proofs
- 1+2+…+n = n(n+1)/2
- 1+3+5+…+(2n−1) = n²
- 1²+2²+…+n² = n(n+1)(2n+1)/6
- 1³+2³+…+n³ = [n(n+1)/2]²

### Divisibility-by-induction (★★★★★ Group C every year)
**Template:** Let P(n)=expression. Show P(0)/P(1) divisible. Assume P(m)=d·k. Write P(m+1) = (multiplier)·P(m) + d·(something) ⇒ divisible.

**WORKED (PYQ 2013): 6ⁿ⁺² + 7^(2n+1) divisible by 43.**
P(0)=36+7=43 ✓. Assume P(m)=43k.
P(m+1)=6·6^(m+2)+49·7^(2m+1)=6{6^(m+2)+7^(2m+1)}+43·7^(2m+1)=6·43k+43·7^(2m+1)=43(6k+7^(2m+1)). ∎

**Other PYQ induction targets:** n²+n is even (2022-23); 2ⁿ+4 div by 2; 6ⁿ+4 div by 5; A∩(B₁∪…∪Bₙ)=∪(A∩Bᵢ).

## 2.2 Number Theory toolkit

### Division Algorithm (★★★ — state & prove via well-ordering)
For a∈ℤ, b>0, ∃ **unique** q,r with **a=bq+r, 0≤r<b**.
*Proof:* S={a−tb≥0} non-empty subset of ℕ; by well-ordering has least element r; show r<b (else r−b∈S smaller). Uniqueness by subtracting two representations.

### Well-Ordering Principle
Every non-empty subset of ℕ has a least (first) element.

### GCD & Euclidean Algorithm (★★★★★ — appears almost every year)
**Euclid:** gcd(m,n)=gcd(n, m mod n), until remainder 0.
**Bézout / Extended Euclid:** gcd(a,b)=au+bv. Find u,v by back-substitution.

**WORKED (PYQ 2014/2017/2019): gcd(272,119)=272u+119v.**
272=2·119+34; 119=3·34+17; 34=2·17 ⇒ gcd=17.
17=119−3·34=119−3(272−2·119)=7·119−3·272 ⇒ **u=−3, v=7.**

**WORKED: gcd(595,252)=7 = 26·252 − 11·595.** (back-substitute the Euclid chain.)

### gcd facts (Group A MCQs)
- gcd(ka,kb)=k·gcd(a,b)
- gcd(a,a+2): for any integer = 1 or 2 ⇒ "none of these" in MCQ; **for odd n, gcd(3n,3n+2)=1**.
- **gcd(2a+1, 9a+4)=1** (a common divisor d | (2a+1) and (9a+4) ⇒ d | 2(9a+4)−9(2a+1)=−1 ⇒ d=1).
- Two consecutive integers are coprime (gcd(n,n+1)=1).
- If gcd(a,b)=1 ⇒ gcd(a²,b²)=1.

### Congruence (★★★★ — "use theory of congruence to prove…")
a≡b (mod m) ⇔ m | (a−b). Add/multiply congruences freely.
**WORKED (PYQ 2016/2019): 17 | (2^(3n+1) + 3·5^(2n+1)).**
2^(3n+1)=2·8ⁿ ; 3·5^(2n+1)=15·25ⁿ=(17−2)25ⁿ.
Sum=17·25ⁿ − 2(25ⁿ−8ⁿ); both terms ≡0 (mod17) since 25≡8 (mod17). ∎

**WORKED (PYQ 2019): 7 | (2^(5n+3)+5^(2n+3))** — same technique (32≡4, 25≡4 mod 7).

### Linear congruence ax≡b (mod m)
Solvable ⇔ d=gcd(a,m) divides b, then **d solutions**: x₀, x₀+m/d, …, x₀+(d−1)m/d.
**WORKED: 6x≡3 (mod 9):** gcd(6,9)=3|3 ⇒ 3 solutions ⇒ reduce to 2x≡1(mod3) ⇒ x≡−1 ⇒ **x=−1,2,5 (mod 9)**.

### Theorems to quote
- **Fundamental Theorem of Arithmetic:** every n>1 = unique product of primes (proof by strong induction).
- **Euclid's Lemma:** p prime, p|ab ⇒ p|a or p|b.
- **Infinitude of primes:** assume finite p₁…pₙ; p₁…pₙ+1 not divisible by any ⇒ contradiction.
- **Fermat:** aᵖ≡a (mod p). **Wilson:** (p−1)!≡−1 (mod p).
- **Square forms (PYQ 2017):** every integer square is of form 5k, 5k+1, or 5k+4 (check x=5q, 5q±1, 5q±2).

> **Questions Asked Previously (Ch.2):**
> - Induction: prove expression divisible by k (6ⁿ⁺²+7^(2n+1)/43; n²+n even) ★★★★★
> - gcd by Euclid + express as au+bv (272&119, 595&252, 512&320, 72&120, 63&55) ★★★★★
> - Use congruence to prove 17|… , 7|… ★★★★
> - State & prove Division Algorithm / Well-ordering ★★★
> - Solve linear congruence ax≡b(mod m) ★★★
> - State & prove Fundamental Theorem of Arithmetic; infinitude of primes ★★★
> - gcd MCQs (gcd(2a+1,9a+4)=1, divisibility of big numbers, #divisors of 252) ★★★★

## ⏱ 5-MINUTE REVISION SHEET — Chapter 2
- PMI: Base → assume P(k) → prove P(k+1).
- Divisibility trick: P(m+1)=mult·P(m)+k·(term).
- Euclid: gcd(m,n)=gcd(n,m mod n); back-substitute for au+bv.
- Division algo: a=bq+r, 0≤r<b (prove via well-ordering).
- ax≡b(mod m): solvable iff gcd(a,m)|b → gcd(a,m) solutions.
- Congruence-divisibility: rewrite bases mod m (25≡8 mod17 etc.).
- FTA, Euclid's lemma, ∞ primes, Fermat aᵖ≡a.
- **Most-likely:** one induction-divisibility (15m) + one gcd-Bézout (5m).

---
---

# CHAPTER 3 — BASIC COUNTING TECHNIQUES

## 3.1 Fundamental principles
- **Addition (OR, disjoint):** n+m ways.
- **Multiplication (AND, independent steps):** n×m ways.

## 3.2 Permutations & Combinations
- **Permutation** (order matters): P(n,r)=n!/(n−r)!. **0!=1.**
- **Combination** (order ignored): C(n,r)=n!/[r!(n−r)!] = P(n,r)/r!.
- **Circular permutation** of n objects: **(n−1)!**. Necklace/bracelet (reflection counts as same): **(n−1)!/2**.
  *7 beads necklace = 6!/2 = 360.*
- **Pascal's identity:** C(n,r)=C(n−1,r)+C(n−1,r−1). (Prove by combining the two fractions — ★ PYQ 2013/2019.)

### Stars-and-bars (★★★★ — "non-negative integral solutions")
Number of non-negative integer solutions of x₁+…+xₖ = n is **C(n+k−1, k−1)**.
*x+y+z=17 ⇒ C(19,2)=171.* *x₁+x₂+x₃+x₄=20 ⇒ C(23,3)=1771.* *x+y+z=18 ⇒ C(20,2)=190.*

### Quick MCQ facts
- Functions from m-set to n-set: nᵐ. (10→15 set ⇒ 15¹⁰)
- 5 letters into 3 boxes: 3⁵=243.
- Chords of 12 points intersecting (no 3 concurrent): C(12,4).
- 7 women+3 men with men together: treat 3 men as 1 block ⇒ 8!·3! (source prints 7!·3!).
- Even sum with 2 indistinguishable dice: 18 ways (printed key).

## 3.3 Pigeonhole Principle (★★★★★ — Group B & C every year)
- **Simple:** n+1 pigeons into n holes ⇒ some hole has ≥2.
- **Generalized:** N objects in k boxes ⇒ some box has ≥ ⌈N/k⌉.
  Stated as: kn+1 pigeons in n holes ⇒ some hole has ≥k+1.

**Proof of generalized (★ PYQ 2018/2019):** if every box ≤⌈N/k⌉−1, total < N — contradiction.

### Classic PHP problems
- **Difference divisible by 11:** consider 11 residue classes [0]…[10]; choose 12 numbers ⇒ two share a class ⇒ difference div by 11. *(2019: "select 20 numbers" — even easier, 12 already suffice.)*
- **Same colour balls:** holes=colours(5), want 12 same ⇒ k=11 ⇒ 5·11+1=**56 balls**.
- **Born same month:** 12 months; want 6 same ⇒ 5·12+1=**61** (want 4 ⇒ 3·12+1=37).
- **5 numbers from 1–8 sum to 9:** pair {1,8}{2,7}{3,6}{4,5} = 4 holes, 5 picks ⇒ two in a pair ⇒ sum 9.
- **Subsequence sum divisible by n:** partial sums b₀…bₙ, n+1 sums, n residues ⇒ two equal ⇒ difference (a subsequence) divisible by n.
- **6 people 3 mutual friends/enemies:** Ramsey R(3,3)=6.

## 3.4 Inclusion–Exclusion (★★★★★)
**WORKED (PYQ 2017/2019): integers 1–1000 divisible by ≥1 of 2,3,7.**
n(2)=500, n(3)=333, n(7)=142; n(6)=166, n(21)=47, n(14)=71; n(42)=23.
∪=500+333+142−166−47−71+23=**714.** (Not divisible = 1000−714=286.)

**WORKED (PYQ 2014/2019): 1–1000 neither perfect square nor cube.**
squares=31, cubes=10, both(6th powers)=3 ⇒ 1000−(31+10−3)=**962.** (For 1–10000: squares=100, cubes=21, sixth=4 ⇒ 10000−117=9883.)

## 3.5 Recurrence Relations (★★★★ — CS-503 Group C)
**Linear homogeneous, constant coeff:** form characteristic equation, solve roots.
- aₙ = c₁aₙ₋₁+c₂aₙ₋₂ → x²=c₁x+c₂.
- Distinct roots r₁,r₂: aₙ = A r₁ⁿ + B r₂ⁿ.
- Repeated root r: aₙ = (A+Bn)rⁿ.
- **Particular solution** for non-homogeneous RHS: for k·sⁿ try Csⁿ (if s is a root, multiply by n).

**WORKED (characteristic root, PYQ 2019): aₙ−3aₙ₋₁+2aₙ₋₂ = n·3ⁿ, a₀=1,a₁=6.**
Homog: x²−3x+2=0 ⇒ x=1,2 ⇒ aₙ^(h)=A+B·2ⁿ. Particular for n·3ⁿ: try (an+b)3ⁿ; substitute, solve a,b; add, fix A,B from initial conditions.

**Simple ones:** Sₙ=2Sₙ₋₁, S₀=1 ⇒ **Sₙ=2ⁿ**. aₙ=2aₙ₋₁+1, a₀=0 ⇒ **2ⁿ−1**.

## 3.6 Generating Functions (★★★★ — CS-503 Group C)
G(x)=Σ aᵣ xʳ. Key closed forms:
- 1/(1−x) = Σ xʳ
- 1/(1−x)² = Σ (r+1)xʳ
- 1/(1−ax) = Σ aʳ xʳ → sequence {aʳ}
- 2/(1−x)³ = Σ r(r+1)x^(r−1)

**WORKED (PYQ 2014): fᵣ = r(r+1)/2 ⇒ generating function = x/(1−x)³.**

**Solving recurrence by GF (PYQ 2017/2019):** multiply recurrence by xⁿ, sum, express G(x) as a rational function, partial-fraction, read coefficients.
*y_{n+2}−5y_{n+1}+6yₙ=0, y₀=1,y₁=0:* roots 2,3 ⇒ yₙ=A2ⁿ+B3ⁿ ⇒ A+B=1, 2A+3B=0 ⇒ A=3,B=−2 ⇒ **yₙ=3·2ⁿ−2·3ⁿ**.

> **Questions Asked Previously (Ch.3):**
> - Pigeonhole: state + prove generalized; difference div by 11; balls/colour (56); born same month ★★★★★
> - Inclusion–Exclusion: 1–1000 div by 2,3,7 (714); neither square nor cube (962); languages survey ★★★★★
> - Non-negative integral solutions x+y+z=18 / x₁+…+x₄=20 (stars & bars) ★★★★
> - Recurrence via characteristic root (aₙ−3aₙ₋₁+2aₙ₋₂=n3ⁿ) ★★★★
> - Recurrence/difference eqn via generating function (y_{n+2}−5y_{n+1}+6yₙ=0; y_{n+4}−yₙ=2ⁿ) ★★★★
> - Pascal's identity proof ★★★
> - Closed form of generating function for fᵣ ★★★
> - Necklace/circular arrangements; functions count MCQs ★★★

## ⏱ 5-MINUTE REVISION SHEET — Chapter 3
- P(n,r)=n!/(n−r)! ; C(n,r)=n!/[r!(n−r)!] ; circular=(n−1)! ; necklace=(n−1)!/2.
- Non-neg solutions of Σxᵢ=n in k vars = C(n+k−1, k−1).
- PHP generalized: ≥⌈N/k⌉; kn+1 in n holes ⇒ ≥k+1. Difference÷11 ⇒ pick 12.
- Incl–Excl: 1–1000 ÷ 2,3,7 = 714; neither sq nor cube = 962.
- Char. eqn: distinct roots Arⁿ+Bsⁿ; repeated (A+Bn)rⁿ.
- GF closed forms: 1/(1−x), 1/(1−ax)→aʳ, 1/(1−x)²→(r+1).
- **Most-likely:** Pigeonhole (5m) + Incl–Excl numerical (15m) + recurrence (15m).

---
---

# CHAPTER 4 — PROPOSITIONAL & PREDICATE LOGIC

## 4.1 Connectives & truth tables
| p | q | ¬p | p∧q | p∨q | p→q | p↔q |
|--|--|--|--|--|--|--|
| T | T | F | T | T | T | T |
| T | F | F | F | T | F | F |
| F | T | T | F | T | T | F |
| F | F | T | F | F | T | T |

- **Implication p→q ≡ ¬p∨q.** It's **False only when p=T, q=F.**
- **Biconditional p↔q ≡ (p→q)∧(q→p).**
- A→B ≡ ¬(A→¬B)? No — note the recurring MCQ: **A∧B ≡ ¬(A→¬B)** (since A→¬B = ¬A∨¬B, negate ⇒ A∧B).

## 4.2 Implication variants (★★★★ MCQ + Group B)
For p→q:
- **Converse:** q→p
- **Inverse:** ¬p→¬q
- **Contrapositive:** ¬q→¬p **(≡ original)**

*Memory:* **C**onverse = swap, **I**nverse = negate, **Contra** = swap+negate (only one equivalent to original).
- Contrapositive of ¬p→q is ¬q→p. Inverse of ¬p→q is p→¬q.
- "Good food is not cheap" (g→¬c) ≡ "Cheap food is not good" (c→¬g) [contrapositive].
- "Anil or Kanchan is rich" symbolic = **p∨q**.

## 4.3 Tautology / Contradiction / Equivalence
- **Tautology:** always T. **Contradiction:** always F. **Contingency:** otherwise.
- Two formulas equivalent ⇔ same truth table ⇔ (φ↔ψ) is a tautology.
- p∨¬p = tautology; p∧¬p = contradiction. p∨(q∧¬q)≡p; ¬p∨(q∧¬q)≡¬p.

### Standard equivalences (laws of logic)
| Law | Form |
|---|---|
| Idempotent | p∨p=p, p∧p=p |
| De Morgan | ¬(p∧q)=¬p∨¬q ; ¬(p∨q)=¬p∧¬q |
| Distributive | p∨(q∧r)=(p∨q)∧(p∨r) |
| Implication | p→q=¬p∨q |
| Exportation | p→(q→r)=(p∧q)→r |
| Absorption | p∨(p∧q)=p |

**WORKED tautology without truth table (PYQ 2017): (p∧q)→(p∨q).**
=¬(p∧q)∨(p∨q)=(¬p∨¬q)∨(p∨q)=(¬p∨p)∨(¬q∨q)=1∨1=1. ∎

**Prove (p→q)∧(q→r)→(p→r) is a tautology** (hypothetical syllogism) — 8-row truth table all T. ★★★★

## 4.4 Normal Forms (★★★★★ — "Obtain CNF/PDNF")
- **Literal:** p or ¬p. **Minterm:** AND of all variables (one per row where formula=T). **Maxterm:** OR of all variables (one per row where formula=F).
- **DNF (Disjunctive):** OR of AND-clauses. **PDNF/sum-of-products:** OR of minterms (T-rows).
- **CNF (Conjunctive):** AND of OR-clauses. **PCNF/product-of-sums:** AND of maxterms (F-rows).

**Rule (from truth table):**
- **PDNF:** for each **T** row, AND the variables (variable if T, ¬variable if F); OR them.
- **PCNF:** for each **F** row, OR the variables (variable if F, ¬variable if T); AND them.

**WORKED (PYQ 2013/2018/2019): CNF of ¬(p→(q∧r)).**
F-rows (where formula=0) are TTT, FTT, FTF, FFT, FFF ⇒
CNF = (¬p∨¬q∨¬r)∧(p∨¬q∨¬r)∧(p∨¬q∨r)∧(p∨q∨¬r)∧(p∨q∨r).

**DNF of p→q = ¬p∨q** (MCQ).

## 4.5 Rules of Inference (validity) (★★★★★ — Group C every year)
| Rule | Form |
|---|---|
| Modus Ponens | p→q, p ⊢ q |
| Modus Tollens | p→q, ¬q ⊢ ¬p |
| Hypothetical Syllogism | p→q, q→r ⊢ p→r |
| Disjunctive Syllogism | p∨q, ¬p ⊢ q |

**Method to check an argument:** symbolize premises & conclusion; chain inference rules OR show premises∧¬conclusion is a contradiction (equivalently premises→conclusion is a tautology).

**Fallacies:** *Affirming the consequent* (p→q, q ⊢ p — INVALID). *Denying the antecedent* (p→q, ¬p ⊢ ¬q — INVALID).
*Example (PYQ 2019):* "If I drive then I arrive; I don't drive; ∴ I won't arrive" — **invalid** (denying antecedent).

**WORKED valid-conclusion (PYQ 2012/2015/2019): premises p→¬q, q∨r, ¬s→p; show s valid.**
Standard verbal symbolic chains recur: program-runs/submit-project, George–Harry–Ira–Jim, band–party, tax-evasion (Brown/Jones/Smith).

## 4.6 Predicate Logic & Quantifiers (★★★★)
- ∀ (universal "for all"), ∃ (existential "there exists").
- **Negation:** ¬∀x P(x) ≡ ∃x ¬P(x) ; ¬∃x P(x) ≡ ∀x ¬P(x).
- ∀ distributes over ∧; ∃ distributes over ∨ (PYQ 2022-23).
- "Nobody likes everybody" / "Nobody likes everybody" — watch the printed key; standard symbolizations use ∀x∃y¬L(x,y).

**WORKED (PYQ 2015): JAVA premises.** ∃x(C(x)∧J(x)), ∀x(J(x)→H(x)) ⊢ ∃x(C(x)∧H(x)).

> **Questions Asked Previously (Ch.4):**
> - Obtain CNF / PDNF / PCNF of a formula (¬(p→(q∧r)), (p→(q∧r))∧(¬p→(¬q∧¬r)) ) ★★★★★
> - Show a formula is a tautology (with/without truth table): (p∧q)→(p∨q), (p→q)∧(q→r)→(p→r), [(p∨q)∧(p→r)∧(q→r)]→r ★★★★★
> - Check validity of an argument (program/exam, George-Harry-Ira-Jim, band-party, drive-to-work, tax-evasion) ★★★★★
> - Quantifier negation / distribution; symbolize statements ★★★★
> - Converse/inverse/contrapositive (MCQ + "good food not cheap") ★★★★
> - Logically-equivalent pairs (truth table) ★★★

## ⏱ 5-MINUTE REVISION SHEET — Chapter 4
- p→q ≡ ¬p∨q, false only at (T,F). Contrapositive ¬q→¬p ≡ p→q.
- PDNF = minterms of T-rows; PCNF = maxterms of F-rows.
- DNF of p→q = ¬p∨q. A∧B ≡ ¬(A→¬B).
- Inference: MP, MT, Hyp-Syll, Disj-Syll. Fallacies: affirm consequent, deny antecedent (invalid).
- ¬∀xP=∃x¬P ; ¬∃xP=∀x¬P. ∀ over ∧, ∃ over ∨.
- **Most-likely:** CNF/PDNF (15m) + tautology proof (5m) + validity check (15m).

---
---

# CHAPTER 5 — ALGEBRAIC STRUCTURES & MORPHISM

## 5.1 Hierarchy of structures
| Structure | Axioms |
|---|---|
| **Semigroup** | Closure + Associativity |
| **Monoid** | Semigroup + Identity |
| **Group** | Monoid + Inverses |
| **Abelian group** | Group + Commutativity |

*Memory ladder:* **C → A → I → I → C** (Closure → Associativity → Identity → Inverse → Commutative).
- (ℤ,+) abelian group; (ℕ,+) only semigroup (no identity); (Whole numbers, +) monoid; matrix mult = group (non-abelian).

## 5.2 Group results (quotable)
- Identity & inverses **unique**. (ab)⁻¹=b⁻¹a⁻¹.
- **ax=b has unique solution x=a⁻¹b** (PYQ — pre-multiply by a⁻¹).
- (ab)²=a²b² ⇔ ab=ba (group is abelian).
- **Cyclic group** order n ≅ (ℤₙ,+ₙ). Generated by one element ⟨a⟩.
- **Lagrange's theorem:** order of a subgroup H divides order of group G ⇒ order of every element divides |G|. (Proof idea: cosets partition G into equal-size blocks.)

## 5.3 Homomorphism & Isomorphism (★★ — CS-503 model questions)
- **Homomorphism f:G→G′:** f(a∘b)=f(a)∘′f(b).
- **Iso** = bijective homo. **Mono** = injective. **Epi** = surjective. **Endo** = G→G.
- **Properties:** f(e)=e′ ; f(a⁻¹)=[f(a)]⁻¹.
- **Kernel** K={x : f(x)=e′} is a **normal subgroup**. f injective ⇔ ker f={e}.

**Examples:** f(n)=iⁿ (ℤ→{1,−1,i,−i}); det:GL(n)→ℝ* (uses det(AB)=detA·detB); f(x)=3ˣ (ℤ→ℚ*, homo not iso — not onto); f(x)=|x| is **not** a homomorphism on (ℤ,+); f(z)=z⁴ on ℂ* with ker={1,i,−1,−i}.

## 5.4 Rings & Fields (★★ — model questions)
- **Ring (R,+,·):** (R,+) abelian group, (R,·) semigroup, distributive both sides.
- **Commutative ring with unity:** · commutative, identity 1.
- **Integral domain:** commutative ring with unity, **no zero divisors** (ab=0⇒a=0 or b=0).
- **Field:** commutative ring with unity where every non-zero element has a multiplicative inverse.
- **Every finite integral domain is a field** (★ classic proof — for a≠0, map b↦ab is injective on finite D ⇒ surjective ⇒ some a′ with aa′=1).
- A **field has no zero divisors**. (ℤ,+,·) is an integral domain but **not a field** (no inverses). 2ℤ (even integers) is **not** an integral domain (no unity).
- **Field of quotients of ℤ = ℚ.**
- **Ideal:** subring S with rS⊆S (left) / Sr⊆S (right). {[a 0; b 0]} is a **left ideal but not a right ideal** of 2×2 matrices.

> **Questions Asked Previously (Ch.5):**
> - Prove every finite integral domain is a field ★★★
> - Homomorphism: f(e)=e′, f(a⁻¹)=f(a)⁻¹; ker f normal subgroup; f one-one ⇔ ker={e} ★★★
> - Show given map is/isn't a homomorphism; find kernel (z⁴, 3ˣ, |x|) ★★
> - Prove ax=b has unique solution in a group ★★
> - (ab)²=a²b² ⇔ abelian ★★
> - Ideal: {[a 0;b 0]} left ideal not right; intersection of subrings is a subring ★★
> - Cyclic group ≅ (ℤₙ,+) ★★

## ⏱ 5-MINUTE REVISION SHEET — Chapter 5
- Semigroup→Monoid→Group→Abelian (add Closure,Assoc,Identity,Inverse,Commutative).
- f(e)=e′, f(a⁻¹)=f(a)⁻¹; ker f normal; injective ⇔ ker={e}.
- Integral domain: no zero divisors. Field: ID + inverses. Finite ID ⇒ field.
- (ℤ,+,·) not a field; quotient field of ℤ is ℚ.
- Lagrange: |H| divides |G|.
- **Most-likely:** "finite integral domain = field" or a homomorphism/kernel proof (if you pick this chapter as your 3rd long answer).

---
---

# CHAPTER 6 — GRAPH & TREE

## 6.1 Basics
- **Graph G=(V,E).** **Simple graph:** no self-loops, no parallel edges. **Multigraph/pseudograph:** allows them.
- **Degree deg(v):** number of incident edges (self-loop +2).
- **Handshaking Lemma:** **Σ deg(v) = 2|E|.** ⇒ number of odd-degree vertices is **even**.
- **Complete graph Kₙ:** every pair joined; **|E|=n(n−1)/2**; (n−1)-regular.
- **Bipartite graph:** V=V₁∪V₂, edges only between parts; **no odd cycle**; contains **no triangle**.
- **Complete bipartite K_{m,n}:** |E|=mn; K_{1,n} is a star/tree.

### Representations
- **Adjacency matrix** A: aᵢⱼ = #edges between i,j (symmetric for undirected). n×n.
- **Incidence matrix:** rows=vertices, cols=edges; entry 1 if vertex is on the edge.

**WORKED (Handshaking, PYQ): 21 edges, 3 vertices degree 4, rest degree 3 ⇒ #vertices?**
2·21 = 3·4 + (n−3)·3 ⇒ 42=12+3n−9 ⇒ **n=13.**
**No simple graph with degrees 4,4,4,2,2** (the three degree-4 vertices force the others to degree ≥3).

## 6.2 Connectivity, walks, Euler & Hamilton
- **Walk** (edges may repeat) ⊃ **Trail** (no repeated edge) ⊃ **Path** (no repeated vertex).
- **Eulerian circuit:** uses every **edge** exactly once. **Exists ⇔ connected & every vertex even degree.** (Euler path: exactly 0 or 2 odd-degree vertices.)
- **Hamiltonian cycle:** visits every **vertex** exactly once.
- **Dirac:** if n≥3 and deg(v)≥n/2 ∀v ⇒ Hamiltonian (sufficient, not necessary).
- No general relation between Eulerian and Hamiltonian.

## 6.3 Planarity (★★★ MCQ + Group C)
- **Euler's formula:** for a connected planar graph, **v − e + f = 2**, i.e. **f = e − v + 2** (regions).
  (Prove by induction on edges — base: tree; then remove a cycle-edge which merges two regions.)
- **K₅ and K_{3,3} are non-planar** (Kuratowski). **K₄** is the largest planar complete graph. (K₆ is NOT planar — MCQ trap.)
- For simple connected planar (v≥3): e ≤ 3v−6.

## 6.4 Graph Colouring & Chromatic Polynomial (★★★★★ — THE big Group-C topic)
- **Chromatic number χ(G):** minimum colours for proper colouring.
  - Tree (≥2 vertices): χ=2. Bipartite: χ=2 (and 2-chromatic ⇒ no odd cycle ⇒ bipartite).
  - Cycle Cₙ: χ=2 if n even, **3 if n odd**. Kₙ: χ=n. Petersen graph: χ=3.
  - Any graph containing an odd cycle ⇒ χ≥3; circuit of length 11 (odd) ⇒ χ=3 if it's the whole graph, but as a subgraph forces χ(G)≥3.
- **Chromatic polynomial Pₙ(λ):** number of proper colourings with λ colours.
  - **Kₙ:** λ(λ−1)(λ−2)…(λ−n+1).
  - **Tree on n vertices:** **λ(λ−1)^(n−1).**
  - **Null graph (no edges) on n vertices:** λⁿ. (5 vertices,3 colours ⇒ 3⁵=243; 4 vertices,5 colours ⇒ 5⁴=625.)
  - **Cycle Cₙ:** (λ−1)ⁿ + (−1)ⁿ(λ−1).

### Decomposition (Fundamental Reduction) Theorem
For non-adjacent A,B: **P_G(λ) = P_{G+AB}(λ) + P_{G·AB}(λ)** where G+AB joins them, G·AB fuses them (replace parallel edges by single).
(Equivalently delete-contract: P_{G−e} = P_G + P_{G/e}.)

**WORKED method (the recurring 15-mark Q): chromatic polynomial of a 5-vertex graph with a triangle.**
Write Pₙ(λ)=Σ Cⱼ·^λCⱼ where ^λCⱼ=λ(λ−1)…(λ−j+1)/j!. For a non-null graph C₁=0; if a triangle is present C₂=0; Cₙ=n!.
Find C₃ (=3! ways to colour the triangle, the rest forced), C₄ similarly. Assemble.
*Typical answers:* λ(λ−1)(λ−2)(λ²−5λ+7) or λ(λ−1)(λ−2)² etc.

**Flag/stripe colouring:** k stripes, λ colours, adjacent different = λ(λ−1)^(k−1). *(6 stripes,4 colours ⇒ 4·3⁵, source's case-count gives 16 for a specific repeated-colour constraint.)*

## 6.5 Trees (★★★★)
- **Tree:** connected acyclic graph. **n vertices ⇒ exactly n−1 edges** (★ prove by induction — delete an edge, two subtrees T₁(n₁−1 edges), T₂(n₂−1 edges) ⇒ total n−1).
- Minimum edges for a connected graph on n vertices = n−1.
- Trees are **bipartite** (2-chromatic) — PYQ 2022-23.
- **Binary tree:** with p pendant (leaf) vertices ⇒ internal vertices = p−1.
- **Spanning tree:** subgraph that is a tree containing all vertices.
- **Minimum Spanning Tree (MST):** Kruskal (add cheapest edge avoiding a cycle) / Prim (grow from a vertex). PYQ 2022-23 asks definition + example.

## 6.6 Isomorphism (★★★ — frequent Group B)
Two graphs isomorphic ⇔ a bijection of vertices preserving adjacency. **Necessary invariants:** same |V|, same |E|, same degree sequence, same cycle structure. Counterexample if any differs (e.g. number of degree-3 vertices differs ⇒ not isomorphic).

## 6.7 Matching, SDR, Hall (★★★ — CS-503)
- **Matching:** set of edges with no shared vertex. **Perfect matching:** covers all vertices.
- **SDR (System of Distinct Representatives)** of sets A₁…Aₙ: pick distinct xᵢ∈Aᵢ.
- **Hall's Marriage Theorem:** SDR / perfect matching exists ⇔ **|∪ of any k of the sets| ≥ k** (marriage condition).
- Every tree has at most one perfect matching.
- *PYQ "super-processor"/"girls' choice" = bipartite perfect-matching via Hall.*

> **Questions Asked Previously (Ch.6):**
> - Find chromatic polynomial of a given 5-vertex graph (decomposition / Cⱼ-method) ★★★★★
> - Prove a tree with n vertices has n−1 edges; trees/bipartite are 2-chromatic ★★★★★
> - χ(Kₙ)=n ; chromatic polynomial of Kₙ, tree, cycle, null graph ★★★★★
> - Euler's formula v−e+f=2 (state/prove) ★★★★
> - Handshaking: degree-sum vertex count (n=13); no graph with degrees 4,4,4,2,2 ★★★
> - Graph isomorphism check ★★★★
> - Null-graph colouring MCQs (243, 625, 125); χ of odd/even cycle ★★★★
> - SDR / Hall's marriage condition / perfect matching / bipartite super-processor ★★★
> - Adjacency / incidence matrix construct or read ★★★
> - Define Eulerian & Hamiltonian; MST/Kruskal ★★★

## ⏱ 5-MINUTE REVISION SHEET — Chapter 6
- Σdeg=2|E|; #odd-degree vertices even. Kₙ: e=n(n−1)/2.
- Euler: v−e+f=2. K₅,K_{3,3},K₆ non-planar; K₄ planar. e≤3v−6.
- χ: tree/bipartite=2; Cₙ=2(even)/3(odd); Kₙ=n; Petersen=3.
- Chromatic poly: Kₙ=λ(λ−1)…(λ−n+1); tree=λ(λ−1)^(n−1); null=λⁿ; Cₙ=(λ−1)ⁿ+(−1)ⁿ(λ−1).
- Decomposition: P_G = P_{G+AB} + P_{G·AB}.
- Tree: n−1 edges; bipartite; spanning tree; MST via Kruskal/Prim.
- Hall: SDR exists ⇔ |∪ any k sets|≥k.
- **Most-likely:** chromatic polynomial (15m) + "tree has n−1 edges" or Euler proof (5m).

---
---

# 🎯 EXAM PREDICTION (ranked, for 27 Jun 2026)

### Most-probable GROUP A (MCQ) topics — expect 1–2 each
1. χ / chromatic polynomial / null-graph colouring (243, 625) ★★★★★
2. gcd identities (gcd(2a+1,9a+4)=1; divisibility of a big number; #divisors of 252) ★★★★★
3. POSET: minimal/maximal of (N,|); glb/lub in a lattice ★★★★★
4. Logic: A∧B equivalent form ¬(A→¬B); converse/contrapositive; "Anil or Kanchan rich"=p∨q ★★★★★
5. Counting: even-sum on 2 dice (18); functions count; non-neg solutions ★★★★
6. Euler's formula f=e−v+2; "2-chromatic graph = bipartite/both" ★★★★
7. Recurrence solution Sₙ=2Sₙ₋₁ ⇒ 2ⁿ ★★★
8. Square forms 5k,5k±1; remainder problems (6¹⁶ mod 17 =1) ★★★

### Most-probable GROUP B (short, 5m) — pick 3
1. Use congruence to prove 17|… or 7|… ★★★★★
2. Show (N,|) is a POSET / draw small Hasse (D(24)) ★★★★★
3. Pigeonhole: difference divisible by 11 (choose 20/12 numbers) ★★★★★
4. Tautology / logically-equivalent pair via truth table ★★★★
5. gcd(272,119)=272u+119v (or 595,252) ★★★★
6. Inverse element in ℤₘ exists ⇔ gcd(n,m)=1 ★★★
7. SDR / marriage condition for given family of sets ★★★
8. Induction: n²+n even ★★★

### Most-probable GROUP C (long, 15m) — pick 3 of 5
1. **Chromatic polynomial of a 5-vertex graph** (decomposition / Cⱼ method) ★★★★★
2. **Inclusion–Exclusion:** 1–10000/1–1000 div by 2,3,7 (714) or neither square nor cube (962) ★★★★★
3. **PDNF/PCNF (CNF/DNF)** of a formula + **validity of an argument** (George/Harry/Ira/Jim, program-runs) ★★★★★
4. **Induction divisibility** (6ⁿ⁺²+7^(2n+1)÷43) + gcd-Bézout ★★★★★
5. **Hasse diagram** of a poset: min/max/greatest/least + glb/lub of two subsets ★★★★★
6. **Recurrence** by characteristic root **or** generating function ★★★★
7. **Tree has n−1 edges / Euler's formula** proof + chromatic facts ★★★★
8. **Pigeonhole generalized** statement+proof + a PHP numerical ★★★★
9. Quantifier distribution + a logic-puzzle (tax evasion) ★★★
10. Finite integral domain is a field / homomorphism-kernel (safety long answer) ★★★

### Must-memorize derivations/proofs (write-from-memory list)
- |A∪B|=|A|+|B|−|A∩B| ; 3-set inclusion–exclusion
- Division algorithm via well-ordering
- Euclidean algorithm + back-substitution to au+bv
- Induction divisibility template
- Generalized Pigeonhole proof
- (p∧q)→(p∨q) and (p→q)∧(q→r)→(p→r) tautologies
- PDNF/PCNF from a truth table
- Σdeg=2|E| (handshaking) and #odd vertices even
- Euler's formula v−e+f=2
- Tree on n vertices has n−1 edges
- Chromatic polynomial of Kₙ / tree / cycle; decomposition theorem
- Every finite integral domain is a field

### Numericals to drill
gcd-Bézout (272/119) · linear congruence 6x≡3(mod9) · incl-excl 714 / 962 · stars-bars C(19,2)=171 · PHP 56 balls / 61 students · recurrence char-root & GF · chromatic polynomial of a triangle-containing 5-vertex graph · Hasse of S={1,2,3,4,6,9,12,18,36}.

> **One-day revision order:** Ch4 Logic → Ch3 Counting → Ch6 Graph → Ch1 Set/POSET → Ch2 Induction/Number-theory → Ch5 Algebra (skim). Do the 6 revision sheets last, the night before.
