# Discrete Mathematics — Chapter 6: Graph and Tree

> **Source:** *Discrete Mathematics* organizer (MAKAUT/WBUT solved papers, Popular Publications), book pages DCM-95 to DCM-111.
> **Scope of this file:** Chapter at a Glance, Multiple Choice Type Questions, and Short Answer Type Questions only. Long Answer Type Questions (beginning DCM-112) are handled separately.
> **Fidelity note for downstream readers (incl. LLMs):**
> - Concept summary and all multiple-choice questions/answers below were **verified against the scanned page images**, not just OCR.
> - **Answers are transcribed exactly as printed in the source.** Any printed answer that is debatable by standard graph-theory results is flagged inline as `[as printed]`; the source's letter is kept authoritative.
> - All formulas, adjacency/incidence matrices, and graph/tree properties were checked against the page images (OCR is unreliable for this math subject). Any step illegible on the scan is marked `[illegible in source]` rather than guessed. Math is rendered in LaTeX; matrices and tables are given as Markdown. Graph and tree diagrams are described briefly and tagged `[diagram]`.

---

## Chapter at a Glance

Both trees and graphs are two well-known, mostly-used data structures in algorithms.

### Tree Data Structure

In computer science, a tree is a widely used Abstract Data Type (ADT). It can be defined recursively as a collection of nodes, where each node contains a value, starting with a root node and a list of references to other nodes (children), with the constraint that there are no duplicate references. A node with no reference from it is called a **leaf node**.

### Graph Data Structure

In computer science, a graph is also an abstract data type (ADT) that is meant to implement the undirected-graph and directed-graph concepts of mathematics, especially the field of graph theory. A graph is a mathematical representation of a set of objects and the relationships or links between objects. We represent objects as nodes or vertices in the graph and relations between vertices as edges or arcs. So we can define a graph as a set of vertices $V$ and a set of edges $E$. These edges may be directed or undirected.

### Difference between Tree and Graph

| Trees | Graph |
|---|---|
| 1. A tree is a special kind of graph where there are never multiple paths. There is always one way to get from $A$ to $B$. | 1. A graph is a system that has multiple ways to get from any point $A$ to any other point $B$. |
| 2. A tree must be connected. | 2. A graph may not be connected. |
| 3. Since it is connected, we can reach from one particular node to all other nodes. This kind of searching is called traversal. | 3. Traversal is not always applicable on graphs, because graphs may not be connected. |
| 4. A tree contains no loops, no circuits. | 4. A graph may contain self-loops, loops. |
| 5. There must be a root node in a tree. | 5. There is no such kind of root node in graphs. |
| 6. We do traversal on trees. That means from a point we go to each and every node of the tree. | 6. We do searching on graphs. That means starting from any node we try to find a particular node which we need. |
| 7. Pre-order, in-order, post-order are some kinds of traversals in trees. | 7. Breadth-first search, depth-first search are some kinds of searching algorithms in graphs. |
| 8. Trees are directed acyclic graphs. | 8. Graphs are cyclic or acyclic. |
| 9. A tree is a hierarchical model structure. | 9. A graph is a network model. |
| 10. All trees are graphs. | 10. But all graphs are not trees. |
| 11. Based on different properties, trees can be classified as Binary tree, Binary search tree, AVL trees, Heaps. | 11. We differentiate graphs as directed graphs and undirected graphs. |
| 12. If a tree has "$n$" vertices then it must have exactly "$n-1$" edges only. | 12. In graphs the number of edges doesn't depend on the number of vertices. |
| 13. The main use of trees is for sorting and traversing. | 13. The main use of graphs is colouring and job scheduling. |
| 14. Less in complexity compared to graphs. | 14. Higher complexity than trees due to loops. |

**Example**

*Tree:* a rooted tree showing the root at the top, internal nodes, parent/child relationships, and leaf nodes at the bottom. *[diagram]*

*Graph:* an undirected graph on vertices $A, B, C, D, E$ with edges $A\text{–}B$, $A\text{–}C$, $A\text{–}D$, $B\text{–}D$, $B\text{–}E$, $C\text{–}D$, $D\text{–}E$; "Vertices" and "Edge" are labelled. *[diagram]*

---

## Multiple Choice Type Questions

**1.** What is the chromatic number of the following graph with 7 vertices? *[WBUT 2012(ODD), 2016(EVEN)]*
*[diagram: a graph with 7 vertices — an outer cycle enclosing an inner triangle]*
a) 6   b) 5   c) 4   d) 3
**Answer: (d)**

**2.** A graph consisting of simply one circuit, with $n \ge 3$ and $n$ odd, is — *[WBUT 2013(EVEN)]*
a) 2-chromatic   b) 3-chromatic   c) 4-chromatic   d) none of these
**Answer: (b)**

**3.** A complete bipartite graph $K_{m,n}$ is a tree when — *[WBUT 2013(EVEN)]*
a) $m=1, n=2$   b) $m=2, n=2$   c) $m=2, n=3$   d) none of these
**Answer: (a)**

**4.** Let $G$ be a connected simple graph with 8 vertices such that no vertex in $G$ has degree $< 4$. Let $n$ be the number of edges in $G$. Then which one of the following statements must be FALSE? *[WBUT 2013(ODD)]*
a) $n=15$   b) $n=16$   c) $n=17$   d) $n=19$
**Answer: (b)** `[as printed]`

**5.** The total number of ways in which a null graph with 5 vertices can be properly coloured is — *[WBUT 2013(ODD), 2015(EVEN)]*
a) 225   b) 243   c) 125   d) none of these
**Answer: (d)**

**6.** A tree has 21 vertices, then $\chi(G)$ is — *[WBUT 2014(ODD), 2017(ODD)]*
a) 20   b) 10   c) 40   d) none of these
**Answer: (d)**

**7.** The chromatic polynomial of the Petersen graph is — *[WBUT 2014(ODD), 2017(ODD)]*
a) 3   b) 4   c) 5   d) none of these
**Answer: (d)**

**8.** The number of ways that a tree with 5 vertices can be coloured by 4 colours is — *[WBUT 2014(ODD), 2017(ODD)]*
a) 324   b) 350   c) 20   d) none of these
**Answer: (a)**

**9.** Which of the following statements is false? *[WBUT 2015(EVEN)]*
a) $K_n$ is always $n$-partite   b) $K_n$ is always $m$-partite for some $m < n$
c) $K_n$ is $n$-regular   d) $K_n$ is not bipartite for any $n$
**Answer: (c)**

**10.** The graph whose chromatic polynomial is $\lambda(\lambda-1)^5$ is — *[WBUT 2015(EVEN)]*
a) a tree having 6 vertices   b) $K_6$
c) $K_3$   d) a tree having 5 vertices
**Answer: (a)**

**11.** The number of ways a null graph having 4 vertices can be properly coloured with 5 colours is — *[WBUT 2015(ODD)]*
a) 256   b) 1024   c) 625   d) 125
**Answer: (c)**

**12.** A two-chromatic graph is — *[WBUT 2015(ODD)]*
a) a tree   b) bipartite graph
c) a cycle with odd number of vertices   d) none of these
**Answer: (d)**

**13.** If for a graph $G$, $\chi(G)=10$ and $P(G,\lambda)$ represents the chromatic polynomial of $G$, then $P(G,\lambda)=0$ for — *[WBUT 2016(ODD)]*
a) $\lambda < 10$   b) $\lambda > 10$   c) $\lambda = 10$   d) none of these
**Answer: (b)**

**14.** The degrees of the vertices of graph $G$ are 5, 3, 8 and 6 respectively. Then which one of the following statements cannot be true? *[WBUT 2017(EVEN)]*
a) $\chi(G)=3$   b) $\chi(G)\le 7$   c) $\chi(G)>6$   d) $\chi(G)=10$
**Answer: (d)**

**15.** The chromatic number of a graph containing a circuit of length 11 is — *[WBUT 2017(EVEN), 2019(EVEN)]*
a) 1   b) 2   c) 3   d) none of these
**Answer: (b)**

**16.** The total number of ways in which a null graph with 5 vertices can be properly coloured with 3 colours is — *[WBUT 2017(ODD)]*
a) 125   b) 243   c) 225   d) none of these
**Answer: (b)**

**17.** Euler's formula for graphs is — *[WBUT 2018(ODD)]*
a) $f = e - v$   b) $f = e + v + 2$   c) $f = e - v - 2$   d) $f = e - v + 2$
**Answer: (d)**

**18.** A complete graph is planar if — *[WBUT 2018(ODD)]*
a) $n = 4$   b) $n > 4$
c) $n < 4$   d) for all integer values of $n$
**Answer: (a)**

**19.** The number of odd vertices of a simple, connected graph is — *[WBUT 2019(EVEN)]*
a) 5   b) 6   c) even   d) odd
**Answer: (c)**

**20.** The maximum number of vertices in a connected graph having 17 edges is — *[MODEL QUESTION]*
a) 18   b) 17   c) 19   d) 2
**Answer: (a)**

**21.** In a bipartite graph we cannot find a triangle. *[MODEL QUESTION]*
a) True   b) False
**Answer: (a)**

**22.** For the following graph, the value of $\sum \deg(A) = $ *[MODEL QUESTION]*
*[diagram: a graph consisting of a quadrilateral with both diagonals drawn (forming an inner "X") plus a pendant edge extending to an extra vertex on the right]*
a) 16   b) 17   c) 18   d) 19
**Answer: (b)**

**23.** A simple graph has — *[MODEL QUESTION]*
a) no self loop   b) no parallel edge
c) both (a) and (b)   d) none of these
**Answer: (c)**

**24.** Does there exist a simple graph with 5 vertices of the given degrees? *[MODEL QUESTION]*
1, 2, 3, 4, 5.
a) No   b) Yes   c) Sometimes it exists
**Answer: (a)**

**25.** Maximum number of edges with $n$ vertices in a completely connected graph is — *[MODEL QUESTION]*
a) $(n-1)$   b) $\dfrac{n}{2}$   c) $\dfrac{(n-1)}{2}$   d) $\dfrac{n(n-1)}{2}$
**Answer: (d)**

**26.** Number of elements contained in an incidence matrix of a digraph is — *[MODEL QUESTION]*
a) 1   b) 2   c) 3   d) none of these
**Answer: (b)**

**27.** A pseudo graph — *[MODEL QUESTION]*
a) must have loops   b) does not have loop
c) must have parallel edges   d) none of these
**Answer: (c)**

**28.** A simple graph with $n$ vertices has maximum — *[MODEL QUESTION]*
a) $\dfrac{n(n-1)}{2}$ edges   b) $(n-1)$ edges
c) $\dfrac{n(n+1)}{2}$ edges   d) $n^2$ edges
**Answer: (a)**

**29.** Choose the correct statement. *[MODEL QUESTION]*
a) Path is an open walk   b) Every walk is a trail
c) Every trail is a path   d) A vertex cannot appear twice in a walk
**Answer: (a)**

**30.** The height of the tree is — *[MODEL QUESTION]*
*[diagram: a rooted tree with root $v_1$; $v_1$ has children $v_2$, $v_3$, $v_4$; lower-level nodes $v_5 \ldots v_{10}$; leaves $v_{11}, v_{12}, v_{13}, v_{14}$ at the deepest level]*
a) 2   b) 3   c) 0   d) 4
**Answer: (b)**

**31.** If a binary tree has 20 pendant vertices, then the number of internal vertices of the tree is — *[MODEL QUESTION]*
a) 20   b) 21   c) 23   d) 19
**Answer: (d)**

**32.** The degree of the origin of the longest path in a tree is — *[MODEL QUESTION]*
a) 1   b) 2   c) 3   d) none of these
**Answer: (a)**

**33.** A binary tree has exactly — *[MODEL QUESTION]*
a) one root   b) two roots
c) three roots   d) none of these
**Answer: (a)**

---

## Short Answer Type Questions

**1.** Consider $K_6$, the complete graph on the six vertices $a, b, c, d, e, f$. The graph $G_1$ is obtained from $K_6$ by deleting the edge $ab$. The graph $G_2$ is obtained from $G_1$ by deleting the edge $cd$. What are the chromatic numbers of $G_1$ and $G_2$? *[WBUT 2012(ODD), 2016(EVEN), 2016(ODD)]*

**Answer:**
Let us draw $K_6$, $G_1$ and $G_2$. *[diagram: $K_6$ on hexagonally-placed vertices $a, b, c, d, e, f$ with all edges; $G_1$ is $K_6$ with edge $ab$ removed; $G_2$ is $G_1$ with edge $cd$ also removed]*

The chromatic number of $G_1$ is 4.
The chromatic number of $G_2$ is 4.

**2.** A new flag is to be designed with 6 vertical stripes using 4 colours. In how many ways can this be done so that no 2 adjacent stripes have the same colour? *[WBUT 2012(ODD), 2016(ODD)]*

**Answer:**
Considering the cases (each column shows a valid stripe pattern from top to bottom):

| Case 1 | Case 2 | Case 3 |
|:---:|:---:|:---:|
| A | C | A |
| B | D | B |
| A | A | C |
| B | B | D |
| C | A | A |
| D | B | B |
| $2\times 2 = 4$ | $2\times 2 = 4$ | $2\times 2\times 2 = 8$ |

So the required number of ways $= 4 + 4 + 8 = 16$.

**3.** Show that every bipartite graph is 2-chromatic. *[WBUT 2012(ODD), 2014(ODD), 2016(EVEN), 2017(ODD)]*

**Answer:**
Let $G$ be a bipartite graph. So $V(G) = V_1 \cup V_2$ where $V_1 \cap V_2 = \phi$.

Colour every vertex in $V_1$ by one colour and every vertex in $V_2$ by another colour. Then clearly this colouring is proper.

Thus only two colours suffice to colour $G$. So $G$ is 2-chromatic.

**4.** Prove that every tree with 2 or more vertices is 2-chromatic. *[WBUT 2013(EVEN), 2013(ODD), 2016(EVEN), 2018(ODD)]*

**Answer:**
Since a tree is connected and has no cycle, if one starts colouring any one vertex with a specific colour and keeps on colouring every alternate vertex with another colour, the entire graph can be coloured with only two colours; and since there is one and only one path between any two vertices in a tree, no two adjacent vertices will have the same colour.

Hence every tree with 2 or more vertices is 2-chromatic. (Proved)

The same can be seen inductively also. Assuming that a graph with $m$ vertices is 2-colourable, addition of a vertex requires only the colour not given to the adjacent vertex. So the status remains unchanged. *[diagram: small trees coloured alternately with colours $C_1$ and $C_2$]*

**5.** Prove that the chromatic polynomial for the complete graph $K_n$ having $n$ vertices is $P_n(\lambda) = \lambda(\lambda-1)(\lambda-2)\cdots(\lambda-n+1)$, and conversely. *[WBUT 2013(EVEN)]*

**Answer:**
Let $v_1, v_2, \ldots, v_n$ denote the vertices of a complete graph $K_n$.

Clearly, if $x$ is the number of colours, $v_1$ can be coloured in $x$ ways, $v_2$ in $x-1$ ways, $\ldots$, and $v_n$ in $x-n+1$ ways.

Hence the fundamental principle of counting asserts that $K_n$ can be coloured in
$$x(x-1)(x-2)\cdots(x-n+1)$$
ways with $x$ or fewer colours.

Hence the chromatic polynomial for $K_n$ is $x(x-1)(x-2)\cdots(x-n+1)$.

**6.** If $G$ is a graph with $n$ vertices and $\delta$ denotes the minimum of the degrees of the vertices in $G$, then show that its chromatic number
$$\chi(G) \ge \frac{n}{n-\delta}.$$
*[WBUT 2018(EVEN)]*

**Answer:**
$G$ is a graph with $n$ vertices and $\delta$ denotes the minimum degree of the vertices of $G$.

Let $n=1$, then $\chi(G)=1$ (chromatic number).
$$\frac{n}{n-\delta} = \frac{1}{1-0} = 1$$
i.e., $\chi(G) \ge \dfrac{n}{n-\delta}$ (Proved)

Then, $n=2$, $\chi(G)=2$ (No two vertices can be coloured the same).
$$\frac{n}{n-\delta} = \frac{2}{2-0} = 1$$
also, $\chi(G) \ge \dfrac{n}{n-\delta}$ (Proved)

Now, by induction, let it be true for $n=m$; then for $n=m+1$:
$$\chi(G) = \frac{m}{2}+1 \quad \text{(if } m \text{ is even)}$$
So
$$\frac{n}{n-\delta} = \frac{m+1}{m+1-\dfrac{m}{2}} = \frac{m+1}{\dfrac{m}{2}} = \frac{2(m+1)}{m}.$$
As it is true for $n=m$, so $\chi(G) = \dfrac{m}{2} \ge \dfrac{m}{m-\dfrac{m}{2}}$.

We can say $\dfrac{m}{2}+1 \ge \dfrac{2}{m}(m+1)$ for $n=m+1$ (by induction).
$$\therefore \quad \chi(G) \ge \frac{n}{n-\delta} \quad \text{for } n=m+1 \text{ (by induction)} \quad \text{(Proved)}$$

**7.** Give the definition of an Euler Graph. *[MODEL QUESTION]*

**Answer:**
**Euler Graph:** A circuit of a graph $G$ is called an **Eulerian Circuit** if it includes each edge of $G$ exactly once. A graph containing an Eulerian Circuit is called an **Eulerian graph**. Let $G$ be a graph. A **tour** of $G$ is a closed walk which includes every edge at least once. A tour of $G$ is called **Eulerian** if it includes every edge exactly once.

A graph $G$ is called Eulerian if it has an Eulerian tour. If the graph is Eulerian, for any tour which crosses each edge only once, for the completion of the tour, for every edge incident on a vertex there must be one edge for its way out. Thus every vertex must be of even degree.

Conversely, since the graph is connected, every pair of vertices must be connected by a path; and each vertex being of even degree, it will be possible to traverse every edge just once and thus complete the tour. This can be seen by taking simple connected acyclic graphs with 1, 2, 3 or 4 edges.

**8.** Show that the given pair of graphs are isomorphic. *[MODEL QUESTION]*
*[diagram: two graphs on 5 vertices — the first a pentagon $a, b, c, d, e$; the second a pentagram (5-pointed star) on $a', b', c', d', e'$]*

**Answer:**
We note first that
i) both graphs have the same number of vertices;
ii) each vertex of both graphs has the same degree.

Now if we define a mapping $\phi$ as
$$\phi : A \to A_1,\ B \to C_1,\ E \to D_1,\ D \to B_1,\ C \to E_1,$$
then evidently every edge of the first graph is carried to the corresponding edge of the second graph.

Hence $\phi$ is an isomorphism, i.e., the graphs are isomorphic.

$$f(a)=a',\ f(b)=c',\ f(c)=e',\ f(d)=b',\ f(e)=d'.$$
Clearly $f$ is bijective and
$$f(ea)=a'c',\ f(bc)=c'e',\ f(cd)=e'b',\ f(de)=b'd',\ f(ea)=d'a'.$$

**9.** Draw the graph represented by the given adjacency matrix: *[MODEL QUESTION]*
$$\begin{bmatrix} 0 & 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0 & 0 \\ 1 & 0 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 & 0 \\ 0 & 1 & 0 & 0 & 0 \end{bmatrix}$$

**Answer:**
Denoting the vertices by $v_1, v_2, v_3, v_4$ and $v_5$, we get the graph represented by the given adjacency matrix. *[diagram: a graph on vertices $v_1, v_2, v_3, v_4, v_5$ with edges joining $v_5\text{–}v_2$, $v_5\text{–}v_1$, $v_1\text{–}v_3$ and $v_3\text{–}v_4$]*

**10.** Examine if the following two graphs are isomorphic: *[MODEL QUESTION]*
*[diagram: graph $G$ on vertices $a, b, c, d, e$; graph $G'$ on vertices $a', b', c', d', e'$]*

**Answer:**
The graphs $G$ and $G'$ are not isomorphic, even though both of the graphs have the same number of vertices. As an isomorphism transforms vertices to vertices of the same degree, we observe that the graph $G$ has three vertices each of degree 3, viz. $a, c, d$, but the graph $G'$ has only one vertex of degree 3.

**11.** Draw the directed graph represented by the given adjacency matrix: *[MODEL QUESTION]*
$$\begin{bmatrix} 0 & 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0 & 0 \\ 1 & 0 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 & 0 \\ 0 & 1 & 0 & 0 & 0 \end{bmatrix}$$

**Answer:**
The graph is a directed graph on vertices $v_1, v_2, v_3, v_4, v_5$ with directed edges corresponding to the matrix. *[diagram]*

**12.** Prove that for a graph $G=(V,E)$, where the degree of a vertex $v$ is denoted as $\delta(v)$, we can get $\displaystyle\sum_{v \in V} \delta(v) = 2|E|$. *[MODEL QUESTION]*

**Answer:**
The degree of a vertex is the number of edges connecting with the vertex. As each edge is connected with two vertices, for each edge there is an increase of 1 degree for each of the two vertices (if not a self-loop). For a self-loop, for each edge there is an increase of 2 degrees.

So if the graph contains $|E|$ edges, then the sum of the individual degrees of the graph $= 2|E|$,
$$\text{i.e., } \sum_{v \in V} \delta(v) = 2|E|.$$

**13.** Prove that the number of vertices of odd degree in a graph is always even. *[MODEL QUESTION]*

**Answer:**
Let a graph have $n$ vertices $v_1, v_2, \ldots, v_n$ of odd degree and $m$ vertices $u_1, u_2, \ldots, u_m$ of even degree. Then by the above theorem, $\sum d(v_i) + \sum d(u_j)$ is even. This requires that each of $\sum d(v_i)$ and $\sum d(u_j)$ is either odd or even. Since the vertices $u_j$ are of even degree, $\sum d(u_j)$ is even. So $\sum d(v_i)$ has to be even. This can happen only if the number of such vertices is even. Hence the proof.

**14.** Find the incidence matrix of the graph: *[MODEL QUESTION]*
*[diagram: graph $G$ on vertices $v_1, v_2, v_3, v_4, v_5$]*

**Answer:**
Designating the edges as $e_1, e_2, e_3, e_4, e_5$ and $e_6$ as shown in the figure of the given graph $G$, the required incidence matrix is given by

$$I(G) = \begin{array}{c|cccccc} & e_1 & e_2 & e_3 & e_4 & e_5 & e_6 \\ \hline v_1 & 1 & 1 & 0 & 0 & 0 & 0 \\ v_2 & 0 & 0 & 1 & 1 & 1 & 0 \\ v_3 & 0 & 0 & 0 & 0 & 1 & 1 \\ v_4 & 0 & 1 & 0 & 1 & 0 & 1 \\ v_5 & 1 & 0 & 1 & 0 & 0 & 0 \end{array}$$

**15.** Show that there exists no simple graph with five vertices having degrees 4, 4, 4, 2, 2. *[MODEL QUESTION]*

**Answer:**
A simple graph with 5 vertices can have at most ${}^5C_2$ edges, i.e., 10 edges. So the maximum total degree of the edges will be 20. Here the total degree $= 4+4+4+2+2 = 16$. But for a pentagonal graph, an edge cannot have degree 4 unless there are parallel edges.

Hence the conclusion is that there cannot be a simple graph with the specified degrees.

**16.** Examine whether the graphs $G$ and $G_1$ are isomorphic or not. *[MODEL QUESTION]*
*[diagram: graph $G$ on vertices $u_1, u_2, u_3, u_4, u_5$; graph $G_1$ on vertices $v_1, v_2, v_3, v_4, v_5$]*

**Answer:**
Let us designate the vertices of $G$ and $G_1$ as shown.

Define a mapping $f$ as $f(u_i)=v_i$, $i = 1, 2, 3, 4, 5$.

Clearly $f$ is an isomorphism as
$$f(u_1u_2)=v_1v_2,\ f(u_2u_3)=v_2v_3,\ f(u_3u_4)=v_3v_4,$$
$$\text{and } f(u_1u_5)=v_1v_5,\ f(u_2u_4)=v_2v_4.$$

**17.** Construct the graph or digraph corresponding to the following incidence matrix: *[MODEL QUESTION]*
$$\begin{bmatrix} 1 & 0 & 0 & 0 & 0 & 1 \\ 0 & 1 & 1 & 0 & 1 & 0 \\ 1 & 0 & 0 & 1 & 0 & 0 \\ 0 & 1 & 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 & 1 & 1 \end{bmatrix}$$

**Answer:**
The required graph is a graph on vertices $v_1, v_2, v_3, v_4, v_5$ with edges $e_1, \ldots, e_6$ corresponding to the columns of the incidence matrix. *[diagram]*

**18.** Draw the graph represented by the given adjacency matrix: *[MODEL QUESTION]*
$$\begin{bmatrix} 0 & 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0 & 0 \\ 1 & 0 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 & 0 \\ 0 & 1 & 0 & 0 & 0 \end{bmatrix}$$

**Answer:**
The required graph is a directed graph on vertices $v_1, v_2, v_3, v_4, v_5$. *[diagram]*

Note that the asymmetry of the matrix ensures that it represents a digraph.

**19.** Find the incidence matrix of the following graph: *[MODEL QUESTION]*
*[diagram: graph on vertices $v_1, v_2, v_3, v_4, v_5$]*

**Answer:**
The required incidence matrix is

$$\begin{array}{c|cccccc} & v_1v_2 & v_1v_3 & v_2v_5 & v_3v_4 & v_3v_5 & v_4v_5 \\ \hline v_1 & 1 & 1 & 0 & 0 & 0 & 0 \\ v_2 & 1 & 0 & 1 & 0 & 0 & 0 \\ v_3 & 0 & 1 & 0 & 1 & 1 & 0 \\ v_4 & 0 & 0 & 0 & 1 & 0 & 1 \\ v_5 & 0 & 0 & 1 & 0 & 1 & 1 \end{array}$$

(columns are edges; rows are vertices)

**20.** Prove that there exists no simple graph with five vertices having degrees 4, 4, 4, 2, 2. *[MODEL QUESTION]*

**Answer:**
As the graph has 5 vertices and 3 of the vertices have degree 4, each of these three vertices must be joined to all of the remaining vertices; but this ensures the degree of the remaining vertices to be at least three. But this contradicts the fact that the degree of each of the remaining vertices is 2.

Hence no such graph is possible.

**21.** Find whether the following two graphs are isomorphic or not: *[MODEL QUESTION]*
*[diagram: graph $G_1$ on vertices $A, B, C, D$ (a quadrilateral with both diagonals); graph $G_2$ on vertices $E, F, G, H$]*

**Answer:**
Define $\varphi : G_1 \to G_2$ as follows:
$$\varphi(A)=E,\ \varphi(D)=G,\ \varphi(B)=F,\ \varphi(C)=H.$$
Clearly $\varphi$ is an isomorphism. Hence $G_1$ and $G_2$ are isomorphic.

**22.** The minimum number of edges in a connected graph with $n$ vertices is $n-1$. *[MODEL QUESTION]*

**Answer:**
A minimally connected graph is a tree, so we can prove that a tree with $n$ vertices has $n-1$ edges as follows.

Let $T$ be a tree with $n$ vertices. Let $e \in T$ be an edge whose end vertices are $u$ and $v$. There is no other path between $u$ and $v$ except $e$. Therefore, deletion of $e$ produces two trees, say $T_1$ and $T_2$. *[diagram: a tree with $n$ vertices split by edge $e$ into components $T_1$ (containing $u$) and $T_2$ (containing $v$)]*

Let the number of vertices of $T_1$ and $T_2$ be $n_1$ and $n_2$, where $n_1 + n_2 = n$, as $T$ has $n$ vertices. Obviously, $n_1$ and $n_2$ are both less than $n$. Hence by the induction hypothesis, the number of edges of $T_1$ and $T_2$ are respectively $n_1 - 1$ and $n_2 - 1$.

Thus, $T - e$ contains $(n_1 - 1) + (n_2 - 1) = n-2$ edges, and hence $T$ has exactly $n-1$ edges.

From this theorem one can state the following result: The minimum number of edges of a connected graph with $n$ vertices is $n-1$.

**23.** Draw the three distinct connected graphs which are not isomorphic, from the degree sequence $\{1, 3, 3, 4, 5\}$. *[MODEL QUESTION]*

**Answer:**
The given degree sequence can be realized as a graph (e.g. a 4-vertex complete-graph core with both diagonals plus a pendant), and the three distinct non-isomorphic connected realizations are drawn. *[diagram: three connected multigraphs/graphs on 5 vertices, each realizing the degree sequence $\{1, 3, 3, 4, 5\}$ — the realizations use a self-loop and/or parallel edges to attain the required degrees]*

**24.** Construct the incidence matrix from the following graph: *[MODEL QUESTION]*
*[diagram: graph on vertices $v_1, v_2, v_3, v_4, v_5$ with edges $e_1, e_2, e_3, e_4, e_5, e_6, e_7, e_8$]*

**Answer:**
The required incidence matrix is

$$\begin{array}{c|cccccccc} & e_1 & e_2 & e_3 & e_4 & e_5 & e_6 & e_7 & e_8 \\ \hline v_1 & 1 & 0 & 0 & 0 & 0 & 1 & 1 & 1 \\ v_2 & 1 & 1 & 0 & 1 & 0 & 0 & 0 & 0 \\ v_3 & 0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 \\ v_4 & 0 & 0 & 1 & 1 & 1 & 1 & 0 & 0 \\ v_5 & 0 & 0 & 0 & 0 & 1 & 0 & 1 & 1 \end{array}$$

**25.** Show that a tree of $n$ vertices has $n-1$ edges. *[MODEL QUESTION]*

**Answer:**
Let $T$ be the tree. The result will be proved by the method of induction on $n$. Clearly the result is true for $n = 1, 2$.

We assume the result is true for $k$ number of vertices where $k < n$. In $T$, let $a$ be an edge with end vertices $A$ and $B$. Since two vertices in a tree are connected by only one path, there is no other path between $A$ and $B$. So $T-a$, the graph obtained from $T$ by deleting the edge $a$, becomes a disconnected graph. Now the graph $T-a$ has two components, say $T_1$ and $T_2$. Let $T_1$ and $T_2$ have $n_1$ and $n_2$ number of vertices. So $n = n_1 + n_2$.

If the component $T_1$ contains a circuit, then $T$ would have a circuit, which is not possible. So $T_1$ is a tree. Similarly $T_2$ is a tree also. So, by our hypothesis, $T_1$ and $T_2$ have $n_1 - 1$ and $n_2 - 1$ number of edges. Thus $T-a$ contains $(n_1 - 1) + (n_2 - 1) = n_1 + n_2 - 2 = n-2$ number of edges. Hence $T$ has $n-2+1 = n-1$ number of edges.

**26.** Find the minimal spanning tree of the following labelled connected graph by Kruskal's Algorithm. *[MODEL QUESTION]*
*[diagram: a labelled connected graph on vertices $v_1, v_2, v_3, v_4, v_5, v_6$ with edge weights — $v_1v_2 = 16$, $v_1v_5 = 19$, $v_1v_6 = 21$, $v_2v_6 = 11$, $v_2v_3 = 5$, $v_3v_4 = 10$, $v_3v_6 = 6$, $v_4v_6 = 14$, $v_5v_6 = 33$, $v_4v_5 = 18$]*

*(The worked solution to this question continues in the Long Answer portion of the chapter and is not transcribed here.)*


## Long Answer Type Questions

**1. a) Prove that the chromatic number of a complete graph with $n$ vertices ($K_n$) is $n$.** *[WBUT 2013(ODD), 2016(ODD), 2017(ODD)]*

**OR,**

**What is the chromatic polynomial for a complete graph with $n$ vertices?** *[WBUT 2015(EVEN)]*

Since every complete graph is such that every pair of vertices are joined by an edge, for proper colouring they have to have different colours.

Hence $K_n$ requires $n$ colours for proper colouring, i.e., $\chi(K_n) = n$.

**1. b) Find the chromatic number of the following graph.** *[WBUT 2013(ODD)]*

[The graph has vertices $F$, $D$, $C$ and inner vertices forming crossing edges — a "double diamond" with two triangular faces sharing crossed diagonals.] `[diagram]`

The graph is a $C_5$ (it admits a 3-colouring of an inner pentagon-like structure with vertices labelled $C_1, C_2, C_3$ and $A, B, D, E, F$).

[The colouring diagram shows the vertices labelled with colours $C_1, C_2, C_3$.] `[diagram]`

Clearly one requires 3 colours as shown in the diagram, since two adjacent vertices have to have different colours.

So the chromatic number of the given graph $= 3$.

**1. c) Find the chromatic polynomial of a connected graph on three vertices.** *[WBUT 2013(ODD)]*

Here the required chromatic polynomial is
$$C_1\lambda + C_2\frac{\lambda(\lambda-1)}{2!} + C_3\frac{\lambda(\lambda-1)(\lambda-2)}{3!}$$
where $C_1 = C_2 = 0$ and $C_3 = 5!$ `[as printed]`

i.e., $\dfrac{5!\,\lambda(\lambda-1)(\lambda-2)}{3!}$

or, $20\lambda(\lambda-1)(\lambda-2)$;  or, $20(\lambda^3 - 3\lambda^2 + 2\lambda)$.

**2. a) State the decomposition theorem for obtaining chromatic polynomial and find the chromatic polynomial of the following graph using it.** *[WBUT 2014(ODD)]*

[The graph is a parallelogram-shaped figure made of two triangles sharing a common edge (rhombus split by a diagonal).] `[diagram]`

**The Decomposition Theorem:** Let $G$ be a graph with $A$ and $B$ two non-adjacent vertices. Let $G_1$ be the graph obtained from $G$ by joining $A$ and $B$, and let $G_2$ be the graph obtained from $G$ by fusing the vertices $A$ and $B$ and replacing the parallel edges by single edges. Then
$$P_n(\lambda) \text{ of } G = P_n(\lambda) \text{ of } G_1 + P_{n-1}(\lambda) \text{ of } G_2.$$

The graph $G$ is a quadrilateral $ABCD$ with diagonal $AC$ (vertices $A$, $B$ at top, $D$, $C$ at bottom). `[diagram]`

We take $B$ and $D$ as the non-adjacent vertices, and by joining $B$ and $D$ we get $G_1$ as the complete graph on $\{A, B, C, D\}$ (both diagonals drawn). `[diagram]`

Clearly $G_1$ is complete and its chromatic polynomial is given by
$$P_4(\lambda) \text{ of } G_1 = \lambda(\lambda-1)(\lambda-2)(\lambda-3).$$

To get $G_2$ we fuse $B$ and $D$ and replace the parallel edges by single edges and obtain a triangle with vertices $A$, $B{=}D$, $C$. `[diagram]`

Clearly $G_2$ is complete and $P_3(\lambda)$ of $G_2 = \lambda(\lambda-1)(\lambda-2)$.

Hence the required chromatic polynomial of $G$ is
$$P_4(\lambda) = \lambda(\lambda-1)(\lambda-2)(\lambda-3) + \lambda(\lambda-1)(\lambda-2) = \lambda(\lambda-1)(\lambda-2)^2.$$

**2. b) Find the closed form of the generating function for the numeric function $f_r = \dfrac{r}{2}(r+1),\ r \ge 0$.** *[WBUT 2014(ODD)]*

Here, $f_r = \dfrac{r}{2}(r+1)$.

The closed form of the generating function for $f_r$ is $\displaystyle \frac{1}{2}\sum_{r=0}^{\infty} r(r+1)x^r$.

Now we observe that
$$\frac{1}{1-x} = 1 + x + x^2 + x^3 + \cdots \text{ to } \infty$$
$$\frac{1}{(1-x)^2} = 1 + 2x + 3x^2 + 4x^3 + \cdots \text{ to } \infty$$
$$\frac{2}{(1-x)^3} = 1\cdot 2 + 3\cdot 2x + 4\cdot 3x^2 + \cdots \text{ to } \infty = \sum_{r=1}^{\infty} r(r+1)x^{r-1}.$$

Hence the required closed form is $\dfrac{2x}{(1-x)^3}$.

**3. a) Find the chromatic polynomial of the given graph.** *[WBUT 2015(EVEN)]*

[The graph is a figure combining a square with a diagonal and an attached arc/quarter-circle region on the right.] `[diagram]`

Let the chromatic polynomial of the graph be
$$P_5(\lambda) = C_1\lambda + C_2\frac{\lambda(\lambda-1)}{2} + C_3\frac{\lambda(\lambda-1)(\lambda-2)}{3!} + C_4\frac{\lambda(\lambda-1)(\lambda-2)(\lambda-3)}{4!} + C_5\frac{\lambda(\lambda-1)(\lambda-2)(\lambda-3)(\lambda-4)}{5!}$$
where $C_1, C_2, C_3, C_4, C_5$ are constants.

Since the graph has a triangle, it will require at least three different colours of proper colouring.

Therefore, $C_1 = C_2 = 0$.

The given graph has five vertices, thus $C_5 = 5!$.

Moreover, $C_3 = 6$. Because if we choose three vertices $v_2, v_3, v_4$, then these vertices can be coloured by three different colours in $3! = 6$ ways and we have no more choice except $v_5$ will be the same colour as $v_2$ and $v_4$ as $v_2$.

Similarly, with 4 colours the vertices $v_2, v_3, v_4$ can be properly coloured in $4\cdot 6 = 24$ ways. The fourth colour can be assigned to $v_1$ or $v_5$ in 2 ways.

Therefore, $C_4 = 24\cdot 2 = 48$.

Hence,
$$P_n(\lambda) = \lambda(\lambda-1)(\lambda-2) + 2\lambda(\lambda-1)(\lambda-2)(\lambda-3) + \lambda(\lambda-1)(\lambda-2)(\lambda-3)(\lambda-4)$$
$$= \lambda(\lambda-1)(\lambda-2)(\lambda^2 - 5\lambda + 7).$$

**3. b) Define the Petersen graph and find its chromatic polynomial.** *[WBUT 2015(EVEN)]*

In the mathematical field of graph theory, the Petersen graph is an undirected graph with 10 vertices and 15 edges. It is a small graph that serves as a useful example and counterexample for many problems in graph theory.

The Petersen graph is the complement of the line graph of $K_5$. It is also the Kneser graph $KG_{5,2}$; this means that it has one vertex for each 2-element subset of a 5-element set, and two vertices are connected by an edge if and only if the corresponding 2-element subsets are disjoint from each other. As a Kneser graph of the form $KG_{2n-1,n-1}$ it is an example of an odd graph. Geometrically, the Petersen graph is the graph formed by the vertices and edges of the hemi-dodecahedron, that is, a dodecahedron with opposite points, lines and faces identified together. The Petersen graph has chromatic number 3, meaning that its vertices can be coloured with three colours — but not with two — such that no edge connects vertices of the same colour. It has a list colouring with 3 colours, by Brooks' theorem for list colourings. The Petersen graph has chromatic index 4; colouring the edges requires four colours. A proof of this requires checking four cases to demonstrate that no 3-edge-colouring exists. As a connected bridgeless cubic graph with chromatic index four, the Petersen graph is a snark. It is the smallest possible snark, and was the only known snark from 1898 until 1946. The snark theorem, a result conjectured by W. T. Tutte and announced in 2001 by Robertson, Sanders, Seymour, and Thomas, states that every snark has the Petersen graph as a minor.

Additionally, the graph has fractional chromatic index 3, proving that the difference between the chromatic index and fractional chromatic index can be as large as 1. The long-standing Goldberg–Seymour Conjecture proposes that this is the largest gap possible.

The number (a variant of the chromatic index) of the Petersen graph is 5.

The Petersen graph requires at least three colours in any (possibly improper) colouring that breaks all of its symmetries; that is, its distinguishing number is three. Except for the complete graphs, it is the only Kneser graph whose distinguishing number is not two.

[Figure: the six switching-distinct signed Petersen graphs $P_1, P_2, P_3, P_4, P_5, P_6$.] `[diagram]`

Chromatic polynomials of six signed Petersen graphs:
$$cp_1(2k+1) = 1024k^{10} - 2560k^9 + 3840k^8 - 4480k^7 + 3712k^6 - 1792k^5 + 160k^4 + 480k^3 - 336k^2 + 72k,$$
$$cp_2(2k+1) = 1024k^{10} - 2560k^9 + 3840k^8 - 4480k^7 + 3968k^6 - 2560k^5 + 1184k^4 - 352k^3 + 48k^2,$$
$$cp_3(2k+1) = 1024k^{10} - 2560k^9 + 3840k^8 - 4480k^7 + 4096k^6 - 2944k^5 + 1696k^4 - 760k^3 + 236k^2 - 40k,$$
$$cp_4(2k+1) = 1024k^{10} - 2560k^9 + 3840k^8 - 4480k^7 + 4224k^6 - 3200k^5 + 1984k^4 - 952k^3 + 308k^2 - 52k,$$
$$cp_5(2k+1) = 1024k^{10} - 2560k^9 + 3840k^8 - 4480k^7 + 4096k^6 - 3072k^5 + 1920k^4 - 960k^3 + 320k^2 - 48k,$$
$$cp_6(2k+1) = 1024k^{10} - 2560k^9 + 3840k^8 - 4480k^7 + 4480k^6 - 3712k^5 + 2560k^4 - 1320k^3 + 460k^2 - 90k.$$

**4. a) Find the chromatic polynomial for the following graph.** *[WBUT 2015(ODD), 2018(ODD)]*

[The graph is a 5-vertex figure: a quadrilateral with an internal vertex joined by crossing diagonals (a "book/fan"-like graph).] `[diagram]`

We use two results here.

**Result 1:** The chromatic polynomial of a complete graph of $n$ vertices is
$$\lambda(\lambda-1)(\lambda-2)(\lambda-3)\cdots(\lambda-n+1).$$

**Result 2:** If $G$ is a graph with two non-adjacent vertices $a$ and $b$, and if $G'$ denotes the graph obtained by adding an edge between $a$ and $b$, and $G''$ denotes the simple graph obtained from $G$ by fusing the vertices $a$ and $b$ together and replacing parallel edges by single edges, then
$$P_n^{G}(\lambda) = P_n^{G'}(\lambda) + P_n^{G''}(\lambda).$$

[Decomposition tree: the graph reduces to subgraphs $H_1, H_2, H_3, H_4$.] `[diagram]`

We now have:

- The polynomial of $H_1$ is $\lambda(\lambda-1)(\lambda-2)(\lambda-3)(\lambda-4)$.
- The polynomial of $H_2$ is $\lambda(\lambda-1)(\lambda-2)(\lambda-3)$.
- The polynomial of $H_3$ is $\lambda(\lambda-1)(\lambda-2)(\lambda-3)$.
- The polynomial of $H_4$ is $\lambda(\lambda-1)(\lambda-2)$.

Hence the required chromatic polynomial of the given graph is
$$\lambda(\lambda-1)(\lambda-2)(\lambda-3)(\lambda-4) + 2\lambda(\lambda-1)(\lambda-2)(\lambda-3) + \lambda(\lambda-1)(\lambda-2)$$
$$\text{or, } \lambda(\lambda-1)(\lambda-2)(\lambda^2 - 5\lambda + 7).$$

**4. b) Let $G = (V, E)$ with $|V| = n$ be a connected graph. Let the maximum independent set of $G$ be $\beta(G)$ and the chromatic number of $G$ be $\chi(G)$. Prove that $n \le \beta(G)\chi(G)$. Use this result to show that $\beta(G) \ge \dfrac{n}{4}$ for a planar graph.** *[WBUT 2015(ODD)]*

**1st part:**

Given a $k$-colouring of $G$, the vertices being coloured with the same colour form an independent set. Let $G$ be a graph with $n$ vertices and $c$ a $k$-colouring of $G$. We define
$$V_i = \{v : c(v) = i\}$$
for $i = 1, 2, \ldots, k$. Each $V_i$ is an independent set. Let $\beta(G)$ be the independence number of $G$; we have $|V_i| \le \beta(G)$.

Since
$$n = |V_1| + |V_2| + \cdots + |V_k| \le k\cdot\beta(G) = \chi(G)\beta(G),$$
we have
$$\chi(G) \ge \frac{n}{\beta(G)}.$$

**2nd part:**

As we know, the maximum chromatic number of a planar graph is 4. So in this case $4\beta(G) \ge n$, or $\beta(G) \ge \dfrac{n}{4}$.

**4. c) Prove that the graph consisting of simply one circuit with $n \ge 3$ vertices is 2-chromatic.** *[WBUT 2015(ODD)]*

The statement is wrong, as the following is a circuit with 3 vertices which is not 2-chromatic.

[Diagram: a triangle (cycle $C_3$).] `[diagram]`

**5. a) Find the chromatic polynomial of the following graph $G$.** *[WBUT 2016(ODD)]*

[The graph $G$ has 5 vertices $a, b, c, d, e$: a quadrilateral $a, b, d, e$ with diagonals crossing and vertex $c$ attached to the right side, forming a triangle.] `[diagram]`

Let the chromatic polynomial of the graph be
$$P_5(\lambda) = C_1\lambda + C_2\frac{\lambda(\lambda-1)}{2!} + C_3\frac{\lambda(\lambda-1)(\lambda-2)}{3!} + C_4\frac{\lambda(\lambda-1)(\lambda-2)(\lambda-3)}{4!} + C_5\frac{\lambda(\lambda-1)(\lambda-2)(\lambda-3)(\lambda-4)}{5!}$$
where $C_1, C_2, C_3, C_4, C_5$ are constants.

Since the graph has a triangle, it will require at least 3 different colours of proper colouring.

$C_1 = C_2 = 0$.

The given graph has five vertices, thus $C_5 = 5!$.

Moreover $C_3 = 3! = 6$, because if we choose three vertices $b, c, d$, then these vertices can be coloured by three different colours in $3! = 6$ ways and we have no more choice except the vertex '$a$' or '$e$' can be coloured by the same colour as '$c$'.

Similarly, with 4 colours the vertices $b, c, d$ can be properly coloured in $2\times 6 + 2\times 6 = 24$ ways.

$C_4 = 24$.

Hence
$$P_n(\lambda) = \lambda(\lambda-1)(\lambda-2) + 2\lambda(\lambda-1)(\lambda-2)(\lambda-3) + \lambda(\lambda-1)(\lambda-2)(\lambda-3)(\lambda-4)$$
$$= \lambda(\lambda-1)(\lambda-2)\big[1 + (\lambda-3) + (\lambda-3)(\lambda-4)\big] = \lambda(\lambda-1)(\lambda-2)\big[\lambda^2 - 6\lambda + 10\big].$$
`[as printed: final bracket shown as $\lambda^2 - 6\lambda - 10$ in OCR; image reads $\lambda^2 - 6\lambda + 10$]`

**5. b) Let $C_n$ be a cycle with $n$ vertices. If $C_n$ is a subgraph of a graph $G$ and $n$ is odd, then show that the chromatic number of $G$, i.e., $\chi(G) \ge 3$.** *[WBUT 2016(ODD)]*

We may assume that $G$ is connected. We already know that if $G$ contains an odd cycle then it cannot be coloured by 2 colours. Suppose $G$ contains no odd cycles. Fix any vertex $v$ of $G$ and give it colour 1. Let $v_1, v_2, v_3, \ldots, v_n$ be the vertices of $G$ which are adjacent to $v$; colour each of them with colour 2. Next, colour all vertices adjacent to the $v_i$'s with colour 1. Continue in this manner, alternately assigning the colours 1 and 2. Since $G$ is connected (and finite), every vertex of $G$ will get coloured eventually. (In this way, all vertices whose distance from $v$ is even will get colour 1 and those at odd distance from $v$ will get colour 2.) In this colouring, no two adjacent vertices get the same colour. We must ensure, however, that this colouring is done unambiguously, that is, no vertex is coloured with both colours. If this happens for some vertex $u$, then there are two walks from $v$ to $u$, one of even length and the other of odd length. Putting these two walks together we get a closed walk and hence a circuit of odd length. This circuit may not itself be a cycle, but it can be expressed as a union of disjoint cycles and one of these cycles must be odd — a contradiction. So $G$ is colourable with two colours. Thus we get a lower bound of $\chi(G)$, i.e., $\chi(G) \ge 3$.

**5. c) Show that every complete graph is perfect.** *[WBUT 2016(ODD)]*

Let $G = (A, B, E)$ be a bipartite graph every vertex of which has degree $d$. Consider an arbitrary subset $S \subseteq A$ and its neighbourhood $N(S)$. Then $|S|\,d \le |N(S)|\,d$, because $|S|\,d$ is the number of edges between $S$ and $N(S)$ (i.e., the number of edges incident to the vertices of $S$), which $|N(S)|\,d$ counts — all edges between $S$ and $N(S)$ and possibly some other edges incident to the vertices of $N(S)$ (if such edges exist). Therefore, (1) holds for $G$ and hence there is a matching covering $A$. This matching is perfect, because $|A|\,d = |B|\,d$ (which is the total number of edges counted twice from each side of the graph) implying $|A| = |B|$.

**6. a) Find the chromatic polynomial of the following graph.** *[WBUT 2017(EVEN)]*

[The graph has 5 vertices $v_1, v_2, v_3, v_4, v_5$ arranged with $v_5$ and $v_4$ at the base and a fan of edges to $v_1, v_2, v_3$.] `[diagram]`

Since the given graph $G$ has 5 vertices, its chromatic polynomial $f(x)$ is given by
$$f(x) = c_1\,{}^xC_1 + c_2\,{}^xC_2 + c_3\,{}^xC_3 + c_4\,{}^xC_4 + c_5\,{}^xC_5.$$

Since $G$ cannot be coloured with one colour, $c_1 = 0$. Again, since $G$ cannot be coloured with 2 colours, $c_2 = 0$.

To find $c_3$ we observe that 3 colours can be assigned to the vertices $v_1, v_2, v_3$ in $3!$, i.e., 6 different ways, and then $v_4$ can be assigned the same colours as of $v_2$ and $v_5$ can be assigned the same colours as of $v_1$. Thus we are left with no other choice. Hence $c_3 = 6$.

Next we observe that starting with 4 colours, we choose 3 colours in ${}^4C_3$ ways, i.e., 4 ways, and colour the vertices $v_1, v_2, v_3$ in $4\times 3\times 2$ ways and the remaining colours can be assigned either to $v_4$ or to $v_5$ in 2 ways, so $c_4 = 24\times 2 = 48$.

To find $c_5$, we see that 5 colours can be assigned to 5 vertices in $5!$, i.e., 120 ways. Hence $c_5 = 120$.

Therefore the required chromatic polynomial is
$$f(x) = 0\cdot{}^xC_1 + 0\cdot{}^xC_2 + 6\cdot{}^xC_3 + 48\cdot{}^xC_4 + 120\cdot{}^xC_5$$
$$= \frac{6x(x-1)(x-2)}{3!} + 48\cdot\frac{x(x-1)(x-2)(x-3)(x-4)}{4!} + 120\cdot\frac{x(x-1)(x-2)(x-3)(x-4)(x-5)}{5!}$$
$$= x(x-1)(x-2) + 2x(x-1)(x-2)(x-3)(x-4) + x(x-1)(x-2)(x-3)(x-4)(x-5).$$

Since $f(1) = f(2) = 0$ but $f(3) = 6 \ne 0$, $\chi(G) = 3$.

**6. b) What is the chromatic polynomial of a graph? Find the chromatic polynomial of a tree having $n$ vertices.** *[WBUT 2017(EVEN)]*

**1st part:**

**Chromatic Polynomial:** One may be interested in knowing the number of ways a graph of $n$ vertices can be properly coloured by $\lambda$ colours. The answer to this question has been given by what is known as the chromatic polynomial.

**Definition:** The chromatic polynomial of a connected graph of $n$ vertices, denoted by $P_n(\lambda)$, is a polynomial in $\lambda$ which gives the number of ways the graph can be properly coloured with at most $\lambda$ colours.

In fact, this is given by $\displaystyle P_n(\lambda) = \sum_{j=1}^{n} a_j\,{}^\lambda C_j$, where $a_j$ denotes the no. of ways of colouring $G$ properly with exactly $j$ colours chosen from $\lambda$ colours. Such $j$ colours can be chosen from $\lambda$ colours in ${}^\lambda C_j$ ways. Then $a_j\,{}^\lambda C_j$ gives the number of ways of colouring $G$ properly with exactly $j$ colours.

Hence
$$P_n(\lambda) = \sum_{j=1}^{n} a_j\,{}^\lambda C_j = a_1\frac{\lambda}{1!} + a_2\frac{\lambda(\lambda-1)}{2!} + a_3\frac{\lambda(\lambda-1)(\lambda-2)}{3!} + \cdots + a_n\frac{\lambda(\lambda-1)\cdots(\lambda-n+1)}{n!}.$$

Note that for determining the chromatic polynomial of a connected graph, the coefficients $a_1, a_2, \ldots, a_n$ need to be calculated from the graph.

For evaluation of $a_1, a_2, \ldots, a_n$, the following observations will be helpful.

1. As for a non-null graph, i.e., a graph with at least one edge, two colours are required, which means $a_1 = 0$.
2. A complete graph with $n$ vertices requires $n$ colours for proper colouring and this can be done in $n!$ ways, i.e., $a_n = n!$.

**2nd part:**

Let $G$ be a tree with $n$ vertices. We shall prove that the chromatic polynomial $f(x)$ of $G$ is $x(x-1)^{n-1}$.

Clearly the result is true for $n = 1$, i.e., with $x$ colours any one-vertex graph can be coloured in $x$ ways.

If $n = 2$, $G$ is a tree with two vertices joined by an edge. Here also the result is true because the no. of ways they can be coloured is $x(x-1)$.

Let us assume that the result is true for a tree with $m$ vertices.

Now let us take a tree with $m+1$ vertices. We choose a pendant vertex $v$, say. The graph $G - \{v\}$ is a tree with $m$ vertices.

We see that the pendant vertex can be coloured in $x-1$ ways, as the vertex adjacent to $v$ cannot be given the same colour as $v$.

Thus the tree $G$ with $m+1$ vertices can be coloured in $x(x-1)^{m-1}(x-1)$, i.e., $x(x-1)^{(m+1)-1}$ ways.

Thus by induction we see the result is true for $n$ vertices when $n \in \mathbb{N}$.

**6. c) Show that a cycle with $n\ (\ge 3)$ vertices is 2-chromatic if $n$ is even and 3-chromatic if $n$ is odd.** *[WBUT 2017(EVEN)]*

We note that a cycle with 3 vertices is a triangle. So 3 colours are required to colour it properly. Therefore $\chi(C_3) = 3$.

A cycle with 4 vertices is a square. So 2 colours are required to colour it, because vertices can be coloured alternately by 2 colours. Thus $\chi(C_4) = 2$.

For a cycle with 5 vertices, we see the first four vertices can be coloured by 2 colours and the 5th vertex is to get a different colour. So $\chi(C_5) = 3$.

The same argument may be applied to any no. of vertices. Thus we conclude
$$\chi(C_n) = \begin{cases} 2 & \text{if } n \text{ is even} \\ 3 & \text{if } n \text{ is odd} \end{cases}$$

**7. a) A connected planar graph with $n$ vertices and $e$ edges has $e - n + 2$ regions.** *[WBUT 2017(ODD)]*

**Proof:** by induction on the number of edges in the graph.

**Base:** If $e = 0$, the graph consists of a single vertex with a single region surrounding it. So we have $1 - 0 + 1 = 2$, which is clearly right.

**Induction:** Suppose the formula works for all graphs with no more than $n$ edges. Let $G$ be a graph with $n + 1$ edges.

**Case 1:** $G$ doesn't contain a cycle. So $G$ is a tree and we already know the formula works for trees.

**Case 2:** $G$ contains at least one cycle. Pick an edge $p$ that's on a cycle. Remove $p$ to create a new graph $G'$. Since the cycle separates the plane into two regions, the regions to either side of $p$ must be distinct. When we remove the edge $p$, we merge these two regions. So $G'$ has one fewer region than $G$. Since $G'$ has $n$ edges, the formula works for $G'$ by the induction hypothesis. That is $v' - e' + f' = 2$. But $v' = v$, $e' = e - 1$, and $f' = f - 1$. Substituting, we find that $v - (e - 1) + (f - 1) = 2$.

So
$$v - e + f = 2.$$

**7. b) Find the chromatic polynomial of the graph given below.** *[WBUT 2017(ODD)]*

[The graph has 5 vertices $v_1, v_2, v_3, v_4, v_5$: a triangle $v_1, v_2, v_3$ with $v_4, v_5$ attached below forming additional edges.] `[diagram]`

We apply the Decomposition Theorem as follows.

[Decomposition: choosing $V_2$ and $V_5$ and joining them, then fusing $V_2$ and $V_5$, gives graph I; then choosing $V_1$ and $V_5$, joining and fusing them, gives graph II and III.] `[diagram]`

Choosing $V_2$ and $V_5$ and join them. Then fuse $V_2$ and $V_5$.

We now choose $V_1$ and $V_5$ and join them in I and then fuse them.

[Graphs I, II, III shown.] `[diagram]`

> *(The source presents only the decomposition diagrams I, II, III for 7(b); no final closed-form chromatic polynomial is printed on the page.)*

**8. a) Show that the chromatic polynomial of a cyclic graph of order $n$ is $(\lambda-1)^n + (-1)^n(\lambda-1)$.**

The chromatic polynomial of a cyclic graph of order $n$ is $(\lambda-1)^n + (-1)^n(\lambda-1)$.

Applying the method of induction, for $n = 2$ it is
$$(\lambda-1)^2 + (-1)^2(\lambda-1) = (\lambda-1)^2 + (\lambda-1) = \lambda^2 + 1 - 2\lambda - 1 = \lambda^2 - \lambda = \lambda(\lambda-1). \quad \text{(Proved)}$$

Now, for $n = 3$, it is true as $C_3 = K_3$ for a cyclic graph.

Deleting an edge from a cycle results in a path which is a tree, so its chromatic polynomial is like $\lambda(\lambda-1)^{n-1}$.

Contracting an edge yields a cycle of length $n-1$ which, by the inductive hypothesis, has a chromatic polynomial of $(\lambda-1)^{n-1} + (-1)^{n-1}(\lambda-1)$.

The difference is
$$\lambda(\lambda-1)^{n-1} - (\lambda-1)^{n-1} - (-1)^{n-1}(\lambda-1) = (\lambda-1)^n + (-1)^n(\lambda-1). \quad \text{(Ans.)}$$

So, by induction, it is proved that the chromatic polynomial of a cyclic graph of order $n$ is
$$(\lambda-1)^n + (-1)^n(\lambda-1). \quad \text{(Proved)}$$

**8. b) Find the chromatic polynomial of the following graph.** *[WBUT 2018(EVEN)]*

[The graph has 5 vertices $v_1, v_2, v_3, v_4, v_5$: $v_1$ at the left joined to $v_2$ (top) and $v_5$ (bottom); $v_2$–$v_3$ at top; $v_5$–$v_4$ at bottom; with crossing diagonals $v_2$–$v_4$ and $v_3$–$v_5$.] `[diagram]`

$$P_5(\lambda) = C_1\lambda + C_2\frac{\lambda(\lambda-1)}{2!} + C_3\frac{\lambda(\lambda-1)(\lambda-2)}{3!} + C_4\frac{\lambda(\lambda-1)(\lambda-2)(\lambda-3)}{4!} + C_5\frac{\lambda(\lambda-1)(\lambda-2)(\lambda-3)(\lambda-4)}{5!}$$
where $C_1, C_2, C_3, C_4, C_5$ are constants.

Here, $C_5 = 5!$, $C_1 = 0$, $C_2 = 2!$, $C_3 = 3!$, $C_4 = 24$.

$$P_5(\lambda) = \frac{2\lambda(\lambda-1)}{2!} + \frac{6\lambda(\lambda-1)(\lambda-2)}{3!} + \frac{24\lambda(\lambda-1)(\lambda-2)(\lambda-3)}{4\times 3\times 2} + \frac{120\lambda(\lambda-1)(\lambda-2)(\lambda-3)(\lambda-4)}{5!}$$

$$P_5(\lambda) = \lambda(\lambda-1) + \lambda(\lambda-1)(\lambda-2) + \lambda(\lambda-1)(\lambda-2)(\lambda-3) + \lambda(\lambda-1)(\lambda-2)(\lambda-3)(\lambda-4).$$

**9. Answer the question very briefly.** *[MODEL QUESTION]*

**i) Define the adjacency matrix of a graph.**

The adjacency matrix $A(G)$ of a graph $G$ is a square matrix $[a_{ij}]$, such that
$$a_{ij} = \begin{cases} r & \text{if the } i^{\text{th}} \text{ vertex is joined to the } j^{\text{th}} \text{ vertex by } r \text{ edges,} \\ 0 & \text{if there is no edge joining } i^{\text{th}} \text{ vertex and } j^{\text{th}} \text{ vertex.} \end{cases}$$

**ii) Draw all simple graphs of 3 vertices.** *[MODEL QUESTION]*

[The answer shows all simple graphs on 3 vertices: the empty graph (no edges), graphs with one edge, graphs with two edges (paths), and the triangle (complete graph $K_3$).] `[diagram]`

**10. Show that a simple graph with $n$ vertices and $k$ components has at most $\dfrac{(n-k)(n-k+1)}{2}$ edges.** *[MODEL QUESTION]*

Let $G$ be a graph with $k$ components and let its $i^{\text{th}}$ component have $n_i$ vertices where $i = 1, 2, \ldots, k$.

Then the maximum number of edges of $G$
$$= \sum_{i=1}^{k} \frac{n_i(n_i-1)}{2} = \frac{1}{2}\sum_{i=1}^{k}(n_i^2 - n_i) = \frac{1}{2}\sum_{i=1}^{k} n_i^2 - \frac{1}{2}\sum_{i=1}^{k} n_i = \frac{1}{2}\sum_{i=1}^{k} n_i^2 - \frac{n}{2}.$$

Now,
$$\left\{\sum_{i=1}^{k}(n_i - 1)\right\}^2 = (n - k)^2$$
or,
$$\sum_{i=1}^{k}(n_i - 1)^2 + 2\sum_{\substack{i,j \\ i<j}}(n_i - 1)(n_j - 1) = n^2 + k^2 - 2nk$$
or,
$$\sum_{i=1}^{k}(n_i^2 - 2n_i + 1) \le n^2 + k^2 - 2nk \qquad \left[\because \sum_{\substack{i,j \\ i<j}}(n_i - 1)(n_j - 1) \ge 0\right]$$
or,
$$\sum_{i=1}^{k} n_i^2 - 2\sum_{i=1}^{k} n_i + \sum_{i=1}^{k} 1 \le n^2 + k^2 - 2nk$$
or,
$$\sum_{i=1}^{k} n_i^2 \le n^2 + k^2 - 2nk + 2n - k.$$

Hence the maximum number of edges
$$\le \frac{1}{2}\{n^2 + k^2 - 2nk + 2n - k - 2n\} = \frac{(n-k)(n-k+1)}{2}.$$

**11. a) A graph has 21 edges, 3 vertices each of degree 4 and the rest of the vertices are of degree 3. Find out the total number of vertices.** *[MODEL QUESTION]*

Let $n$ be the no. of vertices. Then we get
$$2\times 21 = 3\times 4 + (n - 3)\times 3$$
$$\text{or, } 42 = 12 + (n - 3)\times 3$$
$$\text{or, } n = 13.$$

**11. b) What do you mean by a connected graph? Derive the adjacency matrix for the following.** *[MODEL QUESTION]*

[The graph $G$ has 6 vertices $v_1, \ldots, v_6$: $v_1$ joined to $v_3$ (top) and to $v_2, v_4$; $v_2$–$v_4$; $v_4$–$v_5$ (a zig-zag); $v_5$–$v_6$.] `[diagram]`

**Connected graph:** A graph is called connected if for every pair of vertices of the graph there exists a path joining them.

The adjacency matrix of the given graph $G$ is
$$A(G) = \begin{array}{c c} & \begin{array}{cccccc} V_1 & V_2 & V_3 & V_4 & V_5 & V_6 \end{array} \\ \begin{array}{c} V_1 \\ V_2 \\ V_3 \\ V_4 \\ V_5 \\ V_6 \end{array} & \left(\begin{array}{cccccc} 0 & 1 & 1 & 1 & 0 & 0 \\ 1 & 0 & 0 & 1 & 0 & 0 \\ 1 & 0 & 0 & 0 & 0 & 0 \\ 1 & 1 & 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 & 0 & 1 \\ 0 & 0 & 0 & 0 & 1 & 0 \end{array}\right) \end{array}$$

**12. Examine whether graphs $H$ and $G$ are isomorphic or not.** *[MODEL QUESTION]*

[$G$ is a graph with vertices $A, B, C, D, E, F, G$ (a hexagonal arrangement with a central vertex $D$). $H$ is a graph with vertices $1, 2, 3, 4, 5, 6, 7$.] `[diagram]`

Yes, $G$ is isomorphic to $H$.

To see this, define $\phi: G \to H$ as
$$\phi(A) = 1,\ \phi(B) = 4,\ \phi(C) = 2,\ \phi(D) = 5,\ \phi(E) = 6,\ \phi(F) = 3,\ \phi(G) = 7.$$

Clearly $\phi$ is bijective and carries edges of $G$ to the corresponding edges of $H$. Hence $\phi$ is an isomorphism of $G$ to $H$.

**13. Write short notes on Hamiltonian Path.** *[MODEL QUESTION]*

The twin problem which is attributed as the genesis of graph theory, apart from the Königsberg Bridge Problem, is the one posed by a famous Irish mathematician Sir William Rowan Hamilton (1805–1865). As a matter of fact, Hamilton made a regular dodecahedron of wood, each of whose 20 corners was marked with the name of a city, and the problem was to start from any city and find a route along the edges of the dodecahedron that passes through every city exactly once and return to the city of origin. It may be mentioned here that the problem remains still unsolved.

To present the above problem graphically we need the following notions.

**Definition:** A cycle in a graph is called Hamiltonian if it passes every vertex exactly once. A graph is called Hamiltonian if it admits a Hamiltonian cycle.

It is obvious that only connected graphs can be Hamiltonian.

**Note:** also that there is as such no relation between Eulerian graphs and Hamiltonian graphs. An Eulerian graph need not be Hamiltonian, just as a Hamiltonian graph may not be Eulerian.

The following examples illustrate the situation:

[Two example graphs: one labelled "Hamiltonian but not Eulerian" (vertices $A, B, C, D, E, F$) and one labelled "Eulerian but not Hamiltonian" (vertices $P, Q, R, S$ with $U, V$).] `[diagram]`

A result of importance about Hamiltonian graphs is due to Dirac.

**Dirac's Theorem:** A connected graph $G$ with $n$ vertices is Hamiltonian if $n \ge 3$ and $d(v) \ge n$ for each vertex $v$ of $G$. `[as printed; standard statement is $d(v) \ge n/2$]`

Note that the condition stated in the theorem is sufficient only but not necessary.
