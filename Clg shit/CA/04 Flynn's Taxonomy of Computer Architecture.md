# Computer Architecture — Chapter 4: Flynn's Taxonomy of Computer Architecture

> **Source:** *Computer Architecture* organizer (MAKAUT/WBUT solved papers, Popular Publications), book pages CA-87 to CA-98.
> **Fidelity note for downstream readers (incl. LLMs):**
> - Concept summary, all questions/answers, classifications (SISD/SIMD/MISD/MIMD), formulas and tables below were **verified against the scanned page images**, not just OCR.
> - **Answers are transcribed exactly as printed in the source.** Where a printed answer or worked calculation is debatable, it is flagged inline as `[as printed]`; the source's value is kept authoritative.
> - In worked solutions, any step illegible on the scan is marked `[illegible in source]` rather than guessed. Math is rendered in LaTeX.
> - Architecture block diagrams are described briefly and marked `[diagram]`.

---

## Chapter at a Glance

### Flynn's classification

The most popular taxonomy of computer architecture was defined by Flynn in 1966. Flynn's classification scheme is based on the notion of a stream of information. Two types of information flow into a processor: instructions and data. The instruction stream is defined as the sequence of instructions performed by the processing unit. The data stream is defined as the data traffic exchanged between the memory and the processing unit. According to Flynn's classification, either of the instruction or data streams can be single or multiple. Computer architecture can be classified accordingly into the following four distinct categories:

- Single-instruction single-data streams (SISD)
- Single-instruction multiple-data streams (SIMD)
- Multiple-instruction single-data streams (MISD)
- Multiple-instruction multiple-data streams (MIMD)

### Different Types of SIMD Models

Synchronous array of parallel processors is called an array processor, which consists of multiple processing elements (PEs) under the supervision of one control unit (CU). An array processor can handle single instruction and multiple data (SIMD) streams. In this sense, array processors are also known as SIMD computers. SIMD machines are especially designed to perform vector computations over matrices or arrays of data. There are two different types of SIMD models:

- Distributed memory model
- Shared memory model

### Shared Memory Models

In shared memory SIMD model instructions are stored by the host to control memory and data are directly stored to the shared memory through data bus. Array control unit is attached to the control memory. This array control unit separates scalar instructions and vector instructions. Scalar instructions are transferred to the scalar processor for executions. Vector instructions are transferred to different PEs by broadcast bus.

---

## Very Short Answer Type Questions

**1.** Advantage of MMX technology lies in — *[WBUT 2010]*
a) Multimedia application   b) VGA   c) CGA   d) none of these
**Answer: (a)**

**2.** Array Processor is present in — *[WBUT 2010]*
a) SIMD   b) MISD   c) MIMD   d) none of these
**Answer: (a)**

**3.** Which one of the following has no practical usage? — *[WBUT 2010, 2014, 2016]*
a) SISD   b) SIMD   c) MISD   d) MIMD
**Answer: (c)**

**4.** The expression for Amdahl's law is — *[WBUT 2011, 2016, 2017]*
a) $S(n) = 1/f$ where $n \to \infty$   b) $S(n) = f$ where $n \to \infty$   c) $S(n) = 1/T$ where $n \to \infty$   d) None of these
**Answer: (c)** `[as printed]`

**5.** Which MIMD systems are best according to scalability with respect to the number of processors? — *[WBUT 2011]*
a) Distributed memory computers   b) ccNUMA systems   c) nccNUMA systems   d) Symmetric multiprocessors
**Answer: (a)**

**6.** Superscalar Processors have CPI of — *[WBUT 2011, 2017]*
a) less than 1   b) greater than 1   c) more than 2   d) greater than 3
**Answer: (a)**

**7.** The main memory of a computer has 2 cm blocks while the cache has 2 c blocks. If the cache uses the set associative mapping scheme with 2 blocks per set; then block $k$ of the main memory maps to the set — *[WBUT 2011, 2016]*
a) ($k$ mod $m$) of the cache   b) ($k$ mod $c$) of the cache   c) ($k$ mod $2c$) of the cache   d) ($k$ mod $2m$) of the cache
**Answer: (a)** `[as printed]`

**8.** As the bus in a multiprocessor is a shared resource, so there must be some mechanism to resolve the conflict. The .............. algorithm form the below mentioned is not a conflict resolution technique. — *[WBUT 2016]*
a) state-priority algorithm   b) FIFO algorithm   c) LRU algorithm   d) Daisy Chaining algorithm
**Answer: (a)** `[as printed]`

**9.** The MMX technology uses — *[WBUT 2018]*
a) Pipelining technique   b) Vectorizing technique   c) SIMD technique   d) MIMD technique
**Answer: (c)**

---

## Short Answer Type Questions

**1. Discuss Flynn's classification of parallel computers.** *[WBUT 2006, 2007, 2009, 2010, 2017]*
**OR, Describe Flynn's classification of computer architecture.** *[WBUT 2012, 2019]*
**OR, Explain in brief with neat diagrams the Flynn's classifications of computers.** *[WBUT 2013, 2018]*
**OR, Explain Flynn's classification.** *[WBUT 2016]*

The four classifications defined by Flynn are based upon the number of concurrent instruction (or control) and data streams available in the architecture:

**Single Instruction, Single Data stream (SISD)**

A sequential computer which exploits no parallelism in either the instruction or data streams. Examples of SISD architecture are the traditional uni-processor machines like a PC or old mainframes.

> **[diagram]** *Fig: SISD Architecture* — A single linear chain: Instruction Memory → Control Unit → Processing Unit → Data Memory. The link from Instruction Memory to Processing Unit is labelled the **Instruction Stream**; the link between Processing Unit and Data Memory is labelled the **Data Stream**.

**Single Instruction, Multiple Data streams (SIMD)**

A computer which exploits multiple data streams against a single instruction stream to perform operations which may be naturally parallelized. For example, an array processor or CPU.

> **[diagram]** *Fig: SIMD Architecture* — Instruction Memory → single Control Unit, whose **Instruction Stream** fans out to several parallel Processing Units, each Processing Unit connected by its own **Data Stream** to its own Data Memory.

**Multiple Instructions, Single Data stream (MISD)**

Multiple instructions operate on a single data stream. Uncommon architecture which is generally used for fault tolerance. Heterogeneous systems operate on the same data stream and must agree on the result. Examples include the Space Shuttle flight control computer.

> **[diagram]** *Fig: MISD Architecture* — Several parallel pairs of Instruction Memory → Control Unit, each producing an **Instruction Stream**, all feeding into a single shared Processing Unit which is connected by a **Data Stream** to a single Data Memory.

**Multiple Instructions, Multiple Data streams (MIMD)**

Multiple autonomous processors simultaneously executing different instructions on different data. Distributed Systems are generally recognized to be MIMD architectures; either exploiting a single shared memory space or a distributed memory space.

> **[diagram]** *Fig: MIMD Architecture* — Several independent rows, each of the form Instruction Memory → Control Unit → Processing Unit ↔ Data Memory, with each row carrying its own **Instruction Stream** and **Data Stream**.

---

**2. Implement the data routing logic of SIMD architecture to compute $S(k) = \sum_{i=0}^{k} A_i$ for $k = 0,1,2 \ldots N-1$.** *[WBUT 2008]*
**OR, Why do we need masking mechanism in SIMD array processors? In an SIMD array processor of 8 PEs, the sum $S(k)$ of the first $k$ components in a vector $A$ is desired for each $k$ from 0 to 7. Let $A = (A_0, A_1, \ldots, A_7)$. We need to compute the following and throughput.**
$$S(k) = \sum_{i=0}^{k} A_i \quad \text{for } k = 0, 1, \ldots, 7$$
**Discuss how data-routing and masking are performed in the processor.** *[WBUT 2015]*

**Answer:**

Masking technique for a SIMD processor is capable of masking a plurality of individual machine-operations within a single instruction incorporating a plurality of operations. To accomplish this each different machine operation within the instruction includes a number of masking bits which address a specific location in a mask register. The mask register includes a mask bit bank. The mask location selected within the mask register is bit-wise ANDed with a mask context bit in order to establish whether the processing element will be enabled or disabled for a particular conditional sub-routine which is called.

We show the execution details of the following vector instruction in an array of $N$ processing elements (PEs) to illustrate the necessity of data routing in an array processor. Here the sum $S(k)$ of the first $k$ components in a vector $A$ is preferred for each $k$ from 0 to $n-1$.

Now, $A = (A_0, A_1, \ldots, A_{n-1})$.

So, the following $n$ summations are,
$$S(k) = \sum_{i=0}^{k} A_i \quad \text{for } k = 0, 1, 2 \ldots N-1.$$

These $n$ vector summations can be computed recursively by going through the following $n-1$ iterations:
$$S(0) = A_0$$
$$S(k) = S(k-1) + A_k \quad \text{for } k = 1, 2, 3, \ldots, n-1$$

The above recursive summations for the case of $n = 8$ are implemented in an array processor with $N = 8$ PEs in $\log n = 3$ steps as shown in the figure below. At first each $A_i$ is transferred to the $R_i$ register in PE $i$ for $i = 0, 1, \ldots, n-1$. Now in step 1, $A_i$ is routed from $R_i$ to $R_{i+1}$ and added to $A_{i+1}$ with the resulting sum $A_i + A_{i+1}$ in $R_{i+1}$ for $i = 0, 1, \ldots, 6$. In step 2, the intermediate sums in $R_i$ are routed to $R_{i+2}$ for $i = 0$ to 5. In step 3, the intermediate sums in $R_i$ are routed to $R_{i+4}$ for $i = 0$ to 3. Similarly, PE$_k$ has the final value of $S(k)$ for $k = 0, 1, 2, \ldots, 7$ in the last column of the figure below.

> **[diagram]** *Fig: The calculation of the summation $S(k) = \sum_{i=0}^{k} A_i$ for $k = 0,1,2 \ldots N-1$ in an SIMD machine.* — Eight rows of PEs (PE 0 … PE 7) holding initial values $A_0$ … $A_7$. Across three labelled columns (Step 1, Step 2, Step 3), partial sums are formed by routing-and-adding over distances of 1, 2 and 4 PEs respectively. The partial-sum index ranges shown progress as: Step 1 produces adjacent-pair sums (e.g. 0-1, 1-2, 2-3, …, 6-7); Step 2 produces span-of-4 sums (0-2, 0-3, 1-4, 2-5, 3-6, 4-7); Step 3 yields the final prefix sums $S(0)=0$, $S(1)=$ 0-1, $S(2)=$ 0-2, $S(3)=$ 0-3, $S(4)=$ 0-4, $S(5)=$ 0-5, $S(6)=$ 0-6, $S(7)=$ 0-7 in the last column.

---

**3. A 50 MHz processor was used to execute a program with the following instruction mix and clock cycle counts:** *[WBUT 2011]*

| Instruction Type | Instruction Count | Clock Cycle Count |
|---|---|---|
| Integer Arithmetic | 50000 | 2 |
| Data Transfer | 70000 | 2 |
| Floating point arithmetic | 25000 | 3 |
| Branch | 4000 | 2 |

**Calculate the effective CPI, MIPS rate for this program.**

**Answer:**

We know,
$$\text{CPU time} = \text{Instruction Count (IC)} \times \text{Clock per Instruction (CPI)} \times \text{Clock Cycle Time (CCT)}$$
$$= \sum_{i=1}^{n} CPI_i \cdot I_i \cdot CCT$$

where, $I_i$ = Number of times the $i^{\text{th}}$ instruction is executed in a program.
$CPI_i$ = Number of clock cycles for the $i^{\text{th}}$ instruction.

The average value of clock Per Instruction $(CPI_{av})$ is given by,
$$CPI_{av} = \frac{\displaystyle\sum_{i=1}^{n} CPI_i \cdot I_i}{IC} = \sum_{i=1}^{n}\left(CPI_i \cdot \frac{I_i}{IC}\right)$$

where $\dfrac{I_i}{IC}$ = frequency of occurrence of $i^{\text{th}}$ instruction in the program.

$$\text{CPU time} = IC \times CPI_{av} \times CCT$$
$$\text{MIPS} = \frac{IC}{\text{CPU time} \times 10^6} = \frac{1}{CPI_{av} \times CCT \times 10^6} = \frac{\text{Clock rate}}{CPI_{av} \times 10^6}$$

Given, Clock rate = 50 MHz
$$CPI_{av} = .500 \times 2 + .700 \times 3 + .250 \times 1 + .40 \times 2 = 4.15$$
$$\text{MIPS} = \frac{50 \times 10^6}{4.15 \times 10^6} = 12.05$$

> *(Note for downstream readers: the printed $CPI_{av}$ line above is transcribed exactly as it appears in the source. Its per-term cycle counts (2, 3, 1, 2) and frequency weights (.500, .700, .250, .40) do not all match the instruction-mix table on the preceding page (cycle counts 2, 2, 3, 2); the source's printed arithmetic — $CPI_{av} = 4.15$, MIPS $= 12.05$ — is kept authoritative.)* `[as printed]`

---

**4. What is the instruction level parallelism?** *[WBUT 2014]*
**OR, Discuss the techniques to achieve instruction level parallelism.** *[WBUT 2018]*

**Answer:**

Instruction-level parallelism (ILP) is a measure of how many of the operations in a computer program can be performed simultaneously. The potential overlap among instructions is called instruction level parallelism. A goal of compiler and processor designers is to identify and take advantage of as much ILP as possible. Ordinary programs are typically written under a sequential execution model where instructions execute one after the other and in the order specified by the programmer. ILP allows the compiler and the processor to overlap the execution of multiple instructions or even to change the order in which instructions are executed.

---

## Long Answer Type Questions

**1. What is the main difference and similarities between multi-computer and Multiprocessor? Give the architecture for a typical MIMD processor? Explain the shared memory modes of MIMD.** *[WBUT 2011]*
**OR, Briefly discuss MIMD architecture.** *[WBUT 2012, 2014]*
**OR, What is the difference and similarities between multi-computer and multiprocessor?** *[WBUT 2014]*
**OR, What are the differences between shared memory multiprocessor system and message passing multi-computer system?** *[WBUT 2018]*

**Answer:**

A parallel machine model is called the multicomputer system. A multicomputer comprises a number of von Neumann computers, or nodes, linked by an interconnection network. Each computer executes its own program. This program may access local memory and may send and receive messages over the network. Messages are used to communicate with other computers or, equivalently, to read and write remote memories.

A shared-memory MIMD computer is called the multiprocessor computer. In multiprocessors, all processors share access to a common memory, typically via a bus or a hierarchy of buses and any processor can access any memory element in the same amount of time. Examples of this class of machine include the Silicon Graphics Challenge, Sequent Symmetry, and the many multiprocessor workstations.

MIMD (multiple instruction, multiple data) is a technique to achieve parallelism. Machines using MIMD have a number of processors that function asynchronously and independently. At any time, different processors may be executing different instructions on different pieces of data. MIMD machines can be of either shared memory or distributed memory categories. These classifications are based on how MIMD processors access memory. Shared memory machines may be of the bus-based. Distributed memory machines may have hypercube or mesh interconnection schemes. MIMD machines with shared memory have processors which share a common, central memory. In the simplest form, all processors are attached to a bus which connects them to memory. [MIMD machines] with shared memory may support over a thousand processors `[as printed]`.

---

**2. Why do we need parallel processing? What are different levels of parallel processing? Explain.** *[WBUT 2015]*

**Answer:**

In computers, parallel processing is the processing of program instructions by dividing them among multiple processors with the objective of running a program in less time. In the earliest computers, only one program ran at a time. A computation-intensive program that took one hour to run and a tape copying program that took one hour to run would take a total of two hours to run. An early form of parallel processing allowed the interleaved execution of both programs together. The computer would start an I/O operation, and while it was waiting for the operation to complete, it would execute the processor-intensive program. The total execution time for the two jobs would be a little over one hour.

**Levels of parallel processing:**

We can have parallel processing at four levels.

**i) Instruction Level:** Most processors have several execution units and can execute several instructions (usually machine level) at the same time. Good compilers can reorder instructions to maximize instruction throughput. Often the processor itself can do this. Modern processors even parallelize execution of micro-steps of instructions within the same level.

**ii) Loop Level:** Here, consecutive loop iterations are candidates for parallel execution. However, there can be data dependencies between subsequent iterations which may restrict parallel execution of instructions at loop level. There is a lot of scope for parallel execution at loop level.

**iii) Procedure Level:** Here parallelism is available in the form of parallel executable procedures. Here the design of the algorithm plays a major role. For example, each thread in Java can be spawned to run a function or method.

**iv) Program Level:** This is usually the responsibility of the operating system, which runs processes concurrently. Different programs are obviously independent of each other. So parallelism can be extracted by the operating system at this level.

---

**3. Write short notes on the following:**
**a) Array processor** *[WBUT 2005, 2007, 2010]*
**b) MMX Technology** *[WBUT 2005, 2006, 2007]*
**c) CM-2 machine** *[WBUT 2008]*
**d) Flynn's classification** *[WBUT 2011]*

**Answer:**

**a) Array processor:**

The SIMD-1 Array Processor consists of a Memory, an Array Control Unit (ACU) and the one-dimensional SIMD array of simple processing elements (PEs). The figures show a 4-processor array. The figures show the initial image seen when the model is loaded.

> **[diagram]** *Initial loaded image of the SIMD-1 Array Processor* — A **Memory** block at top; an **Array Control Unit** block showing registers PC (= main, 0), CC, AC-IR (NOP), and below it PE-IR (NOP) and PEC; a **Clock** indicator (fields 0 and 5); and a **SIMD Array** block showing four PE boxes in a row.

The system operates on a two phase clock. In clock cycles in which they are active, each unit executes its internal actions in the first phase of the clock and sends out a result packet in the second phase. The Memory, for example, reads an instruction or operand in the first phase and sends its output to the ACU in the second phase.

The ACU is a simple load/store, register-register arithmetic processor. It has 16 general purpose registers, a Program Counter (PC), a Condition code Register (CC) and an Instruction Register (AC-IR). The Program Counter has two fields: label and offset. The label field is initially set to "main" and the offset to zero. The ACU also uses two other registers, the Processing Element Instruction Register (PE-IR) and the Processing Element Control register (PEC) which are global registers used to communicate with the SIMD Array.

The Processing Elements operate in lock step, i.e. each active PE (determined by the state of its PEC bit) obeys the same instruction at the same time. Whenever a PE ACC is updated by a PE instruction, the PE sends the new ACC value to each of its neighbors.

When first loaded, the model contains a program which reverses the order of the values held in memory locations 0 and 2 of the Processing Elements (initially in locations 0 and 2 of each of their memories) and leaves the results in location 1 and 3 of each of their memories.

**b) MMX Technology:**

MMX technology is an extension to the Intel Architecture (IA) designed to improve performance of multimedia and communication algorithms. The Pentium Processor with MMX Technology is the first microprocessor to implement the new instruction set.

MMX consists of two main processor architectural improvements.

*Operation of MMX Technology*

The MMX technology consists of several improvements over the non-MMX Pentium microprocessors:

1. There are 57 new microprocessor instructions.
2. [The L1 cache was] increased to 32 KB, meaning fewer accesses to memory that is off the microprocessor. [The MMX processors have a larger] L1 cache than their non-MMX counterparts. This improves the performance of any software running on the chip, regardless of whether it actually uses the MMX-specific instructions or not. `[as printed]`

The Pentium processor with MMX implementation was the design of a new, dedicated high-performance MMX pipeline, which was able to execute two MMX instructions with minimal logic changes in the existing units. In addition, the design goal was to stay on the microprocessors' performance curve. With the addition of new instructions, the instruction decode logic had to be modified to decode, schedule and issue the new instructions at a rate of up to two instructions per clock.

*Frequency Speedup*

To simplify the design and to meet the core frequency goal, the pipeline of the Pentium processor w/MMX was extended with a new pipeline stage (length decode). [The choice] to maintain and improve the CPI (Clock per Instruction) of MMX technology is due to modifications that increase the Clock Rate.

As we know, Execution Time = (No. of instructions) $\times$ (CPI) $\times$ (Clock Cycle Time)

i.e. increasing the Clock Rate decreases the Clock Cycle Time, which in turn decreases the Execution Time. So, in order to increase Clock Rate, the MMX Pentium designers need to eliminate some bottlenecks. The two major bottlenecks were the instruction decoder and the data cache access. So they tried to fix the decoder bottleneck first. Here an instruction that uses old 5-stage pipe like Fetch, Decode1, Decode2, Execute, Write-Back.

To speed things up, a 6th stage was added to the pipe i.e. Prefetch. A queue was also added between Fetch and Decode1 to decouple freezes. So now an instruction looks like: Prefetch, Fetch, Decode1, Decode2, Execute, Write-Back as shown in the figure below. After adding this new stage, machine timing is rebalanced to take advantage of the extra clock cycle.

> **[diagram]** *Pipeline stages* — A six-stage pipeline shown left to right: **Prefetch → Fetch → D1 → D2 → Execute → Writeback**.

> **[diagram]** *Fig: Block diagram of the Pentium Processor with MMX technology* — Shows the Code cache (16K) and instruction length-decoder/FIFO feeding instruction decode and operand read, into Integer execution units (U-pipe / V-pipe); a Data cache (Dcache 16K) with TLB (f.assoc); a Bus unit and Page unit; plus CROM, shadow registers, RSB and the FPU/MMX registers. Legend indicates IPC and MMX paths. *(Several internal labels are partly illegible in source.)*

Although adding a pipeline stage improves frequency, it decreases CPI performance, i.e., the longer the pipeline, the more work done speculatively by the machine and therefore the more work being thrown away in the case of branch miss-prediction. The additional pipeline stage costs decreased the CPI performance of the processor by 5-6%.

**c) CM-2 machine:**

The CM-2 was SIMD architecture based machine. The PEs in the CM-2 was capable of performing bit-serial arithmetic. The control processor, or sequencer could decompose an 8-bit operation, for example, into 8 PE nano-instructions. The CM-2 provides the mechanism for the programmer to assign PEs to groups that will execute at different times. This functionality is achieved through the use of PE instruction masking. Although the PEs and the PE module floating point accelerator provide extensive processing capability, the programming paradigm was still limited to SIMD. The CM-2 [improved on] its predecessors through the use of systematic inclusion of communication circuits within the processing and routing network. `[as printed]`

The CM-2 is capable of achieving a peak processing speed in the [tens of] Gflops range `[as printed]`. The CM-2 machine provides the hypercube connections between different processing elements (PEs). The PEs were organized into modules each having 32 PEs. Within a given module, the PEs were organized into 16-PE sets with each set having its own router node. All the PEs within a given set use shared memory to communicate with one another by writing values into their respective local memories. Each router node represented a vertex in the hypercube. One interesting feature of the routers was that they provided special circuitry for message combining for messages with the same destination. In addition to the communication via local memories of PEs within a given module, the CM-2 also supports patterned communications directly across the wires of the hypercube.

> **[diagram]** *Fig: Block diagram of CM-2 machine* — From/to Front End Computer connects to a **Sequencer**, which drives a Scalar Memory bus, an Instruction Broadcast bus and a Combine line into the **Processors** array; a Global result bus returns from the processors; an **I/O Controller** connects via I/O Buses, and a Frame Buffer output is shown.

**d) Flynn's classification:**

Refer to Question No. 1 of Short Answer Type Questions.

---

*End of Chapter 4.*
