# DAA — Chapter 4: Tractable and Intractable Problems

> **Source:** *Design and Analysis of Algorithms* organizer (MAKAUT/WBUT solved papers, Popular Publications), book pages DAA-106 to DAA-121.
> **Fidelity note for downstream readers (incl. LLMs):**
> - Concept summary and all multiple-choice questions/answers below were **verified against the scanned page images**, not just OCR.
> - **Answers are transcribed exactly as printed in the source.** A few printed answers/derivations are debatable by standard CS results (flagged inline as `[as printed]`); the source's letter/text is kept authoritative.
> - In worked solutions, any step illegible on the scan is marked `[illegible in source]` rather than guessed. Math is rendered in LaTeX; pseudocode and hand-drawn gadgets are kept in fenced blocks.

---

## Chapter at a Glance

- **P–NP Class:**
  - **Deterministic algorithm:** An algorithm having a property that the result of every operation is uniquely defined is called a deterministic algorithm.
  - **Non-Deterministic Algorithm:** An algorithm containing certain operations whose outcomes are not uniquely defined but are limited to a specified set of possibilities is called a non-deterministic algorithm.
  - The **P versus NP problem** is to determine whether every language accepted by some nondeterministic algorithm in polynomial time is also accepted by some (deterministic) algorithm in polynomial time.

- **NP-Complete problem:** The NP-Complete problems are an interesting class of problems whose status is unknown. The properties of an NP-Complete problem are:
  - No polynomial-time algorithm has been discovered for solving an NP-Complete problem.
  - No polynomial lower bound in respect of time overhead has been proved for any NP-Complete problem.

---

## Multiple Choice Type Questions

**1.** Which one is true of the following? — *[WBUT 2008]*
a) All NP hard problems are NP complete   b) All NP complete problems are NP hard   c) Some NP complete problem are NP hard   d) none of these
**Answer: (b)**

**2.** Traveling salesman problem belongs to — *[WBUT 2009]*
a) P class   b) NP class   c) NP-Hard   d) NP-complete class
**Answer: (d)**

**3.** Consider the following statements: *NP hard problem is a subset of NP complete problem.* Which of the following alternatives is true. — *[WBUT 2009]*
a) I-True, II-False   b) Both True   c) Both False   d) I-False, II-True
**Answer: (d)**

**4.** Which one is true of the following? — *[WBUT 2010, 2013]*
a) All NP hard problems are NP complete   b) All NP complete problems are NP hard   c) Some NP complete problems are NP hard   d) None of these
**Answer: (b)**

**5.** Travelling Salesman Problem is — *[WBUT 2012, 2013]*
a) NP Hard   b) NP   c) NP Complete   d) none of these
**Answer: (a)** `[as printed]`

**6.** Which one is true of the following? — *[WBUT 2014]*
a) all NP hard problems are NP complete   b) all NP complete problems are NP hard   c) some NP complete problems are NP hard   d) none of these
**Answer: (c)**

---

## Short Answer Type Questions

**1. Define classes P, NP and NP complete.** *[WBUT 2008]*

- **Class P and Class NP:** Refer to Question No. 1(a) of Long Answer Type Questions.
- **Class NP complete:** Refer to Question No. 1(c) of Long Answer Type Questions.

**2. Describe circuit satisfiability problem and prove that circuit-SAT is in NP.** *[WBUT 2008]*
*OR,* **Define circuit satisfiability problem and prove that circuit SAT is in class NP.** *[WBUT 2014]*

Proving that circuit-SAT is in NP: The algorithm $V()$ takes in input the description of a circuit $C$ and a sequence of $n$ Boolean values $x_1, x_2, \ldots, x_n$ and $V(C, x_1, \ldots, x_n) = C(x_1, \ldots, x_n)$. i.e. $V$ simulates or evaluates the circuit.

Now we have to prove that for every decision problem $A$ in NP, we can find a reduction from $A$ to CSAT. This is a difficult result to prove, and it is impossible to prove it really formally without introducing the Turing machine model of computation. We will prove the result based on the following fact, of which we only give an informal proof.

Suppose $A$ is a decision problem that is solvable in $p(n)$ time by some program $P$, where $n$ is the length of the input. Also assume that the input is represented as a sequence of bits. Then, for every fixed $n$, there is a circuit $C_n$ of size about

$$O\!\left((p(n))^2 \cdot (\log p(n))^{O(1)}\right)$$

such that for every input $x = (x_1, \ldots, x_n)$ of length $n$, we have

$$A(x) = C_n(x_1, \ldots, x_n).$$

That is, circuit $C_n$ solves problem $A$ on all the inputs of length $n$. Furthermore, there exists an efficient algorithm (running in time polynomial in $p(n)$) that on input $n$ and the description of $P$ produces $C_n$.

**3. Describe Clique Decision Problem (CDP).** *[WBUT 2009, 2012]*

A Clique Decision Problem (CDP) in an undirected graph $G = (V, E)$ is a subset $V' \subseteq V$ of vertices, each pair of which is connected by an edge in $E$. In other words, a clique is a complete subgraph of $G$. The size of a clique is the number of vertices it contains. The clique problem is the optimization problem of finding a clique of maximum size in a graph. As a decision problem, we ask simply whether a clique of a given size $k$ exists in the graph. The formal definition is

$$\text{CLIQUE} = \{\langle G, k\rangle : G \text{ is a graph with a clique of size } k\}.$$

An algorithm for determining whether a graph $G = (V, E)$ with $|V|$ vertices has a clique of size $k$ is to list all $k$-subsets of $V$, and check each one to see whether it forms a clique. The running time of this algorithm is $\Omega\!\left(k^2 \binom{|V|}{k}\right)$, which is polynomial if $k$ is a constant. In general, however, $k$ could be near $|V|$, in which case the algorithm runs in super-polynomial time. As one might suspect, an efficient algorithm for the clique problem is unlikely to exist.

**4. What do you mean by non-deterministic algorithms?** *[WBUT 2009, 2012, 2016]*
*OR,* **What is nondeterministic algorithm? Explain with example.** *[WBUT 2014]*

In the theory of computation, a nondeterministic algorithm is an algorithm with one or more choice points where multiple different continuations are possible, without any specification of which one will be taken. A particular execution of such an algorithm picks a choice whenever such a point is reached. Thus, different execution paths of the algorithm arise when it is applied to the same input / initial state, and these paths, when they terminate, generally produce different output / end in different final states.

It is not random, as in a randomized algorithm, or indeterminate. Rather it has the super computational characteristic of choosing the optimal behavior. Conceptually, a nondeterministic algorithm could run on a deterministic computer with an unlimited number of parallel processors. Each time more than one step is possible, new processes are instantly forked to try all of them. When one successfully finishes, that result is returned. Thus, the computation is as fast as if it always chooses the right step.

This notion is defined for theoretical analysis. Nondeterministic algorithms compute the same class of functions as deterministic algorithms, but the complexity may be much less. Every nondeterministic algorithm can be turned into a deterministic algorithm, possibly with exponential slow down. Such an algorithm has **three phases**:
- **Nondeterministic "guessing" phase:** In this phase an arbitrary string, $s$, is written starting at some place in memory ($s$ may differ for each time it is run).
- **Deterministic "verifying" phase:** In this phase a normal algorithm will consider the input to the decision problem & $s$ may return true/false.
- **Output phase:** It verifies phase outputs. If it is then output is true; else no output.

*Example:* Merge Sort, Spanning Tree.

**5. Show that 2SAT is in P but 3SAT is NP-complete.** *[WBUT 2010]*

**2SAT is in P**

To show that $2\text{SAT} \in P$, we outline a polynomial time algorithm for solving 2SAT. The idea is to construct a directed graph $G(F) = (V, E)$ with

(i) $V = \{x, \bar{x} \mid F \text{ contains the literal } x\}$
(ii) $E = \{(x, y),\, (\bar{y}, x) \mid (x \vee y) \in F\} \subseteq (V \times V)$.

We interpret the (directed) edges of $G$ as implications. Because of the following equivalence

$$x \vee y \equiv (\bar{x} \rightarrow y) \wedge (\bar{y} \rightarrow x)$$

an assignment of $F$ corresponds to an assignment of $G$. An assignment is satisfying iff no implication modeled through an edge is violated. $G$ is satisfiable iff for no $x$ there exists a path from $x$ to $\bar{x}$ or from $\bar{x}$ to $x$ in $G$. In other words: in order to be satisfying, $x$ must not imply $\bar{x}$, and $\bar{x}$ must not imply $x$.

Thus, the following algorithm solves 2SAT (with input size $n = |F|$):
1. Construct the graph $G(F)$, which has $O(n)$ vertices and edges.
2. For each variable $x$, search a path from $x$ to $\bar{x}$. Effort: $O(n^2)$.
3. If no such paths exist, return 'yes', otherwise return 'no'.

This algorithm has complexity $O(n^2)$.

**3SAT is NP-complete**

A version of the SAT problem in which every clause has 3 literals is called 3SAT.

Let the given instance of SAT contain the collection $C = \{c_1, c_2, \ldots, c_m\}$ of clauses over the variables $U = \{u_1, u_2, \ldots, u_n\}$. We construct a collection $C_0$ of 3 literal clauses over the variables $U_0$ which consist of the original variables plus sets of additional variables as follows:

Replace each clause $c_i \in C$ by a collection of 3 literal clauses over the variables which appear in $c_i$ plus some additional variables which appear only in these 3 literal clauses. The exact procedure depends on the number of literals in $c_i$.

Let $c_i \in C$ be given by $\{z_1, z_2, \ldots, z_k\}$ where the $z_j$'s are literals over $U$.

If $k = 1$, $c_i = \{z_1\}$, use two additional variables $\{y_{i1}, y_{i2}\}$. Form the collection
$$C_i' = \{\{z_1, y_{i1}, y_{i2}\},\ \{z_1, \bar{y}_{i1}, y_{i2}\},\ \{z_1, y_{i1}, \bar{y}_{i2}\},\ \{z_1, \bar{y}_{i1}, \bar{y}_{i2}\}\}.$$

$k = 2$, $c_i = \{z_1, z_2\}$, use one additional variable $\{y_{i1}\}$. Form the collection
$$C_i' = \{\{z_1, z_2, y_{i1}\},\ \{z_1, z_2, \bar{y}_{i1}\}\}.$$

$k = 3$, $c_i = \{z_1, z_2, z_3\}$. No additional variables. $C_i' = c_i$.

$k > 3$, use the additional variables $\{y_{i1}, y_{i2}, \ldots, y_{i,k-3}\}$. Form the collection
$$C_i' = \{\{z_1, z_2, y_{i1}\},\ \{\bar{y}_{i1}, z_3, y_{i2}\},\ \{\bar{y}_{i2}, z_4, y_{i3}\},\ \{\bar{y}_{i3}, z_5, y_{i4}\},\ \ldots,\ \{\bar{y}_{i,k-3}, z_{k-1}, z_k\}\}.$$

To show that this procedure forms a polynomial reduction, firstly we observe that the number of 3 literal clauses in $C'$ is bounded by a polynomial in $nm$ which leads to the procedure being a polynomial time one. Secondly, whenever $C$ is satisfiable, then the $C'$ clauses formed in the cases $k \le 3$ are automatically satisfied (for arbitrary assignment of any additional variables) while in the case $k > 3$:

(a) If $z_1$ or $z_2$ is true, assign all additional variables the truth value "false". In this case, the first literal in each relevant clause is true.

(b) If $z_{k-1}$ or $z_k$ is true, assign all additional variables the truth value "true". In this case, the third literal in each relevant clause is true.

(c) Otherwise, if $z_l$ is true, assign $y_{ij}$ the value "true" when $1 \le j \le l-2$ and the value "false" when $l-1 \le j \le k-3$. In this case, the third literal in each relevant clause preceding the one which includes $z_l$ is true while the first literal in each relevant clause succeeding the one which includes $z_l$ is true.

Thus all the clauses in $C'$ are satisfied. Conversely, if all the clauses in $C'$ are satisfied by a truth assignment to $U'$ (which includes the original variables), then $C$ is satisfied by the same truth assignment restricted to $U$.

Thus we conclude that $C'$ is satisfied if and only if $C$ is satisfied.

**6. Show that 3-colouring problem is NP-complete.** *[WBUT 2010]*

1. 3-Coloring is in NP because for each node a color from $\{1, 2, 3\}$. Check if for each edge $(u, v)$, the color of $u$ is different from that of $v$.
2. Reduce 3-SAT to 3-COLORING.
3. Given a 3-SAT formula of $m$ clauses on $n$ variables $x_1, x_2, \ldots, x_n$. We construct a graph $G$ as follows. We have
   (a) a vertex $v_i$ for each variable $x_i$,
   (b) a vertex $v_i'$ for the negation of each variable $x_i$,
   (c) 5 vertices $j_1$–$j_5$ for each clause $j$,
   (d) 3 special vertices: $T, F, R$.

We would like $T$, $F$, and $R$ to be forced to different colors, so we will add edges between them to form a triangle. For the remaining nodes, any node that is colored the same color as $T/F/R$ will be called colored TRUE/FALSE/RED, respectively. We would like the edges to enforce the constraints on satisfying assignments.

- **Constraint:** For all $i$, exactly one of $v_i$ and $v_i'$ is colored TRUE and one is colored FALSE.
  **Edges:** for each $i$, form a triangle between $v_i$, $v_i'$, and $R$.
- **Constraint:** For each clause $j$, at least one of the literals in the clause is colored TRUE.
  **Edges:** for each clause, say $= (x_i$ or $\text{not}(x_j)$ or $x_k)$, we have the following gadget.

```
vi ---j1
   |\
   | j3---j4
   |/    | \
vj'---j2 |  T
   |     | /
   |    j5
   |   /
   | /
vk --------- F
```

**Claim:** If each of $v_i$, $v_j'$, and $v_k$ is colored TRUE or FALSE, then the gadget is 3-colorable iff at least one of $v_i$, $v_j'$, and $v_k$ is colored TRUE.

**Proof:** If $v_i$, $v_j'$, and $v_k$ are all colored false, then we are forced to the following colors:

```
F ---j1
   |\
   |/j3--- F
   |/    | \
F ---j2  |  T
   |     | /
   |    j5
   |
F --------- R
```

But then $j_1, j_2, j_3$ all must be colored different colors and NONE can be colored F, so there is no legal coloring.

The remainder of the proof considers the 7 possible combinations of coloring $v_i$, $v_j'$, and $v_k$ such that at least one is colored TRUE and the rest are colored FALSE, and shows that a 3 coloring exists in each case. As an example, if $v_k$ is colored TRUE but $v_i$ and $v_j'$ are colored FALSE, we have the following legal 3-coloring:

```
F --- j1
   |\
   | F --- R
   |/    | \
F --- R  |  T
   |     | /
   |    j5
   |   /
T ---------
```

The other cases are similar and were presented in class. The construction takes polynomial time. Follows from the above arguments thus 3-COLORING is NP-complete.

> *(The three gadget figures above are hand-drawn in the source; the fenced reproductions preserve the vertices $v_i, v_j', v_k, j_1$–$j_5, T, F, R$ and their adjacency structure as drawn. `[diagram]`)*

**7. State satisfiability problem. State Cook's theorem in connection with P and NP problem.** *[WBUT 2015]*

**1st part:**

SATISFIABILITY, or SAT, is a problem of great practical importance, with applications ranging from chip testing and computer design to image analysis and software engineering. It is also a canonical hard problem. Here's what an instance of SAT looks like:

$$(x \vee y \vee z)(x \vee \bar{y})(y \vee \bar{z})(z \vee \bar{x})(\bar{x} \vee \bar{y} \vee \bar{z})$$

This is a Boolean formula in conjunctive normal form (CNF). It is a collection of clauses (the parentheses), each consisting of the disjunction (logical *or*, denoted $\vee$) of several literals, where a literal is either a Boolean variable (such as $x$) or the negation of one (such as $\bar{x}$).

A satisfying truth assignment is an assignment of false or true to each variable so that every clause contains a literal whose value is true. The SAT problem is the following: given a Boolean formula in conjunctive normal form, either find a satisfying truth assignment or else report that none exists.

**2nd part:**

The Cook's Theorem gives a proof that the problem SAT is NP-Complete, via the technique of showing that any problem in NP may be reduced to it.

Before proving the theorem, we give a formal definition of the SAT problem (Satisfiability Problem): Given a Boolean formula $\varphi$ in CNF (Conjunctive Normal Form), is the formula satisfiable? In other words, we are given some Boolean formula $\varphi$ with $n$ Boolean variables $x_1, x_2, \ldots, x_n$, $\varphi = C_1 \wedge C_2 \wedge \cdots \wedge C_k$, where each of the $C_i$ is a clause of the form $(l_{i1} \vee l_{i2} \vee \ldots \vee l_{ij})$, with each $l_{ij}$ a literal drawn from the set $\{x_1, x_2, \ldots, x_n, \bar{x}_1, \bar{x}_2, \ldots, \bar{x}_n\}$. We need to decide whether or not there exists some setting of the $x_1, x_2, \ldots, x_n$ that cause the formula $\varphi$ to be satisfied (take on a Boolean value of true).

**Cook-Levin Theorem:** SAT is NP-complete.

**Statement:** Suppose $L$ is an NP problem, then $L$ has a polynomial time verifier $V$:
1. If $x \in L$, $\exists$ witness $y$, $V(x, y) = 1$
2. If $x \notin L$, $\forall$ witness $y$, $V(x, y) = 0$

We can build a circuit with polynomial size for the verifier $V$, since the verifier runs in polynomial time (note that this fact is nontrivial; however, it is left to the reader to verify that it is true). The circuit contains AND, OR and NOT gates. The circuit has $|x| + |y|$ sources, where $|x|$ of them are hardcoded to the values of the bits in $x$ and the rest $|y|$ are variables.

**8. What do you mean by chromatic number of a graph?** *[WBUT 2017]*

The least number of colors needed to color a graph is called its chromatic number. The chromatic number, say $X$, of a complete graph $G$ is $X(G) = d+1$, where $d$ is the degree of the vertex. So if we consider a graph $G$ as a complete graph, i.e., each node is connected to all other nodes of the graph, then the total number of colors required to color all the nodes of the graph is $d+1$. e.g.,

> *(Figure: four complete graphs $G_1, G_2, G_3, G_4$ of increasing order, each requiring $(d+1)$ colors. `[diagram]`)*

In the above figure each graph like $G_1, G_2, G_3$ or $G_4$ requires $(d+1)$ colors to color all the nodes, where $d$ is the degree of each node.

**9. Can we define Euler graph with SAT problem?** *[MODEL QUESTION]*

In the summer of 1735 Leonhard Euler, the famous Swiss mathematician, was walking across the bridges of the East Prussian town of Konigsberg. After a while, he noticed in frustration that, no matter where he started his walk from, no matter how cleverly he continued, it was impossible to cross each bridge exactly once. And from this silly ambition, the field of graph theory was born. Euler identified at once the map of the park into a graph whose vertices are the four land masses (two islands, two banks) and whose edges are the seven bridges:

> *(Figure: the Königsberg multigraph — vertices "Northern bank", "Small island", "Big island", "Southern bank" joined by the seven bridges, with multiple edges between some pairs. `[diagram]`)*

This graph has multiple edges between two vertices, a feature we have not been allowing so far in our discussion, but one that is meaningful for this particular problem, since each bridge must be accounted for separately. We are looking for a path that goes through each edge exactly once (the path is allowed to repeat vertices). In other words, we are asking this question:

*When can a graph be drawn without lifting the pencil from the paper?*

The answer discovered by Euler is simple, elegant, and intuitive: If and only if (a) the graph is connected and (b) every vertex, with the possible exception of two vertices (the start and final vertices of the walk), has even degree. This is why Konigsberg's park was impossible to traverse: all four vertices have odd degree.

To put it in terms of our present concerns, let us define a search problem called EULER PATH: Given a graph, find a path that contains each edge exactly once. It follows from Euler's observation, and a little more thinking, that this search problem can be solved in polynomial time.

---

## Long Answer Type Questions

**1. a) Define the classes P and NP.** *[WBUT 2005, 2009, 2016]*

**Class P:**
Let $A$ be an algorithm to solve a problem $X$. We say that $A$ is deterministic if, when presented with an instance of the problem $X$, it has only one choice in each step throughout its execution. Thus, if $A$ is run again and again on the same input instance, its output never changes.

The class of decision problem P consists of those decision problems whose solution can be obtained using a deterministic algorithm that runs in a polynomial number of steps, i.e., in $O(n^k)$ steps, for some nonnegative integer $k$, where $n$ is the input size.

**Class NP:**
The class NP consists of those problems for which there exists a deterministic algorithm $A$, which presents with a claimed solution to an instance of the problem. This is able to verify its correctness in polynomial time. That is, if the claimed solution leads to a yes answer, there is a way to verify this solution in polynomial time. For example, in the hamiltonian-cycle problem, given a directed graph $G = (V, E)$, a certificate would be a sequence $(v_1, v_2, v_3, \ldots, v_{|V|})$ of $|V|$ vertices. It is easy to check in polynomial time that $(v_i, v_{i+1}) \in E$ for $i = 1, 2, 3, \ldots, |V| - 1$ and that $(v_{|V|}, v_1) \in E$ as well. Any problem in P is also in NP, since if a problem is in P then we can solve it in polynomial time without even being given a certificate. We will formalize this notion later in this chapter, but for now we can believe that $P \subseteq NP$. The open question is whether or not P is a proper subset of NP.

**b) Discuss what you mean by Polynomial Reductions.** *[WBUT 2005, 2009, 2016]*

The root of NP-Completeness is reducibility. Informally, a problem $P$ can be reduced to another problem $Q$ if any instance of $P$ can be "easily rephrased" as an instance of $Q$, the solution to which provides a solution to the instance of $P$. This rephrasing is called transformation. If $P$ reduces to $Q$, $P$ is "no harder to solve" than $Q$.

Suppose,
- $P_1$ : is an unknown problem (easy/hard ?)
- $P_2$ : is known to be easy

If we can reduce $P_1$ to $P_2$, that is, we can easily solve $P_1$ using $P_2$ as a subroutine then $P_2$ is easy. `[as printed]`

One of the examples of reduction is that solving linear equations is reducible to solving quadratic equations. e.g.,

- $P$: Given a set of Booleans, is at least one TRUE.
- $Q$: Given a set of integers.
- Transformation: $(x_1, x_2, \ldots, x_n) = (y_1, y_2, \ldots, y_n)$ where $y_i = 1$ if $x_i = $ TRUE, $y_i = 0$ if $x_i = $ FALSE.

**c) Discuss diagrammatically the relations among P class, NP class, NP-hard and NP-complete.** *[WBUT 2005, 2009]*
*OR,* **Define classes P, NP, NP hard and NP-complete and also explain their relationship diagrammatically.** *[WBUT 2014]*
*OR,* **Define P-class, NP-class, NP-complete class and NP-hard class of problems. What is the relation between them?** *[WBUT 2015, 2016]*

- We say that a decision problem $P_i$ is NP-complete if it is NP-hard and it is also in the class NP itself.
- In symbols, $P_i$ is NP-complete if $P_i$ is NP-hard and $P_i \in NP$.
- Highly informally, it means that $P_i$ is one of the hardest problems in NP.
- So the NP-complete problems form a set of problems that may or may not be intractable but, whether intractable or not, are all, in some sense, of equivalent complexity.
- If anyone ever shows that an NP-complete problem is tractable, then
  - Every NP-complete problem is also tractable indeed,
  - Every problem in NP is tractable and so $P = NP$.
- If anyone ever shows that an NP-complete problem is intractable, then
  - Every NP-complete problem is also intractable and, of course, $P \neq NP$.
  - So there are two possibilities as shown in figure:

> *(Figure: two cases. Left ($P \neq NP$): a large region NP containing NP-hard, which in turn contains NP-Complete, with P as a separate smaller region inside NP. Right: a single region labeled $P = NP$. `[diagram]`)*

- We don't know which the case is, but this gives Computer Scientists a clear line of attack. It makes sense to focus efforts on the NP-complete problems; they all stand or fall together.
- So these sound like very significant problems in our theory.

**2. Prove that CDP (Clique Decision Problem) is NP-Complete.** *[WBUT 2006, 2009, 2012]*

To show that $\text{CLIQUE} \in NP$, for a given graph $G = (V, E)$, we use the set $V' \subseteq V$ of vertices in the clique as a certificate for $G$. Checking whether $V'$ is a clique can be accomplished in polynomial time by checking whether, for each pair $u, v \in V'$, the edge $(u, v)$ belongs to $E$.

We next prove that $3\text{-CNF-SAT} \le_p \text{CLIQUE}$, which shows that the clique problem is NP-hard. The reduction algorithm begins with an instance of 3-CNF-SAT. Let $\varphi = C_1 \wedge C_2 \wedge \cdots \wedge C_k$ be a Boolean formula in 3-CNF with $k$ clauses. For $r = 1, 2, \ldots, k$, each clause $C_r$ has exactly three distinct literals $l_1^r, l_2^r$, and $l_3^r$. We shall construct a graph $G$ such that $\varphi$ is satisfiable if and only if $G$ has a clique of size $k$.

The graph $G = (V, E)$ is constructed as follows. For each clause $(l_1^r \vee l_2^r \vee l_3^r)$ in $\varphi$, we place a triple of vertices $v_1^r, v_2^r$, and $v_3^r$ into $V$. We put an edge between two vertices $v_i^r$ and $v_j^s$ if both of the following hold:
- $v_i^r$ and $v_j^s$ are in different triples, that is, $r \neq s$, and
- their corresponding literals are consistent, that is, $l_i^r$ is not the negation of $l_j^s$.

This graph can easily be computed from $\varphi$ in polynomial time. As an example of this construction, if we have $\varphi = (x_1 \vee \neg x_2 \vee \neg x_3) \wedge (\neg x_1 \vee x_2 \vee x_3) \wedge (x_1 \vee x_2 \vee x_3)$, then $G$ is the graph shown in the figure below.

> *(Figure: the graph $G$ derived from the 3-CNF formula $\varphi = C_1 \wedge C_2 \wedge C_3$ with $C_1 = (x_1 \vee \neg x_2 \vee \neg x_3)$, $C_2 = (\neg x_1 \vee x_2 \vee x_3)$, $C_3 = (x_1 \vee x_2 \vee x_3)$. Three triples of vertices, with edges between consistent literals in different triples; a satisfying assignment ($x_2 = 0$, $x_3 = 1$, $x_1$ either) corresponds to a clique on the lightly shaded vertices. `[diagram]`)*

The graph $G$ derived from the 3-CNF formula $\varphi = C_1 \wedge C_2 \wedge C_3$, where $C_1 = (x_1 \vee \neg x_2 \vee \neg x_3)$, $C_2 = (\neg x_1 \vee x_2 \vee x_3)$ and $C_3 = (x_1 \vee x_2 \vee x_3)$, in reducing 3-CNF-SAT to CLIQUE. A satisfying assignment of the formula has $x_2 = 0$, $x_3 = 1$, and $x_1$ may be either 0 or 1. This assignment satisfies $C_1$ with $\neg x_2$, and it satisfies $C_2$ and $C_3$ with $x_3$, corresponding to the clique with lightly shaded vertices.

We must show that this transformation of $\varphi$ into $G$ is a reduction. First, suppose that $\varphi$ has a satisfying assignment. Then each clause $C_r$ contains at least one literal $l_i^r$ that is assigned 1, and each such literal corresponds to a vertex $v_i^r$. Picking one such "true" literal from each clause yields a set $V'$ of $k$ vertices. We claim that $V'$ is a clique: For any two vertices $v_i^r, v_j^s \in V'$, where $r \neq s$, both corresponding literals are mapped to 1 by the given satisfying assignment, and thus the literals cannot be complements. Thus, by the construction of $G$, the edge $(v_i^r, v_j^s)$ belongs to $E$.

Conversely, suppose that $G$ has a clique $V'$ of size $k$. No edges in $G$ connect vertices in the same triple, and so $V'$ contains exactly one vertex per triple. We can assign 1 to each literal $l_i^r$ such that $v_i^r \in V'$ without fear of assigning 1 to both a literal and its complement, since $G$ contains no edges between inconsistent literals. Each clause is satisfied, and so $\varphi$ is satisfied.

**3. a) What is Non-deterministic algorithm? Differentiate between Deterministic and Non-Deterministic algorithm.**
**b) Write algorithm to sort an array using Deterministic and Non-Deterministic technique. Compare the two techniques and show that the time complexity of non-deterministic technique is better than Deterministic.**
**c) Describe P class, NP class, NP hard and NP complete class and describe their relationships.** *[WBUT 2011]*

**a)** Refer to Question No. 4 of Short Answer Type Questions.

**b)** There are many deterministic algorithms for sorting an array; quicksort is one of them. The following procedures together form the quick sort algorithm.

```
QuickSort(A, p, r)
{
   if p < r then
   {
      q ← Partition(A, p, r);
      QuickSort(A, p, q);
      QuickSort(A, q + 1, r);
   }
}
```

*Algorithm for partition:*

```
Partition(A, p, r)
{
   initialize x ← A[p];
   i ← p-1,  j ← r+1;
   while (i < j)
   {
      while (A[--j] > x)
      {
         while (A[++i] < x)
         {
            if (i < j) then
               Exchange(A[i], A[j]);
         }
      }
   }
   return j;
}

Exchange(A, i, j)
{
   p ← A[i];
   A[i] ← A[j];
   A[j] ← p;
}
```

Partition selects the first key $x \leftarrow A[p]$ as a pivot key about which the array is partitioned. If $x \le A[p]$, $A[p]$ will move towards the left of the pivot, otherwise if $x \ge A[p]$, $A[p]$ will move towards the right of the pivot key $x$.

**Complexity Analysis**

- **Best case**
  - In the best case, the pivot is in the middle position of the array.
  - To simplify the equations, we assume that the two sub-arrays are each exactly half the length of the original one. So, we get $T(n) = 2T(n/2) + cn$, $c > 0$ constant (independent of $n$) and $n \ge 2$ with $T(1) = 1$.
  - This is very similar to the formula for Merge sort, and a similar analysis leads to $T(n) = cn \log_2 n + n$ which is $O(n \log_2 n)$.

- **Average case:** We assume that each of the sizes of the left partitions are equally likely, and hence each has probability $1/n$.
  - With this assumption, the average value of $T(i)$, and hence also of $T(n-i-1)$, is $(T(0) + T(1) + \ldots + T(n-1))/n$.
  - Naturally, our recurrence relation becomes
    $$T(n) = 2(T(0) + T(1) + \ldots + T(n-1))/n + cn.$$
  - Multiplying both sides by $n$ we find $nT(n) = 2(T(0) + T(1) + \ldots + T(n-1)) + cn^2$.
  - Substitution of $n$ by $n-1$ gives
    $$(n-1)T(n-1) = 2(T(0) + T(1) + \ldots + T(n-2)) + c(n-1)^2.$$
  - Subtracting the last equation from the previous one, we get $nT(n) - (n-1)T(n-1) = 2T(n-1) + 2cn - c$.
  - Rearranging and ignoring constant $c$, we arrive at $nT(n) = (n+1)T(n-1) + 2cn$.
  - Division throughout by $n(n+1)$ gives
    $$T(n)/(n+1) = T(n-1)/n + 2c/(n+1).$$
  - Hence, $T(n-1)/n = T(n-2)/(n-1) + 2c/n$. Similarly $T(2)/3 = T(1)/2 + 2c/3$.
  - Thus
    $$T(n)/(n+1) = T(1)/2 + 2c(1/3 + 1/4 + \ldots + 1/(n+1)).$$
  - The sum in brackets is about $\log_e(n+1) + \gamma - 3/2$, where $\gamma$ is Euler's constant, which is approximately $0.577$.
  - So, $T(n)/(n+1) = O(\log_2 n)$ and thus $T(n) = O(n \log_2 n)$.

- **Worst case:** In quick sort technique, the worst case condition arises when the elements of the array are already sorted.
  - If the pivot is always the smallest element, then always $J = 0$.
  - We ignore the term $T(0) = 1$, so the recurrence relation is $T(n) = T(n-1) + cn$.
  - So, $T(n-1) = T(n-2) + c(n-1)$ and so on until we get $T(2) = T(1) + c(2)$.
  - Substituting backwards, we get $T(n) = T(1) + c(n + \ldots + 2) = O(n^2)$.

It may be noted that this case happens if we always take the pivot to be the first element in the array and the array is already sorted.

Let $A[i]$, $1 \le i \le n$, be an unsorted array of positive integers. The nondeterministic algorithm $\text{NSort}(A, n)$ sorts the numbers into nondecreasing order and then outputs them in this order. An auxiliary array $B[1:n]$ is used for convenience. Line 4 initializes $B$ to zero, though any value different from all the $A[i]$ will do. In the for loop of lines 5 to 10, each $A[i]$ is assigned to a position in $B$. Line 7 nondeterministically determines this position. Line 8 ascertains that $B[j]$ has not already been used. Thus, the order of the numbers in $B$ is some permutation of the initial order in $A$. The for loop of lines 11 and 12 verifies that $B$ is sorted in nondecreasing order. A successful completion is achieved if and only if the numbers are output in nondecreasing order. Since there is always a set of choices at line 7 for such an output order, algorithm NSort is a sorting algorithm. Its complexity is $O(n)$. All deterministic sorting algorithms must have a complexity $\Omega(n \log n)$.

```
1   Algorithm NSort(A, n)
2   // Sort n positive integers
3   {
4      for i := 1 to n do B[i] := 0;   // Initialize B[].
5      for i := 1 to n do
6      {
7         j := Choice(1, n);
8         if B[j] ≠ 0 then Failure();
9         B[j] := A[i];
10     }
11     for i := 1 to n - 1 do          // Verify order.
12        if B[i] > B[i+1] then Failure();
13     Write(B[1:n]);
14     Success}
15  }
```

**c)** Refer to Question No. 1 of Long Answer Type Questions.

**4. What do you mean by deterministic and non-deterministic algorithm? Write a non-deterministic algorithm for searching an element from a given list of real numbers. Also, specify its time complexity.** *[WBUT 2015]*

**1st part:**

The algorithm where the result is uniquely defined is termed the deterministic algorithm. Such algorithms agree with the way programs are executed on a computer. In a theoretical framework we can remove this restriction on the outcome of every operation. We can allow algorithms to contain operations whose outcomes are not uniquely defined but are limited to specified sets of possibilities. The machine executing such operations is allowed to choose anyone of these outcomes subject to a termination condition. This leads to the concepts of a nondeterministic algorithm.

To specify such algorithms, we introduce three new functions:
(a) Choice($s$) arbitrarily chooses one of the elements of set $s$.
(b) Failure() signals an unsuccessful completion.
(c) Success() signals a successful completion.

The assignment statement $x := \text{choice}(1, n)$ could result in $x$ being assigned anyone of the integers in the range $(1, n)$; there is no rule specifying how this choice is to be made. The Failure() and Success() signals are used to define a computation of the algorithm. These statements cannot be used to effect a return. Whenever there is a set of choices that leads to a successful completion, then one such set of choices is always made and the algorithm terminates successfully.

**2nd part:**

A non-deterministic algorithm for searching an element from a given list of real numbers: Let $A[1..n]$ be an array and $x$ be the target element to search for. We can write the following nondeterministic search algorithm:

```
N_SEARCH(A, x)
{
   j = choice(1 ... n)
   if A[j] = x then
      print(j)
      success
   endif
   print('0')
   failure
}
```

Time complexity: $O(n)$.

**5. Write short notes on the following:**
**a) Clique decision problem** *[WBUT 2003, 2015]*
**b) NP-hard and NP-complete classes** *[WBUT 2017]*
**c) Importance of P, NP classes** *[MODEL QUESTION]*

**a) Clique decision problem:** Refer to Question No. 3 of Short Answer Type Questions.

**b) NP-hard and NP-complete classes:** Refer to Question No. 1(c) of Long Answer Type Questions.

**c) Importance of P, NP classes:**

The importance of the P vs NP question stems from the successful theories of NP-completeness and complexity-based cryptography, as well as the potentially stunning practical consequences of a constructive proof of $P = NP$.

The theory of NP-completeness has its roots in computability theory. The computability precursors of the classes P and NP are the classes of decidable and c.e. (computably enumerable) languages, respectively. We say that a language $L$ is c.e. (or semi-decidable) if and only if $L = L(M)$ for some Turing machine $M$. We say that $L$ is decidable if and only if $L = L(M)$ for some Turing machine $M$ which satisfies the condition that $M$ halts on all input strings $w$. There is an equivalent definition of c.e. which brings out its analogy with NP, namely $L$ is c.e. if and only if there is a computable "checking relation" $R(x, y)$ such that $L = \{x \mid \exists y\, R(x, y)\}$.

Using the notation $\langle M \rangle$ to denote a string describing a Turing machine $M$, we define the Halting Problem HP as follows:

$$\text{HP} = \{\langle M \rangle \mid M \text{ is a Turing machine which halts on input } \langle M \rangle\}.$$

Turing used a simple diagonal argument to show that HP is not decidable. On the other hand, it is not hard to show that HP is c.e. Of central importance in computability theory is the notion of reducibility.

---

*End of Chapter 4. Remaining DAA chapters: 1 — Introduction; 2 — Fundamental Algorithmic Strategies; 3 — Graph and Tree Traversal Algorithms; 5 — Approximation Algorithms; 6 — Miscellaneous.*
