# CA — Chapter 1: Pipeline Architecture

> **Source:** *Computer Architecture* organizer (MAKAUT/WBUT solved papers, Popular Publications), book pages CA-2 to CA-16.
> **Fidelity note for downstream readers (incl. LLMs):**
> - The MCQ answer letters in the "Very Short Answer Type Questions" section are now **image-verified** against the source page scans. The Short Answer section prose remains OCR-based; any remaining `[OCR — unverified]` markers (formulas/prose) should still be double-checked against the source.
> - Where the OCR was too garbled to render faithfully, the passage is marked `[OCR unclear]` rather than guessed.
> - Math is rendered in LaTeX. Diagrams in the source are noted as `[diagram]`.

---

## Chapter at a Glance

### Review of Pipeline Architecture

Pipeline is an implementation technique whereby multiple instructions are overlapped in execution. Each step in the pipeline (called a pipe stage) completes a part of an instruction. Because all stages proceed at the same time, the length of a processor (clock) cycle is determined by the time required for the slowest pipe stage.

Designer's goal: balancing the length of each pipeline stage. If the stages are perfectly balanced, the time per instruction on the pipelined processor is:

$$\text{Time per instruction on pipelined machine} = \frac{\text{Time per instruction on un-pipelined machine}}{\text{Number of pipe stages}}$$

`[OCR — unverified]`

The speedup from pipelining is equal to the number of pipe stages.

### Ideal Pipeline Techniques

The ideal pipeline overlaps the stages (IF — Instruction Fetch, ID — Instruction Decode, EX — Execute, MEM — Memory access, WB — Write Back) across successive instructions:

```
            ----> Time
Instr 1   IF  ID  EX  MEM WB
Instr 2       IF  ID  EX  MEM WB
Instr 3           IF  ID  EX  MEM WB
Instr 4               IF  ID  EX  MEM WB
Instr 5                   IF  ID  EX  MEM WB
```

*Fig: Pipeline technique* `[diagram]`

### Speedup, Efficiency and Throughput of Pipeline

A linear pipeline of $k$ stages can process $n$ tasks in $k + (n-1)$ clock cycles, where $k$ cycles are needed to complete the execution of the very first task and the remaining $n-1$ tasks require $n-1$ cycles. Thus the total time required is

$$T_k = [\,k + (n-1)\,]\,t$$

where $t$ is the clock period.

### Pipeline Hazards

In a pipeline, each instruction is supposed to start executing at a given clock cycle. Unfortunately there are cases in which an instruction cannot execute at its allotted clock cycle. These situations are called **pipeline hazards**. Hazards further reduce the performance gain from the speedup.

- The hazard is a situation which prevents fetching the next instructions in the instruction stream from executing during their designated clock cycle.
- Hazards reduce the performance from the ideal speedup gained by pipelining.

Types of hazards:

- Data Hazards
- Structural Hazards
- Control Hazards

Hazards can make it necessary to stall the pipeline.
- When an instruction is stalled, all instructions issued later than the stalled instruction are also stalled.
- No new instructions are fetched during the stall.

**1. Pipeline stall**

When hazards occur, the typical approach is to stall the pipeline. Delaying an instruction in the pipeline to wait until another instruction completes execution is called **stalling**. When an instruction is stalled, all instructions issued after the stalled instruction are stalled. When an instruction is stalled, all instructions issued *before* the stalled instruction are allowed to continue. No new instruction is fetched during a stall.

**2. Pipeline bubble**

Pipeline Bubble (a technique also known as a pipeline break or pipeline stall) is a method for preventing data, structural, and branch hazards from occurring. As instructions are fetched, control logic determines whether a hazard will occur. If this is true, then the control logic inserts NOPs into the pipeline. Thus, before the next instruction (which would cause the hazard) is executed, the previous one will have had sufficient time to complete and prevent the hazard. If the number of NOPs is equal to the number of stages in the pipeline, the processor has been cleared of all instructions and can proceed free from hazards. This is called **flushing the pipeline**. All forms of stalling introduce a delay before the processor can resume execution.

### Data Hazards

A hazard is created whenever there is dependence between instructions, and they are close enough that the overlap caused by pipelining, or other reordering of instructions, would change the order of access to the operand involved in the dependence. There are three types of data hazards:

- **Read After Write (RAW) hazards:** RAW data hazard is the most common type. It appears when the next instruction tries to read from a source before the previous instruction writes to it. So, the next instruction gets the incorrect old value, such as when an operand is modified and read soon after. Because the first instruction may not have finished writing to the operand, the second instruction may use incorrect data.
- **Write After Read (WAR) hazards:** WAR hazard appears when the next instruction writes to a destination before the previous instruction reads it. In this case, the previous instruction gets a new value incorrectly, such as when an operand is read and a write to that same operand occurs soon after. Because the write may have finished before the read, the read instruction may incorrectly get the new written value.
- **Write After Write (WAW) hazards:** WAW data hazard is a situation when the next instruction tries to write to a destination before a previous instruction writes to it, resulting in changes done in the wrong order. Two instructions that write to the same operand are performed; the first one issued may finish second, and therefore leave the operand with an incorrect data value. So the results of WAW hazards are: (i) Pipeline Latency and (ii) Instruction effects not completed before next operation begins.

### Structural Hazards

A structural hazard occurs when a part of the processor's hardware is needed by two or more instructions at the same time. A structural hazard might occur, for instance, if a program were to execute a branch instruction followed by a computation instruction.

### Control Hazards

[OCR unclear — the Chapter-at-a-Glance text under this heading is not present in the source OCR; control hazards are described in the Short Answer section below.]

---

## Very Short Answer Type Questions

**1.** The number of cycles required to complete $n$ tasks in a $k$-stage pipeline is — *[WBUT 2007, 2016, 2017]*
a) $k + n - 1$   b) $n \cdot k^2$   c) [OCR unclear]   d) none of these
**Answer: (a)**

**2.** Which of these are examples of 2-dimensional topologies in static networks? — *[WBUT 2007, 2010]*
a) Mesh   b) 3CCC networks   c) Linear array   d) none of these
**Answer: (a)**

**3.** The seek time of a disk is 30 ms. It rotates at the rate of 30 rotations/second. The capacity of each track is 300 words. The access time is approximately —
a) 62 ms   b) 60 ms   c) [OCR unclear]   d) 47 ms
**Answer: (d)**

**4.** For two instructions $I$ and $J$, WAR hazard occurs if — *[WBUT 2007, 2010, 2014]*
a) $R(I) \cap D(J) \ne \varnothing$   b) $R(I) \cap R(J) \ne \varnothing$   c) $D(I) \cap R(J) \ne \varnothing$   d) none of these
**Answer: (c)**

**5.** The performance of a pipelined processor suffers if — *[WBUT 2008, 2009, 2011, 2013]*
a) the pipeline stages have different delays
b) consecutive instructions are dependent on each other
c) the pipeline stages share hardware resources
d) all of these
**Answer: (d)**

**6.** What will be the speedup for a four-stage linear pipeline, when the number of instructions $n = 64$? — *[WBUT 2008, 2009]*
a) 4.5   b) 7.1   c) 6.5   d) None of these
**Answer: (d)**

**7.** Dynamic pipeline allows — *[WBUT 2008, 2009, 2011, 2014, 2016, 2017]*
a) multiple functions to evaluate   b) only streamline connection   c) to perform fixed function   d) none of these
**Answer: (a)**

**8.** The division of stages of a pipeline into sub-stages is the basis for — *[WBUT 2009, 2014]*
a) pipelining   b) super-pipelining   c) superscalar   d) VLIW processor
**Answer: (a)**

**9.** A pipeline stage — *[WBUT 2012, 2014, 2018, 2019]*
a) is a sequential circuit   b) is a combinational circuit   c) consists of both sequential and combinational circuits   d) none of these
**Answer: (c)**

**10.** Utilization pattern of successive stages of a synchronous pipeline can be specified by — *[WBUT 2012, 2015, 2017, 2018, 2019]*
a) Truth table   b) Excitation table   c) Reservation table   d) Periodic table
**Answer: (c)**

**11.** SPARC stands for — *[WBUT 2012, 2018]*
a) Scalable Processor Architecture
b) Superscalar Processor A RISC Computer
c) Scalable Processor A RISC Computer
d) Scalable Pipeline Architecture
**Answer: (a)**

**12.** Portability is definitely an issue for which of the following architectures? — *[WBUT 2012, 2018]*
a) VLIW processor   b) Super Scalar processor   c) Super pipelined   d) none of these
**Answer: (b)**

**13.** Which of the following is not the cause of possible data hazard? — *[WBUT 2012, 2018, 2019]*
a) RAR   b) RAW   c) WAR   d) WAW
**Answer: (a)**

**14.** What will be the speedup for a 4-segment linear pipeline when the number of instructions $n = 64$? — *[WBUT 2013, 2014, 2019]*
a) 4.5   b) 3.82   c) 8.16   d) 2.95
**Answer: (b)**

**15.** Which type of data hazard is not possible? — *[WBUT 2013]*
a) WAR   b) RAW   c) RAR   d) WAW
**Answer: (c)**

**16.** MIPS means — *[WBUT 2013]*
a) Multiple Instruction Per Second
b) Millions of Instruction Per Second
c) Multi-Instruction Performed System
d) none of these
**Answer: (b)**

**17.** The prefetching technique is a solution for — *[WBUT 2014, 2016]*
a) [OCR unclear]   b) structural hazard   c) control hazard   d) enhancing the speed of pipeline
**Answer: (c)**

**18.** Suppose the time delays of the four stages of a pipeline are $t_1 = 60$ ns, $t_2 = 50$ ns, $t_3 = 90$ ns, $t_4 = 80$ ns respectively and the interface latch has delay $t_l = 10$ ns, then the maximum clock frequency for the pipeline is — *[WBUT 2016]*
a) 100 ns   b) 90 ns   c) 190 ns   d) none of these
**Answer: (b)**

> *[OCR unclear — the stage delays in this question (t1 = 10 ns vs. t1 = 60 ns) are inconsistently OCR'd in the source; the values above are the best reconstruction.]*

**19.** Pipelining uses — *[WBUT 2016]*
a) data parallelism   b) temporal parallelism   c) spatial parallelism   d) none of these
**Answer: (a)**

**20.** An $n$-dimensional hypercube has — *[WBUT 2017]*
a) $n^n$ nodes   b) [OCR unclear] nodes   c) $2^n$ nodes   d) none of these
**Answer: (c)**

**21.** The throughput of a superscalar processor is — *[WBUT 2019]*
a) less than 1   b) 1   c) more than 1   d) not known
**Answer: (c)**

**22.** __________ is a technique for increasing instruction-level parallelism by simultaneously executing multiple instructions. — *[WBUT 2023]*
**Answer: Pipeline**

---

## Short Answer Type Questions

**1. What is pipeline chaining?** *[WBUT 2005, 2010, 2013]*

Pipeline chaining is a linking process that occurs when results obtained from one pipeline unit are directly fed into the operand registers of another functional pipe. In other words, intermediate results do not have to be restored into memory and can be used even before the vector operation is completed. Chaining permits successive operations to be issued as soon as the first result becomes available as an operand. The desired functional pipes and operand registers must be properly reserved; otherwise, chaining operations have to be suspended until the demanded resources become available.

**2. Define Speed-up. Deduce that the maximum speed-up in a $k$-stage pipeline processor is $k$. Is this maximum speed-up always achievable? Explain.** *[WBUT 2006]*

*OR,* If there are no stalls (waits) then prove that the speedup is equal to the pipeline depth, i.e., the number of pipeline stages. *[WBUT 2016]*

*OR,* Show that the maximum speedup of a pipeline is equal to its number of stages. *[WBUT 2016]*

Suppose we consider that:
- $k$ = no. of stages in the pipeline
- $n$ = no. of processes to be executed
- $t$ = time delay for each stage of the pipeline
- $S$ = the speed-up

then,

$$S = \frac{\text{Time required for non-pipeline process}}{\text{Time required for pipeline process}} = \frac{n \cdot k \cdot t}{(k + (n-1))\,t} = \frac{n \cdot k}{k + (n-1)}$$

`[OCR — unverified]`

Maximum speed-up is $S_{\max} \to k$ when $n \gg k$.

The maximum speed-up is never fully achievable because of dependencies between instructions, interrupts, program branches, etc. So, many pipeline cycles may be wasted in a waiting state caused by out-of-sequence instruction executions.

**3. What are the different parameters used in measuring CPU performance? Briefly discuss each.** *[WBUT 2008, 2015]*

To estimate the CPU performance, the measure that is generally most important is execution time, $T$, because we can write

$$\text{Performance} = \frac{1}{\text{Execution time}}$$

So, if the execution time increases the CPU performance decreases. There are three parameters to measure the performance of the CPU, i.e. **speedup, efficiency and throughput**.

When considering the impact of some performance improvement, the effect of the improvement is usually expressed in terms of the speedup, $S$, taken as the ratio of the execution time without the improvement ($T_{wo}$) to the execution time with the improvement ($T_w$):

$$S = T_{wo} / T_w$$

Speed-up as a direct percent can be represented as:

$$S = \left(\frac{T_{wo} - T_w}{T_w}\right) \times 100$$

`[OCR — unverified]`

**Efficiency**, $E$, is the ratio of speed-up to the number of processors used. So,

$$E = S / p$$

where $S$ is the speed-up and $p$ is the number of processors.

**Throughput** is the measure of number of computations over a unit time.

**4. What are the different pipeline hazards and what are the remedies?** *[WBUT 2009]*

*OR,* Discuss data hazards briefly. *[WBUT 2015]*

*OR,* What do you mean by hazards in pipeline? Describe the different types of hazards. *[WBUT 2018]*

*OR,* How are data hazards detected and prevented? *[WBUT 2019]*

With pipelining, each instruction is supposed to start executing at a given clock cycle. Unfortunately there are cases in which an instruction cannot execute at its allotted clock cycle. These situations are called pipeline hazards. Hazards further reduce the performance gain from the speedup.

- The hazard is a situation which prevents fetching the next instructions in the instruction stream from executing during their designated clock cycle.
- Hazards reduce the performance from the ideal speedup gained by pipelining.

Types:
- Data Hazards
- Structural Hazards
- Control Hazards

Hazards can make it necessary to stall the pipeline.
- When an instruction is stalled, all instructions issued later than the stalled instruction are also stalled.
- No new instructions are fetched during the stall.

**Data Hazard**

Data hazards may be classified as one of three types, depending on the order of read and write accesses in the instructions. By convention, the hazards are named by the ordering in the program that must be preserved by the pipeline. There are three types of data hazards:

- **Read After Write (RAW) hazards:** RAW data hazard is the most common type. It appears when the next instruction tries to read from a source before the previous instruction writes to it. So, the next instruction gets the incorrect old value, such as when an operand is modified and read soon after. Because the first instruction may not have finished writing to the operand, the second instruction may use incorrect data.
- **Write After Read (WAR) hazards:** WAR hazard appears when the next instruction writes to a destination before the previous instruction reads it. In this case, the previous instruction gets a new value incorrectly, such as when an operand is read and a write to that same operand occurs soon after. Because the write may have finished before the read, the read instruction may incorrectly get the new written value.
- **Write After Write (WAW) hazards:** WAW data hazard is a situation when the next instruction tries to write to a destination before a previous instruction writes to it, resulting in changes done in the wrong order. Two instructions that write to the same operand are performed; the first one issued may finish second, and therefore leave the operand with an incorrect data value. So the results of WAW hazards are: Pipeline Latency; and Instruction effects not completed before next operation begins.

**Structural Hazards**

A structural hazard occurs when a part of the processor's hardware is needed by two or more instructions at the same time. A structural hazard might occur, for instance, if a program were to execute a branch instruction followed by a computation instruction. Because they are executed in parallel, and because branching is typically slow (requiring a comparison, program counter-related computation, and writing to registers), it is quite possible that the computation instruction and the branch instruction will both require the ALU at the same time. Hardware cannot support the combination of instructions that we want to execute in the same clock cycle.

**Control Hazards**

Control hazards occur when the processor is told to branch — i.e., if a certain condition is true, then jump from one part of the instruction stream to another — not necessarily to the next instruction sequentially. In such a case, the processor cannot tell in advance whether it should process the next instruction (when it may instead have to move to a distant instruction). To minimize the branch penalty, put in enough hardware so that we can test registers, calculate the branch target address, and update the PC during the second stage.

**5. What are instruction pipeline and arithmetic pipeline?** *[WBUT 2009]*

An **instruction pipeline** is a technique used in the design of computer systems to increase their instruction throughput. The fundamental idea is to split the processing of a computer instruction into a series of independent steps, with storage at the end of each step. The principles used in instruction pipelining can be used in order to improve the performance of computers in performing arithmetic operations such as add, subtract, and multiply.

In a program there are several instructions. There are five steps to execute an instruction:
1. Fetch
2. Decode
3. Operand fetch
4. Execute
5. Write back

| IF | ID | OF | IE | WB |
|----|----|----|----|----|
| Instruction fetch | Instruction decode | Operand fetch | Instruction execution | Result write back |

*Fig: Instruction pipeline stages* `[diagram]`

The streams of instructions are executed in the pipeline in an overlapped manner:

```
Clock cycle  1   2   3   4   5   6   7   8
Instr 1     IF  ID  OF  IE  WB
Instr 2         IF  ID  OF  IE  WB
Instr 3             IF  ID  OF  IE  WB
Instr 4                 IF  ID  OF  IE  WB
```

*Figure: Floating-point add pipeline stages* `[diagram]`

The arithmetic (floating-point add) pipeline stages are:

1. **Unpack:** The unpack stage partitions the floating-point numbers into the three fields: the sign field, exponent field and mantissa field. Special cases such as not-a-number (NaN), zero and infinities are detected during this stage.
2. **Align:** This stage aligns the binary points of the two mantissas by right-shifting the mantissa with the smaller exponent.
3. **Add:** This stage adds the two aligned mantissas.
4. **Normalize:** This stage packs the three fields of the result after normalization and rounding into the IEEE-754 floating-point format. Any output exceptions are detected during this stage.

**6. "Instruction execution throughput increases in proportion with the number of pipeline stages." Is it true? Justify your statement.** *[WBUT 2012, 2015, 2017]*

Pipelining refers to the technique in which a given task is divided into a number of subtasks that need to be performed in sequence. Each subtask is performed by a given functional unit. The units are connected in a serial fashion and all of them operate simultaneously. The use of pipelining improves the performance compared to the traditional sequential execution of tasks. Consider the execution of $m$ tasks (instructions) using an $n$-stage (units) pipeline. We assume that the unit time $\tau = t$ units. Then the throughput $U(n)$ is:

$$U(n) = \frac{m}{(n + m - 1) \times t}$$

`[OCR — unverified]`

i.e. the no. of tasks executed per unit time. So, from the above equation, if we increase the number of stages in a pipeline it also increases the throughput of the pipeline.

**7. For the code segment given below, explain how delayed branching can help:** *[WBUT 2013]*

```
I1  LOAD    R1, A
I2  Dec     R3, 1
I3  BrZero  R3, I5
I4  Add     R2, R4
I5  Sub     R5, R6
I6  Store   R5, B
```

Instruction I2 performs "Dec R3, 1" and I3 performs "BrZero R3, I5". So, both I2 and I3 modify the register R3 at the same time. So, delayed branch actually first modifies the value of R3 by "Dec R3, 1", then updates the value of R3 by "BrZero R3, I5".

> *[OCR unclear — the explanation in the source is partially garbled; the reconstruction above preserves the legible logic.]*

**8. For the following code show how loop unrolling can help improve instruction-level parallelism (ILP) performance:** *[WBUT 2013]*

```
Loop:
I1: Load  R0, A(R1)   ; A is the starting address of array location
                      ; R1 holds the initial address of the element
I2: Add   R0, R2      ; R0 <- R0 + R2, R2 is a scalar
I3: Store R0, A(R1)
I4: Add   R1, -8      ; go to next word in array of doubles
                      ; whose address is 8 bytes earlier
I5: BNE   R1, Loop
```

Pipelining can overlap the execution of instructions when they are independent of one another. This potential overlap among instructions is called **instruction-level parallelism (ILP)** since the instructions can be evaluated in parallel. The simplest and most common way to increase the amount of parallelism available among instructions is to exploit parallelism among iterations of a loop. A loop is parallel unless there is a cycle in the dependencies, since the absence of a cycle means that the dependencies give a partial ordering on the statements. Statement I1 uses the value assigned in the previous iteration by statement I2, so there is a loop-carried dependency between I1 and I2. Despite this dependency, this loop can be made parallel because the dependency is not circular.

**9. Compare between Control-Flow, Data-Flow and Demand-Driven mechanism.** *[WBUT 2013]*

The **Control-Flow Architecture** is a Von Neumann or control-flow computing model. Here a program is a series of addressable instructions, each of which either specifies an operation along with memory locations of the operands or it specifies a conditional transfer of control to some other instruction. The next instruction to be executed depends on what happened during the execution of the current instruction. The next instruction to be executed is pointed to and triggered by the PC. The instruction is executed even if some of its operands are not available yet.

But in the **Dataflow model**, the execution is driven only by the availability of operands. There is no Program Counter and global updateable store. The two features of the von Neumann model that become bottlenecks in exploiting parallelism are missing in Data Flow Architecture.

*Fig: A static Data Flow Computer* `[diagram]`

> *[OCR unclear — the source provides text only for Control-Flow and Data-Flow; the Demand-Driven mechanism portion of the comparison is not legible in the OCR.]*

**10. Draw the pipeline execution diagram during the execution of the following instructions. Find out the delay in pipeline execution due to data dependency of the above instructions.** *[WBUT 2016]*

```
MUL R1, R2, R3
ADD R2, R3, R4
INC R4
SUB R6, R3, R7
```

We have considered that the above pipeline technique is a five-stage pipeline. The stages are Fetch, Decode, Read, Execution and Write back. In the figure, we also show in which clock pulse what operation is performed.

The operations of the instructions are:
- $R1 \leftarrow R2 \cdot R3$
- $R2 \leftarrow R3 + R4$
- $R4 \leftarrow R4 + 1$
- $R6 \leftarrow R3 + R7$

So, from the above instructions, we can say that no data hazard will occur in the pipeline. The instructions are not dependent on each other. So, normal pipeline execution will occur.

| Stage / Clock | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Fetch | MUL R1,R2,R3 | ADD R2,R3,R4 | INC R4 | SUB R6,R3,R7 | |
| Decode | | MUL R1,R2,R3 | ADD R2,R3,R4 | INC R4 | SUB R6,R3,R7 |
| Read | | | MUL R1,R2,R3 | ADD R2,R3,R4 | INC R4 / SUB R6,R3,R7 |
| Execution | | | | MUL R1,R2,R3 | ADD R2,R3,R4 |
| Write back | | | | | MUL R1,R2,R3 |

> *[OCR unclear — the pipeline diagram is hand-drawn; the table above reconstructs the stage/clock layout from a partially garbled scan and should be verified against the source.]* `[diagram]`

**11. How does a "Reservation Table" help to study the performance of a pipeline?** *[WBUT 2016]*

There are two types of pipelines: static and dynamic. A static pipeline can perform only one function at a time, whereas a dynamic pipeline can perform more than one function at a time. A pipeline reservation table shows when stages of a pipeline are in use for a particular function. Each stage of the pipeline is represented by a row in the reservation table. Each row of the reservation table is in turn broken into columns, one per clock cycle. The number of columns indicates the total number of time units required for the pipeline to perform a particular function. To indicate that some stage $S$ is in use at some time $t$, an X is placed at the intersection of the row and column of the table corresponding to that stage and time.

A reservation table for a static pipeline with three stages is used as an example. When scheduling a static pipeline, only collisions with different input data for a particular function had to be avoided. With a dynamic pipeline, it is possible for different input data requiring different functions to be present in the pipeline at the same time. Therefore, collisions between these data must be considered. As with the static pipeline, dynamic pipeline scheduling begins with the compilation of a set of forbidden lists from function reservation tables. Next the collision vectors are obtained, and finally the state diagram is drawn.

**12. Consider the execution of a program of 15000 instructions by a linear pipeline processor. The clock rate of the pipeline is 25 MHz. The pipeline has five stages and one instruction is issued per clock cycle. Neglect penalties due to branch instructions and out-of-sequence execution.** *[WBUT 2016]*

**(i) Calculate the speedup of the program execution by pipeline as compared with that by a non-pipelined processor.**
**(ii) What are the efficiency and throughput of the pipeline processor?**

Information given:
- $n = 15{,}000$ instructions (tasks)
- $f = 25$ MHz
- $k = 5$ stages
- Issued per processor = 1

(i) The speedup:

$$S_k = \frac{n \cdot k \cdot \tau}{k + (n-1)\,\tau} = \frac{n \cdot k}{k + (n-1)} = \frac{(15{,}000)(5)}{5 + (15{,}000-1)} = \frac{75{,}000}{15{,}004} = 4.999$$

`[OCR — unverified]`

(ii) Efficiency:

$$E_k = \frac{S_k}{k} = \frac{4.999}{5} = 0.999$$

`[OCR — unverified]`

Throughput:

$$T = \frac{n \cdot f}{k + (n-1)} = \frac{(15{,}000)(25)}{5 + (15{,}000-1)} = \frac{375{,}000}{15{,}004} = 24.99 \text{ MIPS}$$

`[OCR — unverified]`

**13. Write down Amdahl's law of parallel processing.** *[WBUT 2017]*

Refer to Question No. 21(b) of Long Answer Type Questions.

**14. Differentiate between 3-address, 2-address, 1-address and 0-address instructions with a suitable package of instructions.** *[WBUT 2019]*

To illustrate the influence of the number of addresses on computer programs, we will evaluate the arithmetic statement $X = (A + B) \cdot (C + D)$. We will use the symbols ADD, SUB, MUL, and DIV for the four arithmetic operations; MOV for the transfer-type operation; and LOAD and STORE for transfers to and from memory and the AC register. We assume that the operands are in memory addresses A, B, C, and D, and the result must be stored in memory at address X.

**Three-Address Instructions:** Computers with three-address instruction formats can use each address field to specify either a processor register or a memory operand. The program in assembly language that evaluates $X = (A + B) \cdot (C + D)$ is shown below, together with comments that explain the register transfer operation of each instruction.

```
ADD R1, A, B    ; R1 <- M[A] + M[B]
ADD R2, C, D    ; R2 <- M[C] + M[D]
MUL X, R1, R2   ; M[X] <- R1 * R2
```

It is assumed that the computer has two processor registers, R1 and R2. The symbol M[A] denotes the operand at the memory address symbolized by A.

**Two-Address Instructions:** Two-address instructions are the most common in commercial computers. Here again each address field can specify either a processor register or a memory word. The program to evaluate $X = (A + B) \cdot (C + D)$ is as follows:

```
MOV R1, A    ; R1 <- M[A]
ADD R1, B    ; R1 <- R1 + M[B]
MOV R2, C    ; R2 <- M[C]
ADD R2, D    ; R2 <- R2 + M[D]
MUL R1, R2   ; R1 <- R1 * R2
MOV X, R1    ; M[X] <- R1
```

The MOV instruction moves or transfers the operands to and from memory and processor registers.

**One-Address Instructions:** One-address instructions use an implied accumulator (AC) register for all data manipulation. For multiplication and division there is a need for a second register. However, here we will neglect the second register and assume that the AC contains the result of all operations. The program to evaluate $X = (A + B) \cdot (C + D)$ is:

```
LOAD  A    ; AC <- M[A]
ADD   B    ; AC <- AC + M[B]
STORE T    ; M[T] <- AC
LOAD  C    ; AC <- M[C]
ADD   D    ; AC <- AC + M[D]
MUL   T    ; AC <- AC * M[T]
STORE X    ; M[X] <- AC
```

All operations are done between the AC register and a memory operand. T is the address of a temporary memory location required for storing the intermediate result.

**Zero-Address Instructions:** A stack-organized computer does not use an address field for the instructions ADD and MUL. The PUSH and POP instructions, however, need an address field to specify the operand that communicates with the stack. The following program shows how $X = (A + B) \cdot (C + D)$ will be written for a stack-organized computer (TOS stands for top of stack):

```
PUSH A    ; TOS <- A
PUSH B    ; TOS <- B
ADD       ; TOS <- (A + B)
PUSH C    ; TOS <- C
PUSH D    ; TOS <- D
ADD       ; TOS <- (C + D)
MUL       ; TOS <- (C + D) * (A + B)
POP  X    ; M[X] <- TOS
```

To evaluate arithmetic expressions in a stack computer, it is necessary to convert the expression into reverse Polish notation. The name "zero-address" is given to this type of computer because of the absence of an address field in the computational instructions.

**15. [Question text partially missing in OCR] Explain the hardwired control unit and the micro-programmed control unit.** *[WBUT 2019]*

**1st Part:** Instructions are processed under the direction of the control unit in a step-by-step manner. There are four fundamental steps in the instruction cycle:

1. **Fetch the instruction:** The next instruction is fetched from the memory address currently stored in the program counter (PC). At the end of the fetch operation, the PC points to the next instruction that will be read at the next cycle.
2. **Decode the instruction:** The decoder interprets the instruction. During this cycle the instruction inside the IR (instruction register) gets decoded.
3. **Execute:** The Control Unit of the CPU passes the decoded information as a sequence of control signals to the relevant functional units of the CPU to perform the actions required.
4. **[Store / write-back]:** [OCR unclear] the result may be sent to an output device. Based on the condition of any feedback from the ALU, the program counter may be updated to a different address from which the next instruction will be fetched.

**2nd Part:** To execute an instruction, there are two types of control units: Hardwired Control unit and Micro-programmed control unit.

1. Hardwired control units are generally faster than micro-programmed control units. [OCR unclear — in hardwired control, the control signals required inside the CPU are generated by logic circuits.]
2. Hardwired control unit generates the control signals needed for the processor using logic circuits. Micro-programmed control unit generates the control signals with the help of micro-instructions stored in control memory.
3. Hardwired control unit is faster compared to micro-programmed control unit, as the required control signals are generated with the help of hardware.
4. It is difficult to modify the hardwired control unit, as the control signals that need to be generated are hardwired. But in micro-program, it is easy to modify, as the modification needs to be done only at the instruction level.
5. Hardwired control is more costly, as everything has to be realized in terms of logic gates; micro-programmed control is less costly, as only micro-instructions are used for generating control signals.
6. The hardwired control cannot handle complex instructions, as the circuit design for it becomes complex.
7. In a hardwired control unit only a limited number of instructions can be used due to the hardware implementation. The control signals for many instructions can be generated in a micro-programmed control unit.

---

*End of Part 1 (Chapter at a Glance, Very Short Answer, and Short Answer sections). Long Answer Type Questions begin on book page CA-17 and are not included here.*


## Long Answer Type Questions

**1. What is a pipeline? Consider the following reservation table:**

|      | 1 | 2 | 3 | 4 |
|------|---|---|---|---|
| S1   | X |   |   | X |
| S2   |   | X |   |   |
| S3   |   |   | X |   |

**Write down the forbidden latencies and initial collision vector. Draw the state diagram for scheduling the pipeline. Find out the simple and greedy cycle and MAL. If the pipeline clock rate is 25 MHz, then what is the throughput of the pipeline? What are the bounds on MAL?** *[WBUT 2007, 2011]*

**1st Part:**

Pipelining is a technique of splitting a sequential process into sub-operations, with each sub-operation being executed in a dedicated segment that operates concurrently with all other segments. An instruction pipeline is a technique used in the design of computers to increase their instruction throughput (the number of instructions that can be executed in a unit of time). Pipelining assumes that with a single-instruction (SIMD) concept, successive instructions in a program sequence will overlap in execution.

A non-pipeline architecture is inefficient because some CPU components are idle while another module is active during the instruction cycle. Pipelining does not completely cancel out idle time in a CPU, but making those modules work in parallel improves program execution significantly.

Processors with pipelining are organized inside into stages which can semi-independently work on separate jobs. Each stage is organized and linked into a 'chain' so each stage's output is fed as input to another stage until the job is done. This organization of the processor allows overall processing time to be significantly reduced.

Unfortunately, not all instructions are independent. In a simple pipeline, completing an instruction may require 5 stages. To operate at full performance, this pipeline will need to run 4 subsequent independent instructions while the first is completing. If 4 instructions that do not depend on the output of the first instruction are not available, the pipeline control logic must insert a stall (wasted clock cycle) into the pipeline until the dependency is resolved. Fortunately, techniques such as forwarding can significantly reduce the cases where stalling is required. While pipelining can in theory increase performance over an unpipelined core by a factor of the number of stages (assuming the clock frequency also scales with the number of stages), in reality most code does not allow for ideal execution.

**2nd Part:**

Forbidden latencies are the latencies that cause a collision. Here the forbidden latency is **3** (stage S1 is used in cycles 1 and 4, a distance of 3).

The initial collision vector is **100**.

The state diagram is drawn for scheduling the pipeline. [diagram — state-transition diagram with the initial state $100$ and transitions on the permissible latencies]

- **Simple cycles:** (2), (4), (1,4), (1,1,4) and (2,4)
- **Greedy cycle:** (2)
- **MAL** $= 2$
- **Throughput** $= 25$ MIPS
- **Upper bound** $= 2$
- **Lower bound** $= 2$

---

**2. a) What do you mean by "Data flow Computer"?**
**b) With a simple diagram, explain Data flow architecture and compare it with control flow architecture.**
**c) Draw data flow graphs to represent the following computations:**
- **i) $X = A + B$**
- **ii) $Y = X / B$**
- **iii) $Z = A * X$**
- **iv) $M = Z - Y$**
- **v) $N = Z * X$**
- **vi) $P = M / N$**

*[WBUT 2008, 2014]*

**Answer:**

**a)** A data flow computer is a large, very powerful computer that has a number of processors all physically working together, with a large amount of memory and backing storage. Such computers are highly parallel in that they can carry out a large number of tasks at the same time. Data flow computers are used to execute processor-intensive applications such as those associated with areas like molecular biology and simulation. Numerical calculations for the simulation of natural phenomena were conducted using a data-flow-type parallel processing computer. The computing time in the data-flow computer was approximately three to five times shorter than that of the usual medium-size computer of computing speed 3 MIPS (million instructions per second). Dynamic visualization of the computing process was realized using an image display directly connected to the memory of the data-flow computer.

**b)** Refer to Question No. 18 of Short Answer Type Questions.

**c)** The data flow graph for the above computation is drawn by representing each operator as a node and feeding the operands along directed arcs. [diagram — data flow graph: $A,B \to (+) \to X$; $X,B \to (/) \to Y$; $A,X \to (*) \to Z$; $Z,Y \to (-) \to M$; $Z,X \to (*) \to N$; $M,N \to (/) \to P$]

---

**3. Consider a four-stage pipelined processor specified by the following diagram:**

`Input → ⊗ → S1 → ⊗ → S2 → S3 → S4 → Output` (with feedback paths) [diagram]

**The pipeline has a total evaluation time of six clock cycles. All successor stages must be used after each clock cycle.**
- **i) Specify the reservation table for the above pipelined processor with six columns and four rows.**
- **ii) What are the forbidden latencies and the initial collision vector? Draw the state transition diagram.**
- **iii) Determine all simple cycles, greedy cycle and MAL.**
- **iv) Determine the throughput of this pipelined processor. Given clock period as 20 ns.**

*[WBUT 2010]*

**Answer:**

**i)**

|      | 1 | 2 | 3 | 4 | 5 | 6 |
|------|---|---|---|---|---|---|
| S1   | X |   |   |   | X |   |
| S2   |   | X |   |   |   | X |
| S3   |   |   | X |   |   |   |
| S4   |   |   |   | X |   |   |

**ii)** The forbidden latencies are $(0, 4)$.
The pipeline collision vector is $(100010)$.

- **State 1: $100010$**
  - Reaches State 2 ($100110$) after 1 cycle.
  - Reaches State 3 ($101010$) after 2 cycles.
  - Reaches State 4 ($110010$) after 3 cycles.
  - Reaches State 1 ($100010$) after 5 cycles.
  - Reaches State 1 ($100010$) after 6 or more cycles.
- **State 2: $100110$**
  - Reaches State 5 ($101110$) after 1 cycle.
  - Reaches State 6 ($111010$) after 2 cycles.
  - Reaches State 1 ($100010$) after 5 cycles.
  - Reaches State 1 ($100010$) after 6 or more cycles.
- **State 3: $101010$**
  - Reaches State 7 ($110110$) after 1 cycle.
  - Reaches State 4 ($110010$) after 3 cycles.
  - Reaches State 1 ($100010$) after 5 cycles.
  - Reaches State 1 ($100010$) after 6 or more cycles.
- **State 4: $110010$**
  - Reaches State 3 ($101010$) after 2 cycles.
  - Reaches State 4 ($110010$) after 3 cycles.
  - Reaches State 1 ($100010$) after 5 cycles.
  - Reaches State 1 ($100010$) after 6 or more cycles.
- **State 5: $101110$**
  - Reaches State 8 ($111110$) after 1 cycle.
  - Reaches State 1 ($100010$) after 5 cycles.
  - Reaches State 1 ($100010$) after 6 or more cycles.
- **State 6: $111010$**
  - Reaches State 4 ($110010$) after 3 cycles.
  - Reaches State 1 ($100010$) after 5 cycles.
  - Reaches State 1 ($100010$) after 6 or more cycles.
- **State 7: $110110$**
  - Reaches State 6 ($111010$) after 2 cycles.
  - Reaches State 1 ($100010$) after 5 cycles.
  - Reaches State 1 ($100010$) after 6 or more cycles.
- **State 8: $111110$**
  - Reaches State 1 ($100010$) after 5 cycles.
  - Reaches State 1 ($100010$) after 6 or more cycles.

**iii)** Greedy cycle: $(1, 1, 1, 5)$; MAL $= 2$.

**iv)** The throughput of this pipelined processor $= (1/20) \times (1/2) = 0.025$ instructions per cycle.

---

**4. a) What do you mean by MMX? Differentiate a data flow computer from a control flow computer.**
**b) List some potential problems with data flow computer implementation.**
**c) With a simple diagram explain data flow architecture.**
**d) Draw data flow graphs to represent the following computations:**
- **i) $P = X + Y$**
- **ii) $Q = P + Y$**
- **iii) $R = X * P$**
- **iv) $S = R - Q$**
- **v) $T = R * P$**
- **vi) $U = S \div T$**

*[WBUT 2011, 2013, 2014]*

**Answer:**

**a)** MMX technology is an extension to the Intel Architecture (IA) designed to improve the performance of multimedia and communication algorithms. The Pentium processor with MMX Technology is the first microprocessor to implement the new instruction set. All MMX chips have a larger internal L1 cache than their non-MMX counterparts. The Pentium processor with MMX implementation was the design of a new, dedicated, high-performance MMX pipeline, which was able to execute two MMX instructions with minimal logic changes in the existing units. Although adding a pipeline stage improves frequency, it decreases CPI performance, i.e., the longer the pipeline, the more work done speculatively by the machine and therefore more work is thrown away in the case of branch mis-prediction.

The control flow computers are either uniprocessor or parallel-processor architectures. In a uniprocessor system the instructions are executed sequentially, and this is called a control-driven mechanism. In a parallel-processor system, control flow computers use shared memory. So, parallel-executed instructions may cause side effects on other instructions and data due to shared memory. In a control flow computer, the sequence of execution of instructions is controlled by the program counter register.

The data flow computers are based on a data-driven mechanism. The fundamental difference is that instruction execution in a conventional computer is under program-flow control, whereas in a data flow computer it is driven by the data (operand) availability.

**b)** The data-driven mechanism does not require any shared memory, program counter, or control sequencer. It just checks data availability of needy instructions and enables the chain reaction of asynchronous instruction execution.

**c)** Suppose there are some instructions given below. Now we execute these instructions on a data flow machine.

```
Input: a, b, c
k0 = 0
for i = 1 to 8 do
begin
   di = ai + bi
   ei = di / c
   ki = ei + ki-1
end
Output d, e, k
```

In the above example, there are three instructions in the "for loop" and the "for loop" is executed 8 times. So, a total of 24 instructions will be executed. Suppose each add, multiply and divide operation requires 1, 2 and 3 clock cycles to complete respectively. The data flow graph is drawn for the above instructions. [diagram — data flow graph]

The above instructions can be executed within 14 clock cycles as shown in the timing chart below. [diagram — space-time chart showing the $a_i$, $b_i$, $c_i$, $e_i$ and $k_i$ operations distributed over cycles 1–14]

The multiplier completes the execution in 14 cycles. If all the external inputs are available, instructions $a_1$, $a_2$, $a_3$ and $a_4$ are all ready for execution in the first three cycles produced, which then trigger the execution of $a_5$, $b_1$, $a_6$, and $a_7$. The data-driven chain reactions are shown in the figure above. The output $k$ is the last one to produce, due to its dependence on all the previous $e$'s.

The theoretical minimum time is 13 cycles along the critical path $a_1 b_1 c_1 c_2 \ldots c_8$. The chain-reaction control in dataflow is more difficult to implement and may result in longer overhead, as compared with the uniform operations performed by all processors.

**d)** [diagram — data flow graph: $X,Y \to (+) \to P$; $P,Y \to (+) \to Q$; $X,P \to (*) \to R$; $R,Q \to (-) \to S$; $R,P \to (*) \to T$; $S,T \to (\div) \to U$]

---

**5. a) What is the difference between Computer Organization and Computer Architecture?** *[WBUT 2012]*
**b) Why is the equation to calculate the CPU-time of a program often expressed in terms of average CPI of that processor?** *[WBUT 2012]*
**c) A 30% enhancement in speedup for a component of the processor has been proposed for a new architecture. If the enhancement is usable only for 50% of the time, what fraction of the time must the enhancement be used to achieve an overall speedup of 10?** *[WBUT 2012]*
**d) What are the different approaches taken by a pipeline processor to handle branch instructions? Briefly illustrate any two approaches.** *[WBUT 2012]*

**OR,**

**What is a branch hazard? Briefly discuss two methods to handle branch hazards.** *[WBUT 2014, 2017]*

**Answer:**

**a) Difference between Computer Organization and Computer Architecture:**

*Computer organization*
- Deals with all physical components of a computer system that interact with each other to perform various functionalities.
- The lower level of computer organization is known as microarchitecture, which is more detailed and concrete.
- Examples of organizational attributes include hardware details transparent to the programmer, such as control signals and peripherals.

*Computer architecture*
- Refers to a set of attributes of a system as seen by the programmer.
- Examples of architectural attributes include the instruction set, the number of bits used to represent the data types, the Input/Output mechanism, and the technique for addressing memories.

**b)** Performance analysis should help answer questions such as: how fast can a program be executed using a given computer? In order to answer such a question, we need to determine the time taken by a computer to execute a given job. We define the clock cycle time as the time between two consecutive rising (trailing) edges of a periodic clock signal. Clock cycles allow counting unit computations, because the storage of computation results is synchronized with rising (trailing) clock edges. The time required to execute a job by a computer is often expressed in terms of clock cycles. We denote the number of CPU clock cycles for executing a job to be the cycle count (CC), the cycle time by CT, and the clock frequency by $f = 1/CT$. The time taken by the CPU to execute a job can be expressed as

$$\text{CPU time} = CC \times CT = CC/f$$

It may be easier to count the number of instructions executed in a given program than to count the number of CPU clock cycles needed for executing that program. Therefore, the average number of clock cycles per instruction (CPI) has been used as an alternate performance measure. The following equations show how to compute the CPI:

$$\text{CPI} = \frac{\text{CPU clock cycles for the program}}{\text{Instruction count}}$$
$$\text{CPU time} = \text{Instruction count} \times \text{CPI} \times \text{Clock cycle time}$$

**c)** Let $x$ be the fraction of the time the enhancement must be used to achieve an overall speedup. So,

$$x \cdot (30/50) = 10 \implies x = 16.6$$

`[as printed]`

**d)** One of the major problems in designing an instruction pipeline is assuring a steady flow of instructions to the initial stages of the pipeline. However, 15–20% of instructions in an assembly-level stream are (conditional) branches. Of these, 60–70% take the branch to a target address. Until the instruction is actually executed, it is impossible to determine whether the branch will be taken or not.

A number of techniques can be used to minimize the impact of the branch instruction (the branch penalty):

- **Multiple streams:**
  - Replicate the initial portions of the pipeline and fetch both possible next instructions.
  - Increases chance of memory contention.
  - Must support multiple streams for each instruction in the pipeline.
- **Prefetch branch target:**
  - When the branch instruction is decoded, begin to fetch the branch target instruction and place it in a second prefetch buffer.
  - If the branch is not taken, the sequential instructions are already in the pipe, so there is no loss of performance.
  - If the branch is taken, the next instruction has been prefetched and results in minimal branch penalty (no need to incur a memory read operation at the end of the branch to fetch the instruction).
- **Loop buffer:** A look-ahead, look-behind buffer.
  - Many conditional branch operations are used for loop control.
  - Expand the prefetch buffer so as to buffer the last few instructions executed in addition to the ones that are waiting to be executed.
  - If the buffer is big enough, the entire loop can be held in it; this can reduce the branch penalty.
- **Branch prediction:** Make a good guess as to which instruction will be executed next and start that one down the pipeline.
  - *Static guesses:* make the guess without considering the runtime history of the program — Branch never taken, Branch always taken, Predict based on the opcode.
  - *Dynamic guesses:* track the history of conditional branches in the program.
- **Delayed branch:** Minimize the branch penalty by finding valid instructions to execute in the pipeline while the branch address is being resolved.
  - It is possible to improve performance by automatically rearranging instructions within a program, so that the branch instruction occurs later than actually desired.
  - The compiler is tasked with reordering the instruction sequence to find enough independent instructions to feed into the pipeline after the branch that the branch penalty is reduced to zero.

---

**6. a) What are the major hurdles to achieving the ideal speed-up?** *[WBUT 2012]*
**b) Discuss data hazard briefly.** *[WBUT 2012, 2023]*
**c) Discuss briefly two approaches to handle branch hazards.** *[WBUT 2012]*
**d) Consider a 4-stage pipeline that consists of Instruction Fetch (IF), Instruction Decode (ID), Execute (Ex) and Write Back (WB) stages. The times taken by these stages are 50 ns, 60 ns, 110 ns and 80 ns respectively. The pipeline registers are required after every pipeline stage, and each of these pipeline registers consumes 10 ns delay. What is the speedup of the pipeline under ideal conditions compared to the corresponding non-pipelined implementation?** *[WBUT 2012]*

**Answer:**

**a)** We define the speedup of a $k$-stage linear pipeline processor over an equivalent non-pipeline processor as

$$S_k = \frac{n \cdot k}{k + (n-1)}$$

It should be noted that the maximum speedup is $S_k \to k$ for $n \gg k$. In other words, the maximum speedup that a linear pipeline can provide us is $k$, where $k$ is the number of stages in the pipe. The maximum speedup is never fully achievable because of data dependencies between instructions, interrupts, and other factors.

**b)** Refer to Question No. 4 of Short Answer Type Questions.

**c)** Branch hazards occur when the processor is told to branch — i.e., if a certain condition is true, then jump from one part of the instruction stream to another — not necessarily to the next instruction sequentially. In such a case, the processor cannot tell in advance whether it should process the next instruction (when it may instead have to move to a distant instruction). To minimize the branch penalty, put in enough hardware so that we can test registers, calculate the branch target address, and update the PC during the second stage.

[diagram — "Situation of control hazards": instruction I1 (I-Fetch, ID, OpFetch, Jump) creates a control hazard for the following instruction I2 (I-Fetch, …)]

There are two methods to prevent branch hazards, as described below:

- **Branch Prediction:** Branch predication is a strategy in computer architecture design for minimizing the costs usually associated with conditional branches, particularly branches to short sections of code. It does this by allowing each instruction to conditionally either perform an operation or do nothing. Because computer programs respond to a user, there is no way around the fact that portions of a program need to be executed conditionally. Note that besides eliminating branches, less code is needed in total, provided the architecture provides predicated instructions. While this does not guarantee faster execution in general, it will if the "do this" and "do that" blocks of code are short enough. Typically, in order to claim that a system has branch predication, most or all of the instructions must have this ability to execute conditionally based on a predicate.
- **Delayed Branch:** A branch delay instruction is an instruction immediately following a conditional branch instruction which is executed whether or not the branch is taken.

[diagram — "Situation of control hazards": Branch (IF, ID, EX, Mem, WB); Delayed slot instruction (Delay slot); Branch target (IF, ID, EX, Mem, WB)]

**d)** Total time required for each instruction in the pipeline
$$= 50 + 10 + 60 + 10 + 110 + 10 + 80 = 330 \text{ ns}$$
So, the speedup $=$ (Time per instruction on non-pipeline machine) / (No. of pipeline stages)
$$= 330 / 4 = 82.5$$

`[as printed]`

---

**7. a) What do you mean by a multiple-issue processor?** *[WBUT 2012, 2018]*
**b) Briefly describe the VLIW processor architecture.** *[WBUT 2012]*
**c) What are the differences between a superscalar processor and a VLIW processor?**
**d) Suppose your program consists of 2500 instructions. The proportion of different kinds of instructions in the program is as follows: Data transfer instruction 50%, arithmetic instruction 30% and branching related instructions 20%. The cycles consumed by these types of instructions are 2, 5 and 10 respectively. What will be the execution time for a 4 GHz processor to execute your program?** *[WBUT 2012]*

**Answer:**

**a)** Scoreboarding and Tomasulo are the two single-issue techniques that allow out-of-order execution. The multiple-issue processors are superscalar and VLIW (very long instruction word) processors. Most of today's general-purpose microprocessors are four- or six-issue superscalar, often with an enhanced Tomasulo scheme. VLIW is the choice for most signal processors. The issue logic examines the waiting instructions in the instruction window and simultaneously assigns (issues) a number of instructions to the FUs up to a maximum issue bandwidth, and several instructions can be issued simultaneously (the issue bandwidth).

**b)** [diagram — VLIW architecture: functional units (Simple Integer, Simple Integer, Complex Integer, Load/Store, Load/Store, Branch/Cmp) fed from a 64-entry Register File and a scoreboard, with a Predecode Buffer and Dispersal Unit reading from the L2 cache]

Recent high-performance processors have depended on Instruction Level Parallelism (ILP) to achieve high execution speed. ILP processors achieve their high performance by causing multiple operations to execute in parallel, using a combination of compiler and hardware techniques. Very Long Instruction Word (VLIW) is one particular style of processor design that tries to achieve high levels of ILP by executing long instruction words composed of multiple operations. The long instruction word, called a MultiOp, consists of multiple arithmetic, logic and control operations, each of which would probably be an individual operation on a simple RISC processor. The VLIW processor concurrently executes the set of operations within a MultiOp, thereby achieving instruction-level parallelism.

A typical VLIW processor (e.g. the example processor "Defoe") provides the following functional units:
- Two load/store units.
- Two simple ALUs that perform add, subtract and shift.
- One complex ALU that can perform multiply and divide on 64-bit integers and packed 32-, 16- and 8-bit integers.
- One branch unit that performs branch, call and comparison operations.

**c)**

| Superscalar Processor | VLIW Processor |
|---|---|
| A superscalar architecture is one in which several instructions can be initiated simultaneously and executed independently. | VLIW architectures rely on compile-time detection of parallelism. The compiler analyses the program and detects operations to be executed in parallel; such operations are packed into one "large" instruction. |
| Superscalar architectures include all features of pipelining but, in addition, there can be several instructions executing simultaneously in the same pipeline stage. | After one instruction has been fetched, all the corresponding operations are issued in parallel. |
| Very complex. Much hardware is needed for run-time detection of parallelism. Power consumption can be very large. The window of execution is limited. | No hardware is needed for run-time detection of parallelism. The window-of-execution problem is solved: the compiler can potentially analyze the whole program in order to detect parallel operations. |

**d)**
- Number of data transfer instructions $= 2500 \times 50\% = 1250$ and total no. of cycles consumed $= 1250 \times 2 = 2500$.
- Number of arithmetic instructions $= 2500 \times 30\% = 750$ and total no. of cycles consumed $= 750 \times 5 = 3750$.
- Number of branching related instructions $= 2500 \times 20\% = 500$ and total no. of cycles consumed $= 500 \times 10 = 5000$.

Total clock cycles consumed for 2500 instructions $= 2500 + 3750 + 5000 = 11250$.
Frequency of the processor $f = 4$ GHz, so clock period $T = 1/f = 0.25$ ns.
The execution time for a 4 GHz processor to execute this program $= 0.25 \times 11250 = 2.81\ \mu s$.

---

**8. What do you understand by instruction pipelining and arithmetic pipelining? Why is pipeline scheduling necessary and how is it done?** *[WBUT 2013]*

**Answer:**

**1st Part:** Refer to Question No. 5 of Short Answer Type Questions.

**2nd Part:**

Pipeline instruction scheduling may be done either before or after register allocation, or both before and after it. The advantage of doing it before register allocation is that this results in maximum parallelism. The disadvantage of doing it before register allocation is that this can result in the register allocator needing to use a number of registers exceeding those available. This will cause spill/fill code to be introduced, which will reduce the performance of the section of code in question.

If the architecture being scheduled has instruction sequences that have potentially illegal combinations (due to a lack of instruction interlocks), the instructions must be scheduled after register allocation. This second scheduling pass will also improve the placement of the spill/fill code.

If scheduling is only done after register allocation, then there will be false dependencies introduced by the register allocation that will limit the amount of instruction motion possible by the scheduler.

---

**9. Define the pipelining technique. Assume a 4-stage pipeline:** *[WBUT 2013]*
- **Fetch:** Read the instruction from memory.
- **Decode:** Decode the instruction.
- **Execute:** Execute the instruction.
- **Write:** Store the result in the destination location.

**Draw the space-time diagram for pipelining.**

**Answer:**

Pipeline is an implementation technique whereby multiple instructions are overlapped in execution. Each step in the pipeline (called a pipe stage) completes a part of an instruction.

[diagram — space-time diagram: successive instructions I1, I2, I3 each pass through IF, ID, EX, WB, staggered by one cycle along the time axis]

**Instruction Fetch Cycle (IF):** In this cycle the CPU sends the address held by the program counter (PC) to the memory. Then it fetches the current instruction from memory and updates the content of the PC for the next instruction.

**Instruction Decode/Register Fetch Cycle (ID):** In this cycle the CPU decodes the instruction and reads the registers from the register file, performing the equality test on the registers for a possible branch. Then it sign-extends the offset field of the instruction in case it is needed and computes the possible branch target address by adding the sign-extended offset to the incremented PC.

**Execution/Effective Address Calculation (EX):** In the execution cycle the ALU operates on the operands prepared in the prior cycle. If it is a memory-reference instruction, the ALU adds the base register and the offset to form the effective address; if it is a Register-Register instruction, the ALU performs the operation specified by the ALU opcode on the values from the register file; if it is a Register-Immediate instruction, the ALU performs the operation specified by the opcode on the first value from the register file and the sign-extended immediate.

**Write-Back Cycle (WB):** Register-Register ALU instruction or Load instruction: write the result into the register file.

---

**10. a) What is an arithmetic and instruction pipeline?** *[WBUT 2014]*
**b) Consider the following reservation table:** *[WBUT 2014]*

|      | 1 | 2 | 3 | 4 |
|------|---|---|---|---|
| S1   | X |   | X |   |
| S2   |   | X |   |   |
| S3   |   |   | X |   |
| S4   |   | X |   | X |

**List the set of forbidden latencies and the collision vector. Draw the state transition diagram. List all simple cycles from the state diagram. Identify the greedy cycles among the simple cycles. Find out the minimum average latency (MAL). Find out the maximum throughput of this pipeline if the clock rate is 25 MHz.**

**OR,**

**Consider the four-stage pipelined processor specified by the following reservation table:**

|      | 1 | 2 | 3 | 4 |
|------|---|---|---|---|
| S1   | X |   | X |   |
| S2   |   | X |   |   |
| S3   |   |   | X |   |
| S4   |   | X |   | X |

- **(i) List the set of forbidden latencies and the collision vector.**
- **(ii) Draw the state transition diagram.**
- **(iii) List all simple cycles from the state diagram.**
- **(iv) Identify the greedy cycles among the simple cycles.**
- **(v) Find out the minimum average latency.**

**c) What are the bounds on MAL?**

**Answer:**

**a)** Refer to Question No. 5 of Short Answer Type Questions.

**b)**
- Forbidden Latencies are: 0, 2
- Pipeline collision vector is: $(1010)$
- Greedy Cycle is: $(1, 3)$

State Diagram:
- **State 1: $1010$**
  - Reaches State 2 ($1110$) after 1 cycle.
  - Reaches State 1 ($1010$) after 3 cycles.
  - Reaches State 1 ($1010$) after 4 or more cycles.
- **State 2: $1110$**
  - Reaches State 1 ($1010$) after 3 cycles.
  - Reaches State 1 ($1010$) after 4 or more cycles.

There are 2 states in the state diagram:
- State 1 represents $1010$.
- State 2 represents $1110$.

Minimal Average Latency (MAL) is: 2.

Let the pipeline clock period be $t = 40$ ns. So,
$$\text{throughput} = \frac{\text{MAL}}{\text{no. of stages in the pipeline} \times \text{time period}} = \frac{2}{4 \times 40 \times 10^{-9}} = 1.25 \text{ MIPS}$$

Lower bound of MAL $= 2$ (maximum number of check marks in any row of the reservation table).
Upper bound of MAL $= 2 + 1 = 3$ (number of 1's in the initial collision vector $+ 1$).

**c)** Refer to Question No. 3 of Long Answer Type Questions.

---

**11. What do you mean by multiple-issue processors? Briefly describe the VLIW processor architecture. What are the limitations of VLIW?** *[WBUT 2014]*

**Answer:**

Refer to Question No. 7(a) & (b) of Long Answer Type Questions.

---

**12. a) What is meant by a pipeline hazard? Briefly discuss different pipeline hazards.**
**b) What do you mean by job collision in a pipeline processor? Show how collisions occur in the following static pipeline.**

|      | 0 | 1 | 2 | 3 | 4 |
|------|---|---|---|---|---|
| S0   | X |   |   |   | X |
| S1   |   | X |   | X |   |
| S2   |   |   | X |   |   |

**c) Consider the execution of a program of 20,000 instructions by a linear pipeline processor with a clock rate of 40 MHz. Assume that the instruction pipeline has five stages and that one instruction is issued per clock cycle. The penalties due to branch instructions and out-of-order executions are ignored. Calculate the speed-up of the pipeline over its equivalent non-pipeline processor, the efficiency and throughput.** *[WBUT 2015]*

**Answer:**

**a)** Refer to Question No. 4 of Short Answer Type Questions.

**b)** The number of cycles between initiations is called the latency. The first step is to identify the forbidden latencies revealed by the diagram. A latency is forbidden if it will lead to a collision. The table shows that stage $S_0$ is required during both the first and last cycles. We cannot initiate a new task after only one cycle, since a new task would be an immediate collision. There is a systematic way to identify all forbidden latencies from a given reservation table. For each row containing more than one X, write down the distance between every pair of X's. Each such distance represents a forbidden latency. In our example, row $S_0$ contains two X's, which can form one distinct pair; the latency blocked by this pair is 4. Row $S_1$ yields a forbidden latency of 2. There are no forbidden latencies for row $S_2$, since it contains only one X.

The set of forbidden latencies is then summarized in a bit string called a collision vector. The collision vector contains one bit for each possible latency. The bits are numbered from left to right (but some authors use the opposite order). The collision vector for our example table is $11010$.

**c)** Speedup,
$$S_k = \frac{n k \tau}{[k + (n-1)]\tau} = \frac{(20000 \times 5 \times 40)}{(5 + (20000 - 1))} \times 40 = 5$$

`[as printed]`

---

**13. Consider the following pipeline reservation table.**

|      | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|------|---|---|---|---|---|---|---|---|
| S1   | X |   |   |   | X |   | X |   |
| S2   |   | X |   | X |   |   |   |   |
| S3   |   |   | X |   |   | X |   | X |

**a) What are the forbidden latencies?**
**b) Draw the state transition diagram.**
**c) List all the simple cycles and greedy cycles.**
**d) Determine the optimal constant latency cycle and the minimal average latency.**
**e) Let the pipeline clock period be $\tau = 20$ ns. Determine the throughput of the pipeline.** *[WBUT 2016]*

**Answer:**

**a)** The Forbidden Latencies are 0, 2, 4, 5, 7.

**b)** The State Diagram (in textual form):
- **State 1: $10101101$**
  - Reaches State 2 ($11111111$) after 1 cycle.
  - Reaches State 3 ($11101101$) after 3 cycles.
  - Reaches State 3 ($11101101$) after 6 cycles.
  - Reaches State 1 ($10101101$) after 8 or more cycles.
- **State 2: $11111111$**
  - Reaches State 1 ($10101101$) after 8 or more cycles.
- **State 3: $11101101$**
  - Reaches State 3 ($11101101$) after 3 cycles.
  - Reaches State 3 ($11101101$) after 6 cycles.
  - Reaches State 1 ($10101101$) after 8 or more cycles.

There are 3 states in the state diagram:
- State 1 represents $10101101$.
- State 2 represents $11111111$.
- State 3 represents $11101101$.

**c)** The Greedy Cycle is $(1, 8)$.

**d)** The Minimum Average Latency $= 4.5$.

**e)** Throughput,
$$W = \frac{n}{T} \times \frac{1}{\text{MAL}} = \frac{1}{20 \times 10^{-9}} \times \frac{1}{4.5} = 0.222$$

---

**14. a) Consider the following block diagram of a circuit. Form the Reservation table.**

`Input → Unit 0 → Unit 1 → Unit 2 → Unit 3 → Unit 4` (with feedback paths) [diagram]

**b) An instruction requires four stages to execute: Stage 1 (instruction fetch) requires 30 ns, Stage 2 (instruction decode) = 9 ns, Stage 3 (instruction execute) = 20 ns and Stage 4 (store results) = 10 ns. An instruction must proceed through the stages in sequence. What is the minimum asynchronous time for any single instruction to complete?**

**c) We want to set this up as a pipelined operation. How many stages should we have and at what rate should we clock the pipeline?** *[WBUT 2016]*

**Answer:**

**a)**

|        | $t_0$ | $t_1$ | $t_2$ | $t_3$ | $t_4$ | $t_5$ |
|--------|-------|-------|-------|-------|-------|-------|
| Unit 0 | X     |       |       |       | X     |       |
| Unit 1 |       | X     |       |       |       |       |
| Unit 2 |       |       | X     |       |       |       |
| Unit 3 |       |       |       | X     |       |       |
| Unit 4 |       | X     |       |       |       | X     |

**b)** The minimum asynchronous time for any single instruction to complete $= (30 + 9 + 20 + 10)$ ns $= 69$ ns.

**c)** To set up a pipeline operation, we need to construct a minimum of five stages in the pipeline. The stages are instruction fetch, instruction decode, operand read, instruction execution and store results. We should calculate which stage requires the highest time for execution, and this amount of time we have to set for all the stages of the pipeline.

---

**15. With the use of Amdahl's law, conclude which possible improvement, among the given options, is the best one.**

| Instruction type | Frequency | CPI |
|------------------|-----------|-----|
| ALU              | 40%       | 1   |
| Branch           | 20%       | 4   |
| Load             | 30%       | 2   |
| Store            | 10%       | 3   |

**Possible improvements:**
1. **Branch CPI can be decreased from 4 to 3.**
2. **Increase clock frequency from 2 to 2.3 GHz.**
3. **Store CPI can be decreased from 3 to 2.** *[WBUT 2016]*

**Answer:**

To improve the performance, we have to calculate the CPI for all cases.

In the given problem,
$$\text{CPI} = 0.4 \times 1 + 0.2 \times 4 + 0.3 \times 2 + 0.1 \times 3 = 2.1$$
Now, clock is $2$ GHz $= 2000$ MHz.
Thus MIPS (millions of instructions per second) $= 2.1 \times 2000 = 4200$.

Now in case 1, Branch CPI can be decreased from 4 to 3.
$$\text{CPI} = 0.4 \times 1 + 0.2 \times 3 + 0.3 \times 2 + 0.1 \times 3 = 1.9$$
If the clock is $2$ GHz, then MIPS $= 1.9 \times 2000 = 3800$.

Now in case 2, Increase clock frequency from 2 to 2.3 GHz.
When clock is $2.3$ GHz, MIPS $= 2.1 \times 2300 = 4830$.

Now in case 3, Store CPI can be decreased from 3 to 2.
$$\text{CPI} = 0.4 \times 1 + 0.2 \times 4 + 0.3 \times 2 + 0.1 \times 2 = 2.0$$
If the clock is $2$ GHz, then MIPS $= 2 \times 2000 = 4000$.

So, among the given options, case 2 is the best one for improvement.

> *(The source's prose labels this conclusion "case 2"; note that a lower MIPS would correspond to faster execution per the way MIPS is computed here, but the printed result `[as printed]` selects case 2 — the highest MIPS value, 4830.)*

---

**16. Consider the following pipeline processor (where $S_i$ is the number of stages and $T_i$ is the clock cycle):**

**a) Specify the reservation table for this pipeline with all rows.**
**b) List the set of forbidden latencies between task initiations.**
**c) Draw the state diagram which shows all possible latency cycles.**
**d) List all greedy cycles from the state diagram.**
**e) What is the value of the minimal average latency?**
**f) What is the maximal throughput of this pipeline?** *[WBUT 2017]*

**Answer:**

**a)** Reservation table:

|      | 1 | 2 | 3 | 4 | 5 | 6 |
|------|---|---|---|---|---|---|
| S1   | X |   |   |   | X |   |
| S2   |   | X |   |   |   | X |
| S3   |   |   | X |   |   |   |
| S4   |   |   |   | X |   |   |

**b)** Forbidden latencies: 0, 4.

**c)** The Pipeline Collision Vector: $(100010)$.

State diagram:
- **State 1: $100010$**
  - Reaches State 2 ($100110$) after 1 cycle.
  - Reaches State 3 ($101010$) after 2 cycles.
  - Reaches State 4 ($110010$) after 3 cycles.
  - Reaches State 1 ($100010$) after 5 cycles.
  - Reaches State 1 ($100010$) after 6 or more cycles.
- **State 2: $100110$**
  - Reaches State 5 ($101110$) after 1 cycle.
  - Reaches State 6 ($111010$) after 2 cycles.
  - Reaches State 1 ($100010$) after 5 cycles.
  - Reaches State 1 ($100010$) after 6 or more cycles.
- **State 3: $101010$**
  - Reaches State 7 ($110110$) after 1 cycle.
  - Reaches State 4 ($110010$) after 3 cycles.
  - Reaches State 1 ($100010$) after 5 cycles.
  - Reaches State 1 ($100010$) after 6 or more cycles.
- **State 4: $110010$**
  - Reaches State 3 ($101010$) after 2 cycles.
  - Reaches State 4 ($110010$) after 3 cycles.
  - Reaches State 1 ($100010$) after 5 cycles.
  - Reaches State 1 ($100010$) after 6 or more cycles.
- **State 5: $101110$**
  - Reaches State 8 ($111110$) after 1 cycle.
  - Reaches State 1 ($100010$) after 5 cycles.
  - Reaches State 1 ($100010$) after 6 or more cycles.
- **State 6: $111010$**
  - Reaches State 4 ($110010$) after 3 cycles.
  - Reaches State 1 ($100010$) after 5 cycles.
  - Reaches State 1 ($100010$) after 6 or more cycles.
- **State 7: $110110$**
  - Reaches State 6 ($111010$) after 2 cycles.
  - Reaches State 1 ($100010$) after 5 cycles.
  - Reaches State 1 ($100010$) after 6 or more cycles.
- **State 8: $111110$**
  - Reaches State 1 ($100010$) after 5 cycles.
  - Reaches State 1 ($100010$) after 6 or more cycles.

There are 8 states in the state diagram:
- State 1 represents $100010$.
- State 2 represents $100110$.
- State 3 represents $101010$.
- State 4 represents $110010$.
- State 5 represents $101110$.
- State 6 represents $111010$.
- State 7 represents $110110$.
- State 8 represents $111110$.

**d)** The Greedy Cycle: $(1, 1, 1, 5)$.

**e)** The Minimum Average Latency: 2.

**f)** The Throughput: 0.5 instruction per cycle.

---

**17. With the help of a neat diagram, show the structure of an arithmetic pipeline performing $(A * B + C)$.** *[WBUT 2017]*

**Answer:**

The sub-operations performed for the arithmetic expression $A * B + C$ in each stage of the pipeline are as follows:
- Sub-operation 1: $R1 \leftarrow A$, $R2 \leftarrow B$ — Input $A$ and $B$.
- Sub-operation 2: $R3 \leftarrow R1 * R2$, $R4 \leftarrow C$ — Multiply and input $C$.
- Sub-operation 3: $R5 \leftarrow R3 + R4$ — Add $C$ to the product.

Five registers are loaded with new data in every clock period. The corresponding pipeline is shown below.

[diagram — arithmetic pipeline: registers $R1$, $R2$ (with Latch) feed the **Multiplier (Stage-1)**; its output $R3$ together with $R4$ (with Latch) feed the **Adder (Stage-2)**; result $R5$ (with Latch)]

---

**18. Consider the following pipeline reservation table:**

|      | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|------|---|---|---|---|---|---|---|---|
| S1   | X |   |   |   |   | X |   | X |
| S2   |   | X |   | X |   |   |   |   |
| S3   |   |   | X |   | X |   | X |   |

**a) Find the forbidden and permissible latency set.**
**b) Draw the state transition diagram.**
**c) Find all simple cycles.**
**d) Find the minimum average latency.**
**e) What are the performance-measuring parameters of a pipelining system? Explain briefly.** *[WBUT 2019]*

**Answer:**

**a) to d)** Refer to Question No. 13 of Long Answer Type Questions.

**e)** The ability to overlap stages of a sequential process for different input tasks (data or operations) results in an overall theoretical completion time of

$$T_{\text{pipe}} = m \cdot P + (n-1) \cdot P$$

Here $n$ is the number of input tasks, $m$ is the number of stages in the pipeline, and $P$ is the clock period. The three basic performance measures for the pipeline are as follows:

**Speedup:**
A $k$-stage pipeline processes $n$ tasks in $k + (n-1)$ clock cycles: $k$ cycles for the first task and $(n-1)$ cycles for the remaining $(n-1)$ tasks.

Total time to process $n$ tasks: $T_k = [k + (n-1)] \cdot \tau$.
For the non-pipelined processor: $T_1 = n \cdot k \cdot \tau$.

The speedup factor is
$$\text{Speedup} = \frac{\text{Time taken by non-pipelined implementation}}{\text{Time taken by pipelined implementation}} = \frac{n k \tau}{[k + (n-1)]\tau} = \frac{n k}{k + (n-1)}$$

When the value of $n$ is approximated to infinity, the speedup factor becomes
$$\text{Speedup} = \frac{n k}{n} = k$$

**Throughput:**
Throughput is the outputs produced per clock cycle; throughput will be equal to 1 in the ideal situation, that is, when the pipeline is producing one output per clock cycle.
$$U(n) = \frac{m \cdot f}{n + (m-1)}$$

**Efficiency:** The efficiency of $n$ stages in a pipeline is defined as the ratio of the actual speedup to the maximum speedup.
$$E(n) = \frac{m}{n + m - 1}$$

---

**19. Simplify the following program segment using internal forwarding and register tagging techniques:**

```
R0 ← (M1)
R0 → (R0) + (M2)
R0 → (R0) * (M2)
M4 → (R0)
```

*[WBUT 2019]*

**Answer:**

- **Internal Forwarding:** A "short-circuit" technique to replace unnecessary memory accesses by register-register transfers in a sequence of fetch-arithmetic-store operations.
- **Register Tagging:** Use of tagged registers, buffers and reservation stations for exploiting concurrent activities among multiple arithmetic units.
- **Store-Fetch Forwarding:** $(M \leftarrow R1,\ R2 \leftarrow M)$ replaced by $(M \leftarrow R1,\ R2 \leftarrow R1)$.
- **Fetch-Fetch Forwarding:** $(R1 \leftarrow M,\ R2 \leftarrow M)$ replaced by $(R1 \leftarrow M,\ R2 \leftarrow R1)$.
- **Store-Store Overwriting:** $(M \leftarrow R1,\ M \leftarrow R2)$ replaced by $(M \leftarrow R2)$.

Simplify the given program segment using internal forwarding and register tagging techniques:

| Original | Simplified |
|----------|-----------|
| $R0 \leftarrow (M1)$ | $R0 \leftarrow M1,\ R1 \leftarrow M2,\ R3 \leftarrow M2$ |
| $R0 \leftarrow (R0) + (M2)$ | $R0 \leftarrow R0 + R1$ |
| $R0 \leftarrow (R0) * (M2)$ | $R0 \leftarrow R0 + R3$ |
| $M4 \leftarrow (R0)$ | $M4 \leftarrow R0$ |
| $R0 \leftarrow (M1)$ | $R0 \leftarrow M1,\ R1 \leftarrow M2$ |
| $R0 \leftarrow (R0) + (M2)$ | $R0 \leftarrow R0 + R1$ |
| $R0 \leftarrow (R0) * (M2)$ | $R0 \leftarrow R0 + R3$ |
| $M4 \rightarrow (R0)$ | $M4 \leftarrow R0$ |

> *(The simplified column on CA-38 is partly obscured by the watermark; the register-tag assignments shown above are the legible, verified entries. Note that the printed simplification writes the third operation as $R0 \leftarrow R0 + R3$ even though the source statement is a multiplication — kept `[as printed]`.)*

---

**20. Explain the concept of pipeline hazards in computer architecture. How can they be avoided or minimized?** *[WBUT 2023]*

**Answer:**

**1st Part:** Refer to Question No. 4 of Short Answer Type Questions.

**2nd Part:**

**Structural Hazards**

*Solution: Introduce Stall*

To resolve the structural hazard, a common approach is to introduce a "bubble" or stall in the pipeline.
- When a structural dependency is detected, the instruction causing the conflict is delayed, and subsequent instructions are also stalled until the hazard is resolved.
- This can lead to a significant increase in the number of clock cycles required to execute instructions, reducing overall CPU efficiency.
- The delay can propagate to multiple instructions, causing a noticeable impact on the pipeline's performance.

*Better Solution: Increase Structural Resources*

To mitigate the impact of structural hazards, one can increase the structural resources in the system.
- Options include increasing the number of pipeline stages or employing separate caches for instruction memory and data memory.
- Multiple levels of cache within the CPU can also improve performance.
- Another possibility is to have an exclusive ALU for address calculation, or to use register files with multiport access.

*Modern Solutions*

Modern CPUs often implement a combination of these techniques to handle dependencies efficiently.
- They may have deeper pipelines, which provide more stages to alleviate structural hazards and improve overall performance.
- Cache memories are commonly used to reduce the impact of memory-related dependencies.
- Register files with multiport access enable simultaneous read and write operations on different registers.

*Trade-offs*

Increasing structural resources can enhance CPU performance but also leads to higher cost and complexity. Designers must make trade-offs to find the optimal solution that balances performance and cost.

**Handling Data Hazards**

To mitigate data hazards in pipelined CPUs, various techniques are employed:

**(a) Data Forwarding (Data Hazard Interlock):** Data forwarding, also known as data interlock, involves passing the result of a previous instruction directly to the functional unit that requires it. This technique makes the result available earlier to the dependent instruction, reducing the need for stalls and improving pipeline efficiency.

**(b) Compiler Optimizations:** The compiler can play a role in detecting data dependencies during the code-optimization stage. It may reorder instructions or insert NOP (No Operation) instructions to reduce data hazards when generating executable code.

**(c) Register Renaming:** Modern CPUs use register renaming techniques to avoid WAW and WAR hazards. By allocating different physical registers for instructions that use the same logical register, hazards can be prevented.

**(d) Out-of-Order Execution:** Some CPUs employ out-of-order execution.
- This allows instructions to be executed in a sequence different from their original program order.
- This technique enables the processor to execute independent instructions concurrently, reducing stalls caused by data hazards.

**(e) Multiple Stages of Pipelines:** CPUs with deeper pipelines can also alleviate data hazards by breaking down instruction execution into more stages.
- Efficiently managing data hazards is crucial for maintaining correct instruction execution and improving the overall performance of pipelined CPUs.
- A combination of hardware and software techniques is used to handle these hazards effectively.

**Solutions for Control Hazards**

To handle control hazards efficiently, various techniques are employed:

**(a) Stalling the Pipeline:** Stall the pipeline as soon as a branch instruction is decoded, preventing any further instruction fetching until the branch decision is resolved.
- This approach reduces pipeline throughput, since around 30% of instructions in a program are often branch instructions.
- This leads to a pipeline operating at about 50% capacity with stalling.

**(b) Branch Prediction:** Instead of stalling, allow the pipeline to proceed and predict the outcome of the branch instruction.
- For example, loops tend to iterate multiple times before a branch condition is met.
- Predict that the branch will not be taken, and if it turns out to be correct, the pipeline continues without disruption.
- However, if the prediction is wrong, the pipeline needs to be flushed (undone), and the correct instructions need to be fetched.

**(c) Dynamic Branch Prediction:** Maintain a Branch Table Buffer (BTB), acting as a cache with entries for branch instruction addresses and their corresponding target branch addresses.
- When a conditional branch instruction is encountered, the BTB is checked for a hit, and if found, the corresponding target branch address is used for fetching the next instruction.
- If the prediction fails, flushing is required.

**(d) Reordering Instructions (Delayed Branch):** The compiler can reorder instructions, positioning the branch instruction later in the sequence to bring useful, non-affected instructions earlier.
- This way, the branch instruction fetch is delayed.
- If no such instructions are available, NOP instructions (no operations) may be introduced to achieve delayed branching.

---

**21. Write short notes on the following:**
**a) Pipeline hazards** *[WBUT 2005, 2011, 2014]*
**b) Amdahl's law and its significance** *[WBUT 2012, 2014]*
**c) The VLIW processor architecture** *[WBUT 2018]*
**d) Data flow computer** *[WBUT 2018]*

**Answer:**

**a) Pipeline hazards:** Refer to Question No. 4 of Short Answer Type Questions.

**b) Amdahl's law and its significance:**

Amdahl's law is a model for the relationship between the expected speedup of parallelized implementations of an algorithm relative to the serial algorithm, under the assumption that the problem size remains the same when parallelized. For example, if for a given problem size a parallelized implementation of an algorithm can run 12% of the algorithm's operations arbitrarily quickly (while the remaining 88% of the operations are not parallelizable), Amdahl's law states that the maximum speedup of the parallelized version is $1/(1 - 0.12) = 1.136$ times as fast as the non-parallelized implementation.

More technically, the law is concerned with the speedup achievable from an improvement to a computation that affects a proportion $P$ of that computation, where the improvement has a speedup of $S$. (For example, if 30% of the computation may be the subject of a speedup, $P$ will be 0.3; if the improvement makes the portion affected twice as fast, $S$ will be 2.) Amdahl's law states that the overall speedup of applying the improvement will be:

$$\text{Speedup} = \frac{1}{(1 - P) + \dfrac{P}{S}}$$

To see how this formula was derived, assume that the running time of the old computation was 1, for some unit of time. The running time of the new computation will be the length of time the unimproved fraction takes (which is $1 - P$), plus the length of time the improved fraction takes. The length of time for the improved part of the computation is the length of the improved part's former running time divided by the speedup, making the length of time of the improved part $P/S$. The final speedup is computed by dividing the old running time by the new running time, which is what the above formula does.

**c) The VLIW processor architecture:**
Refer to Question No. 7(b) of Long Answer Type Questions.

**d) Data flow computer:**
Refer to Question No. 2(a) of Long Answer Type Questions.
