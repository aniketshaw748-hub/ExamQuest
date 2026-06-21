# Discrete Mathematics — Chapter 1: Set, Relation & Function

> **Source:** *Discrete Mathematics* organizer (MAKAUT/WBUT solved papers, Popular Publications), book pages DCM-2 to DCM-25.
> **Fidelity note for downstream readers (incl. LLMs):**
> - Concept summary and all multiple-choice questions/answers below were **verified against the scanned page images**, not just OCR.
> - **Answers are transcribed exactly as printed in the source.** Any printed answer that is debatable by standard set-theory results is flagged inline as `[as printed]`; the source's letter is kept authoritative.
> - All set expressions, relations, and formulas were checked against the page images (OCR is unreliable for this math subject). Any step illegible on the scan is marked `[illegible in source]` rather than guessed. Math is rendered in LaTeX.

---

## Chapter at a Glance

### Introduction to Relations and Functions

This topic "Relations and Functions" is a foundation of algebra in mathematics. Relations and functions are two different words having different meanings mathematically.

Same as the relations which we have in our daily life, a kind of relation also exists in algebra. In daily life, relations are like brother and sister, friends, student and teacher, and many more. In mathematics also we see some relations like a line is parallel or perpendicular to another, or one variable is greater or less than another variable; any set $A$ is a subset of $B$. All these are examples of relations. One thing common while studying relations is that it requires two different objects to link via the relation.

### Meaning of a Relation

A **set** is a collection of well-defined objects of a particular kind (e.g. a set of outcomes of a die, a set of English alphabet). A relation is always studied between two sets. If we have two non-void (non-null/non-empty) sets $A$ and $B$, then the relation $R$ from set $A$ to set $B$ is represented by $aRb$, where $a$ is an element belonging to set $A$ while $b$ belongs to set $B$.

A relation from a set $A$ to a set $B$ is a **subset of the Cartesian product** of $A$ and $B$, i.e. a subset of $A \times B$. A relation can also be defined as a collection of ordered pairs $(a, b)$ where $a$ belongs to the elements of set $A$ and $b$ to set $B$, and the relation is from $A$ to $B$ but not vice versa.

**For Example:** Consider a set $A = \{1, 2, 3\}$ and set $B = \{2, 4, 6\}$. Then a relation from $A$ to $B$ will be a set of any combination of ordered pairs from $A$ to $B$, e.g. $R = \{(1,4),(1,2),(3,4),(3,2)\}$. The relation is a subset of the Cartesian product $A \times B$.

Another example: $A = \{1, 2, 3\}$ and $B = \{1, 2, 3, 4, 5, 6, 7, 8, 9\}$. If the relation between $A$ and $B$ is "elements of $B$ are the squares of elements of $A$", then in set-builder form:
$$R = \{(a, b) : b \text{ is the square of } a,\ a \in A\ \&\ b \in B\}$$
so $R = \{(1,1),(2,4),(3,9)\}$.

Like sets, a relation may be represented either by the **Roster method** or by the **Set-builder method**. A relation establishes a relationship between the elements of two sets according to some definite rule:
$$R : \{(a, b)\mid (a,b) \in A \times B \text{ and } a\,R\,b\}$$

- **Eg. 1:** $A = \{2, 3, 5\}$, $B = \{1, 4, 9, 25, 30\}$. If $a\,R\,b \to b$ is the square of $a$, then the discrete elements of the relation are $\{(2,4),(3,9),(5,25)\}$.
- **Eg. 2:** $A = \{\text{Jaipur, Lucknow, Kanpur, Bhopal}\}$, $B = \{\text{Rajasthan, Uttar Pradesh, Madhya Pradesh}\}$. If $a\,R\,b \to a$ is the capital of $b$, then $R = \{(\text{Jaipur, Rajasthan}),(\text{Lucknow, Uttar Pradesh}),(\text{Bhopal, Madhya Pradesh})\}$.

### Total Number of Relations from A to B

Let $A$ contain $m$ elements and $B$ contain $n$ elements. Then the number of elements in $A \times B$ is $m \times n$. The number of non-void subsets is
$$C_1^{mn} + C_2^{mn} + \cdots + C_{mn}^{mn} = 2^{mn} - 1.$$
Thus, for $A = \{1, 2, 3\}$ and $B = \{x, y, z\}$ (so $m = n = 3$), the number of possible relations $= 2^9 - 1 = 511$.

### Functions

Functions are a special class of relation; special types of relations are called **functions**. A function is like a machine which gives a unique output for each input that is fed into it. Just as a washing machine is designed for certain defined inputs, functions are defined for certain inputs which are called its **domain**, and the corresponding outputs are called the **range**.

Let $A$ and $B$ be two sets and let there exist a rule or correspondence $f$ which associates a unique element of $B$ to each element of $A$; then $f$ is called a **function or mapping** from $A$ to $B$. It is denoted by
$$f : (A, B) \quad\text{or}\quad f : A \to B \quad\text{or}\quad A \xrightarrow{f} B,$$
which reads "$f$ is a function from $A$ to $B$" or "$f$ maps $A$ to $B$".

If an element $a \in A$ is associated with an element $b \in B$, then $b$ is called the "$f$ image of $a$" or "the value of the function $f$ at $a$". Also $a$ is called the **pre-image** of $b$ or the argument of $b$ under $f$. We write it as
$$f : (a, b) \quad\text{or}\quad f : a \to b \quad\text{or}\quad b = f(a).$$

A relation $f$ from a set $A$ to a set $B$ is called a **function** if it satisfies the conditions:
- All elements of $A$ should be mapped with elements of $B$; there should be no element in $A$ left unmapped. That is, $\forall a,\ (a, f(a)) \in f$, where $a$ is an element of set $A$.
- Elements of $A$ should be **uniquely** mapped to elements of $B$. That is, if $(a, b) \in f$ and $(a, c) \in f$, then $b = c$.

Thus each element of $A$ appears in some ordered pair and no two ordered pairs have the same first element. *[diagram: three mapping diagrams illustrating "Function", "Not Function", "Not Function"]*

> **Note:** Every function is a relation, but every relation is not necessarily a function.

### Domain, Co-domain and Range

For a relation $f$ from set $A$ to set $B$ ($aRb$), all the elements of set $A$ are called the **domain** of the relation, and the elements of set $B$ are called the **co-domain**. The **range** is the set of all second elements from the ordered pairs $(a, b)$ in the relation.

$$\text{Domain of } f = \{a \mid a \in A,\ (a, f(a)) \in f\}$$
$$\text{Range of } f = \{f(a) \mid a \in A,\ f(a) \in B,\ (a, f(a)) \in f\}$$

The domain is the input to the relation while the co-domain is the set of possible outputs and the range is the actual output. The range is a subset of the co-domain. For a continuous function, the interval from minimum to maximum value of the function gives the range.

### Is it the Graph of a Function? (Vertical Line Test)

- First condition: for every input in the domain, the function must provide the corresponding output.
- Second condition: for any input $x$ there must be one and only one output. To check this for $y = f(x)$, draw a line parallel to the $y$-axis. If it cuts the graph at two or more distinct points, then for one value of $x$ we get more than one output, and hence it is **not** a function.

**Example (is a function):** $y = x^2$. Every straight line parallel to the $y$-axis cuts $y = x^2$ at only one point. *[diagram]*

**Example (not a function):** $x^2 + y^2 = r^2$ (a circle). A line parallel to the $y$-axis intersects the circle at two points, hence it is not a function. *[diagram]*

### Special Types of Functions

- **Even Function:** $f(x)$ is even if $f(-x) = f(x)$ for all $x$ and $-x$ in the domain. Geometrically, the graph of an even function is symmetric with respect to the $y$-axis.
- **Odd Function:** $f(x)$ is odd if $f(-x) = -f(x)$, i.e. $f(x) + f(-x) = 0$, for all $x$ and $-x$ in the domain.
- **Increasing Function:** $f$ is increasing if whenever $a > b$, then $f(a) \ge f(b)$. It is **strictly increasing** if $a > b \Rightarrow f(a) > f(b)$.

### Classification of Functions

- **Polynomial Function:** If $f(x) = a_n x^n + a_{n-1} x^{n-1} + \cdots + a_1 x + a_0$, where $n$ is a non-negative integer and $a_n, a_{n-1}, \ldots, a_1, a_0$ are real numbers with $a_n \ne 0$, then $f$ is a polynomial function of degree $n$. A polynomial function is always continuous.

- **Algebraic Function:** A function $f$ is algebraic if it can be constructed using algebraic operations (addition, subtraction, multiplication, division and taking roots), starting with polynomials. *Example:* $f(x) = \sqrt{x^2 + 1}$, $g(x) = \dfrac{x}{x + (x-2)\sqrt{x+1}}$. *Note:* all polynomials are algebraic but the converse is not true. Functions which are not algebraic are known as **transcendental functions**.

- **Fractional Rational Function:** A rational function has the form $y = f(x) = \dfrac{g(x)}{h(x)}$, where $g(x)$ and $h(x)$ are polynomials and $h(x) \ne 0$. The domain is the set of real $x$ such that $h(x) \ne 0$. *Example:* $f(x) = \dfrac{1}{x^2 - 4}$ has domain $D = \{x \mid x \ne \pm 2\}$.

- **Exponential Function:** $f(x) = a^x = e^{x \ln a}$ ($a > 0$, $a \ne 1$, $x \in \mathbb{R}$) is called an exponential function because the variable $x$ is the exponent. It should not be confused with the power function $g(x) = x^2$ in which $x$ is the base. For $f(x) = e^x$, the domain is $\mathbb{R}$ and the range is $\mathbb{R}^+$.

- **Logarithmic Function:** A function of the form $y = \log_a x$ ($x > 0$, $a > 0$, $a \ne 1$) is called a logarithmic function. *[diagram: curves for $a > 1$ and $a < 1$]*

- **Absolute Value Function (Modulus Function):** $y = f(x) = |x|$, defined as
  $$|x| = \begin{cases} x & \text{if } x \ge 0 \\ -x & \text{if } x < 0 \end{cases}$$
  For $f(x) = |x|$, the domain is $\mathbb{R}$ and the range is $\mathbb{R}^+ \cup \{0\}$. *[diagram]*

- **Signum Function:** $y = f(x) = \operatorname{sgn}(x)$ is defined as
  $$f(x) = \begin{cases} 1 & \text{for } x > 0 \\ 0 & \text{for } x = 0 \\ -1 & \text{for } x < 0 \end{cases}$$
  It is also written as $\operatorname{sgn}(x) = \dfrac{|x|}{x}$ for $x \ne 0$, and $0$ for $x = 0$.

- **Greatest Integer / Step-up Function:** $y = f(x) = [x]$, where $[x]$ denotes the greatest integer less than or equal to $x$. For example: $-1 \le x < 0 \Rightarrow [x] = -1$; $0 \le x < 1 \Rightarrow [x] = 0$; $1 \le x < 2 \Rightarrow [x] = 1$; $2 \le x < 3 \Rightarrow [x] = 2$, and so on. The domain is $\mathbb{R}$ and the range is $\mathbb{I}$ (integers). *[diagram]*

- **Identity Function:** $f : A \to B$ defined by $f(x) = x$, $\forall x \in A$, is the identity function on $A$, denoted $I_A$. The domain and range are the entire real range $\mathbb{R}$. *[diagram]*

- **Constant Function:** $f : A \to B$ is a constant function if every element of $A$ has the same $f$ image in $B$: $f(x) = c$, $\forall x \in A$, $c \in B$. The range of a constant function is a singleton; it may be one-one or many-one, onto or into. *Example:* $f(x) = [\{x\}]$, $g(x) = \sin^2 x + \cos^2 x$, $h(x) = \operatorname{sgn}(x^2 - 3x + 4)$ are all constant functions.

---

## Multiple Choice Type Questions

**1.** Every non-empty subset of $\mathbb{N}$ contains a — *[WBUT 2014(ODD)]*
a) maximal element   b) minimal element   c) least element   d) greatest element
**Answer: (c)**

**2.** The number of binary relations on a set having 3 elements is — *[WBUT 2013(EVEN), 2016(EVEN)]*
a) $3^3$   b) $3^9$   c) $3!$   d) none of these
**Answer: (d)**

**3.** The number of subsets of a set with $n$ elements is — *[WBUT 2015(EVEN)]*
a) $n$   b) $2n$   c) $2^n - 1$   d) $2^n$
**Answer: (d)**

**4.** In the set $S = \{1, 2, 3, 4, 6, 9\}$ define a relation $R$ by $a\,R\,b$ if and only if $b$ is a multiple of $a$. Then which one of the following statements is correct? — *[WBUT 2016(ODD)]*
a) 3 and 4 are comparable   b) 9 succeeds 3   c) 3 succeeds 9   d) 4 and 6 are comparable
**Answer: (c)** `[as printed]`

**5.** If $P = \{2, 4, 6, 7, 8, 9\}$, $Q = \{1, 2, 6, 9\}$, then $P - Q$ is — *[MODEL QUESTION]*
a) $\{4, 7, 8\}$   b) $\{4, 6, 8, 9\}$   c) $\{1\}$   d) $\{2, 4, 6, 7, 8, 9\}$
**Answer: (a)**

**6.** If $A = \{1, 2, 3\}$, $B = \{a, b\}$, then $A \times B$ is given by — *[MODEL QUESTION]*
a) $\{(1,a),(1,b),(2,a),(2,b),(3,a),(3,b)\}$
b) $\{(a,1),(a,2),(a,3),(b,1),(b,2),(b,3)\}$
c) $\{(1,a),(1,b),(2,a),(2,b),(3,a),(3,b),(\ )\}$
d) $\{1, 2, 3, a, b\}$
**Answer: (a)**

**7.** If $A = \{1, 2, 3, 4, 8\}$, $B = \{2, 4, 6, 7\}$, then $A \triangle B$ is — *[MODEL QUESTION]*
a) $\{2, 4\}$   b) $\{1, 2, 3, 4, 6, 7, 8\}$   c) $\phi$   d) $\{1, 3, 6, 7, 8\}$
**Answer: (d)**

**8.** If $A = \{1, 2, 3\}$, $B = \{2, 3, 6\}$, then $A \cup B$ is — *[MODEL QUESTION]*
a) $\{1, 2, 3\}$   b) $\{2, 3\}$   c) $\{1, 2, 3, 6\}$   d) none of these
**Answer: (c)**

**9.** If $A = \{1, 2, 3\}$ and $B = \{2, 3, 6\}$, then $A \cup B$ is — *[MODEL QUESTION]*
a) $\{1, 2, 3\}$   b) $\{2, 3\}$   c) $\{1, 2, 3, 6\}$   d) none of these
**Answer: (c)**

**10.** If $A = \{1, 2, 3, 4\}$ and $B = \{2, 4, 6\}$, then $A \triangle B$ is — *[MODEL QUESTION]*
a) $\{1, 2\}$   b) $\{1, 2, 3, 6\}$   c) $\{1, 3, 6\}$   d) $\{6\}$
**Answer: (c)**

**11.** If $A = \{2, 4, 6\}$ and $B = \{1, 3, 5, 7\}$, then $A \cup B$ is — *[MODEL QUESTION]*
a) $\{0\}$   b) $\{1, 2, 3, 4, 5, 6, 7\}$   c) $\{1, 2, 4, 5, 6, 7\}$   d) $\{0, 2\}$
**Answer: (b)**

**12.** If $P = \{2, 4, 6, 7, 8, 9\}$, $Q = \{1, 2, 6, 9\}$, then $P \cap Q$ is — *[MODEL QUESTION]*
a) $\{1, 2, 6\}$   b) $\{2, 6, 9\}$   c) $\{1, 6, 9\}$   d) $\{4, 6, 9\}$
**Answer: (b)**

**13.** Which of the following is a null set? — *[MODEL QUESTION]*
a) $A = \{0\}$   b) $A = \{\phi\}$   c) $A = \{x : x \text{ is an integer } \&\ 1 < x < 2\}$   d) none of these
**Answer: (c)**

**14.** If $\{1, 2, 3, 4, 5, 6, 7\}$ is the universal set and $A = \{4, 3, 2, 1\}$, $B = \{2, 4, 6\}$, then $(A \cup B)'$ is — *[MODEL QUESTION]*
a) $\{5, 7\}$   b) $\{1, 3, 7\}$   c) $\{1, 3, 5, 6, 7\}$   d) none of these
**Answer: (a)**

**15.** If $P = \{2, 4, 6, 7, 8, 9\}$, $Q = \{1, 2, 6, 9\}$, then $P - Q$ is — *[MODEL QUESTION]*
a) $\{4, 7, 8\}$   b) $\{4, 6, 8, 9\}$   c) $\{1\}$   d) $\{2, 4, 6, 7, 8, 9\}$
**Answer: (a)**

**16.** Which of the following is a null set? — *[MODEL QUESTION]*
a) $A = \{0\}$   b) $A = \{x : x \text{ is an integer and } 1 < x < 2\}$   c) $A = \{\phi\}$   d) None of these
**Answer: (b)**

**17.** Let $f : z \to z$ be a mapping defined by $f(x) = 2x - 3$. Then the mapping $f$ is — *[MODEL QUESTION]*
a) one to one   b) onto   c) neither one-one nor onto   d) both
**Answer: (d)** `[as printed]`

**18.** $\rho$ is a relation on the set $\mathbb{R} \times \mathbb{R}$ of ordered pairs of real numbers as follows: for all $(a,b),(c,d) \in \mathbb{R} \times \mathbb{R}$, $(a,b)\,\rho\,(c,d) \Leftrightarrow a = c$. Then $\rho$ is — *[MODEL QUESTION]*
a) symmetric only   b) symmetric but not reflective   c) equivalence relation   d) none of these
**Answer: (c)**

**19.** Let $A = \mathbb{R} - \{3\}$ and $B = \mathbb{R} - \{1\}$. If $f : A \to B$, $f(x) = \dfrac{x - 2}{x - 3}$, then — *[MODEL QUESTION]*
a) $f$ is into   b) $f$ is surjective   c) $f$ is bijective   d) none of these
**Answer: (c)**

---

## Short Answer Type Questions

**1. Find the number of integers between 1 and 720 (both inclusive) that are not divisible by any of the integers 2, 3 and 5.** *[MODEL QUESTION]*

Let $A, B, C$ denote the integers from 1 to 720 divisible by 2, 3, 5 respectively.
$$n(A) = \tfrac{720}{2} = 360,\quad n(B) = \tfrac{720}{3} = 240,\quad n(C) = \tfrac{720}{5} = 145$$
$$n(A \cap B) = \tfrac{720}{6} = 120,\quad n(A \cap C) = \tfrac{720}{10} = 72,\quad n(B \cap C) = \tfrac{720}{15} = 48$$
$$n(A \cap B \cap C) = \tfrac{720}{30} = 24$$
So the required number of integers is
$$360 + 240 + 145 - (120 + 72 + 48 + 24) = 481.$$

**2. Find the number of natural numbers not greater than 1000 which are not divisible by 3, 5 or 7.** *[MODEL QUESTION]*

Let $A, B, C$ denote the natural numbers divisible by 3, 5, 7 respectively.
$$n(A) = 333,\ n(B) = 200,\ n(C) = 142$$
$$n(A \cap B) = 66,\ n(B \cap C) = 25,\ n(C \cap A) = 47,\ n(A \cap B \cap C) = 9$$
$$n(A \cup B \cup C) = 333 + 200 + 142 - 66 - 25 - 47 + 9 = 546.$$
Therefore the number of natural numbers not divisible by 3, 5 or 7 is $1000 - 546 = 454$.

**3. Write down the quantifiers in predicate calculus and symbolize the following statements: (i) Every rational number is a real number. (ii) There exists a number which is prime.** *[MODEL QUESTION]*

The quantifiers are:
- For all: $\forall$ (universal quantifier)
- There exists: $\exists$ (existential quantifier)

Let $\mathbb{Q}$ denote the set of rational numbers, $\mathbb{R}$ the set of real numbers and $P$ the set of prime numbers. Then:
$$\text{(i)}\quad \forall x \in \mathbb{Q},\ x \in \mathbb{R} \qquad\qquad \text{(ii)}\quad \exists x,\ x \in P$$

**4. In a survey of smoking habits it was found that 55% smoke cigarette-A, 50% smoke B, 42% smoke C, 28% smoke A & B, 20% smoke A & C, 12% smoke B & C and 10% smoke all three. What percentage do not smoke?** *[MODEL QUESTION]*

$$n(A) = 55,\ n(B) = 50,\ n(C) = 42,\ n(A \cap B) = 28,\ n(A \cap C) = 20,\ n(B \cap C) = 12,\ n(A \cap B \cap C) = 10$$
$$n(A \cup B \cup C) = (55 + 50 + 42) - (28 + 20 + 12) + 10 = 147 - 60 + 10 = 97$$
Therefore $100 - 97 = 3\%$ do not smoke.

**5. If $A = \{a,b,c,d,e\}$, $B = \{c,a,e,g\}$ and $C = \{b,e,f,g\}$, show that $(A \cup B) \cap C = (A \cap C) \cup (B \cap C)$.** *[MODEL QUESTION]*

$$A \cup B = \{a,b,c,d,e,g\}$$
$$(A \cup B) \cap C = \{a,b,c,d,e,g\} \cap \{b,e,f,g\} = \{b,e,g\}$$
$$A \cap C = \{b,e\},\qquad B \cap C = \{e,g\}$$
$$(A \cap C) \cup (B \cap C) = \{b,e\} \cup \{e,g\} = \{b,e,g\}$$
$$\therefore\ (A \cup B) \cap C = (A \cap C) \cup (B \cap C).$$

**6. Out of 440 students, 112 read German, 120 read French and 168 read Spanish. Of these, 32 read French and Spanish, 40 read German and Spanish, 20 read German and French, and 12 read all three. How many students (a) do not read any of the three languages, (b) read just one language?** *[MODEL QUESTION]*

$$n(G) = 112,\ n(F) = 120,\ n(S) = 168,\ n(F \cap S) = 32,\ n(G \cap S) = 40,\ n(G \cap F) = 20,\ n(G \cap F \cap S) = 12$$
$$n(G \cup F \cup S) = 112 + 120 + 168 - (32 + 40 + 20) + 12 = 320.$$

(a) Number reading none $= 440 - 320 = 120$.

(b) Reading only one language:
- Only German $= 112 - 40 - 20 + 12 = 64$
- Only French $= 120 - 32 - 20 + 12 = 80$
- Only Spanish $= 168 - 40 - 32 + 12 = 108$

**7. Prove that $(A \times B) \cap (C \times D) = (A \cap C) \times (B \cap D)$.** *[MODEL QUESTION]*

Let $(x, y)$ be an arbitrary element of $(A \times B) \cap (C \times D)$. Then
$$(x,y) \in (A \times B) \text{ and } (x,y) \in (C \times D)$$
$$\Rightarrow \{x \in A \text{ and } y \in B\} \text{ and } \{x \in C \text{ and } y \in D\}$$
$$\Rightarrow \{x \in A \text{ and } x \in C\} \text{ and } \{y \in B \text{ and } y \in D\}$$
$$\Rightarrow x \in (A \cap C) \text{ and } y \in (B \cap D) \Rightarrow (x,y) \in (A \cap C) \times (B \cap D)$$
$$\therefore (A \times B) \cap (C \times D) \subseteq (A \cap C) \times (B \cap D) \quad \ldots(1)$$
Conversely, let $(a, b) \in (A \cap C) \times (B \cap D)$. Then $a \in (A \cap C)$ and $b \in (B \cap D)$, which similarly gives $(a,b) \in (A \times B)$ and $(a,b) \in (C \times D)$, so
$$(A \cap C) \times (B \cap D) \subseteq (A \times B) \cap (C \times D) \quad \ldots(2)$$
From (1) and (2): $(A \times B) \cap (C \times D) = (A \cap C) \times (B \cap D)$.

**8. For any three sets $A, B, C$ show that $A - (B - C) = (A - B) \cup (A \cap C)$.** *[MODEL QUESTION]*

$$\text{L.H.S} = A - (B - C) = A \cap (B - C)^c = A \cap (B \cap C^c)^c = A \cap (B^c \cup C) \quad\text{[De Morgan's rule]}$$
$$= (A \cap B^c) \cup (A \cap C) = (A - B) \cup (A \cap C) = \text{R.H.S}.$$

**9. In a survey of 320 persons, those taking tea = 210, milk = 100, coffee = 70. Those taking tea & milk = 50, milk & coffee = 30, tea & coffee = 50, all three = 20. Find the number taking neither tea nor coffee nor milk.** *[MODEL QUESTION]*

Let $M, T, C$ be the sets of persons taking milk, tea, coffee.
$$n(M) = 100,\ n(T) = 210,\ n(C) = 70,\ n(M \cap T) = 50,\ n(M \cap C) = 30,\ n(T \cap C) = 50,\ n(M \cap T \cap C) = 20$$
$$n(M \cup T \cup C) = 100 + 210 + 70 - 50 - 50 - 30 + 20 = 270.$$
Number taking neither $= 320 - 270 = 50$.

**10. Let $A = \{1,2,3,4\}$ and $R = \{(1,1),(2,2),(3,3),(4,4),(1,2),(1,3),(3,2)\}$. Is $R$ an equivalence relation? Explain.** *[MODEL QUESTION]*

$R$ is reflexive and transitive but **not symmetric**, since $(1,2) \in R$ but $(2,1) \notin R$. Hence $R$ is not an equivalence relation.

**11. If $B$ is countable and $A \subset B$ ($A \ne \phi$), then $A$ is countable.** *[MODEL QUESTION]*

If $B$ is finite, $A$ is clearly finite. If $B$ is countably infinite, there is a bijection $f : B \to \mathbb{N}$. Then $f(A) \subseteq \mathbb{N}$, so by the proposition $f(A)$ is either finite or countably infinite. Since $A \sim f(A)$ ($f$ is injective), it follows that $A$ is countable.

As the following result shows, to establish that a set $A$ is countable it is enough to find a function from $\mathbb{N}$ onto $A$, or a one-to-one function from $A$ into $\mathbb{N}$; this is easier than exhibiting a bijection $\mathbb{N} \to A$.

**12. Let $A$ be a non-empty set. The following are equivalent: (1) $A$ is countable (there is a bijection $h : A \to \mathbb{I}_N$, or $h : A \to \mathbb{N}$); (2) there exists $f : \mathbb{N} \to A$ surjective; (3) there exists $g : A \to \mathbb{N}$ injective.** *[MODEL QUESTION]*

**(1) $\Rightarrow$ (2):** If $A$ is countably infinite, take $f = h$. If $A$ is finite with cardinality $N$, consider the surjective function $f_* : \mathbb{N} \to \mathbb{I}_N$, $f_*(n) = n$ for $1 \le n \le N$, $f_*(n) = N$ for $n > N$. Then $f = h \circ f_* : \mathbb{N} \to A$ is surjective.

**(2) $\Rightarrow$ (3):** Let $f$ be as in (2) and define $g : A \to \mathbb{N}$ as follows. Given $a \in A$, the preimage $f^{-1}(\{a\})$ is a non-empty subset of $\mathbb{N}$ (since $f$ is surjective). By the Well-Ordering Principle, this set has a smallest element; let $g(a)$ be it. $g$ is injective, since for $a_1 \ne a_2$ the preimages $f^{-1}(\{a_1\})$ and $f^{-1}(\{a_2\})$ are disjoint, so their smallest elements are distinct.

**(3) $\Rightarrow$ (1):** Let $g$ be as in (3). $g(A)$ is a non-empty subset of $\mathbb{N}$, hence (by Proposition 1) $g(A)$ is countable. Since $A \sim g(A)$ ($g$ injective), $A$ is countable.

**13. $\mathbb{Q} \sim \mathbb{N}$: the set of rational numbers is countably infinite.** *[MODEL QUESTION]*

Define $f : \mathbb{Z} \times \mathbb{N} \to \mathbb{Q}$ by $f(p, q) = p/q$. Since each rational number is of the form $p/q$ for some $p \in \mathbb{Z}$ and $q \in \mathbb{N}$ (not necessarily unique), $f$ is surjective. Since $\mathbb{Z} \times \mathbb{N} \sim \mathbb{N}$, it follows that $\mathbb{Q}$ is countable (hence countably infinite).

**14. Let $A_1, A_2, A_3, \ldots$ be non-empty countably infinite sets (not necessarily disjoint). Then their union $\bigcup_i A_i \sim \mathbb{N}$ is countably infinite.** *[MODEL QUESTION]*

For each $i \in \mathbb{N}$ there exists a bijection $f_i : \mathbb{N} \to A_i$. Define $f : \mathbb{N} \times \mathbb{N} \to \bigcup_i A_i$ by $f(i, j) = f_i(j)$. To see $f$ is surjective, let $x \in \bigcup_i A_i$; then $x \in A_i$ for some $i$, so $x = f_i(j)$ for some $j$, thus $x = f(i, j)$.

*Decimal-expansion preliminary:* the decimal expansion of a real number is not unique. For example $0.999999\ldots = 1$, exactly. One way to see this: $0.99999\ldots = \dfrac{9/10}{1 - 1/10} = 1$, using the geometric-series formula $\sum a q^n = \dfrac{a}{1-q}$ for $|q| < 1$. The same happens for any rational with a terminating expansion, e.g. $0.123457 = 0.12345699999\ldots$. To assign a unique expansion we choose the **non-terminating** one (eventually an infinite sequence of 9's rather than 0's). With this choice, every real number in $(0, 1]$ has a unique non-terminating expansion, giving a bijection between $(0, 1]$ and
$$\{f : \mathbb{N} \to \{0,1,\ldots,9\} \mid (\forall n)(\exists m > n)(f(m) \ne 0)\}.$$
For example $0.314515199999\ldots \leftrightarrow (3,1,4,5,1,5,1,9,9,9,9,9,\ldots)$.

**15. The set $\{x \in \mathbb{R} \mid 0 < x \le 1\}$ is uncountable.** *[MODEL QUESTION]*

Arguing by contradiction, suppose a bijection $f : \mathbb{N} \to (0, 1]$ exists. Listing the $f(n)$ by their non-terminating decimal expansions, build a bi-infinite array
$$f(1) = 0.a_{11}a_{12}a_{13}a_{14}a_{15}\ldots,\quad f(2) = 0.a_{21}a_{22}a_{23}a_{24}a_{25}\ldots,\quad \ldots$$
*[diagram: diagonal array of digits $a_{nk}$]*

Define $x = 0.d_1 d_2 d_3 d_4 d_5 \ldots$ using the diagonal entries: $d_n = a_{nn} + 1$ if $a_{nn} \in \{0,1,\ldots,8\}$ (and chosen so $d_n \ne 0$ for all $n$, giving a non-terminating expansion of a real number in $(0,1]$).

We claim that for all $n \in \mathbb{N}$, $f(n) \ne x$, contradicting that $f$ is onto: the $n$-th digit of $x$ is $d_n$, while the $n$-th digit of $f(n)$ is $a_{nn}$; these differ by construction. This concludes the proof.

*Numerical example.* Suppose the first five entries were
$$f(1) = 0.\underline{1}2034506\ldots,\ f(2) = 0.1\underline{3}579017\ldots,\ f(3) = 0.24\underline{6}08046\ldots,\ f(4) = 0.314\underline{1}5926\ldots,\ f(5) = 0.2178\underline{4}143\ldots$$
Then the first five digits of $x$ would be $x = 0.24725\ldots$, and clearly $x$ cannot be any of the listed elements.

---

## Long Answer Type Questions

**1. Answer the following:** *[MODEL QUESTION]*

**a) If $A = \{1,2,3\}$ and $B = \{x, y\}$, list all members of $A \times B$.**
$$A \times B = \{(1,x),(1,y),(2,x),(2,y),(3,x),(3,y)\}.$$

**b) If $A = \{2,4,6\}$ and $B = \{1,3,5,7\}$, find $A \cap B$.**
$$A \cap B = \phi.$$

**c) If $\mathbb{Z}$ is the set of all integers and $f(x) = |x|$ for $x \in \mathbb{Z}$, show that $f$ is not one-to-one.**
Let $x_1, x_2 \in \mathbb{Z}$. Then $f(x_1) = f(x_2) \Rightarrow |x_1| = |x_2| \Rightarrow x_1 = \pm x_2$. Therefore $f$ is not one-to-one.

**2. In a class of 50 students, 15 read Physics, 20 read Chemistry and 20 read Mathematics; 3 read Physics and Chemistry, 6 read Chemistry and Mathematics, 5 read Physics and Mathematics, and 7 read none of the subjects. How many students read all the subjects?** *[MODEL QUESTION]*

Since 7 read none, the number reading at least one subject is $50 - 7 = 43$.
$$n(P \cup C \cup M) = n(P) + n(C) + n(M) - n(P \cap C) - n(P \cap M) - n(C \cap M) + n(P \cap C \cap M)$$
$$43 = 15 + 20 + 20 - 3 - 5 - 6 + n(P \cap C \cap M)$$
$$\Rightarrow n(P \cap C \cap M) = 2.$$

**3. If $A = \{a,b,c,d,e\}$, $B = \{c,a,e,g\}$ and $C = \{b,e,f,g\}$, show that $(A \cup B) \cap C = (A \cap C) \cup (B \cap C)$.** *[MODEL QUESTION]*

$$A \cup B = \{a,b,c,d,e,g\},\quad (A \cup B) \cap C = \{b,e,g\}$$
$$A \cap C = \{b,e\},\quad B \cap C = \{e,g\},\quad (A \cap C) \cup (B \cap C) = \{b,e,g\}$$
$$\therefore (A \cup B) \cap C = (A \cap C) \cup (B \cap C).$$

**4. In a survey of 320 persons, those taking tea = 210, milk = 100, coffee = 70. Those taking tea & milk = 50, milk & coffee = 30, tea & coffee = 50, all three = 20. Find the number taking neither tea nor coffee nor milk.** *[MODEL QUESTION]*

Working out the disjoint regions:
- Milk, coffee, tea (all three) $= 20$
- Only tea & milk $= 50 - 20 = 30$
- Only milk & coffee $= 30 - 20 = 10$
- Only tea & coffee $= 50 - 20 = 30$
- Only milk $= 100 - 10 - 20 - 30 = 40$
- Only coffee $= 70 - 30 - 20 - 10 = 10$
- Only tea $= 210 - 30 - 20 - 30 = 130$

Total taking tea, coffee or milk $= 130 + 40 + 10 + 30 + 30 + 10 + 20 = 270$. Persons taking none $= 320 - 270 = 50$.

**5. If $A = \{a,b,c,d,e\}$, $B = \{c,a,e,g\}$ and $C = \{b,e,f,g\}$, show that $(A \cup B) \cap C = (A \cap C) \cup (B \cap C)$.** *[MODEL QUESTION]*

$$A \cup B = \{a,b,c,d,e,g\},\quad (A \cup B) \cap C = \{b,e,g\}$$
$$A \cap C = \{b,e\},\quad B \cap C = \{e,g\},\quad (A \cap C) \cup (B \cap C) = \{b,e,g\}$$
$$\therefore (A \cup B) \cap C = (A \cap C) \cup (B \cap C).$$

**6. a) Prove that $|A \cup B| = |A| + |B| - |A \cap B|$, where $A$ and $B$ are two non-empty sets.** *[MODEL QUESTION]*

Let $A, B$ be subsets of a universal set $S$. The sets $A \cap B^c$, $A \cap B$ and $B \cap A^c$ are disjoint. Now
$$n(A) = n(A \cap B^c) + n(A \cap B),\qquad n(B) = n(A \cap B) + n(B \cap A^c).$$
Since $A \cup B = (A \cap B^c) \cup (A \cap B) \cup (B \cap A^c)$,
$$n(A \cup B) = n(A \cap B^c) + n(A \cap B) + n(B \cap A^c)$$
$$= [n(A) - n(A \cap B)] + n(A \cap B) + [n(B) - n(A \cap B)] = n(A) + n(B) - n(A \cap B).$$

**b) If $A = \{a,b,c,d\}$, $B = \{b,c,p,q\}$, find $A \times B$, $B \times A$ and $A \triangle B$.** *[MODEL QUESTION]*

$$A \times B = \{(a,b),(a,c),(a,p),(a,q),(b,b),(b,c),(b,p),(b,q),(c,b),(c,c),(c,p),(c,q),(d,b),(d,c),(d,p),(d,q)\}$$
$$B \times A = \{(b,a),(b,b),(b,c),(b,d),(c,a),(c,b),(c,c),(c,d),(p,a),(p,b),(p,c),(p,d),(q,a),(q,b),(q,c),(q,d)\}$$
$$A \triangle B = (A \cup B) - (A \cap B) = \{a,b,c,d,p,q\} - \{b,c\} = \{a,d,p,q\}.$$

**c) Define power set. Find the power set of $\{a, b, c\}$.** *[MODEL QUESTION]*

A set formed of all the subsets of a set $S$ as its elements is called the **power set** of $S$, denoted $P(S)$. For $S = \{a,b,c\}$:
$$P(S) = \{\{a\},\{b\},\{c\},\{a,b\},\{a,c\},\{b,c\},\{a,b,c\},\phi\}.$$

**7. Let $A, B$ be sets, and let $f : A \to B$, $g : B \to A$. Then $A \cong B$.** *[MODEL QUESTION]*

*(Note: $\overline{X}$ denotes the complement of $X$.)*

Let $S := \bigcup_{i=0}^{\infty} (fg)^i \big(\overline{f(A)}\big) \subseteq B$, where $(fg)^0$ is the identity by convention. Define
$$h : A \to B,\quad x \mapsto \begin{cases} g^{-1}(x) & \text{if } x \in g(S) \\ f(x) & \text{otherwise} \end{cases}$$
and we propose that $h$ is a bijection.

The map $g$ serves as a bijection from $g(S)$ to $S$. Also, since $f$ is an injection, it is a bijection onto its image. Thus it suffices to show that the image of $g(S)$ under $f$ is exactly the complement of the image of $g$ restricted to $\overline{g(S)}$; i.e. the claim $f(\overline{g(S)}) = \overline{S}$ completes the proof.

($\subseteq$) Suppose the left-hand side is not contained in the right-hand side; then there is $x \in f(\overline{g(S)}) \cap S$. Since $x \in S$, $x = (fg)^m(z)$, $z \in \overline{f(A)}$, $m \in \mathbb{N}$. But if $m > 0$, then $x \in f(g(S))$, contradicting $x \in f(\overline{g(S)})$. Thus $x = z \in \overline{f(A)}$; but elements where $f^{-1}$ is not defined are precisely those not in $f(A)$ — a contradiction. So no such $x$ exists. *(This also shows $h$ is injective: the map defined by $f$ does not overlap with the map defined by $g^{-1}$.)*

($\supseteq$) Let $x \in \overline{S}$. Since $(fg)^0 = \mathrm{id}_B$, we have $x \in f(A)$, so $x = f(a)$, $a \in A$, and we want $a \in \overline{g(S)}$; this holds, otherwise $a \in g(S)$ would imply $x = f(a) \in S$, contradicting the choice of $x$. *(This also shows $h$ is surjective: $f$ is onto the subset of $B$ not mapped to by $g^{-1}$.)*

> *(This proof is the Schröder–Bernstein construction; portions of the source's notation on DCM-22 are partly obscured by the watermark, but the construction of $S$, the definition of $h$, and the two inclusions above are the legible, verified content.)*

**8. Prove that $(0,1)$, $(0,1]$, $[0,1]$ and $\mathbb{R}$ are equivalent sets.** *[MODEL QUESTION]*

The easiest equivalence is $(0,1) \sim \mathbb{R}$, via the bijection $f : (0,1) \to \mathbb{R}$,
$$f(x) = \begin{cases} 2 - \dfrac{1}{x} & \text{for } 0 < x < \tfrac12, \\[2mm] \dfrac{1}{1-x} - 2 & \text{for } \tfrac12 \le x < 1, \end{cases}$$
with inverse
$$f^{-1}(y) = \begin{cases} \dfrac{1}{2 - y} & \text{for } y < 0, \\[2mm] 1 - \dfrac{1}{2 + y} & \text{for } y \ge 0. \end{cases}$$
To show $(0,1] \sim (0,1)$, use the bijection $g : (0,1] \to (0,1)$,
$$g(x) = \begin{cases} \dfrac{1}{n+1} & \text{for } x = \dfrac{1}{n},\ n \in \mathbb{N}, \\[2mm] x & \text{if } x \ne \dfrac{1}{n} \text{ for all } n \in \mathbb{N}, \end{cases}$$
with inverse
$$g^{-1}(y) = \begin{cases} \dfrac{1}{n-1} & \text{for } y = \dfrac{1}{n},\ n \in \mathbb{N},\ n \ge 2, \\[2mm] y & \text{if } y \ne \dfrac{1}{n} \text{ for all } n \in \mathbb{N},\ n \ge 2. \end{cases}$$
Then $h : [0,1] \to [0,1)$ defined by $h(x) = g^{-1}(x)$ for $x \ne 0$ and $h(0) = 0$ is again a bijection, so $[0,1] \sim [0,1)$. But $F : [0,1) \to (0,1]$, $F(x) = 1 - x$, is also a bijection (with $F^{-1} = F$), so $[0,1) \sim (0,1]$. By transitivity, the claimed equivalences follow.

**9. Assume $f : A \to B$ is one-to-one and $g : B \to A$ is also one-to-one. Show that $A$ and $B$ have the same cardinality and there is a one-to-one function $h$ from $A$ onto $B$.** *[MODEL QUESTION]*

Consider the function $f : (0,1) \to [0,1]$ defined by $f(x) = x$; $f$ is one-to-one. The function $g : [0,1] \to (0,1)$ defined by $g(x) = \tfrac12 x + \tfrac18$ is also one-to-one. Let $h(x) = \tfrac12 x + \tfrac18$ give a one-to-one function $h$ from $(0,1)$ onto $[1/8, 5/8]$. Since $[1/8, 5/8] \subseteq (0,1)$, it follows that $|[0,1]| = |[1/8,5/8]| \le |(0,1)|$. Thus $|(0,1)| \le |[0,1]|$ and $|[0,1]| \le |(0,1)|$, so $(0,1) \sim [0,1]$.

> *(The source's argument on DCM-23 is a sketch invoking the Schröder–Bernstein theorem; the two injections and the conclusion above are the legible, verified parts.)*

**10. Let $A$ be any set and $2^A$ be its power set. Show that $\operatorname{card} A \ne \operatorname{card} 2^A$ (Cantor's theorem).** *[MODEL QUESTION]*

The map $x \mapsto \{x\}$ is a one-one function from $A$ into $2^A$. Hence $\operatorname{card} A \le \operatorname{card} 2^A$. We show $\operatorname{card} A \ne \operatorname{card} 2^A$.

On the contrary, suppose $\operatorname{card} A = \operatorname{card} 2^A$. Then there is a one-one onto function $\alpha : A \to 2^A$. Define $f : A \times A \to \{0,1\}$ by $f(x,y) = 1$ if $x \in \alpha(y)$ and $f(x,y) = 0$ if $x \notin \alpha(y)$.

Let $g : A \to \{0,1\}$ be any function. This defines a subset $B = \{x \in A : g(x) = 1\}$. Since $\alpha$ is onto, there is $z \in A$ such that $\alpha(z) = B$. Now $f(x, z) = g(x)$ for every $x \in A$: if $x \in B = \alpha(z)$, then $f(x,z) = 1$ and $g(x) = 1$; if $x \notin B$ (with $x \in A$), then $x \notin \alpha(z)$, so $f(x,z) = 0$ and $g(x) = 0$. Thus every function $g : A \to \{0,1\}$ is representable by $f$.

By the preceding result, every function $\{0,1\} \to \{0,1\}$ has a fixed point. However, the negation function $\neg : \{0,1\} \to \{0,1\}$, defined by $\neg(0) = 1$, $\neg(1) = 0$, has no fixed point. Therefore $\operatorname{card} A \ne \operatorname{card} 2^A$.

**11. Let $A, B$ be sets and $f : A \times A \to B$ any function such that all functions $g : A \to B$ are representable by $f$. Then every function $\phi : B \to B$ has a fixed point.** *[MODEL QUESTION]*

Suppose $f : A \times A \to B$ is such that all functions $g : A \to B$ are representable by $f$. Let $\phi : B \to B$ be any function. Define $\psi : A \to A \times A$ (Cantor's diagonalization) by $\psi(x) = (x, x)$. Let $h = \phi \circ f \circ \psi$. *[diagram: commutative square with $A \times A \xrightarrow{f} B$, $\psi$, $\phi$, and $h$]*

Since $h : A \to B$ is representable by $f$, there is $a \in A$ such that for all $x \in A$, $h(x) = f(x, a)$. In particular, $h(a) = f(a, a)$. But $h(a) = \phi(f(\psi(a))) = \phi(f(a,a))$. Writing $f(a,a) = b$, we have $\phi(b) = b$. Thus $\phi$ has a fixed point, namely $b$.

---

*End of Chapter 1.*
