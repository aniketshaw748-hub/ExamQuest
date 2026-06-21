# DAA — Chapter 6: Miscellaneous

> **Source:** *Design and Analysis of Algorithms* organizer (MAKAUT/WBUT solved papers, Popular Publications), book pages DAA-127 to DAA-139.
> **Fidelity note for downstream readers (incl. LLMs):**
> - All multiple-choice questions/answers, formulas, algorithms and diagrams below were **verified against the scanned page images**, not just OCR.
> - **Answers are transcribed exactly as printed in the source.** Any debatable printed answer is flagged inline as `[as printed]`; the source's letter is kept authoritative.
> - In worked solutions, any step illegible on the scan is marked `[illegible in source]` rather than guessed. Math is rendered in LaTeX; pseudocode is in fenced blocks.

---

## Multiple Choice Type Questions

**1.** Which of the following is solved by using Branch and Bound method? — *[WBUT 2015]*
a) Knapsack Problem   b) Hamiltonian Problem   c) Travelling Salesman Problem   d) 15-Puzzle Problem
**Answer: (d)**

**2.** By applying Strassen's algorithm we can multiply two $n \times n$ matrices in — *[WBUT 2017]*
a) $O(n^3)$ time   b) $O(n)$ time   c) $O(n^n)$ time   d) $O\!\left(n^{\log 7}\right)$ time
**Answer: (d)**

---

## Short Answer Type Questions

**1. Prove that if $f(n) = a_m n^m + a_{m-1}n^{m-1} + \cdots + a_1 n + a_0$, then $f(n) = O(n^m)$.** *[WBUT 2007]*

Let
$$p(n) = a_m n^m + a_{m-1}n^{m-1} + \cdots + a_2 n^2 + a_1 n + a_0$$
$$p(n) \le \sum_{i=0}^{m} |a_i|\, n^i \le n^m \sum_{i=0}^{m} |a_i|\, n^{i-m} \le n^m \sum_{i=0}^{m} |a_i| \quad \text{where } n \ge 1.$$
So,
$$p(n) \le n^m \sum_{i=0}^{m} |a_i| = n^m\,(a_0 + a_1 + \cdots + a_m) = n^m \cdot A,$$
where $A = (a_0 + a_1 + \cdots + a_m)$.
Now, $p(n) \le A \cdot n^m$, which shows that $p(n) = O(n^m)$.

**2. Write down DFT algorithm and explain its method of execution.** *[WBUT 2008]*

We wish to evaluate a polynomial
$$A(x) = \sum_{j=0}^{n-1} a_j x^j$$
of degree-bound $n$ at $\omega_n^0, \omega_n^1, \ldots, \omega_n^{n-1}$ (that is, at the $n$ complex $n$th roots of unity). Without loss of generality, we assume that $n$ is a power of 2, since a given degree-bound can always be raised — we can always add new high-order zero coefficients as necessary. We assume that $A$ is given in coefficient form:
$$a = (a_0, a_1, \ldots, a_{n-1}).$$
Let us define the results $y_k$, for $k = 0, 1, \ldots, n-1$, by
$$y_k = A(\omega_n^k) = \sum_{j=0}^{n-1} a_j \,\omega_n^{kj}.$$
The vector $y = (y_0, y_1, \ldots, y_{n-1})$ is the Discrete Fourier Transform (DFT) of the coefficient vector $a = (a_0, a_1, \ldots, a_{n-1})$. We also write $y = \mathrm{DFT}_n(a)$.

**3. Write the FFT algorithm and find the computational complexity of this algorithm.** *[WBUT 2019]*

Refer to Question No. 4(b) of Long Answer Type Questions. *(See Long Answer Q4 (a) FFT below.)*

**4. What is meant by LUP decomposition?** *[WBUT 2013]*

The idea behind LUP decomposition is to find three $n \times n$ matrices $L$, $U$, and $P$ such that
$$PA = LU$$
where,
- $L$ is a unit lower-triangular matrix,
- $U$ is an upper-triangular matrix, and
- $P$ is a permutation matrix.

We call matrices $L$, $U$, and $P$ satisfying $PA = LU$ a LUP decomposition of the matrix $A$. We shall show that every nonsingular matrix $A$ possesses such a decomposition.

The advantage of computing an LUP decomposition for the matrix $A$ is that linear systems can be solved more readily when they are triangular, as is the case for both matrices $L$ and $U$. Having found an LUP decomposition for $A$, we can solve the equation $Ax = b$ by solving only triangular linear systems, as follows.

Multiplying both sides of $Ax = b$ by $P$ yields the equivalent equation $PAx = Pb$. Using our decomposition, we obtain
$$LUx = Pb.$$
We can now solve this equation by solving two triangular linear systems. Let us define $y = Ux$, where $x$ is the desired solution vector. First, we solve the lower-triangular system $Ly = Pb$ for the unknown vector $y$ by a method called "forward substitution." Having solved for $y$, we then solve the upper-triangular system
$$Ux = y$$
for the unknown $x$ by a method called "back substitution." The vector $x$ is our solution to $Ax = b$, since the permutation matrix $P$ is invertible:
$$Ax = P^{-1}LUx = P^{-1}Ly = P^{-1}Pb = b.$$

**5. Discuss Strassen's matrix multiplication procedure and show that the time complexity is reduced from the conventional multiplication.** *[WBUT 2017]*

Refer to Question No. 1 (1st & 2nd Part) of Long Answer Type Questions.

**6. Write a recursive algorithm for finding maximum and minimum from a list of elements. Also find the complexity of your algorithm.** *[WBUT 2018]*

Refer to Question No. 2 of Long Answer Type Questions.

---

## Long Answer Type Questions

**1. Discuss the procedure for Strassen's matrix multiplication to evaluate the product of $n \times n$ matrices. Find the resulting recurrence relation for the same and analyze its time-complexity. Is this method an improvement over the conventional matrix multiplication method? If so, why?** *[WBUT 2007, 2011, 2012, 2013]*

We have seen that the divide-and-conquer approach can reduce the number of one-digit multiplications in multiplying two integers; we should not be surprised that a similar feat can be accomplished for multiplying matrices. Such an algorithm was published by V. Strassen in 1969. The principal insight of the algorithm lies in the discovery that we can find the product $C$ of two 2-by-2 matrices $A$ and $B$ with just seven multiplications as opposed to the eight required by the brute-force algorithm. This is accomplished by using the following formulas:

$$\begin{bmatrix} c_{00} & c_{01} \\ c_{10} & c_{11} \end{bmatrix} = \begin{bmatrix} a_{00} & a_{01} \\ a_{10} & a_{11} \end{bmatrix} * \begin{bmatrix} b_{00} & b_{01} \\ b_{10} & b_{11} \end{bmatrix} = \begin{bmatrix} m_1 + m_4 - m_5 + m_7 & m_3 + m_5 \\ m_2 + m_4 & m_1 + m_3 - m_2 + m_6 \end{bmatrix}$$

where,
$$m_1 = (a_{00} + a_{11}) * (b_{00} + b_{11})$$
$$m_2 = (a_{10} + a_{11}) * b_{00}$$
$$m_3 = a_{00} * (b_{01} - b_{11})$$
$$m_4 = a_{11} * (b_{10} - b_{00})$$
$$m_5 = (a_{00} + a_{01}) * b_{11}$$
$$m_6 = (a_{10} - a_{00}) * (b_{00} + b_{01})$$
$$m_7 = (a_{01} - a_{11}) * (b_{10} + b_{11})$$

Thus, to multiply two 2-by-2 matrices, Strassen's algorithm makes seven multiplications and 18 additions/subtractions, whereas the brute-force algorithm requires eight multiplications and four additions. These numbers should not lead us to multiplying 2-by-2 matrices by Strassen's algorithm. Its importance stems from its *asymptotic* superiority as matrix order $n$ goes to infinity.

Let $A$ and $B$ be two $n$-by-$n$ matrices where $n$ is a power of two. (If $n$ is not a power of two, matrices can be padded with rows and columns of zeros.) We can divide $A$, $B$, and their product $C$ into four $n/2$-by-$n/2$ sub-matrices each as follows:

$$\begin{bmatrix} C_{00} & C_{01} \\ C_{10} & C_{11} \end{bmatrix} = \begin{bmatrix} A_{00} & A_{01} \\ A_{10} & A_{11} \end{bmatrix} * \begin{bmatrix} B_{00} & B_{01} \\ B_{10} & B_{11} \end{bmatrix}$$

It is not difficult to verify that one can treat these sub-matrices as numbers to get the correct product. For example, $C_{00}$ can be computed either as $A_{00} * B_{00} + A_{01} * B_{10}$ or as $M_1 + M_4 - M_5 + M_7$, where $M_1, M_4, M_5, M_7$ are found by Strassen's formulas, with the numbers replaced by the corresponding sub-matrices. If the seven products of $n/2$-by-$n/2$ matrices are computed recursively by the same method, we have Strassen's algorithm for matrix multiplication.

Let us evaluate the asymptotic efficiency of this algorithm. If $M(n)$ is the number of multiplications made by Strassen's algorithm in multiplying two $n$-by-$n$ matrices (where $n$ is a power of 2), we get the following recurrence relation for it:
$$M(n) = 7M(n/2) \quad \text{for } n > 1, \quad M(1) = 1.$$
Since $n = 2^k$,
$$M(2^k) = 7M(2^{k-1}) = 7[7M(2^{k-2})] = 7^2 M(2^{k-2}) = \cdots = 7^i M(2^{k-i}) = \cdots = 7^k M(2^{k-k}) = 7^k.$$
Since $k = \log_2 n$,
$$M(n) = 7^{\log_2 n} = n^{\log_2 7} \approx n^{2.807}.$$
Since this saving in the number of multiplications was achieved at the expense of making extra additions, we must check the number of additions $A(n)$ made by Strassen's algorithm. To multiply two matrices of order $n > 1$, the algorithm needs to multiply seven matrices of order $n/2$ and make 18 additions of matrices of size $n/2$; when $n = 1$, no additions are made since two numbers are simply multiplied. These observations yield the following recurrence relation:
$$A(n) = 7A(n/2) + 18(n/2)^2 \quad \text{for } n > 1, \quad A(1) = 0.$$
Though one can obtain a closed-form solution to this recurrence, here we simply establish the solution's order of growth. According to the Master Theorem, $A(n) \in \Theta\!\left(n^{\log_2 7}\right)$. In other words, the number of additions has the same order of growth as the number of multiplications. This puts Strassen's algorithm in $\Theta\!\left(n^{\log_2 7}\right)$, which is a better efficiency class than $\Theta(n^3)$ of the brute-force method.

**2. The solution of recursive MAXMIN problem is based on some assumptions. Briefly state the assumptions and its effect on the algorithm in comparison the reality.** *[WBUT 2011]*

The divide and conquer algorithm we develop for this problem is motivated by the following observation. Suppose we knew the maximum and minimum element in both of the roughly $n/2$ sized partitions of an $n$-element ($n > 2$) list. Then in order to find the maximum and minimum element of the entire list we simply need to see which of the two maximum elements is the larger, and which of the two minimums is the smaller. We assume that in a 1-element list the sole element is both the maximum and the minimum element. With this in mind we present the following pseudo-code for the max/min problem.

```
procedure maxmin(A[1...n] of numbers) -> (min, max)
begin
    if (n == 1)
        return (A[1], A[1])
    else if (n == 2)
        if ( A[1] < A[2] )
            return (A[1], A[2])
        else
            return (A[2], A[1])
    else
        (max_left, min_left)  = maxmin(A[1...(n/2)])
        (max_right, min_right) = maxmin(A[(n/2 +1)...n])
        if (max_left < max_right)
            max = max_right
        else
            max = max_left
        if (min_left < min_right)
            max = min_left
        else
            min = min_right
        return (min, max)
end
```
> *(Source typo retained: in the first branch of the second `if`, the source prints `max = min_left` where `min = min_left` is intended.)*

Let $T(n)$ be the number of comparisons performed by the maxmin procedure. When $n = 1$ clearly there are no comparisons. Thus we have $T(1) = 0$. Similarly, $T(2) = 1$. Otherwise when $n > 2$ clearly
$$T(n) = 2T(n/2) + 2$$
since maxmin performs two recursive calls on partitions of roughly half of the total size of the list and then makes two further comparisons to sort out the max/min for the entire list. (Of course, to be pedantic there should be floors and ceilings in the recursive function, and something should be said about the fact that the following proof is only for $n$ which are powers of two and how this implies the general result. This is omitted.)

We next show that $T(n) = \left\lceil \dfrac{3n}{2} \right\rceil - 2$ for all $n$ which are powers of 2. The proof is by induction on $n$.

**Base Case:**
$(n = 2)$: from the recursive definition we have that $T(2) = 1$. Similarly, we have that
$$\left\lceil \frac{3 \times 2}{2} \right\rceil - 2 = 3 - 2 = 1,$$
thus verifying the base case.

**Inductive Step:**
Let $n > 2$ and $n = 2^j$ for some integer $j \ge 2$. Assume that $T(k) = \left\lceil \dfrac{3k}{2} \right\rceil - 2$ for all $k = 2^j$ for some integer $j \ge 2$ and $k < n$. We want to show that this assumption implies that $T(n) = \left\lceil \dfrac{3n}{2} \right\rceil - 2$ for all positive $n$ which are powers of 2.

We start with the given recurrence
$$T(n) = 2T(n/2) + 2 = 2\left( \left\lceil \frac{3(n/2)}{2} \right\rceil - 2 \right) + 2$$
by the inductive hypothesis with $k = n/2$. This gives
$$T(n) = 2\left\lceil \frac{3(n/2)}{2} \right\rceil - 4 + 2 = \left\lceil \frac{3n}{2} \right\rceil - 2$$
showing the desired result. By the principle of mathematical induction we are done.

**3. Explain how do you attempt to solve 15-puzzle problem using branch and bound strategy. Draw a portion of the state space generated by it.** *[WBUT 2012, 2019]*

The 15-puzzle has 15 tiles or squares, which are numbered from 1 to 15 that are placed in a $4 \times 4$ box leaving one position out of the 16 empty and which lay in a square frame. The goal is to reposition the tiles from a given arbitrary starting arrangement by sliding them one at a time into the configuration shown below in figure 1. The only legal moves are ones in which a tile adjacent to the empty spot (ES) is moved to ES. Each move creates an arrangement of the tiles. These arrangements are called the states of tile puzzle. For some initial arrangements, this goal arrangement is possible (admissible), but for others, it may not (inadmissible).

*Fig. 1 — Initial state (a $4\times4$ grid with tiles 11, 5, 12, 14 / 15, 2, _, 9 / 13, 7, 6, 1 / 3, 10, 4, 8 and one empty square) and Goal state (1, 2, 3, 4 / 5, 6, 7, 8 / 9, 10, 11, 12 / 13, 14, 15, _).* `[diagram]`

Figure 2 shows the procedure and orders how we can arrange the tiles in such a way to reach the goal state.

*Fig. 2 — Step by step movement of squares to arrange the goal state, shown as a sequence of $4\times4$ grids progressing toward the ordered goal configuration (1–15 with the last cell empty).* `[diagram]`

**Condition to reach the goal state from initial state**

We first assign an index (an integer number) to each tile of the frame. The numbering starts from top position of the frame and move row wise from left to right. So, the goal state of above figure 1 shows the numbering of the each tile in the frame and empty position is numbered by 16.

Let $k$ be the position of tile $k$ according to the frame position of goal state and $P(k)$ is the position index of the tile $k$ in the initial position without considering the empty tile, i.e. tile 16.

Now, let $L(k)$ be the number of tiles $t$ where,
$$t < k \qquad \ldots(1)$$
$$\text{and } P(k) > P(t) \qquad \ldots(2)$$

State space is all the possible combination of the tiles within the frame. So, all the possible movements of the tiles are in the state space. Naturally, goal state is also present in the state space, if the goal state can be reached from the initial state.

Now, we can construct the tree of state space starting from initial state. Here all the nodes of the tree represent one of the possible movements from the initial state. In the state space of figure 3, we consider the movement of different tiles with respect to the empty tile.

*Fig. 3 — State space of 15-puzzle problem starting from initial state: the root grid branches into four child states labelled Right, Left, Up and Down, each a $4\times4$ grid obtained by sliding a tile into the empty spot.* `[diagram]`

The above state space denotes the all possible arrangement of the tiles within the frame starting from initial state. We can remove those states from the state space which are not reachable to the goal state. So, only those leave nodes are to be considered from a parent node, which can step forward to the goal state, i.e. those configurations which satisfy
$$\sum_{i=1}^{16} L(k) + e \text{ is even.}$$

**4. Write short notes on the following:**
**a) FFT** *[WBUT 2004, 2009]*
**b) Strassen's matrix multiplication** *[WBUT 2008, 2012, 2014]*
**c) Amortized Analysis** *[WBUT 2013]*
**d) 15-puzzle problem** *[WBUT 2013]*

**a) FFT:**

There are several ways to calculate the Discrete Fourier Transform (DFT), such as solving simultaneous linear equations or the correlation method. The Fast Fourier Transform (FFT) is another method for calculating the DFT. While it produces the same result as the other approaches, it is incredibly more efficient, often reducing the computation time.

There exists an efficient algorithm to compute the Discrete Fourier Transform and its inverse; it is called Fast Fourier Transform (FFT). So, the Fast Fourier Transform has the following properties:
- The FFT is based on the divide and conquer principle.
- It has the time complexity $O(n \log n)$, instead of $O(n^2)$ of DFT.
- It is only applicable for composite sizes, i.e. $n = n_1 n_2$ (and often implemented for powers of 2).

If $n$ is even, we can divide a polynomial
$$p(x) = a_0 + a_1 x^1 + a_2 x^2 + \cdots + a_{n-1}x^{n-1}$$
into polynomials
$$p^{\text{even}}(x) = a_0 + a_2 x + a_4 x^2 + \cdots + a_{n-2}x^{(n/2)-1}$$
$$p^{\text{odd}}(x) = a_1 + a_3 x + a_5 x^2 + \cdots + a_{n-1}x^{(n/2)-1}$$
And we can write
$$p(x) = p^{\text{even}}(x^2) + x \cdot p^{\text{odd}}(x^2).$$

**Fast Fourier Transform (FFT) algorithm.**
**Input:** An $n$-length coefficient vector $a = [a_0, a_1, \ldots, a_n]$ and a primitive $n$-th root of unity $\omega$, where $n$ is a power of 2.
**Output:** A vector $y$ of values of the polynomial for $a$ at the $n$-th roots of unity.

```
FFT (a, ω)
{
    Step 1     if n = 1 then
    Step 1.1       return y = a;
    Step 2     x ← ω⁰
               // x will store powers of ω, so initially x = 1.
               // Divide Step, which separates even and odd indices
    Step 3     a^even ← [a₀, a₂, a₄, ..., a_{n-2}]
    Step 4     a^odd  ← [a₁, a₃, a₅, ..., a_{n-1}]
               // Recursive calls with ω² as (n/2)-th root of unity, by the
               // reduction property
    Step 5     y^even ← FFT( a^even , ω² )
    Step 6     y^odd  ← FFT( a^odd , ω² )
               // Combine Step using x = ωⁱ
    Step 7     for i ← 0 to (n/2)-1 do
    Step 7.1       yᵢ      ← yᵢ^even + x·yᵢ^odd
    Step 7.2       y_{i+n/2} ← yᵢ^even − x·yᵢ^odd
               // Use reflexive property
    Step 7.3       x ← x·ω
    Step 8     return y;
}
```

**b) Strassen's matrix multiplication:**

Strassen's matrix multiplication algorithm consists in reducing the number of multiplication at the expense of increasing the number of additions and subtractions. In sort, this algorithm uses 7 multiplications and 18 additions of $n/2 \times n/2$ matrices.

Let
$$A = \begin{bmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{bmatrix} \quad \text{and} \quad B = \begin{bmatrix} b_{11} & b_{12} \\ b_{21} & b_{22} \end{bmatrix}$$
be two $2 \times 2$ matrices. To compute the matrix product
$$C = \begin{bmatrix} c_{11} & c_{12} \\ c_{21} & c_{22} \end{bmatrix} = \begin{bmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{bmatrix}\begin{bmatrix} b_{11} & b_{12} \\ b_{21} & b_{22} \end{bmatrix}$$
We first compute the following products:
$$d_1 = (a_{11} + a_{22})(b_{11} + b_{22})$$
$$d_2 = (a_{21} + a_{22})b_{11}$$
$$d_3 = a_{11}(b_{12} - b_{22})$$
$$d_4 = a_{22}(b_{21} - b_{11})$$
$$d_5 = (a_{11} + a_{12})b_{22}$$
$$d_6 = (a_{21} - a_{11})(b_{11} + b_{12})$$
$$d_7 = (a_{21} - a_{22})(b_{21} + b_{22})$$

Next, we compute $C$ from the equation
$$C = \begin{bmatrix} d_1 + d_4 - d_5 + d_7 & d_3 + d_5 \\ d_2 + d_4 & d_1 + d_3 - d_2 + d_6 \end{bmatrix}$$
Since commutatively of scalar products are not used here, the above formula holds for matrices as well.

**Time complexity:** The number of additions used is 18 and the number of multiplications is 7. This gives rise to the following recurrence for the running time.
$$T(n) = \begin{cases} m & \text{if } n = 1 \\ 7T(n/2) + 18(n/2)^2 a & \text{if } n \ge 2, \end{cases}$$
$$T(n) = \begin{cases} m & \text{if } n = 1 \\ 7T(n/2) + (9a/2)n^2 & \text{if } n \ge 2, \end{cases}$$
Assuming that $n$ is a power of 2, then we can write,
$$T(n) = \left(m + \frac{(9a/2)2^2}{7 - 2^2}\right)n^{\log 7} - \frac{(9a/2)2^2}{7 - 2^2}n^2 = mn^{\log 7} + 6an^{\log 7} - 6an^2$$
i.e., the time complexity is $\Theta\!\left(n^{\log 7}\right) = O(n^{2.81})$.

**c) Amortized Analysis:**

Amortized analysis is a tool for analyzing algorithms that perform a sequence of similar operations. It can be used to show that the average cost of an operation is small, if one averages over a sequence of operations, even though a single operation within the sequence might be expensive. In a sequence of operations the worst case does not occur often in each operation — some operations may be cheap, some may be expensive. Therefore, a traditional worst-case per operation analysis can give overly pessimistic bound. The amortized approach is going to assign an "artificial cost" to each operation in the sequence, called the amortized cost of an operation. It requires that the total real cost of the sequence should be bounded by the total of the amortized costs of all the operations.

Three methods are used in amortized analysis:
1. Aggregate Method (or brute force)
2. Accounting Method (or the banker's method)
3. Potential Method (or the physicist's method)

**d) 15-Puzzle Problem:** Refer to Question No. 4 of Long Answer Type Questions. *(See Long Answer Q3 above.)*

---

*End of Chapter 6. DAA chapters: 1 — Introduction; 2 — Fundamental Algorithmic Strategies; 3 — Graph and Tree Traversal Algorithms; 4 — Tractable and Intractable Problems; 5 — Approximation Algorithms; 6 — Miscellaneous.*
