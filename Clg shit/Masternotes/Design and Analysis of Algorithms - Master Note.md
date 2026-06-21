# Design and Analysis of Algorithms — MASTER NOTE

| | |
|---|---|
| **Subject** | Design & Analysis of Algorithms |
| **Code** | PCC-CS404 (also ES-CS401 / PCC-CSD402 / CS-501 old) |
| **University** | MAKAUT (Maulana Abul Kalam Azad University of Technology, WB) |
| **Exam Date** | **Saturday, 04 July 2026** |
| **Duration / Marks** | 3 Hours / **70 Marks** |
| **Goal** | 9+ SGPA — this note is one-day revisable. PYQ > organizer > textbook. |

### Paper Pattern (MAKAUT 70-mark)
| Group | Type | Count × Marks | Total | Rule |
|---|---|---|---|---|
| **A** | MCQ / Very short | 10 × 1 | 10 | Answer **any 10** of 12 |
| **B** | Short answer | 5 marks each | 15 | Answer **any 3** of ~5 (3×5=15) |
| **C** | Long answer | 3 × 15 | 45 | Answer **any 3** of ~5 |

> NOTE on Group B: MAKAUT DAA papers use **5 marks** per short question, "answer any 3" = 15. (The brief's "5 short × 3 = 15" maps to this same 15-mark block.)

---

## CHAPTER WEIGHTAGE MAP (from 5 PYQs: 2007, 2012, 2013, 2023, 2024 + WBUT 2004–2019 tags)

| # | Chapter | Approx. weight | Hottest items | Priority |
|---|---|---|---|---|
| 1 | Introduction (asymptotics, recurrences) | ~18% | Master theorem, asymptotic notation defs, recurrence via generating function, Tower of Hanoi | ★★★★★ |
| 2 | Fundamental Strategies (D&C, Greedy, DP, Backtracking, B&B) | ~30% | Quick sort derivation, Matrix-chain numerical, Knapsack greedy numerical, N-Queens, Job sequencing, Bellman-Ford, Union-Find | ★★★★★ |
| 3 | Graph & Tree Traversal | ~22% | Prim/Kruskal write+trace, Floyd-Warshall, Dijkstra, BFS/DFS, Max-flow/Ford-Fulkerson, KMP | ★★★★★ |
| 4 | Tractable & Intractable (P, NP, NPC, NP-hard) | ~15% | P/NP/NPC/NP-hard + diagram, Cook's theorem, Clique NP-complete, reducibility, non-deterministic algo | ★★★★☆ |
| 5 | Approximation Algorithms | ~7% | Approx ratio, Vertex Cover 2-approx, PTAS/FPTAS, randomized algo | ★★★☆☆ |
| 6 | Miscellaneous (Strassen, FFT, 15-puzzle, amortized) | ~8% | Strassen recurrence, FFT short note, 15-puzzle B&B, amortized analysis | ★★★☆☆ |

**Golden rule:** Group C (45 marks) almost always contains **MST + a DP numerical + an NP-theory question**. Master those three and you bank ~30 marks before touching anything else.

---
---

# CHAPTER 1 — INTRODUCTION

## 1.1 What is an Algorithm?
A **step-by-step finite procedure** to solve a problem, independent of language/machine.
**Characteristics (mnemonic "FIDE-IO"):** **F**initeness, **I**nput (0+), **D**efiniteness (unambiguous), **E**ffectiveness, **I**ndependence (of language), **O**utput (1+).
**Categories:** Search, Sort, Insert, Update, Delete.

**A priori vs A posteriori analysis:**
- *A priori* = theoretical (compute time/space by a function, machine-independent).
- *A posteriori* = empirical (run it, measure actual time/space).

## 1.2 Space & Time Complexity
- **Space:** `S(X) = C(X) + I(X)` — C = fixed/constant part, I = instantaneous (input-dependent) part.
- **Time:** number of elementary operations as a function of input size *n*. Independent of machine/programmer.
- **Worst / Average / Best case:** complexity for the worst / averaged-over-all / best input of given size.

## 1.3 Asymptotic Notation (★★★★★ — defined almost every year)

| Notation | Meaning | Formal definition | Bound |
|---|---|---|---|
| **O (Big-Oh)** | ≤ | ∃ c,k>0 : 0 ≤ f(n) ≤ c·g(n) ∀ n≥k | Upper (tight or loose) |
| **Ω (Big-Omega)** | ≥ | ∃ c,k>0 : 0 ≤ c·g(n) ≤ f(n) ∀ n≥k | Lower |
| **Θ (Theta)** | = | ∃ c₁,c₂,k : c₁g(n) ≤ f(n) ≤ c₂g(n) ∀ n≥k | Tight (both) |
| **o (little-oh)** | < | ∀ε>0 ∃k : f(n) < ε·g(n) ∀ n>k; lim f/g = 0 | Upper, **loose** |
| **ω (little-omega)** | > | g insignificant vs f; lim f/g = ∞ | Lower, loose |

**Memory trick:** O = "richest you could be" (upper), Ω = "poorest" (lower), Θ = "exactly", little-o/ω = strict inequality (loose, never tight).

**Graph (ASCII):**
```
 cost
  |            c·g(n)  ← O upper bound
  |          ./
  |        ./ f(n)
  |      ./.
  |    ./   c'·g(n) ← Ω lower bound
  +--------------------- n
       n≥k
```
**Common mistakes:** writing `O(2n²)` (drop constants → `O(n²)`); claiming Θ when only an upper bound is proven; confusing little-o (loose) with big-O.

**Standard results to memorize:**
- Lower bound of any **comparison sort** = `Ω(n log n)` → best a comparison sort can do is O(n log n).
- `n! = O(nⁿ)` (each of n factors ≤ n). Stirling: `n! ≈ √(2πn)(n/e)ⁿ`.
- Polynomial `f(n)=aₘnᵐ+…+a₀ = O(nᵐ)`.
- Sequential parts f, g → `Θ(max(f,g))`; nested → `f·g`.

## 1.4 Solving Recurrences

### (A) Master Theorem (★★★★★ — asked almost EVERY year)
For `T(n) = a·T(n/b) + f(n)`, a≥1, b>1. Compare f(n) with `n^(log_b a)`:

| Case | Condition | Result |
|---|---|---|
| **1** | f(n) = O(n^(log_b a − ε)), ε>0 (f smaller) | T(n) = Θ(n^(log_b a)) |
| **2** | f(n) = Θ(n^(log_b a)·logᵏn), k≥0 (equal) | T(n) = Θ(n^(log_b a)·log^(k+1) n) |
| **3** | f(n) = Ω(n^(log_b a + ε)) + regularity a·f(n/b)≤c·f(n), c<1 (f bigger) | T(n) = Θ(f(n)) |

**Worked examples (memorize — they recur):**

| Recurrence | a, b → n^(log_b a) | f(n) | Case | Answer |
|---|---|---|---|---|
| T=2T(n/2)+n | 2,2 → n¹ | n | 2 (k=0) | **Θ(n log n)** (merge sort) |
| T=8T(n/2)+n² | 8,2 → n³ | n² | 1 | **Θ(n³)** |
| T=8T(n/2)+qn | 8,2 → n³ | n | 1 | **Θ(n³)** |
| T=2T(n/4)+√n | 2,4 → n^0.5 | √n | 2 | **Θ(√n log n)** |
| T=T(2n/3)+1 | 1,3/2 → n⁰=1 | 1 | 2 | **Θ(log n)** |
| T=2T(n/4)+n^0.51 | 2,4 → n^0.5 | n^0.51 | 3 | **Θ(n^0.51)** |
| T=√2·T(n/2)+log n | √2,2 → n^0.5 | log n | 1 | **Θ(√n)** |

> The last two are the EXACT recurrences in the **2023 paper Q11(b)**. Learn them.

### (B) Recursion-Tree Method
Draw tree, sum cost per level, sum all levels (usually geometric/arithmetic series). Better than substitution when you have **no good guess**.

**Classic: `T(n)=T(n/4)+T(n/2)+Θ(n²)`** → descending geometric series:
```
                n²                       cost = n²
              /    \
         (n/4)²    (n/2)²                = (1/16+1/4)n² = 5/16 n²
        / \        /  \
      ...           ...                  = (5/16)² n²
  Sum = n²·Σ(5/16)ⁱ = n²·1/(1−5/16) = Θ(n²)
```

### (C) Substitution Method
(1) **Guess** the form; (2) prove by **induction**, find constants. Risk: needs a good guess.

### (D) Generating-Function / Characteristic-Equation (★★★★ — WBUT favourite)
For linear recurrence `aₙ = c₁aₙ₋₁ + c₂aₙ₋₂ + …`:
1. **Characteristic equation** (replace aₙ→rⁿ), solve roots r₁,r₂,…
2. General solution `aₙ = α₁r₁ⁿ + α₂r₂ⁿ + …`
3. Use initial conditions to find α's.

**Worked (WBUT 2013):** `aₙ − 7aₙ₋₁ + 10aₙ₋₂ = 0`, a₀=10, a₁=41.
- Char eqn: r²−7r+10=0 → r=2,5. So aₙ=α₁2ⁿ+α₂5ⁿ.
- α₁+α₂=10; 2α₁+5α₂=41 → α₁=3, α₂=7. **aₙ = 3·2ⁿ + 7·5ⁿ.**

**Worked (WBUT 2016):** `aₙ=6aₙ₋₁−11aₙ₋₂+6aₙ₋₃`, a₀=1,a₁=−1,a₂=1 → factors (x−1)(2x−1)(3x−1) → **aₙ = 6 − 8·2ⁿ + 3·3ⁿ**.

### Tower of Hanoi (★★★ — 2024 Q8c, 15 marks)
Recurrence: `T(n) = 2T(n−1) + 1`, T(1)=1.
Solve: T(n)=2T(n−1)+1=2²T(n−2)+2+1=…=2^(n-1)T(1)+2^(n-2)+…+1 = **2ⁿ − 1 = O(2ⁿ)**.

### Other must-know complexities
| Recurrence | Solution |
|---|---|
| T(n)=T(n−1)+c | O(n) |
| T(n)=2T(n−1)+c | O(2ⁿ) |
| T(n)=T(n/2)+1 (binary search) | O(log n) |
| T(n)=2T(√n)+1 | Θ(log n) |

## ⏱ Chapter 1 — 5-MINUTE REVISION SHEET
- **FIDE-IO** characteristics; A priori (theory) vs A posteriori (empirical).
- `S=C+I` space; time = elementary-ops count.
- **O ≤, Ω ≥, Θ =, o < (loose), ω > (loose)**. Comparison-sort lower bound = Ω(n log n).
- **Master thm:** compare f vs n^(log_b a): smaller→Case1 Θ(n^logba); equal→Case2 +log; bigger→Case3 Θ(f).
- Merge sort = 2T(n/2)+n = **Θ(n log n)**. Tower of Hanoi = **2ⁿ−1**.
- Generating fn: char eqn → roots → aₙ=Σαᵢrᵢⁿ → fit initial conditions.
- `n!=O(nⁿ)`, polynomial degree m = O(nᵐ).

## Questions Asked Previously — Ch.1
- Discuss asymptotic notations (O, o, Ω, Θ) with examples + graphs — **★★★★★** (2005,2011,2013,2018,2024 Q8b)
- State Master theorem + solve a recurrence — **★★★★★** (2012,2015,2016,2024 Q11b,2023 Q11b)
- Solve recurrence by generating function — **★★★★** (2007,2013,2016)
- Tower of Hanoi recurrence + solve — **★★★★** (2024 Q8c)
- Prove n!=O(nⁿ) / polynomial=O(nᵐ) — **★★★** (2007,2008,2017,2019)
- Recursion tree for given recurrence — **★★★** (2012,2014)
- Tail recursion / recursion vs iteration — **★★★** (2007,2023 Q11a)

---
---

# CHAPTER 2 — FUNDAMENTAL ALGORITHMIC STRATEGIES

## 2.1 Divide & Conquer (D&C)
**3 steps:** Divide → Conquer (recurse) → Combine. **Top-down.** Subproblems are **independent**.
Examples: Merge sort, Quick sort, Binary search, Strassen, Max-Min.

### Merge Sort (★★★★★)
```
MergeSort(A, l, r):
  if l < r:
    m = (l+r)/2
    MergeSort(A, l, m); MergeSort(A, m+1, r)
    Merge(A, l, m, r)          // merge two sorted halves
```
`T(n)=2T(n/2)+Θ(n)` → **Θ(n log n)** in ALL cases (best=worst=avg). Merging size s,t lists ≤ s+t−1 comparisons. **Stable**, O(n) extra space.

### Quick Sort (★★★★★ — derivation asked nearly every year)
```
QuickSort(A,p,r):
  if p<r:
    q = Partition(A,p,r)       // pivot to final place
    QuickSort(A,p,q-1); QuickSort(A,q+1,r)
Partition(A,p,r):
  x=A[r]; i=p-1
  for j=p to r-1:
    if A[j]<=x: i++; swap(A[i],A[j])
  swap(A[i+1],A[r]); return i+1
```
| Case | Recurrence | Result |
|---|---|---|
| **Best** | pivot splits in half: T=2T(n/2)+cn | **O(n log n)** |
| **Average** | (derivation below) | **O(n log n)** |
| **Worst** | pivot smallest/largest (sorted input): T=T(n−1)+cn | **O(n²)** |

**Average-case derivation (15-mark answer):** assume each split equally likely (prob 1/n):
`T(n)=(2/n)ΣT(i)+cn` → multiply by n, subtract the (n−1) version → `nT(n)=(n+1)T(n−1)+2cn` → divide by n(n+1) → telescoping → `T(n)/(n+1)=T(1)/2+2c·Σ(1/k)≈2c·ln n` → **T(n)=O(n log n)**.

### Max-Min by D&C (★★★)
`T(n)=2T(n/2)+2`, T(2)=1, T(1)=0 → **T(n)=⌈3n/2⌉−2** comparisons. Beats straightforward `2(n−1)`.

## 2.2 Greedy Method
Builds solution piece-by-piece, picking **locally best** choice each step. Works when problem has **greedy-choice property + optimal substructure**.
**Components:** candidate set, selection function, feasibility check, objective function, solution check.
Examples: **Fractional knapsack, Prim, Kruskal, Job sequencing, Huffman, Dijkstra.**

### Fractional Knapsack (★★★★★ — numerical asked 2007,2012,2013,2024)
Items fractionable. **Greedy: sort by value/weight ratio (vᵢ/wᵢ) descending**, take fully until full, take fraction of last. Time **O(n log n)** (sorting).

**WORKED — 2024 Q1(xii):** items {(40,20),(30,10),(20,5)} (value,weight), W=20. Ratios 2.0, 3.0, 4.0 → order item3,item2,item1.
- item3 full: w5,p20,rem15. item2 full: w10,p30,rem5. item1 frac 5/20: 40×0.25=10. **Profit = 60.**

**WORKED — 2007/2012/2013 (W=100, I₁..I₅ weights 15,25,35,45,55; values 10,20,30,40,50):** ratios increasing → sort desc I₅(.909),I₄(.889),…
- I₅ full: w55,p50,rem45. I₄ full: w45,p40,rem0. **Profit = 90.**

**WORKED — 2024 Q5 (W=10, weights{3,3,2,5,1}, profits{10,15,10,12,8}):** ratios 3.33,5.0,5.0,2.4,**8.0** → order item5,item2,item3,item1,item4.
- item5:w1,p8,rem9; item2:w3,p15,rem6; item3:w2,p10,rem4; item1:w3,p10,rem1; item4 frac 1/5:12×0.2=2.4. **Profit = 45.4.**

### Job Sequencing with Deadlines (★★★★ — 2024 Q9, 2023 Q2)
Each job: profit pᵢ, deadline dᵢ, 1 unit time. A job earns only if finished by its deadline. Maximize profit.
```
JobSequencing(jobs):
  sort jobs by profit DESCENDING
  for each job: place in LATEST free slot ≤ its deadline; else skip
```
Time **O(n²)** (or O(n log n) with union-find).
**WORKED — 2024 Q9b:** n=4, profits(100,10,15,27), deadlines(2,1,2,1). Sort: J1(100,d2),J4(27,d1),J3(15,d2),J2(10,d1).
- J1→slot2; J4→slot1; J3→slots full→skip; J2→skip. **Sequence J4,J1. Profit = 127.**

### Union-Find / Disjoint Sets (★★★★ — short note, 2012)
Maintains disjoint sets each with a representative. **Union(x,y)** merge, **Find(x)** locate set. Optimizations: **union by rank/size** (small tree under large root) + **path compression** (Find reattaches nodes to root) → near-O(1) amortized (α(n)).

## 2.3 Dynamic Programming (DP)
For **optimization** with **overlapping subproblems + optimal substructure**. **Bottom-up**, store in table, reuse.
**4 steps:** characterize optimal structure → define value recursively → compute bottom-up → construct solution.
Examples: **Matrix-chain, 0/1 knapsack, Floyd-Warshall, Bellman-Ford, LCS, TSP.**

### 0/1 Knapsack (★★★★ — DP; greedy FAILS)
Item taken fully or not (no fractions). `c[i,w]=0` if i=0 or w=0; `=c[i−1,w]` if wᵢ>w; `=max(vᵢ+c[i−1,w−wᵢ], c[i−1,w])` otherwise. Table c[0..n,0..W], answer c[n,W]. Time **O(nW)** (pseudo-polynomial).

### Matrix-Chain Multiplication (★★★★★ — numerical asked 2009,2013,2014,2023,2024)
Minimize scalar multiplications. p×q by q×r = pqr mults.
`m[i,j]=0` if i=j; `=min over i≤k<j { m[i,k]+m[k+1,j]+p_{i−1}·p_k·p_j }`. Time **O(n³)**, space O(n²); s[i,j] stores split.
```
Matrix-Chain-Order(p):           // p has n+1 dims
  for i=1..n: m[i,i]=0
  for L=2..n:                    // chain length
    for i=1..n-L+1:
      j=i+L-1; m[i,j]=∞
      for k=i..j-1:
        q=m[i,k]+m[k+1,j]+p[i-1]*p[k]*p[j]
        if q<m[i,j]: m[i,j]=q; s[i,j]=k
```
**WORKED — 2024 Q7a / 2023 Q9a:** A₁(30×35),A₂(35×15),A₃(15×5),A₄(5×10). p=⟨30,35,15,5,10⟩.
- m[1,2]=30·35·15=15750; m[2,3]=2625; m[3,4]=750.
- m[1,3]=min(2625+5250, 15750+2250)=**7875** (k=1).
- m[2,4]=min(750+5250, 2625+1750)=**4375** (k=3).
- m[1,4]=min(k1:4375+10500=14875; k2:21000; k3:7875+1500=9375)=**9375** (k=3).
- **Answer: 9375 multiplications**, order **((A₁(A₂A₃))A₄)**.

**WORKED — dims ⟨5,10,3,12,5,50,6⟩ (2013/2014):** **m[1,6]=2010**.

## 2.4 Backtracking
Searches solution-space tree; **prunes** branches that can't succeed; backtracks on dead ends. **DFS-style.**
Examples: **N-Queens, Graph coloring, Hamiltonian cycle, Sum of subsets.**

### N-Queens (★★★★★ — 2024 short, 2023 Q7b, WBUT 2010/2014/2018/2019)
Place n queens, none attacking (no shared row/col/diagonal).
```
NQueen(k, n):                    // place queen in row k
  for i=1 to n:
    if Place(k,i):
      x[k]=i
      if k==n: print x[1..n]
      else: NQueen(k+1, n)
Place(k,i):
  for j=1 to k-1:
    if x[j]==i OR |x[j]-i|==|j-k|: return false   // same col / diagonal
  return true
```
Time **O(n!)**. 4-queens → 2 solutions; 8-queens → 92.

### Graph Coloring (★★★★ — 2023 Q9, WBUT 2017/2018)
Color vertices with ≤ m colors, no adjacent same. Backtracking, time **O(mⁿ)**. **Chromatic number** = least colors needed.

## 2.5 Branch & Bound (B&B)
Backtracking for **optimization**; uses **bounding function** + pruning to discard subtrees worse than current best. Best-first / LC search.
Examples: **15-puzzle, TSP, 0/1 knapsack (B&B).**

### Backtracking vs Branch & Bound (asked 2023/2024)
| Backtracking | Branch & Bound |
|---|---|
| Feasibility (any/all solutions) | Optimization (best) |
| DFS only | BFS / best-first / LC |
| Bounding = constraint check | Bounding = cost estimate |
| N-Queens, coloring | 15-puzzle, TSP |

## Strategy comparison (★★★★★)
| | D&C | Greedy | DP | Backtracking |
|---|---|---|---|---|
| Subproblems | independent | local choice | overlapping | tree search |
| Approach | top-down | iterative | bottom-up | DFS+prune |
| Optimal? | yes | only if greedy-choice holds | yes | yes (exhaustive) |
| Example | merge sort | fractional knapsack | 0/1 knapsack | N-Queens |

**Greedy vs DP:** Greedy = one irrevocable local choice (fast, may be suboptimal); DP = considers all subproblem solutions (slower, always optimal). **Fractional knapsack = greedy; 0/1 knapsack = DP** (classic contrast).

## ⏱ Chapter 2 — 5-MINUTE REVISION SHEET
- **D&C** (top-down, independent): merge sort Θ(n log n); quick sort best/avg O(n log n), worst O(n²); Max-Min ⌈3n/2⌉−2.
- **Greedy** (local best): fractional knapsack (sort v/w) O(n log n); job sequencing O(n²); Prim; Kruskal.
- **DP** (bottom-up, overlapping): 0/1 knapsack O(nW); matrix-chain O(n³); Floyd O(V³).
- **Backtracking** (DFS+prune): N-Queens O(n!); coloring O(mⁿ).
- **B&B** (optimization+bound): 15-puzzle, TSP O(n²2ⁿ).
- Knapsack numerical: ratio-sort for fractional; DP table for 0/1.

## Questions Asked Previously — Ch.2
- Quick sort algo + best/worst/avg derivation — **★★★★★** (2008,2012,2015,2016,2019,2023 Q8)
- Matrix-chain numerical + algorithm + complexity — **★★★★★** (2009,2013,2014,2023 Q9a,2024 Q7a)
- Fractional knapsack greedy numerical — **★★★★★** (2007,2012,2013,2024 Q5/Q1)
- N-Queens algorithm + complexity + example — **★★★★★** (2010,2014,2018,2019,2023 Q7b,2024)
- Job sequencing greedy algo + numerical — **★★★★** (2023 Q2,2024 Q9)
- Union-find / union by rank — **★★★★** (2012,2013,2015,2018,2019)
- Merge sort complexity — **★★★★** (2007,2009,2011,2013,2018,2019)
- D&C vs DP; Greedy vs DP — **★★★★** (2011,2013,2015,2012 Q9c)
- Strassen / Max-Min D&C — **★★★** (2007,2011,2017)
- Backtracking vs Branch & Bound — **★★★** (2023,2024)

---
---

# CHAPTER 3 — GRAPH & TREE TRAVERSAL ALGORITHMS

## 3.1 BFS — Breadth First Search (★★★★)
Level-by-level using a **QUEUE**. Finds **shortest path (fewest edges)** from source.
```
BFS(G,s):
  mark all WHITE; Q={s}; s.d=0
  while Q not empty:
    u=dequeue(Q)
    for each v in Adj[u]:
      if v WHITE: v.color=GRAY; v.d=u.d+1; v.p=u; enqueue(Q,v)
    u.color=BLACK
```
Time **O(V+E)** (adj list), space O(V). Produces **cross edges**.

## 3.2 DFS — Depth First Search (★★★★)
Goes deep via **STACK**/recursion; backtracks. Discovery/finish timestamps.
```
DFS(G): for each u: u.color=WHITE; time=0
        for each u: if WHITE: DFS-VISIT(u)
DFS-VISIT(u):
  time++; u.d=time; u.color=GRAY
  for each v in Adj[u]: if v WHITE: v.p=u; DFS-VISIT(v)
  u.color=BLACK; time++; u.f=time
```
Time **Θ(V+E)**. Edge types: tree, **back** (→ cycle), forward, cross.

| DFS | BFS |
|---|---|
| Stack / recursion | Queue |
| No shortest path | Shortest path (unweighted) |
| Back edges | Cross edges |

## 3.3 Topological Sort
Linear order of a **DAG** s.t. for edge u→v, u precedes v. First vertex has in-degree 0. Not same as DFS. Time O(V+E).

## 3.4 Minimum Spanning Tree (★★★★★ — appears EVERY year)
Spanning tree = connected subgraph, |V|−1 edges, all vertices, no cycle. **MST = minimum total weight** (may not be unique).

### Prim's (grows tree from root, picks cheapest edge crossing the cut)
```
Prim(V,E,w):
  T={}; pick root r; U={r}
  while |U| < |V|:
    find min-weight edge (u,v): u∈U, v∈V−U
    add (u,v) to T; add v to U
  return T
```
Time **O(V²)** (matrix) or **O(E log V)** (heap+adj list). Greedy. Edge must be **adjacent** to tree.

### Kruskal's (picks globally cheapest edge making no cycle)
```
Kruskal(G):
  T={}; sort edges ascending
  for each edge (u,v) in order:
    if Find(u)≠Find(v): add (u,v); Union(u,v)   // no cycle
  return T
```
Time **O(E log E) = O(E log V)** (sort dominates). Uses **union-find**. Edges may be discrete.

| Prim | Kruskal |
|---|---|
| Vertex-based, from root | Edge-based, global min |
| O(V²) or O(E log V) | O(E log E) |
| Edge adjacent to tree | Edge may be disconnected |
| Better dense graphs | Better sparse graphs |

**WORKED Kruskal (organizer 7-node):** edges sorted 10,12,14,16,18,22,24,25 → avoid cycles → **MST cost = 99**.
**WORKED Prim (2023 Q9d 6-node):** apply from node 1; sum picked tree edges → cost ≈ **16** (per organizer Q7).

> MST numerical TIP: (1) list edges sorted, (2) show each add/reject, (3) draw final tree, (4) state total cost. Both 2023 and 2024 give a 6-node graph and ask Prim's MST — guaranteed marks.

## 3.5 Shortest Paths

### Dijkstra (single-source, non-negative) (★★★★)
Greedy. Set S of finalized vertices; extract min-d vertex, relax its edges.
```
Dijkstra(G,w,s):
  init d[]=∞, d[s]=0; S={}; Q=V
  while Q not empty:
    u=Extract-Min(Q); S=S∪{u}
    for each v in Adj[u]: Relax(u,v,w)
Relax(u,v,w): if d[v]>d[u]+w(u,v): d[v]=d[u]+w(u,v); π[v]=u
```
Time **O(V²)** / **O(E log V)** (heap). **Fails on negative edges.**

### Bellman-Ford (single-source, NEGATIVE weights ok) (★★★★ — 2012 Q8)
Relax ALL edges |V|−1 times; extra pass detects negative cycle.
```
Bellman-Ford(G,w,s):
  init-single-source(G,s)
  for i=1 to |V|-1: for each edge (u,v): Relax(u,v,w)
  for each edge (u,v): if d[v]>d[u]+w(u,v): return FALSE   // neg cycle
  return TRUE
```
Time **O(VE)**. DP-based.

### Floyd-Warshall (all-pairs) (★★★★★ — 2005,2011,2017,2018,2019,2023,2024)
DP. `D^k[i,j]=min(D^(k−1)[i,j], D^(k−1)[i,k]+D^(k−1)[k,j])`.
```
Floyd(W):
  D=W
  for k=1 to n:
    for i=1 to n:
      for j=1 to n:
        if D[i][k]+D[k][j] < D[i][j]:
          D[i][j]=D[i][k]+D[k][j]; P[i][j]=k
```
Time **O(V³)**, space O(V²). **Transitive closure** = same loops with OR/AND (reachability).

| Algorithm | Problem | Negative? | Time |
|---|---|---|---|
| Dijkstra | single-source SP | no | O(V²)/O(E log V) |
| Bellman-Ford | single-source SP | yes | O(VE) |
| Floyd-Warshall | all-pairs SP | yes (no neg cycle) | O(V³) |

## 3.6 Network Flow (★★★★ — Max-flow/Ford-Fulkerson 2012,2013,2014,2023,2024)
Flow network: directed, capacities c(u,v)≥0, source s, sink t.
**3 properties:** capacity constraint (f≤c), skew symmetry (f(u,v)=−f(v,u)), flow conservation (in=out for non-s,t).

### Ford-Fulkerson
```
Ford-Fulkerson(G,s,t):
  init all f=0
  while ∃ augmenting path p (s→t) in residual G_f:
    c_f(p)=min{ c_f(u,v):(u,v)∈p }   // bottleneck
    for each (u,v) in p: f[u,v]+=c_f(p); f[v,u]=−f[u,v]
  return f
```
**Residual capacity** c_f(u,v)=c(u,v)−f(u,v). **Augmenting path** = s→t path with all residuals > 0.

### Max-Flow Min-Cut Theorem
Equivalent: (1) f is max flow; (2) residual has no augmenting path; (3) |f|=capacity of some cut (S,T). **Max flow = min cut.**

> 2023 Q3 / 2024 Q3 both: "find max flow, show each step." Method: repeatedly find augmenting path, push bottleneck, update residuals; max flow = sum of bottlenecks.

## 3.7 String Matching (★★★ — KMP 2013,2014)
### KMP
Prefix function π skips re-comparisons. **Preprocess Θ(m), match Θ(n)** → total **Θ(m+n)**.
```
KMP-MATCHER(T,P):
  π=Compute-Prefix(P); q=0
  for i=1 to n:
    while q>0 and P[q+1]≠T[i]: q=π[q]
    if P[q+1]==T[i]: q++
    if q==m: print "match at" i−m; q=π[q]
```
### Rabin-Karp
Rolling hash; preprocess Θ(m), worst Θ((n−m+1)m), good average.

## ⏱ Chapter 3 — 5-MINUTE REVISION SHEET
- **BFS** = queue, shortest path, O(V+E). **DFS** = stack/recursion, back edges, Θ(V+E).
- **MST: Prim** grow from root O(V²)/O(E log V); **Kruskal** sort+union-find O(E log E).
- **Shortest path: Dijkstra** (no neg O(V²)), **Bellman-Ford** (neg ok O(VE)), **Floyd** (all-pairs O(V³)).
- Floyd: min(D[i][j], D[i][k]+D[k][j]).
- **Max-flow = min-cut**; Ford-Fulkerson augments by bottleneck along residual paths.
- **KMP** Θ(m+n).

## Questions Asked Previously — Ch.3
- Prim/Kruskal algorithm + MST numerical + complexity — **★★★★★** (2007,2017,2023 Q7a/Q9b,2024 Q9d)
- Floyd-Warshall APSP algorithm + complexity — **★★★★★** (2005,2011,2017,2018,2019,2023 Q7d)
- Max-flow / Ford-Fulkerson + Max-flow-min-cut — **★★★★★** (2012,2013,2014,2023 Q3/Q11,2024 Q3/Q11)
- Dijkstra algorithm + complexity — **★★★★** (2008,2011,2013,2024 Q7b)
- Bellman-Ford + prove O(VE) — **★★★★** (2012,2017)
- BFS/DFS algorithm + compare + complexity — **★★★★** (2004,2007,2012,2014,2016,2017)
- KMP algorithm + trace — **★★★** (2013,2014)
- Transitive closure (2023 Q10a), Topological sort — **★★★**

---
---

# CHAPTER 4 — TRACTABLE & INTRACTABLE PROBLEMS

## 4.1 Deterministic vs Non-Deterministic
- **Deterministic:** every operation uniquely defined (normal algorithm).
- **Non-deterministic:** has choice points; uses `Choice(S)` (picks any), `Success()`, `Failure()`. Conceptually = unlimited parallel guessing. 3 phases: **guess → verify → output.** Non-det search/sort = O(n); all deterministic sorts ≥ Ω(n log n).

## 4.2 The Classes (★★★★★ — defined + diagram almost every year)
| Class | Definition | Example |
|---|---|---|
| **P** | Solvable by **deterministic** algo in poly time O(nᵏ) | sorting, MST, shortest path, 2SAT |
| **NP** | Solution **verifiable** in poly time (non-det poly time) | TSP(decision), SAT, Hamiltonian cycle, Clique |
| **NP-hard** | At least as hard as every NP problem; need NOT be in NP | TSP(opt), halting problem, SAT |
| **NP-complete** | **In NP AND NP-hard** — hardest IN NP | SAT, 3SAT, Clique, Vertex Cover, 3-Coloring, Ham-cycle |

**Key facts:**
- `P ⊆ NP` (can solve → can verify).
- NPC ⊆ NP-hard; not all NP-hard are NP-complete (may lie outside NP).
- **Open: P = NP?** If ANY NPC problem ∈ P, then **P = NP** (all NPC tractable).

**Relationship diagram (P ≠ NP case — draw this):**
```
   ┌────────────────────────────────┐
   │              NP-hard            │
   │   ┌───────────────────┐         │
   │   │        NP         │         │
   │   │  ┌────┐ ┌────────────┐      │
   │   │  │ P  │ │ NP-complete │     │   ← NPC = NP ∩ NP-hard
   │   │  └────┘ └────────────┘      │
   │   └───────────────────┘         │
   └────────────────────────────────┘
   If P = NP: P, NP, NPC collapse into one region.
```

## 4.3 Reducibility (★★★★ — 2024 Q10b)
P **reduces** to Q (P ≤ₚ Q) if any instance of P transforms in poly time to an instance of Q whose solution solves P → "P no harder than Q." Prove NP-hardness by reducing a known NPC problem TO your problem.

## 4.4 SAT & Cook's Theorem (★★★★★ — 2015,2023)
**SAT:** given a Boolean formula in CNF (AND of OR-clauses), is there a satisfying assignment?
**Cook-Levin Theorem:** **SAT is NP-complete** — in NP, and EVERY NP problem reduces to SAT in poly time. (First NP-complete problem.)
- **3SAT** (3 literals/clause) also NP-complete. **2SAT in P** (implication graph + SCC, O(n²)).

## 4.5 Classic NP-Complete Proofs
### Clique Decision Problem (★★★★ — 2009,2012,2023 Q5)
CLIQUE = {⟨G,k⟩ : G has complete subgraph of size k}.
**NP-complete:** (1) In NP — given V′, verify all pairs adjacent in poly time. (2) NP-hard — reduce **3SAT ≤ₚ CLIQUE**: vertex per literal per clause, edge between consistent literals in different clauses; φ satisfiable ⟺ G has k-clique (k=#clauses).
**Vertex Cover, 3-Coloring** also NP-complete (reductions from 3SAT).

## ⏱ Chapter 4 — 5-MINUTE REVISION SHEET
- **P** = solvable poly; **NP** = verifiable poly; **NP-hard** ≥ all NP; **NPC = NP ∩ NP-hard**.
- P ⊆ NP. All NPC are NP-hard. One NPC ∈ P → P=NP.
- **Cook's theorem: SAT is NP-complete.** 3SAT NPC; 2SAT in P.
- Clique, Vertex Cover, 3-Coloring, Ham-cycle, TSP(decision) = NPC.
- **Reduction P ≤ₚ Q:** poly-time transform; Q no easier than P.
- Non-deterministic: Choice/Success/Failure; guess+verify.

## Questions Asked Previously — Ch.4
- Define P/NP/NP-hard/NP-complete + relationship diagram — **★★★★★** (2005,2009,2014,2015,2016,2023 Q10a)
- State Cook's theorem / SAT — **★★★★** (2015,2023 Q5a)
- Prove Clique (CDP) is NP-complete — **★★★★** (2006,2009,2012,2023 Q5b)
- Non-deterministic algorithm (define + example) — **★★★★** (2009,2011,2012,2014,2015,2016)
- Reducibility / "NPC in P ⟹ P=NP" — **★★★★** (2005,2009,2024 Q10b/c)
- 2SAT in P, 3SAT/3-coloring NP-complete — **★★★** (2010)
- Chromatic number — **★★** (2017)

---
---

# CHAPTER 5 — APPROXIMATION ALGORITHMS

## 5.1 Why Approximate?
For NP-hard problems, give up ONE of: exact optimum / poly time / generality. Approximation algorithms keep **poly time + generality** and give a **provably near-optimal** solution.

## 5.2 Approximation Ratio
Algorithm is a **ρ(n)-approximation** if for all inputs of size n: `max(C/C*, C*/C) ≤ ρ(n)` (C=algo cost, C*=optimal). ρ≥1 (ρ=1 = optimal). Minimization C/C*≤ρ; maximization C*/C≤ρ.

## 5.3 Schemes
- **PTAS** (Polynomial-Time Approximation Scheme): family {Aε}, each a (1+ε)-approx, poly in n for fixed ε.
- **FPTAS** (Fully PTAS): poly in **both** n and 1/ε.

## 5.4 Vertex Cover — 2-approximation (★★★)
Min set C of vertices covering all edges.
```
Approx-Vertex-Cover(G):
  C={}
  while E≠∅:
    pick any edge {u,v}; C=C∪{u,v}
    remove all edges incident to u or v
  return C
```
Gives cover **≤ 2× optimal** (2-approximation). Best known for vertex cover.

## 5.5 Randomized Algorithms (★★★ — 2024 Q6)
Uses random bits in its logic.
- **Las Vegas:** always correct, random running time (e.g. randomized quick sort). Analyzed for *expected* time.
- **Monte Carlo:** fixed time, correct with high probability (e.g. Karger's min-cut O(E)).
**Randomized Quick Sort:** random pivot → expected O(n log n), avoids worst case on sorted input.

## ⏱ Chapter 5 — 5-MINUTE REVISION SHEET
- Approximation algo: poly time + provable near-optimal for NP-hard.
- **ρ-approx:** max(C/C*, C*/C) ≤ ρ; ρ=1 optimal.
- **PTAS** (1+ε); **FPTAS** poly in n AND 1/ε.
- **Vertex Cover greedy = 2-approximation.**
- **Las Vegas** (correct, random time) vs **Monte Carlo** (fixed time, random correctness).

## Questions Asked Previously — Ch.5
- Approximation algorithm / approximation ratio (short note) — **★★★★** (2008,2012,2014,2023 Q6,2012 Q11c)
- Approximation schemes PTAS/FPTAS — **★★★** (2009,2016)
- Vertex Cover algorithm — **★★★** (2014,2016)
- Randomized algorithms (short note) — **★★★** (2024 Q6)

---
---

# CHAPTER 6 — MISCELLANEOUS

## 6.1 Strassen's Matrix Multiplication (★★★★ — 2007,2011,2012,2013,2017,2023)
Multiply two n×n matrices with **7 multiplications + 18 add/sub** (not 8 mults) per 2×2 block, recursively.
**Recurrence:** `M(n)=7M(n/2)`, M(1)=1 → `M(n)=7^(log₂n)=n^(log₂7)≈n^2.807`.
Additions: `A(n)=7A(n/2)+18(n/2)²` → also Θ(n^log₂7) by Master thm.
**Result: Θ(n^2.81), better than brute-force Θ(n³).** Improvement is *asymptotic* (large n).

## 6.2 FFT — Fast Fourier Transform (★★★ — 2004,2008,2009,2019)
Computes DFT in **O(n log n)** instead of O(n²). **D&C:** split polynomial into even/odd-index parts, `p(x)=p_even(x²)+x·p_odd(x²)`, recurse with ω² as (n/2)-th root of unity, combine via roots of unity. Needs n = power of 2.

## 6.3 15-Puzzle by Branch & Bound (★★★ — 2012,2013,2019)
4×4 grid, 15 tiles + 1 blank; slide to goal. State-space tree; children = Up/Down/Left/Right slides. **Solvable iff** Σ L(k) + e is even (L(k)=inversions, e=row of blank). B&B prunes unreachable states.

## 6.4 Amortized Analysis (★★★ — 2013)
Average cost per op over a **sequence**, even if one op is expensive. 3 methods: **Aggregate** (total/#ops), **Accounting** (banker's, credits), **Potential** (physicist's, Φ).

## 6.5 LUP Decomposition (★★ — 2013)
Factor PA=LU (L unit lower-triangular, U upper-triangular, P permutation). Solve Ax=b via forward substitution (Ly=Pb) then back substitution (Ux=y).

## ⏱ Chapter 6 — 5-MINUTE REVISION SHEET
- **Strassen:** 7 mults, M(n)=7M(n/2) → **n^log₂7 ≈ n^2.81** (beats n³).
- **FFT:** D&C even/odd split → **O(n log n)** (vs O(n²) DFT).
- **15-puzzle:** B&B state-space; solvable iff Σinversions+blank-row even.
- **Amortized:** Aggregate / Accounting / Potential.
- **LUP:** PA=LU → forward then back substitution.

## Questions Asked Previously — Ch.6
- Strassen procedure + recurrence + complexity + is-it-better — **★★★★** (2007,2011,2012,2013,2017,2023)
- FFT short note / algorithm + complexity — **★★★** (2004,2008,2009,2019)
- 15-puzzle by B&B + state space — **★★★** (2012,2019)
- Amortized analysis short note — **★★★** (2013)
- LUP decomposition — **★★**

---
---

# 🎯 EXAM PREDICTION — RANKED (for 04 Jul 2026)

### MOST PROBABLE "WRITE THE ALGORITHM"
1. **Prim's / Kruskal's MST** (★★★★★) — near-certain.
2. **Quick Sort** + best/worst/avg derivation (★★★★★).
3. **Floyd-Warshall APSP** (★★★★★).
4. **Matrix-Chain Multiplication** (★★★★★).
5. **N-Queens** backtracking (★★★★★).
6. **Bellman-Ford** (-ve weights) (★★★★).
7. **Dijkstra** (★★★★).
8. **Ford-Fulkerson** max flow (★★★★).
9. **Job Sequencing** greedy (★★★★).
10. **KMP** string matching (★★★).

### MOST PROBABLE NUMERICAL / TRACING
1. **Fractional knapsack** (greedy ratio-sort) — ★★★★★.
2. **Matrix-chain** min-multiplication table — ★★★★★ (2023, 2024).
3. **Prim/Kruskal MST** trace + cost — ★★★★★ (2023, 2024).
4. **Master theorem** recurrence solving (incl. n^0.51, √2·T(n/2)) — ★★★★★ (2023, 2024).
5. **Max-flow** on given network, step-by-step — ★★★★ (2023, 2024).
6. **Floyd-Warshall / transitive closure** — ★★★★.
7. **Recurrence by generating function** — ★★★★.
8. **Tower of Hanoi** solve — ★★★.
9. **Job sequencing** numerical — ★★★.

### MOST PROBABLE THEORY (15-mark)
1. **P / NP / NP-hard / NP-complete + diagram** — ★★★★★.
2. **Asymptotic notations with graphs** — ★★★★★.
3. **Cook's theorem + Clique NP-completeness** — ★★★★.
4. **Strassen** procedure + recurrence — ★★★★.
5. **Max-flow-min-cut theorem** — ★★★★.
6. **DP vs Greedy vs D&C** comparison — ★★★★.

### SAFE-BET 70-MARK STRATEGY
- **Group A (10×1):** binary search O(log n), Floyd O(V³), quick sort worst O(n²), heap insert O(log n), Prim's data structure = priority queue/heap, DFS = stack, BFS = queue, TSP = NP-hard, 0/1 knapsack greedy = FALSE, spanning tree def, Ω = lower bound, backtracking = DFS, Knapsack-greedy time O(n log n).
- **Group B (any 3):** {quick sort complexity, Prim's algo+complexity, job sequencing, Floyd algo, randomized algo note, BFS vs DFS, union-find}.
- **Group C (any 3):** lock in {MST numerical + N-Queens + Floyd}, {Matrix-chain numerical + Kruskal}, {P/NP/NPC + reducibility}, {Strassen + asymptotics}, {Max-flow + Ford-Fulkerson}.

> For a guaranteed 9+: master **MST, Matrix-chain, Quick-sort derivation, Master theorem, P/NP theory, Fractional knapsack, Floyd, N-Queens, Max-flow** — these nine cover ~60 of 70 marks across every recent MAKAUT paper.
