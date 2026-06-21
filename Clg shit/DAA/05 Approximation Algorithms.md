# DAA — Chapter 5: Approximation Algorithms

> **Source:** *Design and Analysis of Algorithms* organizer (MAKAUT/WBUT solved papers, Popular Publications), book pages DAA-122 to DAA-126.
> **Fidelity note for downstream readers (incl. LLMs):**
> - Concept summary and all questions/answers below were **verified against the scanned page images**, not just OCR.
> - **Answers are transcribed exactly as printed in the source.** Any printed answer that is debatable by standard CS results is flagged inline as `[as printed]`; the source's wording is kept authoritative.
> - In worked solutions, any step illegible on the scan is marked `[illegible in source]` rather than guessed. Math is rendered in LaTeX.

---

## Chapter at a Glance

- **Approximation Algorithm:**
  Suppose you need to solve an NP-hard problem $X$. So we have to find a polynomial algorithm to solve it. So, we must sacrifice one of three desired features:
  - Find out exact optimal solution.
  - Solve the problem in polynomial time to ensure time feasibility.
  - Provide solutions to arbitrary instances of the problem.

  Now applying an approximation algorithm, the following issues are achieved:
  - Guaranteed polynomial time execution.
  - Guaranteed to find "high quality" near-optimal solution within feasible time.

  But there is an additional responsibility that we need to prove how close the value of the solution is to the optimum, without even knowing what the optimum value is.

- **Examples of approximation algorithms for NP-Complete problems:**
  - Approximation ratio
  - Polynomial-Time Approximation Schemes
  - 2-Approximation for Vertex Cover
  - 2-Approximation for TSP special case
  - $\log n$-Approximation for Set Cover

---

## Long Answer Type Questions

**1. Write short notes on the following:**
- **a) Approximation algorithms** *[WBUT 2008, 2012, 2014]*
- **b) Approximation schemes** *[WBUT 2009, 2016]*
- **c) Vertex Cover Algorithm** *[WBUT 2014, 2016]*
- **d) Randomized algorithms** *[MODEL QUESTION]*
- **e) NP Complete problem** *[MODEL QUESTION]*

**Answer:**

### a) Approximation algorithms

If a problem is NP-complete, we are unlikely to find a polynomial-time algorithm for solving it. There are at least three approaches to getting around NP-completeness. First, if the actual inputs are small, an algorithm with exponential running time may be perfectly satisfactory. Second, we may be able to isolate important special cases that are solvable in polynomial time. Third, it may still be possible to find near-optimal solutions in polynomial time (either in the worst case or on average). In practice, near-optimality is often good enough. An algorithm that returns near-optimal solutions is called an *approximation algorithm*.

Suppose that we are working on an optimization problem in which each potential solution has a positive cost. We wish to find a near-optimal solution. Depending on the problem, an optimal solution may be defined as one with maximum possible cost or one with minimum possible cost; that is, the problem may be either a maximization or a minimization problem.

We say that an algorithm for a problem has an **approximation ratio** of $\rho(n)$ if, for any input of size $n$, the cost $C$ of the solution produced by the algorithm is within a factor of $\rho(n)$ of the cost $C^*$ of an optimal solution:

$$\max\left(\frac{C}{C^*},\ \frac{C^*}{C}\right) \le \rho(n)$$

We also call an algorithm that achieves an approximation ratio of $\rho(n)$ a **$\rho(n)$-approximation algorithm**. The definitions of approximation ratio and of $\rho(n)$-approximation algorithm apply for both minimization and maximization problems. For a maximization problem, $0 < C \le C^*$, and the ratio $C^*/C$ gives the factor by which the cost of an optimal solution is larger than the cost of the approximate solution. Similarly, for a minimization problem, $0 < C^* \le C$, and the ratio $C/C^*$ gives the factor by which the cost of the approximate solution is larger than the cost of an optimal solution. Since all solutions are assumed to have positive cost, these ratios are always well defined. The approximation ratio of an approximation algorithm is never less than 1, since $C/C^* < 1$ implies $C^*/C > 1$. Therefore, a 1-approximation algorithm produces an optimal solution, and an approximation algorithm with a large approximation ratio may return a solution that is much worse than optimal.

### b) Approximation schemes

Now applying an approximation algorithm, the following issues are achieved:
- Guaranteed polynomial time execution.
- Guaranteed to find "high quality" near-optimal solution within feasible time.

But there is an additional responsibility that we need to prove how close the value of the solution is to the optimum, without even knowing what the optimum value is.

**Different types of approximation algorithms and schemes**

There are different types of approximation algorithms and schemes described below:

- **$\rho$-approximation algorithm:**
  - An algorithm $A$ for problem $P$ that runs in polynomial time.
  - For every problem instance, $A$ outputs a feasible solution within ratio $\rho$ of the true optimum for that instance.

- **Polynomial-time approximation scheme (PTAS):**
  - A family of approximation algorithms $\{A_\varepsilon : \varepsilon > 0\}$ for a problem $P$.
  - $A_\varepsilon$ is a $(1 + \varepsilon)$-approximation algorithm for $P$.
  - $A_\varepsilon$ runs in time polynomial in input size for a fixed $\varepsilon$.

- **Fully polynomial-time approximation scheme (FPTAS):**
  - A PTAS where $A_\varepsilon$ runs in time polynomial both in input size and $1/\varepsilon$.

### c) Vertex Cover Algorithm

Given a $G = (V, E)$, find a minimum subset $C \subseteq V$, such that $C$ "covers" all edges in $E$, i.e., every edge $\in E$ is incident to at least one vertex in $C$.

> **[diagram]** Fig.: An instance of the Vertex Cover problem. An undirected graph with vertices $a, b, c, d, e, f, g, h, i$ and edges connecting them. An optimal vertex cover is $\{b, c, e, i, g\}$.

```
Algorithm 1: Approx-Vertex-Cover (G)
{
  1  C ← ∅
  2  while E ≠ ∅ ;
        pick any {u, v} ∈ E
        C ← C ∪ {u, v}
        delete all edges incident to either u or v
     return C
}
```

As it turns out, this is the best approximation algorithm known for vertex cover. It is an open problem to either do better or prove that this is a lower bound.

### d) Randomized algorithms

A randomized algorithm is an algorithm that employs a degree of randomness as part of its logic. The algorithm typically uses uniformly random bits as an auxiliary input to guide its behavior, in the hope of achieving good performance in the "average case" over all possible choices of random bits. An algorithm that uses the random numbers to decide what to do next anywhere in its logic is called a Randomized Algorithm. For example, in Randomized Quick Sort, we use a random number to pick the next pivot (or we randomly shuffle the array).

**Analysis of Randomized Algorithm:**

Some randomized algorithms have deterministic time complexity. For example, this implementation of Karger's algorithm has time complexity as $O(E)$. Such algorithms are called **Monte Carlo Algorithms** and are easier to analyse for the worst case. On the other hand, the time complexity of other randomized algorithms (other than Las Vegas) is dependent on the value of a random variable. Such randomized algorithms are called **Las Vegas Algorithms**. These algorithms are typically analysed for expected worst case. To compute the expected time taken in the worst case, all possible values of the used random variable need to be considered in the worst case and the time taken by every possible value needs to be evaluated. The average of all evaluated times is the expected worst case time complexity.

**Examples:**

For example, consider below a randomized version of QuickSort.

```
// Sorts an array arr[low..high]
randQuickSort(arr[], low, high)

1. If low >= high, then EXIT.
2. While pivot 'x' is not a Central Pivot.
     (i)   Choose uniformly at random a number from [low..high].
           Let the randomly picked number be x.
     (ii)  Count elements in arr[low..high] that are smaller
           than arr[x]. Let this count be sc.
     (iii) Count elements in arr[low..high] that are greater
           than arr[x]. Let this count be gc.
     (iv)  Let n = (high-low+1). If sc >= n/4 and
           gc >= n/4, then x is a central pivot.
3. Partition arr[low..high] around the pivot x.
4. // Recur for smaller elements
   randQuickSort(arr, low, sc-1)
5. // Recur for greater elements
   randQuickSort(arr, high-gc+1, high)
```

The important thing in our analysis is, the time taken by step 2 is $O(n)$.

### e) NP Complete problem

The NP-Complete problems are an interesting class of problems whose status is unknown. The properties of an NP-Complete problem are:
- No polynomial-time algorithm has been discovered for solving an NP-Complete problem.
- No polynomial lower bound in respect of time overhead has been proved for any NP-Complete problem.

In figure 1 we have shown the complexity of algorithms.

> **[diagram]** Fig. 1: A plot of $F(n)$ versus $n$. A shaded cone-shaped region labelled "NP-Complete" separates the "Exponential-time (Hard)" curves (upper region, e.g. $2^n$) from the "Polynomial-time (Easy)" curves (lower region, e.g. $n^2$, $n\log n$, $n$).

**NP class**

The notation NP stands for "nondeterministic polynomial time", since originally NP was defined in terms of nondeterministic machines (that is, machines that have more than one possible move from a given configuration). However, now it is customary to give an equivalent definition using the notion of a checking relation, which is simply a binary relation $R \subseteq \Sigma^* \times \Sigma_1^*$ for some finite alphabets $\Sigma$ and $\Sigma_1$. We associate with each such relation $R$ a language $L_R$ over $\Sigma \cup \Sigma_1 \cup \{\#\}$ defined by

$$L_R = \{\, w \,\#\, y \mid R(w, y) \,\}$$

where the symbol $\#$ is not in $\Sigma$. We say that $R$ is *polynomial-time* if and only if $L_R \in P$. Now we define the class NP of languages by the condition that a language $L$ over $\Sigma$ is in NP if and only if there is a $k \in \mathbb{N}$ ($\mathbb{N}$ is the set of natural numbers) and a polynomial-time checking relation $R$ such that for all $w \in \Sigma^*$,

$$w \in L \iff \exists\, y\,\big(|y| \le |w|^k \ \text{and}\ R(w, y)\big)$$

where $|w|$ and $|y|$ denote the lengths of $w$ and $y$, respectively.

For example, in the Hamiltonian-cycle problem, given a directed graph $G = (V, E)$, a certificate would be a sequence $(v_1, v_2, v_3, \ldots, v_{|V|})$ of $|V|$ vertices. It is easy to check in polynomial time that $(v_i, v_{i+1}) \in E$ for $i = 1, 2, 3, \ldots, |V| - 1$ and that $(v_{|V|}, v_1) \in E$ as well.

**Is $P = NP$?**

It is easy to see that the answer is independent of the size of the alphabet $\Sigma$ (we assume $|\Sigma| \ge 2$), since strings over an alphabet of any fixed size can be efficiently coded by strings over a binary alphabet. (For $|\Sigma| = 1$ the problem is still open, although it is possible that $P = NP$ in this case but not in the general case.)

It is trivial to show that $P \subseteq NP$, since for each language $L$ over $\Sigma$, if $L \in P$ then we can define the polynomial-time checking relation $R \subseteq \Sigma^* \cup \Sigma^*$ by

$$R(w, y) \iff w \in L, \quad \text{for all } w, y \in \Sigma^*.$$

Here are two simple examples, using decimal notation to code natural numbers:

The set of perfect squares is in $P$ and the set of composite numbers is in NP (and not known to be in $P$). For the latter, the associated polynomial-time checking relation $R$ is given by

$$R(\bar{a}, \bar{b}) \iff 1 < b < a \ \text{and}\ b \mid a$$

In general, the decimal notation for a natural number $c$ is denoted by $\bar{c}$.

---

*End of Chapter 5. Other DAA chapters: 1 — Introduction; 2 — Fundamental Algorithmic Strategies; 3 — Graph and Tree Traversal Algorithms; 4 — Tractable and Intractable Problems; 6 — Miscellaneous.*
