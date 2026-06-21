# DAA — Chapter 2: Fundamental Algorithmic Strategies

> **Source:** *Design and Analysis of Algorithms* organizer (MAKAUT/WBUT solved papers, Popular Publications), book pages DAA-24 to DAA-46.
> **Scope of this file:** Chapter at a Glance + Multiple Choice Type Questions + Short Answer Type Questions. (Long Answer Type Questions, which begin on DAA-47, are handled separately.)
> **Fidelity note for downstream readers (incl. LLMs):**
> - Concept summary and all multiple-choice questions/answers below were **verified against the scanned page images**, not just OCR.
> - **Answers are transcribed exactly as printed in the source.** A few printed answers are debatable by standard CS results (flagged inline as `[as printed]`); the source's letter is kept authoritative.
> - In worked solutions, any step illegible on the scan is marked `[illegible in source]` rather than guessed. Math is rendered in LaTeX; pseudocode is kept in fenced blocks.

---

## Chapter at a Glance

- **Dynamic programming:** It is typically applied to optimization problems. There can be many possible solutions in such problems. There is a value of each solution and we have to find a solution with the optimal (minimum or maximum) value. We call such a solution *an* optimal solution to the problem, as opposed to *the* optimal solution, since there may be several solutions that achieve the optimal value.

  There is a similarity between the divide-and-conquer method and the dynamic programming method. In divide and conquer, we divide the problem into many sub-problems and solve them; each time we have to solve each sub-problem. In dynamic programming we also divide a problem into many sub-problems, but unlike divide and conquer we do not solve the entire sub-problem each time — we apply the result of one sub-problem to another. So it is more flexible than divide and conquer.

  The development of a dynamic-programming algorithm can be broken into a sequence of four steps:
  1. Characterize the structure of an optimal solution.
  2. Recursively define the value of an optimal solution.
  3. Compute the value of an optimal solution in a bottom-up fashion.
  4. Construct an optimal solution from computed information.

- **Traveling Salesman Problem (TSP):** In the traveling-salesperson problem, a salesperson has to travel through all the cities in his domain exactly once and return to the starting city. The problem is to find a tour of minimum cost. This is similar to the Hamiltonian path problem: in the Hamiltonian path problem there may be more than one path from the source vertex to visit all the vertices of the graph; the TSP is to find the minimum-cost Hamiltonian path among all the Hamiltonian paths of that graph.

- **Backtracking:** Problems that deal with searching for a set of solutions, or which ask for an optimal solution satisfying some constraints, can be solved using the backtracking formulation. In many applications of the backtrack method, the desired solution is expressible as an $n$-tuple $(x_1, x_2, \ldots, x_n)$, where the $x_i$ are chosen from some finite set $S_i$. Often the problem calls for finding one vector that maximizes (or minimizes or satisfies) a criterion function $P(x_1, x_2, \ldots, x_n)$.

- **8-Queen's Problem:** The 8-queens problem is one of the common problems and an appropriate example where backtracking may be used very effectively. The problem is to place 8 queens on an $8\times 8$ chessboard so that no two queens attack each other — i.e. no two queens are in the same row, same column, or same diagonal. In general, it can be described as placing $n$ queens on an $n\times n$ chessboard in such a way that no two queens attack one another. The solution space required is $[\,8^2(8^2-1)(8^2-2)\cdots(8^2-7)\,]$ to solve this problem. So, in general, for the 8-queens problem the solution space is
  $$\prod_{i=0}^{8-1}\left(8^2 - i\right).$$

- **Greedy Method:** The characteristic of the greedy method is basically the same as that of solving a typical optimization problem, preferably of time-infeasible nature. The components of a typical greedy method are:
  1. A set of elements like nodes, edges in a graph.
  2. A set of elements which have already been used.
  3. To test whether a given set of elements provides a solution or not. However, the solutions may not be optimal.
  4. A selection function that picks up some elements which have not yet been used.
  5. An objective function which associates a value to a solution.

- **Knapsack Problem:** The knapsack problem states that we have to fill a knapsack having constant weight with some objects having different weights and different profit values. We have to fill the knapsack with objects in such a way that the total weight of the selected objects does not cross the limit of the knapsack and we get the maximum profit.

  Suppose the capacity of the knapsack is $c$. There are $n$ objects. An individual object is represented by $i$, where $i = 1, 2, \ldots, n$. The weight of the $i$-th object is $z_i$, $1 \le i \le n$, and the profit for the $i$-th object is $a_i$, $1 \le i \le n$. We can put a maximum of one unit of each object in the knapsack or some fractional part of it; so we consider that some fraction $x_i$, $0 \le x_i \le 1$, of object $i$ is kept in the knapsack. Now the weight of the knapsack is $\sum_{i=1}^{n} z_i x_i$ and the profit is $A = \sum_{i=1}^{n} a_i x_i$, so we can define this problem as:
  $$\text{Maximize } A = \sum_{i=1}^{n} a_i x_i \qquad \ldots(1)$$
  $$\text{Subject to } \sum_{i=1}^{n} z_i x_i \le C \qquad \ldots(2) \quad \text{and } 0 \le x_i \le 1,\ 0 \le i \le n.$$

---

## Multiple Choice Type Questions

**1.** Time complexity for Floyd's algorithm to find all pairs of shortest path of a graph $G$ with $V$ vertices and $E$ edges using the dynamic programming method is — *[WBUT 2007, 2015]*
a) $O(V^2)$   b) $O(E^2)$   c) $O(V^3)$   d) $O(E^3)$
**Answer: (c)**

**2.** The edge, removal of which makes a graph disconnected, is called — *[WBUT 2007]*
a) pendant vertex   b) bridge   c) articulation point   d) colored vertex
**Answer: (b)**

**3.** The minimum number of colors needed to color a graph having $n > 3$ vertices and 2 edges is — *[WBUT 2007, 2014, 2016]*
a) 2   b) 3   c) 4   d) 1
**Answer: (b)**

**4.** Which of the following algorithm design techniques is used in the quick sort algorithm? — *[WBUT 2008, 2010, 2016, 2018]*
a) Dynamic programming   b) Backtracking   c) Divide and conquer   d) Greedy method
**Answer: (c)**

**5.** Kruskal algorithm is a — *[WBUT 2009, 2012]*
a) Divide & conquer algorithm   b) Branch and bound algorithm   c) Greedy algorithm   d) Dynamic programming
**Answer: (c)**

**6.** Optimal substructure property is exploited by — *[WBUT 2009, 2013]*
a) Dynamic programming   b) Greedy method   c) Both (a) & (b)   d) None of these
**Answer: (a)** `[as printed]`

**7.** Which of the following approaches is adopted in Divide & Conquer algorithms? — *[WBUT 2009, 2018]*
a) Top-down   b) Bottom-up   c) Both (a) & (b)   d) None of these
**Answer: (a)**

**8.** The fractional Knapsack problem can be solved by using — *[WBUT 2010, 2016]*
a) Greedy method   b) Divide and Conquer method   c) Dynamic programming   d) none of these
**Answer: (a)**

**9.** Time complexity of Binary Search algorithm on $n$ items is — *[WBUT 2010, 2016]*
a) $O(n)$   b) $O(n\log n)$   c) $O(n^2)$   d) $O(n\log n)$
**Answer: correct answer is $O(\log_2 n)$.** `[as printed: the source rejects all options and writes in the correct answer]`

*(The source skips from Question 9 to Question 11; there is no Question 10 in the printed text.)*

**11.** Which of the following cannot be performed recursively? — *[WBUT 2011, 2013]*
a) binary search   b) quick sort   c) DFS   d) none of these
**Answer: (d)**

**12.** In which sorting technique is an element placed in its proper position at each step? — *[WBUT 2011]*
a) Bubble-sort   b) Quick sort   c) Merge sort   d) Heap sort
**Answer: (a)** `[as printed]`

**13.** The average number of comparisons performed by the merge sort algorithm in merging two sorted lists of length '2' is — *[WBUT 2011, 2018, 2019]*
a) $8/5$   b) $11/7$   c) $11/6$   d) $8/3$
**Answer: (d)**

**14.** Which of the following design techniques is used in the quick-sort algorithm? — *[WBUT 2011, 2013, 2018, 2019]*
a) Dynamic programming   b) Back tracking   c) Greedy method   d) Divide and conquer
**Answer: (d)**

**15.** The time-complexity of TSP is — *[WBUT 2011]*
a) $O(n^2 2^n)$   b) $\Theta(n^2 2^n)$   c) $\Omega(n^2 2^n)$   d) none of these
**Answer: (a)**

**16.** Which of the following algorithms solves the All-Pair Shortest Path problem? — *[WBUT 2011, 2016]*
a) Dijkstra's   b) Floyd's Warshall's   c) Prim's   d) Kruskal's
**Answer: (b)**

**17.** Best case time complexity for Binary search in unsuccessful case is — *[WBUT 2012, 2018]*
a) $O(1)$   b) $O(\log n)$   c) $O(n)$   d) None of these
**Answer: (b)** `[as printed]`

**18.** The tight bound for building a max heap is — *[WBUT 2012, 2016]*
a) $O(n)$   b) $O(\log_2 n)$   c) $O(n\log_2 n)$   d) none of these
**Answer: (c)** `[as printed]`

**19.** The worst case running time of a quick sort algorithm is — *[WBUT 2012]*
a) $O(n^2)$   b) $O(n\log_2 n)$   c) $O(n)$   d) $O(\log_2 n)$
**Answer: (a)**

**20.** Binary Search algorithm can't be applied to — *[WBUT 2012]*
a) sorted linked lists   b) sorted binary trees   c) sorted linear array   d) sorted integer array
**Answer: (a)**

**21.** Kruskal's algorithm uses _______ and Prim's algorithm uses _______ in determining the MST. — *[WBUT 2013]*
a) edges, vertex   b) vertex, edges   c) edges, edges   d) vertex, vertex
**Answer: (a)**

**22.** Match the following: — *[WBUT 2014]*
a) Fractional Knapsack — i) Greedy Algorithm
b) 0-1 Knapsack — ii) Dynamic Programming Algorithm
a) a-i and b-i   b) a-i and b-ii   c) a-ii and b-i   d) a-ii and b-ii
**Answer: (b)**

**23.** The average number of comparisons performed by the merge sort algorithm in merging two sorted lists of 2 elements is — *[WBUT 2014]*
a) $8/5$   b) $11/7$   c) $11/6$   d) $8/3$
**Answer: (d)**

**24.** Which of the following sorting methods would be most suitable for sorting a list which is almost sorted? — *[WBUT 2014]*
a) bubble sort   b) insertion sort   c) selection sort   d) quick sort
**Answer: (b)**

**25.** Prime's algorithm is an example of — *[WBUT 2014]*
a) backtracking   b) dynamic programming   c) greedy method   d) none of these
**Answer: (c)**

**26.** Kruskal's Algorithm for finding minimum spanning tree is an example of — *[WBUT 2015]*
a) Dynamic programming   b) Greedy method   c) Both (a) and (b)   d) None of these
**Answer: (b)**

**27.** Given two sorted lists of size "$m$" and "$n$" respectively. The number of comparisons needed in the worst case by merge sort will be — *[WBUT 2015]*
a) $m * n$   b) $\text{Max}(m, n)$   c) $\text{Min}(m, n)$   d) $m + n - 1$
**Answer: (a)** `[as printed]`

**28.** The running time $T(n)$, where "$n$" is the input size of a recursive algorithm, is given by
$$T(n) = c + T(n-1), \quad \text{if } n > 1$$
$$\quad\quad\;\; = d, \quad\quad\quad\quad\;\; \text{if } n \le 1$$
The order of the algorithm is — *[WBUT 2015]*
a) $n^2$   b) $n$   c) $n^3$   d) $n^n$
**Answer: (b)**

**29.** Travelling salesman problem is — *[WBUT 2015, 2016]*
a) P   b) NP   c) NP-complete   d) NP-Hard
**Answer: (d)**

**30.** Locally best computation is done in — *[WBUT 2017]*
a) Dynamic programming   b) Greedy method   c) both (a) and (b)   d) none of these
**Answer: (b)**

**31.** Which of the following algorithm design techniques is used for solving graph coloring problem? — *[WBUT 2017]*
a) Divide and conquer   b) Backtracking   c) Dynamic programming   d) Greedy method
**Answer: (b)**

**32.** The total running time of matrix chain multiplication of $n$ matrices is — *[WBUT 2017]*
a) $O(n^4)$   b) $O(n^3)$   c) $O(n^2)$   d) $O(n)$
**Answer: (b)**

**33.** The sub-problems in Divide and Conquer are considered to be — *[WBUT 2017]*
a) distinct   b) overlapping   c) large size   d) small size
**Answer: (d)** `[as printed]`

**34.** Which of the following algorithm design techniques is used in merge sort? — *[WBUT 2017]*
a) Dynamic programming   b) Backtracking   c) Divided and conquer   d) Greedy method
**Answer: (c)**

**35.** Which of the following standard algorithms is not based on Dynamic Programming? — *[WBUT 2018, 2019]*
a) Bellman-Ford Algorithm for single source shortest path
b) Floyd Warshall Algorithm for all pairs shortest paths
c) 0-1 Knapsack problem
d) Prim's Minimum Spanning Tree
**Answer: (d)**

**36.** Time complexity of Quick sort in worst case is — *[WBUT 2018]*
a) $O(n)$   b) $O(\log n)$   c) $O(n^2)$   d) $O(n\log n)$
**Answer: (c)**

**37.** A machine needs a minimum of 100 ms to sort 1000 names by quick sort. The minimum time needed to sort 100 names will be approximately — *[WBUT 2018, 2019]*
a) 50.2 ms   b) 6.7 ms   c) 72.7 ms   d) 11.2 ms
**Answer: (d)**

**38.** What is the time complexity to insert an element into a heap? — *[WBUT 2018, 2019]*
a) $O(n\log n)$   b) $O(\log n)$   c) $O(n)$   d) None of these
**Answer: (b)**

**39.** Best case time complexity for Binary search in unsuccessful case is — *[WBUT 2019]*
a) $O(n)$   b) $O(\log n)$   c) $O(1)$   d) $O(n\log n)$
**Answer: (b)** `[as printed]`

**40.** Which of the following approaches is Divide & Conquer strategy? — *[WBUT 2019]*
a) Top-down   b) Bottom-up   c) Both (a) & (b)   d) None of these
**Answer: (a)**

**41.** A machine needs 200 ms to sort 200 names, using bubble sort. In 800 ms, it can approximately sort — *[WBUT 2019]*
a) 400 names   b) 800 names   c) 750 names   d) 1800 names
**Answer: (a)**

**42.** Which of the following is not a backtracking algorithm? — *[WBUT 2019]*
a) N queen problem   b) Tower of Hanoi   c) M coloring problem   d) None of these
**Answer: (d)**

---

## Short Answer Type Questions

**1. What is union-find algorithm?** *[WBUT 2004, 2005, 2007, 2011, 2012]*
**OR, What is union-find algorithm? Explain with an example.** *[WBUT 2015]*
**OR, Write short note on Union Find Algorithm.** *[WBUT 2018, 2019]*

**Union-Find Algorithm of disjoint sets**

A disjoint-set structure maintains a partition of a set $A = \{A_1, A_2, \ldots, A_n\}$ such that no element belongs to more than one set simultaneously. For each set $A_i$ in the partition, a representative, which is some member in the set, is kept track of. The initial partition has each element in a set by itself. Suppose $A_i$ and $A_j$ are two different sets where $i \ne j$. If they are disjoint sets, then there is no element that is both in $A_i$ and $A_j$.

**Union of disjoint set**

$\text{Union}(A_i, A_j)$, where $i \ne j$, replaces $A_i$ and $A_j$, and specifies a representative for it — i.e. the union of two disjoint sets $A_i$ and $A_j$ creates a new set in which all the elements of $A_i$ and $A_j$ are kept and whose representative is $x$, where $x \in A_i$ or $x \in A_j$ is the representative of either $A_i$ or $A_j$.

*Algorithm:*
```
Union(x, y)
{
   parent[x] = y;
}
```

**Find operation**

$\text{Find}(x)$ is used to find out the set to which the element $x$ belongs.
```
Find(x)
{
   if (x != parent[x]) then
   {
      parent[x] = Find(parent[x]);
      return parent[x];
   }
   else
      return "not found";
}
```
The structure supports two key optimizations: **weight (size) balancing** on `UNION(a, b)` — the smaller tree is attached under the root of the larger (if $\text{size}(a) < \text{size}(b)$ the root becomes $b$, and if $\text{size}(a) > \text{size}(b)$ the root becomes $a$) — and **path compression** on `FIND(x)`, where every node on the search path is reattached directly to the root. [diagram: two trees rooted at $a$ and $b$ being merged by `UNION` with weight balancing, and a `FIND(x)` path being flattened by path compression]

**2. What is the basic characteristic of a Greedy algorithm?** *[WBUT 2004, 2006, 2008, 2012, 2015]*
**OR, What do you mean by greedy method?** *[WBUT 2014]*

The characteristic of the greedy method is basically the same as that of solving a typical optimization problem, preferably of time-infeasible nature. The components of a typical greedy method are:
1. A set of elements like nodes, edges in a graph.
2. A set of elements which have already been used.
3. To test whether a given set of elements provides a solution or not. However, the solutions may not be optimal.
4. A selection function that picks up some elements which have not yet been used.
5. An objective function which associates a value to a solution.

**3. State the 0/1 Knapsack problem.** *[WBUT 2004, 2007, 2012, 2013]*
**OR, What is 0/1 knapsack problem? Explain it with an example.** *[WBUT 2010]*
**OR, Critically comment on "Greedy strategy does not work for the 0/1 Knapsack problem for all time".** *[WBUT 2012]*

A thief robbing a store finds $n$ items. The $i$-th item is worth $v_i$ rupees and weighs $w_i$ kgs, where $v_i$ and $w_i$ are integers. He wants to take as valuable a load as possible, but he can carry at most $W$ kgs in his knapsack for some integer $W$. Greedy strategy does not work for the 0-1 knapsack problem.

In the 0-1 problem, when we consider an item for inclusion in the knapsack, we must compare the solution to the sub-problem in which the item is included with the solution to the sub-problem in which the item is excluded before we can make the choice. The problem formulated in this way gives rise to many overlapping sub-problems — dynamic programming can be used to solve the 0-1 problem.

Let $i$ be the highest-numbered item in an optimal solution $S$ for $W$ kgs and items $1, \ldots, n$. Then $S' = S - \{i\}$ must be an optimal solution for $W - w_i$ rupees and items $1, \ldots, i-1$, and the value of the solution $S$ is $v_i$ plus the value of the sub-problem solution $S'$.

Define $c[i, w]$ to be the value of the solution for items $1, \ldots, i$ and maximum weight $w$. Then
$$c[i, w] = \begin{cases} 0 & \text{if } i = 0 \text{ or } w = 0 \\ c[i-1, w] & \text{if } w_i > w \\ \max\!\left(v_i + c[i-1, w - w_i],\; c[i-1, w]\right) & \text{if } i > 0 \text{ and } w \ge w_i \end{cases}$$

The last case says that the value of a solution for $i$ items either includes item $i$ — in which case it is $v_i$ plus a sub-problem solution for $i-1$ items and the weight excluding $w_i$ — or doesn't include item $i$, in which case it is a sub-problem solution for $i-1$ items and the same weight. The better of these two choices should be made.

The algorithm takes as inputs the maximum weight $W$, the number of items $n$, and the two sequences $v = (v_1, v_2, \ldots, v_n)$ and $w = (w_1, w_2, \ldots, w_n)$. It stores the $c[i, j]$ values in a table $c[0..n, 0..W]$ whose entries are computed in row-major order. At the end of the computation, $c[n, W]$ contains the maximum value the thief can take.

**4. Find out the best and worst case time complexity of merge sort.** *[WBUT 2007, 2011, 2013]*
**OR, Derive the complexity of merge sort.** *[WBUT 2009, 2013]*
**OR, Analyze the time complexity of Merge Sort algorithm.** *[WBUT 2018, 2019]*

**Best case:** In each iteration we split the array into two sub-lists and recursively invoke the algorithm. At best case we split it exactly into half, and thus reduce the problem (of each recursive call) to half of the original. We need $\log_2(n)$ iterations, and each iteration takes exactly $O(n)$ (each iteration is on all sub-lists, total size is still $n$), so the total time complexity is $O(n\log_2 n)$.

**Worst case:** In merge sort all the comparisons are made in the procedure Merge, which merges two sorted sub-arrays. If the size of one sub-array is $s$ and that of the other is $t$, then merging these lists requires at most $s + t - 1$ comparisons in the worst case. So
$$W(n) = W(s) + W(t) + s + t - 1.$$
If $s = \lfloor n/2 \rfloor$ and $t = \lceil n/2 \rceil$, then $s + t = n$ and
$$W(n) = W(n/2) + W(n/2) + \Theta(n), \quad \text{where } \Theta(n) = n - 1.$$
$$\begin{aligned}
W(n) &= W(n/2) + W(n/2) + \Theta(n) \\
     &= 2W(n/2) + \Theta(n) \\
     &= 2^1 W(n/2) + \Theta(n) \\
     &= W(n/4) + W(n/4) + W(n/4) + W(n/4) + \Theta(n) \\
     &= 4W(n/4) + \Theta(n) \\
     &= 2^2 W(n/4) + \Theta(n) \\
     &\;\;\vdots \\
     &= 2^k W(1) + \Theta(n), \quad \text{where } n > 1 \text{ and } n = 2^k.
\end{aligned}$$
Also, $W(1) = 1$ for $n = 1$. So we can represent $k = \log_2 n$. Thus the total running time of the merge sort algorithm in the worst case is $O(n\log_2 n)$.

**5. Find the best and worst case time complexity of quick sort.** *[WBUT 2008, 2012, 2015, 2016, 2019]*

**Best case:**
- In the best case, the pivot is in the middle position of the array.
- To simplify the equations, we assume that the two sub-arrays are each exactly half the length of the original one. So we get $T(n) = 2T(n/2) + cn$, with $c > 0$ constant (independent of $n$) and $n \ge 2$ with $T(1) = 1$.
- This is very similar to the formula for merge sort, and a similar analysis leads to $T(n) = cn\log_2 n + n$, which is $O(n\log_2 n)$.

**Worst case:**
- If the pivot is always the smallest element, then $i = 0$ always. We ignore the term $T(0) = 1$, so the recurrence relation is $T(n) = T(n-1) + cn$.
- So $T(n-1) = T(n-2) + c(n-1)$, and so on.
- Substituting backwards, we get $T(n) = T(n-1) + cn = O(n^2)$.
- It may be noted that this case happens if we always take the pivot to be the first element in the array and the array is already sorted.

> *(The worst-case derivation on DAA-34 is partly obscured by the watermark; the recurrence $T(n) = T(n-1) + cn$ and the $O(n^2)$ result are the legible, verified outcome.)*

**6. What are the basic characteristics of dynamic programming?** *[WBUT 2009]*
**OR, What do you mean by dynamic programming?** *[WBUT 2014]*

Dynamic programming is a method for efficiently solving a broad range of search and optimization problems which exhibit the characteristics of **overlapping sub-problems** and **optimal substructure**. Optimal substructure means that optimal solutions of sub-problems can be used to find the optimal solutions of the overall problem.

Greedy method is an algorithm that always takes the best immediate, or local, solution while finding an answer. Greedy algorithms find the overall, or globally, optimal solution for some optimization problems, but may find less-than-optimal solutions for some instances of other problems.

**7. Write an algorithm of matrix chain multiplication.** *[WBUT 2010, 2013, 2018, 2019]*
**OR, Write the algorithm of chain matrix multiplication.** *[WBUT 2014]*

This is the matrix chain multiplication algorithm which can generate the actual position of the parenthesis within the matrix chain $(A_1 A_2 \ldots A_n)$.
```
Matrix-Chain-Order(p)
{
   n <- length[p] - 1
   for i <- 1 to n do
      m[i, i] <- 0
   for l <- 2 to n do
   {
      for i <- 1 to n - l + 1 do
      {
         j <- i + l - 1;
         m[i, j] <- infinity;
         for k <- i to j - 1 do
         {
            q <- m[i, k] + m[k+1, j] + p_(i-1) * p_k * p_j;
            if q < m[i, j] then
            {
               m[i, j] = q;
               s[i, j] = k;
            }
         }
      }
   }
   return m and s;
}
```
**Optimal parenthesis position of the product of matrix chain $(A_1 A_2 \ldots A_n)$:** The algorithm below reports the optimal positions of the parentheses in the matrix chain, shown with the help of table $s$.
```
Optimal_parenthesis(s, i, j)
{
   if (i = j) then
      print "A"
   else
      print "("
      Optimal_parenthesis(s, i, s[i, j])
      Optimal_parenthesis(s, s[i, j] + 1, j)
      print ")"
}
```
Here $l$ is the length of the chain. In step 1 we first measure $n$, which equals the length of the chain minus one. In step 2.1 we make all $m[i, i] = 0$ for $i = 1, 2, \ldots, n$. In step 3, for all values of $l$ from 2 to $n$, we first evaluate $m[i, i+1]$ where $1 \le i < n$; next we compute $m[i, i+2]$, and so on.

In step 3.1.3.1 we compute the value of $q$ according to
$$m[i, j] = m[i, k] + m[k+1, j] + p_{i-1} p_k p_j, \quad \text{where } i \le k < j.$$
Through steps 3.1.3.2 to 3.1.3.2.2 we evaluate the minimum value of $q$ according to
$$m[i, j] = \begin{cases} 0 & \text{if } i = j \\ \displaystyle\min_{i \le k < j}\left\{ m[i, k] + m[k+1, j] + p_{i-1} p_k p_j \right\} & \text{if } i < j \end{cases}$$
and put this value into the array $m$ (the $m$ table), storing the position of the parenthesis in table $s$.

**Time complexity of Matrix-Chain-Order:** One simple solution is called memorization: each time we compute the minimum cost needed to multiply out a specific subsequence, we save it; if asked to compute it again, we simply report the saved answer rather than recompute it. Since there are about $n^2/2$ different subsequences, where $n$ is the number of matrices, the space required is reasonable. This simple trick brings the runtime down from $O(2^n)$ to $O(n^3)$, which is efficient enough for real applications. However, this is done at the cost of additional memory resource.

**8. Write an algorithm of eight queens problem and find the time complexity of the algorithm. Explain the algorithm using an example.** *[WBUT 2010, 2014]*
**OR, Solve 8 Queen problem using Backtracking approach.** *[WBUT 2018, 2019]*

*Algorithm:* Refer to Question No. 3(i) of Long Answer Type Questions.

**Example:** Here we take an example of the 4-queen problem. In figure 1 there are some nodes denoted by the label 'B', meaning backtracking — i.e. the path from root to that leaf node cannot reach the goal state (it cannot generate a solution vector of appropriate positions of each queen), so we have to backtrack from that node itself. For those $x_i$ values two queens are in attacking position and then we use backtracking. For each path of the tree from root to a node marked B, we represent the position of the queen in the chessboard. 'R' represents the result or solution space of the 4-queens problem — i.e. through that path from root to leaf we can reach a solution where each queen is not in a mutually attacking position. [diagram: Fig. 1 — solution (state-space) tree for the 4-queens problem, with leaves marked 'B' for backtracking points and 'R' for valid solutions]

**9. a) Find the optimal parenthesization of a matrix-chain product whose sequence of dimensions is $\langle 5, 10, 3, 12, 5, 50, 6 \rangle$.**
**b) Give an algorithm for the above procedure.**
**c) Analyze its complexity.** *[WBUT 2013, 2014]*

**a)** We can represent $A_1, A_2, A_3, A_4, A_5, A_6$ in such a way that
$$A_1 \to p_0 \times p_1,\quad A_2 \to p_1 \times p_2,\quad A_3 \to p_2 \times p_3,$$
$$A_4 \to p_3 \times p_4,\quad A_5 \to p_4 \times p_5,\quad A_6 \to p_5 \times p_6,$$
where $p_0 = 5,\ p_1 = 10,\ p_2 = 3,\ p_3 = 12,\ p_4 = 5,\ p_5 = 50,\ p_6 = 6$.

The diagonal entries are $m[1,1] = m[2,2] = m[3,3] = m[4,4] = m[5,5] = m[6,6] = 0$. Computing the cost table $m[i, j]$ (minimum number of scalar multiplications) gives:

| $j \backslash i$ | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| **6** | 2010 | 1950 | 1770 | 1860 | 1500 | 0 |
| **5** | 1655 | 2430 | 930 | 3000 | 0 | |
| **4** | 405 | 330 | 180 | 0 | | |
| **3** | 330 | 360 | 0 | | | |
| **2** | 150 | 0 | | | | |
| **1** | 0 | | | | | |

*Table m.* (Selected verified entries: $m[4,5] = 3000$, $m[1,3] = 330$, $m[3,5] = 930$, $m[1,4] = 405$, $m[2,5] = 2430$, $m[3,6] = 1770$, $m[1,5] = 1655$, $m[2,6] = 1950$, $m[1,6] = 2010$.)

The split-point table $s[i, j]$ is:

| $j \backslash i$ | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| **6** | 2 | 2 | 4 | 4 | 5 |
| **5** | 1 | 2 | 4 | 4 | |
| **4** | 1 | 2 | 2 | 3 | |
| **3** | 1 | 2 | 2 | | |
| **2** | 1 | 1 | | | |

*Table s.*

> *(The OCR of these tables on DAA-37/DAA-38 is heavily garbled by the watermark; the entries above are transcribed from the legible table images on DAA-38. A few obscured cells in the lower rows of table s are marked as printed where readable; cells left blank are above the diagonal and not defined.)*

**b) & c)** Refer to Question No. 7 of Short Answer Type Questions.

**10. Differentiate between divide-and-conquer and dynamic programming.** *[WBUT 2011, 2013, 2015]*

| Divide-and-conquer | Dynamic programming |
|---|---|
| 1. Solves the problem by dividing it into sub-problems. | 1. Solves the problem by dividing it into sub-problems. |
| 2. The sub-problems are independent of each other. | 2. The sub-problems are not independent. |
| 3. Does more work on the sub-problems and hence has more time consumption. | 3. Solves each sub-problem only once and then stores it in a table. |
| **Examples:** Merge sort, Quick sort and Binary search. | **Examples:** Matrix-chain-multiplication; All-pair shortest path problem. |

**11. a) Discuss the Bellman-Ford's algorithm for single-source shortest path problem.**
**b) Prove that the time-complexity of the algorithm is $O(VE)$.** *[WBUT 2012, 2017]*

**a)** The Bellman-Ford algorithm solves the single-source shortest-paths problem in the general case in which edge weights may be negative. Given a weighted, directed graph $G = (V, E)$ with source $s$ and weight function $w : E \to \mathbb{R}$:
```
BELLMAN-FORD(G, w, s)
{
   INITIALIZE-SINGLE-SOURCE(G, s)
   for i <- 1 to |V[G]| - 1 do
   {
      for each edge (u, v) in E[G] do
         RELAX(u, v, w)
   }
   for each edge (u, v) in E[G] do
   {
      if d[v] > d[u] + w(u, v) then
         return FALSE
   }
   return TRUE
}

RELAX(u, v, w)
{
   if d[v] > d[u] + w(u, v) then
   {
      d[v] <- d[u] + w(u, v)
      pi[v] <- u
   }
}

INITIALIZE-SINGLE-SOURCE(G, s)
{
   for each vertex v in V[G] do
   {
      d[v] <- infinity
      pi[v] <- NIL
   }
   d[s] <- 0
}
```

**b)** The initialization in `INITIALIZE-SINGLE-SOURCE(G, s)` takes $O(V)$ time; each of the $|V| - 1$ passes over the edges in lines 2–4 of `BELLMAN-FORD(G, w, s)` takes $O(E)$ time; and the `for` loop of lines 5–7 takes $O(E)$ time. So the Bellman-Ford algorithm runs in time $O(VE)$.

**12. What is meant by union by rank? Explain with an example.** *[WBUT 2013]*

We know that in $\text{Union}(x, y)$ one can either create a pointer from $x$ to $y$ or a pointer from $y$ to $x$. The **Union by Rank** rule specifies a way of making the choice by which we tend to keep the tree shallow. Associate with each node $x$ a rank $\text{rank}(x)$ which is initially 0. When a Union requires choosing either a pointer from $x$ to $y$ or $y$ to $x$, the pointer should run from the node of lower rank to the one of higher rank. If the ranks are equal, the choice is arbitrary; however, the node to which the new pointer is directed gets its rank incremented by 1. The basic properties used to assign rank to a node are:

1. A node of rank $k$ has at least one child of each rank $< k$.
2. The rank of any node is less than the rank of its parent.

[diagram: Figs. 1–4 — two sets $S_1$ and $S_2$ with ranks labelled beside each node, their union creating a new set $X$ (Fig. 2), and a second example where sets $A$ and $B$ of different ranks are merged so the higher-rank root becomes the representative of $A \cup B$ (Figs. 3–4)]

**13. Which type of knapsack problem cannot be solved using the greedy method? Explain your answer.** *[WBUT 2013]*

Greedy is an algorithmic paradigm that builds up a solution piece by piece, always choosing the next piece that offers the most obvious and immediate benefit. Greedy algorithms are used for optimization problems. An optimization problem can be solved using Greedy if it has the property: at every step, we can make a choice that looks best at the moment, and we get the optimal solution of the complete problem. If a Greedy algorithm can solve a problem, it generally becomes the best method to solve that problem, as greedy algorithms are in general more efficient than other techniques like Dynamic Programming. But greedy algorithms cannot always be applied. For example, the **Fractional Knapsack** problem can be solved using Greedy, but the **0-1 Knapsack** problem cannot be solved using Greedy.

**14. Find the recurrence relation of binary search and derive the time complexity of binary search.** *[WBUT 2014]*
**OR, Find the best and worst case time complexity of binary search.** *[WBUT 2017]*

There is a recursive procedure here:
```
int search(vector v, int from, int to, int val)
{
   if (from > to) return -1;        // val not found
   int mid = (from + to) / 2;
   if (v[mid] == val)
      return mid;
   else if (val > v[mid])
      return search(v, mid+1, to, val);
   else
      return search(v, from, mid-1, val);
}
```
Let's analyze the run time. It takes $O(1)$ time to do the comparisons, then it cuts the search range in half:
$$T(N) = T(N/2) + 1.$$
Repeat the recurrence:
$$\begin{aligned}
T(N) &= T(N/4) + 2 \\
     &= T(N/8) + 3 \\
     &\;\;\vdots \\
     &= T(N/2^k) + k.
\end{aligned}$$
Round up $N$ to the nearest power of 2: $N \le 2^m$, so
$$T(N) \le T(2^m / 2^k) + k.$$
Let $k = m$:
$$T(N) \le T(2^m / 2^m) + m = T(1) + m = 1 + m = O(m).$$
If $N = 2^m$, then $m = \log N$. So $T(N) = O(\log N)$.

**15. Write an algorithm for n-queen's problem. Find its time complexity.** *[MODEL QUESTION]*

**Algorithm for n-queens problem:**
```
Nqueen(k, n)
{
   Step 1     for i <- 1 to n do
   {
   Step 1.1      if Place(k, i) then
                 {
   Step 1.1.1       x[k] <- i
   Step 1.2          if k = n then
   Step 1.2.1            write(x[1 : n]);
   Step 1.3          else
   Step 1.3.1            Nqueen(k+1, n)
                 }
   }
}
```
The algorithm `Place()` is used to place a queen in the $k$-th row and $i$-th column:
```
Place(k, i)
{
   Step 1     for j <- 1 to k-1 do
   {
   Step 1.1      if ((x[j] == i) or (|x[j] - i| == |j - k|)) then
   Step 1.1.1       return false;
   }
   Step 2     return true;
}
```
In `Place(k, i)` we find the proper position of each queen; $k$ and $i$ denote the position of a queen at the $k$-th row and $i$-th column. In Step 1.1 the "if" condition has two parts:
1. `if (x[j] == i)` means the two queens are in the same column.
2. `if (|x[j] - i| == |j - k|)` means the absolute values of $(x[j] - i)$ and $(j - k)$ are the same — this corresponds to the placement of two queens on the same diagonal.

If either condition is satisfied, then we cannot place the $k$-th queen at row $k$, column $i$. From Step 1.2, if there is no other queen left, print the array $x[1:n]$ to show the position of each queen; otherwise call the recursive function $\text{Nqueen}(k+1, n)$ in Step 1.3.1 for the next queen $k+1$.

The efficiency of the backtracking algorithms depends very much on four factors: (1) the time to generate the next $x_k$, (2) the number of $x_k$ satisfying the explicit constraints, (3) the time for the bounding functions $B_k$, and (4) the number of $x_k$ satisfying the $B_k$. However, by allowing only placements of queens on distinct rows and columns, the time required is $O(n!)$.

**16. Which one is better and why?** *[WBUT 2017]*
**i) Max-Min calculation using divide & conquer approach.**
**ii) Max-Min calculation using normal approach.**

Let us consider the Max-Min problem, which can be solved by both the straightforward and the divide-and-conquer technique. The problem is to find the maximum and minimum items in a set of $n$ elements. In analyzing the time complexity we concentrate on the number of element comparisons; when the elements in $a[1:n]$ are polynomials, vectors, very large numbers, or strings of characters, the cost of an element comparison is much higher than the cost of the other operations, so the time is determined mainly by the total cost of the element comparisons.

**Normal (straightforward) approach:**
```
Algorithm StraightMaxMin(a, n, max, min)
// Set max to the maximum and min to the minimum of a[1:n].
{
   max := min := a[1];
   for i := 2 to n do
   {
      if (a[i] > max) then max := a[i];
      if (a[i] < min) then min := a[i];
   }
}
```
`StraightMaxMin()` requires $2(n-1)$ element comparisons in the best, average and worst cases. An immediate improvement is possible by realizing that the comparison $a[i] < \min$ is necessary only when $a[i] > \max$ is false. The best case occurs when the elements are in increasing order — the number of element comparisons is $(n-1)$. The worst case occurs when the elements are in decreasing order — the number of element comparisons is $2(n-1)$. The average number of element comparisons is less than $2(n-1)$.

**Divide-and-conquer approach:**
```
Algorithm MaxMin(i, j, max, min)
// a[1:n] is a global array. Parameters i and j are integers,
// 1 <= i <= j <= n. The effect is to set max and min to the
// largest and smallest values in a[i:j], respectively.
{
   if (i = j) then max := min := a[i];            // Small(P)
   else if (i = j-1) then                          // Another case of Small(P)
   {
      if (a[i] < a[j]) then
      {
         max := a[j]; min := a[i];
      }
      else
      {
         max := a[i]; min := a[j];
      }
   }
   else
   {
      // If P is not small, divide P into subproblems.
      // Find where to split the set.
      mid := floor((i + j) / 2);
      // Solve the subproblems.
      MaxMin(i, mid, max, min);
      MaxMin(mid+1, j, max1, min1);
      // Combine the solutions.
      if (max < max1) then max := max1;
      if (min > min1) then min := min1;
   }
}
```
`MaxMin()` is a recursive algorithm that finds the maximum and minimum of the set $\{a(i), a(i+1), \ldots, a(j)\}$. The cases of set size one ($i = j$) and two ($i = j-1$) are handled separately. For sets of more than two elements, the midpoint is determined, the two maxima and minima of these sub-problems are generated, then the two maxima are compared and the two minima are compared to achieve the solution for the entire set.

If $T(n)$ represents the time required to execute Algorithm `MaxMin()`, then
$$T(n) = \begin{cases} T(\lfloor n/2 \rfloor) + T(\lceil n/2 \rceil) + 2, & n > 2 \\ 1, & n = 2 \\ 0, & n = 1 \end{cases}$$
When $n$ is a power of two, $n = 2^k$ for some positive integer $k$, then
$$\begin{aligned}
T(n) &= 2T(n/2) + 2 \\
     &= 2\!\left(2T(n/4) + 2\right) + 2 \\
     &= 4T(n/4) + 4 + 2 \\
     &\;\;\vdots \\
     &= 2^{k-1} T(2) + \sum_{1 \le i \le k-1} 2^i \\
     &= 2^{k-1} + 2^k - 2 = \tfrac{3n}{2} - 2.
\end{aligned}$$
Note that $\left(\tfrac{3n}{2} - 2\right)$ is the best, average and worst case number of comparisons when $n$ is a power of 2. Since this is fewer than the $2(n-1)$ comparisons of the straightforward method, the divide-and-conquer Max-Min is better.

> *(The recurrence base cases and the closed-form $\tfrac{3n}{2} - 2$ on DAA-46 are partly obscured by the watermark; the verified base case is $T(2) = 1$, $T(1) = 0$, and the legible result is $\tfrac{3n}{2} - 2$.)*

**17. Derive the worst case time complexity of quick sort.** *[WBUT 2018]*

Refer to Question No. 5 of Short Answer Type Questions.

**18. Write an algorithm to insert an element into a heap. What is the complexity of the algorithm? Justify.** *[WBUT 2018]*

Refer to Question No. 12 of Long Answer Type Questions.

**19. Write an algorithm for Graph Coloring Problem. What is the time complexity of the algorithm?** *[WBUT 2018]*

**1st Part:** Refer to Question No. 3(ii) of Long Answer Type Questions.

**2nd Part:** $O(V^2 + E)$ in the worst case. The algorithm doesn't always use the minimum number of colors; the number of colors used sometimes depends on the order in which vertices are processed.

**20. Explain: Brute Force search.** *[MODEL QUESTION]*

Brute Force Algorithms refers to a programming style that does not include any shortcuts to improve performance, but instead relies on sheer computing power to try all possibilities until the solution to a problem is found. A classic example is the traveling salesman problem (TSP).

---

*End of Chapter 2, Part 1 (Chapter at a Glance + Multiple Choice + Short Answer). The Long Answer Type Questions (from DAA-47) are continued in a separate file.*


## Long Answer Type Questions

**1. a) Explain the basic concept of a divide-and-conquer algorithm.** *[WBUT 2004, 2007]*
**OR, What do you mean by Divide and Conquer Strategy?** *[WBUT 2018, 2019]*

Divide and conquer (D&C) is an important algorithm design paradigm based on multi-branched recursion. A divide and conquer algorithm works by recursively breaking down a problem into two or more sub-problems of the same type, until these become simple enough to be solved directly. The solutions to the sub-problems are then combined to give a solution to the original problem.

In the divide-and-conquer technique, the set of numbers are stored in an array. The numbers may or may not be arranged in sorted order. To make these numbers in sorted order, we first split the array into two parts. In merge sort and binary search the divided arrays are equal, but in quick sort it may or may not be equal. Then we further split the arrays into another two parts each. In this way, we split the initial array into small parts until all the elements of that small array are sorted (in sorting technique) or until we get the particular element in that small array (in searching technique). In sorting technique, we further merge the small array and get the initial array with sorted elements.

*Example:* Merge sort Algorithm.

**1. b) Prove that the average case time-complexity of quick sort is $O(n \log n)$. You should state clearly the reasons behind the design of the recurrence relation you use for establishing this complexity.** *[WBUT 2004, 2007]*

We assume that each of the sizes of the left partitions are equally likely, and hence each has probability $1/n$.

With this assumption, the average value of $T(i)$, and hence also of $T(n-i-1)$, is
$$\frac{T(0) + T(1) + \cdots + T(n-1)}{n}.$$
Naturally, our recurrence relation becomes
$$T(n) = \frac{2\big(T(0) + T(1) + \cdots + T(n-1)\big)}{n} + cn.$$
Multiplying both sides by $n$ we find
$$nT(n) = 2\big(T(0) + T(1) + \cdots + T(n-1)\big) + cn^2.$$
Substitution of $n$ by $n-1$ gives
$$(n-1)T(n-1) = 2\big(T(0) + T(1) + \cdots + T(n-2)\big) + c(n-1)^2.$$
Subtracting the last equation from the previous one, we get
$$nT(n) - (n-1)T(n-1) = 2T(n-1) + 2cn - c.$$
Rearranging and ignoring constant $c$, we arrive at
$$nT(n) = (n+1)T(n-1) + 2cn.$$
Division throughout by $n(n+1)$ gives
$$\frac{T(n)}{n+1} = \frac{T(n-1)}{n} + \frac{2c}{n+1}.$$
Hence
$$\frac{T(n-1)}{n} = \frac{T(n-2)}{n-1} + \frac{2c}{n},$$
$$\vdots$$
$$\text{Similarly } \frac{T(2)}{3} = \frac{T(1)}{2} + \frac{2c}{3}.$$
Thus
$$\frac{T(n)}{n+1} = \frac{T(1)}{2} + 2c\left(\frac{1}{3} + \frac{1}{4} + \cdots + \frac{1}{n+1}\right).$$
The sum in brackets is about $\log_e(n+1) + \gamma - 3/2$, where $\gamma$ is Euler's constant, which is approximately $0.577$.

So, $T(n)/(n+1) = O(\log_2 n)$ and thus $T(n) = O(n \log_2 n)$.

**2. a) What is dynamic programming?** *[WBUT 2004, 2005, 2007, 2010]*

Dynamic programming is a method for reducing the runtime of algorithms exhibiting the properties of overlapping sub-problems and optimal substructure. Dynamic Programming is an approach developed to solve sequential, or multi-stage, decision problems; hence, the name "dynamic" programming. But, as we shall see, this approach is equally applicable for decision problems where sequential property is induced solely for computational convenience.

Dynamic programming is both a mathematical optimization method and a computer programming method. In both contexts it refers to simplifying a complicated problem by breaking it down into simpler sub-problems in a recursive manner.

Algorithms which can be solved by Dynamic programming are:
- Matrix-chain multiplication,
- All pair shortest paths,
- Single source shortest path,
- Travelling Salesman problem.

**2. b) Consider the evaluation of the product of $n$ matrices: $M = M_1 \ast M_2 \ast \cdots \ast M_n$. Assuming that the multiplication of a $p \times q$ matrix by a $q \times r$ matrix requires $pqr$ scalar multiplication, write a dynamic programming algorithm for ordering this multiplication with minimum cost. Explain the algorithm in brief.** *[WBUT 2004, 2013, 2016]*

Refer to Question No. 7 of Short Answer Type Questions.

**3. Write an algorithm for any one of the following problems:**
**i) Eight queens problem.** *[WBUT 2004, 2009, 2013]*
**ii) Graph coloring problem.** *[WBUT 2004, 2008, 2013, 2014, 2016]*

**i) Eight queens problem:**

Now, we discuss the general algorithm for 8-queens problem.

```
Eightqueen(k, 8)
{
   Step 1       for i <- 1 to 8 do
   {
   Step 1.1        if Place(k, i) then
   {
   Step 1.1.1         x[k] <- i;
   }
   Step 1.2        if k = 8 then
   Step 1.2.1         write(x[1: 8]);
   Step 1.3        else
   Step 1.3.1         Eightqueen(k+1, 8);
   }
}
```

The algorithm `Place()` is used to place a queen in k-th row and i-th column.

```
Place(k, i)
{
   Step 1     for j <- 1 to k-1 do
   {
   Step 1.1      if ((x[j] == i) or (|(x[j]-i)| == |j-k|)) then
   {
   Step 1.1.1       return false;
   }
   }
   Step 2     return true;
}
```

In the above algorithm we can find the appropriate positions of each queen in an $8 \times 8$ chessboard using backtracking. In `Place(k, i)`, we find the proper position of each queen. The variable $k$ and $i$ denote the position of a queen at k-th row and i-th column. In Step 1.1, the "if" condition has two parts:

1. `if (x[j] == i)` then this means that the two queens are in same column.
2. `if (|(x[j]-i)| == |j-k|)` means the absolute values of $(x[j]-i)$ and $(j-k)$ are same. This corresponds to the placement of two queens on the same diagonal. If one of the above two conditions is satisfied, then we cannot place k-th queen at row $k$ of column $i$.

This function is used in `Eightqueens(k, 8)` algorithm. Here, the value of 8 denotes the index of the queen. From this algorithm, in Step 1.1, if the return value of `Place(k, i)` is true then we can place a queen at i-th column. From Step 1.2, it is evident that if there is no other queen left, then print the array $x[1:8]$ to show the position of each queen finally. Otherwise we call the recursive function `Eightqueens(k+1, 8)`, in Step 1.3.1 for next queen $k+1$.

**ii) Graph coloring problem:**

Applying backtracking method we are trying to color all the nodes of a graph in such a way that two adjacent nodes do not have same color.

Suppose, an undirected graph $G = (V, E)$ is having $n$ number of nodes. Now, we can represent an adjacency matrix $C[n:n]$ such that,
$$C[i, j] = \begin{cases} 1, & \text{if there is an edge in between node } i \text{ and node } j \\ 0, & \text{otherwise} \end{cases}$$

If at most $k$ colors are required to color all the vertices and they are labeled as $c_1, c_2, c_3 \ldots c_k$. So, a solution of graph coloring problem can be typically represented by n-tuples $(x_1, x_2, x_3, \ldots, x_n)$, where $x_i$ is the color of node $i$ and $1 \le x_i \le k$ for all $i$, $1 \le i \le n$.

The graph $G = (V, E)$ has $n$ number of vertices, i.e. $|V| = n$ and there are $k$ number of colors in an array $A[1:k]$.

```
Graph_coloring(c)
{
   for i <- 1 to n do
   {
      Nextcolor(c);              // insert a new color
      if (c > k) then            // there are no new color
      {
         print(no color left);
         return false;
      }
      else if (c == n) then      // all colors are used
         print(A[1, n]);         // print the color with respective vertex
      else
         Graph_coloring(c+1);    // otherwise search next color
   }
   return c;
}

Nextcolor(c)
{
   while (!False)
   {
      A[c] <- (A[c]+1) mod (k+1);   // find next Color
      if A[c] < 0 then              // all colors are used.
         return 0;
      for i <- 1 to n do            // check for all vertices
      {
         if (G[c, i] != 0) and (A[c] = A[i]) then
            // if there is an edge between c and i but they are
            // of same color.
            break;
         else
            return c;
      }
      if (i = n+1) then             // there is no new color
         return 0;
   }
}
```

The least number of color needed to color a graph is called its chromatic number. The chromatic number, say $X$ of a complete graph $G$ is $X(G) = d+1$, where $d$ is the degree of the vertex. So if we consider a graph $G$ is a complete graph, i.e., each node is connected to all other nodes of the graph then total number of colors required to color all the nodes of the graph is $d+1$.

*Figure 1:* Four example graphs G1 (single node), G2 (two connected nodes), G3 (a triangle of three nodes), and G4 (a complete graph on four nodes); each graph requires $(d+1)$ colors to color all the nodes, where $d$ is the degree of each node. *[diagram]*

**4. Discuss activity selection problem for job sequencing.** *[WBUT 2004, 2006, 2008]*
**OR, Discuss the activity selection problem for job sequencing with an example. Prove that the time complexity of the algorithm is $O(n \log n)$.** *[WBUT 2012]*
**OR, Discuss Job Sequencing with Deadlines with an example.** *[WBUT 2016, 2018]*

**1st part:**

Suppose we have a set $S = \{a_1, a_2, \ldots, a_n\}$ of $n$ proposed activities that wish to use a resource, which can be used by only one activity at a time. Each activity $a_i$ has a start time $s_i$ and a finish time $f_i$, where $0 \le s_i < f_i < \infty$. If selected, activity $a_i$ takes place during the half-open time interval $[s_i, f_i)$. Activities $a_i$ and $a_j$ are compatible if the intervals $[s_i, f_i)$ and $[s_j, f_j)$ do not overlap (i.e., $a_i$ and $a_j$ are compatible if $s_i \ge f_j$ or $s_j \ge f_i$). The activity-selection problem is to select a maximum-size subset of mutually compatible activities. For example, consider the following set $S$ of activities, which we have sorted in monotonically increasing order of finish time.

| $i$   | 1 | 2 | 3 | 4 | 5 | 6 | 7  | 8  | 9  | 10 | 11 |
|-------|---|---|---|---|---|---|----|----|----|----|----|
| $s_i$ | 1 | 3 | 0 | 5 | 3 | 5 | 6  | 8  | 8  | 2  | 12 |
| $f_i$ | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 |

For this example, the subset $\{a_3, a_9, a_{11}\}$ consists of mutually compatible activities. It is not a maximal subset, however, since the subset $\{a_1, a_4, a_8, a_{11}\}$ is larger. In fact, $\{a_1, a_4, a_8, a_{11}\}$ is a largest subset of mutually compatible activities; another largest subset is $\{a_2, a_4, a_9, a_{11}\}$.

We only consider one choice, the greedy method, and that when we make the greedy method, one of the subproblems is guaranteed to be empty, so that only one nonempty subproblem remains. Based on these observations, we shall develop a recursive greedy algorithm to solve the activity-scheduling problem. We shall complete the process of developing a greedy solution by converting the recursive algorithm to an iterative one.

**2nd Part:** *(Probably wrong question.)*

Because, in job sequencing with deadline procedure, we are applying greedy criteria to find the optimal solution of the problem. Now, to find the optimal solution, the next job is to choose in such a way that it would be optimized. Let us consider the objective function $\sum_{i \in J} p_i$ and we have to optimize this function. So, to enter next job into the queue subject to the constraint that the resulting solution $J$ must be a feasible solution, we must assure that it will increase the objective function $\sum_{j \in J} p_j$ maximum. Now, if we arrange the jobs in decreasing order according to their profits $p_i$, then we can assign the jobs sequentially to the job queue without violating the deadlines, i.e. the solution must be a feasible solution. This is the activity selection problem of jobs sequencing.

Suppose we have a set $S = \{a_1, a_2, \ldots, a_n\}$ of $n$ proposed activities that wish to use a resource, which can be used by only one activity at a time. Each activity $a_i$ has a start time $s_i$ and a finish time $f_i$, where $0 \le s_i < f_i < \infty$. If selected, activity $a_i$ takes place during the half-open time interval $[s_i, f_i)$. Activities $a_i$ and $a_j$ are compatible if the intervals $[s_i, f_i)$ and $[s_j, f_j)$ do not overlap (i.e., $a_i$ and $a_j$ are compatible if $s_i \ge f_j$ or $s_j \ge f_i$). The activity-selection problem is to select a maximum-size subset of mutually compatible activities. For example, consider the following set $S$ of activities, which we have sorted in monotonically increasing order of finish time.

| $i$   | 1 | 2 | 3 | 4 | 5 | 6 | 7  | 8  | 9  | 10 | 11 |
|-------|---|---|---|---|---|---|----|----|----|----|----|
| $s_i$ | 1 | 3 | 0 | 5 | 3 | 5 | 6  | 8  | 8  | 2  | 12 |
| $f_i$ | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 |

For this example, the subset $\{a_3, a_9, a_{11}\}$ consists of mutually compatible activities. It is not a maximal subset, however, since the subset $\{a_1, a_4, a_8, a_{11}\}$ is larger. In fact, $\{a_1, a_4, a_8, a_{11}\}$ is a largest subset of mutually compatible activities; another largest subset is $\{a_2, a_4, a_9, a_{11}\}$.

We only consider one choice, the greedy method, and that when we make the greedy method, one of the sub-problems is guaranteed to be empty, so that only one nonempty sub-problem remains. Based on these observations, we shall develop a recursive greedy algorithm to solve the activity-scheduling problem. We shall complete the process of developing a greedy solution by converting the recursive algorithm to an iterative one.

We still have to discuss the running time of the algorithm. The initial sorting can be done in time $O(n \log n)$, and the first loop takes time $O(n)$. It is not hard to implement each body of the second loop in time $O(n)$, so the total loop takes time $O(n^2)$. So the total algorithm runs in time $O(n^2)$.

**5. a) Find the optimal solution using greedy criteria for a knapsack having capacity 100 kg for the following list of items having values and weights as shown in the table.** *[WBUT 2007, 2012, 2013, 2019]*

| Item  | Value | Weight |
|-------|-------|--------|
| $I_1$ | 10    | 15     |
| $I_2$ | 20    | 25     |
| $I_3$ | 30    | 35     |
| $I_4$ | 40    | 45     |
| $I_5$ | 50    | 55     |

**OR, Given weight vector $(15, 25, 35, 45, 55)$ and the profit vector $(10, 20, 30, 40, 50)$ and a Knapsack of capacity 100, find at least three feasible solutions including optimal one for the Knapsack problem of 5 items.** *[WBUT 2014]*

To find the optimal solution we keep those elements whose $a_i/z_i$ is maximum into the knapsack, where $a_i$ represents the profit for i-th element and $z_i$ represents the weight of the i-th element.

Now,
$$\frac{a_1}{z_1} = \frac{10}{15} = .66, \quad \frac{a_2}{z_2} = \frac{20}{25} = .8, \quad \frac{a_3}{z_3} = \frac{30}{35} = .85, \quad \frac{a_4}{z_4} = \frac{40}{45} = .88, \quad \frac{a_5}{z_5} = \frac{50}{55} = .90$$

So, the highest $a_i/z_i$ ratio is $\dfrac{a_5}{z_5}$ i.e. .9. So, we keep one unit of this element in the knapsack.

So, $x_5 = 1$ and $z_5 x_5 = 55 \times 1 = 55$, $a_5 x_5 = 50 \times 1 = 50$ and $M_1 = M - z_5 x_5 = 100 - 55 = 45$.

Now, next highest value of $a_i/z_i$ is $a_4/z_4$.
If $x_4 = 1$ then $z_4 x_4 = 45 \times 1 = 45$ and $a_4 x_4 = 40 \times 1 = 40$.
So, $M_2 = M_1 - z_4 x_4 = 45 - 45 = 0$.
So, the knapsack is full and then maximum profit is
$$= a_5 x_5 + a_4 x_4 = 50 + 40 = 90.$$

Similarly, we may consider that the highest profitable item gives the highest profit. Then we insert the highest profitable item to the knapsack first and then next highest item and so on.
So, $x_5 > x_4 > x_3 > x_2 > x_1$.

First we insert the 5-th element into the knapsack because it is the highest profitable element.
So, $x_5 = 1$ and $z_5 x_5 = 55 \times 1 = 55$, $a_5 x_5 = 50 \times 1 = 50$ and $M_1 = M - z_5 x_5 = 100 - 55 = 45$.

Next, we insert the 4-th element into the knapsack because it is the next highest profitable element.
So, $x_4 = 1$ and $z_4 x_4 = 45 \times 1 = 45$ and $a_4 x_4 = 40 \times 1 = 40$ and $M_2 = M_1 - z_4 x_4 = 45 - 45 = 0$.
So, the knapsack is full and then maximum profit is
$$= a_5 x_5 + a_4 x_4 = 50 + 40 = 90.$$

Similarly, we may consider that the lowest weight item gives the highest profit because, we can insert more weight to the knapsack. Then we insert the lowest weight item to the knapsack first and then next highest item and so on.
So, $x_1 > x_2 > x_3 > x_4 > x_5$.

First we insert the $x_1$ element into the knapsack because it is the lowest weight element.
So, $x_1 = 1$ and $z_1 x_1 = 15 \times 1 = 15$, $a_1 x_1 = 10 \times 1 = 10$ and $M_1 = M - z_1 x_1 = 100 - 15 = 85$.

Next, we insert the $x_2$ element into the knapsack because it is the next lowest weight element.
So, $x_2 = 1$ and $z_2 x_2 = 25 \times 1 = 25$ and $a_2 x_2 = 20 \times 1 = 20$ and $M_2 = M_1 - z_2 x_2 = 85 - 25 = 60$.

Next, we insert the $x_3$ element into the knapsack because it is the next lowest weight element.
So, $x_3 = 1$ and $z_3 x_3 = 35 \times 1 = 35$ and $a_3 x_3 = 30 \times 1 = 30$ and $M_3 = M_2 - z_3 x_3 = 60 - 35 = 25$.

Next, we insert the $x_4$ element into the knapsack because it is the next lowest weight element.
So, $x_4 = 25/45 = 0.55$ and $z_4 x_4 = 45 \times 25/45 = 25$ and $a_4 x_4 = 40 \times 0.55 = 22$ and $M_4 = M_3 - z_4 x_4 = 25 - 25 = 0$. `[as printed]`

So, the knapsack is full and then maximum profit is
$$= a_1 x_1 + a_2 x_2 + a_3 x_3 + a_4 x_4 = 10 + 20 + 30 + 22 = 82.$$

**5. b) What is the difference between dynamic programming and greedy method?** *[WBUT 2007, 2008, 2012, 2017, 2019]*

Greedy method is an algorithm that always takes the best immediate, or local, solution while finding an answer. Greedy algorithms find the overall, or globally, optimal solution for some optimization problems, but may find less-than-optimal solutions for some instances of other problems.

So the difference between Greedy method and Dynamic Programming are:
- Both techniques are optimization techniques, and both build solutions from a collection of choices of individual elements.
- The greedy method computes its solution by making its choices in a forward fashion, never looking back or revising previous choices.
- Dynamic programming computes its solution bottom up by synthesizing them from smaller subsolutions, and by trying many possibilities and choices before it arrives at the optimal set of choices.
- There is no a priori test by which one can tell if the Greedy method will lead to an optimal solution.
- By contrast, there is a prior test for Dynamic Programming, the Principle of Optimality (A problem is said to satisfy the Principle of Optimality if the subsolutions of an optimal solution of the problem are themselves optimal solutions for their subproblems), which can say if Dynamic Programming will lead to an optimal solution.

**6. a) Find the minimum number of operations required for the following matrix chain multiplication using dynamic programming:**
$$A(10 \times 20) \ast B(20 \times 50) \ast C(50 \times 1) \ast D(1 \times 100)$$
*[WBUT 2008, 2013, 2015]*

We can represent $A_1, A_2, A_3, A_4$ in such a way, that,
$$A_1 \to p_0 \times p_1, \quad A_2 \to p_1 \times p_2, \quad A_3 \to p_2 \times p_3, \quad A_4 \to p_3 \times p_4$$
Where, $p_0 = 10,\ p_1 = 20,\ p_2 = 50,\ p_3 = 1,\ p_4 = 100$.

Now,
$$m[1, 1] = 0, \quad m[2, 2] = 0, \quad m[3, 3] = 0, \quad m[4, 4] = 0.$$
This will happen when we parenthesize in the following order $(A_1), (A_2), (A_3), (A_4)$.

Next, we can find out, that
$$m[1, 2] = m[1,1] + m[2, 2] + p_0 \cdot p_1 \cdot p_2 = 0 + 0 + 10 \cdot 20 \cdot 50 = 10000$$
i.e. the parenthesis is $(A_1 A_2)$.
$$m[2, 3] = m[2,2] + m[3, 3] + p_1 \cdot p_2 \cdot p_3 = 0 + 0 + 20 \cdot 50 \cdot 1 = 1000$$
i.e. the parenthesis is $(A_2 A_3)$.
$$m[3, 4] = m[3,3] + m[4, 4] + p_2 \cdot p_3 \cdot p_4 = 0 + 0 + 50 \cdot 1 \cdot 100 = 5000$$
i.e. the parenthesis is $(A_3 A_4)$.

Now, we can calculate the following
$$m[1, 3] = \min \begin{cases} m[1,1] + m[2, 3] + p_0 \cdot p_1 \cdot p_3 \\ m[1,2] + m[3, 3] + p_0 \cdot p_2 \cdot p_3 \end{cases} = \min \begin{cases} 0 + 1000 + 10 \cdot 20 \cdot 1 \\ 10000 + 0 + 10 \cdot 50 \cdot 1 \end{cases} = \min \begin{cases} 1200 \\ 10500 \end{cases} = 1200$$

Now, we can parenthesize $A_1 A_2 A_3$ either $((A_1 A_2)(A_3))$ or $((A_1)(A_2 A_3))$. But the minimum scalar multiplication will occur for $((A_1)(A_2 A_3))$.

$$m[2, 4] = \min \begin{cases} m[2, 2] + m[3, 4] + p_1 \cdot p_2 \cdot p_4 \\ m[2, 3] + m[4, 4] + p_1 \cdot p_3 \cdot p_4 \end{cases} = \min \begin{cases} 0 + 5000 + 20 \cdot 50 \cdot 100 \\ 1000 + 0 + 20 \cdot 1 \cdot 100 \end{cases} = \min \begin{cases} 105000 \\ 3000 \end{cases} = 3000$$

Now, we can parenthesize $A_2 A_3 A_4$ either $((A_2 A_3)(A_4))$ or $((A_2)(A_3 A_4))$. But the minimum scalar multiplication will occur for $((A_2 A_3)(A_4))$.

Now, we get the final parenthesis.
$$m[1, 4] = \min \begin{cases} m[1, 1] + m[2, 4] + p_0 \cdot p_1 \cdot p_4 \\ m[1, 2] + m[3, 4] + p_0 \cdot p_2 \cdot p_4 \\ m[1, 3] + m[4, 4] + p_0 \cdot p_3 \cdot p_4 \end{cases} = \min \begin{cases} 0 + 3000 + 10 \cdot 20 \cdot 100 \\ 10000 + 5000 + 10 \cdot 50 \cdot 100 \\ 1200 + 0 + 10 \cdot 1 \cdot 100 \end{cases} = \min \begin{cases} 23000 \\ 65000 \\ 2200 \end{cases} = 2200$$

So, the minimum scalar multiplication will occur for $((A_1 A_2 A_3)(A_4))$ and the total number of scalar multiplication are 2200.

**6. b) Give an algorithm for matrix-chain multiplication.** *[WBUT 2008, 2009, 2010]*

Refer to Question No. 7 of Short Answer Type Questions.

**7. Design a backtracking algorithm to find all the Hamiltonian cycles in a Hamiltonian graph. What is the worst-case time complexity of the algorithm?** *[WBUT 2008, 2013]*

The following algorithms find Hamiltonian cycles from a graph by applying backtracking method.

```
Search_node(k)
{
   Step 1     while ((x[k] + 1) mod (n+1) != 0)
   {
   Step 1.1      if (G[x[k-1], x[k]] != 0) then
   {
   Step 1.1.1       for j <- 1 to k-1 do
   {
   Step 1.1.1.1        if (x[j] = x[k]) then
   Step 1.1.1.2           return 0;
   }
   Step 1.1.2       if (j = k) then
   {
   Step 1.1.2.1        if ((k < n) or ((k = n) and G[x[n], x[1]] != 0)) then
   Step 1.1.2.2           return k;
   }
   Step 2     else
   Step 2.1      return ("no path");
   }
   }
}

Hamiltonian(k)
{
   Step 1     while (Search_node(k) != 0)
   {
   Step 1.1      if (x[k] = n) then
   Step 1.1.1       return (x[1: n]);
   Step 1.2      else
   Step 1.2.1       Hamiltonian(k+1);
   }
}
```

**Complexity of Hamiltonian cycle algorithm:**

The time taken to scan $n$ vertices is $O(n)$ and $O(n)$ time to extend all forced degree two paths. Since the iterations terminate unless a new vertex of degree two is created, at most $n$ iterations can occur. At most $O(m)$ edges can be deleted ($O(m)$) and the next branch is taken. Thus, an easy upper bound on the pruning time for a node searching from a vertex of degree $d$ is $O(d(n^2 + m))$, but this is overly pessimistic. Note that along any branch from the root of the search tree to a leaf, at most $n$ vertices can be converted to degree 2. Also note that along each branch each edge can be deleted at most once. If the degree is high we seldom take more than a few branches before success.

The implementation is such that when several vertices have two neighbors of degree two at the beginning of an iteration, all redundant edges are removed in a single pass taking time proportional to $n$ plus the number of edges removed and checked. In practice, on a graph $G$, it typically takes $O(n + m)$ time per search node on simple Hamiltonian instances.

**8. Find the optimal solution for the fractional Knapsack problem given below:**
$$I = \{I_1, I_2, I_3, I_4, I_5\}$$
$$w = \{5, 10, 20, 30, 40\}$$
$$v = \{30, 20, 100, 90, 160\}$$
**The knapsack capacity, $W = 60$.** *[WBUT 2008]*

Here $v_i$ is the profit and $w_i$ is the weight of the each knapsack elements.

So, according to the Greedy Knapsack problem,
$$v_1/w_1 = 30/5 = 6$$
$$v_2/w_2 = 20/10 = 2$$
$$v_3/w_3 = 100/20 = 5$$
$$v_4/w_4 = 90/30 = 3$$
$$v_5/w_5 = 160/40 = 4$$

We consider that some fraction $x_i$, $0 \le x_i \le 1$ of the object $i$ is kept into the knapsack.

The highest ratio is $v_1/w_1 = 6$ and insert one unit of $w_1 = 5$.
So, $x_1 = 1$, $x_1 \cdot w_1 = 5$, $x_1 \cdot v_1 = 30$ and $W = W - x_1 \cdot w_1 = 60 - 5 = 55$.

Next highest ratio is $v_3/w_3 = 5$ and insert one unit of $w_3 = 20$.
So, $x_3 = 1$, $x_3 \cdot w_3 = 20$, $x_3 \cdot v_3 = 100$ and $W = W - x_3 \cdot w_3 = 55 - 20 = 35$.

Next highest ratio is $v_5/w_5 = 4$ and insert fractional part of $w_5$.
So, $x_5 = 35/40 = 7/8$. So, $x_5 = 7/8$, $x_5 \cdot w_5 = \dfrac{7}{8} \times 40 = 35$, $x_5 \cdot v_5 = \dfrac{7}{8} \times 160 = 140$ and $W = W - x_5 \cdot w_5 = 35 - 35 = 0$.

So, the knapsack is full and then maximum profit is
$$= x_1 \cdot v_1 + x_3 \cdot v_3 + x_5 \cdot v_5 = 30 + 100 + 140 = 270.$$

**9. a) State the general knapsack problem. Write a greedy algorithm for this problem and derive its time complexity.** *[WBUT 2009, 2016]*

The Knapsack problem states that we have to fill a knapsack having constant weight, with some objects having different weights and different profit values. We have to fill up the knapsack with objects in such a way that the total weight of selected objects does not cross the limit of the knapsack and we get the maximum profit.

Suppose,
- The capacity of the knapsack is $C$.
- There are $n$ many objects. An individual object is represented by $I$ where $i = 1, 2, \ldots n$.
- Weight of i-th object is $z_i$, $1 \le I \le n$.
- Profit for i-th object is $a_i$, $1 \le I \le n$.

We can put maximum one unit of each object in the knapsack or some fractional part of that object. So, we consider that some fraction $x_i$, $0 \le x_i \le 1$ of the object $I$ is kept into the knapsack.

Now, the weight of the knapsack is $\sum_{i=1}^{n} z_i x_i$ and profit is $A = \sum_{i=1}^{n} a_i x_i$. So we can define this problem as:
$$\text{Maximize } A = \sum_{i=1}^{n} a_i x_i \qquad \ldots(1)$$
$$\text{Subject to } \sum_{i=1}^{n} z_i x_i \le C \qquad \ldots(2)$$
$$\text{And } 0 \le x_i \le 1,\ 0 \le I \le n$$

**Algorithm of Knapsack problem**

To generate an algorithm to solve knapsack problem, first we consider that all the values of $a_i/z_i$ of the i-th element are arranged in decreasing order. Two arrays $a[1:n]$ and $z[1:n]$ are used for maintaining profit and weight of $n$ objects in such a way that $a[i]/z[i] \ge a[i+1]/z[i+1]$ respectively. $M$ is the knapsack size and $x[1:n]$ is the solution vector.

```
Knapsack(M, n)
{
   Step 1     for I <- 1 to n do
   Step 1.1      x[i] <- 0.0;
   }
   Step 2     u <- M;
   Step 3     for I <- 1 to n do
   {
   Step 3.1      if z[i] > u then
   Step 3.1.1       break;
   Step 3.2      else
   Step 3.2.1       x[i] <- 1.0;
   Step 3.2.2       u <- u - z[i];
   }
   Step 4     if I <= n then
   Step 4.1      x[i] <- u/z[i];
   Step 5     else
   Step 5.1      for I <- 1 to n do
   Step 5.1.1       print x[i];
}
```

Time complexity of knapsack problem is $O(nW)$ [$W$ is the maximum weight of the knapsack].

**9. b) Given the weight vector $(2, 3, 5, 7, 1, 4, 1)$ and the profit vector $(10, 5, 15, 7, 6, 18, 3)$ and a knapsack of capacity 15, find at least three feasible solutions including optimal one for the knapsack problem of seven objects.** *[WBUT 2009, 2016]*

To find the optimal solutions we apply third method among the above, i.e., keep those elements whose $a_i/z_i$ is maximum into the knapsack.
[Here $a$ = value and $z$ = weight]

Now,
$$\frac{a_1}{z_1} = \frac{10}{2} = 5, \quad \frac{a_2}{z_2} = \frac{5}{3} = 1.67, \quad \frac{a_3}{z_3} = \frac{15}{5} = 3,$$
$$\frac{a_4}{z_4} = \frac{7}{7} = 1, \quad \frac{a_5}{z_5} = \frac{6}{1} = 6, \quad \frac{a_6}{z_6} = \frac{18}{4} = 4.5, \quad \frac{a_7}{z_7} = \frac{3}{1} = 3$$

So, the highest $a_i/z_i$ ratio is $\dfrac{a_5}{z_5}$ i.e. 6. So, we keep one unit of this element in the knapsack.
So, $x_5 = 1$ and $z_5 x_5 = 1 \times 1 = 1$, $a_5 x_5 = 6 \times 1 = 6$ and $M_1 = M - z_5 x_5 = 15 - 1 = 14$.

Now, next highest value of $a_i/z_i$ is $a_1/z_1$.
If $x_1 = 1$ then $z_1 x_1 = 2 \times 1 = 2$ and $a_1 x_1 = 10 \times 1 = 10$.
So, $M_2 = M_1 - z_1 x_1 = 14 - 2 = 12$.

Next highest value of $a_i/z_i$ is $a_6/z_6$.
If $x_6 = 1$ then $z_6 x_6 = 4 \times 1 = 4$ and $a_6 x_6 = 18 \times 1 = 18$ and
$M_3 = M_2 - z_6 x_6 = 12 - 4 = 8$.

The next highest value of $a_i/z_i$ is $a_3/z_3$ or $a_7/z_7$ both are same. So we can choose any one. Suppose we choose $a_7/z_7$ for knapsack.
If $x_7 = 1$ then $z_7 \cdot x_7 = 1 \times 1 = 1$ and $a_7 x_7 = 3 \times 1 = 3$ and
$M_4 = M_3 - z_7 x_7 = 8 - 1 = 7$.

The next highest value is $a_3/z_3$.
If $x_3 = 1$ then $z_3 x_3 = 5 \times 1 = 5$ and $a_3 x_3 = 15 \times 1 = 15$ and $M_5 = M_4 - z_3 x_3 = 7 - 5 = 2$.

The next highest value is $a_2/z_2$.
If $x_2 = 1$ then $z_2 x_2 = 3 \times 1 = 3$ which exceeds the value of knapsack. So, we have to put the fractional part of $x_2$ to the knapsack, i.e., remaining part of knapsack is 2.
So, $x_2 = \dfrac{2}{3}$. Now, $z_2 x_2 = 3 \times \dfrac{2}{3} = 2$, $a_2 x_2 = 5 \times \dfrac{2}{3} = 3.33$ and $M_6 = M_5 - z_2 x_2 = 2 - 2 = 0$.

So, the knapsack is full and then maximum profit is
$$= a_5 x_5 + a_1 x_1 + a_6 x_6 + a_7 x_7 + a_3 x_3 + a_2 x_2 = 6 + 10 + 18 + 3 + 15 + 3.33 = 55.33.$$

**10. Apply backtracking technique to solve the 3-colouring problem for the following graph.** *[WBUT 2009, 2011, 2016]*

*Figure 1:* An undirected graph with 5 vertices labelled 1, 2, 3, 4, 5. Vertex 3 (top) connects to 1, 2 and 5; vertex 1 (left) connects to 2 and 3; vertex 2 (bottom-left) connects to 1, 3 and 4; vertex 4 (bottom-right) connects to 2 and 5; vertex 5 (right) connects to 3 and 4. *[diagram]*

In the graph of figure 1, the number of vertices is $n = 5$ and suppose we have to color it using three colors i.e., $k = 3$. Let us denote three colors by c1, c2, c3.

Suppose all colors of five nodes 1, 2, 3, 4, 5 store in an array $A[]$. The index of each array element shows the vertex number and content of each array element denotes the respective color of the node. So the index of $A[i]$ i.e., $I$ represents the vertex of graph $G$. We start the assigning color to the first node of the graph. Applying backtracking method we can use different color for different nodes. So, we get the state space tree:

*[diagram: A backtracking state-space tree. The root branches into $A[1] = C1$, $A[1] = C2$, $A[1] = C3$ subtrees. Each level assigns a color to the next vertex ($A[2]$, $A[3]$, $A[4]$, $A[5]$), with branches pruned where adjacent vertices would share a color. The $A[1] = C1$ and $A[1] = C3$ subtrees are drawn in full; the source instructs the reader to draw the remaining parts.]*

**11. Write the algorithm of Quick sort. Find the best case, worst case and average case time complexities of this algorithm.** *[WBUT 2009, 2013, 2014]*

The following procedures together form the quick sort algorithm.

```
QuickSort(A, p, r)
{
   if p < r then
   {
      q <- Partition(A, p, r);
      QuickSort(A, p, q);
      QuickSort(A, q + 1, r);
   }
}
```

**Algorithm for partition**

```
Partition(A, p, r)
{
   initialize x <- A[p];
   i <- p-1, j <- r+1;
   while (i < j)
   {
      while (A[--j] > x) ;
      while (A[++i] < x)
      {
         if (i < j) then
            Exchange(A[i], A[j]);
      }
   }
   return j;
}

Exchange(A, i, j)
{
   p <- A[i];
   A[i] <- A[j];
   A[j] <- p;
}
```

Partition selects the first key $x \leftarrow A[p]$ as a pivot key about which the array is partitioned. If $x < A[p]$, $A[p]$ will move towards the left of the pivot, otherwise if $x > A[p]$, $A[p]$ will move towards the right of the pivot key $x$.

**Complexity Analysis.**

- **Best case:**
  - In the best case, the pivot is in the middle position of the array.
  - To simplify the equations, we assume that the two sub arrays are each exactly half the length of the original one. So, we get $T(n) = 2T(n/2) + cn$, $c > 0$ constant (independent of $n$) and $n \ge 2$ with $T(1) = 1$.
  - This is very similar to the formula for Merge sort, and a similar analysis leads to $T(n) = cn \log_2 n + n$ which is $O(n \log_2 n)$.

- **Average case:** We assume that each of the sizes of the left partitions are equally likely, and hence each has probability $1/n$.
  - With this assumption, the average value of $T(i)$, and hence also of $T(n-i-1)$, is $\dfrac{T(0) + T(1) + \cdots + T(n-1)}{n}$.
  - Naturally, our recurrence relation becomes $T(n) = \dfrac{2\big(T(0) + T(1) + \cdots + T(n-1)\big)}{n} + cn$.
  - Multiplying both sides by $n$ we find $nT(n) = 2\big(T(0) + T(1) + \cdots + T(n-1)\big) + cn^2$.
  - Substitution of $n$ by $n-1$ gives $(n-1)T(n-1) = 2\big(T(0) + T(1) + \cdots + T(n-2)\big) + c(n-1)^2$.
  - Subtracting the last equation from the previous one, we get $nT(n) - (n-1)T(n-1) = 2T(n-1) + 2cn - c$.
  - Rearranging and ignoring constant $c$, we arrive at $nT(n) = (n+1)T(n-1) + 2cn$.
  - Division throughout by $n(n+1)$ gives $\dfrac{T(n)}{n+1} = \dfrac{T(n-1)}{n} + \dfrac{2c}{n+1}$.
  - Hence, $\dfrac{T(n-1)}{n} = \dfrac{T(n-2)}{n-1} + \dfrac{2c}{n}$. Similarly $\dfrac{T(2)}{3} = \dfrac{T(1)}{2} + \dfrac{2c}{3}$.
  - Thus $\dfrac{T(n)}{n+1} = \dfrac{T(1)}{2} + 2c\left(\dfrac{1}{3} + \dfrac{1}{4} + \cdots + \dfrac{1}{n+1}\right)$.
  - The sum in brackets is about $\log_e(n+1) + \gamma - 3/2$, where $\gamma$ is Euler's constant, which is approximately $0.577$.
  - So, $T(n)/(n+1) = O(\log_2 n)$ and thus $T(n) = O(n \log_2 n)$.

- **Worst case:** In quick sort technique, the worst case condition arises when the elements of the array are already sorted.
  - If the pivot is always the smallest element, then always $I = 0$.
  - We ignore the term $T(0) = 1$, so the recurrence relation is $T(n) = T(n-1) + cn$.
  - So, $T(n-1) = T(n-2) + c(n-1)$ and so on until we get $T(2) = T(1) + c(2)$.
  - Substituting backwards, we get $T(n) = T(1) + c(n + \cdots + 2) = O(n^2)$.

It may be noted that this case happens if we always take the pivot to be the first element in the array and the array is already sorted.

**12. What is Heap property? Write an algorithm to make a Heap containing elements. Then, show that how can you insert an element into a Heap. Then, write the algorithm of Heap sort and find the running time of this algorithm. Write an algorithm to find the existence of an element into a Heap.** *[WBUT 2010]*
**OR, a) What is Heap property? b) Write an algorithm of Heap sort. c) Find the running time of this algorithm.** *[WBUT 2018, 2019]*

**Heap:** A heap is a complete binary tree with the following properties:
1. If it is a max heap then the value of each node is greater than the value of its children.
2. If it is a min heap then the value of each node is less than the value of its children.

**Algorithm to make a Heap**

`BUILD_HEAP()` algorithm constructs a complete heap tree where each node of the tree is present at its proper position with the help of `Heapify()` algorithm. `BUILD_HEAP()` breaks the total length of the array into two equal parts. So, the elements in the sub arrays $A[1, \ldots \lfloor n/2 \rfloor]$ and $A[\lfloor n/2 \rfloor + 1 \ldots n]$ are all leaf nodes. Now it compares each node from length $\lfloor A \rfloor / 2$ down to 1 with the help of `Heapify()`. The increasing order of processing guarantees that the sub tree rooted at each of the children are heap, before `Heapify()` is run at their parent node.

```
BUILD_HEAP(A, length)
{
   heap-size(A) <- length[A]
   for i <- floor(length[A]/2) down to 1 do
      Heapify(A, i);
}

Heapify(A, i)
{
   l <- left[i]
   r <- right[i]
   if l <= heap-size[A] and A[l] > A[i] then
      largest <- l
   else
      largest <- i
   if r <= heap-size[A] and A[r] > A[largest] then
      largest <- r
   if largest != i then
      exchange A[i] <-> A[largest]
      Heapify(A, largest)
}
```

This `Heapify()` algorithm is totally based on the procedure to arrange a heap in a 1-D array which has already been discussed earlier. If the above rule is violated, then `Heapify()` algorithm set each node to its appropriate position.

**Insert an element into the Heap**

Suppose we have a heap as follows (Max heap, Fig: 1): root 20, with children 14 and 17; node 14 has children 8 and 6; node 17 has children 9 and 4; node 8 has a child 1. *[diagram]*

Suppose, we want to add a node with key 15 into the heap in figure 1. First, we add the node to the tree at the next spot available at the lowest level of the tree. This is to ensure that the tree remains complete. Thus the configuration becomes (Fig: 2): node 15 is inserted as the second child of node 8.

However, after inserting element 15, as shown in figure 2, we find that the heap property is not maintained any more. To ensure the heap property preserved, we have to perform a few steps to convert it into a max heap. We interchange elements 15 and 8 as evident in figure 3.

Next, another swap is required with respect to elements 14 and 15 in figure 3 to obtain a situation shown in figure 4. This is for preservation of the heap property.

Now we have completed a heap tree and placed 15 in its appropriate position. No further move is required because $15 < 20$. But note that the left child having value 1, is less than right child having value 8, of the sub-tree rooted at the node containing value 14. In our subsequent discussion, we shall see how we can sort out this problem. *[diagram]*

**Heap Sort algorithm**

The heap sort algorithm starts by using procedure `BUILD-HEAP()` to build a max heap on the input array $A[1 \ldots n]$. Since the maximum element of the array is stored at the root $A[1]$, it can be put into its correct final position by exchanging it with $A[n]$ (the last element in $A$). If we now discard node $n$ from the heap then the remaining elements can be converted into heap. The new element at the root may violate the heap property. So it is necessary to restore the heap property further.

```
HEAPSORT(A)
{
   BUILD_HEAP(A);
   for i <- length(A) down to 2 do
   {
      exchange A[1] <-> A[i]
      heap-size[A] <- heap-size[A] - 1
      Heapify(A, 1);
   }
}
```

**Complexity**

The `HEAPSORT()` procedure takes time at most $O(n \log_2 n)$. Since the call to `BUILD_HEAP()` takes time $O(n)$ and each of the $n-1$ calls to `Heapify()` takes time $O(\log_2 n)$ which we have already discussed earlier, so the worst case time complexity of heap sort is $O(n \log_2 n)$.

**13. a) Explain the graph coloring problem and write the algorithm.** *[WBUT 2011]*

Refer to Question No. 3(ii) of Long Answer Type Questions.

**13. b) Solve the single source shortest path problem for the following graph considering '1' as the source vertex using Dijkstra's algorithm.** *[WBUT 2011]*

*Graph:* 5 vertices. Edge weights: $1$–$2 = 5$, $1$–$3 = 2$, $1$–$5 = 6$, $2$–$4 = 5$, $2$–$3 = 13$, $3$–$2$ (= 13), $3$–$4 = 9$, $3$–$5 = 3$, $2$–$5 = 10$, $4$–$5 = 4$, $3$–$4$ (= 9). *[diagram]*

**Initially:** Vertex 1 is the source vertex and we have to find out the shortest distance from vertex 1 to all the remaining vertices.
So, the distances from vertex 1 to all other vertices are given below.
$$S = \{1\},\quad D[2] = 5,\ D[3] = 2,\ D[4] = 10,\ D[5] = 6$$

**Iteration 1:** Now, vertex 1 to vertex 3 is the shortest distance and the distance is 3. Now, we have to find out the shortest distance of the other vertices. `[as printed: D[3] = 2]`
Select $w = 3$, so that $S = \{1, 3\}$.
$$D[2] = \min(5, D[3] + C[3, 2]) = \min(1, 2+13) = 5$$
$$D[4] = \min(10, D[3] + C[3, 4]) = \min(1, 2+9) = 10$$
$$D[5] = \min(6, D[3] + C[3, 5]) = \min(6, 2+3) = 5$$

**Iteration 2:** Select $w = 5$, so that $S = \{1, 3, 5\}$.
$$D[2] = \min(5, D[5] + C[5, 2]) = \min(5, 5+\infty) = 5$$
$$D[4] = \min(10, D[5] + C[5, 4]) = \min(10, 5+4) = 9$$

**Iteration 3:** Select $w = 4$, so that $S = \{1, 3, 5, 4\}$.
$$D[2] = \min(5, D[4] + C[4, 2]) = \min(5, 9+5) = 5$$

**Iteration 4:** Select $w = 2$, so that $S = \{1, 2\}$.
$$D[2] = 5$$

So, the shortest distances from vertex 1 to other vertices are given below.
i) $D[2] = 5$ i.e. the shortest distance from vertex 1 to vertex 2 is 1 and the path is $1 \to 2$. `[as printed]`
ii) $D[3] = 2$ i.e. the shortest distance from vertex 1 to vertex 3 is 2 and the path is $1 \to 3$.
iii) $D[4] = 9$ i.e. the shortest distance from vertex 1 to vertex 4 is 1 and the path is $1 \to 3 \to 5 \to 4$. `[as printed]`
iv) $D[5] = 5$ i.e. the shortest distance from vertex 1 to vertex 5 is 5 and the path is $1 \to 3 \to 5$.

**14. Solve the following Knapsack problem with the given conditions: $n = 3$, weight of the Knapsack $M = 20$, Profits $(P_1, P_2, P_3) = (25, 24, 15)$ and weight $(W_1, W_2, W_3) = (18, 15, 10)$.** *[WBUT 2011, 2015]*

To find the optimal solutions we apply third method among the above, i.e., keep those elements whose $p_i/w_i$ is maximum into the knapsack.
[Here $p_i$ = profit value and $z_i$ = weight]

Now,
$$\frac{P_1}{w_1} = \frac{25}{18} = 1.38, \quad \frac{P_2}{w_2} = \frac{24}{15} = 1.6, \quad \frac{P_3}{w_3} = \frac{15}{10} = 1.5$$

So, the highest $p_i/w_i$ ratio is 1.6. So, we keep one unit of this element in the knapsack.
So, $x_2 = 1$ and $w_2 \cdot x_2 = 15 \times 1 = 15$, $p_2 x_2 = 24 \times 1 = 24$ and $M_1 = M - w_2 x_2 = 20 - 15 = 5$.

Now, next highest value is 1.5.
If $x_3 = 1$ then $w_3 x_3 = 10 \times 1 = 10$ which exceeds the weight of the knapsack. So, we have to put the fractional part of $x_3$ to the knapsack, i.e., remaining part of knapsack is 5.
So, $x_3 = \dfrac{5}{10} = 0.5$.

Now, $w_3 \cdot x_3 = 10 \times \dfrac{5}{10} = 5$, $p_3 x_3 = 15 \times \dfrac{5}{10} = 7.5$ and $M_2 = M_1 - w_3 x_3 = 5 - 5 = 0$.

So, the knapsack is full and then maximum profit is $= p_2 x_2 + p_3 x_3 = 24 + 7.5 = 33.5$.

**15. a) Apply backtracking technique to solve the following graph-coloring problem and also generate the state space tree:** *[WBUT 2013]*

*Graph:* An undirected graph with 5 vertices. *[diagram]*

Here the chromatic number is 4 i.e. 4 different colors are required to color the graph such that no two adjacency vertices are same color. In the figure 1, we have considered four different colors are c1, c2, c3, c4 and five vertices of the graph is represented by $A[1]$, $A[2]$, $A[3]$, $A[4]$ and $A[5]$.

*[diagram: Fig 1 — State space tree of the graph. The root branches by the color assigned to $A[1]$ (C1, C2, C3, C4). Each subsequent level assigns a color to $A[2]$, $A[3]$, $A[4]$, $A[5]$ from {c1, c2, c3, c4}, with branches pruned where two adjacent vertices would receive the same color. Only the $A[1] = C1$ portion is drawn in full.]*

[Try to draw the remaining three parts of the tree]

**15. b) Write an algorithm for n-queen's problem. Find its time-complexity and explain the algorithm using an example.** *[WBUT 2013]*

**1st Part:** Refer to Question No. 15 of Short Answer Type Questions.

**2nd Part:**

Our simple example is the n-queen problem, which happens to be NP-complete (which means computationally hard). On an $n \times n$ chessboard, a queen can move any number of squares up, down, to the right, to the left, and diagonally. Fig: 1(a) illustrates a possible move for a queen for a case of $n = 5$. The problem is to determine $n$ "safe" positions for $n$ queens. A safe position means that none of the queens can move to a square occupied by another queen in only one move. Obviously there must be one and only one queen in each row and column. (If two or more queens are in a row or column, then one would be attacked by another; if no queens are in a row or column, there must be a row or column that has more than one queen.) Similarly, there must be at most one queen in each diagonal direction (since there can be no queen in a diagonal direction). Fig: 1(b) is a solution for $n = 5$; generally, a solution is not unique for a specific value of $n$.

*Fig: 1 The n-queen problem illustration for $n = 5$. (a) A possible move of a queen. (b) A solution.* *[diagram]*

**16. Solve the APSP problem using Floyd-Warshall's algorithm for the following graph.** *[WBUT 2013]*

*Graph:* A directed, weighted graph on 5 vertices with edge weights including $3, 8, -4, 1, 7, 4, 2, 5, 6, -5$ etc. (as encoded in $D^{(0)}$ below). *[diagram]*

The sequence of matrices $D^{(k)}$ and $\Pi^{(k)}$ computed by the Floyd-Warshall's algorithm for the graph is given below.

$$D^{(0)} = \begin{pmatrix} 0 & 3 & 8 & \infty & -4 \\ \infty & 0 & \infty & 1 & 7 \\ \infty & 4 & 0 & \infty & \infty \\ 2 & \infty & -5 & 0 & \infty \\ \infty & \infty & \infty & 6 & 0 \end{pmatrix} \qquad \Pi^{(0)} = \begin{pmatrix} NIL & 1 & 1 & NIL & 1 \\ NIL & NIL & NIL & 2 & 2 \\ NIL & 3 & NIL & NIL & NIL \\ 4 & NIL & 4 & NIL & NIL \\ NIL & NIL & NIL & 5 & NIL \end{pmatrix}$$

$$D^{(1)} = \begin{pmatrix} 0 & 3 & 8 & \infty & -4 \\ \infty & 0 & \infty & 1 & 7 \\ \infty & 4 & 0 & \infty & \infty \\ 2 & 5 & -5 & 0 & -2 \\ \infty & \infty & \infty & 6 & 0 \end{pmatrix} \qquad \Pi^{(1)} = \begin{pmatrix} NIL & 1 & 1 & NIL & 1 \\ NIL & NIL & NIL & 2 & 2 \\ NIL & 3 & NIL & NIL & NIL \\ 4 & 1 & 4 & NIL & 1 \\ NIL & NIL & NIL & 5 & NIL \end{pmatrix}$$

$$D^{(2)} = \begin{pmatrix} 0 & 3 & 8 & 4 & -4 \\ \infty & 0 & \infty & 1 & 7 \\ \infty & 4 & 0 & 5 & 11 \\ 2 & 5 & -5 & 0 & -2 \\ \infty & \infty & \infty & 6 & 0 \end{pmatrix} \qquad \Pi^{(2)} = \begin{pmatrix} NIL & 1 & 1 & 2 & 1 \\ NIL & NIL & NIL & 2 & 2 \\ NIL & 3 & NIL & 2 & 2 \\ 4 & 1 & 4 & NIL & 1 \\ NIL & NIL & NIL & 5 & NIL \end{pmatrix}$$

$$D^{(3)} = \begin{pmatrix} 0 & 3 & 8 & 4 & -4 \\ \infty & 0 & \infty & 1 & 7 \\ \infty & 4 & 0 & 5 & 11 \\ 2 & -1 & -5 & 0 & -2 \\ \infty & \infty & \infty & 6 & 0 \end{pmatrix} \qquad \Pi^{(3)} = \begin{pmatrix} NIL & 1 & 1 & 2 & 1 \\ NIL & NIL & NIL & 2 & 2 \\ NIL & 3 & NIL & 2 & 2 \\ 4 & 3 & 4 & NIL & 1 \\ NIL & NIL & NIL & 5 & NIL \end{pmatrix}$$

$$D^{(4)} = \begin{pmatrix} 0 & 3 & -1 & 4 & -4 \\ 3 & 0 & -4 & 1 & -1 \\ 7 & 4 & 0 & 5 & 3 \\ 2 & -1 & -5 & 0 & -2 \\ 8 & 5 & 1 & 6 & 0 \end{pmatrix} \qquad \Pi^{(4)} = \begin{pmatrix} NIL & 1 & 4 & 2 & 1 \\ 4 & NIL & 4 & 2 & 1 \\ 4 & 3 & NIL & 2 & 1 \\ 4 & 3 & 4 & NIL & 1 \\ 4 & 3 & 4 & 5 & NIL \end{pmatrix}$$

$$D^{(5)} = \begin{pmatrix} 0 & 1 & -3 & 2 & -4 \\ 3 & 0 & -4 & 1 & -1 \\ 7 & 4 & 0 & 5 & 3 \\ 2 & -1 & -5 & 0 & -2 \\ 8 & 5 & 1 & 6 & 0 \end{pmatrix} \qquad \Pi^{(5)} = \begin{pmatrix} NIL & 3 & 4 & 5 & 1 \\ 4 & NIL & 4 & 2 & 1 \\ 4 & 3 & NIL & 2 & 1 \\ 4 & 3 & 4 & NIL & 1 \\ 4 & 3 & 4 & 5 & NIL \end{pmatrix}$$

**17. a) Perform the PARTITION operation once (one time) on the following array as per the requirement of the quicksort algorithm, assuming the last element of the array to be the pivot element. Clearly mention the steps.**
$$\text{arr}[] = \{2, 8, 7, 1, 3, 5, 6, 4\}$$
*[WBUT 2014]*

The operation proceeds as follows (the pivot is $x = 4$, the last element; $i$ tracks the boundary of the "smaller" partition, $j$ scans the array):

```
(a)  [2 | 8 | 7 | 1 | 3 | 5 | 6 | 4]      i below p, j at first element, r at pivot 4
(b)  [2 | 8 | 7 | 1 | 3 | 5 | 6 | 4]      2 swapped with itself; into smaller partition (p,i)
(c)  [2 | 8 | 7 | 1 | 3 | 5 | 6 | 4]      8 added to larger partition
(d)  [2 | 8 | 7 | 1 | 3 | 5 | 6 | 4]      7 added to larger partition
(e)  [2 | 1 | 7 | 8 | 3 | 5 | 6 | 4]      1 and 8 swapped; smaller partition grows
(f)  [2 | 1 | 3 | 8 | 7 | 5 | 6 | 4]      3 and 7 swapped; smaller partition grows
(g)  [2 | 1 | 3 | 8 | 7 | 5 | 6 | 4]      5 added to larger partition
(h)  [2 | 1 | 3 | 8 | 7 | 5 | 6 | 4]      6 added to larger partition; loop terminates
(i)  [2 | 1 | 3 | 4 | 7 | 5 | 6 | 8]      pivot 4 swapped into place between the two partitions
```

The operation of PARTITION on a sample array. Lightly shaded array elements are all in the first partition with values no greater than $x$. Heavily shaded elements are in the second partition with values greater than $x$. The un-shaded elements have not yet been put in one of the first two partitions, and the final white element is the pivot. (a) The initial array and variable settings. None of the elements have been placed in either of the first two partitions. (b) The value 2 is "swapped with itself" and put in the partition of smaller values. (c)–(d) The values 8 and 7 are added to the partition of larger values. (e) The values 1 and 8 are swapped, and the smaller partition grows. (f) The values 3 and 7 are swapped, and the smaller partition grows. (g)–(h) The larger partition grows to include 5 and 6 and the loop terminates. (i) In lines 7–8, the pivot element is swapped so that it lies between the two partitions.

**17. b) Using greedy strategy, schedule the following jobs within deadline so as to maximize the profit. Deadlines and profits are mentioned as follow:** *[WBUT 2014]*

| Job $i$       | 1 | 2 | 3 | 4 |
|---------------|---|---|---|---|
| Deadline $d_i$| 3 | 2 | 3 | 1 |
| Profit $g_i$  | 9 | 7 | 7 | 2 |

All the jobs are already arranged in the above matrix according to their profit.

Suppose, initially the solution vector is $S = \{\Phi\}$.
Highest profitable job is J1. So, we add Job J1 to the solution vector. i.e. $S = \{J1\}$.
Next, we add J2 to the solution vector. i.e. $S = \{J1, J2\}$.
Next, we add J3 to the solution vector. i.e. $S = \{J1, J2, J3\}$.

So, highest deadline is 3 and we can arrange maximum three jobs. The sequence of the jobs are $S = \{J1, J2, J3\}$ or $S = \{J2, J1, J3\}$ or $S = \{J3, J2, J1\}$ or $S = \{J2, J3, J1\}$ and the maximum profit is 23.

**18. What is negative weight-cycle? Write Bellman-Ford algorithm to find single source shortest distance of a directed graph.** *[WBUT 2015]*

**1st Part:**

Some instances of the single-source shortest-paths problem may include edges whose weights are negative. If the graph $G = (V, E)$ contains no negative weight cycles reachable from the source $s$, then for all $v \in V$, the shortest-path weight $\delta(s, v)$ remains well defined, even if it has a negative value. If the graph contains a negative-weight cycle reachable from $s$, however, shortest-path weights are not well defined. No path from $s$ to a vertex on the cycle can be a shortest path. If there is a negative weight cycle on some path from $s$ to $v$ we define $\delta(s, v) = -\infty$.

**2nd Part:** Refer to Question No. 11(a) of Short Answer Type Questions.

**19. a) Given the given matrices, using Parenthesization find the optimal sequence for the computation of multiplication operation. Write the algorithm also.** *[WBUT 2017]*

Refer to Question No. 8 of Short Answer Type Questions.

**19. b) Consider the following table that consists of some items with weight and cost values:**

| Items  | $I_1$ | $I_2$ | $I_3$ | $I_4$ | $I_5$ |
|--------|-------|-------|-------|-------|-------|
| Weight | 5     | 10    | 15    | 22    | 25    |
| Cost   | 30    | 40    | 45    | 77    | 90    |

**If the knapsack capacity $W = 60$ kg, find optimal solution using greedy criteria and write an algorithm for doing so.**

Here $v_i$ is the cost and $w_i$ is the weight of the each knapsack elements.
So, according to the Greedy Knapsack problem,
$$v_1/w_1 = 30/5 = 6$$
$$v_2/w_2 = 40/10 = 4$$
$$v_3/w_3 = 45/15 = 3$$
$$v_4/w_4 = 77/22 = 3.5$$
$$v_5/w_5 = 90/25 = 3.6$$

The knapsack capacity $W = 60$ kg.
We consider that some fraction $x_i$, $0 \le x_i \le 1$ of the object $i$ is kept into the knapsack.

The highest ratio is $v_1/w_1 = 6$ and insert one unit of $w_1 = 5$.
So, $x_1 = 1$, $x_1 \cdot w_1 = 5$, $x_1 \cdot v_1 = 30$ and $W = W - x_1 \cdot w_1 = 60 - 5 = 55$.

Next highest ratio is $v_2/w_2 = 4$ and insert one unit of $w_2 = 10$.
So, $x_2 = 1$, $x_2 \cdot w_2 = 10$, $x_2 \cdot v_2 = 40$ and $W = W - x_2 \cdot w_2 = 55 - 10 = 45$.

Next highest ratio is $v_5/w_5 = 3.6$ and insert one unit of $w_5 = 25$.
So, $x_5 = 1$, $x_5 \cdot w_5 = 25$, $x_5 \cdot v_5 = 90$ and $W = W - x_5 \cdot w_5 = 45 - 25 = 20$.

Next highest ratio is $v_4/w_4 = 3.5$ and insert fractional part of $w_4$.
So, $x_4 = 20/22 = 10/11$. So, $x_4 = 10/11$, $x_4 \cdot w_4 = (10/11) \times 22 = 20$, $x_4 \cdot v_4 = (10/11) \times 77 = 70$ and $W = W - x_4 \cdot w_4 = 20 - 20 = 0$.

So, the knapsack is full and then maximum profit is
$$= x_1 \cdot v_1 + x_3 \cdot v_3 + x_5 \cdot v_5 = 30 + 40 + 90 + 70 = 230.$$ `[as printed]`

**20. a) Write an algorithm for Merge Sort.** *[WBUT 2018, 2019]*

The procedure `MERGE-SORT(A, p, r)` sorts the elements in the sub-array $A[p \ldots r]$. If $p \ge r$, the sub-array has at most one element and it is already sorted. Otherwise, the divide step simply computes an index $q$ that partitions $A[p \ldots r]$ into two sub-arrays: $A[p \ldots q]$, containing $\lceil n/2 \rceil$ elements, and $A[q+1 \ldots r]$, containing $\lfloor n/2 \rfloor$ elements.

```
MERGE-SORT(A, p, r)
   if (p < r) then
   {
      q <- floor((p + r)/2)
      MERGE-SORT(A, p, q)
      MERGE-SORT(A, q + 1, r)
      MERGE(A, p, q, r)
   }

MERGE(A, p, q, r)
   n1 <- q - p + 1
   n2 <- r - q
   create arrays L[1 .. n1+1] and R[1 .. n2+1]
   for i <- 1 to n1 do
   {
      L[i] <- A[p + i - 1]
   }
   for j <- 1 to n2 do
   {
      R[j] <- A[q + j]
   }
   L[n1 + 1] <- oo
   R[n2 + 1] <- oo
   i <- 1
   j <- 1
   for k <- p to r do
   {
      if L[i] <= R[j] then
      {
         A[k] <- L[i]
         i <- i + 1
      }
      else
      {
         A[k] <- R[j]
         j <- j + 1
      }
   }
```

**20. b) Create a Max-Heap containing the following elements:** *[WBUT 2018, 2019]*
$$10, 20, 30, 40, 50, 60, 70, 80, 90, 100$$

The elements are inserted one at a time, swapping each new node upward (sift-up) whenever it exceeds its parent, until the max-heap property holds at every step. Inserting $10, 20, 30, 40, 50, 60, 70, 80, 90, 100$ in order produces the final Max-Heap:

*[diagram: a complete binary tree with root 100; 100's children are 90 and 60; 90's children are 70 and 80; 70's child is 10 and 40; 60's children are 20 and 50; the remaining leaf is 30.]*

The array representation of the final Max Heap is:

| 100 | 90 | 60 | 70 | 80 | 20 | 50 | 10 | 40 | 30 |
|-----|----|----|----|----|----|----|----|----|----|

**21. Write short notes on the following:**
**a) External sorting** *[WBUT 2015]*
**b) Heap Creation Technique** *[WBUT 2016]*
**c) 8 queens problem** *[WBUT 2003, 2006, 2013]*
**d) Hamiltonian cycle** *[WBUT 2017]*
**e) Heuristic Algorithm** *[WBUT 2018]*
**f) Bellman-Ford Algorithm** *[WBUT 2018]*

**a) External sorting:**

External sorting is a term for a class of sorting algorithms that can handle massive amounts of data. External sorting is required when the data being sorted do not fit into the main memory of a computing device (usually RAM) and instead they must reside in the slower external memory (usually a hard drive).

*Characteristics:*
- Processing large files, unable to fit into the main memory.
- Restrictions on the access, depending on the external storage medium. Primary costs — for input-output.
- Main concern: minimize the number of times each piece of data is moved between the external storage and the main memory.

*General strategy — Sort-Merge:*
- Break the file into blocks about the size of the internal memory.
- Sort these blocks.
- Merge sorted blocks.
- Usually several passes are needed, creating larger sorted blocks until the whole file is sorted.

*Basic Algorithm*

Assumptions:
- Four tapes: Two for input — Ta1, Ta2; Two for output — Tb1, Tb2.
- Initially the file is on Ta1.
- $N$ records on Ta1.
- $M$ records can fit in the memory.

**Step 1:** Break the file into blocks of size $M$, $\lfloor N/M \rfloor + 1$ blocks.

**Step 2:** Sorting the blocks:
read a block, sort, store on Tb1,
read a block, sort, store on Tb2,
read a block, sort, store on Tb1,
etc, alternatively writing on Tb1 and Tb2.
Each sorted block is called a run. Each output tape will contain half of the runs.

**Step 3:** Merge:

a. From Tb1, Tb2 to Ta1, Ta2.
Merge the first run on Tb1 and the first run on Tb2, and store the result on Ta1:
Read two records in main memory, compare, and store the smaller on Ta1.
Read the next record (from Tb1 or Tb2 — the tape that contained the record stored on Ta1) compare, store on Ta1, etc.
Merge the second run on Tb1 and the second run on Tb2, store the result on Ta2.
Merge the third run on Tb1 and the third run on Tb2, store the result on Ta1.
Etc, storing the result alternatively on Ta1 and Ta2.
Now Ta1 and Ta2 will contain sorted runs twice the size of the previous runs on Tb1 and Tb2.

b. From Ta1, Ta2 to Tb1, Tb2.
Merge the first run on Ta1 and the first run on Ta2, and store the result on Tb1.
Merge the second run on Ta1 and the second run on Ta2, store the result on Tb2.
Etc, merge and store alternatively on Ta1 and Ta2.

c. Repeat the process until only one run is left. This would be the sorted file.

*Analysis of two-way merge*

The algorithm requires $\lceil \log(N/M) \rceil$ passes plus the initial run-constructing pass. Each pass merges runs of length $r$ to obtain runs of length $2r$. The first runs are of length $M$. The last run would be of length $N$. Let's assume that $N$ is a multiple of $M$.

Initial situation:
1st tape contains $N$ records = $M$ records $\ast$ $N/M$ runs.

After storing the runs on two tapes, each contains half of the runs:
2 tapes $\ast$ $M$ records_per_run $\ast$ $(1/2)(N/M)$ runs = $N$ records.

After merge 1st pass — double the length of the runs, halve the number of the runs:
2 tapes $\ast$ $2M$ records_per_run $\ast$ $(1/2)(1/2)(N/M)$ runs = $N$ records.

After merge 2nd pass:
2 tapes $\ast$ $4M$ records_per_run $\ast$ $(1/4)(1/2)(N/M)$ runs = $N$ records.

After merge s-th pass:
2 tapes $\ast$ $2^s M$ records_per_run $\ast$ $(1/2^s)(1/2)(N/M)$ runs = $N$ records.

Thus the length of the runs after the s-th merge is $2^s M$.

After the last merge there is only one run equal to the whole file:
$$2^s M = N$$
$$2^s = N/M$$
$$s = \log(N/M)$$
If $s$ is the last merge, $s = \log(N/M)$.

At each pass we process $N$ records, so the complexity is $O(N \log(N/M))$.

**b) Heap Creation Technique:**

A complete binary tree is a binary tree in which every level, except possibly the last, is completely filled, and all nodes are as far left as possible. A Binary Heap is a Complete Binary Tree where items are stored in a special order such that value in a parent node is greater (or smaller) than the values in its two children nodes. The former is called as max heap and the latter is called min heap. The heap can be represented by binary tree or array. Since a Binary Heap is a Complete Binary Tree, it can be easily represented as array and array based representation is space efficient. If the parent node is stored at index $I$, the left child can be calculated by $2 \ast i + 1$ and right child by $2 \ast i + 2$ (assuming the indexing starts at 0).

*Example:* Min-Heap — the value of the root node is less than or equal to either of its children. Both trees are constructed using the same input and order of arrival. *[diagram]*

**Max Heap Construction Algorithm**

The procedure to create Min Heap is similar but we go for min values instead of max values. The technique to derive an algorithm for max heap is to insert one element at a time. At any point of time, heap must maintain its property. While insertion, it should be considered that the inserting a node in an already heapified tree.

Step 1 — Create a new node at the end of heap.
Step 2 — Assign new value to the node.
Step 3 — Compare the value of this child node with its parent.
Step 4 — If value of parent is less than child, then swap them.
Step 5 — Repeat step 3 & 4 until Heap property holds.

**c) 8 queens problem:**

8-queens problem is one of the common problems. This happens to be an appropriate example, where backtracking may be used very effectively. The problem is to set 8 queens in an $8 \times 8$ chessboard that no two queens will attack each other. So, no two queens are in the same row or same column or same diagonal. In general, it can be described as to place $n$ queens in an $n \times n$ chessboard in such a way that no two queens attack one another.

The solution space required is $[8^2 (8^2 - 1)(8^2 - 2) \ldots (8^2 - 7)]$ to solve this problem. So, in general we can say that for 8-queens problem, the solution space is $\prod_{i=0}^{7} (8^2 - i)$ and similarly, we can say for n-queens problem, that the required solution space is $\prod_{i=0}^{n-1} (n^2 - i)$. The condition for placing 8-queens in an $8 \times 8$ checkerboard, each queen can be placed in any square of each row or column, and there are 8 squares in each row and column, so we can place 8 queens in $8^2$ locations. But if we consider initially that 8 different queens are in 8 different rows then the solution space reduces to $8!$. Because, if we have placed queen 1 in row 1 then it takes any one of eight columns. But, there is an option for second queen being placed in just remaining 7 columns and third queen has remaining 6 columns to be placed in and so on. So, without loss of generality, we can place queen $q_i$ at row $i$ for $1 \le i \le 8$. Now, we can define solutions of this 8 queens problem as 8 tuples $(x_1, x_2 \ldots x_8)$, where each $x_i$ denotes the column index where queen $q_i$ is placed, so that no two queens are attacking each other.

Here, we have shown some instances of 8-queens problem in figure 1. *[diagram: Fig: 1 — placing 8 queens on an $8 \times 8$ checkerboard in two different ways.]*

Now, before discussing 8-queens problem, first we shall study 4-queens problem. Because it is easy to solve and is possible to draw path of backtracking for better comprehension.

**d) Hamiltonian cycle:**

Refer to Question No. 7 of Long Answer Type Questions.

**e) Heuristic Algorithm:**

A heuristic algorithm is one that is designed to solve a problem in a faster and more efficient fashion than traditional methods by sacrificing optimality, accuracy, precision, or completeness for speed. Heuristic algorithms often times used to solve NP-complete problems, a class of decision problems. In these problems, there is no known efficient way to find a solution quickly and accurately although solutions can be verified when given. Heuristics can produce a solution individually or be used to provide a good baseline and are supplemented with optimization algorithms. Heuristic algorithms are most often employed when approximate solutions are sufficient and exact solutions are necessarily computationally expensive.

The following are well-known examples of "intelligent" algorithms that use clever simplifications and methods to solve computationally complex problems.

**Swarm Intelligence:** Swarm Intelligence systems employ large numbers of agent interacting locally with one another and the environment. Swarm intelligence refers to the collective behavior of decentralized systems and can be used to describe both natural and artificial systems. Specific algorithms for this class of system include the particle swarm optimization algorithm, the ant colony optimization algorithm, and artificial bee colony algorithm. Each of the previous algorithms was inspired by the natural self-organized behavior of animals.

**Genetic Algorithms:** Genetic algorithms are a subset of a larger class of evolutionary algorithms that describe a set of techniques inspired by natural selection such as inheritance, mutation, and crossover. Genetic algorithms require both a genetic representation of the solution domain and a fitness function to evaluate the solution domain. The technique generates a population of candidate solutions and uses the fitness function to select the optimal solution by iterating with each generation. The algorithm terminates when the satisfactory fitness level has been reached for the population or the maximum generations have been reached.

**Artificial Neural Networks:** Artificial Neural Networks (ANNs) are models capable of pattern recognition and machine learning, in which a system analyzes a set of training data and is then able to categorize new examples and data. ANNs are influenced by animals' central nervous systems and brains, and are used to solve a wide variety of problems including speech recognition and computer vision.

**Support Vector Machines:** Support Vector Machines (SVMs) are models with training data used by artificial intelligence to recognize patterns and analyze data. These algorithms are used for regression analysis and classification purposes. Using example data, the algorithm will sort new examples into groupings. These SVMs are involved with machine learning, a subset of artificial intelligence where systems learn from data, and require training data before being capable of analyzing new examples.

**f) Bellman-Ford Algorithm:**

Refer to Question No. 11 of Short Answer Type Questions.
