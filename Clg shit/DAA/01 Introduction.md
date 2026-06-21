# DAA — Chapter 1: Introduction

> **Source:** *Design and Analysis of Algorithms* organizer (MAKAUT/WBUT solved papers, Popular Publications), book pages DAA-2 to DAA-23.
> **Fidelity note for downstream readers (incl. LLMs):**
> - Concept summary and all multiple-choice questions/answers below were **verified against the scanned page images**, not just OCR.
> - **Answers are transcribed exactly as printed in the source.** A few printed answers are debatable by standard CS results (flagged inline as `[as printed]`); the source's letter is kept authoritative.
> - In worked solutions, any step illegible on the scan is marked `[illegible in source]` rather than guessed. Math is rendered in LaTeX.

---

## Chapter at a Glance

- **Algorithms** are classified into two major groups: one is an *analytic* approach of recognizing individual characters, while the other is a *holistic* approach. In some non-heuristic studies, analysis consists of two phases:
  1. **A priori Analysis:** By a theoretical method we calculate the computing time and space required by an algorithm by formulating a function, and it is independent of the programming language and the machine.
  2. **A posteriori Analysis:** In some cases we cannot calculate the time and space requirement of an algorithm using a theoretical method. Then we observe its execution and measure the time and space actually used by the algorithm. This is called a posteriori analysis.

- **Space complexity:** It is defined as how much space is required to execute an algorithm. The (space) complexity of an algorithm (for a given input) is the number of elementary objects that the algorithm needs to store during its implementation. This number is computed with respect to the size $n$ of the input data. This space is generally computer memory space. The space complexity of an algorithm $X$ can be defined as
  $$S(X) = C(X) + I(X)$$
  where $C(X)$ is the required constant space and $I(X)$ is the instantaneous space requirement for algorithm $X$.

- **Time complexity** of an algorithm is the measure of total time required to execute that algorithm. Time complexity is independent of computer, programming language, programmer, and other implementation details. Usually it depends on the size of the input. The (time) complexity of an algorithm (for a given input) is the number of elementary instructions that this algorithm implements.

- **Asymptotic Notations:** The algorithm that takes minimum time to execute, given an input of specific size, is asymptotically the more efficient algorithm.
  - **Worst-case complexity:** the complexity of an algorithm when the input is the worst possible with respect to complexity.
  - **Average-case complexity:** the complexity of an algorithm averaged over all the possible inputs.

- **Master's Theorem:** The Master Theorem applies to recurrences of the form
  $$T(n) = aT(n/b) + f(n)$$
  where $a \ge 1$ and $b > 1$ are constants and $f(n)$ is an asymptotically positive function. There are 3 cases:
  1. If $f(n) = O\!\left(n^{\log_b a - \varepsilon}\right)$ for some constant $\varepsilon > 0$, then $T(n) = \Theta\!\left(n^{\log_b a}\right)$.
  2. If $f(n) = \Theta\!\left(n^{\log_b a}\log^k n\right)$ with $k \ge 0$, then $T(n) = \Theta\!\left(n^{\log_b a}\log^{k+1} n\right)$.
  3. If $f(n) = \Omega\!\left(n^{\log_b a + \varepsilon}\right)$ with $\varepsilon \ge 0$ and $f(n)$ satisfies the regularity condition, then $T(n) = \Theta(f(n))$.

  **Regularity condition:** $a\,f(n/b) \le c\,f(n)$ for some constant $c < 1$ and all sufficiently large $n$.

- **Recursion-tree Method:** Draw a recurrence tree and calculate the time taken by every level of the tree; finally, sum the work done at all levels. To draw the recurrence tree, start from the given recurrence and keep drawing until a pattern among levels is found. The pattern is typically an arithmetic or geometric series.

- **Substitution Method:** Make a guess for the solution and then use mathematical induction to prove the guess correct or incorrect. Two steps: (i) guess the form of the solution; (ii) use mathematical induction to find the constants in the form and show that the solution works.

---

## Multiple Choice Type Questions

**1.** Lower bound for any comparison sort is — *[WBUT 2006, 2007, 2008, 2009, 2017]*
a) $O(\log n)$   b) $O(n^2)$   c) $O(n\log n)$   d) $O(n^2\log n)$
**Answer: (c)**

**2.** $o(g(n))$ [read as "small oh of $g(n)$"] is — *[WBUT 2006, 2008, 2009, 2012]*
a) Asymptotically loose   b) Asymptotically tight   c) Same as big-oh   d) none of these
**Answer: (a)**

**3.** Time complexity for the recursive relation $T(n) = 2T(\sqrt{n}) + 1$ is — *[WBUT 2006, 2008, 2013]*
a) $\Theta(n^2)$   b) $\Theta(\log n)$   c) $\Theta(n\log n)$   d) $\Theta(n)$
**Answer: (b)**

**4.** Tight bound for building a max-heap algorithm will be — *[WBUT 2006, 2015]*
a) $O(\log n)$   b) $O(n^2)$   c) $O(n\log n)$   d) $O(n)$
**Answer: (c)** `[as printed]`

**5.** $\Omega$-Notation provides an asymptotic — *[WBUT 2006, 2015, 2017]*
a) Upper bound   b) Lower bound   c) One that is sandwiched between the two bounds   d) None of these
**Answer: (b)**

**6.** Time complexity for the recurrence relation $T(n) = 2T(n/2) + n$ is — *[WBUT 2007, 2018, 2019]*
a) $O(\log n)$   b) $O(n\log n)$   c) $O(n)$   d) $O(n^2)$
**Answer: (b)**

**7.** The Big-O notation of the expression $f(n) = n\log n + n^2 + c^{\log n}$ is — *[WBUT 2008, 2012]*
a) $O(n)$   b) $O(n^2)$   c) $O(n\log n)$   d) $O(e^{\log n})$
**Answer: (b)**

**8.** 'Small o' of $g(n)$ is — *[WBUT 2010, 2012]*
a) asymptotically loose   b) asymptotically tight   c) same as 'Big O'   d) none of these
**Answer: (d)** `[as printed]`

**9.** The time factor when determining the efficiency of an algorithm is measured by — *[WBUT 2010, 2016]*
a) counting microseconds   b) counting the number of key operations   c) counting the number of statements   d) counting the kilobyte algorithm
**Answer: (b)**

**10.** Which of the following is used to depict the working of an algorithm? — *[WBUT 2010]*
a) Flowchart   b) Pseudo code   c) Source code   d) All of these
**Answer: (d)**

**11.** The running time of an algorithm $T(n)$, where $n$ is the input size, is given by $T(n) = 8T(n/2) + qn$ if $n > 1$ and $T(n) = p$ if $n = 1$, where $p$ and $q$ are constants. The order of this algorithm is — *[WBUT 2011]*
a) $\Theta(n^2)$   b) $\Theta(n^{\log n})$   c) $\Theta(n^3)$   d) $\Theta(n^{\log n})$
**Answer: (c)**

**12.** Complexity of the recurrence relation $T(n) = 8T\!\left(\dfrac{n}{2}\right) + n^2$ is — *[WBUT 2012, 2016]*
a) $O(n)$   b) $O(n^2)$   c) $O(\log_2 n)$   d) $O(n^3)$
**Answer: (b)** `[as printed]`

**13.** Complexity of the Tower of Hanoi problem is — *[WBUT 2012]*
a) $O(n)$   b) $O(n^2)$   c) $O(2^n)$   d) none of these
**Answer: (c)**

**14.** Consider the following three claims — *[WBUT 2013]*
I) $(n+k)^m = O(n^m)$ where $k$ and $m$ are constants.
II) $2^{n+1} = O(2^n)$
III) $2^{2n+1} = O(2^n)$
Which of the following claims are correct?
a) I and II   b) I and III   c) II and III   d) I, II and III
**Answer: (d)** `[as printed]`

**15.** Which of the following functions is asymptotically smallest? — *[WBUT 2013]*
a) $2^n$   b) $n^{\log n}$   c) $n^{\sqrt{n}}$   d) $\sqrt[3]{\log n}$
**Answer: (d)**

**16.** An algorithm is made up of two independent time complexities $f(n)$ and $g(n)$. Then the complexity of the algorithm is of the order of — *[WBUT 2014]*
a) $f(n)\times g(n)$   b) $\max(f(n), g(n))$   c) $\min(f(n), g(n))$   d) $f(n)+g(n)$
**Answer: (b)**

**17.** Which of the following is used to depict the working of an algorithm? — *[WBUT 2014]*
a) flowchart   b) pseudo code   c) source code   d) all of these
**Answer: (d)**

**18.** The space requirement for the quick sort method depends on the — *[WBUT 2015]*
a) number of nested recursive calls   b) size of the stack   c) both (a) and (b)   d) none of these
**Answer: (c)**

**19.** Which of the following property/properties is/are necessary for an algorithm? — *[WBUT 2017]*
a) Definiteness   b) Effectiveness   c) Both (a) and (b)   d) None of these
**Answer: (c)**

**20.** Time complexity for the recurrence relation $T(n) = 2T(n-1) + c$ is — *[WBUT 2017]*
a) $O(n^2)$   b) $O(\log n)$   c) $O(n\log n)$   d) $O(2^n)$
**Answer: (b)** `[as printed]`

**21.** The Big-O notation of the expression $f(n) = n\log_2 n + n^2 + e^{\log_2 n}$ is — *[WBUT 2018, 2019]*
a) $O(n^2)$   b) $O(\log_2 n)$   c) $O(n\log_2 n)$   d) $O(e^{\log_2 n})$
**Answer: (a)**

**22.** Time complexity of quick sort in the worst case is — *[WBUT 2019]*
a) $O(n)$   b) $O(\log n)$   c) $O(n^2)$   d) $O(n\log n)$
**Answer: (d)** `[as printed]`

---

## Short Answer Type Questions

**1. Prove that $n! = O(n^n)$.** *[WBUT 2008, 2017]*

The factorial is defined for integers $n \ge 0$ as
$$n! = \begin{cases} 1 & \text{if } n = 0 \\ n\cdot(n-1)! & \text{if } n > 0 \end{cases}$$
Thus $n! = 1\cdot 2\cdot 3\cdots n$. A weak upper bound on the factorial function is
$$n! \le n^n \qquad \ldots(1)$$
since each of the $n$ terms in the factorial product is at most $n$. Stirling's approximation,
$$n! = \sqrt{2\pi n}\left(\frac{n}{e}\right)^n\left(1 + \Theta\!\left(\tfrac{1}{n}\right)\right),$$
where $e$ is the base of the natural logarithm, gives a tighter upper bound and a lower bound as well. So from equation (1), with $f(n) = n!$ and $g(n) = n^n$, by the definition of $O$-notation, $f(n) = n! \le n^n = O(n^n)$ where $n > 0$.

**2. Why is the Recursion-Tree method better than the Substitution method for solving a recurrence relation? Find the asymptotic upper bound of the recurrence $T(n) = T(n/4) + T(n/2) + \Theta(n^2)$ with the help of the recursion-tree method.** *[WBUT 2014]*

- **Substitution Method:** Guess the form of the solution, then use mathematical induction to prove the guess correct or incorrect (two steps: guess the form; use induction to find constants and show the solution works).
- **Recursion-Tree Method:** Draw a recurrence tree and calculate the time taken at every level; sum the work over all levels. Start from the given recurrence and keep drawing until a pattern (typically an arithmetic or geometric series) emerges.

The main problem of the substitution method is finding a good guess; without it, the correct solution may not be found. The recurrence-tree method instead expands from the initial source, so it is better when no good guess is available.

For $T(n) = T(n/4) + T(n/2) + \Theta(n^2)$, summing the level costs gives a decreasing geometric series:
$$T(n) = n^2\left[1 + \tfrac{5}{16} + \left(\tfrac{5}{16}\right)^2 + \left(\tfrac{5}{16}\right)^3 + \cdots\right] = \Theta(n^2)\quad\text{[geometric series]}.$$

**3. State the Master theorem and find the time complexity for the recurrence $T(n) = 2T(n/4) + \sqrt{n}$.** *[WBUT 2015]*

*Master theorem:* as stated in the Chapter at a Glance above.

Here $a = 2$, $b = 4$, $f(n) = \sqrt{n} = n^{1/2}$, and $n^{\log_b a} = n^{\log_4 2} = n^{1/2}$. Since $f(n) = \Theta\!\left(n^{\log_b a}\right)$ (case 2 with $k = 0$):
$$T(n) = \Theta\!\left(n^{1/2}\log n\right) = \Theta(\sqrt{n}\,\log n).$$

**4. Solve the following recurrence relation using a generating function: $a_n = 6a_{n-1} - 11a_{n-2} + 6a_{n-3}$ for $n \ge 3$, with $a_0 = 1,\ a_1 = -1,\ a_2 = 1$.** *[WBUT 2016]*

The characteristic factorisation gives $6x^3 - 11x^2 + 6x - 1 = (x-1)(2x-1)(3x-1)$, leading to a partial-fraction form
$$g(x) = \frac{A}{1-x} + \frac{B}{1-2x} + \frac{C}{1-3x},$$
with $A = 6,\ B = -8,\ C = 3$. Hence
$$a_n = 6 - 8\cdot 2^n + 3\cdot 3^n \quad \text{for all } n \ge 0.$$
> *(The source's intermediate algebra on DAA-8 is partially obscured by the watermark; the factorisation, partial-fraction constants, and final closed form above are the legible, verified results.)*

**5. Prove that if $f(n) = a_m n^m + a_{m-1}n^{m-1} + \cdots + a_1 n + a_0$, then $f(n) = O(n^m)$.** *[WBUT 2019]*

$$f(n) \le \sum_{i=0}^{m} |a_i|\, n^i \le n^m \sum_{i=0}^{m} |a_i|\, n^{i-m} \le n^m \sum_{i=0}^{m} |a_i| \quad \text{for } n \ge 1.$$
So $f(n) = O(n^m)$ (assuming $m$ is fixed).

**6. What is an algorithm? Define the characteristics and categories of an algorithm.** *[MODEL QUESTION]*

- **Algorithm:** a step-by-step procedure that defines a set of instructions to be executed in a certain order to get the desired output. Algorithms are generally created independent of the underlying language (an algorithm can be implemented in more than one programming language).
- **Categories:** (i) Search, (ii) Sort, (iii) Insert, (iv) Update, (v) Delete.
- **Characteristics:** (1) **Unambiguous** — clear, with each step and its inputs/outputs leading to only one meaning; (2) **Input** — 0 or more well-defined inputs; (3) **Output** — 1 or more well-defined outputs matching the desired output; (4) **Finiteness** — must terminate after a finite number of steps; (5) **Feasibility** — feasible with the available resources; (6) **Independent** — step-by-step directions independent of any programming code.

**7. Write an algorithm to add two numbers and discuss the time and space complexity.** *[MODEL QUESTION]*

```
Add(a, b)
{
   Step 1:  a = 10;
   Step 2:  b = 20;
   Step 3:  x = a + b;
   Step 4:  return x;
}
```
- **Space complexity:** variables $a$, $b$, $x$ each take fixed space. If a single constant variable needs $n$ bytes, $C(\text{Add}()) = (n + n + n) = 3n$ bytes. There is no instantaneous space requirement, so $S(\text{Add}()) = (3n + 0) = 3n$ bytes.
- **Time complexity:** inserting an auxiliary counter $c$ (initialized to 0 and incremented after each instruction) gives $c = 4$ after execution; this is constant time with no instantaneous time, so $T(\text{Add}()) = 4$.

**8. Calculate the space for the recursive factorial function of an element.** *[MODEL QUESTION]*

```
Fact(n)
{
   Step 1:    if n <= 0 then
   Step 1.1:     return 1;
   Step 2:    else
   Step 2.1:     return (n * Fact(n-1));
}
```
The return address of a recursive call requires one word; each call of `Fact()` requires two words (one for the value of $n$, one for the return address). The function is executed $(n+1)$ times. If each word is $k$ bytes, then
$$S(\text{Fact}()) = 2(n+1)k \text{ bytes}.$$

**9. Calculate the space requirement for (i) a sequential search algorithm, (ii) finding an element from a set of array elements.** *[MODEL QUESTION]*

(i) `SeqSearch(a, n, k)` searches whether element $k$ is in list $a[\ ]$; `ans` returns the index if successful, otherwise $-1$. There are four constant variables ($k$, index, ans, $n$). With $m$ bytes per constant variable, $C(\text{SeqSearch}()) = 4m$ bytes; the array needs at least $n\cdot m$ bytes, so
$$S(\text{SeqSearch}()) \ge (4 + n)\,m \text{ bytes}.$$

(ii) `FindMax(a, n)` returns the maximum of the array. There are three variables (max, index, $n$), so $C(\text{FindMax}()) = 3k$ bytes, plus $n\cdot k$ for the array:
$$S(\text{FindMax}()) \ge (3 + n)\,k \text{ bytes}.$$

**10. Find the time complexity of an algorithm that computes the multiplication of $n$ numbers stored in an array.** *[MODEL QUESTION]*

```
Multiply(a, n)                complexity
   Step 1:  Initialize m = 1;      O(1)
   Step 2:  for i = 1 to n do      O(n)
   Step 2.1:   m = m * a[i];       O(1)
   Step 3:  return m;              O(1)
```
Total: $O(1) + O(n)\cdot O(1) + O(1) = O(n)$.

---

## Long Answer Type Questions

**1. Discuss the different types of asymptotic notation. Define the following notations with examples: Big-oh ($O$), Little-oh ($o$), $\Omega$, $\Theta$. Write the significance of the different asymptotic notations (Big-O, $\Omega$, Big-theta) with graphical analysis.** *[WBUT 2005, 2011, 2013, 2018]*

- **Big-O notation:** a theoretical measure of an algorithm's resource requirement (time/memory) given problem size $n$. Informally, $f(n) = O(g(n))$ means $f(n)$ is less than some constant multiple of $g(n)$: there exist positive constants $c$ and $k$ such that $0 \le f(n) \le c\,g(n)$ for all $n \ge k$. The values of $c$ and $k$ must be fixed for $f$ and must not depend on $n$.
- **$\Omega$ notation:** informally, $f(n) = \Omega(g(n))$ means $f(n)$ is more than some constant multiple of $g(n)$: there exist positive constants $c$ and $k$ such that $0 \le c\,g(n) \le f(n)$ for all $n \ge k$.
- **$\Theta$ notation:** $f(n) = \Theta(g(n))$ means $f(n)$ lies within a spectrum induced by a pair of constant multiples of $g(n)$: there exist positive constants $c_1$, $c_2$ and $k$ such that $0 \le c_1 g(n) \le f(n) \le c_2 g(n)$ for all $n \ge k$.
- **Little-o notation:** $f(n) = o(g(n))$ means $f(n)$ becomes insignificant relative to $g(n)$ as $n \to \infty$. For any $\varepsilon > 0$ however small, there exists $k > 0$ such that $\dfrac{f(n)}{g(n)} < \varepsilon$ whenever $n > k$; equivalently $\displaystyle\lim_{n\to\infty}\frac{f(n)}{g(n)} = 0$.
- **Little-omega ($\omega$) notation:** $f(n) = \omega(g(n))$ means $g(n)$ becomes insignificant relative to $f(n)$ as $n \to \infty$.

**2. a) Solve the recurrence relation using a generating function: $a_n = 6a_{n-1} - 11a_{n-2} + 4a_{n-3}$ with $a_0 = 1,\ a_1 = 2,\ a_2 = 1$.** *[WBUT 2007, 2014]*

Let $A(s) = \sum_{n\ge 0} a_n s^n$ be the generating function. Multiplying the relation (valid for $n \ge 3$) by $s^n$ and summing leads to
$$A(s)\,[\,1 - 6s + 11s^2 - 4s^3\,] = 1 - 4s,$$
so
$$A(s) = \frac{1 - 4s}{1 - 6s + 11s^2 - 4s^3}.$$
This is then expanded (writing the denominator as $1 - T$ with $T = 6s - 11s^2 + 4s^3$ and using $(1-T)^{-1} = 1 + T + T^2 + \cdots$) and the coefficient of $s^n$ collected.
> *(The source's full coefficient-extraction on DAA-14 is heavily obscured by the watermark and not cleanly legible; the recurrence setup and closed form for $A(s)$ above are the verified, legible parts. The explicit $a_n$ closed form is not reliably recoverable from the scan and is left out rather than guessed.)*

**2. b) What is Tail Recursion? Give an example.** *[WBUT 2007]*

A function call is **tail-recursive** if there is nothing to do after the call returns except return its value — i.e. the last operation of the function is a recursive call. Such recursion can be optimized by executing the call in the current stack frame and returning its result rather than creating a new stack frame; this may not save much run time but saves memory.

*General recursive form:*
```
Max_list(A, max)
{
   if (A[ ] == null) then return max;
   if (max < head(A)) then return Max_list(tail(A), head(A));
   else return Max_list(tail(A), max);
}
```
*Tail-recursion-optimized (iterative) form:*
```
Max_list(A, max)
{
   while (true)
   {
      if (A[ ] == null) then return max;
      if (max < head(A)) then { max = head(A); A = tail(A); }
      else A = tail(A);
   }
}
```

**3. State the Master theorem and find the time complexity for $T(n) = 2T(n^{1/2}) + \log n$.** *[WBUT 2016]*

Substitute $p = \log n$, so $T(2^p) = 2T(2^{p/2}) + p$. Let $K(p) = T(2^p)$; then
$$K(p) = 2K(p/2) + p = O(p\log p).$$
Therefore $T(n) = K(\log n) = O(\log n \cdot \log(\log n))$.

**4. For $T(n) = aT(n/b) + f(n)$, show that:** *[WBUT 2010, 2012]*
- **a)** If $a\,f(n/b) = k\,f(n)$ for some constant $k < 1$, then $T(n) = O(f(n))$.
- **b)** If $a\,f(n/b) = k\,f(n)$ for some constant $k > 1$, then $T(n) = O(n^{\log_b a})$.
- **c)** If $a\,f(n/b) = k\,f(n)$ for some constant $k = 1$, then $T(n) = O(f(n)\log_b n)$.

Draw the recursion tree for $T(n) = aT(n/b) + f(n)$: the root holds $f(n)$; it has $a$ children each holding $f(n/b)$; level $i$ has $a^i$ nodes each holding $f(n/b^i)$, contributing $a^i f(n/b^i)$. The tree has depth $L = \log_b n$ with $\log_b n + 1$ levels, and
$$T(n) = \sum_{i=0}^{L} a^i f(n/b^i) = f(n)\left[1 + k + k^2 + \cdots + k^{\log_b n}\right].$$
- **a)** $k < 1$: descending geometric series, dominated by the first term $f(n)$, so $T(n) = O(f(n))$.
- **b)** $k > 1$: ascending geometric series, dominated by the last term, so $T(n) = O(n^{\log_b a})$.
- **c)** $k = 1$: all $\log_b n$ terms equal, so $T(n) = O(f(n)\log_b n)$.

**5. State the Master theorem and find the time complexity for $T(n) = T(2n/3) + 1$.** *[WBUT 2012]*

Here $a = 1$, $b = 3/2$, $f(n) = 1$, and $n^{\log_b a} = n^{\log_{3/2} 1} = n^0 = 1$. Since $f(n) = \Theta(n^{\log_b a}) = \Theta(1)$, the solution is
$$T(n) = \Theta(\log n).$$

**6. Use the recursion tree to give an asymptotically tight solution to $T(n) = T(n-a) + T(a) + cn$, where $a \ge 1$ and $c > 0$ are constants.** *[WBUT 2012]*

The recursion tree has the root contributing $cn$, then $c(n-a)$, $c(n-2a)$, … down each level, with a side branch of cost $c\cdot a$ at each level. The tree has about $n/a$ levels, and summing the per-level costs gives an arithmetic series:
$$T(n) = \Theta(n^2).$$
> *(The source's tree diagram on DAA-18 is hand-drawn; the per-level decomposition and the $\Theta(n^2)$ result are the verified outcome. Note: the OCR text's "$O(n\log n)$" annotation appears to be a mislabel in the source for this particular recurrence.)* `[as printed: source shows a conflicting "O(n log n)" note]`

**7. Solve the recurrence relation using a generating function: $a_n - 7a_{n-1} + 10a_{n-2} = 0$, where $n \ge 2$, $a_0 = 10$, $a_1 = 41$.** *[WBUT 2013]*

*Method I (characteristic equation):* $r^2 - 7r + 10 = 0 \Rightarrow r = 2,\ 5$. So $a_n = \alpha_1 2^n + \alpha_2 5^n$. Applying $a_0 = 10$, $a_1 = 41$ gives $\alpha_1 = 3$, $\alpha_2 = 7$. Hence
$$a_n = 3\cdot 2^n + 7\cdot 5^n.$$

*Method II (generating function):* with $G(x) = \sum a_n x^n$, the relation gives
$$G(x)\,(10x^2 - 7x + 1) = -29x + 10,$$
which on partial-fraction expansion yields the same closed form $a_n = 3\cdot 2^n + 7\cdot 5^n$.

---

*End of Chapter 1. Remaining DAA chapters: 2 — Fundamental Algorithmic Strategies; 3 — Graph and Tree Traversal Algorithms; 4 — Tractable and Intractable Problems; 5 — Approximation Algorithms; 6 — Miscellaneous.*
