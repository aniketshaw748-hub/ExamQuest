# Discrete Mathematics — Chapter 5: Algebraic Structures and Morphism

> **Source:** *Discrete Mathematics* organizer (MAKAUT/WBUT solved papers, Popular Publications), book pages DCM-80 to DCM-94.
> **Fidelity note for downstream readers (incl. LLMs):**
> - Concept summary and all multiple-choice questions/answers below were **verified against the scanned page images**, not just OCR.
> - **Answers are transcribed exactly as printed in the source.** Any printed answer that is debatable by standard algebra results is flagged inline as `[as printed]`; the source's letter is kept authoritative.
> - All group/ring expressions, permutations, matrices, and formulas were checked against the page images (OCR is unreliable for this math subject). Any step illegible on the scan is marked `[illegible in source]` rather than guessed. Math is rendered in LaTeX.

---

## Chapter at a Glance

### Algebraic Structure

A non-empty set $S$ is called an **algebraic structure** with respect to a binary operation $(*)$ if it follows the following axiom:

- **Closure:** $(a * b)$ belongs to $S$ for all $a, b \in S$.

**Ex:** $S = \{1, -1\}$ is an algebraic structure under $*$ (multiplication), as $1 * 1 = 1$, $1 * (-1) = -1$, $(-1) * (-1) = 1$, and all results belong to $S$. But the above is not an algebraic structure under $+$, as $1 + (-1) = 0$ does not belong to $S$.

### Semi Group

A non-empty set $S$, $(S, *)$, is called a **semigroup** if it follows the following axioms:

- **Closure:** $(a * b)$ belongs to $S$ for all $a, b \in S$.
- **Associativity:** $a * (b * c) = (a * b) * c$ for all $a, b, c \in S$.

**Note:** A semigroup is always an algebraic structure.

**Ex:** (Set of integers, $+$) and (Matrix, $*$) are examples of a semigroup.

### Monoid

A non-empty set $S$, $(S, *)$, is called a **monoid** if it follows the following axioms:

- **Closure:** $(a * b)$ belongs to $S$ for all $a, b \in S$.
- **Associativity:** $a * (b * c) = (a * b) * c$ for all $a, b, c \in S$.
- **Identity Element:** There exists $e \in S$ such that $a * e = e * a = a$ for all $a \in S$.

**Note:** A monoid is always a semigroup and an algebraic structure.

**Ex:** (Set of integers, $*$) is a monoid, as $1$ is an integer which is also the identity element. (Set of natural numbers, $+$) is not a monoid, as there does not exist any identity element — but this is a semigroup. But (Set of whole numbers, $+$) is a monoid with $0$ as the identity element.

### Group

A non-empty set $G$, $(G, *)$, is called a **group** if it follows the following axioms:

- **Closure:** $(a * b)$ belongs to $G$ for all $a, b \in G$.
- **Associativity:** $a * (b * c) = (a * b) * c$ for all $a, b, c \in G$.
- **Identity Element:** There exists $e \in G$ such that $a * e = e * a = a$ for all $a \in G$.
- **Inverses:** For all $a \in G$ there exists $a' \in G$ such that $a * a' = a' * a = e$.

**Note:**
1. A group is always a monoid, semigroup, and algebraic structure.
2. $(\mathbb{Z}, +)$ and matrix multiplication are examples of a group.

### Abelian Group or Commutative Group

A non-empty set $S$, $(S, *)$, is called an **Abelian group** if it follows the following axioms:

- **Closure:** $(a * b)$ belongs to $S$ for all $a, b \in S$.
- **Associativity:** $a * (b * c) = (a * b) * c$ for all $a, b, c \in S$.
- **Identity Element:** There exists $e \in S$ such that $a * e = e * a = a$ for all $a \in S$.
- **Inverses:** For all $a \in S$ there exists $a^{-1} \in S$ such that $a * a^{-1} = a^{-1} * a = e$.
- **Commutative:** $a * b = b * a$ for all $a, b \in S$.

**Note:** $(\mathbb{Z}, +)$ is an example of an Abelian group, but matrix multiplication is not an Abelian group as it is not commutative.

For finding which category a set lies in, one must always check the axioms one by one, starting from the closure property and so on.

### Group Homomorphism

By homomorphism we mean a mapping from one algebraic system to a like algebraic system which preserves structures.

**Definition:** Let $G$ and $G'$ be any two groups with binary operations $\circ$ and $\circ'$ respectively. Then a mapping $f : G \to G'$ is said to be a **homomorphism** if for all $a, b \in G$,
$$f(a \circ b) = f(a) \circ' f(b)$$

- A homomorphism $f$ which at the same time is also **onto** is said to be an **epimorphism**.
- A homomorphism $f$ which at the same time is also **one-one** is said to be a **monomorphism**.
- A group $G'$ is called a **homomorphic image** of a group $G$ if there exists a homomorphism $f$ of $G$ onto $G'$. A homomorphism of a group $G$ into itself is called an **endomorphism**.

**Examples:**

(i) Let $G$ be any group under binary operation $\circ$. If $f(x) = x$ for every $x \in G$, then $f : G \to G$ is a homomorphism, because
$$f(xy) = f(x)\, f(y)$$

(ii) Let $G$ be the group of integers under addition, let $G'$ be the group of integers under addition modulo $n$. If $f : G \to G'$ is defined by $f(x) = $ remainder of $x$ on division by $n$, then this is a homomorphism.

(iii) Let $G$ be any group under addition. If $f(x) = e$ for all $x \in G$, then the mapping $f : G \to G$ is a homomorphism, because for all $x, y \in G$, $f(x + y) = e$ and $f(x) + f(y) = e + e = e$, so that
$$f(x + y) = f(x) + f(y)$$

(iv) Let $G$ be the group of integers under addition and let $G' = G$. If for all $x \in G$, $f(x) = 2x$, then $f$ is a homomorphism, because
$$f(x + y) = 2(x + y) = 2x + 2y = f(x) + f(y)$$

### Kernel of Homomorphism

**Definition:** If $f$ is a homomorphism of a group $G$ into a group $G'$, then the set $K$ of all those elements of $G$ which are mapped by $f$ onto the identity $e'$ of $G'$ is called the **kernel** of the homomorphism $f$.

**Theorem:** Let $G$ and $G'$ be any two groups and let $e$ and $e'$ be their respective identities. If $f$ is a homomorphism of $G$ into $G'$, then

(i) $f(e) = e'$
(ii) $f(x^{-1}) = [f(x)]^{-1}$ for all $x \in G$
(iii) $K$ is a normal subgroup of $G$.

**Proof:**

(i) We know that for $x \in G$, $f(x) \in G'$.
$$f(x) \cdot e' = f(x) = f(xe) = f(x) \cdot f(e),$$
and therefore by using the left cancellation law we have $e' = f(e)$ or $f(e) = e'$.

(ii) Since for any $x \in G$, $x x^{-1} = e$, we get
$$f(x) \cdot f(x^{-1}) = f(x x^{-1}) = f(e) = e'$$
Similarly $x^{-1} x = e$ gives $f(x^{-1}) \cdot f(x) = e'$. Hence by the definition of $[f(x)]^{-1}$ in $G'$ we obtain the result
$$f(x^{-1}) = [f(x)]^{-1}$$

(iii) Since $f(e) = e'$, $e \in K$; this shows that $K \neq \varnothing$. Now let $a, b \in K$, $x \in G$.
$$f(a) = e',\ f(b) = e' \Rightarrow f(b^{-1}) = [f(b)]^{-1} = e' \Rightarrow f(ab^{-1}) = f(a)[f(b)]^{-1} = e' \cdot e' = e' \Rightarrow ab^{-1} \in K$$
This establishes that $K$ is a subgroup of $G$.

Now, to show that it is also normal, we prove the following:
$$f(x^{-1} a x) = f(x^{-1})\, f(a)\, f(x) = [f(x)]^{-1}\, f(a)\, f(x) = [f(x)]^{-1}\, e'\, f(x) = [f(x)]^{-1} f(x) = e'$$
Therefore, $x^{-1} a x \in K$, hence the result.

### Examples of Group Homomorphism

Here are some examples of the concept of group homomorphism.

**Example 1:** Let $G = \{1, -1, i, -i\}$, which forms a group under multiplication, and $I = $ the group of all integers under addition. Prove that the mapping $f$ from $I$ onto $G$ such that $f(n) = i^n$ for all $n \in I$ is a homomorphism.

**Solution:** Since $f(n) = i^n$, $f(m) = i^m$, for all $m, n \in I$,
$$f(m + n) = i^{m+n} = i^m \cdot i^n = f(m) \cdot f(n)$$
Hence $f$ is a homomorphism.

### Group Isomorphism

**Definition:** Let $G$ and $G'$ be any two groups with binary operations $\circ$ and $\circ'$ respectively. If there exists a one-one onto mapping $f : G \to G'$ such that
$$f(a \circ b) = f(a) \circ' f(b),\quad \forall a, b \in G$$
then in this case the group $G$ is said to be **isomorphic** to the group $G'$, and the mapping $f$ is said to be an **isomorphism**. If $G$ is isomorphic to $G'$, we write $G \simeq G'$ or $G \cong G'$.

---

## Multiple Choice Type Questions

**1.** An element $x$ in a ring $R$ is a zero divisor if — *[MODEL QUESTION]*
a) $x \cdot b = 0$
b) $x \cdot b = 0$, for some non-zero element $b$ in $R$
c) $x \cdot b \neq 0$, for all elements $b$ in $R$
d) none of these
**Answer: (b)**

**2.** If $R$ is a ring without zero divisors, then $x \cdot y = 0$ implies — *[MODEL QUESTION]*
a) $x = 0$ or $y = 0$   b) $x = 0$ and $y = 0$   c) $x = 0$, $y \neq 0$   d) $x \neq 0$, $y = 0$
**Answer: (a)**

**3.** Every finite integral domain is a field. This statement is — *[MODEL QUESTION]*
a) true   b) false
**Answer: (a)**

**4.** The number of unit elements of the ring $(\mathbb{Z}, +, \cdot)$ — *[MODEL QUESTION]*
a) 2   b) 3   c) 1   d) infinite
**Answer: (a)**

---

## Short Answer Type Questions

**1.** Prove that every finite integral domain is a field. *[MODEL QUESTION]*

**Answer:** Let $D$ be a finite integral domain. Since every integral domain is a commutative ring with unity, it is enough to prove only that every non-zero element of $D$ has a (multiplicative) inverse in $D$.

So let $a$ be a non-zero element of $D$. Consider the set $S = \{ab; b \in D\}$. Since $D$ is closed with respect to multiplication, $S \subseteq D$.

Now, if $b \neq c$, then $ab \neq ac$, because otherwise $ab = ac$, then $a(b - c) = 0 \therefore b - c = 0$ as $D$ has no divisor of zero, and hence $b = c$. Thus the elements of $S$ are distinct, but as $D$ is finite, $S$ will have as many elements as $D$ has, viz., $S = D$. So there exists an element $a'$ such that $aa' = e$ where $e$ is the unity of $D$. Clearly $a'$ is the inverse of $a$, as $aa' = a'a = e$ by the commutativity of $D$. Since $a$ is arbitrary, every non-zero element has an inverse. Hence $D$ is a field.

**2.** Show that a field does not contain any zero divisor. *[MODEL QUESTION]*

**Answer:** Let $a, b \in F$, $ab = 0$, $a \neq 0$. Then $a^{-1}$ exists in $F$. Multiplying both sides by $a^{-1}$ we get
$$a^{-1}(ab) = a^{-1} \cdot 0 \quad\text{or,}\quad (a^{-1}a)b = 0 \quad\text{or,}\quad b = 0$$
Thus there cannot exist $a, b \in F$, $a \neq 0$, $b \neq 0$ but $ab = 0$. This implies $F$ has no divisor of zero.

**3.** If in a ring $R$ with unity, $(xy)^2 = x^2 y^2$ for all $x, y \in R$, then show that $R$ is commutative. *[MODEL QUESTION]*

**Answer:** Let $x, y \in R$ be any elements. Then $y + 1 \in R$ as $1 \in R$. By the given condition,
$$(x(y + 1))^2 = x^2 (y + 1)^2$$
$$\Rightarrow (xy + x)^2 = x^2 (y + 1)^2$$
$$\Rightarrow (xy)^2 + x^2 + xyx + xxy = x^2(y^2 + 1 + 2y)$$
$$\Rightarrow x^2 y^2 + x^2 + xyx + x^2 y = x^2 y^2 + x^2 + 2x^2 y$$
$$\Rightarrow xyx = x^2 y \qquad \ldots (1)$$
Since $(1)$ holds for all $x, y$ in $R$, it holds for $x + 1$, $y$ also. Thus replacing $x$ by $x + 1$, we get
$$(x + 1)y(x + 1) = (x + 1)^2 y$$
$$\Rightarrow (xy + y)(x + 1) = (x^2 + 1 + 2x)y$$
$$\Rightarrow xyx + xy + yx + y = x^2 y + y + 2xy$$
$$\Rightarrow yx = xy \quad \text{using } (1)$$
Hence $R$ is commutative.

**4.** In a ring $(R, +, \cdot)$ show that $(-a) \cdot (-b) = a \cdot b$ for all $a, b \in R$. *[MODEL QUESTION]*

**Answer:** We see
$$0 = a \cdot 0 = a(b + (-b)) = a \cdot b + a \cdot (-b)$$
$$\therefore a \cdot (-b) = -a \cdot b.$$
Hence $(-a) \cdot (-b) = -(-a) \cdot b = -\{-a \cdot b\} = a \cdot b.$

**5.** Examine whether the set of even integers forms an integral domain with ordinary addition and multiplication. *[MODEL QUESTION]*

**Answer:** Let $E$ denote the set of all even integers. Clearly $E$ is an additive abelian group, a multiplicative semigroup, and has the two distributive properties. Further, $E$ has no divisor of zero and $E$ is commutative with respect to multiplication. But $E$ has no multiplicative identity, i.e., unity. Hence $E$ is not an integral domain.

**6.** If $a^2 = a$ for every element $a$ in a ring $R$, then show that $b = -b$ for every $b \in R$. *[MODEL QUESTION]*

**Answer:** Since $b + b \in R$ for $b \in R$, we get by hypothesis
$$(b + b)^2 = b + b.$$
or $(b + b) \cdot (b + b) = b + b.$
or $b^2 + b^2 + b^2 + b^2 = b + b,$
or $b + b + b + b = b + b.$
$$\therefore b = -b$$

**7.** Show that the set of matrices $\begin{pmatrix} a & 0 \\ b & 0 \end{pmatrix}$ is a subring of the ring of matrices. *[MODEL QUESTION]*

**Answer:** Let $M_2$ denote the ring of matrices of order 2. Let $S$ denote the set of matrices $\begin{pmatrix} a & 0 \\ b & 0 \end{pmatrix}$.

Let $\begin{pmatrix} a & 0 \\ b & 0 \end{pmatrix}, \begin{pmatrix} c & 0 \\ d & 0 \end{pmatrix} \in S$. Then
$$\begin{pmatrix} a & 0 \\ b & 0 \end{pmatrix} - \begin{pmatrix} c & 0 \\ d & 0 \end{pmatrix} = \begin{pmatrix} a - c & 0 \\ b - d & 0 \end{pmatrix} \in S$$
$$\begin{pmatrix} a & 0 \\ b & 0 \end{pmatrix}\begin{pmatrix} c & 0 \\ d & 0 \end{pmatrix} = \begin{pmatrix} ac & 0 \\ bc & 0 \end{pmatrix} \in S$$
Hence $S$ is a subring of $M_2$.

**8.** Show that the set of matrices $S = \left\{ \begin{pmatrix} \alpha & 0 \\ \beta & 0 \end{pmatrix} : \alpha, \beta \in R \right\}$ is a left ideal but not a right ideal of $2 \times 2$ real matrices. *[MODEL QUESTION]*

**Answer:** A subring $S$ of a ring $R$ is said to be a **left ideal** of $R$ if $a \in S, r \in R \Rightarrow r \cdot a \in S$, and a **right ideal** of $R$ if $a \in S, r \in R \Rightarrow a \cdot r \in S$.

Let $S_1 = \begin{pmatrix} \alpha_1 & 0 \\ \beta_1 & 0 \end{pmatrix}, S_2 = \begin{pmatrix} \alpha_2 & 0 \\ \beta_2 & 0 \end{pmatrix}$ be 2 elements of $S$. Then
$$S_1 - S_2 = \begin{pmatrix} \alpha_1 - \alpha_2 & 0 \\ \beta_1 - \beta_2 & 0 \end{pmatrix} \in S$$
and $S_1 \cdot S_2 \in S$, so $S_1 \cdot S_2 \in S$ and $S_2 \cdot S_1 \in S$. Therefore $S$ is a subring of $2 \times 2$ real matrices.

Let $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ be a $2 \times 2$ real matrix. Then
$$S_1 \cdot A = \begin{pmatrix} \alpha_1 & 0 \\ \beta_1 & 0 \end{pmatrix}\begin{pmatrix} a & b \\ c & d \end{pmatrix} = \begin{pmatrix} \alpha_1 a & \alpha_1 b \\ \beta_1 a & \beta_1 b \end{pmatrix} \in S$$
$$A \cdot S_1 = \begin{pmatrix} a & b \\ c & d \end{pmatrix}\begin{pmatrix} \alpha_1 & 0 \\ \beta_1 & 0 \end{pmatrix} = \begin{pmatrix} a\alpha_1 + b\beta_1 & 0 \\ c\alpha_1 + d\beta_1 & 0 \end{pmatrix} \in S$$
$\therefore$ $S$ is a left ideal but not a right ideal of $2 \times 2$ real matrices.

**9.** Given a division ring $D$ and a $D$ (left) vector space $V$, then given any bases for $V$, $B_1, B_2$, then the coordinates $|B_1| = |B_2|$. Thus dimension is an invariant. *[MODEL QUESTION]*

**Answer:** Suppose $|B_1| > |B_2|$. Notice that given any element $v \in V$, we may write $v = \sum_{i} d_i a_i$ where $d_i \in D$ and $E_v \subseteq B_2$, $|E_v| < \infty$. Note that the collection of all $E_v$ (all finite subsets of $B_2$) has the same cardinality as $B_2$. Thus there is a $b \in B_1$ which is not the linear combination of any of the elements of $B_2$. Thus $B_2 \cup \{b\}$ is a linearly independent set, contradicting $B_2$ a basis.

**10.** Let $D$ be a division ring, and let $V_1, V_2$ be (left) vector-spaces over $D$, such that there are linear monomorphisms $g_1 : V_1 \to V_2$ and $g_2 : V_2 \to V_1$. Then $V_1 \cong V_2$. *[MODEL QUESTION]*

**Answer:** Let $B_1$ be a basis for $V_1$. Then consider that $g_1(B_1)$ is a linearly independent set in $V_2$ and so extends to a basis $C_2$ in $V_2$. Similarly, $g_2(B_2)$ extends to a basis $C_1$ of $V_1$.

So by the dimension theorem, we have bijections $\psi_1 : B_1 \to C_1$. Then $\psi_2^{-1} \circ \psi_1 : B_1 \to B_2$ is an injection. Similarly, $\psi_1^{-1} \circ \psi_2 : B_2 \to B_1$ is also an injection. So by the Cantor–Schroeder–Bernstein theorem, there is a bijection $\tau : B_1 \to B_2$. This bijection between bases $\tau$, extends uniquely to a linear isomorphism $\bar{\tau}$ and thus $V_1 \cong V_2$.

**11.** Let $G := \bigoplus_{i} A_{2i+1}$, $H := \bigoplus_{i} A_{2i}$, where $A_n$ is the alternating group on $n$ elements. Then there are injections from $G$ into $H$ and vice versa, but these groups are non-isomorphic. *[MODEL QUESTION]*

**Answer:** To see that these groups embed into one another, we observe that there is a natural embedding $\iota : A_i \to A_{i+1}$ for any choice $i$, since the even permutations on the $i + 1$ element set include the even permutations that do not act on the $(i+1)$st element. Thus we have embeddings $g : G \to H$ and $\psi : H \to G$.

*[diagram: embedding maps between $G$ and $H$]*

where $\iota : A_i \to A_{i+1}$ is the natural embedding and similarly for $\psi$.

However, to show that they are not isomorphic, let $\psi : H \to G$ be a group homomorphism and let $p_i : G \to A_i$ be the projection homomorphism. Recall that each $A_i$ is simple for $i \geq 5$ and each $A_{2i+1}, i \geq 1$ contains strictly greater than $|A_i|$ elements. Because $A_{2i+1}$ is simple, $p_i \circ \iota|_{A_{2i+1}}$ must be isomorphic to either $A_{2i+1}$ or $\{e\}$ and so $p_i \circ \psi|_{A_{2i+1}}$ must be the trivial map. Thus $\tau$ is not onto, and since this is true for any $i$, $G$ and $H$ are not isomorphic groups.

**12.** Let $G := \bigsqcup_{i=1}^{\infty} K_{2i}$, $H := \bigsqcup_{j=1}^{\infty} K_{2j-1}$, the disjoint union of non-trivial even and odd degree complete graphs, respectively. Then $G, H$ embed into one another but are non-isomorphic graphs. *[MODEL QUESTION]*

**Answer:** We first show the existence of embeddings $G \to H$ and $H \to G$. Notice that given any positive integer $n$, there is a natural embedding $\iota : K_n \to K_{n+1}$ by mapping the $n$ vertices of $K_n$ to any $n$ vertices of $K_{n+1}$. Thus we may define $g, \psi$.

*[diagram: embedding maps between $G$ and $H$]*

where $g|K_n$ is the natural embedding $K_n \to K_{n+1}$, and similarly for $\psi$.

However, every vertex of $G$ has odd degree and every vertex of $H$ has even degree. Thus $G$ and $H$ cannot be isomorphic.

---

## Long Answer Type Questions

**1. a)** Prove that the set of all even integers forms a commutative ring. *[MODEL QUESTION]*

**Answer:** We know $2\mathbb{Z}$ is an additive commutative group. Next, let $m, n \in 2\mathbb{Z}$. Then $m = 2p$, $n = 2q$ for some $p, q \in \mathbb{Z}$.
$$mn = (2p)(2q) = 2(2pq) \in 2\mathbb{Z}$$
Associativity follows hereditarily from $\mathbb{Z}$. The two distributive properties also follow hereditarily. Hence $2\mathbb{Z}$ is a ring. Further it is commutative since $mn = nm$ for all $m, n \in 2\mathbb{Z}$.

**1. b)** Prove that the intersection of two subrings is a subring. *[MODEL QUESTION]*

**Answer:** Let $(G, *, \cdot)$ be a ring and $(H, *, \cdot)$, $(K, *, \cdot)$ be two subrings of $(G, *, \cdot)$.

Since $(H, *, \cdot)$ and $(K, *, \cdot)$ are two rings, therefore $(H, *)$ and $(K, *)$ are two commutative groups and $(H, \cdot)$ and $(K, \cdot)$ are semigroups.

Again, for any $a, b, c \in H$,
(i) $a \cdot (b * c) = (a \cdot b) * (a \cdot c)$
(ii) $(b * c) \cdot a = (b \cdot a) * (c \cdot a)$
and the same properties hold for $K$ also.

Now, let $h, k \in H \cap K$. Since $(H, *)$ is a group, therefore $h * k^{-1} \in H$. Again $(K, *)$ is a group, thus $h * k^{-1} \in K$. Therefore $h * k^{-1} \in H \cap K$. Hence $(H \cap K, *)$ is a group. Also $h * k = k * h$ for $H$ and $K$. Therefore $h * k = k * h$ for $H \cap K$. Thus $(H \cap K, *)$ is a commutative group.

With similar arguments we can say that $(H \cap K, \cdot)$ forms a semigroup. Again, conditions (i) and (ii) hold for both $H$ and $K$. Therefore for any three elements $a, b, c \in H \cap K$, these conditions must be satisfied. Hence $(H \cap K, *, \cdot)$ is a subring of $(G, *, \cdot)$.

**2. a)** Let $f$ be a ring homomorphism from the ring $\mathbb{Z}$ of integers into itself such that $f(1) = 1$. Determine the homomorphism $f$. *[MODEL QUESTION]*

**Answer:** Here we observe that $f(0) = f(0 + 0) = f(0) + f(0) \therefore f(0) = 0$.

Also, $f(2) = f(1 + 1) = f(1) + f(1) = 1 + 1 = 2$
$0 = f(0) = f(1 + (-1)) = f(1) + f(-1) \therefore f(-1) = -f(1)$

Similarly, $f(n) = n$ for $n \in \mathbb{Z}$. Hence $f$ is the identity homomorphism.

**2. b)** Let $R$ and $S$ be two rings and $f : R \to S$ be a ring homomorphism. Show that the kernel of $f$ is a subring of $R$. *[MODEL QUESTION]*

**Answer:** Here $\ker f = \{x \in R; f(x) = 0\}$ where $f : R \to S$ is a ring homomorphism.

Let $a, b \in \ker f$. Then $f(a) = 0$, $f(b) = 0$.

Now $f(0) = f(0 + 0) = f(0) + f(0) \therefore f(0) = 0$.
Also, $0 = f(b - b) = f(b) + f(-b) \therefore f(-b) = -f(b)$.
So, $f(a - b) = f(a) + f(-b) = f(a) - f(b) = 0 - 0 = 0$. Hence $a - b \in \ker f$.

Further $f(a \cdot b) = f(a) \cdot f(b) = 0 \cdot 0 = 0$. So, $ab \in \ker f$.

Therefore $\ker f$ is a subring of $R$.

**3. a)** Let $A = \begin{pmatrix} 1 & 2 & 3 & 4 & 5 \\ 2 & 3 & 1 & 5 & 4 \end{pmatrix}$, $B = \begin{pmatrix} 1 & 2 & 3 & 4 & 5 \\ 1 & 3 & 4 & 5 & 2 \end{pmatrix}$ be two permutations. Show that $AB \neq BA$. *[MODEL QUESTION]*

**Answer:**
$$A = \begin{pmatrix} 1 & 2 & 3 & 4 & 5 \\ 2 & 3 & 1 & 5 & 4 \end{pmatrix},\quad B = \begin{pmatrix} 1 & 2 & 3 & 4 & 5 \\ 1 & 3 & 4 & 5 & 2 \end{pmatrix}$$
$$AB = \begin{pmatrix} 1 & 2 & 3 & 4 & 5 \\ 3 & 4 & 1 & 2 & 5 \end{pmatrix},\quad BA = \begin{pmatrix} 1 & 2 & 3 & 4 & 5 \\ 2 & 1 & 5 & 4 & 3 \end{pmatrix}$$
Clearly $AB \neq BA$.

**3. b)** Let $f : (\mathbb{C} - \{0\}, \cdot) \to (\mathbb{C} - \{0\}, \cdot)$ be a function defined by $f(z) = z^4$.
(i) Show that $f$ is a homomorphism.
(ii) Find the kernel of $f$. *[MODEL QUESTION]*

**Answer:** Let $z_1, z_2 \in \mathbb{C} - \{0\}$. Then
$$f(z_1 z_2) = (z_1 z_2)^4 = z_1^4 z_2^4 = f(z_1) f(z_2)$$
Hence $f$ is a homomorphism. For the kernel, we have $f(z) = 1$ as $1$ is the identity of $(\mathbb{C} - \{0\}, \cdot)$,
$$\text{i.e.,}\quad z^4 = 1 = \cos 2k\pi + i \sin 2k\pi,\ k \in \mathbb{N}$$
$$\text{or,}\quad z = \cos \frac{2k\pi}{4} + i \sin \frac{2k\pi}{4},\quad k = 0, 1, 2, 3$$
Hence $\ker f = \{1, i, -1, -i\}$.

**4. a)** Prove that cancellation laws hold in a ring $R$ if and only if $R$ has no divisor of zero.

**4. b)** Let $S, T$ be two subrings of a ring $R$. Prove that $S \cap T$ is also a subring of $R$. *[MODEL QUESTION]*

**Answer:**

**a)** Let the cancellation laws hold in $R$. Let $a \cdot b = 0$ where $a \neq 0$, $a, b \in R$. Then $a \cdot b = a \cdot 0$, so $b = 0$ (cancelling $a$ from both sides). Hence $R$ has no divisor of zero.

Conversely, let $R$ have no divisor of zero. Let $ab = ac$ where $a, b, c \in R$, $a \neq 0$.
$$\text{or,}\quad ab - ac = 0$$
$$\text{or,}\quad a(b - c) = 0$$
Since $R$ has no divisor of zero, $b - c = 0$ $[\because a \neq 0]$, i.e., the left cancellation law holds. The right cancellation law can be proved similarly.

**b)** Let $S$ and $T$ be two subrings of $R$. Since $S$ and $T$ are additively abelian groups, $S \cap T$ is also an additively abelian group. Since $S$ and $T$ are multiplicatively semigroups, $S \cap T$ is also a multiplicative semigroup. Since two distributive properties hold in $S$ and $T$ and these properties are hereditary, $S \cap T$ has the two distributive properties. Hence $S \cap T$ is a subring of $R$.

**5. a)** Show that the set of matrices $\begin{pmatrix} a & 0 \\ b & 0 \end{pmatrix}$ is a subring of the ring of $2 \times 2$ matrices.

**5. b)** Prove that a finite integral domain is a field. *[MODEL QUESTION]*

**Answer:**

**a)** Let $\begin{pmatrix} a & 0 \\ b & 0 \end{pmatrix}, \begin{pmatrix} c & 0 \\ d & 0 \end{pmatrix} \in M_2(\mathbb{R})$, the set of all $2 \times 2$ matrices with real entries of the form $\begin{pmatrix} a & 0 \\ b & 0 \end{pmatrix}$. Clearly
$$\begin{pmatrix} a & 0 \\ b & 0 \end{pmatrix} - \begin{pmatrix} c & 0 \\ d & 0 \end{pmatrix} = \begin{pmatrix} a - c & 0 \\ b - d & 0 \end{pmatrix} \in M_2(\mathbb{R})$$
$$\text{and}\quad \begin{pmatrix} a & 0 \\ b & 0 \end{pmatrix}\begin{pmatrix} c & 0 \\ d & 0 \end{pmatrix} = \begin{pmatrix} ac & 0 \\ bc & 0 \end{pmatrix} \in M_2(\mathbb{R})$$
Hence the set of matrices $\begin{pmatrix} a & 0 \\ b & 0 \end{pmatrix}$ is a subring of all $2 \times 2$ matrices.

**b)** Let $D$ be a finite integral domain with $n$ elements $a_1, a_2, \ldots, a_n$, of which $a_1$ is the zero element and $a_n$ is the identity. We first prove that $x a_i = a_j$, for some $a_i, a_j \in \{a_1, a_2, \ldots, a_n\}$ has a unique solution. To prove this we claim $a_2 a_i, a_3 a_i, \ldots, a_n a_i$, are distinct. If not, then say $a_p a_i = a_q a_i$, or $(a_p - a_q)a_i = 0$. But $D$ does not have zero-divisors and $a_i \neq 0$, hence $a_p - a_q = 0$ or $a_p = a_q$, which is a contradiction.

Hence the products $a_2 a_i, a_3 a_i, \ldots, a_n a_i$ are distinct. So one of these must be, by closure property, equal to $a_n$. Thus $x a_i = a_n$ has a solution. The uniqueness follows by a similar argument. Now consider the equation $x a_i = a_i$. We claim this has a solution, say $a$; this is the inverse of $a_i$. This is so because of commutativity of $D$, $a_i a = a a_i = a_n$. Hence the existence of inverse is established. This means $D$ is a field.

**6. a)** If a ring $R$ consists of all integral multiples of 2 and $R'$ consists of all integral multiples of 3, show that $R$ is not isomorphic to $R'$.

**6. b)** When does a ring become a field? Does multiplication in a field obey the cancellation law? Examine. What is the field of quotients of the integral domain of integers? *[MODEL QUESTION]*

**Answer:**

**a)** Here $R = 2\mathbb{Z}$, $R' = 3\mathbb{Z}$. Let $f$ be a mapping from the ring $R$ of all multiples of 2 to the ring $R'$ of all multiples of 3 defined by $f : R \to R'$ by $f(2a) = 3a$ for all $a \in R$.

Then for any 2 elements $2a_1, 2a_2 \in R$ we have $f(2a_1) = 3a_1$, $a_1 \in R$ & $f(2a_2) = 3a_2$, $a_2 \in R$.

Now if $f[2a_1 + 2a_2] = f(2(a_1 + a_2)) = 3(a_1 + a_2) = 3a_1 + 3a_2 = f(2a_1) + f(2a_2)$.
And $f[2a_1 \cdot 2a_2] = 2 \cdot 3a_1 a_2 = 6a_1 a_2$; $f(2a_1) \cdot f(2a_2) = 3a_1 \cdot 3a_2 = 9a_1 a_2$.
Clearly $f(2a_1 \cdot 2a_2) \neq f(2a_1) f(2a_2)$. Here $f$ is not a homomorphism and so $R$ is not isomorphic to $R'$.

**b)** A ring becomes a field if it has identity, it is commutative, and every non-zero element of it has an inverse.

Yes. It does obey, since it has no divisor of zero. The field of quotients of the integral domain of integers is the set of rational numbers, i.e. $\mathbb{Q}$.

**7. a)** Define ideal of a ring. Let $S$ be the set of all $(2 \times 2)$ real matrices defined by $S = \left\{ \begin{pmatrix} a & 0 \\ b & 0 \end{pmatrix} : a, b \in \mathbb{R} \right\}$. Show that $S$ is a left ideal but not a right ideal of $M_2(\mathbb{R})$. *[MODEL QUESTION]*

**7. b)** Prove that every finite integral domain is a field.

**Answer:**

**a)** $S$ is clearly a subring of $M_2(\mathbb{R})$. Since, if $\begin{pmatrix} a & 0 \\ b & 0 \end{pmatrix}, \begin{pmatrix} c & 0 \\ d & 0 \end{pmatrix} \in S$, then
$$\begin{pmatrix} a & 0 \\ b & 0 \end{pmatrix} - \begin{pmatrix} c & 0 \\ d & 0 \end{pmatrix} = \begin{pmatrix} a - c & 0 \\ b - d & 0 \end{pmatrix} \in S$$
$$\text{and}\quad \begin{pmatrix} a & 0 \\ b & 0 \end{pmatrix}\begin{pmatrix} c & 0 \\ d & 0 \end{pmatrix} = \begin{pmatrix} ac & 0 \\ bc & 0 \end{pmatrix} \in S$$
Further, let $\begin{pmatrix} a & 0 \\ b & 0 \end{pmatrix} \in S$, $\begin{pmatrix} p & q \\ r & s \end{pmatrix} \in M_2(\mathbb{R})$,
$$\begin{pmatrix} p & q \\ r & s \end{pmatrix}\begin{pmatrix} a & 0 \\ b & 0 \end{pmatrix} = \begin{pmatrix} pa + qb & 0 \\ ar + sb & 0 \end{pmatrix} \in S$$
Hence $S$ is a left ideal. Since
$$\begin{pmatrix} a & 0 \\ b & 0 \end{pmatrix}\begin{pmatrix} p & q \\ r & s \end{pmatrix} = \begin{pmatrix} ap & aq \\ bp & bq \end{pmatrix} \notin S,$$
$S$ is not a right ideal.

**b)** Let $D$ be a finite integral domain. Since every integral domain is a commutative ring with unity, it is enough to prove only that every non-zero element of $D$ has a (multiplicative) inverse in $D$.

So let $a$ be a non-zero element of $D$. Consider the set $S = \{ab; b \in D\}$. Since $D$ is closed with respect to multiplication, $S \subseteq D$. Now, if $b \neq c$, then $ab \neq ac$ because otherwise $ab = ac$, then $a(b - c) = 0 \therefore b - c = 0$ as $D$ has no divisor of zero, and hence $b = c$. Thus the elements of $S$ are distinct, but as $D$ is finite, $S$ will have as many elements as $D$ has, viz., $S = D$. So there exists an element $a'$ such that $aa' = e$ where $e$ is the unity of $D$. Clearly $a'$ is the inverse of $a$, as $aa' = a'a = e$ by the commutativity of $D$. Since $a$ is arbitrary, every non-zero element has an inverse. Hence $D$ is a field.

**8. a)** Show that $S = \{6x; x \in \mathbb{Z}\}$ is an ideal of $\mathbb{Z}$. *[MODEL QUESTION]*

**8. b)** Prove that the ring of integers is not a field.

**8. c)** Prove that in a field $F$ the equations $a \cdot x = b$, $y \cdot a = b$ have unique solutions.

**Answer:**

**a)** Here $S = \{6x; x \in \mathbb{Z}\}$. Clearly, $S$ is a subring of $\mathbb{Z}$ since $6m - 6n = 6(m - n) \in 6\mathbb{Z}$ and $6m \cdot 6n = 6(6mn) \in 6\mathbb{Z}$.

Next, if $p \in \mathbb{Z}$, $s \in S$, then $s = 6m$ for some $m \in \mathbb{Z}$. Now, $ps = p6m = 6pm \in S$ and $sp = 6mp = 6mp \in S$. Hence $S$ is an ideal of $\mathbb{Z}$.

**b)** $(\mathbb{Z}, +, \cdot)$ is not a field, since every non-zero integer does not have an inverse in $\mathbb{Z}$.

**c)** We have the equation $ax = b$, $a \neq 0$. Since $a \neq 0$, $a$ has an inverse, say $a^{-1}$. So
$$a^{-1}(ax) = a^{-1}b$$
$$\text{or,}\quad (a^{-1}a)x = a^{-1}b$$
$$\text{or,}\quad ex = a^{-1}b$$
$$\text{or,}\quad x = a^{-1}b.$$
Thus the existence of a solution is proved.

For uniqueness, assume that $x^*$ and $\bar{x}$ are two solutions of the above equation. Then $ax^* = b$ and $a\bar{x} = b$. So $ax^* = a\bar{x}$, or $a(x^* - \bar{x}) = 0$. $\therefore x^* - \bar{x} = 0$ as $a \neq 0$ and $F$ has no divisor of zero, or $x^* = \bar{x}$.

Thus the solution is unique. The argument for the other equation $xa = b$ is very much similar.
