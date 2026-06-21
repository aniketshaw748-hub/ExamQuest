# Discrete Mathematics — Chapter 2: Principle of Mathematical Induction

> **Source:** *Discrete Mathematics* organizer (MAKAUT/WBUT solved papers, Popular Publications), book pages DCM-26 to DCM-42.
> **Fidelity note for downstream readers (incl. LLMs):**
> - Concept summary and all multiple-choice questions/answers below were **verified against the scanned page images**, not just OCR.
> - **Answers are transcribed exactly as printed in the source.** Any printed answer or step that is debatable by standard number-theory results is flagged inline as `[as printed]`; the source's letter/value is kept authoritative.
> - All congruences, gcd computations, summations, and induction steps were checked against the page images (OCR is unreliable for this math subject). Any step illegible on the scan is marked `[illegible in source]` rather than guessed. Math is rendered in LaTeX.

---

## Chapter at a Glance

One key basis for mathematical thinking is **deductive reasoning**. An informal example of deductive reasoning, borrowed from the study of logic, is an argument expressed in three statements:

- (a) Socrates is a man.
- (b) All men are mortal, therefore,
- (c) Socrates is mortal.

If statements (a) and (b) are true, then the truth of (c) is established. To make this a simple mathematical example, we could write:

- (i) Eight is divisible by two.
- (ii) Any number divisible by two is an even number, therefore,
- (iii) Eight is an even number.

Thus, deduction in a nutshell is: given a statement to be proven, often called a **conjecture** or a **theorem** in mathematics, valid deductive steps are derived and a proof may or may not be established — i.e., deduction is the application of a general case to a particular case. In contrast to deduction, **inductive reasoning** depends on working with each case and developing a conjecture by observing incidences till we have observed each and every case. It is frequently used in mathematics and is a key aspect of scientific reasoning, where collecting and analysing data is the norm. Thus, in simple language, we can say the word **induction** means the generalisation from particular cases or facts.

In algebra or in other disciplines of mathematics, there are certain results or statements that are formulated in terms of $n$, where $n$ is a positive integer. To prove such statements, the well-suited principle that is used — based on the specific technique — is known as the **principle of mathematical induction**.

**Motivation:** In mathematics, we use a form of complete induction called mathematical induction. To understand the basic principles of mathematical induction, suppose a set of thin rectangular tiles are placed vertically one by one. When the first tile is pushed in the indicated direction, all the tiles will fall. To be absolutely sure that all the tiles will fall, it is sufficient to know that

- (a) the first tile falls, and
- (b) in the event that any tile falls, its successor necessarily falls.

This is the underlying principle of mathematical induction. We know the set of natural numbers $\mathbb{N}$ is a special ordered subset of the real numbers. In fact, $\mathbb{N}$ is the smallest subset of $\mathbb{R}$ with the following property: a set $S$ is said to be an **inductive set** if $1 \in S$ and $x + 1 \in S$ whenever $x \in S$. Since $\mathbb{N}$ is the smallest subset of $\mathbb{R}$ which is an inductive set, it follows that any subset of $\mathbb{R}$ that is an inductive set must contain $\mathbb{N}$.

Suppose we wish to find the formula for the sum of positive integers $1, 2, 3, \ldots, n$ — that is, a formula which will give the value of $1 + 2 + 3$ when $n = 3$, the value $1 + 2 + 3 + 4$ when $n = 4$, and so on — and suppose that in some manner we are led to believe that the formula
$$1 + 2 + 3 + \cdots + n = \frac{n(n+1)}{2}$$
is the correct one.

How can this formula actually be proved? We can, of course, verify the statement for as many positive integral values of $n$ as we like, but this process will not prove the formula for all values of $n$. What is needed is some kind of chain reaction which will have the effect that once the formula is proved for a particular positive integer, the formula will automatically follow for the next positive integer, and the next, indefinitely. Such a reaction may be considered as produced by the method of mathematical induction.

**The Principle of Mathematical Induction.** Suppose there is a given statement $P(n)$ involving the natural number $n$ such that

- (i) The statement is true for $n = 1$, i.e., $P(1)$ is true, and
- (ii) If the statement is true for $n = k$ (where $k$ is some positive integer), then the statement is also true for $n = k + 1$, i.e., the truth of $P(k)$ implies the truth of $P(k + 1)$.

Then $P(n)$ is true for all natural numbers $n$. Property (i) is simply a statement of fact. There may be situations when a statement is true for all $n \ge 4$. In this case, step 1 will start from $n = 4$ and we shall verify the result for $n = 4$, i.e., $P(4)$. Property (ii) is a conditional property. It does not assert that the given statement is true for $n = k$, but only that if it is true for $n = k$, then it is also true for $n = k + 1$. So, to prove that the property holds, only prove that conditional proposition: *if the statement is true for $n = k$, then it is also true for $n = k + 1$.* This is sometimes referred to as the **inductive step**. The assumption that the given statement is true for $n = k$ in this inductive step is called the **inductive hypothesis**.

For example, frequently in mathematics, a formula will be discovered that appears to fit a pattern like
$$
\begin{aligned}
1 &= 1^2 = 1 \\
4 &= 2^2 = 1 + 3 \\
9 &= 3^2 = 1 + 3 + 5 \\
16 &= 4^2 = 1 + 3 + 5 + 7, \text{ etc.}
\end{aligned}
$$
It is worth noting that the sum of the first two odd natural numbers is the square of the second natural number, the sum of the first three odd natural numbers is the square of the third natural number, and so on. Thus, from this pattern it appears that
$$1 + 3 + 5 + 7 + \cdots + (2n - 1) = n^2,$$
i.e., the sum of the first $n$ odd natural numbers is the square of $n$.

Let us write $P(n): 1 + 3 + 5 + 7 + \cdots + (2n - 1) = n^2$. We wish to prove that $P(n)$ is true for all $n$. The first step in a proof that uses mathematical induction is to prove that $P(1)$ is true. This step is called the **basic step**. Obviously $1 = 1^2$, i.e., $P(1)$ is true. The next step is called the **inductive step**. Here, we suppose that $P(k)$ is true for some positive integer $k$ and we need to prove that $P(k + 1)$ is true. Since $P(k)$ is true, we have
$$1 + 3 + 5 + 7 + \cdots + (2k - 1) = k^2 \qquad \ldots(1)$$
Consider,
$$1 + 3 + 5 + 7 + \cdots + (2k - 1) + \{2(k+1) - 1\} \qquad \ldots(2)$$
$$= k^2 + (2k + 1) = (k + 1)^2 \quad [\text{Using } (1)]$$
Therefore, $P(k + 1)$ is true and the inductive proof is now completed. Hence $P(n)$ is true for all natural numbers $n$.

---

## Multiple Choice Type Questions

**1.** If $6^{16}$ is divided by 17, the remainder will be — *[WBUT 2013(EVEN)]*
a) 15   b) 10   c) 1   d) none of these
**Answer: (c)**

**2.** If $k$ is a positive integer, $\gcd(ka, kb) =$ — *[WBUT 2014(ODD)]*
a) $k\cdot\gcd(ka, b)$   b) $k\cdot\gcd(a, b)$   c) $k\cdot\gcd(a, kb)$   d) none of these
**Answer: (b)**

**3.** If $\gcd(a, b) = d$, then $\dfrac{a}{d}, \dfrac{b}{d}$ are — *[WBUT 2014(ODD)]*
a) relatively prime   b) prime   c) composite   d) both (a) and (b)
**Answer: (a)**

**4.** For every integer $x$, $\gcd(x, x+2) =$ — *[WBUT 2015(ODD)]*
a) 0   b) 2   c) 1   d) none of these
**Answer: (d)** `[as printed]`

**5.** The number 9420544 is divisible by — *[WBUT 2015(ODD), 2019(EVEN)]*
a) 36   b) 28   c) 24   d) none of these
**Answer: (b)**

**6.** If $7x \equiv 3 \pmod{5}$, then $x$ can take the value — *[WBUT 2015(ODD)]*
a) 17   b) 19   c) 21   d) 22
**Answer: (b)**

**7.** If $ap = bq$ and $a$ is prime to $b$, then — *[WBUT 2015(ODD)]*
a) $a \mid p$ and $b \mid q$   b) $a \mid b$ and $p \mid q$   c) $a \mid q$ and $b \mid q$   d) none of these
**Answer: (d)** `[as printed]`

**8.** The number of positive divisors of 252 is — *[WBUT 2015(ODD)]*
a) 9   b) 5   c) 18   d) 10
**Answer: (c)**

**9.** If $6^6$ is divided by 17, the remainder will be — *[WBUT 2016(EVEN)]*
a) 15   b) 10   c) 1   d) none of these
**Answer: (d)**

**10.** If we divide $-10$ with 6 then the remainder will be — *[WBUT 2016(ODD)]*
a) $-4$   b) 4   c) 2   d) $-2$
**Answer: (c)**

**11.** The total number of positive divisors of 9216 is — *[WBUT 2016(ODD)]*
a) 33   b) 20   c) 12   d) 14
**Answer: (a)**

**12.** If $68 \equiv 4 \pmod{n}$, then $n$ can be — *[WBUT 2016(ODD)]*
a) 12   b) 17   c) 13   d) 16
**Answer: (d)**

**13.** The remainder when the sum $4! + 5! + 6! + \cdots + 50!$ is divided by 4 is — *[WBUT 2017(EVEN)]*
a) 1   b) 2   c) 3   d) 0
**Answer: (d)**

**14.** The number 8955795758 is divisible by — *[WBUT 2017(ODD)]*
a) 7 only   b) 13 only   c) 7 or 13 or 37   d) none of these
**Answer: (c)**

**15.** If $n$ is an odd integer, $\gcd(3n, 3n + 2)$ is — *[WBUT 2018(EVEN)]*
a) 1   b) 2   c) 3   d) cannot be determined uniquely
**Answer: (a)**

**16.** Division algorithm states that for any positive integer $d$, there exist unique integers $q$ and $r$ such that $n = d\cdot q + r$ and — *[WBUT 2018(ODD)]*
a) $0 \le r < d$   b) $0 < r < d$   c) $0 \le d < r$   d) None of these
**Answer: (a)**

**17.** Suppose we're proving that $2^n + 4$ is divisible by 2 for all natural numbers $n$ using mathematical induction. We've already proven our base step (that it is true for $n = 1$). What is the next step? — *[MODEL QUESTION]*
a) We would set the expression $2^k + 4$ equal to 2 and solve for $k$
b) We would assume that $2^n + 4$ is divisible by 2, so $2^k + 4 = 2m$, where $m$ is a whole number
c) The base step is the only step in mathematical induction, so we've already proven that $2^n + 4$ is divisible by 2 for all natural numbers $n$ and there is no next step
d) We would subtract 4 from the expression $2^n + 4$
**Answer: (b)**

**18.** What is mathematical induction? — *[MODEL QUESTION]*
a) A proof technique used to prove a property is true for a well-ordered set by showing that if it is true for an element $n$ and $n + 1$ in a set, then it is true for all elements
b) A way of combining addition and subtraction in a mathematical expression
c) A sum of two functions
d) An operation performed on functions when we want to divide a polynomial function by another polynomial function
**Answer: (a)**

**19.** Which of the following statements is NOT true? — *[MODEL QUESTION]*
a) 100 is divisible by 10   b) 7 divides 40
c) 12 is divisible by 4   d) 7 divides 28
**Answer: (b)**

**20.** If we were proving that $6^n + 4$ is divisible by 5 for all natural numbers $n$, using mathematical induction, what would be the first step? — *[MODEL QUESTION]*
a) We would set $6^n + 4$ equal to 1 and solve for $n$
b) We would assume that it is true for all integers
c) We would subtract 4 from the expression
d) We would show that it is true for the first element in the set of natural numbers ($n = 1$)
**Answer: (d)**

**21.** If we are using mathematical induction to prove that a mathematical expression $A$ is divisible by a number $b$ for all natural numbers $n$, then step 1 is to show it's true for $n = 1$. Step 2 is to assume that it's true for a natural number $k$. What is the third step in this process? — *[MODEL QUESTION]*
a) We show that it is true for $k + 1$
b) We assume that it is true for all integers
c) We set $A$ equal to $b$ and solve for the variable
d) There is no third step in mathematical induction
**Answer: (a)**

**22.** Let $P(n)$ be the statement that $1^2 + 2^2 + \cdots + n^2 = \dfrac{n(n+1)(2n+1)}{6}$ for $n > 0$. If you can't prove the base case, for which values of $n$ can you prove that $P(n)$ is true using mathematical induction? — *[MODEL QUESTION]*
a) none   b) all $n > 0$
c) just $n = 1$   d) all $n > k$
**Answer: (b)** `[as printed]`

**23.** Let $P(n)$ be the statement that $1^2 + 2^2 + \cdots + n^2 = \dfrac{n(n+1)(2n+1)}{6}$ for $n > 0$. What is the statement $P(1)$? — *[MODEL QUESTION]*
a) $1^2 + 2^2 + \cdots + n^2 = \dfrac{n(n+1)(2n+1)}{6}$   b) $n = 4$
c) $1^2 = \dfrac{1(1+1)(2+1)}{6}$   d) It doesn't exist
**Answer: (c)**

---

## Short Answer Type Questions

**1. If $m$ is a positive integer and $a \equiv b \pmod{m}$ and $c \equiv d \pmod{m}$, show that** — *[WBUT 2013(EVEN)]*
**a) $a + c \equiv b + d \pmod{m}$**
**b) $ac \equiv bd \pmod{m}$**

**a)** $a \equiv b \pmod{m}$ implies $a - b = mk$ for some $k \in \mathbb{Z}$, and $c \equiv d \pmod{m}$ implies $c - d = mt$ for some $t \in \mathbb{Z}$.
Hence adding we get $(a + c) - (b + d) = m(k + t)$ where $k + t \in \mathbb{Z}$.
Hence $a + c \equiv b + d \pmod{m}$.

**b)** Again if $a - b = mk$, then $ac - bc = mkc$, and if $c - d = mt$, then $bc - bd = mtb$.
Adding we get $ac - bd = m(kc + tb)$ where $kc + tb \in \mathbb{Z}$.
Hence $ac \equiv bd \pmod{m}$.

**2. Find the remainder when the sum $1^5 + 2^5 + 3^5 + \cdots + 100^5$ is divided by 5.** *[WBUT 2013(EVEN), 2019(EVEN)]*

The given expression is
$$1^5 + 2^5 + \cdots + 100^5 = (1^5 - 1) + (2^5 - 2) + \cdots + (100^5 - 100) + (1 + 2 + \cdots + 100)$$
$$= 5k_1 + 5k_2 + \cdots + 5k_{100} + \frac{100 \times 101}{2} \quad [\text{By Fermat's Theorem}]$$
$$= 5\{k_1 + k_2 + \cdots + k_{100} + 1010\}.$$
Hence $1^5 + 2^5 + \cdots + 100^5$ leaves remainder 0 when divided by 5.

**3. Find the remainder when the sum $1! + 2! + 3! + \cdots + 100!$ is divided by 5.** *[WBUT 2013(ODD)]*

Here the expression is $1! + 2! + 3! + 4! + \cdots + 100!$.
Clearly from $5!$ onwards each term is divisible by 5.
So we consider only $1! + 2! + 3! + 4!$.
By Wilson's theory $4! \equiv -1 \pmod{5}$, 5 being a prime number, i.e., $4! + 1$ is divisible by 5.
So we are to consider only $2! + 3!$, i.e. 8, which clearly leaves 3 as remainder when divided by 5.
So the remainder asked for is **3**.

**4. Find integers $u$ and $v$ satisfying $\gcd(272, 119) = 272u + 119v$.** *[WBUT 2014(ODD), 2017(ODD)]*

We have
$$
\begin{aligned}
272 &= 2 \times 119 + 34 \\
119 &= 3 \times 34 + 17 \\
34 &= 2 \times 17
\end{aligned}
$$
$\therefore\ \gcd(272, 119) = 17$.
Now $17 = 119 - 3 \times 34 = 19 - 3\{272 - 2 \times 119\} = 7(119) - 3(272)$. `[as printed: the intermediate "19" is a source typo for 119; the final identity is correct]`
Thus $\gcd(272, 119) = 272u + 119v$ where $u = -3,\ v = 7$.

**5. Prove that the product of any $m$ consecutive integers is divisible by $m$.** *[WBUT 2014(ODD)]*

Let all natural numbers be grouped as
$$\{1, 2, \ldots, m-1, m\}, \{m+1, m+2, \ldots, 2m\}, \{2m+1, 2m+2, \ldots, 3m\}, \{3m+1, \ldots, 4m\}, \ldots$$
If the sequence of $m$ consecutive integers begins with 1, evidently the product contains $m$ as a factor and hence is divisible by $m$.

Every other string of $m$ consecutive integers starting with 2 or 3 etc. up to $m$ contains $m$ as a factor and hence is divisible by $m$.

If the sequence of $m$ consecutive integers starts with $2m+1$ or $2m+2$ up to $2m$, it contains $2m$ as a factor and hence is divisible by $m$.

The argument is similar for every other string of $m$ consecutive integers. Hence the result.

**6. Find the number of integers $n$, $1 \le n \le 1000$, that are not divisible by 5, 6 and 8.** *[WBUT 2015(ODD)]*

L.C.M. of 5, 6 and 8 is 120.
Evidently 120, 240, 360, 480, 600, 720, 840, 960 are the numbers between 1 and 1000 divisible by 5, 6 and 8.
Hence the number of integers between 1 and 1000 both inclusive which are not divisible by any of the integers 5, 6 and 8 are
$$(1000 - 8) \text{ or } 992.$$

**7. Find the $\gcd(595, 252)$ and express it in the form $252m + 595n$.** *[WBUT 2016(ODD)]*

By division algorithm,
$$
\begin{aligned}
595 &= 2 \times 252 + 91 \\
252 &= 2 \times 91 + 70 \\
91 &= 1 \times 70 + 21 \\
70 &= 3 \times 21 + 7 \\
21 &= 3 \times 7 + 0
\end{aligned}
$$
Since the last non-zero remainder is 7, $\gcd(595, 252) = 7$.
Now,
$$
\begin{aligned}
7 &= 70 - 3 \times 21 = 70 - 3 \times (91 - 1 \times 70) = 4 \times 70 - 3 \times 91 = 4 \times (252 - 2 \times 91) - 3 \times 91 \\
&= 4 \times 252 - 11 \times 91 = 4 \times 252 - 11 \times (595 - 2 \times 252) = 26 \times 252 - 11 \times 595.
\end{aligned}
$$

**8. Find the remainder when the sum $1! + 2! + 3! + \cdots + 100!$ is divided by 18.** *[WBUT 2016(ODD)]*

We know $6! = 720 \equiv 0 \pmod{18}$.
When $n \ge 6$, $n! = 18k$; $k$ is a non-zero integer.
$$\therefore\ n! \equiv 0 \pmod{18}; \quad n \ge 6$$
$$
\begin{aligned}
(1! + 2! + 3! + 4! + 5! + \cdots + 100!) \pmod{18} &\equiv (1 + 2 + 6 + 24 + 120) \pmod{18} \\
&\equiv 153 \pmod{18} \\
&\equiv 17.
\end{aligned}
$$
`[as printed: source gives $\equiv 17$; by standard arithmetic $153 \equiv 9 \pmod{18}$]`

**9. Find integers $m$ and $n$ such that $512m + 320n = 64$.** *[WBUT 2016(ODD)]*

We know
$$
\begin{aligned}
512 &= 1 \times 320 + 192 &&\ldots(1) \\
320 &= 1 \times 192 + 128 &&\ldots(2) \\
192 &= 1 \times 128 + 64 &&\ldots(3) \\
128 &= 2 \times 64 + 0 &&\ldots(4)
\end{aligned}
$$
Thus 64 is the gcd of 512 and 320. Hence there exist integers $m$ and $n$ such that $m\cdot 512 + n\cdot 320 = 64$.
Now, from equation (3) we have
$$
\begin{aligned}
64 &= 192 - 128 \\
&= 192 - (320 - 192) \quad [\text{from equation (2)}] \\
&= 2 \times 192 - 320 \\
&= 2 \times (512 - 320) - 320 \quad [\text{from equation (1)}] \\
&= 2 \times 512 - 2 \times 320 - 320 = 2 \times 512 - 3 \times 320.
\end{aligned}
$$
$\therefore\ m = 2,\ n = -3$.

**10. a) If $\gcd(a, b) = 1$, prove that $\gcd(a^2, b^2) = 1$.** *[WBUT 2017(EVEN)]*

Let $\gcd(a^2, b^2) = d$; then $a^2 = dk_1$, $b^2 = dk_2$, $k_1, k_2 \in \mathbb{N}$.
$$\therefore\ a = \sqrt{d\,k_1},\quad b = \sqrt{d\,k_2}.$$
As $\gcd(a, b) = 1$, we get $\gcd\!\left(\sqrt{d}\,\sqrt{k_1},\ \sqrt{d}\,\sqrt{k_2}\right) = 1$.
So $\sqrt{d} = 1$ or $d = 1$.

**b) Find two integers $u$ and $v$ satisfying $63u + 55v = 1$.** *[WBUT 2017(EVEN)]*

Since $\gcd(63, 55) = 1$, the equation $63u + 55v = 1$ has integral solutions.
Now,
$$
\begin{aligned}
63 &= 1 \cdot 55 + 8 \\
55 &= 6 \cdot 8 + 7 \\
8 &= 7 \cdot 1 + 1
\end{aligned}
$$
$$\therefore\ 1 = 8 - 7 \cdot 1 = (63 - 1 \cdot 55) - (55 - 6 \cdot 8)\cdot 1 = 63 - 2 \cdot 55 + 6(63 - 1 \cdot 55) = 7 \cdot 63 - 8 \cdot 55.$$
So $u = 7,\ v = -8$.

**11. State division algorithm. Show that every square integer is of the form $5k$, $5k \pm 1$ for some integer $K$.** *[WBUT 2017(EVEN)]*

**1st Part:**
Division of one integer by another plays an important role in the study of integers. If $b \ne 0$ and $a$ are integers, then we can divide $a$ by $b$. If $q$ is the quotient and $r$ is the remainder, then we say $a$ is completely divisible by $b$ if $r = 0$. Indeed we can state the following:

**Theorem:** If $a, b \in \mathbb{Z}$, $b \ne 0$, then there exist $q, r \in \mathbb{Z}$ such that $a = bq + r$, $0 \le r < |b|$.
For example, if $a = 37$, $b = 5$, then $q = 7$, $r = 2$ as $37 = 5 \times 7 + 2$.
Again, if $a = -37$, $b = 5$, then $q = -8$, $r = 3$ as $-37 = 5 \times (-8) + 3$.

**2nd Part:**
Let $x$ be any positive integer. Then $x = 5q$ or $x = 5q + 1$ or $x = 5q + 4$ for integer $x$.

If $x = 5q$, $x^2 = (5q)^2 = 25q^2 = 5(5q^2) = 5n$ (where $n = 5q^2$).

If $x = 5q + 1$, $x^2 = (5q + 1)^2 = 25q^2 + 10q + 1 = 5(5q^2 + 2q) + 1 = 5n + 1$ (where $n = 5q^2 + 2q$).

If $x = 5q + 4$, $x^2 = (5q + 4)^2 = 25q^2 + 40q + 16 = 5(5q^2 + 8q + 3) + 1 = 5n + 1$ (where $n = 5q^2 + 8q + 3$).

$\therefore$ In each of three cases $x^2$ is either of the form $5q$ or $5q + 1$ or $5q + 4$ and for integer $q$.

**12. When $n$ is a positive integer, show that $3^{2n+1} \equiv 3 \cdot 2^n \pmod{7}$. Obtain a similar result for $2^{n+2}$ and deduce that $(3^{2n+1} + 2^{n+2})$ is a multiple of 7, for all $n$.** *[WBUT 2018(ODD)]*

Let $P_n: 3^{2n+1} \equiv 3 \cdot 2^n \pmod{7}$, i.e., $3^{2n+1} - 3 \cdot 2^n$ is divisible by 7.
Clearly, $P_n$ is true when $n = 0$ as $3 - 3$ is divisible by 7.
Suppose $P_n$ is true for $m$, i.e., $3^{2m+1} - 3 \cdot 2^m$ is divisible by 7.
Then
$$3^{2(m+1)+1} - 3 \cdot 2^{m+1} = 9 \cdot 3^{2m+1} - 3 \cdot 2 \cdot 2^m = 2\{3^{2m+1} - 3 \cdot 2^m\} + 7 \cdot 3^{2m+1}$$
$$= 2 \cdot 7k + 7 \cdot 3^{2m+1} = 7\{2k + 3^{2m+1}\}.$$
Hence, $P(m + 1)$ is true.
By induction the result is true for every $n \in \mathbb{N}$.
Now, $3^{2n+1} + 2^{n+2} = (3^{2n+1} - 3 \cdot 2^n) + 3 \cdot 2^n + 2^{n+2} = 7k + 7 \cdot 2^n$.
Hence $3^{2n+1} + 2^{n+2}$ is a multiple of 7 for all $n$.

**13. Show that for all primes $p$ and all integers $a$ and $b$, if $p \mid ab$ then $p \mid a$ or $p \mid b$ or both.** *[WBUT 2019(EVEN)]*

Suppose $p$ is prime and $p \mid ab$. If $p \mid a$ we are done. If not, then $\gcd(p, a) = 1$ and by Euclid's Lemma, we know that — if $\gcd(a, b) = 1$ and $a \mid bc$ then $a \mid c$; and if $p$ is prime then $\gcd(a, p) = 1$ if and only if $p$ does not divide $a$.
So, we can conclude that $p \mid b$.

**14. Using well-ordering principle prove the Archimedean property of natural numbers, viz. for any two $a, b \in \mathbb{N}$, $\exists\, n \in \mathbb{N}$ such that $na \ge b$.** *[WBUT 2018(ODD)]*

Given $a, b \in \mathbb{N}$.
Consider the set $S = \{x;\ xa \ge b\}$.
Clearly, $S \ne \phi$ since $ba \ge b$.
By the well-ordering principle, $S$ is bounded below and hence has a first element, say $n$.
Thus there exists $n \in \mathbb{N}$ such that $na \ge b$.

---

## Long Answer Type Questions

**1. a) By mathematical induction, prove that $6^{n+2} + 7^{2n+1}$ is divisible by 43, for each natural number $n$.** *[WBUT 2013(ODD)]*

Let $P(n) = 6^{n+2} + 7^{2n+1}$.
Clearly $P(0)$ is true as $P(0) = 36 + 7 = 43$.
Also $P(1)$ is true as $P(1) = 559$ which is divisible by 43.
So assume $P(m)$ is divisible by 43, i.e. $6^{m+2} + 7^{2m+1} = 43k$, $k \in \mathbb{Z}$.
Now
$$
\begin{aligned}
P(m+1) &= 6^{m+3} + 7^{2m+3} = 6 \cdot 6^{m+2} + 49 \cdot 7^{2m+1} \\
&= 6\{6^{m+2} + 7^{2m+1}\} + 43 \cdot 7^{2m+1} = 6 \times 43k + 43 \cdot 7^{2m+1} \\
&= 43(6k + 7^{2m+1}) = 43k' \quad \text{where } k' \in \mathbb{Z}.
\end{aligned}
$$
Thus $P(m + 1)$ is divisible by 43.
Hence by the induction principle, $6^{n+2} + 7^{2n+1}$ is divisible by 43.

**b) If $\gcd(a, b) = 1$, show that $\gcd(a + b,\ a^2 - ab + b^2) = 1$ or 3.** *[WBUT 2014(ODD)]*

Given $\gcd(a, b) = 1$.
Now let $d = \gcd(a + b,\ a^2 - ab + b^2)$.
Then $d \mid a + b$. So $d \mid (a + b)^2$.
Again, $d \mid a^2 - ab + b^2$.
So $d \mid \{(a + b)^2 - (a^2 - ab + b^2)\}$, i.e., $d \mid 3ab$.
Since 3 is a prime, i.e., $d = 3$ or $d \mid ab$.
But as $\gcd(a, b) = 1$, $d = 1$.
Thus $d$ is 1 or 3.

**2. a) Define GCD of two integers $a$ and $b$. Use Euclidean algorithm to find integers $u$ and $v$ such that $\gcd(72, 120) = 72u + 120v$.**
**b) (i) State and prove Fundamental Theorem of Arithmetic.**
**(ii) If $a \mid b$ and $a \mid c$ then prove that $a \mid (bx + cy)$ for arbitrary integers $x$ and $y$.**
**(iii) If $a \mid bc$ and $\gcd(a, b) = 1$ then prove that $a \mid c$.** *[WBUT 2015(EVEN)]*

**a)** When $a$ and $b$ are (non-zero) integers, then an integer $d\,(\ne 0)$ is said to be the greatest common divisor of $a$ and $b$ if $d \mid a$ and $d \mid b$.
We know,
$$
\begin{aligned}
120 &= 1 \times 72 + 48 \\
72 &= 1 \times 48 + 24 \\
48 &= 2 \times 24 + 0
\end{aligned}
$$
Now,
$$
\begin{aligned}
24 &= 72 - 1 \times 48 \\
&= 72 - 1 \times (120 - 1 \times 72) \\
&= 3 \times 72 - 1 \times 120.
\end{aligned}
$$
$\therefore\ u = 3,\ v = -1$.

**b) (i) Fundamental Theorem of Arithmetic:** Every integer $n > 1$ can be written uniquely as a product of prime numbers.

*Proof:* We shall prove the theorem by the principle of induction.
Let $n = 2$. Since 2 is prime, $n\,(= 2)$ is a product of primes ($\because$ a product may consist of a single factor).
Let $n > 2$.
If $n$ is prime, it is a product of primes, i.e., a single-factor product.
If $n$ is not a prime, i.e., composite, let us assume that the theorem holds good for positive integers less than $n$ and $n = ab$. Since $a, b < n$, each of $a$ and $b$ can be expressed as the product of primes (by the assumption).
$\therefore\ n = ab$ is also a product of primes.

**(ii)** Since $a \mid b$, we have $a \mid xb$, where $x$ is an integer.
Again, $a \mid c$ then $a \mid yc$, where $y$ is an integer.
$\therefore\ a \mid (xb + yc)$ for two integers $x$ and $y$.

**(iii)** Let $\gcd(a, b) = 1$. Therefore $\exists$ two integers $m$ and $n$ such that
$$ma + nb = 1 = \gcd(a, b) \qquad \ldots(i)$$
Multiplying equation (i) by $c$ we get
$$mac + nbc = c \qquad \ldots(ii)$$
Now $a \mid bc \Rightarrow a \mid nbc$
$\therefore\ a \mid mac \Rightarrow a \mid c$ (Proved).

**3. a) Find the number of integers between 1 and 1000 both inclusive that are not divisible by any of the integers 2, 3 and 7.**
**b) Find all possible value of $x$, for $345x \equiv 18 \pmod{912}$.** *[WBUT 2015(ODD)]*

**a)** We first see which are the numbers divisible by 2, 3 and 7, i.e., by 42.
Evidently, 42, 84, 126, 168, 210, 252, 294, 336, 378, 420, 462, 504, 546, 588, 630, 672, 714, 756, 798, 840, 882, 924, 966 are the numbers between 1 and 1000 divisible by 2, 3 and 7.
Hence the number of integers between 1 and 1000 both inclusive which are not divisible by any of the integers 2, 3 and 7 are $1000 - 23$ or **977**.

**b)** Since $\gcd(345, 912) = 3$, the given congruence equation has 3 solutions. We denote
$$345x \equiv 18 \pmod{912} \qquad \ldots(i)$$
$$115x \equiv 6 \pmod{104} \qquad \ldots(ii)$$
We first solve (ii) and for this note that $\gcd(115, 104) = 1$.

Now (by the division algorithm: $104)\,115\,(1$, $11)\,104\,(9$, $5)\,11\,(2$, remainder 1), hence
$$
\begin{aligned}
1 &= 11 - 5 \times 2 \\
&= 11 - (104 - 9 \times 11) \\
&= 10 \times 11 - 104 \\
&= 10\,(115 - 1 \times 104) - 104 \\
&= 10 \times 115 - 11 \times 104.
\end{aligned}
$$
This implies $115 \times 10 \equiv 1 \pmod{104}$, i.e., $x_0 = 10$ is a solution of (ii).
Hence $x_0 = 10$ is also a solution of (i).
The three solutions of (i) can now be given as
$$x = 10 + \frac{912}{3}\,i \pmod{912},\ i = 0, 1, 2$$
or, $x = 10 + 304i \pmod{912},\ i = 0, 1, 2$.

**4. Let $m, n$ be integers not both zero. Prove that $\gcd(km, kn) = k\cdot\gcd(m, n)$ for any positive integer $k$.** *[WBUT 2016(ODD)]*

Let $d = \gcd(m, n)$.
Then $ma + nb = d$ when $a$ and $b$ are integers.
$$a(km) + b(kn) = kd$$
i.e., $\gcd(km, kn) = kd = k\cdot\gcd(m, n)$.
If $k$ is any integer, then the result becomes
$$\gcd(km, kn) = k\cdot\gcd(m, n).$$

**5. a) State and prove the recursion theorem of gcd.** *[WBUT 2018(EVEN)]*
**b) (i) Prove that $\gcd(a, b) = \gcd(a, a - b)$.**
**(ii) Show that two consecutive integers are prime to each other.**
**c) Calculate $\gcd(567, 315)$ and hence express $\gcd(567, 315)$ as $567x + 315y$ where $x$ and $y$ are integers.**

**a) GCD Algorithm 2: Euclid's Algorithm.** The basis of the algorithm is the following fact:
$$\text{For } m \ge n > 0,\quad \gcd(m, n) = \begin{cases} n & \text{if } n \text{ divides } m \text{ with no remainder} \\ \gcd\!\left(n,\ \text{remainder of } \dfrac{m}{n}\right) & \text{otherwise} \end{cases}$$

We can rewrite $m$ as follows:
$$m = n\left\lceil\frac{m}{n}\right\rceil + \text{remainder of } \frac{m}{n}$$
Now any divisor $d$ common to $m$ and $n$ must divide the first term with no remainder, since it is the product of $n$ and an integer. Therefore, $d$ must also divide the second term, since $d$ divides $m$ and $m$ is the sum of the two terms. Since any divisor common to $m$ and $n$ must divide the remainder of $m/n$, we know that, in particular, the gcd does, since it is a common divisor. It just happens to be the greatest such divisor. So by taking the $\gcd(n,\ \text{remainder of } m/n)$, we can "close in quickly" on the GCD of $m$ and $n$.

Now we can write:
```c
int gcd(int m, int n) {
   if ((m % n) == 0)
      return n;
   else
      return gcd(n, m % n);
}
```
$$
\begin{aligned}
&\texttt{gcd(468, 24)} \\
&\texttt{gcd(24, 12)} \\
&\Rightarrow 12
\end{aligned}
\qquad
\begin{aligned}
&\texttt{gcd(135, 19)} \\
&\texttt{gcd(19, 2)} \\
&\texttt{gcd(2, 1)} \\
&\Rightarrow 1
\end{aligned}
$$
Euclid's GCD algorithm is very fast, but division (taking remainders) is a more time-consuming operation than simple addition and subtraction.

**b) (i)** Let $p = \gcd(a, b)$. Then $p \mid a$, $p \mid b$. So $p \mid a - b$.
If $h \mid a$, $h \mid a - b$, then $h \mid a - (a - b)$, i.e., $h \mid b$.
But $p = \gcd(a, b)$. So $h \mid p$.
Hence $p = \gcd(a, a - b)$.

**(ii)** Let $n$ and $n + 1$ be two consecutive integers. If possible, let $n$ and $n + 1$ be not prime to each other. Then there exists $k \in \mathbb{Z}$, $k \ne 1$, such that $k = \gcd(n, n+1)$. This implies $k \mid n$ and $k \mid n + 1$. So $k \mid (n+1) - n$ or $k \mid 1$. But the only integer which divides 1 is 1. So $k = 1$. This contradiction therefore proves the result.

**c)** We have
$$315)\,567\,(1 \ \Rightarrow\ 567 = 315 \times 1 + 252$$
$$252)\,315\,(1 \ \Rightarrow\ 315 = 252 \times 1 + 63$$
$$63)\,252\,(4 \ \Rightarrow\ \text{remainder } 0$$
So, $\gcd(567, 315) = 63$.
Now, $63 = 315 - 252 \times 1 = 315 - (567 - 315) = 315(2) + (-1)567$.
Thus, $x = -1,\ y = 2$.

**6. a) State the principle of well-ordering.**
**b) State and prove the division algorithm by the well-ordering principle.**
**c) In a round-robin tournament where every player plays every other player exactly once and each match has a winner and a loser, a cycle is said to exist if $P_1$ beats $P_2$, $P_2$ and $P_3$ and so on up to $P_{m-1}$ beats $P_m$ and $P_m$ and $P_1$. The cycle is of length $m\ (m \ge 3)$. Prove that if a cycle exists among $m$ players then there must be a cycle of 3 of these players.** *[WBUT 2018(EVEN)]*

**a)** Every non-empty subset of $\mathbb{N}$ has a first element.

**b)** If $a$ and $b$ are integers, $b > 0$, then there exist unique integers $q$ and $r$ such that
$$a = bq + r,\quad 0 \le r < b.$$
Let $S = \{a - tb;\ t \in \mathbb{Z},\ a - tb \ge 0\}$.
We now prove that $S$ is a non-empty subset of $\mathbb{N}$.

*Case 0:* $a \ge 0$. Clearly $a \in S$ as $a = a - 0\cdot b$.

*Case 1:* $a < 0$. Clearly $a - ab = a(1 - b) \ge 0$ as $a < 0$ and $1 < b$. Hence $a - ab \in S$.

Thus $S$ is a non-empty subset of $\mathbb{N}$ and hence by the well-ordering principle, $S$ has a first element, $r$ say. Then $r = a - qb$ for some integer $q$, $a = bq + r$ and $r \ge 0$.
We now show that $r < b$.
If $r \ge b$, then $a - (q+1)b = (a - qb) - b = r - b \ge 0$.
This means $a - (q+1)b \in S$, i.e., $r - b \in S$.
But $r - b < r$ (as $b > 0$). This contradicts the fact that $r$ is the first element of $S$.
Hence $r < b$.

To prove uniqueness, let there exist $q_1, q_2, r_1, r_2 \in \mathbb{Z}$ such that $a = q_1 b + r_1$ and $a = q_2 b + r_2$, $0 \le r_1 < b$, $0 \le r_2 < b$.
Then $q_1 b + r_1 = q_2 b + r_2$, or $(q_1 - q_2)b = r_2 - r_1$.
This implies $b$ divides $r_2 - r_1$. But $-b < r_2 - r_1 < b$.
Hence $r_2 - r_1 = 0$ or $r_1 = r_2$.
Then $q_1 b + r_1 = q_2 b + r_2$, or $(q_1 - q_2)b = 0$.
Since $b > 0$, we have $q_1 - q_2 = 0$ or $q_1 = q_2$.
This proves the uniqueness.

**c)** Let us define order by win/loss. If $A$ wins $B$ and $B$ wins $C$ then it is ordered as $\cdots > A > B > C > \cdots$.
Consider $\ge 3$ teams: $n(n-1)/2$ games are played and $2^{(n(n-1)/2)}$ unique results might be possible. Out of those $2^{(n(n-1)/2)}$ possible results, how many unique outcomes are there such that we can order every player (only once) such that it forms a cycle, i.e. $P_1 > P_2 > P_3 > \cdots > P_n > P_{m-1}$. `[as printed: the cycle subscripts are inconsistent in the source]`

There cannot be a cycle if there is a Total Winner or Total Loser. It is found (by using the Principle of Inclusion–Exclusion) that there exist
$$2^{(n(n-1)/2)} - (2n)\,2^{((n-1)(n-2)/2)} + n(n-1)\,2^{((n-2)(n-3)/2)}$$
possible results of the tournament where there is no Total Winner or no Total Loser.

If three players played a game — players (1), (2), and (3) — the outcomes are:
- $[(1, 2), (1, 3), (2, 3)] \leftarrow$ (1) is total winner so there can't be a cycle.
- $[(1, 2), (1, 3), (3, 2)]$
- $[(1, 2), (3, 1), (2, 3)]$
- $[(1, 2), (3, 1), (3, 2)]$
- $[(2, 1), (1, 3), (2, 3)]$
- $[(2, 1), (1, 3), (3, 2)]$
- $[(2, 1), (3, 1), (2, 3)]$
- $[(2, 1), (3, 1), (3, 2)]$

Here, $(1, 2)$ means the match was played by (1) and (2) and (1) won the game. The following forms a cycle (also it is the only outcome where there are no total winner and total loser). `[the source's listing/diagram is cut off here]`

---

*End of Chapter 2.*
