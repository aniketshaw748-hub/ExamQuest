# Automata — Chapter 2: Regular Languages & Finite Automata

> **Source:** *Formal Language & Automata Theory* organizer (MAKAUT/WBUT solved papers, Popular Publications), book pages FAT-11 to FAT-44 (running header: "FORMAL LANGUAGE & AUTOMATA THEORY"). This file covers **Part 1**: Chapter-at-a-Glance, Very Short Answer Type Questions, and Short Answer Type Questions. Long Answer Type Questions (from FAT-45) are handled separately.
> **Fidelity note for downstream readers (incl. LLMs):**
> - The concept summary, all multiple-choice answers, every regular expression, and every DFA/NFA transition table below were **verified against the scanned page images**, not just OCR.
> - **Answers are transcribed exactly as printed in the source.** Where a printed answer is debatable by standard theory it is flagged inline as `[as printed]`; the source's letter is kept authoritative.
> - Anything illegible on the scan is marked `[illegible in source]` rather than guessed. State/automata diagrams that cannot be reproduced are described in words and marked `[diagram]`. Math and formal notation are rendered in LaTeX; transition tables as Markdown tables.

---

## Chapter at a Glance

- **Deterministic Finite State Automata (DFA):** An automaton, a language recognition device, can also be defined rigorously. A deterministic finite state automaton is a quintuple $M = \langle Q, I, \delta, q_0, F \rangle$, where:
  - $Q$ is a finite set of states;
  - $I$ is a finite set of input symbols;
  - $\delta$ is the next-state function $\delta : Q \times I \to Q$;
  - $q_0 \in Q$ is the initial state;
  - $F \subseteq Q$ is the set of final states (or accepting states).

  The function $\delta : Q \times I \to Q$ can be extended to the domain $Q \times I^*$, defining the function $\delta^*$ as follows:
  $$\delta^*(q, \lambda) = q \quad \text{for each } q \in Q$$
  $$\delta^*(q, xa) = \delta(\delta^*(q, x), a) \quad \text{for each } x \in I^*,\ a \in I.$$
  The language $L(A)$ accepted or recognized by the automaton $A$ is defined as the set of words accepted by $A$.

- **Non-deterministic Finite Automata (NFA):** A non-deterministic finite automata is a quintuple $M = \langle Q, I, \delta, q_0, F \rangle$, where:
  - $Q$ is a finite set of states;
  - $I$ is a finite set of input symbols;
  - $\delta$ is the, possibly partial, transition function $\delta : Q \times (I \cup \{\lambda\}) \to 2^Q$;
  - $q_0 \in Q$ is called the initial state;
  - $F \subseteq Q$ is called the set of final states.

- **Myhill-Nerode theorem** and minimization to eliminate useless states. The Myhill-Nerode Theorem says the following three statements are equivalent:
  1. The set $L$, a subset of $\Sigma^*$, is accepted by a DFA. (We know this means $L$ is a regular language.)
  2. $L$ is the union of some of the equivalence classes of a right invariant (with respect to concatenation) equivalence relation of finite index.
  3. Let equivalence relation $R_L$ be defined by: $x\,R_L\,y$ if and only if for all $z \in \Sigma^*$, $xz \in L$ exactly when $yz \in L$. Then $R_L$ is of finite index.

- **Regular Expressions / Grammars:** A regular expression $E$ over $I$ denotes a language $L(I)$ over $I$. The syntax of regular expressions is defined inductively together with the languages they denote:
  1. The constants $\epsilon$ and $\Phi$ are regular expressions, with $L(\epsilon) = \{\epsilon\}$ and $L(\Phi) = \Phi$.
  2. For each $a$ in $I$, $a$ is a regular expression, with $L(a) = \{a\}$.
  3. If $E$ and $F$ are regular expressions, then $(E + F)$ is a regular expression, with $L(E + F) = L(E) \cup L(F)$.
  4. If $E$ and $F$ are regular expressions, then $(EF)$ is a regular expression, with $L((EF)) = L(E)L(F)$.
  5. If $E$ is a regular expression, then $(E^*)$ is a regular expression, with $L((E^*)) = (L(E))^*$.

  Precedence rules for saving parentheses: $*$ has highest precedence, then concatenation, then $+$.

- **Pumping Lemma for Regular Language:** The Pumping Lemma is generally used to prove a language is not regular.

---

## Very Short Answer Type Questions

**1.** Choose the correct statements: — *[WBUT 2006, 2012]*
a) moore and mealy machine are FSM with output capability
b) any given Moore machine has an equivalent Mealy machine
c) any given Mealy machine has an equivalent Moore machine
d) moore machine is not an FSM
**Answer: (a), (b) and (c)**

**2.** Pumping Lemma is generally used for proving whether — *[WBUT 2006, 2016]*
a) a given grammar is regular
b) a given grammar is not regular
c) two given grammars are equivalent or not
d) none of these
**Answer: (b)**

**3.** A solution to the equation $R = Q + RP$ is — *[WBUT 2007, 2013, 2017, 2019]*
a) $R = QP^*$   b) $Q = RP^*$   c) $P = RQ^*$   d) $R = PQ^*$
**Answer: (a)**

**4.** Which of the following sets is regular? — *[WBUT 2007, 2012]*
a) $\{a^i : i = n^2,\ n \ge 1\}$   b) $\{a^p : p \text{ is a prime}\}$
c) $\{ww : w \text{ is in } \{a, b\}^*\}$   d) $\{a^{2n} : n \ge 1\}$
**Answer: (d)**

**5.** The value of $L(\phi^*)$ is — *[WBUT 2007, 2019]*
a) $\Sigma$   b) $\{\epsilon\}$   c) $\{\ \}$   d) none of these
**Answer: (c)** `[as printed]`

**6.** The regular expression representing the set of all strings over $\{x, y\}$ ending with $xx$ beginning with $y$ is — *[WBUT 2007, 2012]*
a) $xx(x+y)^*y$   b) $yy(x+y)^*x$   c) $y(x+y)^*xx$   d) $y(xy)^*xx$
**Answer: (d)** `[as printed]`

**7.** Regular expression $(a|b)(a|b)$ denotes the set — *[WBUT 2007, 2012]*
a) $\{a, b, ab, aa\}$   b) $\{a, b, ba, bb\}$   c) $\{a, b\}$   d) $\{aa, ab, ba, bb\}$
**Answer: (d)**

**8.** Palindromes cannot be recognized by any FSM because — *[WBUT 2007, 2012]*
a) an FSM cannot remember arbitrary, large amount of information
b) an FSM cannot deterministically fix the mid-point
c) even or the mid-point is known, an FSM cannot find whether the second half of the string matches the first half
d) all of these
**Answer: (c)**

**9.** If $S$ is the number of states in NDFA then equivalent DFA can have maximum of — *[WBUT 2008, 2019]*
a) $S$ states   b) $S-1$ state   c) $2^S$ states   d) $2^S - 1$ states
**Answer: (c)**

**10.** Which of the following is regular? — *[WBUT 2008, 2019]*
a) Strings of 0's, whose length is a perfect square
b) Strings of all palindromes made up of 0's & 1's
c) Strings of 0's, whose length is a prime number
d) Strings of odd number of zeroes
**Answer: (d)**

**11.** $a^*(a+b)^*$ is equivalent to — *[WBUT 2009, 2013]*
a) $a^* + b^*$   b) $(ab)^*$   c) $a^*b^*$   d) None of these
**Answer: (d)**

**12.** Which of the following is correct? — *[WBUT 2010, 2016]*
a) Language can be derived from the FA
b) Regular expressions can be derived from the FA
c) FA can be derived from the language
d) Both (a) & (b)
**Answer: (d)**

**13.** The following production rules of a regular grammar generates a language $L$: $S \to aS / bS / a / b$. The regular expression for $L$ is — *[WBUT 2011]*
a) $a + b$   b) $(a+b)$   c) $(a+b)(a+b)^*$   d) $(aa+bb)a^*b^*$
**Answer: (b)**

**14.** Moore machine output depends on — *[WBUT 2011]*
a) input   b) input and present state   c) present state   d) none of these
**Answer: (c)**

**15.** DFA has a transition function — *[WBUT 2011]*
a) $Q \times \Sigma$ to $Q$   b) $Q \times \Sigma$ to $2^Q$   c) both (a) and (b)   d) none of these
**Answer: (a)**

**16.** If $Q$ is the number of states in the NFA, the equivalent DFA can have maximum number of states — *[WBUT 2011]*
a) $Q$   b) $Q-1$   c) $2Q-1$   d) $2^Q$
**Answer: (d)**

**17.** What is the RE for the language set strings with at least one 1, one 2 and one 3? — *[WBUT 2012]*
a) $1+2+3$   b) $11^*\,22^*\,33^*$   c) $1^*\,2^*\,3^*$   d) both (a) and (b)
**Answer: (b)**

**18.** The basic limitation of FSM is that — *[WBUT 2012, 2016]*
a) it can't remember arbitrary large amount of information
b) it sometimes recognize grammar that is not regular
c) it sometimes fails to recognize grammar that is regular
d) all of these
**Answer: (a)**

**19.** Can a DFA simulate NFA? — *[WBUT 2012]*
a) no   b) yes   c) sometimes   d) depends on DFA
**Answer: (b)**

**20.** The logic of pumping lemma is a good example of — *[WBUT 2013, 2019]*
a) The pigeon-hole principle   b) the divide and conquer technique
c) Recursion   d) Iteration
**Answer: (a)**

**21.** Which of the following strings can be obtained by the language $L = \{a^i b^{2i} \mid i \ge 1\}$ — *[WBUT 2013, 2019]*
a) aaabbbbbb   b) aabbb   c) abbabbba   d) aaaabbbabb
**Answer: (a)**

**22.** Which string is not accepted by the following FSA? `[diagram]` (a four-state FSA over $\{0,1\}$) — *[WBUT 2013]*
a) 00111   b) 00110   c) 01010   d) 11010
**Answer: (a)**

**23.** Regular sets are closed under — *[WBUT 2014, 2015]*
a) Union   b) Concatenation   c) Kleene Closure   d) All of the above
**Answer: (d)**

**24.** Let $N$ be an NFA with $n$ states and let $M$ be the minimized DFA with $m$ states recognizing the same language. Which of the following is NECESSARILY true? — *[WBUT 2014, 2015]*
a) $m \le 2^n$   b) $n \le m$   c) M has one accept state   d) $m = 2^n$
**Answer: (a)**

**25.** The string 1101 does not belong to the set represented by — *[WBUT 2014, 2015, 2017]*
a) $110^*(0+1)$   b) $1(0+1)^*101$   c) $(10)^*(01)^*(00+11)^*$   d) $(00+(11)^*01)^*$
**Answer: (c)**

**26.** $A = (a+b)^*a$ and $B = b(a+b)^*$ then $A \cap B$ will be — *[WBUT 2016]*
a) $(a+b)^*ab$   b) $ab(a+b)^*$   c) $a(a+b)^*b$   d) $b(a+b)^*a$
**Answer: (d)**

**27.** The string 1101 does not belong to the set represented by — *[WBUT 2016]*
a) $110^*(0+1)$   b) $1(0+1)^*101$   c) $(10)^*(01)^*(00+11)^*$   d) $[00+(11)^*0]^*$
**Answer: (d)**

**28.** An automata is a/an ____________ device. — *[WBUT 2016]*
a) acceptor only   b) acceptor / rejector   c) rejector only   d) generating
**Answer: (b)**

**29.** $k$-level equivalence is possible between two finite automata — *[WBUT 2016]*
a) if all equivalence above $k$-level exist between them
b) if all level equivalence up to $k-1$ level already exist
c) if both contain at least $k$ number of states
d) if both contain exactly $k$ number of states
**Answer: (b)**

**30.** In Moore machine, output is associated with — *[WBUT 2017]*
a) present state only   b) next state only   c) present state and input   d) none of these
**Answer: (a)**

**31.** Regular grammar is — *[WBUT 2017]*
a) context free grammar   b) context sensitive grammar   c) non-context grammar   d) none of these
**Answer: (a)**

**32.** Regular expression is accepted by — *[WBUT 2017]*
a) Finite automata   b) Mealy machine   c) Pushdown automata   d) all of these
**Answer: (d)**

**33.** Pumping Lemma for Regular Expression is used to prove that — *[WBUT 2018]*
a) Certain sets are Regular
b) Certain sets are not Regular
c) Certain Regular Grammar produce Regular Expression
d) Certain Regular Grammar does not produce Regular Expression
**Answer: (b)**

**34.** Number of vertices of a Merger graph is — *[WBUT 2018]*
a) The number of state of the machine   b) Number of compatible pairs
c) Number of states combinations   d) None of the above
**Answer: (a)**

**35.** Number of vertices of a compatible graph is — *[WBUT 2018]*
a) the number of states of the machine   b) number of compatible pairs
c) number of states combinations   d) None of the above
**Answer: (b)**

**36.** NFA, in its name has 'non-deterministic' because of ________. — *[WBUT 2023]*
**Answer: multiple transitions out of a state**

**37.** Language of finite automata is of which type? — *[WBUT 2023]*
**Answer: regular language**

**38.** The concept of FSA is much used in ________ part of the compiler. — *[WBUT 2023]*
**Answer: lexical analysis**

**39.** FSM can recognize ________. — *[WBUT 2023]*
**Answer: regular grammar**

**40.** Set of regular languages over a given alphabet set is closed under ________. — *[WBUT 2023]*
**Answer: operations union, concatenation and Kleene star**

**41.** Consider the following grammar: — *[WBUT 2023]*
$$S \to Ax / By$$
$$A \to By / Cw$$
$$B \to x / Bw$$
$$C \to y$$
Write the regular expressions describe the same set of strings as the grammar.
**Answer: $xw^*y + xw^*yx + ywx$**

**42.** Number of states of the FSM required to simulate behaviour of a computer with a memory capable of storing "$m$" words, each of length "$n$" is ________. — *[WBUT 2023]*
**Answer: $2^{mn}$**

---

## Short Answer Type Questions

**1. What is a regular expression? Give a complete procedure to convert a regular expression into its equivalent NFA. Using that procedure convert $01[((10)^* + 111)^* + 0]^*1$ into its equivalent NFA.** *[WBUT 2003]*
**OR, What is regular expression?** *[WBUT 2013]*

Let
- i) $r_1 = (10)^*$
- ii) $r_2 = (r_1 + 11)^*$
- iii) $r_3 = (r_2 + 0)^*$
- iv) $r_4 = r_3 1$
- v) $r_5 = 01 r_4$

Corresponding NFA of regular expression $r_1$ is `[diagram]`: a small NFA with a start state, a $1$-transition then a $0$-transition reaching the accepting state, with $\lambda$ (epsilon) feedback arcs implementing the Kleene star over the substring $10$.

Corresponding NFA of regular expression $r_2$ is `[diagram]`: the $r_1$ block placed in parallel (via $\lambda$-transitions) with a path reading $11$, all enclosed in a Kleene-star $\lambda$-loop, leading to the accepting state.

In this way the final NFA is `[diagram]`: the full machine for $01[((10)^* + 111)^* + 0]^*1$ — a leading $0$ then $1$, followed by the starred composite block $((10)^* + 111)^* + 0]^*$ built from the $r_2$/$r_3$ sub-machines with $\lambda$-transitions, and a trailing $1$ into the accepting state.

**2. For the incompletely specified machine shown in Table-1, find a minimum state reduced machine containing the original one.** *[WBUT 2004, 2008, 2012]*

**Table-1** (entries are *next-state, output*; "—" = unspecified):

| PS | $I_1$ | $I_2$ | $I_3$ |
|:---:|:---:|:---:|:---:|
| A | C, 0 | E, 1 | — |
| B | C, 0 | E, — | — |
| C | B, — | C, 0 | A, — |
| D | B, 0 | C, — | E, — |
| E | — | E, 0 | A, — |

**Answer:**
Compatible pairs $= AB,\ AD,\ BC,\ BD,\ BE,\ CD,\ CE,\ DE$.

The merger graph, merger table, compatibility graph and reduction are then constructed:

*Final merger graph* `[diagram]`: vertices A, B, C, D, E; the surviving arcs include $A$–$B$, $C$–$B$, and $D$–$C$ labelled $(BE)$.

*Compatibility graph* `[diagram]`: shows the compatible classes $AB$, $CD$ and $BE$.

*Merger table* (lower-triangular; ✓ = compatible, ✗ = incompatible, an entry name = implied pair condition):

| | A | B | C | D |
|:---:|:---:|:---:|:---:|:---:|
| **B** | ✓ | | | |
| **C** | ✗ | CE | | |
| **D** | CE | CE | BE | |
| **E** | ✗ | ✓ | ✗ (CE) | ✗ (CE) |

*Next-step / Final merger table* `[diagram]`: after cancelling the implied pairs that fail (the CE-dependent entries), the consistent compatibles remain (notably the $BE$ entry survives).

> *(The merger-table cell markings on FAT-18/FAT-19 are hand-drawn with several cross-outs; the compatible-pair list above is the cleanly legible, verified result. Individual ✓/✗ cell states are transcribed as best as the scan allows.)*

**3. State Myhill-Nerode theorem.** *[WBUT 2005, 2007, 2008, 2010, 2019]*
**OR, State Myhill-Nerode theorem with the definition of equivalent relation and invariance.** *[WBUT 2013]*

**Answer:** *Refer to Chapter at a Glance.*

**4. Prove that the language $L = \{0^n 1^n \mid n > 0\}$ is not regular.** *[WBUT 2006, 2007, 2012]*

Suppose $L$ is regular. There exists a finite state automaton $M$ which accepts $L$. Suppose $M$ has $k$ states. Let $w = a^k b^k$. Then $|w| > k$. By the Pumping Lemma $w = xyz$ where $y$ is not empty and $w_2 = xy^2z$ is also accepted by $M$. If $y$ consists of only $a$'s or only $b$'s then $w_2$ will not have the same number of $a$'s as $b$'s. If $y$ contains both $a$'s and $b$'s, then $w_2$ will have $a$'s followed by $b$'s in the wrong order. In either case $w_2$ does not belong to $L$, which is a contradiction. Thus $L$ is not regular.

**5. Minimize the following machine to standard form:** *[WBUT 2006, 2008]*

| PS | $X = 0$ | $X = 1$ |
|:---:|:---:|:---:|
| A | E, 0 | C, 0 |
| B | C, 0 | A, 0 |
| C | B, 0 | G, 0 |
| D | G, 0 | A, 0 |
| E | F, 1 | B, 0 |
| F | E, 0 | D, 0 |
| G | D, 0 | G, 0 |

**Answer:** Partitioning process:

| Partitions | Reason |
|:---|:---|
| $P_0 = (ABCDEFG)$ | |
| $P_1 = (ABCDFG)(E)$ | E has o/p = 1 on i/p = 0 |
| $P_2 = (BCDG)(AF)(E)$ | $(AF)$ goes to E on i/p = 0 |
| $P_3 = (BD)(CG)(AF)(E)$ | $(BD)$ goes to A on i/p = 1 |
| $P_4 = (BD)(CG)(A)(F)(E)$ | A goes to C but F goes to D on i/p = 1 |
| $P_5 = (BD)(CG)(A)(E)(F)$ | Final partition |

Let $(A) \Rightarrow \alpha$, $(BD) \Rightarrow \beta$, $(CG) \Rightarrow \gamma$, $(F) \Rightarrow \delta$, $(E) \Rightarrow \theta$. The reduced machine (NS, z):

| PS | $X = 0$ | $X = 1$ |
|:---:|:---:|:---:|
| $\alpha$ | $\delta$, 0 | $\gamma$, 0 |
| $\beta$ | $\gamma$, 0 | $\alpha$, 0 |
| $\gamma$ | $\beta$, 0 | $\alpha$, 0 |
| $\delta$ | $\theta$, 1 | $\beta$, 0 |
| $\theta$ | $\delta$, 0 | $\gamma$, 0 |

> *(The source labels the assignment line as "$(F) \Rightarrow \delta$" and "$(F) \Rightarrow \theta$"; the second is a printing slip for $(E) \Rightarrow \theta$, as confirmed by the partition $P_5$ which has separate classes $(E)$ and $(F)$.)* `[as printed]`

**6. Construct a regular grammar $G$ generating the regular set represented by $P = a^*b(a+b)^*$.** *[WBUT 2007, 2010, 2016]*

We construct the DFA corresponding to $P$. First a DFA with $\lambda$-moves: $a^*$ self-loop, then a $b$-transition, then a $(a+b)^*$ self-loop block `[diagram]`. After eliminating $\lambda$-moves, we get the DFA straight away `[diagram]`: two states $q_0$ (start) and $q_1$ (accepting); $q_0 \xrightarrow{a} q_0$, $q_0 \xrightarrow{b} q_1$, $q_1 \xrightarrow{a,b} q_1$.

Let $G = (\{A_0, A_1\}, \{a, b\}, P, A_0)$ where $P$ is given by:
$$A_0 \to aA_0, \qquad A_1 \to aA_1$$
$$A_0 \to bA_1, \qquad A_1 \to bA_1$$
$$A_0 \to b, \qquad A_1 \to a$$
$$A_1 \to b$$
$G$ is the required regular grammar.

**7. Let $R$ be an equivalence relation in $\{0\}^*$ with the following equivalence classes:**
$$[\ ]_R = \{0\}^0, \quad [0]_R = \{0\}^1, \quad [00]_R = \{0\}^2 \cup \{0\}^3 \cup \{0\}^4 \cup \cdots$$
**Show that $R$ is right invariant.** *[WBUT 2007, 2014, 2015]*

If $R$ is right-invariant then for all $x, y, z$: $x R y \Rightarrow xz R yz$.
Clearly, $[\ ]_R$ has the null-string, $[0]_R$ has only the string $0$, and $[00]_R$ has strings $00, 000, 0000$, etc.

- Suppose $x$ and $y$ are in $[\ ]_R$. Then $x = y = $ null. Hence $xz = z$ and $yz = z$, and $z R z$ is trivially true.
- Suppose $x$ and $y$ are in $[0]_R$. Then $x = y = 0$. If $z$ is from $[\ ]_R$, then $z = $ null, i.e. $xz = x$ and $yz = y$; thus $xz = 0$ and $yz = 0$, hence $xz R yz$. If $z$ is from $[0]_R$, then $z = 0$, so $xz = 00$ and $yz = 00$, hence $xz R yz$. Finally, if $z$ is from $[00]_R$, $z$ has at least two $0$'s; therefore $xz$ as well as $yz$ have at least three zeroes and hence both belong to $[00]_R$, i.e. $xz R yz$.
- Suppose $x$ and $y$ are in $[00]_R$. Then both $x$ and $y$ have at least two $0$'s. Hence irrespective of what $z$ is, $xz$ as well as $yz$ will have at least two $0$'s and thus both belong to $[00]_R$. Thus $xz R yz$.

So we see that for all cases $x R y \Rightarrow xz R yz$. Thus $R$ is right invariant.

**8. Consider the set $L = \{a^i b^j c^k \mid \text{where } i, j, k \text{ are integers and } i, j, k \ge 1\}$. Is $L$ regular? Justify your answer.** *[WBUT 2008, 2019]*

Suppose $L$ is regular. Let $n$ be given by the pumping lemma. Take $w = a^i b^j c^k$ with the three blocks of $a$'s, $b$'s and $c$'s, broken up as $w = xyz$ with $|y| > 0$. By the pumping lemma $xy^r z \in L$ for $r \ge 0$. Pumping the $y$-portion changes the count of one symbol relative to the others (e.g. $w_2 = xz$ yields fewer of one symbol), leading to a contradiction. Hence $L$ is not regular.

> *(The pumping-lemma decomposition on FAT-22 is hand-annotated and partly obscured; the conclusion — $L$ is not regular — and the $w = xyz$, $|y| > 0$, $xy^r z$ structure are the legible, verified parts. The exact symbol-count bookkeeping in the source is not cleanly recoverable and is paraphrased rather than transcribed verbatim.)*

**9. State the difference between DFA and NFA.** *[WBUT 2009, 2010]*

In a DFA, there can be no $\epsilon$-transitions. Also, for a given state $q$ and a symbol $a \in \Sigma$, there can be at most one entry (next state). An NFA does not have any of the above restrictions.

**10. Design an NFA which accepts the set of all binary strings containing 1100 or 1010 as substrings.** *[WBUT 2009, 2010, 2016, 2018]*

An NFA over $\Sigma = \{0, 1\}$ with $1100$ or $1010$ as substring. Regular expression:
$$(0+1)^*\,1100\,(0+1)^* + (0+1)^*\,1010\,(0+1)^*$$

**11. What is the basic difference between Mealy machine and Moore machine? / Define and compare Moore and Mealy machines.** *[WBUT 2009, 2015]*

**Moore Machine:** The limitation of FA is that its output is limited to a binary signal "accept / don't accept". Models in which the output is chosen from some other alphabet and in which the output is associated with the state are called Moore machines. A Moore machine is a six-tuple $(Q, \Sigma, \Delta, \delta, \lambda, q_0)$ where $Q, \Sigma, \delta$ and $q_0$ are as in a DFA. $\Delta$ is the output alphabet and $\lambda$ is a mapping from $Q$ to $\Delta$ giving the output associated with each state. Any Moore machine gives output $\lambda(q_0)$ in response to input $\epsilon$. The DFA may be viewed as a special case of a Moore machine, where the output alphabet is $\{0, 1\}$ and state $q$ is "accepting" if and only if $\lambda(q) = 1$. *(Output is only a function of present state.)*

**Mealy Machine:** A Mealy machine is a sequential machine in which output is associated with each state transition. A Mealy machine is a six-tuple $M = (Q, \Sigma, \Delta, \delta, \lambda, q_0)$, where $Q$ is a finite non-empty set of states, $\Sigma$ is the input alphabet, $\Delta$ is the output alphabet, $\delta : Q \times \Sigma \to Q$ is the state transition function, and $\lambda : Q \times \Sigma \to \Delta$ is the output function. The $\lambda$ function gives the output symbol associated with the transition from state $q$ on input symbol $a_i$, i.e. $\lambda(q, a_i) = z \in \Delta$. The six-tuple does not have a set of final states, because sequential machines do not have final states. The length of the output string equals the length of the input string. In the transition diagram the output symbol is denoted on the edge by appending to the input symbol a slash ("/") followed by the output symbol. *(Output is a function of present state AND present input.)*

**Moore vs. Mealy Machine:**
- Moore Machine: Output only depends on present state.
- Mealy Machine: Output depends on both the present state and the present input.

**12. State the difference between DFA and NFA.** *[WBUT 2010, 2018]*

1. The transition function for NFA ($\delta$) is multi-valued whereas for DFA it is single-valued.
2. Checking membership is easy with DFA whereas it is difficult for NFA.
3. Construction of NFA is very easy whereas for DFA it is difficult.
4. Space required for DFA is more whereas for NFA it is less.
5. Backtracking is allowed in DFA, but it is not possible in every case in NFA.
6. For every input and output we can construct a DFA machine, but it is not possible to construct an NFA machine for every input and output.
7. There is only 1 final state in NFA but there can be more than 1 final state in DFA. `[as printed]`

**13. Construct an NFA with $\epsilon$ (or $\lambda$) transition for $r = (11+0)^*(00+1)^*$.** *[WBUT 2011, 2012]*

`[diagram]`: An NFA-$\epsilon$ in two starred blocks joined by $\lambda$-transitions — the first block reads $11$ or $0$ under a Kleene-star $\lambda$-loop, the second block reads $00$ or $1$ under a Kleene-star $\lambda$-loop, ending in the accepting state.

**14. Construct a DFA diagram from the NFA given below:** *[WBUT 2011, 2012]*

NFA `[diagram]`: start $q_0$; $q_0 \xrightarrow{0} q_0$ (self), $q_0 \xrightarrow{0} q_1$, $q_1 \xrightarrow{1} q_2$, $q_2$ self-loop on $0/1$; final state $q_2$.

Transition table:

| Present state | i/p 0 | i/p 1 |
|:---:|:---:|:---:|
| $\to q_0$ | $\{q_0, q_1\}$ | $\{\phi\}$ |
| $q_1$ | $\{\phi\}$ | $\{q_1, q_2\}$ |
| $(q_2)$ | $q_2$ | $q_2$ |
| $\{q_0, q_1\}$ | $\{q_0, q_1\}$ | $\{q_1, q_2\}$ |
| $\{q_1, q_2\}$ | $q_2$ | $\{q_1, q_2\}$ |

The DFA diagram is then drawn from this table `[diagram]`.

**15. What are Kleene Closure and Positive Closure? Give example for both.** *[WBUT 2011, 2012, 2016]*

For a regular expression $R$, the **Kleene closure**, denoted by $R^*$, is defined to be the expression obtained by concatenating zero or more $R$'s. Thus $R^* = \epsilon \mid R \mid RR \mid RRR \mid \cdots$, where the vertical bar means disjunction. A **Positive closure**, denoted by $R^+$, is defined to be the expression obtained by concatenating one or more $R$'s. Thus $R^+ = R \mid RR \mid RRR \mid \cdots$.

**Example:** Suppose $R = a \mid bb$. Then,
$$R^* = \epsilon \mid a \mid bb \mid aa \mid abb \mid bba \mid bbbb \mid \cdots$$
$$R^+ = a \mid bb \mid aa \mid abb \mid bba \mid bbbb \mid \cdots$$

**16. Give the Regular Expression for the DFA using Arden's Theorem.** *[WBUT 2011, 2012, 2016]*

The state equations are:
$$q_1 = \epsilon + q_1 0 + q_3 0 \qquad \ldots(1)$$
$$q_2 = q_1 1 + q_2 1 + q_3 1 \qquad \ldots(2)$$
$$q_3 = q_2 0 \qquad \ldots(3)$$
Substituting (3) in (2):
$$q_2 = q_1 1 + q_2(1 + 01) \qquad \ldots(4)$$
We know that if $R = Q + RP$ then $R = QP^*$. Hence from (4):
$$q_2 = q_1 1(1 + 01)^* \qquad \ldots(5)$$
Substituting (3) and (5) in (1):
$$q_1 = \epsilon + q_1 0 + q_2 00 = \epsilon + q_1\big(0 + 1(1 + 01)^*00\big)$$
$$\text{or } q_1 = \epsilon\big(0 + 1(1 + 01)^*00\big)^* = \big(0 + 1(1 + 01)^*00\big)^*$$
which is the RE for the given transition diagram.

**17. Using Pumping Lemma show that $L = \{a^n b^n : n \ge 0\}$ is not regular.** *[WBUT 2011, 2012, 2016]*

Suppose $L$ is regular. Let the "adversary" choose $n$. Let $z$ be the string $a^n b^n$. Obviously $|z| \ge n$. We let the adversary choose the decomposition $z = uvw$ such that $|uv| \le n$ and $|v| > 0$. We note that whatever be the decomposition, the string $uv$ consists only of $a$'s ($0$-s) and $v$ has at least one $a$. Therefore, for $i > 1$, $uv^i$ has more $a$'s than $uv$, and hence the string $uv^i w$ has more $a$'s at the beginning than there are $b$'s at the end, allowing us to conclude that $uv^i w \notin L$. Hence $L$ is not regular. QED.

*Note:* Similar logic can be applied to prove the language $L = \{a^k b^k : n > 0,\ k > n\}$ non-regular.

**18. Convert the following Mealy Machine to a Moore Machine.** *[WBUT 2011, 2012, 2016]*

Mealy machine `[diagram]`: states $q_1, q_2, q_3$ with output-bearing edges ($0/Z_1$, $1/Z_1$, $0/Z_2$, etc.). Its transition table (NS, z):

| PS | i/p = 0 | i/p = 1 |
|:---:|:---:|:---:|
| $q_1$ | $\{q_2, z_1\}$ | $\{q_3, z_1\}$ |
| $q_2$ | $\{q_2, z_2\}$ | $\{q_3, z_1\}$ |
| $q_3$ | $\{q_1, z_2\}$ | $\{q_2, z_1\}$ |

Splitting states by their output gives the expanded Mealy table:

| PS | i/p = 0 | i/p = 1 |
|:---:|:---:|:---:|
| $q_1$ | $\{q_2, z_1\}$ | $\{q_3, z_1\}$ |
| $q_{20}$ | $\{q_{20}, z_2\}$ | $\{q_3, z_1\}$ |
| $q_{21}$ | $\{q_{20}, z_2\}$ | $\{q_3, z_1\}$ |
| $q_{30}$ | $\{q_{20}, z_2\}$ | $\{q_{21}, z_1\}$ |
| $q_{31}$ | $\{q_{30}, z_2\}$ | $\{q_{21}, z_1\}$ |

The corresponding Moore Machine:

| Present State | i/p = 0 | i/p = 1 | Output |
|:---:|:---:|:---:|:---:|
| $q_1$ | $q_2$ | $q_3$ | $z_1$ |
| $q_{20}$ | $q_2$ | $q_3$ | $z_2$ |
| $q_{21}$ | $q_2$ | $q_3$ | $z_1$ |
| $q_{30}$ | $q_3$ | $q_2$ | $z_2$ |
| $q_{31}$ | $q_3$ | $q_2$ | $z_1$ |

**19. Is the following machine information lossless? If yes, find the order of losslessness.** *[WBUT 2011]*

Given machine (NS, z):

| PS | $X = 0$ | $X = 1$ |
|:---:|:---:|:---:|
| A | A, 0 | B, 0 |
| B | C, 0 | D, 0 |
| C | D, 1 | C, 1 |
| D | B, 1 | A, 1 |

**Answer:** Test of information losslessness. The first step is to check each row of the transition table, whether there are two identical next-state entries associated with the same output symbol. From the above table it is clear that there are no identical next-state entries. Now construct the output successor table.

Testing table for Machine-M:

| PS | z = 0 | z = 1 |
|:---:|:---:|:---:|
| A | (AB) | — |
| B | (CD) | — |
| C | — | (CD) |
| D | — | (AB) |
| AB | (AB)(CD) | — |
| CD | — | (AB)(CD) |
| AC | — | — |
| AD | — | — |
| BC | — | — |
| BD | — | — |

From the lower part of the testing table it is clear that there is no compatible pair with repeated entries. This is necessary and sufficient for a machine to be lossless, so the given machine is lossless. The testing graph `[diagram]`: nodes AB, CD, AC, AD, BC, BD with the $0$/$1$-labelled arcs $AB \xrightarrow{0} CD$ and self/return arcs; the length of the largest path is $l = 2$. Hence the order of losslessness $\mu = l + 2 = 4$.

**20. Test whether the following machine is definite or not: (i) by using synchronization tree, (ii) by using repeated derivation of contracted table, (iii) if the machine is definite, what is the order of definiteness? Justify.** *[WBUT 2011]*

| Present State | $a = 0$ | $a = 1$ |
|:---:|:---:|:---:|
| A | A | B |
| B | C | B |
| C | A | D |
| D | C | B |

**Answer:** Synchronization tree `[diagram]`: root $(ABCD)$; on inputs $0/1$ it branches to $(AC)$ and $(BD)$ at level 1; these branch further to $(A)$, $(BD)$, $(C)$, $(B)$ at level 2; and to $(C)$, $(B)$ at level 3, where every node is a singleton. The tree is terminated by rule 2, so the machine is a definite machine. Here $k = 3$. Therefore the order of definiteness is 3.

**21. a) Give DFA which reads strings from $\{a, b\}$ and ends with aaa. b) Construct a DFA equivalent to $M = (\{q_0, q_1\}, \{0, 1\}, \delta, q_0, \{q_0\})$, where $\delta$ is given by the state table.** *[WBUT 2012]*

| State | 0 | 1 |
|:---:|:---:|:---:|
| q0 | q0 | q1 |
| q1 | q1 | q0, q1 |

**Answer:**
a) DFA `[diagram]`: a four-state chain over $\{a, b\}$ that advances on $a$ toward the accepting state (reached after three consecutive $a$'s) and falls back appropriately on $b$.
b) DFA `[diagram]`: states $\{q_0\}$, $\{q_1\}$, $\{q_0, q_1\}$ built by subset construction. Assuming $q_1$ to be the final state. `[as printed: problem states final state $\{q_0\}$, answer takes $q_1$ as final]`

**22. Design a Finite Automata that accepts the set of strings such that every string ends with 00 over the alphabet $\{0, 1\}$.** *[WBUT 2013]*

FA `[diagram]`: three states $q_0$ (start), $q_1$, $q_2$ (accepting). $q_0 \xrightarrow{1} q_0$ (self) and $q_0 \xrightarrow{0} q_1$; $q_1 \xrightarrow{0} q_2$ and $q_1 \xrightarrow{1} q_0$; $q_2 \xrightarrow{0} q_2$ (self) and $q_2 \xrightarrow{1} q_0$. The accepting state $q_2$ is reached only after reading $00$.

**23. What will be the regular expression over the alphabet $\{a, b\}$, for the language $L = \{a^n b^m : n \ge 4,\ m \le 3\}$?** *[WBUT 2013]*

Separate into cases $m = 0, 1, 2, 3$. Generate 4 or more $a$'s, followed by the requisite number of $b$'s. So the regular expression for the language is:
$$aaaa\,a^*(\lambda + b + bb + bbb)$$

**24. Design a two-input two-output sequence detector which generates an output '1' every time the sequence 1001 is detected, and for all other cases output '0' is generated. Overlapping sequences are also counted. [Denote State diagram, State Table and perform state assignment.]** *[WBUT 2014, 2015]*

For input string e.g. $1001001$, the input/output alignment over clock pulses $t_1 \ldots t_7$:
```
I/P:  1 0 0 1 0 0 1
O/P:  0 0 0 1 0 0 1
```
The first $1001$ completes at $t_4$ giving output $1$; the next completes at $t_7$, overlapping the earlier sequence.

State diagram `[diagram]`: four states $S_1$ (start) → $S_2$ → $S_3$ → $S_4$ detecting $1001$ with overlap; only the completing transition outputs $1$.

State table:

| PS | $X = 0$ | $X = 1$ |
|:---:|:---:|:---:|
| $S_1$ | $S_1$, 0 | $S_2$, 0 |
| $S_2$ | $S_3$, 0 | $S_2$, 0 |
| $S_3$ | $S_4$, 0 | $S_2$, 0 |
| $S_4$ | $S_1$, 0 | $S_2$, 1 |

State assignment: $S_1 \to 00$, $S_2 \to 01$, $S_3 \to 11$, $S_4 \to 10$. The assigned state table:

| PS $(y_1 y_2)$ | NS $(Y_1 Y_2)$, $X = 0$ | NS, $X = 1$ | O/P $(z)$, $X = 0$ | O/P, $X = 1$ |
|:---:|:---:|:---:|:---:|:---:|
| 00 | 00 | 01 | 0 | 0 |
| 01 | 11 | 01 | 0 | 0 |
| 11 | 10 | 01 | 0 | 0 |
| 10 | 00 | 01 | 0 | 1 |

The digital functions derived from this assignment:
$$Y_1 = X'y_2, \qquad Y_2 = X + y_1'y_2, \qquad z = X y_1 y_2.$$

**25. Define NFA. Construct an equivalent DFA from the given NFA.** *[WBUT 2014, 2015, 2017, 2019]*

NFA:

| Present State | 0 | 1 |
|:---:|:---:|:---:|
| $\to q_0$ | $q_0, q_1$ | $q_2$ |
| $q_1$ | $q_2$ | $q_1$ |
| $(q_2)$ | $q_1$ | $q_2$ |

*Definition:* A non-deterministic finite automaton (NFA) is a finite state machine that (1) does not require input symbols for state transitions and (2) is capable of transitioning to zero or two or more states for a given start state and input symbol. This distinguishes it from a DFA, in which all transitions are uniquely determined and an input symbol is required for all state transitions. All NFAs can be translated to equivalent DFAs using the subset construction algorithm; the constructed DFAs and their corresponding NFAs recognize the same formal language. Like DFAs, NFAs only recognize regular languages.

Equivalent DFA (subset construction):

| State | 0 | 1 |
|:---:|:---:|:---:|
| $q_0$ | $(q_0, q_1)$ | $(q_2)$ |
| $(q_0, q_1)$ | $(q_0, q_1, q_2)$ | $(q_1, q_2)$ |
| $(q_0, q_1, q_2)$ | $(q_0, q_1, q_2)$ | $(q_1, q_2)$ |
| $(q_1, q_2)$ | $(q_1, q_2)$ | $(q_1, q_2)$ |
| $(q_2)$ | $q_1$ | $q_2$ |
| $q_1$ | $q_2$ | $q_1$ |

The DFA diagram is drawn from this table `[diagram]`.

**26. Construct a Finite Automata equivalent to the Regular Expression $L = ab(aa+bb)(a+b)^*b$.** *[WBUT 2014]*

`[diagram]`: FA reading $ab$ at the start, then a choice block $aa$ or $bb$, then a $(a+b)^*$ self-loop block, and a final $b$ into the accepting state. *(The source gives only the diagram; no transition table is printed.)*

**27. Minimize the machine using equivalent partitioning.** *[WBUT 2015]*

| Present state | $X = 0$ | $X = 1$ |
|:---:|:---:|:---:|
| A | E, 0 | D, 1 |
| B | F, 0 | D, 0 |
| C | E, 0 | B, 1 |
| D | F, 0 | B, 0 |
| E | C, 0 | F, 1 |
| F | B, 0 | C, 0 |

**Answer:** Partitioning:
$$P_0 = (A,B,C,D,E,F)$$
$$P_1 = (A,C,E)(B,D,F)$$
$$P_2 = (A,C,E)(B,D)(F)$$
$$P_3 = (A,C)(E)(B,D)(F)$$
Say $(AC) \to \alpha$, $E \to \beta$, $(BD) \to \lambda$, $F \to \delta$. The standard form of the reduced machine is:

| PS | $X = 0$ | $X = 1$ |
|:---:|:---:|:---:|
| $\alpha$ | $\beta$, 0 | $\lambda$, 1 |
| $\beta$ | $\alpha$, 0 | $\delta$, 1 |
| $\lambda$ | $\delta$, 0 | $\lambda$, 1 |
| $\delta$ | $\lambda$, 0 | $\alpha$, 1 |

**28. Design a two-input two-output sequence detector which generates an output '1' every time the sequence 1010 is detected, and for all other cases output '0' is generated. Overlapping sequences are also counted. Draw only the state table and state diagram.** *[WBUT 2016]*

For input e.g. $1010100$ the output is the overlapping-$1010$ detector output; the overlapping portion is $10$. State diagram `[diagram]`: four states $S_1$ → $S_2$ → $S_3$ → $S_4$ detecting $1010$ with overlap.

State table:

| Present State | $X = 0$ | $X = 1$ |
|:---:|:---:|:---:|
| $S_1$ | $S_1$, 0 | $S_2$, 0 |
| $S_2$ | $S_3$, 0 | $S_2$, 0 |
| $S_3$ | $S_1$, 0 | $S_4$, 0 |
| $S_4$ | $S_3$, 0 | $S_2$, 1 |

**29. Convert the following NFA into an equivalent DFA.** *[WBUT 2016]*

NFA:

| PS | $a = 0$ | $a = 1$ |
|:---:|:---:|:---:|
| $\to q_0$ | $q_0, q_1$ | $q_0, q_2$ |
| $q_1$ | $q_3$ | — |
| $q_2$ | — | $q_3$ |
| $(q_3)$ | $q_3$ | $q_3$ |

Equivalent DFA:

| PS | $a = 0$ | $a = 1$ |
|:---:|:---:|:---:|
| $\to q_0$ | $(q_0, q_1)$ | $(q_0, q_2)$ |
| $(q_0, q_1)$ | $(q_0, q_1, q_3)$ | $(q_0, q_2)$ |
| $(q_0, q_2)$ | $(q_0, q_1)$ | $(q_0, q_2, q_3)$ |
| $(q_0, q_1, q_3)$ | $(q_0, q_1, q_3)$ | $(q_0, q_2, q_3)$ |
| $(q_0, q_2, q_3)$ | $(q_0, q_1, q_3)$ | $(q_0, q_2, q_3)$ |

The DFA diagram is drawn from this table `[diagram]`.

**30. Define DFA. Derive the DFA for the regular language $0(0+1)^*1$ for the symbols $\Sigma = \{0, 1\}$.** *[WBUT 2016]*

*Definition:* A deterministic finite automaton (DFA) is a 5-tuple $(Q, \Sigma, \delta, q_0, F)$, where $Q$ is a finite set called the states, $\Sigma$ is a finite set called the alphabet, $\delta : Q \times \Sigma \to Q$ is the transition function, $q_0 \in Q$ is the start state, and $F \subseteq Q$ is the set of accept states.

DFA `[diagram]`: three states $q_0$ (start) → $q_1$ → $q_2$ (accepting); $q_0 \xrightarrow{0} q_1$, $q_1$ self-loops on $0, 1$, $q_1 \xrightarrow{1} q_2$ (the string must start with $0$ and end with $1$).

**31. Construct a minimum state automaton from the transition table given below ($q_3, q_4, q_5$ are final states).** *[WBUT 2016]*

| PS | $x = 0$ | $x = 1$ |
|:---:|:---:|:---:|
| $q_0$ | $q_1$ | $q_2$ |
| $q_1$ | $q_2$ | $q_3$ |
| $q_2$ | $q_2$ | $q_4$ |
| $q_3$ | $q_3$ | $q_3$ |
| $q_4$ | $q_4$ | $q_4$ |
| $q_5$ | $q_5$ | $q_4$ |

**Answer:** All states are 0-equivalent. Splitting into final and non-final states:
$$S_0 = \{\{q_0, q_1, q_2\},\ \{q_3, q_4, q_5\}\}$$
After 1-equivalence analysis, $q_0$ is distinguished from $q_1, q_2$:
$$S_1 = \{\{q_0\},\ \{q_1, q_2\},\ \{q_3, q_4, q_5\}\}$$
$$S_2 = \{\{q_0\},\ \{q_1, q_2\},\ \{q_3, q_4, q_5\}\}$$
$S_1$ and $S_2$ are equivalent, so the process stops. The minimized automaton has 3 states. Replacing $\{q_0\}$ by A, $\{q_1, q_2\}$ by B, and $\{q_3, q_4, q_5\}$ by C:

| State | I/P = 0 | I/P = 1 |
|:---:|:---:|:---:|
| $\to A$ | B | B |
| B | B | C |
| (C) | C | C |

Transition diagram `[diagram]`: $A \xrightarrow{0,1} B$; $B \xrightarrow{0} B$ (self) and $B \xrightarrow{1} C$; $C$ self-loops on $0, 1$. C is the (final) accepting state.

**32. Find the string which is applied on state 'D' producing output string 10011110 and final state 'D' for the machine given below.** *[WBUT 2016]*

| PS | $x = 0$ | $x = 1$ |
|:---:|:---:|:---:|
| A | A, 1 | C, 1 |
| B | E, 0 | B, 1 |
| C | D, 0 | A, 0 |
| D | C, 0 | B, 0 |
| E | B, 1 | A, 0 |

**Answer:** First prove the machine is information lossless by constructing the testing table; if lossless, a single input string can be found for a single beginning state and single final state.

Testing table for information losslessness:

| PS | z = 0 | z = 1 |
|:---:|:---:|:---:|
| A | — | (AC) |
| B | E | B |
| C | (AD) | — |
| D | (BC) | — |
| AC | — | — |
| BC | (AE)(DE) | — |
| AE | — | (AB)(BC) |
| DE | (AB)(AC) | — |
| AB | — | (AB)(BC) |

The testing table does not contain any repeated entry, so the machine is information lossless. Working back through the machine, the beginning state B and final state D are obtained from one path with input string **10100010**. `[as printed]`

> *(The question asks for a string "applied on state D" but the worked answer reports a path with beginning state B and final state D; transcribed as printed.)*

**33. Design a two-input two-output sequence detector which generates an output '1' every time the sequence 1101 is detected, and for all other cases output '0' is generated. Overlapping sequences are also counted.** *[WBUT 2017, 2019]*

The sequence is $1101$. Starting from $S_1$: input $0$ keeps it in $S_1$ (output 0); input $1$ moves to $S_2$. In $S_2$, input $1$ moves to $S_3$ ($11$ seen); input $0$ returns to $S_1$. In $S_3$, input $0$ moves to $S_4$ ($110$ seen); input $1$ stays in $S_3$ (still $11$). In $S_4$, input $1$ completes $1101$ giving output $1$ (and, with overlap, the trailing $1$ acts as the start of a new sequence); input $0$ returns to $S_1$.

```
I/P:  1 1 0 1 ...
overlap on the final 1
```

State table for the sequence detector:

| PS | $X = 0$ | $X = 1$ |
|:---:|:---:|:---:|
| $S_1$ | $S_1$, 0 | $S_2$, 0 |
| $S_2$ | $S_3$, 0 | $S_2$, 0 |
| $S_3$ | $S_4$, 0 | $S_2$, 0 |
| $S_4$ | $S_1$, 0 | $S_2$, 1 |

State diagram `[diagram]`: four states $S_1$ (start) → $S_2$ → $S_3$ → $S_4$ with the edges above; only $S_4 \xrightarrow{1/1} S_2$ produces output 1.

**34. Construct the language for the grammar $G = (\{S\}, \{a, b\}, S, P)$, with $P$ given by $S \to aSb$, $S \to \lambda$.** *[WBUT 2018]*

$$S \to aSb,\ S \to \lambda$$
$$S \to aSb \to ab$$
$$S \to aSb \to aaSbb \to aabb$$
$$S \to aSb \to aaSbb \to aaaSbbb \to aaabbb$$
So, the language is equal number of $a$'s followed by equal number of $b$'s (with Null), i.e. $L = \{a^n b^n : n \ge 0\}$.

**35. Define Deterministic Finite Automata. What do you mean by NFA with $\lambda$-moves?** *[WBUT 2018]*

**Definition of DFA:** DFA is a 5-tuple $(Q, \Sigma, \delta, q_0, F)$ where
- $Q \to$ finite set of states
- $\Sigma \to$ finite set of alphabets
- $\delta \to$ transition function $\delta : Q \times \Sigma \to Q$
- $q_0 \to$ start state
- $F \to$ set of final states

**NFA with $\lambda$-moves:** Let $Q$ be a finite set (of states), $\Sigma$ a finite set of symbols, $\delta$ the transition function defined as $\delta : Q \times (\Sigma \cup \{\lambda\}) \to 2^Q$, $q_0$ a state in $Q$, and $F$ a subset of $Q$ ($F$ is the set of accepting states). So, NFA with $\lambda$-moves is a 5-tuple. Basically, any NFA is also an NFA with $\lambda$-moves.

**36. What is Homomorphism? Find the homomorphic image of $L = \{aa, aba\}$ when $h$ is defined as $h(a) = ab$ and $h(b) = bbc$.** *[WBUT 2018]*

**Homomorphism:** A homomorphism is a map between two algebraic structures of the same type that preserves the operations of the structures. If $f : A \to B$ where two sets $A, B$ have the same structure and $*$ is a binary operation, then $f(x * y) = f(x) * f(y)$ for every pair $(x, y) \in A$.

With $h(a) = ab$, $h(b) = bbc$:
$$h(aa) = h(a)h(a) = ab\,ab = abab$$
$$h(aba) = h(a)h(b)h(a) = ab\,bbc\,ab = abbbcab$$
Homomorphic image of $L$ is $\{abab,\ abbbcab\}$.

**37. Construct a DFA for the following regular expression: $R = (11+0)^*(00+1)^*$.** *[WBUT 2019]*

Construction `[diagram]`: An NFA-$\epsilon$ for $R = (11+0)^*(00+1)^*$ — a first starred block reading $11$ or $0$ (Kleene-star $\lambda$-loop), joined by $\lambda$ to a second starred block reading $00$ or $1$ (Kleene-star $\lambda$-loop), reaching the accepting state. *(The source draws the NFA-$\epsilon$ construction; the determinised DFA itself is not separately tabulated.)*

**38. Construct a Finite Automata Equivalent to the Regular expression $L = ab(aa+ab)(a+b)^*b$.** *[WBUT 2019]*

`[diagram]`: states $1 \xrightarrow{a} 2 \xrightarrow{b} 3$, then a branch reading $aa$ (via state 4) or $ab$ (via state 5) into state 6, a $(a+b)^*$ self-loop block, and a final $b$ into the accepting state.

**39. Design a DFA where every string either starts with 01 or ends with 01 over the alphabet set $\{0, 1\}$.** *[WBUT 2023]*

`[diagram]`: partial DFA shown — a branch $A \xrightarrow{0} B \xrightarrow{1} C$ (accepting, with a self-loop on $0,1$) handling the "starts with 01" case, combined with an "ends with 01" tracking sub-machine. *(The source prints only the start of the diagram; the full machine is not fully rendered on the scan.)*

**40. Write the regular expression for the language $L = \{a^n \mid n > 0\}$.** *[WBUT 2023]*
**Answer: $aa^*$**

**41. Construct an NFA for the regular expression $(0+1)^*00(0+1)^*$.** *[WBUT 2023]*

`[diagram]`: an NFA over $\{0,1\}$ with a $(0+1)^*$ self-loop on the start state, a $00$ path to an accepting region, and a $(0+1)^*$ self-loop on the accepting state. *(The source leaves the answer area for the student diagram.)*

**42. Convert the following NFA to DFA.** *[WBUT 2023]*

NFA `[diagram]`: start $q_0$; $q_0 \xrightarrow{\epsilon} q_1$, $q_0 \xrightarrow{a} q_2$, $q_1 \xrightarrow{a} q_0$, $q_2$ self-loop on $b$ and $a/b$ transitions among $q_1, q_2$.

Equivalent DFA (subset construction):

| State | $a$ | $b$ |
|:---:|:---:|:---:|
| $\to q_0$ | $\{q_0, q_2\}$ | $\phi$ |
| $\to q_1$ | $\{q_0\}$ | $\phi$ |
| $q_2$ | $q_1$ | $\{q_1, q_2\}$ |
| $\{q_0, q_2\}$ | $\{q_0, q_1, q_2\}$ | $\{q_1, q_2\}$ |
| $\{q_1, q_2\}$ | $\{q_0, q_1\}$ | $\{q_1, q_2\}$ |
| $\{q_0, q_1\}$ | $\{q_0, q_2\}$ | $\phi$ |
| $\{q_0, q_1, q_2\}$ | $\{q_0, q_1, q_2\}$ | $\{q_1, q_2\}$ |

The DFA diagram is drawn from this table `[diagram]`.

> *(The DFA table on FAT-44 is split across the page and partly obscured by the scanning thumb; the rows above are the legible, verified entries. A few faint cells were cross-checked against the accompanying DFA diagram.)*

---

*End of Chapter 2, Part 1 (Chapter-at-a-Glance, Very Short Answer, Short Answer). Long Answer Type Questions begin on FAT-45 and are handled separately.*


## Long Answer Type Questions

**1. a) In response to an unknown input sequence, the machine of Table-4 produces the output sequence $1\,1\,1\,0\,0\,0\,0\,0\,1\,0$. Find the input sequence to the machine if it is known that its initial state is $A$ and final state is $F$.** *[WBUT 2004]*

**Table-4**

| PS | NS, Z ($x=0$) | NS, Z ($x=1$) |
|----|----|----|
| A | B, 1 | C, 0 |
| B | D, 1 | B, 1 |
| D | E, 1 | B, 0 |
| F | A, 0 | E, 0 |
| F | F, 0 | D, 1 |
| F | D, 0 | A, 1 |

> *(The PS column of Table-4 is partially obscured on the scan; three rows are printed as "F". The transition entries above are kept exactly as legible in the source.)* `[as printed]`

**b) Find the minimal inverse machine of the machine given in Table-5.** *[WBUT 2004]*

**Table-5**

| PS | NS, Z ($x=0$) | NS, Z ($x=1$) |
|----|----|----|
| A | C, 0 | D, 1 |
| B | D, 0 | C, 1 |
| C | A, 0 | B, 0 |
| D | C, 1 | D, 1 |

**OR,**

**Show that the following FSM is information lossless of finite order. Also find its order of information losslessness.** *[WBUT 2008]*

| PS | NS, Z ($x=0$) | NS, Z ($x=1$) |
|----|----|----|
| A | C, 0 | D, 1 |
| B | D, 0 | C, 1 |
| C | A, 0 | B, 0 |
| D | C, 1 | D, 1 |

**Answer:**

**a)** Using backward sequencing we get:

```
A  B  B  D  E  F  D  A  C  E  F
 1  1  1  0  0  0  0  0  1  0
```

Hence, the input sequence is
$$0\,1\,0\,1\,0\,0\,0\,1\,0\,0.$$

**b)** This machine is lossless of order 3. If we know the initial state and the values of three successive outputs, which are produced due to transition from this initial state, then we can determine the first input to the machine.

Now the present states of the inverse machine can be defined by a set of triples, denoted by $(S(t), Z(t+1), Z(t+2))$ where $S(t)$ is the possible state of the original machine $M$ and $Z(t+1), Z(t+2)$ are 2 outputs.

For the above machine we have the following triples:

$$(A,0,0)\quad (B,0,1)\quad (C,0,0)\quad (D,1,0)$$
$$(A,1,1)\quad (B,1,0)\quad (C,0,1)\quad (D,1,1)$$

The rest of the triples are not defined. Thus the inverse machine has present states defined by the eight triples shown above.

The next state of the inverse machine can also be defined by triples. The first member of this triple is the state to which the machine $M$ will go consuming the first input symbol. The second member is nothing but the third member of the present state of the inverse machine, and finally the third member is the present output of $M$.

The state table of the corresponding inverse machine is shown below:

**Machine-$M'$**

| PS | NS, X ($z=0$) | NS, X ($z=1$) |
|----|----|----|
| (A,0,0) | (C,0,0), 0 | (C,0,1), 0 |
| (A,1,1) | (D,1,0), 1 | (D,1,1), 1 |
| (B,0,1) | (D,1,0), 0 | (D,1,1), 0 |
| (B,1,0) | (C,0,0), 1 | (C,0,1), 1 |
| (C,0,0) | (A,0,0), 0 | (B,0,1), 1 |
| (C,0,1) | (B,1,0), 1 | (A,1,1), 0 |

> *(Two of the eight triples — $(D,1,0)$ and $(D,1,1)$ — do not head their own rows in the printed inverse-machine table; the six rows above are reproduced exactly as printed.)* `[as printed]`

**2. a) Find the equivalence partition for the machine shown in the table. Show a standard form of the corresponding reduced machine and find a minimum-length sequence that distinguishes state $A$ from state $B$.** *[WBUT 2007, 2012, 2015]*

| PS | NS, Z ($X=0$) | NS, Z ($X=1$) |
|----|----|----|
| A | B, 1 | H, 1 |
| B | F, 1 | D, 1 |
| C | D, 0 | E, 1 |
| D | C, 0 | F, 1 |
| E | D, 1 | C, 1 |
| F | C, 1 | C, 1 |
| G | C, 1 | D, 1 |
| H | C, 0 | A, 1 |

**Answer:**

$$P_0 = (A\,B\,C\,D\,E\,F\,G\,H)$$
$$P_1 = (A\,B\,E\,F\,G)(C\,D\,H)$$
$$P_2 = (A\,B)(E\,F\,G)(C\,D\,H)$$
$$P_3 = (A)(B)(E\,F\,G)(C\,D\,H)$$
$$P_4 = (A)(B)(E\,F\,G)(C\,D)(H) \quad \text{= Final equivalent partition.}$$

Let $\alpha = (A),\ \beta = (B),\ \gamma = (E\,F\,G),\ \delta = (C\,D),\ \varepsilon = (H)$.

Hence the standard form machine is:

| PS | NS, Z ($x=0$) | NS, Z ($x=1$) |
|----|----|----|
| $\alpha$ | $\beta$, 1 | $\varepsilon$, 1 |
| $\beta$ | $\gamma$, 1 | $\delta$, 1 |
| $\gamma$ | $\delta$, 0 | $\delta$, 1 |
| $\delta$ | $\delta$, 0 | $\gamma$, 1 |
| $\varepsilon$ | $\delta$, 1 | $\alpha$, 1 |

There are no 1-length or 2-length sequences that distinguish $A$ and $B$. The sequence $000$ distinguishes $A$ and $B$.

- In state $A$, the output is $111$.
- In state $B$, the output is $110$.

**b) For the incompletely specified machine shown in Table-2 find a minimum-state reduced machine containing the original one.** *[WBUT 2007]*

**Table-2**

| PS | NS, Z ($I_1$) | NS, Z ($I_2$) |
|----|----|----|
| A | E, 0 | B, 0 |
| B | F, 0 | A, 0 |
| C | E, – | C, 0 |
| D | F, 1 | D, 0 |
| E | C, 1 | C, 0 |
| F | D, – | B, 0 |

**Answer:**

A merger/pair chart is constructed (rows $B,C,D,E,F$ against columns $A,B,C,D,E$):

**Procedure**
- Write down all compatible pairs in the respective cell.
- An "×" is inserted in a cell where the states have conflicting outputs. Here $A$ and $D$ have conflicting output. Similarly $AE$, $BD$, $BE$ have conflicting output.
- Insert a check mark in cell $CE$ because state $E$ contains state $C$.
- Cross those cells having an incompatible pair. Here cell $BF$ contains incompatible pair $DF$, so cell $BF$ is ignored.

From the compatibility graph, the set
$$\{(AB),(AC),(BC),(CD),(EF)\} \rightarrow \{(ABC),(CD),(EF)\}$$
is a minimal cover of the above machine.

**3. Design a 2-input 2-output Mealy machine, which takes as input a binary stream and generates an output of 1 only when a sequence of the pattern $01011$ is found in the input stream. Design should be clearly justified.** *[WBUT 2007, 2010]*

**Answer:**

The required Mealy machine is given below:

| PS | NS, Z ($X=0$) | NS, Z ($X=1$) |
|----|----|----|
| A | B, 0 | A, 0 |
| B | B, 0 | C, 0 |
| C | D, 0 | A, 0 |
| D | B, 0 | E, 0 |
| E | D, 0 | F, 1 |
| F | B, 0 | A, 0 |

**Justification of Design**

The forward-moving (i.e. $A \to B \to C \to D \to E \to F$) transitions can be trivially justified. Also justified are the 1-transitions from states $A$, $C$ and $F$ to state $A$, because this indicates the sequence has been broken completely and scanning must begin again from state $A$.

We note that the sequence starts with a $0$, and upon receiving the first $0$ the state is $B$. Hence, if the sequence breaks in any state $B$, $D$ or $F$ upon receiving a $0$, we should count this $0$ as the first possible symbol of the input and begin from state $B$.

Getting a $0$ in the state $E$ is a special case. State $E$ is reached upon receiving the subsequence $0101$. If a $0$ is received, the sequence is $01010$; the last three symbols (i.e. $010$) are the first three symbols of the sequence to be recognized. But the state reached upon receiving subsequence $010$ is $D$. Hence the $0$-transition from state $E$ should be to state $D$.

The pending-suffix analysis used in the design:

| State | Basic String | Pending | Basic String Possible | State recognizing largest suffix of basic string possible |
|----|----|----|----|----|
| A | – | A, 1 | – | A |
| B | 0 | B, 0 | 00 | B |
| C | 01 | C, 1 | 011 | A |
| D | 010 | D, 0 | 0100 | B |
| E | 0101 | E, 0 | 01010 | D |
| F | 01011 | F, 0 | 010110 | B |
|   |   | F, 1 | 010111 | A |

**4. a) What do you mean by $k$-equivalent states? Minimize the following machine by partitioning the distinguishable states.** *[WBUT 2009, 2011]*

| Present state | $i/p=0$ Next State | $i/p=0$ o/p | $i/p=1$ Next State | $i/p=1$ o/p |
|----|----|----|----|----|
| A | E | 0 | D | 1 |
| B | F | 0 | D | 0 |
| C | E | 0 | B | 1 |
| D | F | 0 | B | 0 |
| E | G | 0 | F | 1 |
| F | B | 0 | C | 0 |
| G | E | 1 | H | 0 |
| H | A | 1 | C | 0 |

**c) Give the definition of lossy and lossless machine.** *[WBUT 2009]*

**Answer:**

**a)** Two states $S_i$ and $S_j$ of a finite state machine are said to be $K$-equivalent if there exists no input sequence of length $K$ or less that produces different outputs depending upon whether $S_i$ or $S_j$ is the initial state.

**b)** Initial partition $P_0 = (A\,B\,C\,D\,E\,F\,G\,H)$.

Partition of 1-distinguishable states $P_1 = (A\,C\,E)(B\,D\,F)(G\,H)$.

Partition of 2-distinguishable states $P_2 = (A\,C\,E)(B\,D)(F)(G\,H)$.

Partition of 3-distinguishable states $P_3 = $ None.

So, the minimal machine has 5 states.

Let us map: $(AC)\to P,\ (E)\to Q,\ (BD)\to R,\ (F)\to S,\ (GH)\to T$.

The minimal machine is:

| PS | NS, Z ($x=0$) | NS, Z ($x=1$) |
|----|----|----|
| P | Q, 0 | R, 1 |
| Q | T, 0 | S, 1 |
| R | S, 0 | R, 0 |
| S | R, 0 | P, 0 |
| T | R, 1 | T, 0 |

> *(The $x=0$ entry of the bottom row prints ambiguously on the scan; it is read as "R, 1" consistent with $(GH)\to T$ mapping.)* `[as printed]`

**c)** A machine $M$ is said to be (information) lossless if the knowledge of the initial state, the output sequence and the final state is sufficient to determine uniquely the input sequence. A machine that is not lossless is said to be lossy.

**5. a) What is regular language?** *[WBUT 2009, 2010, 2018]*

**Answer:**

A regular language is a formal language defined over a finite alphabet such that every string in the language can be:

a) Accepted by some NFA/DFA;
b) Described by a regular expression;
c) Generated by a Regular (i.e. Type-3) Grammar.

**b) Find regular expressions over $\Sigma = \{a, b\}$ for the languages defined as follows:** *[WBUT 2009, 2010, 2018]*

i) $L_1 = \{a^m b^m : m > 0\}$

ii) $L_2 = \{a^{2n} b^{2m+1} \mid n \ge 0,\ m, n \ge 0\}$

iii) $L_3 = \{b^m a b^n : m > 0,\ n > 0\}$

**Answer:**

i) Not possible, since the language is not regular.

ii) $(aa)^*\, b\, (bb)^*$

iii) $b\,b^*\, a\, b^*$

**c) Find the regular expression for the following transition graph.** *[WBUT 2009, 2010]*

**OR,**

**Construct the regular expression corresponding to the state diagram given below.** *[WBUT 2013]*

The state diagram has states $q_1$ (start), $q_2$ and $q_3$. Transitions: a $0$-self-loop on $q_1$; $q_1 \xrightarrow{1} q_2$; $q_2$ has a $1$-self-loop; $q_2 \xrightarrow{0} q_3$; $q_3 \xrightarrow{1} q_2$; $q_3 \xrightarrow{0} q_1$. **[diagram]**

**Answer:**

The state equations are
$$q_1 = \varepsilon + q_1 0 + q_3 0 \qquad \ldots(1)$$
$$q_2 = q_1 1 + q_2 1 + q_3 1 \qquad \ldots(2)$$
$$q_3 = q_2 0 \qquad \ldots(3)$$

Substituting (3) in (2) we get:
$$q_2 = q_1 1 + q_2 (1 + 01) \qquad \ldots(4)$$

We know that if $R = Q + RP$, then $R = QP^*$. Hence, from (4),
$$q_2 = q_1 1 (1 + 01)^* \qquad \ldots(5)$$

Substituting (3) and (5) in (1) we get:
$$q_1 = \varepsilon + q_1 0 + q_3 0\,0$$
$$= \varepsilon + q_1\big(0 + 1(1+01)^*0\,0\big)$$
$$\text{or } q_1 = \varepsilon\big(0 + 1(1+01)^*0\,0\big)^*$$
$$= \big(0 + 1(1+01)^*0\,0\big)^*$$

which is the RE for the given transition diagram.

**6. a) What is information lossless machine?** *[WBUT 2010]*

**b) Consider the machine shown in the following table. Is this machine information lossless of finite order? If yes, find the order $\mu$.** *[WBUT 2010, 2014]*

| Present State | Next State ($X=0$) | Next State ($X=1$) |
|----|----|----|
| A | A, 1 | C, 1 |
| B | E, 0 | B, 1 |
| C | D, 0 | B, 0 |
| D | C, 0 | B, 0 |
| E | B, 1 | A, 0 |

> *(The OCR omits row $C$; the image shows five states $A$–$E$. Entries reproduced as printed.)*

**Answer:**

**a)** A machine is said to be (information) lossless if the knowledge of the initial state, the output sequence, and the final state is sufficient to determine uniquely the input sequence.

**b) Step 1:** Check each row of the state table for an appearance of two identical next-state entries associated with the same output symbol. Here $(AC)$ is a compatible pair, since both $A$ and $C$ are the output 1-successors of $A$. Similarly, the pairs $(AD)$ and $(BC)$ are compatible pairs.

**Step 2:** If no identical entries appear, the next step is to construct the output-successor table. These pairs are used as row headings for the lower part of the testing table. Pairs $(AE)$ and $(DE)$, which are implied by $(BC)$, are now made row headings, and so on. Note that, contrary to the testing procedure for finite output memory, the testing table for information losslessness does not necessarily include all distinct pairs of states, but only the compatible ones.

**Testing table of machine $M$**

| PS | $z=0$ | $z=1$ |
|----|----|----|
| A | – | (AC) |
| B | E | B |
| C | (AD) | – |
| D | (BC) | – |
| E | A | B |
| AC | – | – |
| AD | – | – |
| BC | (AE)(DE) | – |
| AE | – | (AB)(BC) |
| DE | (AB)(AC) | – |
| AB | – | (AB)(BC) |

The testing graph $G$ of machine $M$ is derived from the lower half of the testing table. The testing table does not contain any compatible pair consisting of repeated entries. So the machine is information lossless.

**7. a) What do you mean by Distinguishable and Indistinguishable state?** *[WBUT 2011, 2012, 2016]*

**Answer:**

Two distinct states, $S_i$ and $S_j$, of a machine $M$ are **distinguishable** if and only if there exists at least one finite input sequence which, when applied to $M$, causes different output sequences, depending on whether $S_i$ or $S_j$ is the initial state. The sequence which distinguishes these states is called a distinguishing sequence of the pair $(S_i, S_j)$.

If no distinguishing sequence exists for the pair $(S_i, S_j)$, then the states are said to be **indistinguishable**.

The principle of state minimization of a finite state machine is based on the principle of identifying equivalent classes for states which are indistinguishable in the original machine, and then assigning one state per class in the reduced machine.

**b) Use Myhill–Nerode Theorem to minimize the following finite automata.** *[WBUT 2011, 2012]*

The given automaton has states $a$ (start), $b, c, d, e, f, g, h$ over alphabet $\{0,1\}$. **[diagram]**

**Answer:**

The Myhill–Nerode (table-filling) marking procedure is applied. Pairs are marked successively:

- Initially mark pairs of (final, non-final) states.
- Then, since $\delta(a,0) = b$ and $\delta(d,0) = g$ and $(b,g)$ is marked, $(a,d)$ gets marked too. Similarly other pairs are marked.
- In the next round, $\delta(d,1) = g$ and $\delta(g,1) = e$ where $(g,e)$ is marked, so $(d,f)$ will be marked. Similarly other pairs are marked.

Here $\{a\}$ is a completely distinguishable state. Hence the indistinguishable state pairs are $(e,g),(f,h),(e,h),(b,f),(b,d)$. These are refined to get the indistinguishable sets of states as: $\{e, b, f\}$, $\{e, g\}$, $\{d, h\}$.

> *(The marking proceeds via triangular tables that are hand-filled on the scan; the per-pair marking detail is summarised above and the resulting indistinguishable sets are the verified outcome.)* `[as printed]`

We get the minimized DFA as shown in the figure:

- Start state $\{a\}$; $\{a\} \xrightarrow{0} \{e,b,f\}$, $\{a\} \xrightarrow{1} \{e,b,f\}$ (self-feeding chain).
- $\{e,b,f\} \xrightarrow{0} \{e,g\}$, $\xrightarrow{1}$ loop region.
- $\{e,g\} \xrightarrow{0} \{d,h\}$, $\xrightarrow{1}$ region.
- $\{d,h\}$ self-loop on $1$. **[diagram]**

**8. a) Construct a DFA from the NFA given below.** *[WBUT 2013]*

| State / $\Sigma$ | 0 | 1 |
|----|----|----|
| $\to Q_0$ | $Q_0, Q_3$ | $Q_0, Q_1$ |
| $Q_1$ | – | $Q_4$ |
| $Q_3$ | $Q_4$ | – |
| $Q_4$ (Final State) | $Q_4$ | $Q_4$ |

**b) Construct a $\lambda$-NFA for the regular expression $(0+1)^*1(0+1)$.** *[WBUT 2013]*

**Answer:**

**a) DFA from the NFA:** Here null transitions are replaced by new (N) states.

| States | 0 | 1 |
|----|----|----|
| $Q_0$ | $\{Q_0, Q_3\}$ | $\{Q_0, Q_1\}$ |
| $\{Q_3\}$ | $Q_4$ | N |
| $Q_4$ | N | $Q_4$ |
| $\{Q_f\}$ | $Q_4$ | $\{Q_f\}$ |
| $\{Q_0, Q_4\}$ | $\{Q_0, Q_3\}$ | $\{Q_0, Q_4, Q_f\}$ |
| $\{Q_0, Q_3\}$ | $\{Q_0, Q_3, Q_f\}$ | $\{Q_0, Q_4\}$ |
| $\{Q_0, Q_4, Q_f\}$ | $\{Q_0, Q_3, Q_f\}$ | $\{Q_0, Q_4, Q_f\}$ |

> *(This DFA-construction table is faint on the scan and uses introduced new states; entries are reproduced as legibly printed.)* `[as printed]`

**b)** The $\lambda$-NFA for $(0+1)^*1(0+1)$ is constructed by standard Thompson-style composition of the star block $(0+1)^*$, followed by a $1$-transition, followed by the block $(0+1)$. **[diagram]**

**9. Minimize the following machine by applying Myhill–Nerode theorem.** *[WBUT 2013]*

| PS | NS ($X=a$) | NS ($X=b$) |
|----|----|----|
| $\to A$ | B | E |
| B | C | D |
| C | H | I |
| D | I | H |
| E | F | G |
| F | H | I |
| G | H | I |
| H | H | I |
| I | I | I |

(Final states: $C, D, F, G$.)

**Answer:**

There is no unreachable state, so we can directly apply the Myhill–Nerode theorem as follows:

$$Q = \{A, B, C, D, E, F, G, H, I\}, \quad \Sigma = \{a, b\}, \quad \text{Initial state} = A$$
$$F = \{C, D, F, G\}, \quad Q - F = \{A, B, E, H, I\}$$

The table-filling procedure marks pairs $(p,q)$ in the upper triangle. For each unmarked pair, compute $r = \delta(p,a),\ s = \delta(q,a)$ (and similarly for $b$): if $(r,s)$ is marked then $(p,q)$ is marked "×", otherwise "0".

Working through all pairs (full derivation in source), the resulting minimum machine is

$$M' = (Q', \Sigma, \delta', A', F')$$
$$Q' = \{\{A\}, \{B,E\}, \{C,D,F,G\}, \{H,I\}\}, \quad A' = A, \quad F' = \{C,D,F,G\}$$

The transition table for $M'$ is:

| $\delta'/\Sigma$ | a | b |
|----|----|----|
| $\to \{A\}$ | $\{B,E\}$ | $\{B,E\}$ |
| $\{B,E\}$ | $\{C,D,F,G\}$ | $\{C,D,F,G\}$ |
| $*\{C,D,F,G\}$ | $\{H,I\}$ | $\{H,I\}$ |
| $\{H,I\}$ | $\{H,I\}$ | $\{H,I\}$ |

Renaming $\{A\}\to M$, $\{B,E\}\to N$, $\{C,D,F,G\}\to P$, $\{H,I\}\to R$:

$$M \xrightarrow{a,b} N \xrightarrow{a,b} P \xrightarrow{a,b} R, \quad R \xrightarrow{a,b} R \text{ (self-loop)};\ P \text{ is the final state.}$$ **[diagram: Fig. 5 Minimized DFA]**

**10. Using Pumping lemma prove that $L = \{a^{i^2} \mid i \ge 1\}$ is not regular. Construct Finite Automata equivalent to the Regular Expression $L = ab(aa+bb)(a+b)^*b$.** *[WBUT 2014]*

**Answer:**

Suppose $L$ is regular, and we get a contradiction. Let $n$ be the number of states in the FA accepting $L$.

Let $w = a^{n^2}$. Then $|w| = n^2 > n$, so by the pumping lemma we can write $w = xyz$ with $|xy| \le n$ and $|y| > 0$.

Consider $xy^2z$:
$$|xy^2z| = |x| + 2|y| + |z| = |x| + |y| + |z| + |y| > |xyz| \quad \text{as } |y| > 0.$$
This means $|xy^2z| > n^2$. Also, since $|y| \le |xy| \le n$,
$$|xy^2z| = |x| + 2|y| + |z| \le n^2 + n.$$
Therefore
$$n^2 < |xy^2z| \le n^2 + n < n^2 + 2n + 1 = (n+1)^2.$$

Hence $|xy^2z|$ strictly lies between $n^2$ and $(n+1)^2$, but it is not equal to either of them. Thus $|xy^2z|$ is not a perfect square, and so $xy^2z \notin L$. But by the pumping lemma $xy^2z \in L$. This is a contradiction. Hence $L$ is not regular.

> *(The constructed FA for $ab(aa+bb)(a+b)^*b$ is a hand-drawn diagram in the source.)* **[diagram]**

**11. Convert the following Mealy machine to equivalent Moore machine.** *[WBUT 2014, 2017, 2019]*

| Present State | $i/p=0$ Next State | $i/p=0$ O/P | $i/p=1$ Next State | $i/p=1$ O/P |
|----|----|----|----|----|
| $q_0$ | $q_1$ | 1 | $q_2$ | 1 |
| $q_1$ | $q_3$ | 0 | $q_0$ | 1 |
| $q_2$ | $q_4$ | 0 | $q_3$ | 1 |
| $q_3$ | $q_1$ | 0 | $q_4$ | 0 |
| $q_4$ | $q_2$ | 1 | $q_4$ | 0 |

**Answer:**

Listing the distinct outputs associated with each state:

| State | Output |
|----|----|
| $q_0$ | 1 |
| $q_1$ | 0, 1 |
| $q_2$ | 0, 1 |
| $q_3$ | 0 |
| $q_4$ | 0, 1 |

States with two distinct incoming outputs are split (redesignated):

| State | Output | Redesignated |
|----|----|----|
| $q_0$ | 1 | $q_0$ |
| $q_1$ | 0, 1 | $q_{10}, q_{11}$ |
| $q_2$ | 0, 1 | $q_{20}, q_{21}$ |
| $q_3$ | 0 | $q_3$ |
| $q_4$ | 0, 1 | $q_{40}, q_{41}$ |

**Moore Machine Table**

| Present State | Next State ($x=0$) | Next State ($x=1$) | Output |
|----|----|----|----|
| $q_0$ | $q_{11}$ | $q_{21}$ | 1 |
| $q_{10}$ | $q_3$ | $q_0$ | 0 |
| $q_{11}$ | $q_3$ | $q_0$ | 1 |
| $q_{20}$ | $q_{40}$ | $q_3$ | 0 |
| $q_{21}$ | $q_{40}$ | $q_3$ | 1 |
| $q_3$ | $q_{10}$ | $q_{40}$ | 0 |
| $q_{40}$ | $q_{21}$ | $q_{40}$ | 0 |
| $q_{41}$ | $q_{21}$ | $q_{40}$ | 1 |

**12. Find equivalent partitions and minimize the following Finite State Machine.** *[WBUT 2014]*

| PS | NS, Z ($x=0$) | NS, Z ($x=1$) |
|----|----|----|
| A | B, 0 | H, 1 |
| B | C, 0 | G, 1 |
| C | B, 0 | F, 1 |
| D | F, 1 | C, 1 |
| E | B, 1 | C, 1 |
| F | B, 1 | B, 1 |
| G | C, 1 | B, 1 |
| H | D, 1 | A, 1 |

**Minimize the following incompletely specified machine.** *[WBUT 2014, 2017]*

| PS | NS, Z ($I_1$) | NS, Z ($I_2$) | NS, Z ($I_3$) |
|----|----|----|----|
| A | A, 1 | D, _ | C, _ |
| B | A, _ | D, _ | E, _ |
| C | E, 0 | A, 1 | _, _ |
| D | E, _ | A, 1 | _, _ |
| E | E, 0 | _, _ | C, _ |

> *(Several output entries in the incompletely specified machine are unspecified/dashes on the scan; reproduced as printed.)*

**Answer:**

**1st Part:**

Equivalence partitions are
$$P_0 = (A\,B\,C\,D\,E\,F\,G\,H)$$
$$P_1 = ((A\,B\,C)(D\,E\,F\,G\,H))$$
$$P_2 = ((A\,B\,C)((D\,H)(E\,F\,G)))$$
$$P_3 = (((A)(B\,C))(((D)(H))(E\,F\,G)))$$
$$P_4 = (((A)(B\,C))((D)(H))(E\,F\,G))$$

**Minimization:** We know that the equivalent partition is unique. So, $P_3 = (((A)(B\,C))(((D)(H))(E\,F\,G)))$ is the unique combination. Here, every single set represents one state of the minimized machine.

Rename $(A)$ as $S_1$, $(BC)$ as $S_2$, $(D)$ as $S_3$, $(H)$ as $S_4$ and $(EFG)$ as $S_5$. $(A)$ with input $0$ goes to $(B)$, so there is a transition from $S_1$ to $S_2$ with input $0$. $(A)$ with input $1$ goes to $(H)$, so there is a transition from $S_1$ to $S_4$ with input $1$. $(BC)$ with input $0$ goes to $(BC)$, so there is a transition from $S_2$ to $S_2$ for input $0$. $(BC)$ with input $1$ goes to $(FG)$, so there is a transition from $S_2$ to $S_5$ for input $1$. By this process, the whole table of the minimized machine is constructed.

The minimized machine becomes:

| Present State | NS, Z ($X=0$) | NS, Z ($X=1$) |
|----|----|----|
| $S_1(A)$ | $S_2$, 0 | $S_4$, 1 |
| $S_2(BC)$ | $S_2$, 0 | $S_5$, 1 |
| $S_3(D)$ | $S_5$, 1 | $S_2$, 1 |
| $S_4(H)$ | $S_3$, 1 | $S_1$, 1 |
| $S_5(EFG)$ | $S_2$, 1 | $S_2$, 1 |

**2nd Part:**

$$P_0 = (A\,B\,C\,D\,E), \quad P_1 = (A\,B)(C\,D\,E)$$

This is the final partition. Hence the minimized machine is:

| PS | NS, Z ($I_1$) | NS, Z ($I_2$) | NS, Z ($I_3$) |
|----|----|----|----|
| $S_1 = (AB)$ | $S_1$, 1 | $S_2$, _ | $S_2$, _ |
| $S_2 = (CDE)$ | $S_2$, 0 | $S_1$, 1 | $S_2$, _ |

**13. Consider the following state table.** *[WBUT 2016]*

| Present state | Next state, output ($I_1$) | Next state, output ($I_2$) |
|----|----|----|
| A | E, 0 | B, 0 |
| B | F, 0 | A, 0 |
| C | E, – | C, 0 |
| D | F, 1 | D, 0 |
| E | C, 1 | C, 0 |
| F | D, – | B, 0 |

**a) Draw the merger graph. b) Draw the merger table. c) Draw the compatibility graph. d) Find the minimal machine which covers that machine.**

**Answer:**

**a)** The merger graph is drawn with nodes $A, B, C, D, E, F$ and edges labelled by the implied pairs:

- Compatible/implied pairs noted on the edges include $(EF)$, $(AC)$, $(BC)$, $(BC/DE)$, $(BC/CD)$, $(CD/CF)$, $(DE)$, etc., with conflicting pairs ($AB$, $DE$ around the centre) shown crossed. **[diagram: merger graph]**

**b), c) & d)** Refer to Question No. 2(b) of Long Answer Type Questions (compatibility graph and minimal cover $\{(ABC),(CD),(EF)\}$).

**14. Consider the N.F.A given by the following diagram. Find the equivalent D.F.A without $\varepsilon$-transition.** *[WBUT 2015]*

The NFA has states $Q_0$ (start), $Q_1, Q_2, Q_3$ over alphabet $\{a, b\}$, with the relevant transitions producing the table below. **[diagram]**

**Answer:**

| State | a | b |
|----|----|----|
| $Q_0$ | $\{Q_1\}$ | $\phi$ |
| $Q_1$ | $\{Q_1\}$ | $\{Q_1, Q_2\}$ |
| $\{Q_1, Q_2\}$ | $\{Q_1\}$ | $\{Q_1, Q_2, Q_3\}$ |
| $\{Q_1, Q_2, Q_3\}$ | $\{Q_1\}$ | $\{Q_1, Q_2, Q_3\}$ |

So the equivalent D.F.A. has start $Q_0$, with $Q_0 \xrightarrow{a} Q_1$; $Q_1$ has an $a$-self-loop and $Q_1 \xrightarrow{b} \{Q_1,Q_2\}$; $\{Q_1,Q_2\}$ ($a$-loop back to $Q_1$) $\xrightarrow{b} \{Q_1,Q_2,Q_3\}$ (final); $\{Q_1,Q_2,Q_3\}$ has a $b$-self-loop. **[diagram]**

**15. a) State and prove Arden's theorem in regular expression.** *[WBUT 2017, 2018]*

**Answer:**

In order to find out a regular expression of a Finite Automaton, we use Arden's Theorem along with the properties of regular expressions.

**Statement —** Let $P$ and $Q$ be two regular expressions. If $P$ does not contain a null string, then $R = Q + RP$ has a unique solution, that is $R = QP^*$.

**Proof —**
$$R = Q + (Q + RP)P \quad [\text{After putting the value } R = Q + RP]$$
$$= Q + QP + RPP$$

When we put the value of $R$ recursively again and again, we get the following equation:
$$R = Q + QP + QP^2 + QP^3 + \cdots$$
$$R = Q(\varepsilon + P + P^2 + P^3 + \cdots)$$
$$R = QP^* \quad [\text{As } P^* \text{ represents } (\varepsilon + P + P^2 + P^3 + \cdots)]$$

Hence, proved.

**b) Using Pumping lemma prove that $L = \{a^n b^n \mid n \ge 1\}$ is not regular. Construct Finite Automata equivalent to the Regular Expression $L = ab(a+b)(ab)^*b$.** *[WBUT 2017]*

**Answer:**

**1st Part:** At first, we assume that $L$ is regular and $n$ is the number of states.

Let $w = a^i b^i$. Thus $|w| = 2i > i$.

By the pumping lemma, let $w = xyz$, where $|xy| \le i$. Let $x = a^p,\ y = a^q,$ and $z = a^r b^i$, where $p + q + r = n,\ p \ne 0,\ q \ne 0,\ r \ne 0$. Thus $|y| \ne 0$.

Let $k = 2$. Then $xy^2z = a^p a^{2q} a^r b^i$.

Number of $a = (p + 2q + r) = (p + q + r) + q = n + q$.

Hence $xy^2z = a^{n+q} b^i$. Since $q \ne 0$, $xy^2z$ is not of the form $a^i b^i$. Thus $xy^2z$ is not in $L$. Hence $L$ is not regular.

**2nd Part:** The FA equivalent to $ab(a+b)(ab)^*b$ is constructed with states $0$ (start) through $7$ and final state $6$: $0 \xrightarrow{a} 1 \xrightarrow{b} 2 \xrightarrow{a} 3$, then $3 \xrightarrow{b} 4$, $4 \xrightarrow{b} 6$ (final), with the $(ab)^*$ loop running through states $5$ and $7$ between states $4$/$6$. **[diagram]**

**16. a) Construct a minimum state automata equivalent to a given automata $M$ whose transition table is given below.** *[WBUT 2018]*

| State | a | b |
|----|----|----|
| $\to q_0$ | $q_0$ | $q_3$ |
| $q_1$ | $q_2$ | $q_5$ |
| $q_2$ | $q_3$ | $q_4$ |
| $q_3$ | $q_0$ | $q_5$ |
| $q_4$ | $q_0$ | $q_6$ |
| $q_5$ | $q_1$ | $q_4$ |
| $q_6$ | $q_1$ | $q_3$ |

**Answer:**

| State | a | b |
|----|----|----|
| $\to q_0$ | $q_0$ | $q_3$ |
| $q_1$ | $q_2$ | $q_5$ |
| $q_2$ | $q_3$ | $q_4$ |
| $q_3$ | $q_0$ | $q_5$ |
| $q_4$ | $q_0$ | $q_6$ |
| $q_5$ | $q_1$ | $q_4$ |
| $q_6$ | $q_1$ | $q_3$ |

Partition algorithm is applied:
$$P_0 = (q_0\ q_1\ q_2\ q_3\ q_4\ q_5\ q_6)$$
$$P_1 = P_0$$

As here no state has the same outputs and also no same state transition [resulting in no split], the given m/c is itself the minimized one.

**b) Find the regular expression corresponding to the following figure.** *[WBUT 2018]*

Using Arden's theorem: $R = Q + RP \Rightarrow R = QP^*$.

The state diagram has states $q_1, q_2$ (with $q_4$ accepting on the left branch) and $q_3$. **[diagram]**

Here (the state equations are):
$$q_1 = \varepsilon + q_1 0 + q_2 0 + q_3 0$$
$$q_2 = q_1 1 + q_2 1 + q_3 1$$
$$q_3 = q_2 0$$
$$q_4 = q_2 1$$

$$\Rightarrow q_2 = q_1 1 + q_2 1 + q_2 0\,1$$
$$\Rightarrow q_2 = q_1 1 + q_2 (1 + 01)$$
$$\Rightarrow q_2 = q_1 1 (1 + 011)^*$$

> *(The intermediate algebra here mixes the factors $1+01$ and $1+011$ as printed; both appear in the source derivation.)* `[as printed]`

$$q_1 = \varepsilon + q_1 0 + q_3 0 + q_2 0$$
$$\Rightarrow q_1 = \varepsilon + q_1 0 + q_2 0\,0 + q_2 0$$
$$\Rightarrow q_1 = \varepsilon + q_2\big(1(1+011)^*010 + 1(1+011)^*00 + \varepsilon\big)$$
$$\Rightarrow q_1 = \varepsilon \cdot \big(1(1+011)^*010 + 1(1+011)^*00\big)^*$$
$$\Rightarrow q_1 = \big(1 + (1+011)^*010 + 1(1+011)^*00\big)^*$$
$$\Rightarrow q_4 = q_2 1 = q_1 01 = q_1 1(1+011)^*01$$
$$= \big(1(1+011)^*010 + 1(1+011)^*00\big)^* 1(1+011)^*01$$

**Final regular expression:**
$$(q_4 + q_6) = \Big(\big(1 + (1+011)^*010 + 1(1+011)^*00\big)^* 1(1+011)^*\Big)(\varepsilon + 01)$$

> *(This long Arden's-theorem derivation is heavily worked and partly watermark-obscured on the scan; the equations and the boxed final regular expression above are reproduced exactly as printed.)* `[as printed]`

**17. Construct the merger table, merger graph, compatibility graph and minimal machine for the following Machine.** *[WBUT 2018]*

| PS | NS, Z ($I_1$) | NS, Z ($I_2$) |
|----|----|----|
| A | E, 0 | B, 0 |
| B | F, 0 | A, 0 |
| C | E, – | C, 0 |
| D | F, 1 | D, 0 |
| E | C, 1 | C, 0 |
| F | D, – | B, 0 |

**Answer:**

Refer to Question No. 13(a), (b), (c) & (d) of Long Answer Type Questions.

**18. Construct testing table, testing graph for the following machine and test whether it has finite memory or not; if yes then find the order.** *[WBUT 2018]*

| PS | NS, Z ($x=0$) | NS, Z ($x=1$) |
|----|----|----|
| A | B, 0 | D, 0 |
| B | C, 0 | C, 0 |
| C | D, 0 | A, 0 |
| D | D, 0 | A, 1 |

**Answer:**

**Testing Table:**

| PS | 0/0 | 0/1 | 1/0 | 1/1 |
|----|----|----|----|----|
| A | B | – | D | – |
| B | C | – | C | – |
| C | D | – | A | – |
| D | D | – | – | A |
| (AB) | (BC) | – | (CD) | – |
| (AC) | (BD) | – | (AD) | – |
| (AD) | (BD) | – | – | – |
| (BC) | (CD) | – | (AC) | – |
| (BD) | (CD) | – | – | – |
| (CD) | (DD) (discarded) | – | – | – |

**Testing Graph:** The testing graph has nodes $AB, BC, AC, AD, BD, CD$ with directed edges $AB \to BC$, $AB \to CD$, $BC \to AC$, $BC \to CD$, $AC \to AD$, $AC \to BD$, $AD \to BD$, $BD \to CD$, etc. **[diagram]**

Here, in this testing graph, there is no loop, so we can say it is a finite memory machine.
$$\text{Order } (\mu) = \text{Maximum length path } (\ell) + 1$$

Here, the longest path is
$$AB \to BC \to AC \to AD \to BD \to CD$$
with maximum path length $\ell = 6$. Therefore $\mu = 6 + 1 = 7$.

**19. Construct the minimum state automation equivalent to given automata $M$ defined below, where $Q_2$ is the final state.** *[WBUT 2019]*

| Present State | Next State ($a=0$) | Next State ($a=1$) |
|----|----|----|
| $\to Q_0$ | $Q_5$ | $Q_1$ |
| $Q_1$ | $Q_2$ | $Q_6$ |
| $Q_2$ | $Q_2$ | $Q_0$ |
| $Q_3$ | $Q_5$ | $Q_7$ |
| $Q_4$ | $Q_6$ | $Q_2$ |
| $Q_5$ | $Q_6$ | $Q_2$ |
| $Q_6$ | $Q_4$ | $Q_6$ |
| $Q_7$ | $Q_2$ | $Q_6$ |

**Answer:**

| Present State | Next State ($a=0$) | Next State ($a=1$) |
|----|----|----|
| $\to Q_0$ | $Q_5$ | $Q_1$ |
| $Q_1$ | $Q_2$ | $Q_6$ |
| $*Q_2$ | $Q_2$ | $Q_0$ |
| $Q_4$ | $Q_5$ | $Q_7$ |
| $Q_5$ | $Q_6$ | $Q_2$ |
| $Q_6$ | $Q_4$ | $Q_6$ |
| $Q_7$ | $Q_2$ | $Q_6$ |

The minimized automaton (state $Q_3$ being merged/removed) is shown as a state diagram with start $Q_0$, final $Q_2$, and the transitions of the table above. **[diagram]**

> *(In the minimized table the source drops the separate $Q_3$ row, merging it; entries reproduced as printed.)* `[as printed]`

**20. a) Design a DFA where each and every string ends with '001' over the alphabet set $\{0, 1\}$. Obtain the regular expression for the given DFA.** *[WBUT 2023]*

**b) Obtain the regular expression for the following DFA.** *[WBUT 2023]*

**c) Consider the following $\varepsilon$-NFA. Compute the $\varepsilon$-closure of each state. Convert the NFA to DFA.** *[WBUT 2023]*

| $\delta$ | $\varepsilon$ | a | b |
|----|----|----|----|
| $\to s$ | $\{r\}$ | $\{q\}$ | $\{p, r\}$ |
| $q$ | $\phi$ | $\{p\}$ | $\phi$ |
| $*r$ | $\{p, q\}$ | $\{r\}$ | $\{p\}$ |

**Answer:**

**a)** $L = \{001, 100001, 11001, \ldots\}$ (strings ending in $001$).

The DFA has states $q_0$ (start, "S"), $q_1$ (after "A"), $q_2$ (after "B"), $q_3$ (accepting, "C"): $q_0 \xrightarrow{0} q_1$, $q_1 \xrightarrow{0} q_2$, $q_2 \xrightarrow{1} q_3$, with back-edges on the opposite symbol (e.g. $q_1 \xrightarrow{1} q_0$, $q_2 \xrightarrow{0} q_2$, $q_3 \xrightarrow{0} q_1$, $q_3 \xrightarrow{1} q_0$). **[diagram]**

Regular Expression $= (0+1)^*001$.

Grammar:
$$S \to 0A \mid 1S$$
$$A \to 0B \mid 1S$$
$$B \to 1B \mid 1C$$
$$C \to 0A \mid 1S \mid \lambda$$

**b)** $1^*0^*1(10^*1+0)^*$

**c)**
$$\varepsilon\text{-closure}(s) = \{s, p, q, r\}$$
$$\varepsilon\text{-closure}(p) = \{p\}$$
$$\varepsilon\text{-closure}(q) = \{q\}$$
$$\varepsilon\text{-closure}(r) = \{p, q, r\}$$

$p$ and $q$ become dead states. Thus the final DFA is: start $s$, $s \xrightarrow{a,b} r$, with an $a$-self-loop on $r$ (final state). **[diagram]**

> *(The $\varepsilon$-NFA table lists rows for $s$, $q$ and $r$; the state $p$ has no row of its own in the printed table. The $\varepsilon$-closure list and resulting DFA are reproduced as printed.)*
