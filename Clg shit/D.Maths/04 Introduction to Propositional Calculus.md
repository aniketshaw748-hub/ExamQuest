# Discrete Mathematics — Chapter 4: Introduction to Propositional Calculus

> **Source:** *Discrete Mathematics* organizer (MAKAUT/WBUT solved papers, Popular Publications), book pages DCM-58 to DCM-79.
> **Fidelity note for downstream readers (incl. LLMs):**
> - Concept summary, all multiple-choice questions/answers, truth tables, and logical formulas below were **verified against the scanned page images**, not just OCR (OCR is unreliable for logic symbols $\land \lor \lnot \to \leftrightarrow \equiv$ and quantifiers $\forall \exists$).
> - **Answers are transcribed exactly as printed in the source.** Several printed MCQ answers are debatable by standard logic results; these are flagged inline as `[as printed]` and the source's letter is kept authoritative.
> - Truth tables are reproduced as Markdown tables. Any value or symbol illegible on the scan is marked `[illegible in source]` rather than guessed. Math is rendered in LaTeX.
> - The later Long-Answer questions (Q8 onward) drift into group-theory / homomorphism "model questions" as printed in the book; they are reproduced faithfully even though they fall outside propositional calculus.

---

## Chapter at a Glance

In propositional logic we consider **declarative sentences**. Examples:

- "The sun is red"
- "All sparrows are birds"
- "My name is Torben"
- "It is raining"

**Note:** There are other sorts of sentences.

### Syntax of propositional logic

The propositional symbols $p, q, r, \ldots$ stand for propositions. Propositional symbols are **atomic formulas**, with which **compound formulas** are built using the connectives $\lnot, \land, \lor, \Rightarrow$ together with parentheses. The connectives stand respectively for "not", "and", "or", "implies".

**Examples of formulas:**
$$\lnot p,\quad (\lnot p \lor q),\quad (p \Rightarrow q),\quad (((p \Rightarrow q) \land p) \Rightarrow q)$$
The formula $\lnot p$ is built using the connective $\lnot$ and the atomic formula $p$. The formula $(\lnot p \lor q)$ is built using the connective $\lor$ and the formulas $\lnot p$ and $q$, etc. Parentheses are often omitted, as in the formula $\lnot p \lor q$.

Declarative sentences are symbolized using formulas. **Examples of symbolizations:** If $p$ and $q$ symbolize the sentences "The sun is red" and "My name is Torben", then the formula $\lnot p$ symbolizes the sentence "The sun is not red" and $\lnot p \lor q$ symbolizes "The sun is not red or my name is Torben".

### Semantics of propositional logic

We call $T$ or $F$ **truth-values**. To assign a propositional symbol the truth-value $T$ is to assume that it stands for a true proposition. Analogously, to assign a propositional symbol the truth-value $F$ is to assume that it stands for a false proposition. A propositional symbol is assigned either $T$ or $F$.

**Truth-tables:** To each connective there is a truth-table.

| $\varphi$ | $\lnot\varphi$ |
|:--:|:--:|
| T | F |
| F | T |

| $\varphi$ | $\psi$ | $\varphi\land\psi$ | $\varphi\lor\psi$ | $\varphi\Rightarrow\psi$ |
|:--:|:--:|:--:|:--:|:--:|
| T | T | T | T | T |
| T | F | F | T | F |
| F | T | F | T | T |
| F | F | F | F | T |

Thereby any compound formula can be given a truth-table (Greek letters $\varphi, \psi, \theta, \ldots$ stand for arbitrary formulas).

**Examples of truth tables:**

| $p$ | $\lnot p$ |
|:--:|:--:|
| T | F |
| F | T |

| $p$ | $\lnot\lnot p$ |
|:--:|:--:|
| T | T |
| F | F |

| $p$ | $\lnot p$ | $p\lor\lnot p$ |
|:--:|:--:|:--:|
| T | F | T |
| F | T | T |

| $p$ | $q$ | $\lnot p$ | $\lnot p\lor q$ |
|:--:|:--:|:--:|:--:|
| T | T | F | T |
| T | F | F | F |
| F | T | T | T |
| F | F | T | T |

| $p$ | $q$ | $\lnot q$ | $p\land\lnot q$ | $\lnot(p\land\lnot q)$ |
|:--:|:--:|:--:|:--:|:--:|
| T | T | F | F | T |
| T | F | T | T | F |
| F | T | F | F | T |
| F | F | T | F | T |

### Alternative to truth-tables

- $\lnot\varphi$ is true if and only if $\varphi$ is not true.
- $\varphi\land\psi$ is true if and only if $\varphi$ is true and $\psi$ is true.
- $\varphi\lor\psi$ is true if and only if $\varphi$ is true or $\psi$ is true.
- $\varphi\Rightarrow\psi$ is true if and only if $\varphi$ is true implies that $\psi$ is true.

Such truth-conditions contain the same information as the truth-tables.

### A couple of definitions

- A formula is a **tautology** if and only if it is true whatever truth values the involved propositional symbols are assigned.
- Two formulas are **logically equivalent** if and only if they have the same truth-table. (That is, the formulas $\varphi$ and $\psi$ are logically equivalent if and only if the formula $(\varphi\Rightarrow\psi)\land(\psi\Rightarrow\varphi)$ is a tautology.)

---

## Multiple Choice Type Questions

**1.** $A\land B$ is equivalent to which of the following? — *[WBUT 2012(ODD), 2016(EVEN)]*
a) $\lnot A\to\lnot B$   b) $\lnot A\to B$   c) $\lnot B\to A$   d) $\lnot(A\to\lnot B)$
**Answer: (d)**

**2.** A disjunctive normal form of $P\to Q$ is — *[WBUT 2013(EVEN), 2016(EVEN), 2016(ODD)]*
a) $\sim P\lor Q$   b) $P\lor\sim Q$   c) $(\sim P\land Q)\lor(P\land\sim Q)$   d) $(P\land Q)\lor(P\land\sim Q)$
**Answer: (a)**

**3.** $\sim(p\lor q)\lor(\sim p\land q)\equiv$ — *[WBUT 2013(EVEN), 2016(EVEN)]*
a) $\sim p$   b) $p$   c) $\sim q$   d) $q$
**Answer: (d)** `[as printed]`

**4.** $\sim(p\lor q)\lor(p\land\sim q)\equiv$ — *[WBUT 2013(ODD), 2015(EVEN)]*
a) $\sim p$   b) $p$   c) $\sim q$   d) none of these
**Answer: (c)**

**5.** The proposition $p\lor(q\land\sim q)$ is a — *[WBUT 2014(ODD), 2017(EVEN)]*
a) contradiction   b) tautology   c) both (a) and (b)   d) none of these
**Answer: (a)** `[as printed]`

**6.** $A\to B$ is equivalent to — *[WBUT 2014(ODD)]*
a) $\sim A\to\sim B$   b) $\sim A\to B$   c) $\sim B\to A$   d) $\sim(A\to\sim B)$
**Answer: (d)** `[as printed]`

**7.** The truth value of the statement '$x^2+4=0$ holds for some real values of $x$' is — *[WBUT 2015(ODD)]*
a) true   b) false   c) both (a) and (b)   d) none of these
**Answer: (d)** `[as printed]`

**8.** If $p$: 'Anil is rich' and $q$: 'Kanchan is poor', then the symbolic form of the statement 'Either Anil or Kanchan is rich' is — *[WBUT 2015(ODD), 2017(EVEN)]*
a) $p\lor q$   b) $p\lor\sim q$   c) $\sim p\lor q$   d) $\sim(p\land q)$
**Answer: (a)**

**9.** $P\to(P\lor Q)$ is a — *[WBUT 2016(ODD)]*
a) tautology   b) contradiction   c) contingency   d) none of these
**Answer: (d)** `[as printed]`

**10.** Contrapositive of '$\sim p\to q$' is — *[WBUT 2017(EVEN)]*
a) $p\to q$   b) $\sim q\to\sim p$   c) $\sim q\to p$   d) $q\to\sim p$
**Answer: (c)**

**11.** The truth of the statement '$x^2=x$ holds for all real values of $x$' is — *[WBUT 2017(EVEN)]*
a) T   b) F   c) both (a) and (b)   d) none of these
**Answer: (a)** `[as printed]`

**12.** $\lnot p\lor(q\land\lnot q)$ is equivalent ($\equiv$) to — *[WBUT 2017(ODD)]*
a) $q$   b) $\lnot q$   c) $p$   d) $\lnot p$
**Answer: (d)**

**13.** Let $L(x, y)$ be the statement "$x$ likes $y$" and the domain for $x, y$ consists of all people in the world. Then we can express "Nobody likes everybody" as — *[WBUT 2017(ODD)]*
a) $\forall x\exists y\,L(x, y)$   b) $\forall x\exists y\lnot L(x, y)$   c) $\forall x\forall y\lnot L(x, y)$   d) none of these
**Answer: (c)** `[as printed]`

**14.** The statement "The sun rises in the north" is — *[WBUT 2018(EVEN)]*
a) not a proposition   b) true proposition   c) false proposition   d) None of these
**Answer: (d)** `[as printed]`

**15.** Contrapositive of '$p\to\sim q$' is — *[WBUT 2018(EVEN)]*
a) $\sim q\to p$   b) $q\to\sim p$   c) $\sim p\to q$   d) $\sim q\to\sim p$
**Answer: (d)** `[as printed]`

**16.** Which of the following statement is correct? — *[WBUT 2018(EVEN)]*
a) $\sim\forall x\,P(x)\equiv\exists x\sim P(x)$   b) $\sim\forall_x P(x)\equiv\sim\exists_x P(x)$   c) $\sim\exists x\,P(x)\equiv\forall x\,P(x)$   d) $\exists x\,P(x)\equiv\sim\forall x\,P(x)$
**Answer: (a)**

**17.** If $p=$ "It is raining", $q=$ "She will go to college", then "It is raining and she will not go to college" will be denoted by — *[WBUT 2018(ODD)]*
a) $p\land\sim q$   b) $p\land q$   c) $\sim(p\land q)$   d) $\sim p\land q$
**Answer: (a)**

**18.** The statement $p\leftrightarrow q=(p\to q)\land(q\to p)$ describes — *[WBUT 2018(ODD)]*
a) Commutative Law   b) Implication Laws   c) Exportation Law   d) Equivalence
**Answer: (d)**

**19.** The statement 'Please close the door' is — *[WBUT 2019(EVEN)]*
a) not a proposition   b) true proposition   c) false proposition   d) none of these
**Answer: (a)**

**20.** "Not $p$ unless $q$" is represented as — *[WBUT 2019(EVEN)]*
a) $q\to p$   b) $p\to q$   c) $p\leftrightarrow q$   d) none of these
**Answer: (d)** `[as printed]`

**21.** Inverse of $\sim p\to q$ is — *[WBUT 2019(EVEN)]*
a) $q\to\sim p$   b) $\sim q\to\sim p$   c) $\sim q\to p$   d) $p\to\sim q$
**Answer: (d)**

**22.** If 5 is less than 2 then sun rises in the west. The statement is — *[WBUT 2019(EVEN)]*
a) true   b) false   c) this is not a statement   d) cannot be determined
**Answer: (a)**

**23.** If $p$ is a statement then which of the following is a tautology? — *[WBUT 2019(EVEN)]*
a) $p\land\sim p$   b) $p\land T$   c) $p\lor F$   d) $p\lor\sim p$
**Answer: (d)**

---

## Short Answer Type Questions

**1.** Show that the following pairs of propositions are logically equivalent: — *[WBUT 2013(EVEN), 2013(ODD), 2015(EVEN), 2015(ODD)]*
a) $\sim((\sim p\land q)\lor(\sim p\land\sim q))\lor(p\land q)$ and $p$
b) $p\to(q\to r)$ and $(p\land q)\to r$

**Answer:**

**a)** We construct the truth table as follows (using $1=T$, $0=F$):

| $p$ | $q$ | $\sim p$ | $\sim q$ | $\sim p\land q$ | $\sim p\land\sim q$ | $\sim((\sim p\land q)\lor(\sim p\land\sim q))$ | $\sim((\sim p\land q)\lor(\sim p\land\sim q))\lor(p\land q)$ |
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| 1 | 1 | 0 | 0 | 0 | 0 | 1 | 1 |
| 1 | 0 | 0 | 1 | 0 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 | 1 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 | 0 | 1 | 0 | 0 |

Since the columns for $\sim((\sim p\land q)\lor(\sim p\land\sim q))\lor(p\land q)$ and $p$ are identical, they are logically equivalent.

**b)** The truth tables for the given propositional functions:

| $p$ | $q$ | $r$ | $q\to r$ | $p\to(q\to r)$ | $p\land q$ | $(p\land q)\to r$ |
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| 1 | 1 | 0 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 | 1 | 0 | 1 |
| 0 | 1 | 1 | 1 | 1 | 0 | 1 |
| 0 | 1 | 0 | 0 | 1 | 0 | 1 |
| 0 | 0 | 1 | 1 | 1 | 0 | 1 |
| 0 | 0 | 0 | 1 | 1 | 0 | 1 |

As the columns for $p\to(q\to r)$ and $(p\land q)\to r$ are identical, $p\to(q\to r)\equiv(p\land q)\to r$.

**2.** Write an equivalent formula for $p\land(q\leftrightarrow r)\lor(r\leftrightarrow p)$ which involves only the connectives $(\sim,\lor)$. — *[WBUT 2013(ODD)]*

**Answer:** Use $p\to q=\lnot p\lor q$ and $p\land q=\sim(\sim p\lor\sim q)$.

**3.** Show that $(p\to q)\land(q\to r)\to(p\to r)$ is a tautology. — *[WBUT 2014(ODD)]*

**Answer:** We make the following truth table.

| $p$ | $q$ | $r$ | $p\to q$ | $q\to r$ | $p\to r$ | $(p\to q)\land(q\to r)$ | Formula |
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| 1 | 1 | 0 | 1 | 0 | 0 | 0 | 1 |
| 1 | 0 | 1 | 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 0 | 1 | 0 | 0 | 1 |
| 0 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| 0 | 1 | 0 | 1 | 0 | 1 | 0 | 1 |
| 0 | 0 | 1 | 1 | 1 | 1 | 1 | 1 |
| 0 | 0 | 0 | 1 | 1 | 1 | 1 | 1 |

Hence the given formula is a tautology.

**4.** Find the PDNF and PCNF of the following statement: — *[WBUT 2015(EVEN)]*
$$(p\land q)\lor(\sim p\land q)\lor(q\land r)$$

**Answer:** Truth table:

| $p$ | $q$ | $r$ | $p\land q$ | $\sim p$ | $\sim p\land q$ | $q\land r$ | $(p\land q)\lor(\sim p\land q)\lor(q\land r)$ |
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 |
| 1 | 1 | 0 | 1 | 0 | 0 | 0 | 1 |
| 1 | 0 | 1 | 0 | 0 | 0 | 0 | 1 `[as printed]` |
| 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 `[as printed]` |
| 0 | 1 | 1 | 0 | 1 | 1 | 1 | 1 |
| 0 | 1 | 0 | 0 | 1 | 1 | 0 | 1 |
| 0 | 0 | 1 | 0 | 1 | 0 | 0 | 1 `[as printed]` |
| 0 | 0 | 0 | 0 | 1 | 0 | 0 | 1 `[as printed]` |

So the PDNF is $pqr + pqr' + pq'r + pq'r' + p'qr + p'qr' + p'q'r + p'q'r'$.

This is a tautology, so PCNF is not possible. `[as printed — the book's final column and PDNF treat the formula as a tautology with all eight minterms; note that $(p\land q)\lor(\sim p\land q)\lor(q\land r)\equiv q$, which is true only for the four minterms with $q=1$, so this printed result is mathematically incorrect.]`

**5.** Show that the premises "one student in this class knows how to write programs in JAVA" and "Everyone who knows how to write programs in JAVA can get a high paying job" imply the conclusion "Someone in this class can get a high paying job". — *[WBUT 2015(EVEN)]*

**Answer:** Let $C(x)$ represent "$x$ in this class", $J(x)$ represent "$x$ knows JAVA programming" and $H(x)$ represent "$x$ gets a high salaried job".

Then the given premises are $\exists x(C(x)\land J(x))$ and $\forall x(J(x)\to H(x))$. The conclusion is $\exists x(C(x)\land H(x))$.

**6.** Show that the inverse of an element $n$ in $\mathbb{Z}_m$ will exist if and only if $\gcd(n, m)=1$. — *[WBUT 2015(ODD)]*

**Answer:** We note $\mathbb{Z}_m=\{0,1,2,\cdots,m-1\}\pmod m$.

Suppose we wish to find the modular multiplicative inverse $x$ of 3 modulo 11.
$$x\equiv 3^{-1}\pmod{11}$$
This is the same as finding $x$ such that
$$3x\equiv 1\pmod{11}$$
Working in $\mathbb{Z}_{11}$, we find one value of $x$ that satisfies this congruence is 4, because
$$3(4)=12\equiv 1\pmod{11}$$
And there are no other values of $x$ in $\mathbb{Z}_{11}$ that satisfy this congruence. Therefore, the modular multiplicative inverse of 3 modulo 11 is 4.

**7.** Obtain the conjunctive normal form of the following statement: — *[WBUT 2015(ODD)]*
$$(p\to(q\land r))\land(\sim p\to(\sim q\land\sim r))$$

**Answer:** We make the truth table of the given formula:

| $p$ | $q$ | $r$ | $\sim p$ | $\sim q$ | $\sim r$ | $q\land r$ | $\sim q\land\sim r$ | $p\to(q\land r)$ | $\sim p\to(\sim q\land\sim r)$ | $f$ |
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| 1 | 1 | 1 | 0 | 0 | 0 | 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 0 |
| 1 | 0 | 0 | 0 | 1 | 1 | 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 1 | 0 | 0 | 1 | 0 | 1 | 0 | 0 |
| 0 | 1 | 0 | 1 | 0 | 1 | 0 | 0 | 1 | 0 | 0 |
| 0 | 0 | 1 | 1 | 1 | 0 | 0 | 0 | 1 | 0 | 0 |
| 0 | 0 | 0 | 1 | 1 | 1 | 0 | 1 | 1 | 1 | 1 |

Hence the CNF is
$$(x'+y'+z)(x'+y+z')(x'+y+z)(x+y'+z')(x+y'+z)(x+y+z')$$

**8.** Prove that $[(p\lor q)\to(p\to r)]\to[(q\to r)\to r]$ is a tautology. — *[WBUT 2016(EVEN)]*

**Answer:** Let us construct the truth table (all eight rows of the final column evaluate to 1):

| $p$ | $q$ | $r$ | $p\to r$ | $p\lor q$ | $(p\lor q)\to(p\to r)$ | $q\to r$ | $(q\to r)\to r$ | Formula |
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| 1 | 1 | 0 | 0 | 1 | 0 | 0 | 1 | 1 |
| 1 | 0 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 1 |
| 0 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| 0 | 1 | 0 | 1 | 1 | 1 | 0 | 1 | 1 |
| 0 | 0 | 1 | 1 | 0 | 1 | 1 | 1 | 1 |
| 0 | 0 | 0 | 1 | 0 | 1 | 1 | 0 | 1 |

So, $[(p\lor q)\to(p\to r)]\to[(q\to r)\to r]$ is a tautology.

> *Note: the column layout above is reconstructed to match the book's printed final column, which is all 1's. Intermediate cells were partly compressed in the scan; the final "Formula" column (all 1's, hence tautology) is as printed.*

**9.** Show that $(\lnot q\land(p\to q))\to\lnot p$ is a tautology. — *[WBUT 2016(ODD)]*

**Answer:**

| $p$ | $q$ | $\lnot p$ | $\lnot q$ | $p\to q$ | $\lnot q\land(p\to q)$ | $(\lnot q\land(p\to q))\to\lnot p$ |
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| T | T | F | F | T | F | T |
| T | F | F | T | F | F | T |
| F | T | T | F | T | F | T |
| F | F | T | T | T | T | T |

Since the truth values of the given compound proposition is $T$ for all combinations of $p$ and $q$, it is a tautology.

**10.** Find CNF of $\lnot(p\lor q)\leftrightarrow(p\land q)$ using laws of proposition. — *[WBUT 2016(ODD)]*

**Answer:**
$$\lnot(p\lor q)\leftrightarrow(p\land q)$$
$$\equiv(\lnot p\land\lnot q)\leftrightarrow(p\land q)$$
$$\equiv((\lnot p\land\lnot q)\land(p\land q))\lor(\lnot(\lnot p\land\lnot q)\land\lnot(p\land q))$$
$$\equiv(\lnot p\land\lnot q)\land(p\land q)\lor(p\lor q)\land(\lnot p\lor\lnot q)$$
$$\equiv(p\land\lnot p)\land(q\land\lnot q)\lor(p\lor q)\land(\lnot p\lor\lnot q)$$
$$\equiv F\land F\lor(p\lor q)\land(\lnot p\lor\lnot q)$$
$$\equiv(p\lor q)\land(\lnot p\lor\lnot q)$$
which is the required CNF.

**11.** Verify the validity of the following statements: — *[WBUT 2017(EVEN)]*
- Every living thing is a plant or an animal
- My cat is an animal and it is not a plant
- All animals have lungs
- My cat has lungs

**Answer:** Let $Li$ denote the set of living things, $P$ denote the set of plants and $A$ denote the set of animals. Let $L$ denote the set of animals having lungs.

Then we have
$$\forall(x\in Li\Rightarrow x\in P\lor A)$$
$$c\in A,\ c\notin P$$
$$\forall(x\in A\Rightarrow x\in L)$$
$$\therefore c\in L$$
So the argument is valid.

**12.** Using the laws of propositional logic, show that $\models(p\land q)\to(p\lor q)$. — *[WBUT 2017(ODD)]*

**Answer:** We have
$$(p\land q)\to(p\lor q)=\lnot(p\land q)\lor(p\lor q)$$
$$=(\lnot p\land q)\lor(p\lor q)=[\lnot p\lor(p\lor q)]\land[\lnot q\lor(p\lor q)]$$
$$=[(\lnot p\lor p)\lor q]\land[p\lor(q\lor\lnot q)]=[1\lor q]\land[p\lor 1]$$
$$=1\land 1=1.$$

**13.** a) Justify the statement: "Converse of inverse of an implication is equivalent to its inverse of converse." b) Draw the truth table of "not $p$ unless $q$". — *[WBUT 2018(EVEN)]*

**Answer:**

**a)** If $p\to q$, then its inverse is $\sim p\to\sim q$ and the converse of the inverse is $\sim q\to\sim p$.

Again if $p\to q$, then its converse is $q\to p$, and the inverse of the converse is $\sim q\to\sim p$.

Hence the proof.

**b)** "Not $p$ unless $q$" is nothing but $\sim p\leftarrow q$, i.e. $q\to\sim p$. Its truth table is:

| $p$ | $q$ | $\sim p$ | $q\to\sim p$ |
|:--:|:--:|:--:|:--:|
| T | T | F | F |
| T | F | F | T |
| F | T | T | T |
| F | F | T | T |

**14.** Two restaurants have respectively the following advertisements:
a) "Good food is not cheap".
b) "Cheap food is not good".
Examine whether they say equivalent statements. — *[WBUT 2018(EVEN)]*

**Answer:** Let $g$ denote good food and $c$ denote cheap food.

The statements are $g\Rightarrow\sim c$ and $c\Rightarrow\sim g$.

But $c\Rightarrow\sim g$ gives $g\Rightarrow\sim c$ [contrapositive].

So the statements are equivalent.

**15.** Prove that $(p\land(p\leftrightarrow q))\Rightarrow q$. — *[WBUT 2018(ODD)]*

**Answer:** We have $p\land(p\leftrightarrow q)$.

As $p\leftrightarrow q$ implies $p\to q$ and $q\to p$, we get $p$, $p\to q$, $q\to p$. The first two give, by Modus Ponens, $q$.

**16.** Verify the validity of the argument: "If I drive to work then I will arrive in time. I do not drive to work. Therefore, I will not arrive in time." — *[WBUT 2019(EVEN)]*

**Answer:** Let us symbolise the statements as follows:
- $p$: drive to work
- $q$: arrive in time

| Step No. | Statement | Reason |
|:--:|:--:|:--:|
| 1 | $p\to q$ | $p$ |
| 2 | $\lnot p$ | $p$ |
| 3 | $\lnot p\to q$ | $S, 1$ |

`[Step-table reasons transcribed exactly as printed. Logically this argument is the fallacy of denying the hypothesis and is invalid.]`

**17.** Explain the following with example: — *[WBUT 2019(EVEN)]*
i) Fallacy of denying the hypothesis
ii) Fallacy of affirming the conclusion

**Answer:**

**i) Fallacy of denying the hypothesis:** This is an incorrect reasoning in proving $p\to q$ by starting with assuming $\lnot p$ and $\lnot q$ with proving. For example: Show that if $x$ is irrational, then $\dfrac{x}{2}$ is irrational. A fallacy of denying the hypothesis argument would start with: "Assume that $x$ is rational. Then $\ldots$".

**ii) Fallacy of affirming the conclusion:** This is an incorrect reasoning in proving $p\to q$ by starting with assuming $q$ and proving $p$. For example: Show that if $x+y$ is odd, then either $x$ or $y$ is odd, but not both. A fallacy of affirming the conclusion argument would start with: "Assume that either $x$ or $y$ is odd, but not both. Then $\ldots$".

---

## Long Answer Type Questions

**1.** a) Show that $s$ is a valid conclusion from the premises $p\to\sim q$, $q\lor r$, $\sim s\to p$. — *[WBUT 2012(ODD), 2015(ODD), 2016(EVEN)]*

**Answer:** We have $p\to\sim q$, $q\lor r$, $\sim s\to p$.

We start with $q\lor r$. Say $q$.
$$p\to\sim q\ \therefore q\to\sim p$$
$$\sim s\to p\ \therefore\sim p\to s$$
Again, start with $q\lor r$, say $r$; $r$ has no implication.

Hence the conclusion $s$ is valid.

**1.** b) Show that $t$ is a valid conclusion from the premises $p\Rightarrow q$, $q\Rightarrow r$, $r\Rightarrow s$ and $p\lor t$. — *[WBUT 2012(ODD), 2016(EVEN), 2016(ODD)]*

**Answer:** We have $p\to q$, $q\to r$, $r\to s$, $p\lor t$.

Let us start with $p\lor t$. Assume $p$.

Then $p\to q$, $q\to r$, $r\to s$ gives $s$.

Next assume $t$. As $t$ does not imply anything.

Hence the conclusion $s$ is valid.

**2.** a) Check the validity of the following arguments: — *[WBUT 2012(ODD)]*
"If my program runs successfully then I will submit my project. I can appear the examination only if I submit my project. Either my program runs successfully or the computer crashes then I cannot appear in examination."

**Answer:** Let us denote the statements symbolically as
- $p$: My program runs successfully
- $q$: I will submit my project
- $r$: I can appear the examination
- $s$: The computer crashes

The premises are $p\to q$, $r\to q$, $p\lor s$. The conclusion is $\sim r$.

Assume $p$. Then $p\to q$. Also, $r\to q$ gives $\sim q\to\sim r$. Also $s$ has no implication.

So it is not a valid conclusion.

**2.** b) Write down the truth table for conditional and bi-conditional proposition. — *[WBUT 2012(ODD)]*

**Answer:** The truth table for conditional ($\to$) with $p$ and $q$ as the propositions:

| $p$ | $q$ | $p\to q$ |
|:--:|:--:|:--:|
| 1 | 1 | 1 |
| 1 | 0 | 0 |
| 0 | 1 | 1 |
| 0 | 0 | 1 |

The truth table for the bi-conditional ($\leftrightarrow$) with $p$ and $q$ as the propositions:

| $p$ | $q$ | $p\leftrightarrow q$ |
|:--:|:--:|:--:|
| 1 | 1 | 1 |
| 1 | 0 | 0 |
| 0 | 1 | 0 |
| 0 | 0 | 1 |

**3.** a) Obtain the CNF of $\sim(p\to(q\land r))$. — *[WBUT 2013(EVEN)]*

**Answer:** We make the truth table for $\sim(p\to(q\land r))$ as follows:

| $p$ | $q$ | $r$ | $q\land r$ | $p\to(q\land r)$ | $\sim(p\to(q\land r))$ |
|:--:|:--:|:--:|:--:|:--:|:--:|
| 1 | 1 | 1 | 1 | 1 | 0 |
| 1 | 1 | 0 | 0 | 0 | 1 |
| 1 | 0 | 1 | 0 | 0 | 1 |
| 1 | 0 | 0 | 0 | 0 | 1 |
| 0 | 1 | 1 | 1 | 1 | 0 |
| 0 | 1 | 0 | 0 | 1 | 0 |
| 0 | 0 | 1 | 0 | 1 | 0 |
| 0 | 0 | 0 | 0 | 1 | 0 |

Hence the required CNF is:
$$(\sim p\lor\sim q\lor\sim r)\land(p\lor q\lor r)\land(p\lor\sim q\lor r)\land(p\lor q\lor\sim r)\land(p\lor q\lor r)$$
`[as printed — the printed CNF clauses are partly indistinct in the scan and do not all match the maxterms derivable from the truth table (the rows where the function is 0 are TTT, FTT, FTF, FFT, FFF, giving $(\sim p\lor\sim q\lor\sim r)\land(p\lor\sim q\lor\sim r)\land(p\lor\sim q\lor r)\land(p\lor q\lor\sim r)\land(p\lor q\lor r)$).]`

**3.** b) Prove that $(p\lor q)\land(p\to r)\land(q\to r)\to r$ is a tautology. — *[WBUT 2013(EVEN), 2018(ODD)]*

**Answer:** Let us construct the truth table:

| $p$ | $q$ | $r$ | $p\lor q$ | $p\to r$ | $q\to r$ | $(p\lor q)\land(p\to r)\land(q\to r)=f$ | $f\to r$ |
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| 1 | 1 | 0 | 1 | 0 | 0 | 0 | 1 |
| 1 | 0 | 1 | 1 | 1 | 1 | 1 | 1 |
| 1 | 0 | 0 | 1 | 0 | 1 | 0 | 1 |
| 0 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| 0 | 1 | 0 | 1 | 1 | 0 | 0 | 1 |
| 0 | 0 | 1 | 0 | 1 | 1 | 0 | 1 |
| 0 | 0 | 0 | 0 | 1 | 1 | 0 | 1 |

Since the column corresponding to the given expression has only 1's, the given expression is a tautology.

**3.** c) Check the validity of the following argument: — *[WBUT 2013(EVEN), 2018(ODD), 2019(EVEN)]*
"If the band could not play rock music or the refreshments were not delivered on time, then the New Year's party would have been cancelled and Alice would have been angry. If the party were cancelled, then refunds would have to be made. No refunds were made."

**Answer:** Let us denote:
- $p$: The band can play rock music
- $q$: The refreshments were delivered on time
- $r$: The New Year's party will be held
- $t$: Alice will be angry
- $s$: Refunds will be made

Then the given argument can be put as:
$$[\sim p\lor\sim q\Rightarrow\sim r\land t],\ \sim r\Rightarrow s.\quad\text{Conclusion }\sim s.$$
The conclusion is not valid, as the only way to arrive at $\sim s$ is through $r$, but we have the other-way implication $\sim r\to s$.

An alternative method is to prove that $\{(\sim p\lor\sim q)\Rightarrow(\sim r\land t)\}\land(\sim r\to s)\}\Rightarrow\sim s$ is not a tautology.

**4.** a) Show that $((p\lor q)\land\sim(\sim p\land(\sim q\lor\sim r)))\lor(\sim p\land\sim q)\lor(\sim p\land\sim r)$ is a tautology. — *[WBUT 2015(ODD)]*

**Answer:** The truth table (function $f$ column is always 1):

| $p$ | $q$ | $r$ | $\sim p$ | $\sim q$ | $\sim r$ | $p\lor q$ | $\sim q\lor\sim r$ | $\sim p\land(\sim q\lor\sim r)$ | $\sim(\sim p\land(\sim q\lor\sim r))$ | $\sim p\land\sim q$ | $\sim p\land\sim r$ | $f$ |
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| 1 | 1 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 1 |
| 1 | 1 | 0 | 0 | 0 | 1 | 1 | 1 | 0 | 1 | 0 | 0 | 1 |
| 1 | 0 | 1 | 0 | 1 | 0 | 1 | 1 | 0 | 1 | 0 | 0 | 1 |
| 1 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 0 | 1 | 0 | 0 | 1 |
| 0 | 1 | 1 | 1 | 0 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 1 |
| 0 | 1 | 0 | 1 | 0 | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 |
| 0 | 0 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 0 | 1 | 0 | 1 |
| 0 | 0 | 0 | 1 | 1 | 1 | 0 | 1 | 1 | 0 | 1 | 1 | 1 |

As we find the value of the function $(f)$ is always '1', so it is a tautology.

**4.** b) Let us consider the discrete mathematics class. If a student $S_1$ is late, then another student $S_2$ is late, and if both $S_1$ and $S_2$ are late, then the class becomes boring. Suppose that the class is not boring. What conclusion can be drawn about the student $S_1$ using truth table? — *[WBUT 2015(ODD)]*

**Answer:** Let $s_1$ denote the statement that $S_1$ is late, $s_2$ denote the statement that $S_2$ is late, and $b$ denote the statement that the class is boring.

Then $s_1\land s_2\Rightarrow b$. So $\sim b\Rightarrow\sim s_1\lor\sim s_2$.

The truth table of the above formula asserts that either $S_1$ is not late or, if $S_1$ is late, $S_2$ is not late.

| $s_1$ | $s_2$ | $b$ | $\sim s_1$ | $\sim s_2$ | $\sim b$ | $\sim s_1\lor\sim s_2$ |
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| 1 | 1 | 1 | 0 | 0 | 0 | 0 |
| 1 | 1 | 0 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 0 | 1 | 0 | 1 |
| 1 | 0 | 0 | 0 | 1 | 1 | 1 |
| 0 | 1 | 1 | 1 | 0 | 0 | 1 |
| 0 | 1 | 0 | 1 | 0 | 1 | 1 |
| 0 | 0 | 1 | 1 | 1 | 0 | 1 |
| 0 | 0 | 0 | 1 | 1 | 1 | 1 |

**5.** a) Without using truth table, show that $(p\land q)\to(p\lor q)$ is a tautology. — *[WBUT 2017(EVEN)]*

**Answer:** We note that $p\to q$ is equivalent to $\sim p\lor q$. Therefore we see
$$(p\land q)\to\{p\lor q\}$$
$$\Leftrightarrow\sim(p\land q)\lor(p\lor q)$$
$$\Leftrightarrow(\sim p\lor\sim q)\lor(p\lor q)$$
$$\Leftrightarrow\{(\sim p\lor\sim q)\lor p\}\lor q\quad\text{by associativity}$$
$$\Leftrightarrow\{(\sim p\lor p)\lor\sim q\}\lor q\quad\text{by commutativity}$$
$$\Leftrightarrow(1\lor\sim q)\lor q$$
$$\Leftrightarrow 1\lor q\Leftrightarrow 1.$$
Hence the given formula is a tautology.

**5.** b) Using truth table, prove that $p\to(p\lor r)=(p\to q)\lor(p\to r)$. — *[WBUT 2017(EVEN)]* `[statement printed as "p→(p∨r)"; the truth table below evaluates the left side as $p\to(q\lor r)$, the form for which the identity holds.]*

**Answer:** We make the following truth table:

| $p$ | $q$ | $r$ | $q\lor r$ | $p\to(q\lor r)$ | $p\to q$ | $p\to r$ | $(p\to q)\lor(p\to r)$ |
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| 1 | 1 | 0 | 1 | 1 | 1 | 0 | 1 |
| 1 | 0 | 1 | 1 | 1 | 0 | 1 | 1 |
| 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| 0 | 1 | 0 | 1 | 1 | 1 | 1 | 1 |
| 0 | 0 | 1 | 1 | 1 | 1 | 1 | 1 |
| 0 | 0 | 0 | 0 | 1 | 1 | 1 | 1 |

Since the 5th and 8th columns are identical, the equality is proved.

**6.** a) Symbolize the following: — *[WBUT 2017(ODD)]*
"If either George enrols or Harry enrols then Ira does not enrol. Either Ira enrols or Harry enrols. If either Harry enrols or George does not enrol then Jim enrols. George enrols. Therefore either Jim enrols or Harry does not enrol."

**Answer:** Let $g$ denote George, $h$ denote Harry, $i$ denote Ira and $j$ denote Jim. Let $E$ denote the set of enrolled persons. Then the statements can be symbolized as:
$$g\in E\lor h\in E\Rightarrow i\notin E$$
$$i\in E\lor h\in E$$
$$h\in E\lor g\notin E\Rightarrow j\in E$$
$$j\in E\lor h\notin E$$

**6.** b) What is a formula in propositional calculus? What is a tautology? State and prove the Duality theorem. — *[WBUT 2017(ODD)]*

**Answer:** Throughout our treatment of formal logic it is important to distinguish between syntax and semantics. Syntax is concerned with the structure of strings of symbols (e.g. formulas and formal proofs), and rules for manipulating them, without regard to their meaning. Semantics is concerned with their meaning. Formulas are certain strings of symbols as specified below.

**Definition of Propositional Formula:**
1. Any atom $P$ is a formula.
2. If $A$ is a formula, so is $\lnot A$.
3. If $A, B$ are formulas, so is $(A\land B)$.
4. If $A, B$ are formulas, so is $(A\lor B)$.

All (propositional) formulas are constructed from atoms using rules 2)–4).

A formula of propositional logic is a **tautology** if the formula itself is always true regardless of which valuation is used for the propositional variables.

> *Note: the printed answer defines formula and tautology but does not actually state or prove the Duality theorem.*

**7.** a) Determine whether the following argument is valid, stating the rules of inference you are using: — *[WBUT 2018(EVEN)]*
Premises:
i) If it does not rain today or it is not foggy then the tournament will start and the first match will be played.
ii) If the match is played then the referee will come.
iii) The referee did not come.
Conclusion: It rained today.

**Answer:** Let $r$ denote a rainy day, $f$ denote a foggy day, $t$ denote the starting of the tournament, $p$ denote playing of the first match, and $c$ denote the coming of the referee.

The given premises can be written as
$$\sim r\lor\sim f\Rightarrow t\land p;\quad p\Rightarrow c;\quad \sim c.$$
By contrapositive,
$$\sim c\Rightarrow\sim p$$
and $\sim t\lor\sim p\Rightarrow r\land f$.

From the last implication it now follows
$$\sim p\Rightarrow r\land f.$$
Thus $\sim c\Rightarrow r$.

Hence the conclusion is valid.

**7.** b) Prove that there are infinitely many primes.

**Answer:** If possible, let there be finitely many primes and let these primes be $p_1, p_2, \ldots, p_n$.

Then clearly, $p_1, p_2, \ldots, p_n + 1 > p_i;\ i=1,2,\ldots,n$ and $p_1, p_2, \ldots, p_n + 1$ is not divisible by $p_1$ or $p_2$ or $\ldots$ or $p_n$.

This implies $p_1\cdot p_2\cdots p_n + 1$ is a prime greater than $p_1, p_2, \ldots, p_n$.

Hence our assumption is not correct and there are infinitely many primes.

**7.** c) Show that the congruence relation is an equivalence relation.

**Answer:** Let $\equiv$ be a congruence relation defined on $\mathbb{Z}$.

Then clearly $\equiv$ is reflexive, as $x\equiv x\pmod m\ \forall x\in\mathbb{Z}$, since $x-x$ is divisible by $m$.

Again, $\equiv$ is symmetric, as $x\equiv y\pmod m$ (i.e. $x-y$ is divisible by $m$) implies $y\equiv x\pmod m$.

Finally, $\equiv$ is transitive, as $x\equiv y\pmod m$ and $y\equiv z\pmod m$ imply $x\equiv z\pmod m$, since $y-x$ is divisible by $m$.

Hence $\equiv$ is an equivalence relation.

**8.** Let $G=(\mathbb{Z},+)$ and $H=(\mathbb{Z}_n,+)$ for some $n>1$. Define $\varphi:G\to H$ by $\varphi(x)=[x]$. Then $\varphi$ is a homomorphism. — *[MODEL QUESTION]*

**Answer:** Since the operation in both groups is addition, the equation that we need to check in this case is $\varphi(x+y)=\varphi(x)+\varphi(y)$. Verification is given below:
$$\varphi(x)+\varphi(y)=[x]+[y]=[x+y]=\varphi(x+y)$$
(where the equality $[x]+[y]=[x+y]$ holds by definition of addition in $\mathbb{Z}_n$).

**9.** Let $F$ be a field, $n>1$ an integer, $G=GL_n(F)$ and $H=(F\setminus\{0\},\cdot)$. Define the map $\varphi(A)=\det(A)$. — *[MODEL QUESTION]*

**Answer:** In this example $\varphi$ is a homomorphism thanks to the formula $\det(AB)=\det(A)\det(B)$.

Note that while this formula holds for all matrices (not necessarily invertible ones), in this example we have to restrict ourselves to invertible matrices, since the set $\mathrm{Mat}_n(F)$ of all $n\times n$ matrices over $F$ does not form a group with respect to multiplication.

**10.** Let $f:G\to G'$ be a homomorphism. Show that $f$ is one-to-one if and only if $\ker f=\{e\}$. — *[MODEL QUESTION]*

**Answer:** Let $f:G\to G'$ be a one-to-one homomorphism and $e, e'$ be the respective identities of $G$ and $G'$. Clearly $f(e)=e'$.

Since $f$ is one-to-one, $\ker f=\{e\}$.

Conversely, let $\ker f=\{e\}$ and let $f(a)=f(b)$ for $a, b\in G$.

Then $f(a^{-1}b)=f(a^{-1})f(b)=f(a)^{-1}f(b)=f(a)^{-1}f(a)=e'$.

Thus $a^{-1}b\in\ker f$, or $a^{-1}b=e$, or $a=b$.

Hence $f$ is one-to-one.

**11.** Let $(\mathbb{Z}, +)$ be the additive group of all integers and $(\mathbb{Q}-\{0\},\cdot)$ be the multiplicative group of non-zero rational numbers. Define $f:\mathbb{Z}\to\mathbb{Q}-\{0\}$ by $f(x)=3^x$ for all $x\in\mathbb{Z}$. Show that $f$ is a homomorphism but not an isomorphism. — *[MODEL QUESTION]*

**Answer:** Here $f:\mathbb{Z}\to\mathbb{Q}-\{0\}$ is defined as $f(x)=3^x$.

Now let $m, n\in\mathbb{Z}$, then
$$f(m+n)=3^{m+n}=3^m\cdot 3^n=f(m)\cdot f(n)$$
Hence $f$ is a homomorphism.

As $f$ is not surjective, $f$ is not an isomorphism.

(Note: $\dfrac{1}{2}\in\mathbb{Q}-\{0\}$ has no pre-image in $\mathbb{Z}$.)

**12.** a) Prove that in a group $(G, \circ)$ the equation $a\circ x=b$ has a unique solution.
b) Let $G=(\mathbb{Z}, +)$, $G'=(\mathbb{Z}, +)$ be two groups; $f:G\to G$ a mapping defined by $f(x)=|x|$. Is the mapping a homomorphism? Give reasons.
c) Find the idempotent elements in the ring $(\mathbb{Z}_6, +, \cdot)$ where $\mathbb{Z}_6$ is the set of residue classes modulo 6.
d) Let $(N, P)$ be a poset where $N$ is the set of all natural numbers and $P$ stands for divisibility. Find the maximal and minimal element of the set $\{2, 8, 32, 4\}\subseteq N$. — *[MODEL QUESTION]*

**Answer:**

**a)** We have $a\cdot x=b$. Pre-multiplying by $a^{-1}$ we get
$$a^{-1}\cdot(a\cdot x)=a^{-1}\cdot b$$
$$\text{or, }(a^{-1}\cdot a)x=a^{-1}\cdot b$$
$$\text{or, }e\cdot x=a^{-1}\cdot b$$
$$\text{or, }x=a^{-1}\cdot b.$$
Next, if possible, let $x^*$ and $\bar{x}$ be two solutions of the given equation. So $a\cdot x^*=b=a\cdot\bar{x}$. By pre-multiplication of $a^{-1}$ on both sides we get $x^*=\bar{x}$. Hence the solution is unique.

**b)** This is not a homomorphism, as $f(5+(-3))\ne f(5)+f(-3)$, since $f(2)=2$ but $f(5)=5$, $f(-3)=3$.

**c)** $\bar 0, \bar 1, \bar 3, \bar 4$, since $\bar 0\cdot\bar 0=\bar 0$, $\bar 1\cdot\bar 1=\bar 1$, $\bar 3\cdot\bar 3=\bar 9=\bar 3$, $\bar 4\cdot\bar 4=\overline{16}=\bar 4$.

**d)** Minimal element $=2$ and maximal element $=32$.

**13.** a) In a group $G$, prove that $(ab)^2=a^2b^2$ iff $(ab)^{-1}=a^{-1}b^{-1}$, where $a, b\in G$.
b) If $f$ is a group homomorphism from $G\to G'$, then show that $f(e)=e'$ and $f(a^{-1})=[f(a)]^{-1}$, where $e$ and $e'$ are the identity elements of $G$ and $G'$ respectively and $a\in G$. — *[MODEL QUESTION]*

**Answer:**

**a)** In a group $G$, let us assume $(ab)^2=a^2b^2$ for all $a, b\in G$.

Then $abab=aabb$, or $ba=ab$, $\therefore(ba)^{-1}=(ab)^{-1}$.

Conversely, let $a^{-1}b^{-1}=(ab)^{-1}$ for all $a, b$ in $G$.

Then $(a^{-1}b^{-1})^{-1}=\{(ab)^{-1}\}^{-1}$, or $(b^{-1})^{-1}(a^{-1})^{-1}=ab$, or $ba=ab$.

or $a(ba)b=a(ab)b$, or $(ab)(ab)=(aa)(bb)$, or $(ab)^2=a^2b^2$.

**b)** Let $a\in G$. Then $ae=ea=a$.
$$\therefore f(ae)=f(ea)=f(a)$$
$$\therefore f(a)f(e)=f(e)f(a)=f(a)$$
So $f(e)$ is the identity of $f(G)$, but $f(G)$ being a subgroup of $G'$, $f(e)=e'$.

Next, we know $aa^{-1}=a^{-1}a=e$.
$$\therefore f(aa^{-1})=f(a^{-1}a)=f(e)$$
$$\therefore f(a)f(a^{-1})=f(a^{-1})f(a)=f(e)=e'$$
So $f(a^{-1})$ is the inverse of $f(a)$. That is, $(f(a))^{-1}=f(a^{-1})$.

**14.** a) Define group homomorphism. If $G$ is a group of real, non-singular, $n$-square matrices under multiplication, show that the determinant function is a homomorphism of $GL(2, \mathbb{R})$ into $G'$, where $G'$ is the group of non-zero real numbers under multiplication.
b) Show that every cyclic group of order $n$ is isomorphic to the group $(\mathbb{Z}_n, +_n)$, where $\mathbb{Z}_n$ is the set of equivalence classes for the congruence modulo $n$ over the set of integers. — *[MODEL QUESTION]*

**Answer:**

**a)** Let $(G, *)$ and $(H, \circ)$ be two groups and $\phi:G\to H$ be a mapping. $\phi$ is called a **group homomorphism** from $G$ into $H$ if $\phi(a*b)=\phi(a)\circ\phi(b)$ for all $a, b\in G$.

We have here $\phi:GL(2, \mathbb{R})\to G'(=\mathbb{R}-\{0\})$ defined by
$$\phi\begin{pmatrix}a & b\\ c & d\end{pmatrix}=\det\begin{pmatrix}a & b\\ c & d\end{pmatrix}$$
We see if $\begin{pmatrix}a & b\\ c & d\end{pmatrix}, \begin{pmatrix}p & q\\ r & s\end{pmatrix}\in GL(2, \mathbb{R})$, then
$$\phi\left[\begin{pmatrix}a & b\\ c & d\end{pmatrix}\begin{pmatrix}p & q\\ r & s\end{pmatrix}\right]=\det\begin{pmatrix}ap+br & aq+bs\\ cp+dr & cq+ds\end{pmatrix}=\det\begin{pmatrix}a & b\\ c & d\end{pmatrix}\det\begin{pmatrix}p & q\\ r & s\end{pmatrix}$$
$$=\phi\begin{pmatrix}a & b\\ c & d\end{pmatrix}\phi\begin{pmatrix}p & q\\ r & s\end{pmatrix}$$
Hence $\phi$ is a homomorphism.

**b)** Let $G$ be a group of order $n$ with $\alpha$ as a generator. Then define $\phi:G\to\mathbb{Z}_n$ as $\phi(g)=\phi(\alpha^k)=[k]$. Clearly $\phi$ is a homomorphism and bijective. Hence the result.

**15.** Let $(N, +)$ be the semi-group of natural numbers and $(S, *)$ be the semi-group on $S:\{0, 1, e\}$ with the operation $*$ given in the table:

| $*$ | $e$ | $0$ | $1$ |
|:--:|:--:|:--:|:--:|
| $e$ | $e$ | $0$ | $1$ |
| $0$ | $0$ | $0$ | $0$ |
| $1$ | $1$ | $0$ | $1$ |

A mapping $g:N\to S$ given by $g(0)=1$ and $g(j)=0$ for $j\ne 0$ is a semi-group homomorphism but not a monoid homomorphism; examine it. — *[MODEL QUESTION]*

**Answer:** We have $S=\{0, 1, e\}$, $g:N\to S$.

Let $m, n\in N$, $m\ne 0$, $n\ne 0$.

Then $g(m\cdot n)=0=g(m)*g(n)$ [$\because g(m)=0,\ g(n)=0$].

Let now $m\in N$, $m\ne 0$.

Then $g(m\cdot 0)=g(0)=1\ne g(m)*g(0)=0*1=0$.

Hence $g$ is not a homomorphism.

**16.** Show that the group $(\mathbb{Z}_6, +)$ is a homomorphic image of the group $(\mathbb{Z}, +)$. — *[MODEL QUESTION]*

**Answer:** Define $\varphi:(\mathbb{Z}, +)\to(\mathbb{Z}_6, \oplus)$ as
$$\varphi(n)=n\pmod 6$$
Clearly $\varphi$ is a homomorphism. Hence the result.
