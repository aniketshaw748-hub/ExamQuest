# DAA — Chapter 3: Graph and Tree Traversal Algorithms

> **Source:** *Design and Analysis of Algorithms* organizer (MAKAUT/WBUT solved papers, Popular Publications), book pages DAA-82 to DAA-105.
> **Fidelity note for downstream readers (incl. LLMs):**
> - Concept summary and all multiple-choice questions/answers below were **verified against the scanned page images**, not just OCR.
> - **Answers are transcribed exactly as printed in the source.** Any printed answer that is debatable by standard CS results is flagged inline as `[as printed]`; the source's letter is kept authoritative.
> - In worked solutions, any step illegible on the scan is marked `[illegible in source]` rather than guessed. Math is rendered in LaTeX; pseudocode is kept in fenced blocks.
> - Graphs, trees and trace figures are hand-drawn in the source; they are given as a brief description plus a `[diagram]` marker.

---

## Chapter at a Glance

- **Tree:** A connected graph with no cycle is called a tree. Generally, a graph that does not contain any cycles is called an *acyclic graph*. So, we can say that a connected acyclic graph is a tree. *(Two small example trees are sketched as figures (a) and (b).)* `[diagram]`

- **Minimum cost spanning tree:** A minimum cost spanning tree $T$ of an edge-weighted graph $G$ contains all the vertices of $G$ with total cost of the edges minimum. It may not be unique. Two methods for finding the minimum cost spanning tree of a weighted graph $G$:
  1. Prim's Algorithm
  2. Kruskal's Algorithm

- **DFS (Depth First Search):** In a graph $G = (V, E)$, the Depth First Search (DFS) algorithm starts from a specific vertex $u \in V$, which is labeled as the current vertex. Then we traverse the graph by any edge $(u, v)$ incident to the current vertex $u$. If the edge $(u, v)$ leads to an already visited vertex $v$, then we backtrack to the current vertex $u$. Otherwise, if edge $(u, v)$ leads to an unvisited vertex $v$, then we move to $v$ and $v$ becomes our new current vertex. This process is continued until we get no vertex in this path. At this point, we start backtracking. The process terminates when backtracking leads back to the starting vertex with no vertex remaining unvisited.

- **BFS (Breadth First Search):** Breadth First Search (BFS) is a general technique for traversing a graph. It may be a directed graph or an undirected graph. BFS starts from a given vertex of a graph, which is at level 0. In the first stage, we visit all vertices at level 1. In the second stage, we visit all vertices at the second level, i.e., visit the unvisited vertices which are adjacent to the vertices at level 1, and so on. The BFS traversal terminates when every vertex has been visited. BFS can label each vertex by the length of the shortest path (in terms of number of edges) from the starting vertex up to that vertex.

- **Network Flow Diagram:** A flow network $G = (V, E)$ is a directed graph in which each edge $(u, v) \in E$ has a nonnegative capacity $c(u, v) \ge 0$. If $(u, v) \notin E$, we assume that $c(u, v) = 0$. We distinguish two vertices in a flow network: a source $s$ and a sink $t$. For convenience, we assume that every vertex lies on some path from the source to the sink. That is, for every vertex $v \in V$, there is a path $s \rightsquigarrow v \rightsquigarrow t$. The graph is therefore connected, and $|E| \ge |V| - 1$. Let $G = (V, E)$ be a flow network with a capacity function $c$, source $s$ and sink $t$. A flow in $G$ is a real-valued function $f : V \times V \to \mathbb{R}$ that satisfies the following three properties:
  - **Capacity constraint:** For all $u, v \in V$, we require $f(u, v) \le c(u, v)$.
  - **Skew symmetry:** For all $u, v \in V$, we require $f(u, v) = -f(v, u)$.
  - **Flow conservation:** For all $u \in V - \{s, t\}$, the total net flow is zero.

---

## Multiple Choice Type Questions

**1.** Complexity of BFS algorithm is ............... if graph is represented as adjacency list. *[WBUT 2006, 2015]*
a) $\Theta(n + e)$   b) $\Theta(n^2)$   c) $\Theta(\log n)$   d) $\Theta(n + e\log n)$
**Answer: (a)**

**2.** BFS on a graph $G = (V, E)$ has running time — *[WBUT 2010, 2016]*
a) $O(|V| + |E|)$   b) $O(|V|)$   c) $O(|E|)$   d) none of these
**Answer: (a)**

**3.** Which of the following is useful in traversing a given graph using BFS? — *[WBUT 2011]*
a) stack   b) linked list   c) array   d) queue
**Answer: (d)**

**4.** The diagonal of the adjacency matrix of a graph with a self-loop contains only — *[WBUT 2011]*
a) 1   b) 0   c) $-1$   d) $\infty$
**Answer: (b)**

**5.** Level order traversal of a rooted tree can be done by starting from the root and performing — *[WBUT 2013]*
a) depth first search   b) breadth first search   c) pre-order traversal   d) in-order traversal
**Answer: (b)**

**6.** An undirected graph $G$ with $n$ vertices and $e$ edges is represented by adjacency list. What is the time required to generate all the connected components? — *[WBUT 2014]*
a) $O(n)$   b) $O(e)$   c) $O(e + n)$   d) $O(e^2)$
**Answer: (c)**

**7.** An adjacency matrix representation of a graph cannot contain information of — *[WBUT 2014]*
a) nodes   b) edges   c) direction of edges   d) parallel edges
**Answer: (d)**

**8.** The data structure required for Breadth First Traversal on a graph is — *[WBUT 2014]*
a) queue   b) stack   c) array   d) tree
**Answer: (a)**

**9.** BFS on a graph has running time — *[WBUT 2014]*
a) $O(|V| + |E|)$   b) $O(|V|)$   c) $O(|E|)$   d) $O(|V^2|)$
**Answer: (a)**

---

## Short Answer Type Questions

**1. Compare and contrast: Depth-first-search and Breadth-first search.** *[WBUT 2004, 2007, 2012, 2017]*

**Compare:**
- Both BFS and DFS traverse or visit all the vertices of a connected graph.
- Both BFS and DFS are applicable on spanning tree, paths and cycles of connected graphs.

**Contrast:**

| DFS | BFS |
|---|---|
| 1. DFS cannot find a shortest path between two vertices. | 1. BFS finds the shortest path between two vertices of a graph. |
| 2. DFS visits all nodes on a path first and backtracks when the path ends. | 2. BFS is terminated if it reaches the end of a path in a graph. |
| 3. In case of DFS we use stack operation. | 3. To implement BFS we use queue structure. |
| 4. DFS can represent a back edge, i.e. an edge from descendant to ancestor. Let $\text{back\_edge}(v, w)$ denote that $w$ is an ancestor of $v$ in the tree of discovery edges, where $v$ and $w$ are two vertices of the graph. | 4. BFS can represent the cross edge, i.e. cross edge $(v, w)$ denotes that $w$ is in the same level as $v$ or in the next level in the tree of discovery edges, where $v$ and $w$ are two vertices of the graph. |

**2. Describe Floyd's algorithm for the all-pair shortest path problem. Find its time complexity.** *[WBUT 2005, 2011, 2017, 2018, 2019]*

Given a directed graph $G = (V, E)$, where each edge $(v, w)$ has a nonnegative cost $C[v, w]$, for all pairs of vertices $(v, w)$ find the cost of the lowest cost path from $v$ to $w$. Floyd's algorithm takes as input the cost matrix $C[v, w]$.
- $C[v, w] = 0$ if $(v, w)$ is not in $E$.

It returns as output:
- a distance matrix $D[v, w]$ containing the cost of the lowest cost path from $v$ to $w$, and initially $D[v, w] = C[v, w]$;
- a path matrix $P$, where $P[v, w]$ holds the intermediate vertex $k$ on the least cost path between $v$ and $w$ that led to the cost stored in $D[v, w]$.

We iterate $N$ times over the matrix $D$, using $k$ as an index. On the $k$-th iteration, the $D$ matrix contains the solution to the all-pair shortest path problem, where the paths only use vertices numbered $1$ to $k$. On the next iteration, we compare the cost of going from $i$ to $j$ using only vertices numbered $1..k$ (stored in $D[i, j]$ on the $k$-th iteration) with the cost of using the $k+1$-th vertex as an intermediate step, which is $D[i, k+1]$ (to get from $i$ to $k+1$) plus $D[k+1, j]$ (to get from $k+1$ to $j$). If this results in a lower cost path, we maintain it. After $N$ iterations, all possible paths have been examined, so $D[v, w]$ contains the cost of the lowest cost path from $v$ to $w$ using all vertices if necessary.

**Algorithm:**

```
FloydAPSP(N, C, D, P)
   for i <- 0 to N do
   {
      for j <- 0 to N do
      {
         D[i][j] <- C[i][j]
         P[i][j] <- -1
      }
      D[i][i] <- 0.0
   }
   for k <- 0 to N do
      for i <- 0 to N do
         for j <- 0 to N do
         {
            if ((D[i][k] + D[k][j]) < D[i][j]) then
            {
               D[i][j] <- D[i][k] + D[k][j]
               P[i][j] <- k
            }
         }
```

The complexity of the above algorithm depends upon two nested `for` loops. The first one is executed at most $n^2$ times. The other nested `for` loop has three inner `for` loops and the total execution time is $n^3$. So, the complexity of the above algorithm is $O(n^3)$.

**3. Find out the minimum cost spanning tree using any algorithm.** *[WBUT 2007]*

The given weighted graph has 7 vertices (numbered 1–7) with edge weights: $(1,6)=10$, $(1,2)=28$, $(2,3)=16$, $(2,7)=14$, $(6,5)=25$, $(5,7)=24$, $(7,4)=18$, $(3,4)=12$, $(5,4)=22$. `[diagram]`

Applying **Kruskal's Algorithm**, edges are added in non-decreasing order of weight (Steps 1–6), avoiding cycles. In step 6 we get the minimum cost spanning tree by Kruskal's method and the minimum cost is **99**. `[diagram]`

**4. Write down the difference between Prim's algorithm and Kruskal's algorithm.** *[WBUT 2007, 2017]*

| Prim's | Kruskal's |
|---|---|
| **Compare:** Find the minimum cost spanning tree. | **Compare:** Find the minimum cost spanning tree. |
| Generate the minimum cost spanning tree from a graph. | Generate the minimum cost spanning tree from a graph. |
| **Contrast:** Generate the minimum cost spanning tree starting from a root node. | **Contrast:** Generate the minimum cost spanning tree starting from a least weighted untraversed non-cycle-forming edge. |
| Selection of edges must be adjacent to the tree which is already created. | The selection of edges may be discrete. |

**5. Explain the max-flow min-cut theorem with an example. / State the Max-flow min-cut theorem for network flow analysis.** *[WBUT 2012, 2013, 2014, 2015]*

If $f$ is a flow in a flow network $G = (V, E)$ with source $s$ and sink $t$, then the following conditions are equivalent:
1. $f$ is a maximum flow in $G$.
2. The residual network $G_f$ contains no augmenting paths.
3. $|f| = c(S, T)$ for some cut $(S, T)$ of $G$.

*Example:* A flow $f$ in $G$ with value $|f| = 19$. Only positive flows are shown. If $f(u, v) > 0$, edge $(u, v)$ is labeled by $f(u, v)\,/\,c(u, v)$. (The slash notation is used merely to separate the flow and capacity; it does not indicate division.) A cut $(S, T)$ in the flow network, where $S = \{s, v_1, v_2\}$ and $T = \{v_3, v_4, t\}$. The vertices in $S$ are black, and the vertices in $T$ are white. The net flow across $(S, T)$ is $f(S, T) = 19$, and the capacity is $c(S, T) = 26$. `[diagram]`

**6. Define Topological sorting. Write down the difference between Topological sorting and DFS.** *[MODEL QUESTION]*

Topological sorting for a Directed Acyclic Graph (DAG) is a linear ordering of vertices such that for every directed edge $uv$, vertex $u$ comes before $v$ in the ordering. Topological sorting for a graph is not possible if the graph is not a DAG.

For example, a topological sorting of the example graph (vertices 0–5) is "5 4 2 3 1 0". There can be more than one topological sorting for a graph; for example, another topological sorting of the same graph is "4 5 2 3 1 0". The first vertex in topological sorting is always a vertex with in-degree 0 (a vertex with no incoming edges). `[diagram]`

**Topological Sorting vs Depth First Traversal (DFS):** In DFS, we print a vertex and then recursively call DFS for its adjacent vertices. In topological sorting, we need to print a vertex before its adjacent vertices. For example, in the given graph, the vertex '5' should be printed before vertex '0', but unlike DFS, the vertex '4' should also be printed before vertex '0'. So topological sorting is different from DFS. For example, a DFS of the shown graph is "5 2 3 1 0 4", but it is not a topological sorting.

---

## Long Answer Type Questions

**1. Write any algorithm for performing BFS over a directed graph. Comment on the time-complexity of your algorithm.** *[WBUT 2004, 2014]*

In the BFS algorithm, we maintain a queue. When one or more vertices are discovered, we store them into the queue, i.e., adjacent vertices of an explored vertex are stored into the queue. Then we remove one vertex (say $i$) from the front position of the queue and store the adjacent vertices of $i$ at the end of the queue.

```
BFS(G, s)
   Step 1  initialize vertices;
   Step 2  Q = {s};            // Q is a queue; initialize to s
   Step 3  while (Q not empty) then
   {
      Step 3.1  u = RemoveTop(Q);
      Step 3.2  for each v in u->adj do
      {
         Step 3.2.1   if (v->color == WHITE) then
         Step 3.2.1.1    v->color = GRAY;
         Step 3.2.2   v->d = u->d + 1;
         Step 3.2.3   v->p = u;
         Step 3.2.4   Enqueue(Q, v);
      }
      Step 3.3  u->color = BLACK;
   }

Enqueue(Q, v)
   Step 1  if Q is full then
   Step 1.1   return -1;
   Step 2  else
   Step 2.1   Add adjacency vertices of v to Q;
```

**Complexity of BFS algorithm:**
- BFS calculates the shortest-path distance from the source node. Shortest-path distance $\delta(s, v) = $ minimum number of edges from $s$ to $v$, or $\infty$ if $v$ is not reachable from $s$.
- BFS builds a breadth-first tree, in which paths to the root represent shortest paths in $G$. Thus we can use BFS to calculate the shortest path from one vertex to another in $O(|V| + |E|)$ time.
- The space complexity for BFS is equal to $O(n)$, i.e., the total space for keeping $n$ vertices in memory.

**2. Write an algorithm for finding a minimum spanning tree of an undirected (acyclic) graph. Estimate the time complexity of your algorithm.** *[WBUT 2004, 2006, 2008, 2009, 2014, 2016, 2019]*

We can write either Prim's or Kruskal's algorithm for minimum cost spanning tree. Here we define Prim's algorithm. A minimum cost spanning tree $T$ of an edge-weighted graph $G$ contains all the vertices of $G$ with total cost of the edges minimum. It may not be unique.

**Prim's algorithm for minimum cost spanning tree**
Input: A weighted, undirected graph $G = (V, E, w)$.
Output: A minimum cost spanning tree $T$.

```
Prim(V, E, w)
   Step 1  Initialize tree T = {};
   Step 2  Let r be a root vertex from V.
   Step 3  r in V;
   Step 4  U = {r};
   Step 5  while |U| < n do
   {
      Step 5.1  Find(u) in U and Find(v) in V-U
                such that the edge (u, v) in E
      Step 5.2  if ((u, v) is the least cost edge between
                U and (V-U)) then
      {
         Step 5.2.1   T = T U {(u, v)}
         Step 5.2.2   U = U U {v}
      }
   }
```

**Complexity:** The spanning tree of $G = (V, E)$ has $n$ nodes and $(n-1)$ edges. In Step 5.2.1 we have to put $(n-1)$ edges in the set $T$ one by one, so it requires $O(n)$ time. Similarly Step 5.2.2 requires $O(n)$ time to keep $n$ nodes in the set $U$. In Step 5.1, we try to find two nodes $u$ and $v$ from sets $U$ and $V-U$, and each `Find()` requires $O(1)$ time. In Step 5, the while loop is executed at most $(n-1)$ times, and within the while loop there are instructions which are also executed $n$ times. So the execution time of the while loop is $O(n^2)$. So the time complexity of Prim's Algorithm is $O(n^2)$.

**3. a) Write down Dijkstra's algorithm for finding out the shortest path.** *[WBUT 2008, 2011]*

Dijkstra's algorithm finds the shortest paths from a single source to all other nodes of a weighted digraph with positive weights. It solves the single-source shortest-paths problem on a weighted, directed graph $G = (V, E)$ for the case in which all edge weights are nonnegative, so we assume that $w(u, v) \ge 0$ for each edge $(u, v) \in E$. Dijkstra's algorithm maintains a set $S$ of vertices whose final shortest-path weights from the source have already been determined. The algorithm repeatedly selects the vertex $u \in V - S$ with the minimum shortest-path estimate, adds $u$ to $S$, and relaxes all edges leaving $u$. In the following implementation, we use a min-priority queue $Q$ of vertices, keyed by their $d$ values.

```
DIJKSTRA(G, w, s)
   INITIALIZE-SINGLE-SOURCE(G, s)
   S <- empty
   Q <- V[G]
   while Q != empty do
   {
      u <- EXTRACT-MIN(Q)
      S <- S U {u}
      for each vertex v in Adj[u] do
      {
         RELAX(u, v, w)
      }
   }

RELAX(u, v, w)
{
   if d[v] > d[u] + w(u, v) then
      d[v] <- d[u] + w(u, v)
      pi[v] <- u
}

INITIALIZE-SINGLE-SOURCE(G, s)
{
   for each vertex v in V[G] do
      d[v] <- infinity
      pi[v] <- NIL
   d[s] <- 0
}
```

**3. b) Prove that the time complexity of Dijkstra's algorithm is $3(n-2)(n-1)/2 = O(n^2)$.** *[WBUT 2008, 2011]*

With adjacency matrix representation, the running time is $O(n^2)$. By using an adjacency list representation and a partially ordered tree data structure for organizing the set $V - S$, the complexity can be shown to be $O(e \log n)$, where $e$ is the number of edges and $n$ is the number of vertices in the digraph.

**4. Apply the KMP algorithm for the pattern $p = $ "ababaca" and string $s = $ "bacbabababacaab". Show every step.** *[WBUT 2013]*

Let us execute the KMP algorithm to find whether 'p' occurs in 'S'.
Initially: $n = $ size of $S = 15$; $m = $ size of $p = 7$.

- **Step 1:** $i = 1, q = 0$. Comparing $p[1]$ with $S[1]$. $p[1]$ does not match with $S[1]$. 'p' will be shifted one position to the right.
- **Step 2:** $i = 2, q = 0$. Comparing $p[1]$ with $S[2]$.
- **Step 3:** $i = 3, q = 1$. Comparing $p[2]$ with $S[3]$; $p[2]$ does not match with $S[3]$. Backtracking on $p$, comparing $p[1]$ and $S[3]$.
- **Step 4:** $i = 4, q = 0$. Comparing $p[1]$ with $S[4]$; $p[1]$ does not match with $S[4]$.
- **Step 5:** $i = 5, q = 0$. Comparing $p[1]$ with $S[5]$.
- **Step 6:** $i = 6, q = 1$. Comparing $p[2]$ with $S[6]$; $p[2]$ matches with $S[6]$.
- **Step 7:** $i = 7, q = 2$. Comparing $p[3]$ with $S[7]$; $p[3]$ matches with $S[7]$.
- **Step 8:** $i = 8, q = 3$. Comparing $p[4]$ with $S[8]$; $p[4]$ matches with $S[8]$.
- **Step 9:** $i = 9, q = 4$. Comparing $p[5]$ with $S[9]$; $p[5]$ matches with $S[9]$.
- **Step 10:** $i = 10, q = 5$. Comparing $p[6]$ with $S[10]$; $p[6]$ doesn't match with $S[10]$. Backtracking on $p$, comparing $p[4]$ with $S[10]$ because after mismatch $q = \pi[5] = 3$.
- **Step 11:** $i = 11, q = 4$. Comparing $p[5]$ with $S[11]$.
- **Step 12:** $i = 12, q = 5$. Comparing $p[6]$ with $S[12]$; $p[6]$ matches with $S[12]$.
- **Step 13:** $i = 13, q = 6$. Comparing $p[7]$ with $S[13]$; $p[7]$ matches with $S[13]$.

Pattern 'p' has been found to completely occur in string 'S'. The total number of shifts that took place for the match to be found are $i - m = 13 - 7 = 6$ shifts.

**5. a) Write the string matching algorithm due to Knuth, Morris and Pratt. Analyze its time complexity.** *[WBUT 2014, 2015]*

```
KMP-MATCHER(T, P)
1   n = length[T]
2   m = length[P]
3   pi = COMPUTE-PREFIX-FUNCTION(P)
4   q = 0                              // Number of characters matched.
5   for i <- 1 to n                    // Scan the text from left to right.
6      do while q > 0 and P[q+1] != T[i]
7         do q = pi[q]                 // Next character does not match.
8      if P[q+1] = T[i]
9         then q = q + 1               // Next character matches.
10     if q = m                        // Is all of P matched?
11        then print "Pattern occurs with shift" i-m
12             q = pi[q]               // Look for the next match.

COMPUTE-PREFIX-FUNCTION(P)
1   m = length[P]
2   pi[1] <- 0
3   k <- 0
4   for q <- 2 to m
5      do while k > 0 and P[k+1] != P[q]
6         do k <- pi[k]
7      if P[k+1] = P[q]
8         then k <- k + 1
9      pi[q] <- k
10  return pi
```

**Running-time analysis:** The running time of `COMPUTE-PREFIX-FUNCTION` is $\Theta(m)$, using the potential method of amortized analysis. We associate a potential of $k$ with the current state $k$ of the algorithm. This potential has an initial value of $0$, by line 3. Line 6 decreases $k$ whenever it is executed, since $\pi[k] < k$. Since $\pi[k] \ge 0$ for all $k$, however, $k$ can never become negative. The only other line that affects $k$ is line 8, which increases $k$ by at most one during each execution of the for loop body. Since $k < q$ upon entering the for loop, and since $q$ is incremented in each iteration of the for loop body, $k < q$ always holds. We can pay for each execution of the while loop body on line 6 with the corresponding decrease in the potential function, since $\pi[k] < k$. Line 8 increases the potential function by at most one, so the amortized cost of the loop body on lines 5–9 is $O(1)$. Since the number of outer-loop iterations is $\Theta(m)$, and since the final potential function is at least as great as the initial potential function, the total actual worst-case running time of `COMPUTE-PREFIX-FUNCTION` is $\Theta(m)$. A similar amortized analysis, using the value of $q$ as the potential function, shows that the matching time of `KMP-MATCHER` is $\Theta(n)$. Compared to `FINITE-AUTOMATON-MATCHER`, by using $\pi$ rather than $\delta$, we have reduced the time for preprocessing the pattern from $O(m|\Sigma|)$ to $\Theta(m)$, while keeping the actual matching time bounded by $\Theta(n)$.

**5. b) Trace the execution of the Ford-Fulkerson algorithm for finding the maximum flow in the following graph.** *[WBUT 2014]*

The input flow network has vertices $\{s, v_1, v_2, v_3, v_4, t\}$ with edge capacities: $c(s, v_1) = 16$, $c(s, v_2) = 13$, $c(v_1, v_2) = 10$, $c(v_2, v_1) = 4$, $c(v_1, v_3) = 12$, $c(v_3, v_2) = 9$, $c(v_2, v_4) = 14$, $c(v_4, v_3) = 7$, $c(v_3, t) = 20$, $c(v_4, t) = 4$. `[diagram]`

The execution of the basic Ford-Fulkerson algorithm: parts (a)–(d) show successive iterations of the while loop. The left side of each part shows the residual network $G_f$ from line 4 with a shaded augmenting path $p$. The right side of each part shows the new flow $f$ that results from adding $f_p$ to $f$. The residual network in (a) is the input network $G$. Part (e) shows the residual network at the last while loop test; it has no augmenting paths, and the flow $f$ shown in (d) is therefore a maximum flow. `[diagram]`

**6. Describe the Depth First Search algorithm for a given graph and explain its time complexity.** *[WBUT 2016]*

The progress of the depth-first-search algorithm DFS is shown step by step on the given graph. As edges are explored by the algorithm, they are shown as either shaded (if they are tree edges) or dashed (otherwise). Non-tree edges are labeled B, C, or F according to whether they are back, cross, or forward edges. Timestamps within vertices indicate discovery time / finishing times. `[diagram]`

The following pseudocode is the basic depth-first-search algorithm. The input graph $G$ may be undirected or directed. The variable `time` is a global variable that we use for timestamping.

```
DFS(G)
1   for each vertex u in G.V
2      u.color = WHITE
3      u.pi = NIL
4   time = 0
5   for each vertex u in G.V
6      if u.color == WHITE
7         DFS-VISIT(G, u)

DFS-VISIT(G, u)
1   time = time + 1
2   u.d = time
3   u.color = GRAY
4   for each v in G.Adj[u]
5      if v.color == WHITE
6         v.pi = u
7         DFS-VISIT(G, v)
8   u.color = BLACK
9   time = time + 1
10  u.f = time
```

The loops on lines 1–3 and lines 5–7 of DFS take time $\Theta(V)$, exclusive of the time to execute the calls to DFS-VISIT. The procedure DFS-VISIT is called exactly once for each vertex $v \in V$, since the vertex $u$ on which DFS-VISIT is invoked must be white and the first thing DFS-VISIT does is paint vertex $u$ gray. During an execution of DFS-VISIT$(G, v)$, the loop on lines 4–7 executes $|\text{Adj}[v]|$ times. Since
$$\sum_{v \in V} |\text{Adj}[v]| = \Theta(E),$$
the total cost of executing lines 4–7 of DFS-VISIT is $\Theta(E)$. The running time of DFS is therefore $\Theta(V + E)$.

**7. Find the minimum cost spanning tree using Prim's algorithm for the graph given below. Write down the complexity of Prim's and Kruskal's algorithm.** *[WBUT 2017]*

The given graph has 6 nodes with edges and weights as drawn in the source. There is no weight between node 1 and node 2, so we assume that it is 3, and node 1 is the starting node. `[diagram]`

The minimum cost spanning tree is obtained, and the cost is
$$= 2 + 2 + 6 + 3 + 3 = 16.$$

**Complexity of Prim's and Kruskal's algorithm:**
- Time complexity of Prim's algorithm is $O(V^2)$. If the input graph is represented using an adjacency list, then the time complexity of Prim's algorithm can be reduced to $O(E \log V)$ with the help of a binary heap. The performance of Prim's algorithm depends on how we implement the min-priority queue $Q$.
- Time complexity of Kruskal's algorithm is $O(E \log E)$ or $O(E \log V)$. Sorting of edges takes $O(E \log E)$ time. After sorting, we iterate through all edges and apply the find-union algorithm. The find and union operations can take at most $O(\log V)$ time. So overall complexity is $O(E \log E + E \log V)$ time. The value of $E$ can be at most $O(V^2)$, so $O(\log V)$ and $O(\log E)$ are the same. Therefore, overall time complexity is $O(E \log E)$ or $O(E \log V)$.

**8. Write short notes on the following:** *[WBUT 2014, 2015, 2017, 2018, 2019]*
a) Dijkstra's Algorithm   b) Kruskal's algorithm for finding MST   c) Minimum spanning tree   d) BFS and DFS   c) [as printed] Ford–Fulkerson algorithm

**a) Dijkstra's Algorithm:** Refer to Question No. 3(a) of Long Answer Type Questions.

**b) Kruskal's algorithm for finding MST:** Refer to Question No. 3 of Short Answer Type Questions.

**c) Minimum spanning tree:** A spanning tree of a graph $G = (V, E)$ is a connected subgraph with $|V| - 1$ edges spanning all of $V$. The cost (or weight) of a tree is the sum of the lengths of the edges in the tree. A minimum spanning tree (MST) is a spanning tree with minimum cost. It is well known and easy to show that a spanning tree can be found in polynomial time. If $W^*$ denotes the weight (cost) of the minimum spanning tree, then we must have $W^* \le L^*$, since deleting any edge from the optimal tour results in a spanning tree. The minimum spanning tree can be used to find a feasible traveling salesman tour in polynomial time. Two methods are there for finding the minimum cost spanning tree of a weighted graph $G$:
1. Prim's Algorithm
2. Kruskal's Algorithm

**Kruskal's Algorithm:** Examines edges in nondecreasing order of their lengths and includes them in the MST if the added edge does not form a cycle with the edges already chosen. The proof of the algorithm uses the path optimality conditions. It is an attractive algorithm if the edges are already sorted in increasing order of their lengths. `[diagram of a small-scale example MST: a graph $G = (V, E)$ with edge weights]`

```
Procedure: Kruskal's Algorithm
Input: graph G = (V, E), weight w, for all (i, j) in V
Output: spanning tree T
Begin
   T <- empty;
   A <- E;                          // A: eligible edges
   while |T| < |V| - 1 do
      Choose an edge (u, v) <- argmin {w_e | (i, j) in A}
      A <- A \ {(u, v)};
   output spanning tree T;
end
```

**d) BFS and DFS:**

*Breadth first search algorithm:*
1. Start with any node, visit it, and have it as a root in a BFS. Its level is called the current level.
2. From each node $x$ in the current level, in the order in which the level nodes were visited, visit all the unvisited neighbours of $x$. The newly visited nodes from this level form a new level. This new level becomes the next current level.
3. Repeat step 2 for all the unvisited vertices.
4. Repeat from step 1 until no more vertices are remaining.

*Example trace (starting from node A):* Insert A in the queue; obtain adjacent nodes of A, insert them in $Q$, delete A from $Q$ and print it; continue until no unvisited node remains, then delete and print the remaining vertices from the queue. Hence we get the sequence **A, B, C, D, E, F, G, H**. `[diagram]`

*Depth first search traversal:*
1. Select an unvisited node $v$, visit it and treat it as the current node.
2. Find an unvisited neighbour of the current node, visit it and make it the new current node.
3. If the current node has no unvisited neighbour, backtrack to its parent and make it the new current node.
4. Repeat steps 2 and 3 until no more nodes can be visited.
5. Repeat from step 1 for the remaining nodes.

*Example trace (starting from node A):* A → A-B → A-B-C → A-B-C-F → A-B-C-F-E; now there is no reachable node, so we pop the nodes and search for a node from which we can proceed: A-D, A-D-G-H. Hence we obtain the DFS sequence as **A, B, C, F, E, D, G**. `[diagram]`

**c) [as printed] Ford–Fulkerson algorithm:** In each iteration of the Ford-Fulkerson method, we find some augmenting path $p$ and increase the flow $f$ on each edge of $p$ by the residual capacity $c_f(p)$. The following implementation of the method computes the maximum flow in a graph $G = (V, E)$ by updating the flow $f[u, v]$ between each pair $(u, v)$ of vertices that are connected by an edge. If $u$ and $v$ are not connected by an edge in either direction, we assume implicitly that $f[u, v] = 0$. The capacities $c(u, v)$ are assumed to be given along with the graph, and $c(u, v) = 0$ if $(u, v) \notin E$. The residual capacity $c_f(u, v)$ is computed in accordance with the formula
$$c_f(u, v) = c(u, v) - f(u, v).$$
The expression $c_f(p)$ in the code is actually just a temporary variable that stores the residual capacity of the path $p$.

```
FORD-FULKERSON(G, s, t)
1   for each edge (u, v) in E[G]
2      do f[u, v] <- 0
3         f[v, u] <- 0
4   while there exists a path p from s to t in the residual network G_f
5      do c_f(p) <- min {c_f(u, v) : (u, v) is in p}
6         for each edge (u, v) in p
7            do f[u, v] <- f[u, v] + c_f(p)
8               f[v, u] <- -f[u, v]
```

The FORD-FULKERSON algorithm simply expands on the FORD-FULKERSON-METHOD pseudocode given earlier. Lines 1–3 initialize the flow $f$ to 0. The while loop of lines 4–8 repeatedly finds an augmenting path $p$ in $G_f$ and augments flow $f$ along $p$ by the residual capacity $c_f(p)$. When no augmenting paths exist, the flow $f$ is a maximum flow.

**9. Given a flow network $G = (V, E)$, let $f_1$ and $f_2$ be functions from $V \times V$ to $\mathbb{R}$. The flow sum $f_1 + f_2$ is the function from $V \times V$ to $\mathbb{R}$ defined by $(f_1 + f_2)(u, v) = f_1(u, v) + f_2(u, v)$ for all $u, v \in V$. If $f_1$ and $f_2$ are flows in $G$, which of the three flow properties must the flow sum $f_1 + f_2$ satisfy, and which might it violate?** *[MODEL QUESTION]*

The flow sum $(f_1 + f_2)$ satisfies skew symmetry and flow conservation, but might violate the capacity constraint. We give proofs for skew symmetry and flow conservation and an example that shows a violation of the capacity constraint.

Let $f(u, v) = (f_1 + f_2)(u, v)$.

*For skew symmetry:*
$$f(u, v) = f_1(u, v) + f_2(u, v) = -(f_1(v, u) + f_2(v, u)) = -f(v, u).$$

*For flow conservation,* let $u \in V - \{s, t\}$:
$$\sum_{v \in V} f(u, v) = \sum_{v \in V} f_1(u, v) + \sum_{v \in V} f_2(u, v) = 0 + 0 = 0 \quad \text{(flow conservation)}.$$

*For the capacity constraint,* let $V = \{s, t\}$, $E = \{(s, t)\}$, and $c(s, t) = 1$. Let $f_1(s, t) = f_2(s, t) = 1$. Then $f_1$ and $f_2$ obey the capacity constraint, but $(f_1 + f_2)(u, v) = 2$, which violates the capacity constraint.

> *(The value $c(s, t)$ in the source's capacity-constraint example is partly obscured; for $f_1 = f_2 = 1$ at the single edge to produce the stated violation, $c(s, t) = 1$.)*

**10. Let $f$ be a flow in a network, and let $a$ be a real number. The scalar flow product, denoted $af$, is a function from $V \times V$ to $\mathbb{R}$ defined by $(af)(u, v) = a \cdot f(u, v)$. Prove that the flows in a network form a convex set. That is, show that if $f_1$ and $f_2$ are flows, then so is $af_1 + (1 - a)f_2$ for all $a$ in the range $0 \le a \le 1$.** *[MODEL QUESTION]*

To see that the flows form a convex set, we show that if $f_1$ and $f_2$ are flows, then so is $af_1 + (1 - a)f_2$ for all $a$ such that $0 \le a \le 1$.

*For the capacity constraint,* first observe that $a \le 1$ implies that $1 - a \ge 0$. Thus, for any $u, v \in V$, we have
$$a\,f_1(u, v) + (1 - a)\,f_2(u, v) \ge 0.$$
Since $f_1(u, v) \le c(u, v)$ and $f_2(u, v) \le c(u, v)$, we also have
$$a\,f_1(u, v) + (1 - a)\,f_2(u, v) \le a\,c(u, v) + (1 - a)\,c(u, v) = (a + (1 - a))\,c(u, v) = c(u, v).$$

*For skew symmetry,* we have $f_1(u, v) = -f_1(v, u)$ and $f_2(u, v) = -f_2(v, u)$ for any $u, v \in V$. Thus,
$$a\,f_1(u, v) + (1 - a)\,f_2(u, v) = -a\,f_1(v, u) - (1 - a)\,f_2(v, u) = -\big(a\,f_1(v, u) + (1 - a)\,f_2(v, u)\big).$$

> *(The source's solution to Question 10 ends here mid-derivation, before the flow-conservation case; the legible, verified parts — the capacity-constraint and skew-symmetry cases — are transcribed above.)*

**13. Write the Rabin-Karp algorithm and analyse the complexity.** *[MODEL QUESTION]*

> *(The source numbers this question "13"; questions 11 and 12 do not appear in this chapter's printed text — numbering as printed.)* `[as printed]`

The inputs to the procedure are the text $T$, the pattern $P$, the radix $d$ to use (which is typically taken to be $|\Sigma|$), and the prime $q$ to use.

```
RABIN-KARP-MATCHER(T, P, d, q)
1    n <- length[T]
2    m <- length[P]
3    h <- d^(m-1) mod q
4    p <- 0
5    t0 <- 0
                                    // Preprocessing.
6    for i <- 1 to m
7       do p <- (d*p + P[i]) mod q
8          t0 <- (d*t0 + T[i]) mod q
9    for s <- 0 to n-m              // Matching.
10      do if p = ts
11         then if P[1..m] = T[s+1..s+m]
12            then print "Pattern occurs with shift" s
13         if s < n-m
14            then t(s+1) <- (d(ts - T[s+1]*h) + T[s+m+1]) mod q
```

Rabin and Karp have proposed a string-matching algorithm that performs well in practice and that also generalizes to other algorithms for related problems, such as two-dimensional pattern matching. The Rabin-Karp algorithm uses $\Theta(m)$ preprocessing time, and its worst-case running time is $\Theta((n - m + 1)\,m)$.

---

*End of Chapter 3. Remaining DAA chapters: 1 — Introduction; 2 — Fundamental Algorithmic Strategies; 4 — Tractable and Intractable Problems; 5 — Approximation Algorithms; 6 — Miscellaneous.*
