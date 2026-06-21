# Computer Architecture — MASTER NOTE

> **Subject:** Computer Architecture | **Code:** PCC-CS402 (old code CS-403) | **Exam:** Tue 30 June 2026 | **Full Marks:** 70 | **Time:** 3 hours
> **Target:** 9+ SGPA. Built from MAKAUT/WBUT PYQs 2012–2023 + the 6 organizer chapters. **Priority order: PYQs > Organizer > Textbook.**

## How the paper is set (MAKAUT pattern)

| Group | Type | Answer | Marks | Choice |
|-------|------|--------|-------|--------|
| **A** | MCQ / very short (fill-blank, 1-liner) | **10** | 1 × 10 = **10** | any 10 of 12 |
| **B** | Short answer | **3** | 5 × 3 = **15** | any 3 of 5 |
| **C** | Long answer | **3** | 15 × 3 = **45** | any 3 of 5–6 |

**Total = 70.** You get a LOT of choice in B and C — you only need 3 of 5. Strategy: master the high-frequency topics deeply, and you can skip whole low-yield areas.

---

## CHAPTER WEIGHTAGE MAP (from 9 PYQ papers: 2012–2019 + 2022-23)

| # | Chapter | MCQ | Short (B) | Long (C) | Priority |
|---|---------|-----|-----------|----------|----------|
| 1 | **Pipeline Architecture** (hazards, speedup, reservation table, branch) | Very High | Very High | **Very High** (reservation-table numerical nearly every year) | ⭐⭐⭐⭐⭐ |
| 2 | **Memory** (cache mapping, coherence, virtual memory, miss penalty) | Very High | Very High | **Very High** | ⭐⭐⭐⭐⭐ |
| 4 | **Flynn's Taxonomy** + parallelism + CPI/MIPS numericals | High | High | High | ⭐⭐⭐⭐⭐ |
| 6 | **Interprocess Comm.** (multiprocessor/multicomputer, UMA/NUMA, interconnection, omega/delta) | High | High | High | ⭐⭐⭐⭐ |
| 5 | **RISC vs CISC** + addressing modes + Von Neumann | Medium | High | Medium | ⭐⭐⭐⭐ |
| 3 | **Vector Processor** (stride, chaining, superscalar/VLIW) | Medium | High | Medium | ⭐⭐⭐⭐ |
| — | **Fundamentals** (n-address instr, CPU performance/CPI, Amdahl, control unit, data-flow) | High | Medium | High | ⭐⭐⭐⭐ |

**Recurring numericals (learn the method cold):** ① 4-stage pipeline speedup n=64 ② Reservation table → forbidden latency → collision vector → state diagram → MAL → throughput ③ Cache average access time (hit ratio) ④ CPI / MIPS / execution time from instruction mix ⑤ Amdahl's law ⑥ Virtual memory pages/frames/TLB effective access time ⑦ Cache field split (tag/set/word) & set mapping ⑧ Pipeline stage delay + latch → clock/speedup.

---
---

# CHAPTER 1 — PIPELINE ARCHITECTURE ⭐⭐⭐⭐⭐

## 1.1 What is a pipeline (zero-knowledge start)

**Pipeline = an implementation technique where multiple instructions are overlapped in execution.** Split one instruction's processing into independent steps called **stages** (pipe stages / segments). Each stage does part of the work and passes its result to the next. All stages run at once on different instructions — like a car-factory assembly line.

- A **pipeline stage** is made of **both sequential and combinational circuits** (combinational logic does the work; a sequential latch/register at the end holds the result). ★ This exact MCQ appears almost every year — answer **(c) both**.
- The **clock period** = time of the **slowest stage** (+ latch delay). So we want stages **balanced** (equal time).
- Classic 5-stage instruction pipeline: **IF → ID → EX → MEM → WB** (Instruction Fetch, Decode/register read, Execute, Memory access, Write Back). Some books use **IF → ID → OF → IE → WB** (OF=operand fetch).

```
        Time →
I1  IF  ID  EX  MEM WB
I2      IF  ID  EX  MEM WB
I3          IF  ID  EX  MEM WB
I4              IF  ID  EX  MEM WB
I5                  IF  ID  EX  MEM WB
```
*Space-time (Gantt) diagram — each instruction shifted one clock right.*

**Pipelining uses temporal parallelism.** (Note: the organizer once printed "data parallelism", but the standard MAKAUT answer is **temporal parallelism** — 2016 paper option b.)

## 1.2 Key formulas & derivations (HIGH-VALUE — memorize)

Let **k** = stages, **n** = instructions/tasks, **t** = clock period.

**Total time on pipeline:** $T_k = [\,k + (n-1)\,]\,t$  (k cycles to fill+finish 1st task, then 1 cycle each for the remaining n−1).

**Total time non-pipelined:** $n \cdot k \cdot t$.

**SPEEDUP** (derive — asked repeatedly):
$$S_k = \frac{n \cdot k \cdot t}{[k+(n-1)]\,t} = \frac{n\,k}{k+(n-1)}$$

**Maximum speedup:** as $n \gg k$, $S_k \to k$. ⇒ **Max speedup of a k-stage pipeline = k = number of stages.** ("Prove speedup = pipeline depth.") ★★★★★

> Max speedup is never fully reached: data dependencies, branches, interrupts, unbalanced stages → stalls.

**EFFICIENCY:** $E_k = S_k / k$ (ideal → 1).
**THROUGHPUT:** $U = \dfrac{n}{[k+(n-1)]\,t}$, or with frequency f: $U = \dfrac{n\,f}{k+(n-1)}$.

**Stage-delay + latch version:** clock period = (max stage delay + latch delay); speedup ≈ (non-pipeline time per instr)/(pipeline clock period).

### Memory trick
"**k + n − 1**" for time; numerator of speedup = **n·k**; efficiency = S/k.

### Common mistakes
- Using $n\cdot k$ for pipeline time (that's NON-pipeline). Pipeline = k+(n−1).
- Forgetting latch delay when stage delays are given.
- Confusing efficiency (S/k) with throughput.

## 1.3 Pipeline Hazards (⭐⭐⭐⭐⭐ — guaranteed)

**Hazard = a situation that prevents the next instruction executing in its allotted clock cycle**, reducing ideal speedup. Three types.

### (a) Data Hazards — same operand accessed out of order
| Hazard | Meaning | Possible? |
|--------|---------|-----------|
| **RAW** (Read After Write) | next reads source **before** prev writes → gets old value (**true dependency, most common**) | Yes |
| **WAR** (Write After Read) | next writes dest **before** prev reads it | Yes |
| **WAW** (Write After Write) | two writes finish out of order | Yes |
| **RAR** (Read After Read) | both only read | **NOT a hazard** |

★ MCQ every year: "Which is **not** a data hazard?" → **RAR**. ★ "WAR occurs if $D(I)\cap R(J)\ne\varnothing$."

**Detection & prevention:** **forwarding/bypassing (internal forwarding)** (route ALU result straight to next instr), **stall/bubble** (insert NOPs), **register tagging**, **compiler instruction reordering**.

### (b) Structural Hazards — resource clash
Two instructions need the **same hardware** in one cycle (one memory port, one ALU). Fix: duplicate resources (separate I/D cache), or stall.

### (c) Control / Branch Hazards
Caused by **branches** — next instruction unknown until branch resolves. **15–20% of instructions are branches; 60–70% taken.** **Stall/bubble/flush:** insert NOPs; NOPs = #stages → "flush the pipeline."

## 1.4 Handling branch hazards (★★★★)
| Technique | Idea |
|-----------|------|
| **Prefetch branch target** | fetch target into a 2nd buffer when branch decoded |
| **Multiple streams** | replicate early pipeline, fetch both paths |
| **Loop buffer** | small fast buffer holds whole small loop → no re-fetch |
| **Branch prediction** | guess taken/not. *Static:* always/never/by-opcode. *Dynamic:* runtime history |
| **Delayed branch** | compiler fills the **delay slot** with a useful independent instruction |

## 1.5 Reservation Table, Latencies & MAL (⭐⭐⭐⭐⭐ — the big Group-C numerical)

A **reservation table** shows when each stage is busy over successive cycles for one function. **Rows = stages, columns = clock cycles**, X = stage busy. Used to schedule **non-linear (feedback) pipelines**.
- **Static pipeline** = one function at a time. **Dynamic pipeline** = multiple functions at once (★ MCQ: "Dynamic pipeline allows **multiple functions to evaluate**").

**Step method (worth 15 marks — memorize):**
1. **Forbidden latencies:** for each row, column-differences between any two X's. Those distances are forbidden.
2. **Collision vector (CV):** N-bit vector (N = max forbidden latency); bit i = 1 if latency i forbidden. Latency 1 = rightmost bit.
3. **State diagram:** start = initial CV. From each state, for each permissible latency p (bit=0): shift CV right by p, OR with initial CV → next state.
4. **Simple cycles:** state-diagram cycles with no repeated state.
5. **Greedy cycle:** always take smallest latency.
6. **MAL (Minimum Average Latency):** smallest average latency over all cycles (= greedy average). Lower MAL → higher throughput.
7. **Throughput** = 1/(MAL × clock period). e.g., MAL=2, 25 MHz → 12.5 MIPS.
8. **Bounds on MAL:** lower = max #X's in any single row; upper = (#1's in initial CV) + 1.

**Worked example (PYQ 2017 — 4-stage table):**
```
      1   2   3   4
S1    X           X
S2        X
S3            X
S4        X       X
```
S1 X's at 1,4 → latency 3. S4 X's at 2,4 → latency 2. Forbidden = {2,3} → **CV = 0110**. Permissible = {1,4,5,…}. Build state diagram; printed PYQ answers give **MAL = 2** and throughput from the given clock.

> **Exam tip:** even with a messy state diagram you score most marks for: forbidden latencies, CV, simple cycles, MAL, throughput formula. Show the method.

## 1.6 Instruction vs Arithmetic pipeline (★★★)
- **Instruction pipeline:** overlaps fetch-decode-execute of *instructions*.
- **Arithmetic pipeline:** pipelines one arithmetic op. FP-add stages: **Unpack → Align (shift smaller exponent) → Add mantissas → Normalize/round**.

## 1.7 Superscalar / Super-pipelined / VLIW (overlaps Ch.3)
| | Superscalar | Super-pipelined | VLIW |
|--|-------------|-----------------|------|
| Idea | **multiple instr/cycle** to multiple units | split each stage into sub-stages, clock faster | one **very long instruction word** = many ops packed by **compiler** |
| Detection | **hardware, dynamic** | hardware | **compiler, static** |
| CPI/throughput | CPI<1, **throughput>1** | high | high |
| Complexity | very complex HW | logic-speed limited | simple HW, needs dependency-free code |

★ MCQ: throughput superscalar **>1**; CPI superscalar **<1**; "division of stages into sub-stages = **super-pipelining**"; SPARC = **Scalable Processor Architecture**; MIPS = **Millions of Instructions Per Second**.

## 1.8 n-address instructions (★★★ — Group B 2018/2019)
Evaluate $X=(A+B)*(C+D)$:
- **3-address:** `ADD R1,A,B` / `ADD R2,C,D` / `MUL X,R1,R2`
- **2-address:** `MOV R1,A`/`ADD R1,B`/`MOV R2,C`/`ADD R2,D`/`MUL R1,R2`/`MOV X,R1`
- **1-address (accumulator):** `LOAD A`/`ADD B`/`STORE T`/`LOAD C`/`ADD D`/`MUL T`/`STORE X`
- **0-address (stack, reverse Polish):** `PUSH A`/`PUSH B`/`ADD`/`PUSH C`/`PUSH D`/`ADD`/`MUL`/`POP X`

## 1.9 Hardwired vs Microprogrammed Control Unit (★★★ — 2018/2019 Group B)
**Instruction cycle:** Fetch → Decode → Execute → Store/Write-back.
| | Hardwired | Microprogrammed |
|--|-----------|-----------------|
| Signals from | logic gates | micro-instructions in **control memory (ROM)** |
| Speed | **faster** | slower |
| Modify | hard | **easy** |
| Cost | costly | cheap |
| Used in | **RISC** | **CISC** |

## 1.10 Data-flow vs Control-flow (★★★)
- **Control-flow (Von Neumann):** sequential; **PC** triggers next instr; executes even if operands not ready.
- **Data-flow:** execution **driven by operand availability**; no PC/global store; higher parallelism. Drawn as a **data-flow graph** (nodes=operators, arcs=operands).

---

### ★ Questions Asked Previously — Chapter 1
- Prove max speedup = k / speedup = pipeline depth. **★★★★★** (2006,2016, every cycle)
- Reservation table → forbidden latency, CV, state diagram, simple/greedy cycle, MAL, throughput, bounds. **★★★★★** (2007,2010,2014,2017,2018,2019)
- Pipeline/data hazards; how detected & prevented. **★★★★★** (2009,2015,2018,2019,2022-23)
- Branch hazard + two methods. **★★★★** (2012,2014,2016,2017)
- Speedup MCQ (4-stage, n=64). **★★★★** (2008,2013,2014,2018,2019)
- Pipeline execution diagram; data-dependency delay. **★★★** (2015,2016)
- n-address instr; hardwired vs microprogrammed; instruction cycle. **★★★** (2018,2019)
- Throughput increases with #stages — justify. **★★★** (2012,2015,2017)
- Stage-delay + latch → speedup. **★★★** (2012,2015,2016)

## ⏱️ 5-MINUTE REVISION — Pipeline
- Stage = **both** seq+comb. Pipelining = **temporal parallelism**.
- $T_k=[k+n-1]t$; $S_k=\frac{nk}{k+n-1}$; **max speedup = k**; $E=S/k$; throughput $=\frac{n}{(k+n-1)t}$.
- Hazards: Data (RAW✓ WAR✓ WAW✓ **RAR✗**), Structural, Control/Branch (15-20% instr, 60-70% taken).
- Fixes: forwarding, stall/bubble/flush, prediction (static/dynamic), delayed branch, prefetch, loop buffer.
- Reservation table → forbidden latency → CV → state diagram (shift+OR) → MAL → throughput=1/(MAL·t).
- Superscalar: CPI<1, throughput>1, dynamic. VLIW: static/compiler, dependency-free.
- Hardwired=fast/RISC; Microprogrammed=ROM/CISC.

---
---

# CHAPTER 2 — MEMORY ⭐⭐⭐⭐⭐

## 2.1 Memory Hierarchy & three properties
Registers → cache (L1/L2/L3) → main memory → secondary (disk). Down: bigger/slower/cheaper. Up: smaller/faster/costlier. Works due to **locality of reference**.

Three properties (★ "which is NOT a property?" → **capability/consistency**; real ones below):
1. **Inclusion:** higher level ⊂ lower level: $M_1\subset M_2\subset\dots\subset M_n$.
2. **Coherence:** copies at different levels kept consistent.
3. **Locality of reference:** programs reference a confined area repeatedly.

## 2.2 Locality of Reference (★★★)
| Type | Meaning | Example |
|------|---------|---------|
| **Temporal** | location referenced will be referenced **again soon** | loops |
| **Spatial** | nearby locations referenced soon | arrays |
| **Sequential** | accessed in program order | straight-line code |

★ "Principle of locality justifies → **cache memory**." Cache exploits temporal; paging exploits spatial.

## 2.3 Cache Memory & Average Access Time
**Cache = small fast memory between CPU & MM** holding recently/frequently used data. **Hit** = found; **miss** = fetch from MM. Cache is SRAM (faster, smaller, costlier than DRAM RAM).

### Average / Effective access time (★★★★★ NUMERICAL — constant)
$$T_{avg} = h\,t_c + (1-h)\,t_m$$
**Standard PYQ:** cache 100, MM 1000, h=0.9 → 0.9(100)+0.1(1000)=**190 ns** ★ (2007,2010,2014,2016).
Other: cache 40, MM 100, h=0.8 → 32+20 = **52 ns**.
General: $T_{eff}=\sum f_i t_i$ (★ MCQ).

## 2.4 Cache Mapping (⭐⭐⭐⭐⭐ — THE core topic)

### (i) Direct Mapping
Each MM block → **one fixed** cache line: $j = i \bmod N$. Fields: **| Tag | Line | Word |**. Simplest/cheapest. **Drawback:** many-to-one → clashing blocks evict each other → low hit ratio, **conflict misses**. ★ "Conflict miss in **direct** (and set-assoc)." ★ "Direct-mapped with n blocks = **n-way**" per organizer key (conceptually it's **1-way** — flag both; use your class key).

### (ii) Associative (fully associative)
Block → **any** line. **Content-addressable memory** (★ "associative = content addressable"). Fields: **| Tag | Word |**. Most flexible, highest hit ratio, costly, **no conflict miss**.

### (iii) Set-Associative (best of both)
Cache split into **sets** of N blocks (N-way). Block → fixed **set** (like direct), any line within set (like associative): $S = i \bmod N_s$. Fields: **| Tag | Set | Word |**. **Resolves direct-mapping drawback** (the recurring Q): a replacement algorithm picks a victim within the set → higher hit ratio.

### Field-splitting method (★★★★)
1. Word bits = log₂(block size). 2. #blocks = cache/block; #sets = #blocks/associativity; Set bits = log₂(#sets). 3. Tag = total − set − word.

**Worked (PYQ 2014):** 1 KB 4-way, 1 MB MM, block 64 B → #blocks=1024/64=16; #sets=16/4=**4**. (ABCDE)₁₆→block 10995→set 10995 mod 4=**3**. (EDCBA)₁₆→block 15218→set=**2**.
**Set MCQ:** MM 2cm blocks, cache 2c blocks, 2/set → block k → set **(k mod m)**.

## 2.5 Three cache MISSES — "3 C's" (★★★★)
**Compulsory** (first ever), **Capacity** (cache too small), **Conflict** (mapping forced out — direct/set-assoc only).

## 2.6 Reduce miss RATE vs PENALTY (★★★★)
- **Rate↓:** larger block (↓compulsory, ↑conflict), larger cache (↓capacity, ↑hit time), higher associativity, **compiler optimization** (★ "compiler optimization reduces miss **rate**"), compiler-controlled prefetch.
- **Penalty↓:** multilevel (L2) cache, **critical-word-first / early restart**, **victim cache**, write buffers.

## 2.7 Write policies (★★★)
| | Write-through | Write-back |
|--|---------------|-----------|
| MM updated | every write | on replace (uses **dirty bit**) |
| Pros | simple, consistent | fewer writes, faster |
| Cons | MM traffic | needs dirty bit, MM stale |

## 2.8 Cache Coherence (⭐⭐⭐⭐⭐)
**Problem:** multiprocessor, each CPU has its own cache; one CPU writes → others hold **stale** copies. ★ "problem especially in **asynchronous parallel algorithm execution in multiprocessor**."
**Solutions (give one + limitation):**
- **Directory-based:** central directory tracks copies, **updates/invalidates** on write. (Limit: bottleneck/extra storage.)
- **Snooping:** caches **snoop the bus**, update/invalidate. (Limit: bus bandwidth.)
**Protocols:** **write-invalidate** (block-level, 1st write invalidates) vs **write-update/broadcast** (word-level). **MESI** = invalidate, write-back, 4 states (Modified/Exclusive/Shared/Invalid).

## 2.9 Virtual Memory (⭐⭐⭐⭐⭐)
**= use disk to make apparent RAM larger than physical RAM.** Active parts in RAM, inactive on disk, swapped. Programs see a virtual address space; **MMU** translates virtual→physical. Implemented by **paging** and **segmentation**.

### Paging vs Segmentation (★★★)
| | Paging | Segmentation |
|--|--------|--------------|
| Unit | fixed **pages/frames** | variable **segments** |
| Fragmentation | internal | external |
| Visible | transparent | logical |
★ "virtual address divided into fixed-size **pages**." Page size = **power of 2** → clean bit split (page-no | offset), no division.

### MMU & TLB (★★★★ — 2022-23 Group B)
- **MMU:** translates virtual→physical; has table-walk unit + TLBs.
- **TLB:** cache of recent page-table entries. Hit → frame immediate; miss → walk page table (extra access).
- ★ "absence of TLB → **2** accesses" (page table + data).

### Pages/Frames (★★★★)
- #virtual pages = space/pagesize; #frames = physmem/pagesize.
- **PYQ:** 48-bit virtual, 36-bit physical, 128 MB, 4096-byte page → page=2¹², virtual pages=**2³⁶**, physical pages=**2²⁴**, frames=2²⁷/2¹²=**2¹⁵**.

### TLB Effective Access Time (★★★★★ — 2022-23 marquee numerical)
$$EAT = H(T_{TLB}+M) + (1-H)(T_{TLB}+\text{pagetable}+M)$$
**PYQ:** 64-bit VA, 4KB page, MM 100 ns, TLB hit 90%, TLB miss 500 ns. Found=T+M, not-found=T+2M=500→T=300, found=400. $EAT=0.9(400)+0.1(500)=\mathbf{410\ ns}$. *(If TLB access≈0: 0.9·100+0.1·200=110 ns — state assumption; organizer answer 410.)*

## 2.10 Page Replacement (★★★)
**FIFO** (oldest), **LRU** (least recently used), **OPT** (not used longest in future — best, needs future knowledge). Method: draw frame columns, count **page faults**.

## 2.11 Memory Interleaving (★★★)
Divide memory into **m banks** (m-way) → parallel access → higher bandwidth, hides latency. **Low-order interleaving:** low bits pick the bank (0,1,2,3 → banks 0,1,2,3). Miss penalty for 4-way interleaved 4-word block ≈ 4+24+4 vs 116 non-interleaved.

---

### ★ Questions Asked Previously — Chapter 2
- Cache average access time MCQ (190/52 ns). **★★★★★** (every year)
- Direct-mapping drawback → set-associative. **★★★★★** (2009,2014,2017,2019)
- Cache coherence + solution + limitation. **★★★★★** (2007,2011,2013,2015,2016,2017,2022-23)
- Cache miss / 3 types / reduce rate vs penalty. **★★★★★** (2010,2018,2019,2022-23)
- Virtual memory + implementation. **★★★★★** (2016,2022-23,2018)
- MMU / TLB / effective access time. **★★★★★** (2012,2022-23,2018)
- Cache field split / set mapping. **★★★★** (2012,2014,2016,2017)
- Write-through vs write-back. **★★★** (2007,2011,2013,2015)
- Locality of reference. **★★★** (2008,2012,2017,2018)
- Pages/frames; segmentation vs paging; FIFO/LRU. **★★★** (2013,2016)
- Memory interleaving (short note). **★★★** (2010,2014)

## ⏱️ 5-MINUTE REVISION — Memory
- Properties: Inclusion/Coherence/Locality (NOT capability/consistency).
- $T_{avg}=h\,t_c+(1-h)t_m$ → **190 ns** / **52 ns**.
- Direct (Tag|Line|Word, conflict miss, low hit) / Associative (Tag|Word, CAM, no conflict) / Set-assoc (Tag|Set|Word, **resolves direct drawback**).
- 3 misses: compulsory/capacity/conflict. Rate↓: bigger block/cache, assoc, compiler. Penalty↓: L2, critical-word-first, victim cache.
- Write-through vs write-back (dirty bit). Coherence: directory/snooping; MESI.
- VM: paging(internal frag)/segmentation(external). TLB absent → 2 accesses. **EAT=410 ns.**
- Page replacement: FIFO/LRU/OPT.

---
---

# CHAPTER 3 — VECTOR PROCESSOR ⭐⭐⭐⭐

## 3.1 What is a vector processor
Heavily **pipelined** CPU operating on **whole vectors (1-D arrays)** with one instruction — unlike **scalar** (one element at a time). For high data-parallel work. **Register-register** (Cray) or **memory-memory** (CDC).

## 3.2 Vector instruction types (★★★★)
| Type | Mapping | Example |
|------|---------|---------|
| Vector-vector | $V_j\times V_k\to V_i$ | ADD Va,Vb,Vc |
| Vector-scalar | $s\times V_i\to V_j$ | ADD R1,Va,Vb |
| Vector-memory | $M\to V$ / $V\to M$ | Load/Store |
| Reduction | $V\to s$ | DOT |
| Gather/Scatter | $M\times V_a\to V_b$ | sparse matrices |
| Masking | $V_a\times V_m\to V_b$ | conditional |

## 3.3 Vector Stride & Strip-mining (★★★)
- **Stride** = fixed address increment between successive elements. Stride 1 = adjacent (cache-friendly); non-unit → bank conflicts, need stride register. ★ "stride to access elements in **multi-dimensional vectors**."
- **Strip-mining:** vector longer than the vector register → split into fixed-size segments (64 in Cray), process one at a time. Done by compiler.

## 3.4 Vector Chaining (★★★★)
**= forwarding for vectors:** result of one functional unit fed **directly** into the next without waiting for the whole result or memory. Start dependent op as soon as the **first** element is ready (Load→Mul→Add overlap).

## 3.5 Vector vs Array vs Scalar (★★★)
- **Vector:** whole vector → **ONE** pipelined unit. **Array:** each element → **different PE** (SIMD). **Scalar:** one at a time.
- ★ "difference between vector & array = **pipelining**"; "array processor ∈ **SIMD**."

## 3.6 Vectorizing compiler (★★★)
Detects parallelism, converts **sequential scalar instructions → vector instructions** ("vectorization"). Needed because sequential HLLs lose parallelism. Speedup = $\frac{r}{(1-f)r+f}$ — limited by vectorized fraction f.

## 3.7 C-access vs S-access memory (★★★ — also Ch.6)
- **C-access (concurrent):** low-order interleaving, overlapped access, m words concurrently.
- **S-access (simultaneous):** high bits select modules, all latched at once, multiplexer (low bits) picks word.

---

### ★ Questions Asked Previously — Chapter 3
- Vector instruction types. **★★★★** (2006,2010,2011,2014,2017,2018)
- Superscalar/super-pipeline/VLIW compare. **★★★★** (2008,2011,2014,2016)
- Vector chaining + speedup. **★★★** (2018,2005/2010/2013)
- Strip-mining & stride. **★★★** (2008,2012,2015)
- Vector vs array vs scalar. **★★★** (2005,2010,2014,2018)
- Vectorizing compiler. **★★★** (2015)
- C-access/S-access. **★★** (2017,2018)

## ⏱️ 5-MINUTE REVISION — Vector
- Vector instr: V-V, V-S, V-M, reduction, gather/scatter, masking.
- **Stride** = element spacing (multi-dim). **Strip-mining** = split long vector to register size.
- **Chaining** = vector forwarding. Vector(1 unit, whole vector) vs Array(many PEs, SIMD); diff = **pipelining**.
- Vectorizing compiler: scalar→vector; speedup limited by f.

---
---

# CHAPTER 4 — FLYNN'S TAXONOMY ⭐⭐⭐⭐⭐

## 4.1 Flynn's Classification (1966) (★★★★★)
By number of **Instruction** and **Data** streams:
| Class | Streams | Meaning | Example |
|-------|---------|---------|---------|
| **SISD** | 1 instr, 1 data | sequential uniprocessor | PC, old mainframe (= **Von Neumann**) |
| **SIMD** | 1 instr, many data | one instr on many data | **array processor**, vector, GPU, MMX |
| **MISD** | many instr, 1 data | rare; fault tolerance | Space Shuttle flight control |
| **MIMD** | many instr, many data | independent processors | multiprocessors, distributed |

★ "**MISD has no practical usage**"; "**array processing = SIMD**"; "**SISD = Von Neumann**"; "**MMX = SIMD**."

```
SISD:  IM→CU→PU→DM
SIMD:  IM→CU→[PU1 PU2 PU3]→DM1 DM2 DM3
MISD:  [IM→CU]×n→PU→DM
MIMD:  [IM→CU→PU↔DM]×n
```
**SIMD models:** distributed-memory (PE local memory) / shared-memory (PEs share via bus). Array processor = PEs under one Control Unit.

## 4.2 Levels of Parallelism (★★★)
**Instruction (ILP) → Loop → Procedure → Program/job.** ILP = how many ops run simultaneously; compiler+hardware reorder/overlap.

## 4.3 CPU Performance: CPI/MIPS/Exec time (⭐⭐⭐⭐ NUMERICAL)
$$\text{CPU time}=IC\times CPI\times CCT=\frac{IC\times CPI}{f}$$
$$CPI_{avg}=\frac{\sum CPI_i I_i}{IC},\qquad \text{MIPS}=\frac{f}{CPI_{avg}\times10^6}=\frac{\text{Clock rate}}{CPI_{avg}\times10^6}$$

**Worked (PYQ 2015 RISC):** 50 MHz; Int 50000×1, Data 35000×2, FP 20000×2, Branch 6000×3; IC=111000. CPI=178000/111000=**1.6**; MIPS=50/1.6=**31.25**; Exec=1.6×111000/(50×10⁶)≈**3.55 ms** (organizer prints 0.003 ms).
**Worked (PYQ 2012):** 2500 instr; Data 50%(2), Arith 30%(5), Branch 20%(10); 4 GHz. Cycles=2500+3750+5000=11250; T=0.25 ns; Exec=**2.81 µs**.

## 4.4 Amdahl's Law (⭐⭐⭐⭐ NUMERICAL)
$$\text{Speedup}=\frac{1}{(1-f)+\frac{f}{S}},\qquad n\to\infty:\ \to\frac{1}{1-f}$$
**Worked (PYQ 2016):** 10% sequential, want speedup 5: $5=\frac{1}{0.1+0.9/n}$ → 0.9/n=0.1 → **n=9 processors**.

## 4.5 MMX (★★★)
Multimedia Extension; **57 new SIMD instructions**; 32 KB L1; extra pipeline stage. ★ "MMX uses **SIMD**."

---

### ★ Questions Asked Previously — Chapter 4
- Flynn's classification + diagrams. **★★★★★** (2006,2007,2009,2010,2012,2013,2016,2017,2018,2019)
- CPI/MIPS/execution-time numerical. **★★★★** (2011,2015,2012)
- Amdahl's law + processors-for-speedup. **★★★★** (2011,2012,2016,2017)
- Levels of parallelism / why parallel processing. **★★★** (2015)
- ILP. **★★★** (2014,2018)
- SIMD data-routing/masking (prefix sum S(k)). **★★★** (2008,2015)
- MMX/array processor/CM-2 short notes. **★★** (2005-2008)

## ⏱️ 5-MINUTE REVISION — Flynn
- SISD/SIMD/MISD/MIMD = instr×data. MISD no practical use. Array=SIMD. SISD=Von Neumann. MMX=SIMD.
- Parallelism levels: instruction/loop/procedure/program.
- CPI=Σ(CPIᵢIᵢ)/IC; MIPS=clockrate/(CPI·10⁶). RISC PYQ: CPI=1.6, MIPS=31.25.
- Amdahl: →1/(1−f). PYQ: 10% serial, speedup 5 → **9 processors**.

---
---

# CHAPTER 5 — RISC & CISC ⭐⭐⭐⭐

## 5.1 RISC vs CISC (⭐⭐⭐⭐⭐ — almost every year)
| Feature | **CISC** | **RISC** |
|---------|----------|----------|
| Instruction set | large, **variable** (16–64 bit) | small, **fixed**, simple |
| Addressing modes | many (12–24) | few (3–5) |
| Registers | few (8–24), **unified cache** | many (32–192), **split I/D cache** |
| CPI | 2–15 | **≈1** (avg <1.5) |
| Control unit | **microprogrammed (ROM)** | **hardwired** |
| Example | Intel x86 | MIPS, SPARC, ARM, PowerPC |

★ "CPI RISC = **1**"; "overlapped register windows speed call/return in **RISC**"; "**small register file** is NOT RISC" (RISC has MANY registers).

## 5.2 Von Neumann & bottleneck (★★★ — 2018)
**Von Neumann:** stored-program — instructions AND data in **same memory/bus**. Parts: CU, ALU, Memory, Registers, I/O + buses. **Bottleneck:** single shared bus limits throughput (CPU waits). **Fix:** (1) **cache**, (2) **RISC** (more registers, fewer memory refs), (3) Harvard (separate buses). **Non-Von-Neumann:** no PC / no variables — data-flow, reduction machines.

## 5.3 Addressing Modes (★★★ — 2016/2017)
| Mode | Operand / EA |
|------|------|
| Immediate | operand in instruction |
| Direct | address field = operand address |
| Indirect | field points to address of operand (pointer) |
| Register | operand in register |
| Index | EA = index register + constant |
| **Relative** | **EA = PC + offset** (relocatable) |
**Relative vs Direct:** relative needs fewer bits, position-independent code; direct has limited address field.

## 5.4 Multiprocessor / Multicomputer / Multicore (★★★)
- **Multiprocessor:** CPUs **share common memory**. **Multicomputer:** each own memory, **message passing**. **Multicore:** one chip, multiple cores.

## 5.5 Short notes (★★)
**PowerPC** (RISC, superscalar, 32 KB cache, 3 instr/cycle), **Cluster computer** (loosely-coupled commodity nodes, high availability/load-balancing), **SPEC rating** (benchmark suite).

---

### ★ Questions Asked Previously — Chapter 5
- Compare RISC and CISC. **★★★★★** (2010,2012,2014,2015,2018,2019 + MCQs)
- Von Neumann + bottleneck + reduce. **★★★** (2018)
- Addressing modes; relative vs direct; vectored vs non-vectored interrupt. **★★★** (2016,2017)
- Multiprocessor/multicomputer/multicore. **★★★** (2012,2014)
- SPEC rating + CPI/MIPS. **★★★** (2015)
- Short notes: PowerPC, RISC, cluster, non-Von-Neumann. **★★** (2007,2010,2012,2019)

## ⏱️ 5-MINUTE REVISION — RISC/CISC
- RISC: small/fixed instr, many registers, hardwired, CPI≈1, split cache, pipelined. CISC: large/variable, microprogrammed ROM, CPI 2–15, unified cache.
- Von Neumann = shared memory+bus; bottleneck = single bus; fix = cache + RISC.
- Addressing: immediate/direct/indirect/register/index/relative (EA=PC+offset).
- Multiprocessor(shared)/multicomputer(msg)/multicore(one chip).

---
---

# CHAPTER 6 — INTERPROCESS COMMUNICATION ⭐⭐⭐⭐

## 6.1 Multiprocessor vs Multicomputer (⭐⭐⭐⭐⭐)
| | **Multiprocessor** | **Multicomputer** |
|--|-------------------|-------------------|
| Memory | single **shared**, one address space | **private** per CPU, address space per CPU |
| Communication | **shared memory** (LOAD/STORE) | **message passing** |
| Coupling | **tightly coupled** | **loosely coupled** |
| Example | Sun Enterprise 10000, SGI Origin | IBM SP/2, Beowulf cluster |

```
Multiprocessor:  P P P P ──┬── Shared Memory
Multicomputer:   [P-M][P-M][P-M] ── Message-passing network
```

## 6.2 Tightly vs Loosely coupled (★★★★)
| | Tightly | Loosely |
|--|---------|---------|
| = | shared memory MIMD (UMA/NUMA) | distributed, message passing (clusters) |
| Connected | bus level | high-speed network |
| Performance | **higher**, smaller | lower, bigger |
| Cost | costly | cheap, **fault-tolerant**, scalable |
| Example | ENCORE, MULTIMAX | INTEL iPSC, NCUBE/7, Beowulf |

## 6.3 UMA / NUMA / COMA (★★★★)
- **UMA:** all access shared memory in **same time** (SMP). ★ "same access time → **UMA**."
- **NUMA:** access time depends on location, **local faster**; scales better.
- **COMA:** memory all cache. **NORMA:** no remote access (message passing).

## 6.4 Interconnection Networks (⭐⭐⭐⭐)
- **Static (direct):** fixed links — linear array, **ring**, mesh, torus, **hypercube**, tree. (ring=recirculating; n-dim hypercube = **2ⁿ nodes**; mesh = 2-D.)
- **Dynamic (indirect):** switches — **bus, crossbar, omega, delta**.
- **Bisection width** (min cut to split in half — **high good**); **Diameter** (max distance — **low good**).
- **Crossbar:** N×M grid, **N² crosspoints**; great performance, poor cost scaling.
- **Multistage (MIN):** compromise between bus & crossbar; stages of small switches.

### Omega network (★★★★)
- N×N omega = **log₂N stages** of 2×2 switches + **perfect-shuffle** interconnect. ★ "n-input omega = log₂n stages" → 8→3, **64→6**.
- Routing: compare MSB of source & dest — same=pass, different=crossover; repeat per stage.

### Delta network
$a^n×b^n$: n stages, unique path. **Omega vs Delta:** omega uses uniform perfect-shuffle; delta built recursively from a×b crossbars with constant-length unique paths.

### Routing functions (★★★)
- **Perfect shuffle:** $P(a_n...a_1)=a_{n-1}...a_1a_n$ (left-rotate). P(110)=101.
- **Exchange** (complement a bit), **Butterfly** (swap MSB/LSB), **Permutation**.

## 6.5 Bernstein's Conditions (★★★ — 2015)
$S_1\parallel S_2$ iff: $R_1\cap W_2=\varnothing$, $R_2\cap W_1=\varnothing$, $W_1\cap W_2=\varnothing$.
**Worked (PYQ):** A=B×C; B=D+E; C=A+B; E=F−D → **parallel pairs: I1∥I4 and I3∥I4** (all others violate a condition).

## 6.6 Centralized vs Distributed shared memory (★★★)
- **Centralized (SMP/UMA):** single shared memory, uniform access, ~dozens of processors, bus bottleneck.
- **Distributed:** memory split among nodes, scales to many processors, higher comm latency. **Better for large counts.**

## 6.7 Memory capacity
n-bit address bus → **2ⁿ** locations (8-bit → **256** bytes).

---

### ★ Questions Asked Previously — Chapter 6
- Multiprocessor vs multicomputer. **★★★★★** (2010,2013,2014,2015,2018,2019)
- Loosely vs tightly coupled. **★★★★** (2010,2011,2013,2014,2016,2017,2018)
- UMA vs NUMA; significance of interconnection network. **★★★★** (2011,2012,2014,2017,2018)
- Omega/delta; multistage; static vs dynamic. **★★★★** (2005,2006,2008,2011,2013,2015,2016,2018)
- Bisection/diameter; routing functions; crossbar. **★★★** (2011,2018)
- Bernstein's conditions. **★★★** (2015)
- Centralized vs distributed shared memory. **★★★** (2007,2016)
- C-access/S-access; memory access methods; address bus. **★★★** (2005,2008,2013,2018)
- Software vs hardware parallelism; program-flow mechanism. **★★** (2013,2018)

## ⏱️ 5-MINUTE REVISION — IPC
- Multiprocessor = shared mem + LOAD/STORE + tightly coupled. Multicomputer = private mem + message passing + loosely.
- UMA(same time)/NUMA(local faster)/COMA/NORMA.
- Static: ring, mesh, hypercube(2ⁿ). Dynamic: bus, crossbar(N²), omega, delta.
- Omega = **log₂N** stages of 2×2 + perfect shuffle. 64→6.
- Bisection high-good, diameter low-good. Perfect shuffle = left-rotate.
- Bernstein: R1∩W2=R2∩W1=W1∩W2=∅. Parallel: I1∥I4, I3∥I4.
- n-bit bus → 2ⁿ (8-bit → 256).

---
---

# 🎯 EXAM PREDICTION (ranked, for 30 June 2026)

## Most likely GROUP A (MCQ)
1. Pipeline stage = both seq+comb ★★★★★
2. n tasks in k-stage pipeline = **k+n−1** ★★★★★
3. Speedup 4-segment, n=64 → **3.82** ★★★★
4. Which is NOT a data hazard → **RAR** ★★★★★
5. Cache avg access time (100,1000,0.9)=**190 ns** ★★★★★
6. Reservation table specifies utilization ★★★★★
7. Array processor = **SIMD** / MISD no practical use ★★★★★
8. UMA = same access time ★★★★
9. Dynamic pipeline = multiple functions ★★★★
10. Direct-mapped = n-way (per key) / conflict miss in direct ★★★★
11. Omega = log₂n stages (64→6) ★★★
12. CPI superscalar <1, throughput >1 ★★★
13. Amdahl expression; MMX=SIMD; SPARC; MIPS meaning ★★★
14. Effective access time = Σfᵢtᵢ; virtual addr → pages; no-TLB = 2 accesses ★★★

## Most likely GROUP B (5 marks) — prep 6–7, need 3
1. Data hazards + how resolved ★★★★★
2. RISC vs CISC ★★★★★
3. Cache miss / 3 types / reduce miss rate ★★★★★
4. Cache coherence + solution ★★★★★
5. MMU role / cache vs main memory ★★★★
6. Direct-mapping drawback → set-associative ★★★★
7. Flynn's classification ★★★★
8. Vector instruction types / vector chaining ★★★★
9. Branch hazard + 2 methods ★★★
10. Superscalar trade-offs / superscalar vs super-pipeline vs VLIW ★★★

## Most likely GROUP C (15 marks) — prep 5, need 3
1. Pipeline hazards + avoid/minimize ★★★★★
2. Reservation table full numerical ★★★★★
3. Virtual memory + implementation (paging/segmentation/TLB) ★★★★★
4. Cache: coherence / miss penalty / global-local miss ★★★★★
5. Superscalar vs VLIW compare ★★★★
6. Multiprocessor vs multicomputer + loosely/tightly coupled ★★★★
7. Flynn's classification (diagrams) ★★★★
8. Interconnection networks / omega / multistage ★★★

## Numericals to drill until automatic
| Numerical | Method | Anchor |
|-----------|--------|--------|
| Pipeline speedup n=64,k=4 | nk/(k+n−1) | 3.82 |
| Reservation table MAL+throughput | forbidden→CV→state→MAL | MAL=2, 1/(MAL·t) |
| Cache avg access time | h·tc+(1−h)·tm | 190 / 52 ns |
| CPI & MIPS | ΣCPIᵢIᵢ/IC ; f/(CPI·10⁶) | 1.6 ; 31.25 |
| Amdahl processors (speedup 5) | 1/(0.1+0.9/n)=5 | n=9 |
| TLB effective access time | H(T+M)+(1−H)(T+2M) | 410 ns |
| Cache field split | word/set/tag bits | tag, set, word |
| Pages/frames | space/pagesize | 2³⁶ / 2²⁴ / 2¹⁵ |

## Derivations to memorize
Speedup = pipeline depth (max=k) ★★★★★; Average memory access time ★★★★; Amdahl ★★★★; Efficiency & throughput ★★★.

## Strategy for 9+ SGPA
- **Group C lock-ins:** Pipeline hazards, Reservation table, Virtual memory, Cache coherence/miss, Flynn's — covers 5, pick best 3.
- **Group B lock-ins:** data hazards, RISC vs CISC, cache misses, cache coherence, Flynn's, vector instructions.
- **Group A:** the same ~20 MCQs recycle yearly — drill the list above for an easy 10/10.
- Always **show formula + steps** in numericals; method earns most marks.

---
*End of Master Note. Pair with the Practice Sheet for solved/unsolved sets and a full mock.*
