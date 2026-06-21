# Computer Architecture — Chapter 5: RISC & CISC Architectures

> **Source:** *Computer Architecture* organizer (MAKAUT/WBUT solved papers, Popular Publications), book pages CA-99 to CA-107.
> **Fidelity note for downstream readers (incl. LLMs):**
> - Concept summary and all multiple-choice questions/answers below were **verified against the scanned page images**, not just OCR.
> - **Answers are transcribed exactly as printed in the source.** Any printed answer that is debatable by standard results is flagged inline as `[as printed]`; the source's letter is kept authoritative.
> - In worked solutions, any step illegible on the scan is marked `[illegible in source]` rather than guessed. Math is rendered in LaTeX.

---

## Chapter at a Glance

- **Non von Neumann architecture characteristics:** A computer architecture in which the underlying model of computation is different from what has come to be called the standard von Neumann model. A non von Neumann machine may thus be without the concept of sequential flow of control (i.e. without any register corresponding to a "program counter" that indicates the current point that has been reached in execution of a program) and/or without the concept of a variable (i.e. without "named" storage locations in which a value may be stored and subsequently referenced or changed). Examples of non von Neumann machines are the dataflow machines and the reduction machines. In both of these cases there is a high degree of parallelism, and instead of variables there are immutable bindings between names and constant values.

- **Cluster Computer:** A cluster computer consists of a set of loosely connected computers that work together so that in many respects they can be viewed as a single system. The components of a cluster are usually connected to each other through fast local area networks, each node (computer used as a server) running its own instance of an operating system. Computer clusters emerged as a result of convergence of a number of computing trends including the availability of low cost microprocessors, high speed networks, and software for high performance distributed computing. Clusters are usually deployed to improve performance and availability over that of a single computer, while typically being much more cost-effective than single computers of comparable speed or availability. Computer clusters have a wide range of applicability and deployment, ranging from small business clusters with a handful of nodes to some of the fastest supercomputers in the world.

---

## Very Short Answer Type Questions

**1.** Overlapped register windows are used to speed-up procedure call and return in — *[WBUT 2007, 2011]*
a) RISC architectures   b) CISC architectures   c) both (a) and (b)   d) none of these
**Answer: (a)**

**2.** What is a main advantage of classical vector systems (VS) compared with RISC based systems (RS)? — *[WBUT 2008, 2009]*
a) VS have significantly higher memory bandwidth than RS   b) VS have higher clock rate than RS   c) VS are more parallel than RS   d) None of these
**Answer: (a)**

**3.** The advantage of RISC over CISC is that — *[WBUT 2011]*
a) RISC can achieve pipeline segments, requiring just one clock cycle
b) CISC uses many segments in its pipeline with the longest segment requiring two or more clock cycle
c) both (a) & (b)
d) none of these
**Answer: (d)** `[as printed]`

**4.** Which of the following is not RISC architecture characteristic? — *[WBUT 2012, 2018]*
a) simplified and unified format of code of instructions   b) no specialized register   c) no storage / storage instruction   d) small register file
**Answer: (d)**

**5.** Which of the following architectures correspond to von-Neumann architecture? — *[WBUT 2012]*
a) MISD   b) MIMD   c) SISD   d) SIMD
**Answer: (c)**

**6.** The CPI value for RISC processors is — *[WBUT 2015]*
a) 1   b) 2   c) 3   d) more
**Answer: (a)**

**7.** In which of the following shared memory multiprocessor models the time to access shared memory is same? — *[WBUT 2019]*
a) NORMA   b) COMA   c) UMA   d) NUMA
**Answer: (c)**

---

## Short Answer Type Questions

**1. Compare between RISC and CISC. / Compare RISC and CISC architecture in brief.** *[WBUT 2010, 2012, 2014, 2015, 2018, 2019]*

| Characteristics | CISC | RISC |
| --- | --- | --- |
| Instruction set size and instruction formats | Instruction set is very large and instruction format is variable (16 – 64 bit per instruction) | Instruction set is small and instruction format is fixed. |
| Addressing mode | 12 – 24 | 3 – 5 |
| General purpose registers and cache design | 8-24 general purpose registers present. Unified cache is used for instruction and data | Though most instructions are register base so large numbers of registers (32 – 192) are used and cache is split in data cache and instruction cache. |
| CPI | CPI is between 2 to 15 | In most cases CPI is 1 but average CPI is less than 1.5 |
| CPU control | CPU is controlled by control memory (ROM) using microprograms. | CPU is controlled by hardware without control memory |

**2. What are multiprocessor, multi-computer and multi-core systems?** *[WBUT 2012, 2014]*

- **Multiprocessor system:** There are more than one processor that works simultaneously. In this system there is one master processor and the others are the slaves. If one processor fails then the master can assign the task to another slave processor. But if the master fails then the entire system will fail. The central part of a multiprocessor is the master. All of them share the hard disk, memory and other devices.
- **Multicomputer system:** A system consisting of more than one computer, usually under the supervision of a master computer, in which smaller processors handle input/output and routine jobs while the large computer carries out the more complex computations.
- **Multi-core processor:** A single computing component with two or more independent actual central processing units (called "cores"), which are the units that read and execute program instructions. The instructions are ordinary CPU instructions such as add, move data, and branch, but the multiple cores can run multiple instructions at the same time, increasing overall speed for programs amenable to parallel computing. Manufacturers typically integrate the cores onto a single integrated circuit die or onto multiple dies in a single chip package.

**3. What is Von-Neumann architecture? What is a Von-Neumann bottleneck? How can this be reduced?** *[as printed]*

Von Neumann architecture was first published by John von Neumann. The computer architecture design consists of a Control Unit, Arithmetic and Logic Unit (ALU), Memory Unit, Registers and Inputs/Outputs. Von Neumann architecture is based on the stored-program computer concept, where instruction data and program data are stored in the same memory. This design is still used in most computers produced today.

The Central Processing Unit (CPU) is the electronic circuit responsible for executing the instructions of a computer program. It is sometimes referred to as the microprocessor. The CPU contains the ALU, CU and a variety of registers. Registers are high-speed storage areas in the CPU. All data must be stored in a register before it can be processed. The Arithmetic and Logic Unit (ALU) allows arithmetic (add, subtract etc.) and logic (AND, OR, NOT etc.) operations to be carried out. The control unit controls the operation of the computer's ALU, memory and input/output devices, telling them how to respond to the program instructions it has just read and interpreted from the memory unit. The control unit also provides the timing and control signals required by other computer components. Buses are the means by which data is transmitted from one part of a computer to another, connecting all major internal components to the CPU and memory. A standard CPU system bus is comprised of a control bus, data bus and address bus.

*[diagram]* Block diagram of the von Neumann architecture: an Input Device and an Output Device flank a central "Central Processing Unit" block containing the Control Unit, the Arithmetic/Logic Unit, and Registers; a Memory Unit connects to the CPU.

**Von Neumann bottleneck:** The shared single bus between the CPU and memory, over which both instructions and data must travel, limits throughput because the CPU often has to wait for data/instructions to come to it for processing. This problem can be solved in two ways:

1. Use of cache memory between CPU and main memory.
2. Using RISC computers.

The performance problem can be reduced by introducing a cache memory (a special type of fast memory) in between the CPU and the main memory. This is because the speed of the cache memory is almost same as that of the CPU. So there is no waiting time for the CPU. Another way of solving the problem is by a special type of computer known as Reduced Instruction Set Computers (RISC). The main intention of the RISC is to reduce the total number of memory references made by the CPU; instead it uses a large number of registers for the same purpose.

---

## Long Answer Type Questions

**1. a) What is SPEC rating? Explain.**
**b) A 50 MHz processor was used to execute a program with the following instruction mix and clock cycle counts:** *[WBUT 2015]*

| Instruction type | Instruction count | Clock cycle count |
| --- | --- | --- |
| Integer arithmetic | 50000 | 1 |
| Data transfer | 35000 | 2 |
| Floating point arithmetic | 20000 | 2 |
| Branch | 6000 | 3 |

**Calculate the effective CPI, MIPS rate and execution time for this program.**

**a)** The Standard Performance Evaluation Corporation (SPEC) is an American non-profit organization that aims to "produce, establish, maintain and endorse a standardized set" of performance benchmarks for computers. SPEC was founded in 1988. SPEC benchmarks are widely used to evaluate the performance of computer systems; the test results are published on the SPEC website. Results are sometimes informally referred to as "SPECmarks" or just "SPEC". SPEC evolved into an umbrella organization encompassing four diverse groups: the Graphics and Workstation Performance Group (GWPG), the High Performance Group (HPG), the Open Systems Group (OSG) and the newest, the Research Group (RG).

**b)** Total instruction count $= 50000 + 35000 + 20000 + 6000 = 111000$.

$$\text{CPI} = \frac{50000 \times 1 + 35000 \times 2 + 20000 \times 2 + 6000 \times 3}{111000} = 1.6$$

$$\text{MIPS} = \frac{\text{clock frequency}}{\text{CPI} \times 1000000} = \frac{50 \times 1000000}{1.6 \times 1000000} = 31.25$$

$$\text{Execution time} = \text{CPI} \times \text{Instruction count} \times \text{Clock time} = 1.6 \times 111000 \times \frac{1}{50 \times 1000000} = 0.003\ \text{ms}$$

**2. a) Explain different types of addressing modes?**
**b) What are the advantages of Relative addressing mode over Direct addressing mode?** *[WBUT 2017]*

**a)** The term addressing modes refers to the way in which the operand of an instruction is specified. Information contained in the instruction code is the value of the operand or the address of the result/operand. Following are the main addressing modes that are used on various platforms and architectures:

1. **Immediate Mode:** The operand is an immediate value and is stored explicitly in the instruction.
2. **Index Mode:** The address of the operand is obtained by adding to the contents of the general register (called index register) a constant value. The number of the index register and the constant value are included in the instruction code.
3. **Indirect Mode:** The effective address of the operand is the contents of a register or main memory location, whose address appears in the instruction. Indirection is noted by placing the name of the register or the memory address given in the instruction in parentheses. The register or memory location that contains the address of the operand is a pointer. When an execution takes place in such mode, the instruction may be told to go to a specific address.
4. **Direct Mode:** The address of the operand is embedded in the instruction code.
5. **Register Mode:** The name of the CPU register is embedded in the instruction. The register contains the value of the operand. The number of bits used to specify the register depends on the total number of registers from the processor set.

**b) Relative Addressing Mode:** In this mode, the content of the program counter (PC) is added to the address part of the instruction to obtain the effective address. When the number is added to the content of the PC, the result is an effective address whose position in memory is relative to the address of the next instruction.

$$\text{Effective Address (EA)} = \text{PC} + A$$

**Direct Addressing Mode:** In this mode, the address of the memory location which holds the operand is included in the instruction. The operand resides in memory and its address is given by the address field of the instruction.

For example: `LDA 4000H`

*[diagram]* The instruction is shown split into an Opcode field and an Address field; the Address field (4000H) points into Memory to the stored Operand.

**Advantage:** Simple and provides more flexibility, compared to immediate mode.

**Disadvantage:** Limited address field.

**3. Write short notes on the following:**
**a) Power PC** *[WBUT 2007, 2010]*
**b) Non von Neumann architecture characteristics** *[WBUT 2012, 2019]* `[as printed]`
**c) Cluster Computer** *[WBUT 2012, 2019]* `[as printed]`
**d) RISC** *[WBUT 2010]* `[as printed]`

**a) Power PC:**

The PowerPC microprocessor is a highly integrated single-chip processor that offers a powerful RISC architecture, a superscalar machine organization, and a flexible bus interface. The processor contains a 32KB unified cache and is capable of dispatching, executing, and completing up to 3 instructions per cycle. The bus interface controller supports a wide range of system bus interfaces, including pipelined, non-pipelined, and split-transactions. The result is a cost effective, general purpose microprocessor solution that offers very competitive performance.

*[diagram]* Block diagram "Power PC Architecture": an Instruction Queue and Dispatch Logic block feeds a Sequencer, a Fixed-Point Unit and a Floating-Point Unit; an Instruction Fetch unit and a Memory Management Unit connect to a Branch Unit, Cache Tags and a 32KB Cache Array; a Memory Queue and Bus Interface Unit drive the Address, Data and COP buses. Bus widths shown include 32-bit, 64-bit and 256-bit paths.

As shown in the above figure, it is a superscalar design with three pipelined execution units. The processor can dispatch up to three 32-bit instructions each cycle — one each to the Fixed-Point Unit (FXU), the Floating-Point Unit (FPU), and the branch unit (BPU). The 32KB unified cache provides a 32-bit interface to the FXU, a 64-bit interface to the FPU, and a 256-bit interface to both the instruction queue and the memory queue. The chip I/Os include a 32-bit address bus and a 64-bit data bus. The designers optimized the 601 pipeline structure for high performance and concurrent instruction processing in each of the execution units as shown below.

- The fixed-point pipeline performs all integer arithmetic logic unit (ALU) operations and all processor load and store instructions, including floating-point loads and stores.
- The branch instruction pipeline has only two stages. The first stage can dispatch, decode, evaluate, and, if necessary, predict the direction of a branch instruction in one cycle. On the next cycle, the resulting fetch can be accessing new instructions from the cache.
- The floating-point instruction pipeline contains six stages and has been optimized for fully pipelined execution of single-precision operations.

*[diagram]* "PowerPC 601 pipeline Architecture": pipeline stage charts for four instruction classes —
Branch: Fetch, Dispatch/Decode, Predict, Execute;
Integer instructions: Fetch, Dispatch, Decode, Execute, Writeback;
Load/Store instructions: Fetch, Dispatch, Decode, Address Gen., Cache, Writeback;
Floating-Point: Fetch, Dispatch, Decode, Execute1, Execute2, Writeback.

**b) Non von Neumann architecture characteristics:**

A computer architecture in which the underlying model of computation is different from what has come to be called the standard von Neumann model. A non von Neumann machine may thus be without the concept of sequential flow of control (i.e. without any register corresponding to a "program counter" that indicates the current point that has been reached in execution of a program) and/or without the concept of a variable (i.e. without "named" storage locations in which a value may be stored and subsequently referenced or changed). Examples of non von Neumann machines are the dataflow machines and the reduction machines. In both of these cases there is a high degree of parallelism, and instead of variables there are immutable bindings between names and constant values.

**c) Cluster Computer:**

A cluster computer consists of a set of loosely connected computers that work together so that in many respects they can be viewed as a single system. Clusters may be configured for different purposes ranging from general business needs such as web-service support, to computation-intensive scientific calculations. In either case, the cluster may use a high-availability approach. Note that the approaches described below are not exclusive and a "compute cluster" may also use a high-availability approach, etc.

"Load-balancing" clusters are configurations in which cluster-nodes share computational workload to provide better overall performance. For example, a web server cluster may assign different queries to different nodes, so the overall response time will be optimized. However, approaches to load-balancing may significantly differ among applications, e.g. a high-performance cluster used for scientific computations would balance load with different algorithms from a web-server cluster, which may just use a simple round-robin method by assigning each new request to a different node.

**d) RISC:**

RISC, or Reduced Instruction Set Computer, is a type of microprocessor architecture that utilizes a small, highly-optimized set of instructions, rather than a more specialized set of instructions often found in other types of architectures. The first RISC projects came from IBM, Stanford, and UC-Berkeley in the late 70s and early 80s. The IBM 801, Stanford MIPS, and Berkeley RISC 1 and 2 were all designed with a similar philosophy which has become known as RISC. Certain design features have been characteristic of most RISC processors:

- **One cycle execution time:** RISC processors have a CPI (clock per instruction) of one cycle. This is due to the optimization of each instruction on the CPU and a technique called pipelining.
- **Pipelining:** a technique that allows for simultaneous execution of parts, or stages, of instructions to more efficiently process instructions.
- **Large number of registers:** the RISC design philosophy generally incorporates a larger number of registers to prevent large amounts of interactions with memory.

**Characteristics of RISC:**

- Simpler instruction, hence simple instruction decoding.
- Instructions come under size of one word.
- Instructions take single clock cycle to get executed.
- More number of general purpose registers.
- Simple Addressing Modes.
- Less Data types.
- Pipeline can be achieved.

---

*End of Chapter 5.*
