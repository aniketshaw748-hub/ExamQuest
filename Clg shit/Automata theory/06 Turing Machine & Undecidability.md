# Automata — Chapter 6: Turing Machine & Undecidability

> **Source:** *Formal Language & Automata Theory* organizer (MAKAUT/WBUT solved papers, Popular Publications), book pages FAT-110 to FAT-123 (running header: "FORMAL LANGUAGE & AUTOMATA THEORY").
> **Fidelity note for downstream readers (incl. LLMs):**
> - The concept summary, all multiple-choice answers, every Turing-machine transition table/diagram, every tape/move sequence, and the halting-problem argument below were **verified against the scanned page images**, not just OCR.
> - **Answers are transcribed exactly as printed in the source.** Where a printed answer is debatable by standard theory it is flagged inline as `[as printed]`; the source's letter is kept authoritative.
> - Anything illegible on the scan is marked `[illegible in source]` rather than guessed. Diagrams that cannot be reproduced are described in words and marked `[diagram]`. Math and TM notation are rendered in LaTeX.
> - Book pages FAT-124 onward are cross-reference "solved question paper" pointers to other chapters and are **not** part of this chapter; the chapter content ends on page FAT-123.

---

## Chapter at a Glance

- **Turing Machine:** A Turing Machine is a 7-tuple $M = \langle Q, \Gamma, b, \Sigma, \delta, q_0, F\rangle$ where:
  - $Q$ is a finite set of states
  - $\Gamma$ is a finite set of the tape alphabet/symbols
  - $b \in \Gamma$ is the *blank symbol*, the only symbol that is allowed to occur on the tape infinitely often at any step during the computation
  - $\Sigma \subseteq \Gamma \setminus \{b\}$ is the set of *input symbols*
  - $\delta : Q \times \Gamma \to Q \times \Gamma \times \{L, R\}$ is a partial function called the *transition function*, where $L$ is head move left and $R$ is head move right
  - $q_0 \in Q$ is the *initial state*
  - $F \subseteq Q$ is the set of *final or halting states*, accepting or rejecting

- **Turing machine as Decider:** The TMs $M_1$, $M_2$, $M_3$ that were used for computing integer functions did not have any FAILure state. Also, it is clear that whatever be the inputs given (subject to conforming to our unary notation of numbers), the TM eventually comes to a SUCCess halt. Functions like NEXT, PREV, ADD, etc., i.e., for which such TMs can be constructed, are called **Primitive Recursive Functions**.

- **Primitive Recursive Functions:** Any function that can be constructed as a finite number of compositions of other primitive recursive functions are themselves primitive recursive functions. For example, we can define the multiplication operation $PROD(m, n)$ as: $PROD(m, n) = ADD(m, m), (n-1)$ times.

- **Turing machine as Enumerator:** The language of a Turing machine (when it is an enumerator) is the set of strings that the tm generates as output. For tm $m$, we often use the notation $l(m)$ to denote the language enumerated by $m$.

- **Turing Recognizable:** A Language $L$ is Turing Recognizable if there exists some TM which when given any string from $L$ as input on its tape, will come to a success halt in finite time. If however, the input to the TM is NOT from $L$, the TM is not guaranteed to come to a failure halt in finite time.

- **Universal Turing Machine:** The simulation by $M_a$ proceeds as per the "program" described below:
  1. Store $s$ and $p$ in the working memory.
  2. If $s$ happens to be a SUCCess halt state of $M_b$, halt with success; else if $s$ happens to be a FAILure halt state of $M_b$, halt with failure.
  3. Note the current input of $M_b$ (i.e., the symbol at the $p$-th position of $M_b$'s tape) and store it in the finite control (see Sec-14.5). Let this current input be $x$.
  4. Search for the tuple $(s, x, t, \omega, d)$, i.e., whose $si$ value is $s$ and the $a$ value is $x$.
  5. Store $t$ value, $\omega$ and $d$ values of the tuple in finite control.
  6. Proceed to the $p$-th position on the tape of $M_b$ and write $\omega$. Make $s \leftarrow t$. Make $p \leftarrow p+1$ if $d$ is "right" else make $p \leftarrow p-1$.
  7. Goto Step-1.

  Looking at our description of $M_a$, we find that no matter what the description of $M_b$ is, it can be simulated. In Formal Language parlance, a TM like $M_a$ is known as a **Universal Turing Machine**.

---

## Very Short Answer Type Questions

**1.** A shift register is — *[WBUT 2013]*
a) Mealy M/C   b) Turing M/C   c) Moore M/C   d) All of these
**Answer: (d)**

**2.** Difference between Turing Machine & Two way FA is in — *[WBUT 2014, 2015, 2017]*
a) Input Tape   b) Read write head   c) Finite Control   d) All of these
**Answer: (d)**

**3.** Which of the following statements is false? — *[WBUT 2014, 2015, 2017]*
a) The halting problem of Turing machine is undecidable
b) Determining whether a context free grammar is ambiguous is undecidable
c) Given two arbitrary context free grammars $G_1$ and $G_2$. It is undecidable whether $L(G_1) = L(G_2)$
d) Given two regular grammars $G_1$ and $G_2$. It is undecidable whether $L(G_1) = L(G_2)$
**Answer: (d)**

**4.** Which is not a part of the mechanical diagram of 'Turing Machine'? — *[WBUT 2018]*
a) Input Tape   b) Read-write head   c) Finite control   d) Stack
**Answer: (d)**

**5.** Which of the string is accepted by Turing Machine? — *[WBUT 2018]*
a) $L = a^m c^n b^n$, where $m, n > 0$   b) $L = a^n b^n c^i$, $n, i > 0$
c) $L = a^n b^n c^n$, where $n > 0$   d) All of these
**Answer: (d)**

**6.** Given a grammar $G$, a production of $G$ with a dot at some position of the right side is called \_\_\_\_\_\_\_\_. — *[WBUT 2023]*
**Answer: LR(0) item**

---

## Short Answer Type Questions

**1. What do you mean by Halting problem of a Turing machine? Why a Turing machine is called linear bounded Automata?** *[WBUT 2008, 2013]*
**OR, What is halting problem in Turing machine?** *[WBUT 2015, 2016, 2019]*

**1st Part:**

A Turing Machine is a mathematical object to define "Computing". It has a "doubly infinite" tape for input and a state machine that governs its running. A Turing Machine can behave like an algorithm, especially for problems with "yes/no" answer. In such a case, the machine starts with the description of a problem on the input tape and comes to a "Yes" halt or a "no" halt depending upon the result. However, it may happen that the machine never comes to any of the halts and go on running.

A related concept of "Universal Turing Machine" is a Turing machine that can take two things as input —
a) a coded description of the state machine of another Turing machine 'M' and
b) the input given to M. The Universal Turing Machine then proceeds to 'simulate' M.

The halting problem of Turing Machine is the question whether there can be a Universal Turing Machine that is given to simulate ANY machine 'M' with ANY input '$\omega$'. No / answer Yes / No depending upon whether M halts (i.e. M does not run forever) or does not halt, respectively, on input '$\omega$'.

Turing proved that the halting problem is unsolvable i.e. there can be no such machine as described.

**2nd Part:**

A linear bounded automata is a non deterministic turing machine satisfying the following two conditions:
1. Its input alphabet includes two special symbols $\cent$ and $\$$, the left and right end markers respectively.
2. The LBA has no moves left from $\cent$ or right from $\$$, nor may it print another symbol over $\cent$ or $\$$.

The linear bounded automaton is simply a turning machine which instead of having potentially infinite tape on which to compute, is restricted to the portion of the tape containing the input $x$ plus the two tape squares holding the end-markers.

An LBA will be denoted as $M = (Q, \Sigma, \Gamma, \delta, q_0, \cent, \$, F)$ where $Q, \Sigma, \Gamma, \delta, q_0$ and $F$ are as for a non-deterministic TM; $\cent$ and $\$$ are symbols in $\Sigma$, the left and right end-markers. $L(M)$, the language accepted by $M$, is $\{w \mid w$ is in $(\Sigma - \{\cent, \$\})$ and $q_0 \cent w \$ \overset{*}{\vdash} \alpha q \beta$ for some $q$ in $F\}$.

**2. Construct a Turing machine that accepts all strings over $\{0, 1\}$ with an even number 0's and even number of 1's.** *[WBUT 2011]*

The required Turing Machine is
$$M = (\{q_0, q_1, q_2, q_3, q_{SUCC}, q_{FAIL}\}, \Gamma, \Delta, \{0, 1\}, \delta, q_0, \{q_{SUCC}, q_{FAIL}\})$$
where $\delta$ is as given below:

$$\delta(q_0, 0) = (q_1, 0, R)$$
$$\delta(q_0, 1) = (q_3, 0, R)$$
$$\delta(q_0, \Delta) = (q_{SUCC}, \Delta, L)$$
$$\delta(q_1, 0) = (q_0, 0, R)$$
$$\delta(q_1, 1) = (q_2, 0, R)$$
$$\delta(q_1, \Delta) = (q_{FAIL}, \Delta, L)$$
$$\delta(q_2, 1) = (q_2, 0, R)$$
$$\delta(q_2, \Delta) = (q_{FAIL}, \Delta, L)$$
$$\delta(q3, 0) = (q_2, 0, R)$$
$$\delta(q3, 1) = (q_0, 0, R)$$
$$\delta(q_3, \Delta) = (q_{FAIL}, \Delta, R)$$

> *(The transitions above are reproduced exactly as printed, including the source's mix of $q_3$ and "$q3$" labels. The source's table for state $q_2$ on input $0$ is not printed; only $\delta(q_2,1)$ and $\delta(q_2,\Delta)$ appear.)*

**3. Design a Turing Machine that recognizes the language of all string of even length over the alphabet $\{a, b\}$.** *[WBUT 2013]*

Let Turing Machine $(T) = (Q, \Sigma, \Gamma, \delta, q_0, h)$
$$\Sigma = \{a, b\}$$
$$\Gamma = \{a, b, \#\}$$
$$Q = \{q_0, q_1, h\}$$
Here $h$ is half state when machine halts after accepting the language, $q_0$ is initial state.

| | $a$ | $b$ | $\#$ |
|:---:|:---:|:---:|:---:|
| $q_0$ | $(q_1, a, L)$ | $(q_1, b, L)$ | $(h, \#, N)$ |
| $q_1$ | $(q_0, a, L)$ | $(q_0, b, L)$ | Undefined move |
| $h$ | Undefined move | Undefined move | Accept |

**State diagram** `[diagram]`: Two working states $q_0$ and $q_1$ with a halt state $h$. On either input symbol, $q_0 \xrightarrow{a/(a,L),\ b/(b,L)} q_1$ and $q_1 \xrightarrow{a/(a,L),\ b/(b,L)} q_0$ (toggling parity of the length read). From $q_0$, the blank transition $\#/(\#,N)$ leads to the halt state $h$, which also carries $a/(a,L),\ b/(b,L)$.

**4. State and State Transition of a Turing Machine.** *[MODEL QUESTION]*

The control unit of a TM is a state-machine with a finite number of states.

In the beginning, the TM is in a state called the initial state. At this time, the characters of the input string (or simply, input) to this TM is written on the tape with a distinctive blank character marking the end of the input. It is possible that the input string is "null", i.e., there is no or empty input. The head of the TM initially is on the first character of the input (or on the blank character if there is no input).

If the current state is an accept state, the TM stops or halts and we say that it has come to a **Success Halt**.

Similarly, if the current state is an reject state, the TM also stops or halts and we say that it has come to a **Failure Halt**.

**5. Define the terms: Recursively Enumerable Set.** *[MODEL QUESTION]*

The class of ("decision") problems for which it is possible to formulate a Turing Machine that will definitely come to a halt (success or failure) in finite time, is called the **Recursive Set**. Eventually if the answer to the decision is 'yes', is called the **Recursively Enumerable Set**.

In the definition of recursively enumerable set, we have not ensured that if the answer is 'no', the Turing Machine will definitely halt.

**6. "Turing Decidable" is a subset of "Turing Recognizable". — Explain.** *[MODEL QUESTION]*

A Language $L$ is **Turing Recognizable** if there exists some TM which when given any string from $L$ as input on its tape, will come to a success halt in finite time. If however, the input to the TM is NOT from $L$, the TM is not guaranteed to come to a failure halt in finite time.

A Language $L$ is **Turing Decidable** if there exists some TM which when given any string from $L$ as input on its tape, will come to a success halt in finite time AND if the input to the TM is NOT from $L$, the TM will come to a failure halt in finite time.

Clearly "Turing Decidable" is a subset of "Turing Recognizable".

**7. Design a Turing Machine to compute n mode 2.** *[MODEL QUESTION]*

The TM that performs computation of n mod 2 is given below:

**Transition diagram** `[diagram]`: A left-to-right chain of states beginning at the start state $q_0$. The transitions shown are $\Delta/\Delta\ R$ (with a self-loop), then $\Delta/\Delta\ L$ moves carrying $1/\Delta\ L$ self-loops, then $\Delta/\Delta\ R$ and $\Delta/L\ L$ leading to the halt state $h$, with an additional $\Delta/\Delta\ S$ branch.

The numeric function that assigns to each natural number $n$ the remainder when $n$ is divided by 2 can be computed by moving to the end of the input string, making a pass from right to left in which the 1's are counted and simultaneously erased, and either leaving a single 1 or leaving nothing.

---

## Long Answer Type Questions

**1. a) Design a TM that accepts $\{0^n 1^n \mid n \ge 1\}$.** *[WBUT 2013, 2016]*
**b) Design a TM which can multiply two positive integers.** *[WBUT 2013]*

**a)** Let us now follow the working of TM $M_1$ with input $000111$.

The initial configuration is $bS000111b$. This means that the TM is in state $S$ and the head is on the first $0$ of the input string. This corresponds to $M_1$ being as given in Fig - 1. The current state is mentioned in the box representing the finite control of the machine.

- **Fig: 1** $M_1$ in Initial Configuration `[diagram]`: tape $b\ 0\ 0\ 0\ 1\ 1\ 1\ b$, head on the first $0$, finite control in state **S**.
- **Fig: 2** $M_1$ After First Move `[diagram]`: tape $b\ X\ 0\ 0\ 1\ 1\ 1\ b$, finite control in state **B**.

Since the input is $0$, consulting the state table, we find that the move is $(B, X, R)$, i.e., the next state is $B$, the $0$ under the tape is overwritten by an $X$ and the head moves right to place itself on the next (i.e., second) $0$ of the input. This gives us the next configuration as

$$bXB0011b$$

as shown pictorially in Fig - 2.

Following up with the next moves, we find that the subsequent configurations are: $bX0B011b$ followed by $bX00B11b$. The state of the machine in the last of the above two configurations is as seen in Fig - 3.

- **Fig: 3** $M_1$ When on First $1$ `[diagram]`: tape $b\ X\ 0\ 0\ 1\ 1\ 1\ b$, state **B**.
- **Fig: 4** $M_1$ After Marking First $1$ to $Y$ `[diagram]`: tape $b\ X\ 0\ 0\ Y\ 1\ 1\ b$, state **C**.

At this point, we find the applicable move is $(C, Y, L)$ which means that the next configuration is $bX0C0Y11b$. Observe in Fig - 4 that the machine has moved left after marking the first $1$ to $Y$.

- **Fig: 5** $M_1$ After Matching One Pair of $0$ and $1$ `[diagram]`: tape $b\ X\ 0\ 0\ Y\ 1\ 1\ b$, state **C**.

At this point, the next applicable move. i.e., $(C, 0, L)$, will effectively skip over the $0$-s till the head is positioned on the first (up to now, the only) $X$ encountered. The configurations leading to that are $bXC00Y11b$ followed by $bCX00Y11b$. The machine position now is as given in Fig - 5.

The next move is $(S, X, R)$ and hence the next configuration is $bXS00Y11b$.

Let us summarize what the machine has done up to this point:
1. It has marked the first $0$ of the input string to $X$.
2. Then it has skipped the following $0$-s while moving right till it encountered the first $1$ which was marked to $Y$ and the machine moved left.
3. Now the machine skipped all $0$-s while moving left till it got an $X$ upon which it moved right and reached a condition similar to what was at the beginning of the run as shown in Fig - 6.

- **Fig: 6** $M_1$ Back in State $S$ `[diagram]`: tape $b\ X\ 0\ 0\ Y\ 1\ 1\ b$, state **S**.

Let us now augment the above summarization with the emphasized phrases:
1. It has marked the first $0$ of the input string to $X$. However, if there is no $0$ to mark but there is a $Y$ below the head then it moves right over the $Y$-s till it reaches the end of input whence it halts with SUCCess.
2. Then it has skipped the following $0$-s or $Y$-s while moving right till it encountered the first $1$ which was marked to $Y$ and the machine moved left.
3. Now the machine skipped all $0$-s while moving left till it got an $X$ upon which it moved right and reached a condition similar to what was at the beginning of the run. However, if there is no $0$ to skip, it halts with SUCCess.

If you properly visualize the moves, you will see that our Turing Machine $M_1$:
- Checks out one $0$ to $X$ and one $1$ to $Y$ in each zigzag movement over the tape.
- Declares SUCCess if and only if the number of $0$-s marked as $X$ is exactly the same as the number of $1$-s marked as $Y$.

Hence our TM recognizes only inputs that are of the form $0^n 1^n$, $n \ge 1$.

**b) Design a TM, which can multiply two positive integers.**

We can use subroutines for design of TM which can multiply two positive integers $0^m 1 0^n$ [$m \times n$: operators are represented with 1] [If $m = 3, n = 2$, $m \times n = 6$].

So at the final state the TM will halt with 6 zeros and all surrounded by Blank B.

i) If First 0 is encountered by $q_0$ it is changed to Blank B
$$B\dot{0}01001BBBB$$

ii) Move right until first 1 is encountered, change the immediate next 0 to X
$$B001\underline{X}01BBBB$$

iii) Move right and skip all symbol until first blank is encountered, then change the blank to 0 (as if 0 is copied here) — it is called subroutine call
$$B001X010BBB$$

iv) Move left until X is encountered, change the next 0 to X
$$B001XX10BBB$$

v) Move right until B is encountered and change B to 0
$$B001XX100BB$$

vi) Move left until X reached and change consecutive X to 0's
$$B00100100BB$$

vii) Move to left until B is reached, change the next 0 to B
$$BB0100100BB$$

viii) Move right until 1 reached change the next 0 to X, (subroutine)
$$BB01X0100BB$$

ix) Move right until B reached, change that B to 0
$$BB01X01000BB$$

x) Move left until X reached, change next 0 to X and repeat the procedure as above.
$$BB01XX1000BB$$

```
BB01XX1000BB ....
BB010010000BB ....
BBB10010000BBB ....
BBB1X010000BB ....
BBB1X0100000BB ....
BBB1XX100000BBB ....
BBB1XX1000000BBB ....
BBB1001000000BBBB ....
BBB1001000000B ....
```

So, now no more 0's encountered, then change all the 1 & 0's on left to B.

$$\text{Halt} \to 0/B \quad [BBBBBBB | 000000 | B \ldots]$$

> *(The tape strings in steps i–x and the trace block are transcribed exactly as printed in the source. The hand-set traces contain internal inconsistencies in the source itself; they are reproduced verbatim rather than corrected.)*

**2. Design a Turing Machine which performs addition of two integers, Write short note on Multi Tape and Multi Head Turing Machine. Prove that the problem "A string w halts on a Turing Machine M" is undecidable.** *[WBUT 2014]*

**1st Part:**

The turning machine will have $0^m 1 0^n$ on its tape initially. Therefore it will start with the leftmost 0, so on scanning 0's moving right keeping them as if, till if get 1, if replace this 1 by 0 and then again so on. Scanning 0's and moving right keeping them as it is when it gets a B (blank), it moves left and replaces the right most 0 by B and halts thereby, leaving finally $m+n$ 0's on the tape. Therefore, the moves of the Turing machine are:

| | 0 | 1 | B |
|:---:|:---:|:---:|:---:|
| $q_0$ | $(q_0, 0, R)$ | $(q_1, 0, R)$ | — |
| $q_1$ | $(q_1, 0, R)$ | — | $q_2, B, L$ |
| $q_2$ | $q_3, B, R$ | — | — |
| $q_3$ | — | — | — |

Therefore the Turing machine
$$M = (\{q_0, q_1, q_2, q_3\}, \{0, 1\}, \{0, 1, B\}, \delta, q_0, B, \{q_3\})$$
where $\delta$ is given above.

**Transition diagram** `[diagram]`: $q_0$ has a self-loop $0/0\ R$; on $1/0$ it moves to $q_1$. $q_1$ has a self-loop $0/0\ R$; on $B/B$ moving $L$ it goes to $q_2$. $q_2 \xrightarrow{0/B\ R} q_3$ (accepting state).

**2nd Part:**

A Multi-tape Turing machine is like an ordinary Turing machine with several tapes. Each tape has its own head for reading and writing. Initially the input appears on tape 1, and the others start out blank.

A k-tape Turing machine can be described as a 6-tuple
$$M = \langle Q, \Gamma, s, b, F, \delta \rangle$$
where
- $Q$ is a finite set of states
- $\Gamma$ is a finite set of the tape alphabet
- $s \in Q$ is the initial state
- $b \in \Gamma$ is the blank symbol
- $F \subseteq Q$ is the set of final or accepting states
- $\delta : Q \times \Gamma^k \to (\Gamma \times \{L, R, S\})^k$ is a partial function called the transition function, where $k$ is the number of tapes, $L$ is left shift, $R$ is right shift and $S$ is no shift.

A multihead Turing machine can be visualized as a Turing machine with a single tape and a single control unit but with multitape.

**3rd Part:**

Here is a sketch of how you can prove that the Halting problem is undecidable.

Assume that a TM capable of solving the halting problem exists. Call this TM halt. It takes, as input, the encoded representation of a TM and an input tape on which the encoded TM will run. Let's call this input pair $(p, i)$: $p$ for "program" (the encoded TM) and $i$ for "input" (the input tape). If input TM $p$ will halt on input $i$, then halt halts and outputs "true". If input TM $p$ will not halt on $i$, then halt halts and outputs "false". So, we can view halt as a function that takes parameters $p$ and $i$ and produces the output "true" or "false" depending on whether or not TM $p$ halts on input $i$.

`[diagram]`: Block **Halt** taking input $(p, i)$, with two outputs — "p halts on i" → Output "True", Halt; and "p does not halt on i" → Output "False", Halt.

Based on halt, we can trivially construct a new TM, which we can call trouble, which will work as follows. It first duplicates the entire input tape $q$, creating two copies of the original input tape. It then runs halt, using one copy of the original input $q$ as parameter $p$ and the other copy of the original input $q$ as parameter $i$. If halt $(q, q)$ outputs "false", then trouble TM halts. If halt $(q, q)$ outputs "true", then trouble goes into an infinite loop (and thus does not halt).

`[diagram]`: Block **Trouble** taking input $q$, with two outputs — Halt $(q, q)$ outputs "False" → Halt; and Halt $(q, q)$ outputs "True" → infinite loop (self-loop).

Any TM can be encoded as an initial tape. So, let's assume that the encoding of trouble as a tape is called $t$.

Consider what will happen when trouble is executed with $t$ as its input tape. Does trouble halt?

If trouble halts, that means that halt $(t, t)$ answered "false". However, that means that trouble does not halt when given $t$ as input.

If trouble does not halt, that means that halt $(t, t)$ answered "true". However, that means that trouble does halt when given $t$ as input.

In either case, halt gave the wrong answer. Therefore, given any TM that claims to solve the halting problem, it is possible to construct a program/input pair for which it will answer incorrectly. So, any claim that a particular TM solves the Halting problem can be proved false, meaning that the Halting Problem is undecidable.

**3. a) Define Turing machine.** *[WBUT 2015, 2019]*
**b) Explain different types of Turing machine.**
**c) Design a Turing machine that accepts the language of all string which contain "aba" as a substring.**

**a)** A Turing machine is an abstract concept used to describe a type of machine that, given an indefinite amount of space and time, can be adapted to calculate anything, such as the digits of $\pi$ or even a whole universe.

**b)** There are many different types of Turing machines that are often used to describe certain kinds of execution. The two that are most often used are deterministic and non-deterministic Turing machines.

Automata are often used to represent Turing machines. This is a deterministic Turing machine which calculates the two's complement of some binary input.

A deterministic Turing machine is one that uses the concept of determinism to calculate a solution to a problem.

Determinism is the concept of being only in one state at a given time and determining what the next state will be from that state. In simpler terms, determinism would be being in state $q_0$, and only holding that state until moving onto the next state, $q_1$. In determinism we would be able to predict without any doubt that the head would move from state $q_0$ to state $q_1$. A Turing machine does not have to even halt, or stop execution, in order for it to be considered deterministic.

A non-deterministic Turing machine is one that uses the concept of non-determinism to calculate a solution to a problem.

A non-deterministic Turing Machine differs from a deterministic Turing Machine in the sense that a non-deterministic Turing Machine can have several possible states to which it can transition from any given state, $q_i$. One way to think of it would be to think that, given the possibility of choosing from several subsequent states, the non-deterministic Turing machine guesses the next iteration that will bring it to a 'yes' answer. Put a different way, the non-deterministic Turing machine branches out into holding many states at the same time in a sort of tree fashion until one of the many paths leads it to a 'yes' answer. In perspective a non-deterministic Turing machine may, for instance, be in state $q_0$ and then hold both state $q_{11}$ as one of the branches and state $q_{12}$ as another branch.

**c)** Strings in which aba is present as a substring.

**Diagram** `[diagram]`: Start state $q_0 \xrightarrow{a, a, R} q_1 \xrightarrow{b, b, R} q_2 \xrightarrow{a, a, R} H$ (halt/accept). Self-loop / back transitions: $q_0$ has a self-loop $b, b, R$; $q_1$ has a self-loop $a, a, R$ and a back transition $b, b, R$ to $q_0$; $q_2$ has a back transition $b, b, R$ to $q_0$.

**4. Design a Turing Machine which accepts the language $L = \{a^n b^n, n \ge 1\}$. Write a short note on Multi-Tape and Multi Head Turing Machine.** *[WBUT 2017]*

**1st Part:**

**Fig: 1** `[diagram]`: Start state $q_0$ with a self-loop $a \to a, R$ on input $a$; $q_0 \xrightarrow{a \to x, R} q_1$. State $q_1$ has self-loops $a \to a, R$ and $b \to y, L$; $q_1 \xrightarrow{y \to y, R} q_2$. State $q_2$ has self-loops $y \to y, L$ and $a \to a, L$; $q_2 \xrightarrow{x \to x, R} q_0$. A further $y \to y, R$ / $B \to B, R$ branch leads to the accepting state.

Let us now follow the working of TM $M_1$ with input $aabb$.

The initial configuration is $BaabbBB$. This means that the TM is in state $q_0$ and the head is on the first $a$ of the input string. This corresponds to $M_1$ being as given in Fig: 2(a). The current state is mentioned in the box representing the finite control of the machine.

- **Fig: 2(a)** Machine $M_1$ in Initial Configuration `[diagram]`: tape $B\ a\ a\ b\ b\ B\ B$, state $q_0$.
- **Fig: 2(b)** $M_1$ After First Move `[diagram]`: tape $B\ x\ a\ b\ b\ B\ B$, state $q_1$.

After the first move, the head $q_0$ reads $a$, removes it with $x$ and moves to right, thus changing the state from $q_0$ to $q_1$. This gives us the next configuration as $BxabbBB$. Since there is another $a$ in the second state, so we will overwrite the $a$ with $a$ and move to right $(a \to a, R)$.

- **Fig: 2(c)** $M_1$ After Second Move `[diagram]`: tape $B\ x\ a\ b\ b\ B\ B$, state $q_1$.
- **Fig: 2(d)** `[diagram]`: tape $B\ x\ a\ y\ b\ B\ B$, state $q_1$.

After the second move the configuration becomes $BxabbBB$ with the head pointing to $b$. So it reads $b$, removes it with $y$ and moves to left, thus changing the state from $q_1$ to $q_2$. Following the same procedure the turing machine is designed. The next moves are as follows:

- **Fig: 2(e)** `[diagram]`: tape $B\ x\ a\ y\ b\ B\ B$, state $q_2$.
- **Fig: 2(f)** `[diagram]`: tape $B\ x\ a\ y\ b\ B\ B$, state $q_0$.
- **Fig: 2(g)** `[diagram]`: tape $B\ x\ x\ y\ b\ B\ B$, state $q_1$.
- **Fig: 2(h)** `[diagram]`: tape $B\ x\ x\ y\ b\ B\ B$, state $q_1$.
- **Fig: 2(i)** `[diagram]`: tape $B\ x\ x\ y\ y\ B\ B$, state $q_1$.
- **Fig: 2(j)** `[diagram]`: tape $B\ x\ x\ y\ y\ B\ B$, state $q_2$.
- **Fig: 2(k)** `[diagram]`: tape $B\ x\ x\ y\ y\ B\ B$, state $q_3$.
- **Fig: 2(l)** `[diagram]`: tape $B\ x\ x\ y\ y\ B\ B$, state $q_3$.
- **Fig: 2(m)** `[diagram]`: tape $B\ x\ x\ y\ y\ B\ B$, state $q_3$.
- **Fig: 2(n)** `[diagram]`: tape $B\ x\ x\ y\ y\ B\ B$, state $q_4$.

> *(The Fig 2 state labels are transcribed exactly as printed; the source's hand-set figure labels for states in Figs 2(e)–(n) are partly inconsistent in the original.)*

**2nd Part:** Refer to Question No. 2 (2nd Part) of Long Answer Type Questions.

**5. Define Turing machine. Explain Church's hypothesis. What is Universal Turing machine?** *[WBUT 2018]*

**1st Part:** Refer to Question No. 3(a) of Long Answer Type Questions.

**2nd Part:**

**Church's Hypothesis:**

$\therefore$ This hypothesis has no practical proof.

**Weak form:** A Turing Machine can compute anything that can be computed by digital computer.

**Strong form:** A Turing Machine can perform any possible computation.

$\therefore$ Church States that —

A function on the natural numbers is computable by a human being following an algorithm, ignoring resource limitations, if and only if it is computed by a Turing Machine.

**3rd Part:**

**Universal Turing Machine**

$\therefore$ Universal Turing Machine is a Turing Machine for all other turing machines.

$\therefore$ For example,
$$A_{TM} = \{(M, w) \mid M \text{ is a turing machine and } M \text{ accepts } w\}$$
is Turing Recognizable.

If,
- $M$ accepts $w$ — Halt & Accept
- $M$ rejects $w$ — Halt & Reject
- $M$ loops on $w$ — no Halt

For Universal Turing Machine
- **Input:** $M$ = description of some TM; $w$ = an input string for $M$
- **Action:**
  - simulate $M$
  - Behave just like $M$
  - Behave just like $M$ (accept, reject or loop)

---

*End of Chapter 6 (Turing Machine & Undecidability). Chapter content ends on book page FAT-123. Pages FAT-124 onward are cross-reference "solved question paper" pointers to other chapters and are excluded.*
