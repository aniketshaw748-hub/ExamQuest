# Computer Architecture — Chapter 6: Interprocess Communication

> **Source:** *Computer Architecture* organizer (MAKAUT/WBUT solved papers, Popular Publications), book pages CA-108 to CA-128.
> **Fidelity note for downstream readers (incl. LLMs):**
> - Concept summary, all multiple-choice answers, diagrams, formulas and routing functions below were **verified against the scanned page images**, not just OCR (the OCR for this chapter is heavily corrupted and was used only as a rough guide).
> - **Answers are transcribed exactly as printed in the source.** Where a printed item is internally inconsistent or debatable, it is flagged inline as `[as printed]`.
> - Any portion illegible on the scan is marked `[illegible in source]` rather than guessed. Math is rendered in LaTeX; diagrams are described and tagged `[diagram]`.

---

## Chapter at a Glance

### Centralized Shared Memory Architecture

A centralized shared memory design can be scaled to a few dozen processors. Although scaling beyond that is technically conceivable, sharing a centralized memory, even one organized as multiple banks, becomes less attractive as the number of processors sharing it increases. Because there is a single main memory that has a symmetric relationship to all processors and a uniform access time from any processor, these multiprocessors are often called symmetric (shared-memory) multiprocessors (SMPs), and this style of architecture is sometimes called UMA (uniform memory access). This type of centralized shared-memory architecture is currently by far the most popular organization.

So, communication with shared memory can be defined as follows:

- Allows a familiar programming style. Sometimes it is straightforward to make an existing program run on a parallel machine (with a small number of processors).
- Requires synchronization with critical regions or semaphores for shared data.
- The cache can help reduce the amount of communication.
- Complex hardware is needed to keep the caches correct.

**Basic structure of a centralized shared-memory multiprocessor** `[diagram]`: Four **Processor** blocks across the top, each connected down to its own **One or more levels of cache** block. All four cache blocks connect to a shared bus, which in turn connects to **Main memory** and an **I/O system**.

---

## Very Short Answer Type Questions

**1.** In general an $n$ input Omega network requires ............ stages of $2\times2$ switches. *[WBUT 2011, 2016]*
a) 2   b) 4   c) 8   d) 16
**Answer: (a)**

**2.** The time to access shared memory is same in which of the following shared memory multiprocessor models? *[WBUT 2012, 2015, 2018]*
a) NUMA   b) UMA   c) COMA   d) ccNUMA
**Answer: (b)**

**3.** Example of a recirculating network is *[WBUT 2013]*
a) 3 cube network   b) ring network   c) tree network   d) mesh connected Illiac network
**Answer: (b)**

**4.** In general 64 input Omega network requires ............ stages of $2\times2$ switches. *[WBUT 2013]*
a) 6   b) 64   c) 8   d) 7
**Answer: (a)**

**5.** The UMA multiprocessor system is best suited *[WBUT 2015]*
a) when the degree of interaction among different modules in program is large
b) when the degree of interaction among different modules in program is less
c) when there is no interaction among different modules in program
d) when different programs are to be executed concurrently
**Answer: (d)** `[as printed]`

**6.** Which of the following is a recursive network? *[WBUT 2017]*
a) Benes network   b) Baseline network   c) Cross bar network   d) none of these
**Answer: (d)**

**7.** A ............ computer is a group of interconnected computers that work together to perform a task. *[WBUT 2023]*
**Answer: network**

---

## Short Answer Type Questions

**1. What are the differences between loosely coupled and tightly coupled architecture? What do you mean by non-uniform memory access, uniform memory access and memory bandwidth?** *[WBUT 2011]*
**OR, What are the differences between loosely coupled and tightly coupled architecture?** *[WBUT 2013, 2014, 2016, 2018]*

**a)** For the differences between loosely coupled and tightly coupled architecture, refer to Long Answer Type Question No. 4(c).

**b) Compare & contrast between UMA & NUMA with examples. What is Dual memory?** *[WBUT 2012]*

**1st Part:** Refer to Question No. 4(c) of Long Answer Type Questions.

**2nd Part:**
Shared memory does not mean that there is a single, centralized memory. The symmetric shared-memory multiprocessors are known as UMAs (uniform memory access). Uniform Memory Access (UMA) is a computer memory architecture used in parallel computers having multiple processors and probably multiple memory chips.

All the processors in the UMA model share the physical memory uniformly. Peripherals are also shared. Cache memory may be private for each processor. In UMA architecture, accessing time to a memory location is independent from which processor makes the request or which memory chip contains the target memory data. It is used in symmetric multiprocessing (SMP).

Uniform Memory Access computer architectures are often contrasted with Non-Uniform Memory Access (NUMA) architectures. UMA machines are, generally, harder for computer architects to design, but easier for programmers to program, than NUMA architectures.

Non-Uniform Memory Access or Non-Uniform Memory Architecture (NUMA) is a memory design used in multiprocessors, where the memory access time depends on the memory location relative to a processor. Under NUMA, a processor can access its own local memory faster than non-local memory. NUMA architectures logically follow in scaling from symmetric multiprocessing (SMP) architectures. Modern CPUs operate considerably faster than the main memory they are attached to. Limiting the number of memory accesses provided the key to extracting high performance from a modern computer. NUMA attempts to address this problem by providing separate memory for each processor, avoiding the performance hit when several processors attempt to address the same memory. NUMA can improve the performance over a single shared memory by a factor of roughly the number of processors (or separate memory banks).

**2. What is the significance of interconnection network in multiprocessor architecture?** *[WBUT 2012, 2014, 2017]*

The purpose of a network is to allow exchanging data between processors in the distributed system. Regarding this data exchange, two important terms need to be introduced: network switching and network routing. Network switching refers to the method of transportation of data between processors in the network.

There are roughly two classes of network switching:

- circuit switching and
- packet switching

In circuit switching, a connection is established between the source and destination processors which is kept intact during the entire data transmission. During this communication, no other processors can use the allocated communication channel(s). This is like how a traditional telephone works. Some of the early parallel machines used this switching method, but nowadays they mainly use packet switching. In packet switching, data are divided into relatively small packets and a communication channel is allocated only for the transmission of a single packet. Thereafter, the channel may be freely used for another data transmission or for a next packet of the same transmission.

The processors in a parallel architecture must be connected in some manner. Interconnection networks carry data between processors and to memory. The interconnects are made of switches and links (wires, fiber). Interconnects are classified as static or dynamic. Static networks consist of point-to-point communication links among processing elements (PEs) and are also referred to as direct networks. Dynamic networks are built using switches and communication links. Dynamic networks are also referred to as indirect networks. A variety of network topologies have been proposed and implemented. These topologies tradeoff performance for cost. Commercial machines often implement hybrid topologies for reasons of packaging, cost, and available components.

**3. What do you mean by Program Flow Mechanism?** *[WBUT 2013]*

The Program-Flow Architecture is a Von Neumann or control flow computing model. Here a program is a series of addressable instructions, each of which either specifies an operation along with memory locations of the operands or it specifies conditional transfer of control to some other instruction.

**4. Use Bernstein's conditions for determining the maximum parallelism in the following sequence of instructions:** *[WBUT 2015]*
$$A = B \times C$$
$$B = D + E$$
$$C = A + B$$
$$E = F - D$$

Bernstein has elaborated the work of data dependency and derived some conditions based on which we can decide the parallelism of instructions or processes. Bernstein conditions are based on the following two sets of variables: i) The Read set or input set $R_i$ that consists of memory locations read by the statement of instruction $I_i$. ii) The Write set or output set $W_i$ that consists of memory locations written into by instruction $I_i$. The sets $R_i$ and $W_i$ are not disjoint as the same locations are used for reading and writing by $S_i$. The following are Bernstein Parallelism conditions which are used to determine whether statements are parallel or not:

1) Locations in $R_1$ from which $S_1$ reads and the locations $W_2$ onto which $S_2$ writes must be mutually exclusive. That means $S_1$ does not read from any memory location onto which $S_2$ writes. It can be denoted as: $R_1 \cap W_2 = \varphi$
2) Similarly, locations in $R_2$ from which $S_2$ reads and the locations $W_1$ onto which $S_1$ writes must be mutually exclusive. That means $S_2$ does not read from any memory location onto which $S_1$ writes. It can be denoted as: $R_2 \cap W_1 = \varphi$
3) The memory locations $W_1$ and $W_2$ onto which $S_1$ and $S_2$ write, should not be read by $S_1$ and $S_2$. That means $R_1$ and $R_2$ should be independent of $W_1$ and $W_2$. It can be denoted as: $W_1 \cap W_2 = \varphi$

To show the operation of Bernstein's conditions, consider the following instructions of sequential program:
- $I1:\ A = B \times C$
- $I2:\ B = D + E$
- $I3:\ C = A + B$
- $I4:\ E = F - D$

Now, the read set and write set of $I1$, $I2$, $I3$ and $I4$ are as follows:

| Read set | Write set |
|---|---|
| $R1 = \{B, C\}$ | $W1 = \{A\}$ |
| $R2 = \{D, E\}$ | $W2 = \{B\}$ |
| $R3 = \{A, B\}$ | $W3 = \{C\}$ |
| $R4 = \{F, D\}$ | $W4 = \{E\}$ |

Now let us find out whether $I1$ and $I2$ are parallel or not:
$$R1 \cap W2 \ne \varphi$$
$$R2 \cap W1 = \varphi$$
$$W1 \cap W2 = \varphi$$
That means $I1$ and $I2$ are not independent of each other.

Similarly for $I1 \parallel I3$,
$$R1 \cap W3 \ne \varphi$$
$$R3 \cap W1 \ne \varphi$$
$$W1 \cap W3 = \varphi$$
Hence $I1$ and $I3$ are not independent of each other.

Similarly for $I1 \parallel I4$,
$$R1 \cap W4 = \varphi$$
$$R4 \cap W1 = \varphi$$
$$W1 \cap W4 = \varphi$$
Hence $I1$ and $I4$ are independent of each other.

For $I2 \parallel I3$,
$$R2 \cap W3 = \varphi$$
$$R3 \cap W2 \ne \varphi$$
$$W2 \cap W3 = \varphi$$
Hence $I2$ and $I3$ are not independent of each other.

For $I2 \parallel I4$,
$$R2 \cap W4 \ne \varphi$$
$$R4 \cap W2 = \varphi$$
$$W2 \cap W4 = \varphi$$
Hence $I2$ and $I4$ are not independent of each other.

For $I3 \parallel I4$,
$$R3 \cap W4 = \varphi$$
$$R4 \cap W3 = \varphi$$
$$W3 \cap W4 = \varphi$$
Hence $I3$ and $I4$ are independent of each other.

**5. Design $2^2 \times 3^2$ Delta network.** *[WBUT 2015]*

**$2^2 \times 3^2$ Delta network** `[diagram]`: A two-stage delta network. The first stage has two $2\times2$ switch modules (each labelled with inputs `0,1` and outputs `0,1`). The second stage has three $2\times3$-style switch modules (each labelled with outputs `0,1,2`), feeding nine output lines grouped as `00,01,02 / 10,11,12 / 20,21,22`. Fixed inter-stage links connect the first-stage outputs to the second-stage inputs in the delta-network pattern.

**6. What is the difference between centralized shared memory and distributed shared memory?** *[WBUT 2016]*

**Answer:** Refer to Question No. 3 of Long Answer Type Questions.

**7. Explain the C-access and S-access memory organizations for vector accesses.** *[WBUT 2018]*

**Answer:** Refer to Question No. 2 (1st Part) of Long Answer Type Questions.

---

## Long Answer Type Questions

**1. What is the basic objective of data flow architecture? Compare it with control flow architecture.** *[WBUT 2005, 2015]*

The data flow computers are based on a data driven mechanism. Considering the operation of a conventional von Neumann machine, the fundamental difference is that instruction execution in a conventional computer is under program-flow control, whereas that in a data flow computer is driven by the data (operand) availability. There are three basic issues towards the development of an ideal architecture for future computers. The first is to achieve a high performance/cost ratio; the second is to match the ratio with technological progress; and the third is to offer better programmability in application areas. The data flow model offers an approach to meet these demands.

The control flow computers are either uniprocessor or parallel processors architecture. In uniprocessor system the instructions are executed sequentially and this is called control driven mechanism. In parallel processors system control flow computers use shared memory. So, parallel executed instructions may cause side effects on other instructions and data due to shared memory. In control flow computer the sequence of execution of instructions is controlled by program counter register.

Shared memory cells are the means by which data is passed between instructions. Data (operands) are referenced by their memory addresses (variables). In the traditional sequential control flow model, there is a single thread of control, which is passed from instruction to instruction. There is more than one thread of control to be active at an instant and provide means for synchronizing these threads.

**2. Describe different access methods of the memory system? What will be the maximum capacity of a memory, which uses an address bus of size 8 bit?** *[WBUT 2005, 2008, 2013]*

**1st Part:**
There are two types of memory access, i.e. C-access and S-access memory organization.

**C-access memory organizations:** There are more than one modules can share a memory bank. It increases the bank utilization and reducing the bank cost. The low order $m$ bit memory addresses are used to select the module and remaining $(n-m)$ bits address the desired element within the module. The effectiveness of this memory configuration is revealed by its ability to access the elements of a vector. The vector access scheme from interleaved memory modules is used as $m$-way low-order interleaved memory structure where it allows $m$ memory words to be accessed concurrently.

**C-Access Memory Organization** `[diagram]`: The memory address is split into a high-order **Word** field ($b$ bits) and a low-order **Module** field ($a$ bits). An **Address decoder** drives a row of module-address buffers (MAB) for modules $M0, M1, \ldots$ Each module column holds words ($0, m, \ldots, m(w-1)$ for $M0$; $1, m+1, \ldots, mw-m+1$ for $M1$; up to $2m-1, \ldots, mw-1$ for the last module), each module having a memory-data buffer (MDB). A **Word address buffer (WAB)** and a shared **Data bus** connect the module outputs.

**S-access memory organizations:** In s-access memory organizations, it is similar to the low-order interleaved memory structure. The high order bits select modules and the words from modules are latched at the same time. The low order bits select words from data latches. This is done through the multiplexer with higher speeds (minor cycles). This type of organization allows simultaneous access of memory.

**S-Access Memory Organization** `[diagram]`: The timeline is split into a **Fetch cycle** followed by an **Access cycle**. The $(n-a)$ high-order address bits and a Read/write signal drive Modules $0, 1, \ldots, m1$ in parallel; each module output goes to a **Data Latch**. The latched words feed a **Multiplexer**, selected by the low-order address bits, producing **Single word access**.

**2nd Part:**
The maximum capacity of a memory, which uses an address bus of size 8 bit is $2^8 = 256$ bytes.

**3. Compare between centralized and distributed shared memory architecture. Which is the best architecture among them and why?** *[WBUT 2007]*

Shared memory systems form a major category of multiprocessors. In this category, all processors share a global memory. Communication between tasks running on different processors is performed through writing to and reading from the global memory. All inter-processor coordination and synchronization are also accomplished via the global memory. A shared memory computer system consists of a set of independent processors, a set of memory modules, and an interconnection network. Two main problems need to be addressed when designing a shared memory system: performance degradation due to contention, and coherence problems. Performance degradation might happen when multiple processors are trying to access the shared memory simultaneously. A typical design might use caches to solve the contention problem. However, having multiple copies of data, spread throughout the caches, might lead to a coherence problem. The copies in the caches are coherent if they all equal the same value. But, if one of the processors writes over the value of one of the copies, then the copy becomes inconsistent because it no longer equals the value of the other copies. In this chapter we study a variety of shared memory systems and their solutions of the cache coherence problem. The aspects studied include Uniform Memory Access (UMA), Non-uniform memory access (NUMA), Cache-only memory Architecture (COMA), Bus Based Symmetric Multiprocessors, Basic Cache Coherency Methods, Snooping Protocols, Directory Based Protocols, and Shared Memory Programming.

To support larger processor counts, memory must be distributed among the processors rather than centralized; otherwise the memory system would not be able to support the bandwidth demands of a larger number of processors without incurring excessively long access latency. With the rapid increase in processor performance and the associated increase in a processor's memory bandwidth requirements, the scale of multiprocessor for which distributed memory is preferred over a single, centralized memory continues to decrease in number (which is another reason not to use small and large scale). Of course, the larger number of processors raises the need for a high bandwidth interconnects. Both direct interconnection networks (i.e., switches) and indirect networks (typically multidimensional meshes) are used. So, we can say that distributed shared memory architecture is better than centralized memory architecture.

**4. a) What do you mean by multiprocessor system? What are the similarities and dissimilarities between the multiprocessor system and multiple computer system?** *[WBUT 2010, 2015]*
**OR, What is multi-processor system? Classify it with examples.**
**OR, Differentiate between multiprocessors and multi computers based on their structures, resource sharing and inter processor communication.** *[WBUT 2019]*

**1st part:**
A multiple processor system consists of two or more processors that are connected in a manner that allows them to share the simultaneous (parallel) execution of a given computational task. Parallel processing has been advocated as a promising approach for building high-performance computer systems. Two basic requirements are inevitable for the efficient use of the employed processors. These requirements are (1) low communication overhead among processors while executing a given task and (2) a degree of inherent parallelism in the task. A number of communication styles exist for multiple processor networks. These can be broadly classified according to (1) the communication model (CM) or (2) the physical connection (PC). According to the CM, networks can be further classified as (1) multiple processors (single address space or shared memory computation) or (2) multiple computers (multiple address space or message passing computation). According to PC, networks can be further classified as (1) bus-based or (2) network-based multiple processors.

**2nd part:**
In a multiprocessors system all CPUs share a common physical memory, as illustrated in the figure below. A system based on shared memory, like this one, is called a multiprocessor or sometimes just a shared memory system.

**A multiprocessor with 16 CPUs sharing a common memory** `[diagram]`: Sixteen processor blocks (`P`) arranged around the edges of a square, all connecting to a central **Shared memory** block.

The multiprocessor model extends into software. All processes working together on a multiprocessor can share a single virtual address space mapped onto the common memory. Any process can read or write a word of memory by just executing a LOAD or STORE instruction. Nothing else is needed. Two processes can communicate by simply having one of them write data to memory and having the other one read them back. Each of the 16 CPUs runs a single process, which has been assigned one of the 16 sections to analyze. Some examples are the Sun Enterprise 10000, Sequent NUMA-Q, SGI Origin 2000, and HP/Convex Exemplar.

In multicomputer design for a parallel architecture is one in which each CPU has its own private memory, accessible only to itself and not to any other CPU. Such a design is called a multicomputer or sometimes a distributed memory system and is illustrated in the figure below. Multicomputers are frequently loosely coupled. The key aspect of a multicomputer that distinguishes it from a multiprocessor is that each CPU in a multicomputer has its own private, local memory that it can access by just executing LOAD and STORE instructions, but which no other CPU can access using LOAD and STORE instructions. Thus multiprocessors have a single physical address space shared by all the CPUs whereas multicomputers have one physical address space per CPU.

**A multicomputer with 16 CPUs, each with its own private memory** `[diagram]`: Sixteen processor blocks (`P`), each paired with its own private **Memory** block (`M`), arranged around the edges of a square and connected to a central **Message-passing interconnection network**.

Since the CPUs on a multicomputer cannot communicate by just reading and writing the common memory, they need a different communication mechanism. Examples of multicomputers include the IBM SP/2, Intel/Sandia Option Red, and the Wisconsin COW (Cluster of Workstations).

**4. b) What are the different architectural models for multiprocessors? Explain each of them with example.** *[WBUT 2010]*
**OR, What is a fundamental difference in Interprocessor coordination mechanism between multiprocessor & multicomputer systems? Explain with reference to their architectural differences.** *[WBUT 2013]*

There are two different architectural models of multiprocessor system. First we discuss about centralized shared-memory architectures. For multiprocessors with small processor counts, it is possible for the processors to share a single centralized memory and to interconnect the processors and memory by a bus. With large caches, the bus and the single memory, possibly with multiple banks, can satisfy the memory demands of a small number of processors. By replacing a single bus with multiple buses, or even a switch, a centralized shared memory design can be scaled to a few dozen processors. Although scaling beyond that is technically conceivable, sharing a centralized memory, even one organized as multiple banks, becomes less attractive as the number of processors sharing it increases. Because there is a single main memory that has a symmetric relationship to all processors and a uniform access time from any processor, these multiprocessors are often called symmetric (shared-memory) multiprocessors (SMPs), and this style of architecture is sometimes called UMA (uniform memory access). This type of centralized shared-memory architecture is currently by far the most popular organization.

**Basic structure of a centralized shared-memory multiprocessor** `[diagram]`: Four **Processor** blocks across the top, each connected to its own **One or more levels of cache** block; all caches share a bus connecting to **Main memory** and an **I/O system**.

The second group consists of multiprocessors with physically distributed memory. To support larger processor counts, memory must be distributed among the processors rather than centralized; otherwise the memory system would not be able to support the bandwidth demands of a larger number of processors without incurring excessively long access latency. With the rapid increase in processor performance and the associated increase in a processor's memory bandwidth requirements, the scale of multiprocessor for which distributed memory is preferred over a single, centralized memory continues to decrease in number (which is another reason not to use small and large scale). Of course, the larger number of processors raises the need for a high bandwidth interconnects. Both direct interconnection networks (i.e., switches) and indirect networks (typically multidimensional meshes) are used. Figure below shows what these multiprocessors look like.

**The basic architecture of a distributed-memory multiprocessor** `[diagram]`: Multiple nodes connected by a central **Interconnection network**. Each node consists of a **Processor + cache** circle attached to a local **Memory** block and an **I/O** block.

The basic architecture of a distributed-memory multiprocessor consists of individual nodes containing a processor, some memory, typically some I/O, and an interface to an interconnection network that connects all the nodes. Individual nodes may contain a small number of processors, which may be interconnected by a small bus or a different interconnection technology, which is less scalable than the global interconnection network. Distributing the memory among the nodes has two major benefits. First, it is a cost-effective way to scale the memory bandwidth, if most of the accesses are to the local memory in the node. Second, it reduces the latency for accesses to the local memory. These two advantages make distributed memory attractive at smaller processor counts as processors get ever faster and require more memory bandwidth and lower memory latency. The key disadvantage for distributed memory architecture is that communicating data between processors becomes somewhat more complex and has higher latency, at least when there is no contention, because the processors no longer share a single centralized memory. As we will see shortly, the use of distributed memory leads to two different paradigms for interprocess communication.

**4. c) Distinguish between loosely coupled and tightly coupled multiprocessor architectures. Which architecture is better and why?** *[WBUT 2010]*
**OR, What are the differences between loosely coupled and tightly coupled architectures?** *[WBUT 2017]*

In many cases, each processor executes a different process. A process is a segment of code that may be run independently, and that the state of the process contains all the information necessary to execute that program on a processor. In a multiprogrammed environment, where the processors may be running independent tasks, each process is typically independent of the processes on other processors. MIMD computers with shared memory are known as tightly coupled machines. Examples are ENCORE, MULTIMAX. Tightly-coupled multiprocessor systems contain multiple CPUs that are connected at the bus level. These CPUs may have access to a central shared memory (SMP or UMA), or may participate in a memory hierarchy with both local and shared memory (NUMA).

MIMD computers with an interconnection network are known as loosely coupled machines. Examples are INTEL iPSC, NCUBE/7. Loosely-coupled multiprocessor systems referred to as clusters are based on multiple standalone single or dual processor commodity computers interconnected via a high speed communication system. A Linux Beowulf cluster is an example of a loosely-coupled system.

Tightly-coupled systems perform better and are physically smaller than loosely-coupled systems, but have historically required greater initial investments and may deflate rapidly; nodes in a loosely-coupled system are usually inexpensive commodity computers and can be recycled as independent machines upon retirement from the cluster.

**5. What are the common data routing functions among the Processing Elements and how are they implemented? Explain the main factors that can influence performance of interconnection networks. What are the different types of Multi-stage interconnection networks?** *[WBUT 2011]*
**OR, What is the significance of interconnection network in multiprocessor architecture?** *[WBUT 2014]*
**OR, Explain the main factors that can influence the performance of the interconnection networks.** *[WBUT 2018]*

There are some common data routing functions among the Processing Elements (PEs):

**Permutation:** If there are $n$ numbers of objects present, we can arrange a $n!$ connection between them. A permutation $\pi = (a_1, a_2, a_3)(a_4, a_5)$, where $a_1 \ldots a_5$ are nodes of the network. Then there is a bisection mapping $a_1 \to a_2$, $a_2 \to a_3$, $a_3 \to a_1$ and $a_4 \to a_5$, $a_5 \to a_4$ in a circular fashion.

**Perfect-Shuffle Routing Function:** This is one type of permutation function. Let us consider a function $x = \{a_n, a_{n-1} \ldots a_2, a_1\}$, then the perfect-shuffle routing function $P(x)$ is given below.
$$P(x) = \{a_{n-1}, \ldots, a_2, a_1, a_n\}$$
Where, $a_n, a_{n-1} \ldots a_2, a_1$ are the respective node address bit of the network. Let us consider an example, where $x = 110$. Then the function is $P(x) = 101$.

**Exchange Routing Function:** This Exchange Routing Function is also one type of permutation function. Suppose, for a given $x = \{a_n, a_{n-1}, \ldots, a_2, a_1\}$, the Exchange Routing Function is $E_i(x) = \{a_n, a_{n-1}, \ldots, \overline{a}_{n-i+1}, \ldots, a_2, a_1\}\ \forall\, i,\ 1 \le i \le n$.

**Butterfly Routing Function:** There is also another type of routing function is known as Butterfly Routing Function. Here for a given node with address bit, $x = \{a_n, a_{n-1} \ldots a_2, a_1\}$, the Butterfly Routing Function will be $B(x) = \{a_1, a_{n-1} \ldots a_2, a_n\}$.

Multistage interconnection networks are a class of high-speed computer networks usually composed of processing elements (PEs) on one end of the network and memory elements (MEs) on the other end, connected by switching elements (SEs). The switching elements themselves are usually connected to each other in stages, hence the name. Such networks include omega networks, delta networks and many other types. These are typically used in high-performance or parallel computing as a low-latency interconnection (though they could be implemented on top of a packet switching network). Though the network is typically used for routing purposes, it could also be used as a co-processor to the actual processors for such uses as sorting.

**Multistage Networks**
Crossbars switches have excellent performance scalability but poor cost scalability. Buses have excellent cost scalability, but poor performance scalability. Multistage interconnects strike a compromise between these extremes. A number of $p \times q$ switches present in every stage of this network. There is a fixed inter-stage connections present between the switches in adjacent stages as shown in the figure below.

**The schematic of a typical multistage interconnection network** `[diagram]`: Inputs $0, 1, \ldots, p-1$ enter on the left into **Stage 1**, **Stage 2**, …, **Stage n** of switch blocks, with fixed inter-stage links, producing outputs $0, 1, \ldots, p-1$ on the right.

**Multistage Omega Network**
One of the most commonly used multistage interconnects is the Omega network. This network consists of $\log p$ stages, where $p$ is the number of inputs/outputs. At each stage, input $i$ is connected to output $j$ if:
$$j = \begin{cases} 2i, & 0 \le i \le p/2 - 1 \\ 2i + 1 - p, & p/2 \le i \le p - 1 \end{cases}$$

Each stage of the Omega network implements a perfect shuffle as follows:

A complete Omega network with the perfect shuffle interconnects and switches can now be illustrated:
- Let $s$ be the binary representation of the source and $d$ be that of the destination processor.
- The data traverses the link to the first switching node. If the most significant bits of $s$ and $d$ are the same, then the data is routed in pass-through mode by the switch else, it switches to crossover.
- This process is repeated for each of the $\log p$ switching stages.

**A complete omega network connecting eight inputs and eight outputs** `[diagram]`: Eight inputs `000`–`111` on the left pass through three stages of $2\times2$ switches with perfect-shuffle interconnections, reaching eight outputs `000`–`111` on the right.

**6. Describe the different types of interconnection networks in computer systems. What is multistage switching networks?** *[WBUT 2013]*

In static networks, there are point-to-point connections between neighboring nodes. These networks typically are static, which implies that the point-to-point connections are fixed. Static networks use direct links which are fixed once built. This type of network is suitable for building computers where communication patterns are predictable. Well-known examples of static networks are linear array, rings, meshes, torus and cubes.

**Ring interconnection network** `[diagram, Fig 1]`: Sixteen nodes (numbered around the loop, e.g. $0, 1, 2, \ldots, 15$) connected in a closed ring, each node linked to its two neighbours.

Now we consider ring as a static interconnection network. Ring is obtained by connecting two terminal nodes of linear array with one extra link. In a linear array, each internal node has two neighbors, one to its left and one to its right. The ring is like the linear array, but the diameter of the network is cut in half if the links are bidirectional.

Dynamic networks are implemented with switched channels, which are dynamically configured to match communication demand in user program. Examples of dynamic interconnection network are Bus, Multistage switches, crossbar switch etc.

**Crossbar switches** `[diagram, Fig 2]`: An $N \times M$ grid with Source $0$–$3$ on rows and Destination $0$–$3$ on columns; a semiconductor switch (crosspoint, with a **Control**) sits at each intersection where an input wire and output wire cross.

Let us consider, crossbar switch as dynamic interconnection network. The crossbar switch corresponds to an $N \times M$ array. Semiconductor switches are located at each of the cross points where inputs and output wires cross. We connect an input to an output by closing a cross-point at the intersection of the appropriate row and column. The complexity of a crossbar has two cost components, one which grows in proportion to the number of inputs and outputs and the other that grows as their product. The product term is often called the cross-point count because it is directly related to the number of simple $2 \times 2$ cross-points required to implement it. A crossbar requires $N^2$ cross-points for $N$ pairs of terminals.

**7. What is multi-processor system? Classify it with examples.** *[WBUT 2015]*

**Answer:** Refer to Question No. 4(a) of Long Answer Type Questions.

**8. Construct a multiport network where three processing elements want to connect with three memory modules. Design a network where 9 inputs want to connect with 25 outputs. What is the difference between omega network and delta network? Construct an omega network for $N = 8$ where $N$ represent no. of processors.** *[WBUT 2016]*

**1st part:**
A multiport network where three processing elements want to connect with three memory modules:

**Multiport network (3 PE × 3 MU)** `[diagram]`: A crossbar grid with three processing elements PE1, PE2, PE3 on the rows and three memory units MU1, MU2, MU3 on the columns; a crosspoint switch (with **Control**) sits at each row–column intersection. ($PE$ = Processing Element, $MU$ = Memory Unit.)

**2nd part:**
A network where 9 inputs want to connect with 25 outputs:

**9 inputs and 25 outputs Delta network** `[diagram]`: A two-stage delta network. The first stage has three switch modules fed by inputs $0$–$8$; the second stage has five switch modules driving 25 outputs grouped as `00–04 / 10–14 / 20–24 / 30–34 / 40–44`, with fixed inter-stage links between the stages.

**3rd part — Difference between omega network and delta network:**
An $N \times N$ Omega network consists of $\log_2 N$ identical stages and between two stages there is a perfect shuffle interconnection. This network maintains a uniform connection pattern between stages. Every input terminal has a unique path to every output terminal.

In an $a^n \times b^n$ delta network, there are $a^n$ sources and $b^n$ destinations. There is a unique interconnection path of constant length between the stages of the network. Numbering the stages of the network as $1, 2, \ldots, n$, starting at the source side of the network requires that there be $a^{n-1}$ crossbar modules in the first stage.

**An omega network for $N = 8$ where $N$ represents no. of processors:**
One of the most commonly used multistage interconnects is the Omega network. This network consists of $\log p$ stages, where $p$ is the number of inputs/outputs. At each stage, input $i$ is connected to output $j$ if:
$$j = \begin{cases} 2i, & 0 \le i \le p/2 - 1 \\ 2i + 1 - p, & p/2 \le i \le p - 1 \end{cases}$$

Each stage of the Omega network implements a perfect shuffle as follows:

**A perfect shuffle interconnection for eight inputs and outputs** `[diagram, Fig 1]`. The mapping is:

| Input | Output (left_rotate of input) |
|---|---|
| 000 | 000 = left_rotate(000) |
| 001 | 001 = left_rotate(100) |
| 010 | 010 = left_rotate(001) |
| 011 | 011 = left_rotate(101) |
| 100 | 100 = left_rotate(010) |
| 101 | 101 = left_rotate(110) |
| 110 | 110 = left_rotate(011) |
| 111 | 111 = left_rotate(111) |

A complete Omega network with the perfect shuffle interconnects and switches can now be illustrated:
- Let $s$ be the binary representation of the source and $d$ be that of the destination processor.
- The data traverses the link to the first switching node. If the most significant bits of $s$ and $d$ are the same, then the data is routed in pass-through mode by the switch else, it switches to crossover.
- This process is repeated for each of the $\log p$ switching stages.

**A complete omega network connecting eight inputs and eight outputs** `[diagram, Fig 2]`: Eight inputs `000`–`111` routed through three stages of $2\times2$ switches with perfect-shuffle interconnections to eight outputs `000`–`111`.

**9. a) What are the differences between the static network and the dynamic network?**
**b) What do you mean by bisection width and diameter of a network?**
**c) Explain software parallelism and hardware parallelism.** *[WBUT 2018]*

**a)** Interconnection network provides connections between processing nodes in a parallel processing system. Interconnection networks can be classified as static or dynamic. A static network is a point-to-point network between processing nodes. A processing node is connected to another processing node without use of any external switching elements. Static interconnection network can be also referred as direct interconnection network. Dynamic interconnection networks are built by using switches and cables between processing elements. Network switches and connections form an interconnection network and the processing units are separate from the network. Dynamic networks are called as indirect networks. Dynamic interconnection networks have scalability features in general.

**b) Bisection width** — The minimum number of edges between switch nodes that must be removed in order to divide the network into two equal halves. The high bisection width is desirable.

**Diameter** — The diameter of the network means the largest distance between two switch nodes. A low diameter is desirable for interconnection network.

**c) Hardware Parallelism:** This refers to the type of parallelism defined by the machine architecture and hardware multiplicity. Hardware parallelism is a function of cost and performance tradeoffs. It displays the resource utilization patterns of simultaneously executable operations. It can also indicate the peak performance of the processors. One way to characterize the parallelism in a processor is by the number of instruction issues per machine cycle.

**Software Parallelism:** It is defined by the control and data dependence of programs. The degree of parallelism is revealed in the program profile or in the program flow graph. Software parallelism is a function of algorithm, programming style, and compiler optimization.

**10. With the help of neat sketches, explain the 10 subsystems in case of lightly coupled multiprocessor system.** *[WBUT 2019]* `[as printed: "lightly coupled"; the answer below describes the loosely coupled (distributed-memory) multiprocessor]`

A loosely coupled multiprocessor system is a type of multiprocessing where the individual processors are configured with their own memory and are capable of executing user and operating system instructions independent of each other. This type of architecture paves the way for parallel processing. Loosely coupled multiprocessor systems are connected via high-speed communication networks.

Loosely coupled multiprocessor systems are also known as distributed memory, as the processors do not share physical memory and have their own IO channels.

**Loosely Coupled Multiprocessor** `[diagram]`: Two (or more) nodes, each consisting of a **Memory** block feeding a **Processor** block, connected to a **Processor Processor Interconnection Network for Message Transfer**.

**Techopedia explains Loosely Coupled Multiprocessor System**
A multiprocessor system makes use of more than one CPU along with memory and IO channels. They are capable of processing multiple instruction, multiple data (MIMD) programming. Thus, they support concurrent operations. The configuration of processors in a multiprocessor system can be loosely coupled or tightly coupled. The major distinction between these two types of multiprocessors is the way memory is organized. Tightly coupled systems share a single memory space and share information through the shared common memory. Loosely coupled multiprocessors consist of distributed memory where each processor has its own memory and IO channels. The processors communicate with each other via message passing or interconnection switching. Each processor may also run a different operating system and have its own bus control logic.

Loosely coupled systems are less costly than tightly coupled systems, but are physically bigger and have a low performance compared to tightly coupled systems. The individual nodes in a loosely coupled system can be easily replaced and are usually inexpensive. Loosely coupled systems also draw more power than tightly coupled systems. Loosely coupled systems are more robust and can resist failures. A single node failure does not break down the entire system and it is also easy to add more nodes to an existing system. But the need for extra hardware required to provide communication between the individual processors makes them complex and less portable.

Some of the characteristics of loosely coupled multiprocessors are:

- Distributed memory
- High scalability
- Low data rate
- Low cost
- Static interconnection
- Capable of running multiple OSs
- Low throughput
- Increased space requirements
- High power consumption
- Reusable and flexible components

**11. Write short notes on the following:**
**a) Omega network** *[WBUT 2005, 2006, 2008]*
**b) Memory interleaving** *[WBUT 2010, 2014]*
**c) Multiprocessor computer** *[WBUT 2019]*

**a) Omega network:**
Refer to Question No. 8 (3rd Part) of Long Answer Type Questions.

**b) Memory interleaving:**
Interleaving is a technique used to improve the memory performance. Memory interleaving increases bandwidth by allowing simultaneous access of more than one chunk of memory. This improves the performance of the processor because it can transfer more information to/from memory in the same amount of time. It also helps to alleviate the processor-memory bottleneck that is a major limiting factor in overall performance.

Interleaving works by dividing the system memory into multiple blocks. If there are $m$ numbers of blocks then this is called the $m$-way memory interleaving. In general two-way or four-way interleaving technique is used. Each block of memory is accessed using different sets of control lines, which are merged together on the memory bus. When a read or write is begun to one block, a read or write to other blocks can be overlapped with the first one.

In an interleaved system, a main memory of size $2^l$ is divided into $m$ modules, where $m$ is a positive integer (usually, $m = 2^n$ for some integer $n$ such that $0 < n < l$, $l$ being the number of bits in a main memory address). Each main memory address is mapped to a module, and to an address within that module. Such a mapping is called a hashing scheme. Clearly, the mapping must be one-to-one.

**c) Multiprocessor computer:**
Refer to Question No. 4(a) of Long Answer Type Questions.

---

*End of Chapter 6: Interprocess Communication.*
