# Discrete Mathematics — Chapter 3: Basic Counting Techniques

> **Source:** *Discrete Mathematics* organizer (MAKAUT/WBUT solved papers, Popular Publications), book pages DCM-43 to DCM-57.
> **Fidelity note for downstream readers (incl. LLMs):**
> - Concept summary and all multiple-choice questions/answers below were **verified against the scanned page images**, not just OCR.
> - **Answers are transcribed exactly as printed in the source.** Any printed answer that is debatable by standard combinatorics results is flagged inline as `[as printed]`; the source's letter is kept authoritative.
> - All counting formulas (permutations $P(n,r)$, combinations $C(n,r)$, factorials, pigeonhole, inclusion–exclusion), tables, and truth tables were checked against the page images (OCR is unreliable for this math subject). Any step illegible on the scan is marked `[illegible in source]` rather than guessed. Math is rendered in LaTeX.

---

## Chapter at a Glance

Here we conceptualize some counting strategies that culminate in extensive use and application of permutations and combinations. The questions raised all require that we count something, yet each involves a different approach.

### The Addition Principle

If I order one vegetable from the menu at Big Basket, how many vegetable choices does Basket offer?

Here we select one item from a collection of items. Because there are no common items among the two sets Basket has called Greens and Potatoes, we can pool the items into one large set. We use addition, here $4+5$, to determine the total number of items to choose from. This illustrates an important counting principle.

> **The Addition Principle**
> If a choice from Group I can be made in $n$ ways and a choice from Group II can be made in $m$ ways, then the number of choices possible from Group I or Group II is $n+m$.
> **Necessary Condition:** No elements in Group I are the same as elements in Group II.

This can be generalized to a single selection from more than two groups, again with the condition that all groups, or sets, are disjoint, that is, have nothing in common.

**Examples to illustrate The Addition Principle:**

Here are three sets of letters, call them sets I, II, and III:
- Set I: $\{a, m, r\}$
- Set II: $\{b, d, i, l, u\}$
- Set III: $\{c, e, n, t\}$

How many ways are there to choose one letter from among the sets I, II, or III? Note that the three sets are disjoint, or *mutually exclusive*: there are no common elements among the three sets.

Here are two sets of positive integers:
- $A = \{2, 3, 5, 7, 11, 13\}$
- $B = \{2, 4, 6, 8, 10, 12\}$

How many ways are there to choose one integer from among the sets $A$ or $B$? Note that the two sets are not disjoint. What modification can we make to the Addition Principle to accommodate this case? Try to write that modification.

### The Multiplication Principle

A "meal" at the Bistro consists of one soup item, one meat item, one green vegetable, and one dessert item from the a-la-karte menu. If Basket's friend Pierre always orders such a meal, how many different meals can be created?

We can enumerate the meals that are possible, preferably in some organized way to assure that we have considered all possibilities. Here is a sketch of one such enumeration, where $\{V, O\}$, $\{K, R\}$, $\{S, P, B, I\}$, and $\{L, A, C, F\}$ represent the items to be chosen from the soup, meat, green vegetable, and dessert menus, respectively.

```
VKSL  VKPL  VKBL  VKIL   ...and so on to...   ORIL
VKSA  VKPA  VKBA  VKIA                         ORIA
VKSC  VKPC  VKBC  VKIC                         ORIC
VKSF  VKPF  VKBF  VKIF                         ORIF
```

Take note of the enumeration process used in the table. How could you describe it in words? How else could we complete the count without identifying all possible options? A map or tree to illustrate the enumeration process provides a bridge to such a method.

We have two ways to select a soup item, two ways to select a meat item, four green vegetables to choose from, and four desserts to choose from. The matching of one soup with each meat, then each of those pairs with each of four possible green vegetables, and each of those triples with each of four possible desserts leads to the use of multiplication as a quick way to count all the possible meals we could assemble at Basket's. This suggests we use another counting principle to describe this technique.

> **The Multiplication Principle**
> If a task involves two steps and the first step can be completed in $n$ ways and the second step in $m$ ways, then there are $n \times m$ ways to complete the task.
> **Necessary Condition:** The ways each step can be completed are *independent* of each other.

This can be generalized to completing a task in more than two steps, as long as the condition holds.

**Example to illustrate The Multiplication Principle:**

Recall our three sets I, II, and III: $\{a, m, r\}$, $\{b, d, i, l, u\}$, and $\{c, e, n, t\}$. Determine the number of three-letter sets that can be created such that one letter is from set I, one letter is from set II, and one letter is from set III. Note that our choice in each set is independent of our choice in the other sets. If necessary, we could enumerate the possible three-letter, or three-element, sets.

### Permutations

In how many ways can the letters within just one set, from among I, II, and III, be ordered? In set I, we have these possibilities:

$$amr \quad arm \quad mar \quad mra \quad ram \quad rma$$

We use the Multiplication Principle to describe our selection. We have three letters to choose from in filling the first position, two letters remain to fill the second position, and just one letter left for the last position: $3 \times 2 \times 1 = 6$ different orders are possible. Likewise, for set II there are $120$ different ways to order the five letters and there are $24$ different ways to order the letters in set III. This above discussion exemplifies the concept of another basic counting strategy.

> **Permutation**
> A linear arrangement of elements for which the order of the elements must be taken into account.

We also point out the availability of factorial notation to compactly represent the specific multiplication we just carried out: $3 \times 2 \times 1 = 3!$, $5 \times 4 \times 3 \times 2 \times 1 = 5!$, and so on. So $n(n-1)(n-2)\ldots(2)(1) = n!$.

> **Factorial Notation**
> A compact representation for the multiplication of consecutive integers. We use $n!$ to represent the product $n(n-1)(n-2)\ldots(2)(1)$, where $n$ is some positive integer.

**Example to illustrate use of Permutations:**

Almost every morning or evening on the news I hear about the State of Illinois DCFS, the Department of Children and Family Services. I get confused, because our mathematics department has a committee called the Department Faculty Status Committee, or DFSC. Can you see why I'm confused? How many different 4-letter ordered arrangements, or permutations, exist for the set of letters $\{D, F, S, C\}$?

Thinking of four positions to fill, $\underline{\ \ }\,\underline{\ \ }\,\underline{\ \ }\,\underline{\ \ }$, we have $4$ letters to choose from for the first position, $3$ for the next, $2$ letters for the next position, and $1$ choice for the last position. Using the multiplication principle, there are $4 \times 3 \times 2 \times 1 = 24$ different 4-letter ordered arrangements for the set of letters $\{D, F, S, C\}$.

We can extend this application to consider ordered arrangements of only some of the elements in a set. For example, returning to the beverages menu of Big Basket's. If Basket will post only four possible soda choices, how many different ordered arrangements of the four sodas are there?

Thinking of four positions to fill, $\underline{\ \ }\,\underline{\ \ }\,\underline{\ \ }\,\underline{\ \ }$, we have $6$ sodas to choose from for the first position, $5$ for the next, $4$ sodas for the next, and $3$ sodas for the last position. Using the multiplication principle, there are $6 \times 5 \times 4 \times 3 = 360$ different ways to select and order four of the six sodas on the menu.

In general, we use the notation $P(n, r)$ to represent the number of ways to arrange $r$ objects from a set of $n$ objects. In the first problem above, we determined that $P(4,4) = 24$, and in the second we calculated $P(6,4) = 360$. The general value of $P(n, r)$ is

$$P(n, r) = n(n-1)(n-2)\ldots[n-(r-1)] \quad\text{or}\quad P(n, r) = n(n-1)(n-2)\ldots(n-r+1).$$

Note that $n$ can be any nonnegative integer. Are there any restrictions on the value of $r$?

There is a step of arithmetic we can apply to the general pattern for $P(n, r)$ to help streamline permutation calculations. In the second line below, we have multiplied by

$$\frac{(n-r)(n-r-1)\ldots(2)(1)}{(n-r)(n-r-1)\ldots(2)(1)},$$

which is just the value $1$ because the numerator and denominator are equal. In the fourth line below we see how the expression can be simplified using factorial notation.

$$
\begin{aligned}
P(n, r) &= n(n-1)(n-2)\ldots(n-r+1) \\
&= n(n-1)(n-2)\ldots(n-r+1) \cdot \frac{(n-r)(n-r-1)\ldots(2)(1)}{(n-r)(n-r-1)\ldots(2)(1)} \\
&= \frac{n(n-1)(n-2)\ldots(n-r+1)(n-r)(n-r-1)\ldots(2)(1)}{(n-r)(n-r-1)\ldots(2)(1)} \\
&= \frac{n!}{(n-r)!}
\end{aligned}
$$

Thus, we have $P(6,2) = 6!/4!$ and $P(40,8) = 40!/32!$.

What about $P(4,4)$? The result above suggests $P(4,4) = 4!/0!$. We already know that $P(4,4) = 4 \times 3 \times 2 \times 1 = 4!$. So we have $4! = 4!/0!$. For this to be true, it must be the case that $0! = 1$. As strange as that may appear, we need $0! = 1$ in order to maintain consistency within the calculations we wish to carry out.

### Combinations

What is the distinction between asking these two questions?

(i) In how many ways can a 5-card poker hand be dealt?
(ii) How many different 5-card poker hands exist?

The first question considers the order or arrangement of the cards as they are dealt. In the second question, the end result when dealt 2H, 4D, JC, 3S, 10D in that order is the same as being dealt 4D, 3S, JC, 10D, 2H in that order. In each case, the same 5-card poker hand exists. The questions help illustrate the difference between a permutation and a combination.

> **Combination**
> A collection of elements whose order does not matter.

We found $P(52, 5)$ as the solution to the first problem. That is, we arranged $5$ objects selected from among $52$ cards. For the second question, there are many arrangements that yield the same 5-card hand. We need to account for this. Let's consider a simpler problem.

How many ordered arrangements exist for the letters of the set $\{A, B, C, D, E\}$?

Using permutations, we have $P(5,5) = 5! = 120$ ways to arrange the five letters.

How many ordered arrangements are there of 3 items from the 5-element set?

We have $P(5,3) = 5 \times 4 \times 3 = 5!/2! = 60$ arrangements. For example, for the three letters $\{A, B, C\}$ we have these arrangements: ABC, ACB, BAC, BCA, CAB and CBA. This represents 6 of the 60 arrangements, yet each involves the same selection of three letters. Likewise for the three letters $\{A, C, E\}$: We have ACE, AEC, CAE, CEA, EAC, ECA. It seems that for each 3-letter subset of $\{A, B, C, D, E\}$ there are 6 arrangements of the same three letters.

This is a helpful observation in exploring the following question:

How many ways can we select three items from the 5-element set $\{A, B, C, D, E\}$ when the order of the three items is disregarded?

One way is to list the unique 3-element subsets of $\{A, B, C, D, E\}$: ABC, ABD, ABE, ACD, ACE, ADE, BCD, BCE, BDE, CDE. There are 10 such 3-element subsets.

Another way to consider the count is to use the fact that:

(i) there are $P(5,3) = 60$ ordered arrangements of the 5-element set into 3-element subsets, and
(ii) within the 60 ordered arrangements, there are 10 groups of 6 arrangements that use the same 3-letter subset. That is, $60 \div 6 = 10$ unique 3-element subsets.

Using combinatorics notation, we have

$$C(5,3) = \frac{P(5,3)}{P(3,3)} = \frac{\dfrac{5!}{2!}}{\dfrac{3!}{0!}} = \frac{5!\,0!}{2!\,3!} = \frac{5!}{2!\,3!} = C(5,3).$$

In general, we have a way to determine the number of combinations of $n$ items selected $r$ at a time, where the order of selection or the arrangement of the $r$ items is not considered:

$$C(n, r) = \frac{n!}{(n-r)!\,r!}$$

and we note that

$$C(n, r) = \frac{P(n, r)}{r!} = \frac{P(n, r)}{P(r, r)} \quad\text{because}\quad P(n, r) = \frac{n!}{(n-r)!}.$$

> **The Relationship Between Permutations and Combinations**
> If $r$ elements are to be collected or arranged from a set of $n$ elements, then the number of combinations of $n$ elements taken $r$ at a time, $C(n, r)$, is related to the number of permutations of $n$ elements taken $r$ at a time, $P(n, r)$, according to the equation
> $$C(n, r) = \frac{P(n, r)}{r!} = \frac{P(n, r)}{P(r, r)}.$$

### Circular Permutations

How many ways are there to arrange 5 children at a round table?

If we consider the case in a linear fashion, $\underline{\ \ }\,\underline{\ \ }\,\underline{\ \ }\,\underline{\ \ }\,\underline{\ \ }$, we have $P(5,5) = 5!$ arrangements. Now extend this to a circle: *[diagram: five rotations of the circular arrangement ABCDE around a round table]*

Notice that in each of these cases, the same people are sitting next to each other. Although there has been a change—a rotation—about the table, the five children are still in the same positions relative to each other. How many ways are there to rotate the unique linear relationship ABCDE? There are five such ways, all pictured in the drawing.

Thus we have $5!$ unique linear arrangements of the children, but we can group those so each group has 5 arrangements that show the children in the same position relative to each other. Therefore, we have $5!/5 = 4!$ circular permutations of the five children.

What if we arrange in a circle an $r$-element subset from an $n$-element set? Suppose we arrange 3 of the 5 children. In the linear case, there are $P(5,3) = 60$ arrangements, but we can group those so each group has 3 arrangements that show the children in the same position relative to each other. Therefore, we have $P(5,3)/3 = 5!/(2! \times 3)$ circular permutations of the five children into 3-children subsets.

> **Circular Permutation**
> A circular permutation is a circular arrangement of elements for which the order of the elements must be taken into account.
> In general:
> - For $n$ elements, there are $(n-1)!$ circular permutations.
> - The number of circular permutations of $r$-elements taken from an $n$-element set is $P(n, r)/r$.

---

## Multiple Choice Type Questions

**1.** Which of the following is congruent to 28 modulo 3? *[WBUT 2018(EVEN)]*
a) 5   b) 8   c) 13   d) 15
**Answer: (c)**

**2.** Which of the following is congruent to 56 modulo 5? *[WBUT 2019(EVEN)]*
a) 20   b) 21   c) 22   d) 23
**Answer: (b)**

**3.** If 12 distinct points are placed on the circumference of a circle and all the chords connecting these points are drawn, at how many points do the chords intersect? Assume that no three chords intersect at the same point. *[WBUT 2012(ODD)]*
a) $C(12, 2)$   b) $C(12, 4)$   c) $2^{12}$   d) $12!/2$
**Answer: (b)**

**4.** How many ways are there to travel in $xyz$ space from the origin $(0, 0, 0)$ to the point $(4, 3, 5)$ by taking unit steps in positive $x, y, z$ directions only? *[WBUT 2012(ODD), 2016(EVEN)]*
a) $4!\,3!\,5!$   b) 60   c) $12!/(5!\,4!\,3!)$   d) $3^{12}$
**Answer: (a)** `[as printed]`

**5.** In how many ways can 7 women and 3 men be arranged in a row if 3 men must always stand next to each other? *[WBUT 2013(EVEN), 2015(EVEN)]*
a) $7! \times 3!$   b) $7! + 3!$   c) $3! \times 8!$   d) $7! \times 8!$
**Answer: (a)** `[as printed]`

**6.** The number of non-negative integral solution of the equation $x + y + z = 17$, $x, y, z \ge 0$ is *[WBUT 2013(EVEN), 2015(EVEN)]*
a) 170   b) 171   c) 172   d) none of these
**Answer: (b)**

**7.** The number of permutations of a set with $k$ elements is *[WBUT 2013(ODD)]*
a) $k!$   b) $(k-1)!$   c) $(k+1)!$   d) none of these
**Answer: imprecise** `[as printed]`

**8.** In how many ways 7 different beads can be arranged to form a necklace? *[WBUT 2013(ODD)]*
a) 250   b) 300   c) 360   d) 350
**Answer: (c)**

**9.** The number of ways an even sum is obtained when 2 indistinguishable dice are thrown is *[WBUT 2015(EVEN)]*
a) 18   b) 12   c) 16   d) 14
**Answer: (a)** `[as printed]`

**10.** Total number of functions from a set of 10 elements of another set of 15 elements is *[WBUT 2016(ODD)]*
a) $10^{15}$   b) $15^{10}$   c) $2^{15}$   d) $2^{10}$
**Answer: (b)**

**11.** In how many ways can 5 letters be posted in 3 letter boxes? *[WBUT 2018(EVEN)]*
a) 25   b) 15   c) 243   d) 720
**Answer: (c)**

**12.** How many different ways can three of the letters of the word BYTES be chosen if the first letter must be B? *[WBUT 2018(ODD)]*
a) $P(4, 2)$   b) $P(2, 4)$   c) $C(4, 2)$   d) $4!$
**Answer: (c)**

**13.** Among 200 people, 150 either swim or jog or both. If 85 swim and 60 swim and jog, how many job? *[WBUT 2018(ODD)]*
a) 125   b) 225   c) 85   d) 25
**Answer: (a)** `[as printed]`

---

## Short Choice Type Questions

**1.** Use theory of congruence to prove that for $n > 1$, $17 \mid \left(2^{3n+1} + 3 \cdot 5^{2n+1}\right)$. *[WBUT 2016(EVEN)]*

**Answer:**

$$2^{3n+1} = 2 \cdot 2^{3n} = 2 \cdot 8^{n}$$
$$3 \cdot 5^{2n+1} = 3 \cdot 5 \cdot 5^{2n} = 15 \cdot 5^{2n} = 15 \cdot (25)^{n} = (17 - 2)\,25^{n}$$

$$\therefore\ 3 \cdot 5^{2n+1} + 2^{3n+1} = 17 \cdot (25)^{n} - 2 \cdot (25)^{n} - 2 \cdot 8^{n} = 17 \cdot (25)^{n} - 2\left((25)^{n} - 8^{n}\right)$$

Now $17 \cdot (25)^{n} \equiv 0 \pmod{17}$,
and $2\left((25)^{n} - 8^{n}\right) \equiv 0 \pmod{17}$.

Hence $17 \mid \left(2^{3n+1} + 3 \cdot 5^{2n+1}\right)$.

**2.** Solve the linear congruence $6x \equiv 3 \pmod 9$. *[WBUT 2017(EVEN)]*

**Answer:**

As $\gcd(6, 9) = 3$ and $3$ divides $3$ of the RHS, the congruence has $3$ incongruent solutions.

Note $6x \equiv 3 \pmod 9$ is equivalent to $2x \equiv 1 \pmod 3$.

As $\gcd(2, 3) = 1$, the congruence $2x \equiv 1 \pmod 3$ has only one solution.

We know that there exist $u, v \in \mathbb{Z}$ such that $2u + 3v = 1$ which is satisfied by $u = -1, v = 1$, so $2(-1) \equiv 1 \pmod 3$. Thus $x = -1$ is a solution of the given congruence.

The three incongruent solutions are
$$x = -1,\ -1 + 3,\ -1 + 6 \pmod 9$$
i.e., $x = -1, 2, 5 \pmod 9$.

**3.** Assume that in a group of six people, each pair of individuals are either friends or enemies. Show that there are either three mutual friends or three mutual enemies. *[WBUT 2013(ODD)]*

**Answer:**

Let us take six people as $P_1, P_2, P_3, P_4, P_5, P_6$ represented by six points. *[diagram]*

Let us start with $P_1$ and $P_2$ and assume that they are friends & label friends by 0 and enemies by 1.

Then $P_2$ and $P_3$ are also friends and proceeding this way we get all of them friends. Exactly the same arguments will lead to a situation when all are enemies and there cannot be a situation where one is a friend and the other is an enemy for a particular pair. So the problem is wrong.

**4.** State principle of inclusion and exclusion and use it to find the total number of integers between 1 and 1000 which are neither perfect squares nor perfect cubes. *[WBUT 2014(ODD)]*

**Answer:**

We use the Inclusion-Exclusion Principle. There are 1000 integers from 1 to 1000; among these numbers, 31 are perfect squares (indeed, $31^2 = 961 \le 1000$, but $32^2 > 1000$), 10 are perfect cubes (this is because $10^3 = 1000$), and 3 are both squares and cubes (these three numbers are $1^6 = 1$, $2^6 = 64$, and $3^6 = 729$). Thus, by the Inclusion-Exclusion Principle, there are $1000 - (31 + 10) + 3 = 962$ numbers that are neither perfect squares nor perfect cubes.

**5.** If there are 200 faculty members that speak French, 50 that speak Russian, 100 that speak Spanish, 20 that speak French and Russian, 60 that speak French and Spanish, 35 that speak Russian and Spanish, while only 10 speak French, Russian and Spanish, how many speak either French or Russian or Spanish? *[WBUT 2015(EVEN)]*

**Answer:**

Let $F$ be the set containing the number of faculty who speak in French and $R$, $S$ that of for Russian and Spanish respectively. *[diagram: three-set Venn diagram F, R, S in universe U]*

$$\therefore n(F) = 200,\ n(R) = 50,\ n(S) = 100$$
$$n(F \cap R) = 20,\ n(R \cap S) = 35,\ n(F \cap S) = 60,$$
$$n(F \cap S \cap R) = 10$$

No. of faculty who speak only in French is
$$n(F) - n(F \cap R) - n(F \cap S) + n(F \cap R \cap S) = 200 - 20 - 60 + 10 = 130$$

Similarly, number of faculty who speak only in Russian is
$$n(R) - n(R \cap F) - n(R \cap S) + n(R \cap F \cap S) = 50 - 20 - 35 + 10 = 5$$

and number of faculty who speak only in Spanish is
$$n(S) - n(S \cap F) - n(S \cap R) + n(S \cap R \cap F) = 100 - 60 - 35 + 10 = 15$$

**6.** State Pigeonhole Principle and solve: A box contains 10 blue balls, 20 red balls, 8 green balls, 15 yellow balls and 25 white balls. How many balls must we choose to ensure that we have 12 balls of the same colour? *[WBUT 2015(ODD)]*

**Answer:**

**Pigeonhole Principle:** If $n$ pigeonholes are occupied by $kn + 1$ or more pigeons, where $k \in \mathbb{N}$, then at least one pigeonhole is occupied by $k + 1$ or more pigeons.

Here $n = 5$, $k + 1 = 12$. So, $k = 11$. Hence $nk + 1 = 56$.

So 56 balls are to be drawn.

**7.** State pigeonhole principle. Suppose that a patient is given a prescription of 45 capsules with the instructions to take at least one capsule per day for 30 days. Then prove that there must be a period of consecutive days during which the patient takes exactly 14 capsules. *[WBUT 2017(EVEN)]*

**Answer:**

**1st Part:** Refer to Question No. 4 (1st Part) of Short Answer Type Questions.

**2nd Part:**

Let $a_1$ be the number of capsules taken until the day 1, and so on, $a_i$ be the number of capsules taken until day $i$.

Consider a sequence like $a_1, a_2, \ldots, a_{30}$ where $1 \le a_i \le 45,\ \forall a_i$.

Add 14 to each element of the sequence $a_1 + 14, a_2 + 14, \ldots, a_{30} + 14$ where
$$15 \le a_i + 14 \le 59,\ \forall a_i.$$

Now we have two sequences
1. $a_1, a_2, \ldots, a_{30}$ and
2. $a_1 + 14, a_2 + 14, \ldots, a_{30} + 14$

having 60 elements in total with each element taking a value $\le 59$.

So according to pigeonhole principle there must be at least two elements taking a same value $\le 59$ i.e., $a_i = a_j + 14$ for some $i$ and $j$.

Therefore, there exist at one period, $a_j$ to $a_i$, in which the patient takes 14 capsules.

**8.** Prove that any sequence of six integers must contain a subsequence whose sum is divisible by six. *[WBUT 2017(EVEN)]*

**Answer:**

Let $\{a_n\}$ be a sequence of integers.

Now consider the sums
$$b_0 = 0$$
$$b_1 = a_1$$
$$b_2 = a_1 + a_2$$
$$b_3 = a_1 + a_2 + a_3$$
etc.... up to
$$b_n = a_1 + a_2 + a_3 + \ldots + a_n$$

There are $n+1$ of the $b_i$'s and only $n$ possible remainders modulo $n$, so two of the $b_i$ are congruent modulo $n$. So suppose $b_j \equiv b_k \pmod n$ $(k > j)$.

Then
$$b_k - b_j = a_1 + a_2 + \ldots + a_k - (a_1 + a_2 + \ldots + a_j) = a_{j+1} + a_{j+2} + a_{j+3} + \ldots + a_k$$

is divisible by $n$.

So the sequence contains a subsequence
$$c_i = a_{j+i} \quad \text{for } i = 1 \text{ to } k - j$$
whose sum is divisible by $n$.

**9.** Find the total number of integers lying between 1 and 1000 that are divisible by at least one of 2, 3, 7. *[WBUT 2017(ODD)]*

**Answer:**

Let $A$, $B$, $C$ denote the numbers between 1 and 1000, divisible by 2, 3 and 7 respectively.

Then $A = \{2, 4, 6, \ldots, 1000\}$ and $n(A) = 500$
$B = \{3, 6, 9, \ldots, 999\}$ and $n(B) = 333$
$C = \{7, 14, 21, \ldots, 994\}$ and $n(C) = 142$
$A \cap B = \{6, 12, 18, \ldots, 996\}$ and $n(A \cap B) = 166$
$B \cap C = \{21, 42, \ldots, 987\}$ and $n(B \cap C) = 47$
$C \cap A = \{14, 28, \ldots, 994\}$ and $n(C \cap A) = 71$
$A \cap B \cap C = \{42, 84, \ldots, 966\}$ and $n(A \cap B \cap C) = 23$

$\therefore$ The total number of integers lying between 1 and 1000 and divisible by 2, 3 or 7
$$= n(A \cup B \cup C) = n(A) + n(B) + n(C) - n(A \cap B) - n(B \cap C) - n(C \cap A) + n(A \cap B \cap C)$$
$$= 500 + 333 + 142 - 166 - 47 - 71 + 23 = 714$$

**10.** **a)** State the principle of Inclusion and Exclusion. *[WBUT 2012(EVEN)]*
**b)** Show that if $A$ and $B$ are subsets of some universal set $S$ then $|A \cup B| = |A| + |B| - |A \cap B|$.

**Answer:**

**a)** Refer to Question No. 2 (1st Part) of Short Answer Type Questions.

**b)** If $A$ and $B$ are two sets, then
$$|A \cup B| = |A| + |B| - |A \cap B|$$

Let $A$ contains $x$ elements common with $B$ and there are $y$ elements in $A$, not common with $B$. Then $|A| = x + y$, $|A \cap B| = x$.

If $z$ be the no. of elements in $B$, not common with $A$, then
$$|B| = x + z,\quad |A \cup B| = x + y + z$$

Hence $|A \cup B| = |A| + |B| - |A \cap B|$.

**11.** **a)** State the "Pigeon Hole Principle" and the "Generalized Pigeon Hole Principle". *[WBUT 2018(EVEN)]*
**b)** Prove the "Generalized Pigeon Hole Principle." *[WBUT 2018(EVEN), 2019(EVEN)]*

**Answer:**

**a)** If $n$ pigeons are assigned to $m$ pigeonholes and $n > m$, then at least one pigeonhole contains two or more pigeons.

If there are $n$ pigeonholes occupied by $nk + 1$ pigeons, then there must be at least one pigeonhole occupied by $k + 1$ or more pigeons.

**b)** The generalized pigeonhole principle: If $N$ objects are placed into $k$ boxes, then there is at least one box containing at least $\lceil N/k \rceil$ objects.

**Proof:** Suppose none of the boxes contains $N/k$ or more objects.

Then every box contains at most $N/k - 1$ objects.

So, the total number of objects is at most $k(N/k - 1)$.

But $N/k - 1 < N/k$.

Thus, the total number of objects is less than $k(N/k)$, i.e. less than $N$.

This is a contradiction. End of proof.

**12.** Obtain the CNF of $\neg(p \to (q \wedge r))$. *[WBUT 2018(ODD)]*

**Answer:**

We make the truth table for $\neg\{p \to (q \wedge r)\}$.

| $p$ | $q$ | $r$ | $q \wedge r$ | $p \to (q \wedge r)$ | $\neg\{p \to (q \wedge r)\}$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 1 | 1 | 1 | 1 | 1 | 0 |
| 1 | 1 | 0 | 0 | 0 | 1 |
| 1 | 0 | 1 | 0 | 0 | 1 |
| 1 | 0 | 0 | 0 | 0 | 1 |
| 0 | 1 | 1 | 1 | 1 | 0 |
| 0 | 1 | 0 | 0 | 1 | 0 |
| 0 | 0 | 1 | 0 | 1 | 0 |
| 0 | 0 | 0 | 0 | 1 | 0 |

The required CNF is
$$(\neg p \vee \neg q \vee \neg r) \wedge (p \vee \neg q \vee \neg r) \wedge (\neg p \vee q \vee \neg r) \wedge (p \vee q \vee r)$$

---

## Long Answer Type Questions

**1.** **a)** Prove the Pascal's identity: $C(n, r) = C(n-1, r) + C(n-1, r-1)$, where the notation carries usual meaning. *[WBUT 2013(EVEN), 2019(EVEN)]*

**Answer:**

$$
\begin{aligned}
C(n-1, r) + C(n-1, r-1) &= \frac{(n-1)!}{r!\,(n-1-r)!} + \frac{(n-1)!}{(r-1)!\,(n-r)!} \\
&= \frac{(n-r)\,(n-1)!}{r!\,(n-r)(n-1-r)!} + \frac{r\,(n-1)!}{r(r-1)!\,(n-r)!} \\
&= \frac{(n-r)\,(n-1)! + r\,(n-1)!}{r!\,(n-r)!} \\
&= \frac{(n-1)!\,[(n-r) + r]}{r!\,(n-r)!} = \frac{n!}{r!\,(n-r)!} = C(n, r)
\end{aligned}
$$

**b)** State Pigeonhole principle. Using that prove that if any five numbers from 1 to 8 are selected, then two of them will add to 9. *[WBUT 2013(EVEN), 2016(EVEN), 2019(EVEN)]*

**OR,**

Show that if 5 integers from 1 to 8 are chosen, then at least 2 of them will add to 9. *[WBUT 2019(EVEN)]*

**Answer:**

**Pigeonhole Principle:** If $n$ number of pigeonhole be accommodated by $m$ number of pigeon $(n < m)$ then at least one of the pigeonhole must be filled up by more than one pigeon.

Here, 8 numbers (1 to 8) will be filled up in 5 places. According to pigeonhole principle, at least one of places will be filled up by more than one numbers. So there exist at least one place where sum of the two or more digits (in that place where more than digits are placed) is 9.

**c)** Using Pigeonhole principle, find the total number of natural numbers that must be chosen to be sure of getting at least two of them whose difference is divisible by 11. *[WBUT 2012(EVEN)]*

**Answer:**

We consider the congruence classes $[0], [1], [2], \ldots, [10]$. Pigeonhole as 11. If any 12 natural numbers are chosen, at least two of them will occupy the same class. Hence their difference will be divisible by 11.

Thus the required number is 12.

**2.** **a)** Using principle of inclusion and exclusion show that for any three sets $A$, $B$ and $C$, $n(A \cup B \cup C) = n(A) + n(B) + n(C)$ if they are pairwise mutually disjoint. *[WBUT 2013(ODD)]*

**Answer:**

By the principle of inclusion and exclusion,
$$n(A \cup B \cup C) = n(A) + n(B) + n(C) - n(A \cap B) - n(B \cap C) - n(C \cap A) + n(A \cap B \cap C)$$

But $A$, $B$, $C$ are pairwise mutually disjoint means
$$P(A \cap B) = P(B \cap C) = P(C \cap A) = 0 \quad\text{and}\quad P(A \cap B \cap C) = 0$$

Hence $n(A \cup B \cup C) = n(A) + n(B) + n(C)$.

**b)** Let $D$ be a square drawn in the plane with sides of length $\sqrt{2}$. Prove that in every set of 5 distinct points in $D$, there exist two points whose distance from one another is at most 1. *[WBUT 2013(ODD)]*

**Answer:**

Let $D$ be a square with all the four sides of length $\sqrt{2}$. To see whether it is possible to get two points with distance more than 1, we first place four points as farthest as possible and the best option is putting the points on the four vertices. In that case if we try to choose the fifth point as apart as possible from the other four vertices, the only choice is the centre of the square. But even then there are two points viz. the centre and any one vertex will have distance 1. In all other cases availability of two points with mutual distance $\le 1$ is obvious. Hence the proof.

**c)** Find the minimum number of students in a class to be sure that six of them are born in the same month. *[WBUT 2013(ODD)]*

**Answer:**

By the Pigeonhole principle, it is clear that if there are at least 61 students [the condition is met].

**3.** Obtain the CNF of $\neg(p \to (p \to r))$. *[WBUT 2019(EVEN)]*

**Answer:**

We make the truth table for $\neg(p \to (p \to r))$.

| $p$ | $r$ | $p \to r$ | $p \to (p \to r)$ | $\neg(p \to (p \to r))$ |
|:---:|:---:|:---:|:---:|:---:|
| 1 | 1 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 | 1 |
| 0 | 1 | 1 | 1 | 0 |
| 0 | 0 | 1 | 1 | 0 |

Hence the required CNF is
$$(\neg p \vee \neg r) \wedge (\neg p \vee r) \wedge (p \vee r)$$
