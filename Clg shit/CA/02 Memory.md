# Computer Architecture — Chapter 2: Memory

> **Source:** *Computer Architecture* organizer (MAKAUT/WBUT solved papers, Popular Publications), book pages CA-42 to CA-63.
> **Fidelity note for downstream readers (incl. LLMs):**
> - MCQ answer letters in the "Very Short Answer Type Questions" section are now **image-verified** against the source page images; the Short/Long Answer prose remains OCR-based and items marked `[OCR — unverified]` there should still be double-checked against the source.
> - Where OCR was too garbled to render faithfully, the passage is marked `[OCR unclear]` rather than guessed.
> - Diagrams that could not be reproduced from text are noted as `[diagram]`.
> - Section names are preserved as printed in the source ("Very Short Answer Type Questions" is the source's heading for the MCQs).

---

## Chapter at a Glance

### Memory Hierarchy

The hierarchical arrangement of storage in current computer architectures is called the **memory hierarchy**. It is designed to take advantage of memory locality in computer programs. Each level of the hierarchy has the properties of higher speed, smaller size, and lower latency than lower levels.

### Inclusion, Coherence, and Locality Properties

**1. Inclusion Property**

According to the inclusion property, the contents present in the upper level of the memory hierarchy must also be present in the lower level of memory. So, we can state the inclusion property as:
$$M_1 \subset M_2 \subset M_3 \subset \cdots \subset M_n$$
At the time of processing, the required portion of memory $M_2$ is copied into $M_1$. Similarly, subsets of $M_3$ are copied into $M_2$, and so on. So, if a word is found in memory $M_i$, then copies of the same word can also be found in all higher levels $M_{i+1}, M_{i+2}, \ldots, M_n$. But a word stored in $M_{i+1}$ may not be found in $M_i$.

**2. Cache Coherence Property**

Memory coherence property can manage the memories of a multiprocessor system so that no data is lost or overwritten before the data is transferred from a cache to the target memory. Memory caching is effective because most programs access the same data or instructions over and over. When multiple processors with separate caches share a common memory, it is necessary to keep the caches in a state of coherence by ensuring that any shared operand that is changed in any cache is changed throughout the entire system. This is done by a directory-based scheme.

**3. Locality of Reference**

The effectiveness of a memory hierarchy depends on the principle of moving information into the fast memory infrequently and accessing it many times before replacing it with new information. This principle is possible due to a phenomenon called **locality of reference**; that is, within a given period of time, programs tend to reference a relatively confined area of memory repeatedly. Locality occurs often because of the way in which computer programs are created. Generally, related data is stored in nearby locations in storage. Locality often occurs because code contains loops that tend to reference arrays or other data structures by indices. Increasing and exploiting locality of reference are common techniques for optimization. This can happen on several levels of the memory hierarchy. Paging benefits from spatial locality. A cache is a simple example of exploiting temporal locality, because it is a specially designed faster but smaller memory area, generally used to hold recently referenced data and data near recently referenced data, which can lead to potential performance increases.

### Reducing Cache Misses

There are three methods to reduce the miss penalty of memory access:

1. **Increase block size:** If we increase the block size, then it reduces the miss penalty. A large block can store a large amount of data, so it will reduce compulsory misses. But it increases capacity misses.
2. **Sub-block placement to reduce miss penalty:** Generally we don't load the full block of memory contents on a miss; we maintain valid/invalid bits per sub-block.
3. **Early restart and critical word first:** In this strategy, to reduce miss penalty, don't wait for the full block to be loaded before restarting the CPU. Early-restart the memory access: as soon as the requested word of the block arrives, send it to the CPU.

### Cache Memory

Cache memory is a small amount of fast memory which sits between standard main memory and the CPU. It holds copies of recently accessed instructions and data. It may be located on the CPU chip or module. When the CPU requests the contents of a memory location, it first checks the cache for this data.

```
CPU  <-->  Cache  <-->  Main Memory
```
*Fig: Position of cache*

**Different Mapping Functions of Cache Memory:** A mapping function is the method used to locate a memory address within a cache. It is used when copying a block from main memory to the cache, and it is used again when trying to retrieve data from the cache. There are three kinds of mapping functions:
(i) Direct Mapping, (ii) Associative Mapping, (iii) Set-Associative Mapping.

### Virtual Memory

A virtual memory system attempts to optimize the use of the main memory together with the hard disk. In effect, virtual memory is a technique for using secondary storage to extend the apparent limited size of the physical memory beyond its actual physical size. It is usually the case that the available physical memory space will not be enough to host all the parts of a given active program. Those parts of the program that are currently active are brought to the main memory while those parts that are not active are stored on the magnetic disk. If the segment of the program containing the word requested by the processor is not in main memory at the time of the request, then such a segment will have to be brought from the disk to the main memory. The most relevant principle is that of keeping active segments in the high-speed main memory and moving inactive segments back to the hard disk.

**Implementation of Virtual Memory:** Virtual memory may be implemented using (i) Paging and (ii) Segmentation.

---

## Very Short Answer Type Questions

**1.** A computer with cache access time of 100 ns, a main memory access time of 1000 ns, and a hit ratio of 0.9 produces an average access time of — *[WBUT 2007, 2010, 2014]*
a) 250 ns   b) 200 ns   c) 190 ns   d) none of these
**Answer: (c)**

**2.** Consider the high-speed 40 ns memory cache with a successful hit ratio of 80%. The regular memory has an access time of 100 ns. What is the effective access time for the CPU to access memory? — *[WBUT 2007, 2008, 2009, 2011]*
a) 52 ns   b) 60 ns   c) 70 ns   d) 80 ns
**Answer: (a)**

**3.** Associative memory is a — *[WBUT 2008, 2009]*
a) pointer addressable memory   b) very cheap memory   c) content addressable memory   d) slow memory
**Answer: (c)**

**4.** The principle of locality justifies the use of — *[WBUT 2008, 2009]*
a) Interrupts   b) Polling   c) DMA   d) Cache memory
**Answer: (d)**

**5.** How many address bits are required for a 512×4 memory? — *[WBUT 2008, 2009]*
a) 512   b) 4   c) 9   d) [OCR unclear]
**Answer: (c)**

**6.** In the absence of a TLB, to access a physical memory location in a paged-memory system, how many memory accesses are required? — *[WBUT 2012, 2018, 2019]*
a) [OCR unclear]   b) [OCR unclear]   c) 3   d) 4
**Answer: (b)**

**7.** A direct-mapped cache memory with [n] blocks is nothing but which of the following set-associative cache memory organizations? — *[WBUT 2012, 2015, 2018]*
a) [OCR unclear] set associative   b) 1-way set associative   c) [n]-way set associative   d) n-way set associative
**Answer: (d)**

**8.** In which type of memory mapping will there be a conflict miss? — *[WBUT 2018]*
a) direct mapping   b) set-associative mapping   c) associative mapping   d) both (a) & (b)
**Answer: (d)**

**9.** Virtual address space can be divided into some fixed-size fields of — *[WBUT 2013, 2019]*
a) [OCR unclear]   b) blocks   c) pages   d) none of these
**Answer: (c)**

**10.** Which is not the property of a memory module? — *[WBUT 2013, 2019]*
a) inclusion   b) consistency   c) capability   d) locality
**Answer: (c)**

**11.** Effective access time ($T_{\text{eff}}$) of memory is given by — *[WBUT 2014]*
a) $T_{\text{eff}} = \dfrac{1}{\sum f_i t_i}$   b) $T_{\text{eff}} = \sum_{i=1}^{n} f_i t_i$   c) $T_{\text{eff}} = \sum f_i / t_i$   d) none of these `[OCR — unverified]`
**Answer: (b)**

**12.** The compiler optimization technique is used to reduce — *[WBUT 2015, 2017, 2018]*
a) cache miss penalty   b) cache miss rate   c) cache hit time   d) none of these
**Answer: (b)**

**13.** The cache coherence is a potential problem especially — *[WBUT 2015, 2018]*
a) in asynchronous parallel algorithm execution in multiprocessor
b) in synchronous parallel algorithm execution in multiprocessor
c) in asynchronous parallel algorithm execution in data flow m/c
d) in synchronous parallel algorithm execution in data flow m/c
**Answer: (c)**

**14.** A computer with cache access time of 100 ns, a main memory access time of 1000 ns and a hit ratio of 0.9 produces an average access time of — *[WBUT 2016]*
a) 250 ns   b) 200 ns   c) 190 ns   d) 80 ns
**Answer: (c)**

**15.** In which type of memory mapping does conflict miss occur? — *[WBUT 2019]*
a) set associative   b) direct mapping   c) associative   d) only (a) & (b)
**Answer: (b)**

**16.** [OCR unclear] access is provided using — *[WBUT 2019]*
a) [OCR unclear]   b) DRAM's   c) SRAM's   d) registers
**Answer: (d)**

**17.** The [OCR unclear] policy in virtual memory is used to decide which page to remove from memory when a new page needs to be loaded into memory. — *[WBUT 2023]*
**Answer: page replacement**

**18.** What are memory replacement policies? — *[WBUT 2023]*

When a non-resident page is needed by a process, the operating system must decide which resident page is to be replaced by the requested page. The part of the virtual memory which makes this decision is called the **replacement policy**.

---

## Short Answer Type Questions

**1. Consider the performance of a main memory organization when a cache miss has occurred:** *[WBUT 2007]*
- i) 4 clock cycles to send the address
- ii) 24 clock cycles for the access time per word
- iii) 4 clock cycles to send a word of data

**Estimate:**
a) The miss penalty for a cache block of 4 words.
b) The miss penalty for a 4-way interleaved main memory with a cache block of 4 words.

**Answer:**

To find a single word from main memory, the processor wastes $4 + 24 = 28$ cycles. Since the size of the main-memory block equals the size of the cache-memory block, to find 4 words in main memory the processor accesses it and brings the whole block to the cache.

So, miss penalty $= 4 \times 28 + 4 = 116$. `[OCR — unverified]`

For a 4-way interleaved memory, the 4 words are present in 4 different banks. In the first 4 cycles all the addresses are activated, and the time required to read is 24 cycles. Letting it require 4 clock cycles to send a word of data:
$$\text{Total miss penalty} = 4 + (24 + 4 \times 4) = 44. \quad \texttt{[OCR — unverified]}$$

**2. What is the limitation of the direct-mapping method? Explain with an example how it can be improved in set-associative mapping.** *[WBUT 2009]*
**OR, What is the drawback of direct-mapped cache? How is it resolved in set-associative cache?** *[WBUT 2014, 2017]*

**Answer:**

Direct mapping is the simplest technique of cache mapping. It places an incoming main-memory block into a specific fixed cache block location. The placement is based on a fixed relation between the incoming block number $i$, the cache block number $j$, and the number of cache blocks $N$:
$$j = i \bmod N$$

The disadvantage is the many-to-one mapping of incoming main-memory blocks into the cache (the many-to-one property). This disadvantage tends to lead to a low cache hit ratio.

The set-associative mapping combines aspects of both direct mapping and associative mapping. It combines the simplicity of direct mapping with the flexibility of associative mapping. In the set-associative mapping technique, the cache is divided into a number of sets; each set consists of a number of blocks. A given main-memory block maps to a specific cache set based on the equation:
$$S = i \bmod N_s$$
where $N_s$ is the number of sets in the cache, $i$ is the main-memory block number, and $S$ is the specific cache set to which block $i$ maps. So, the blocks of main memory are connected to the different sets of the cache memory by direct mapping; but within a set there are a number of cache blocks, and a specific block of main memory may transfer to any block of a specific set by fully associative mapping. So, cache replacement is reduced and the hit ratio is increased.

**3. Describe different techniques to reduce miss rate. / What are the three different types of cache misses? Explain the technique to reduce cache misses.** *[WBUT 2010, 2018, 2019]*

**Answer:**

One technique to reduce the cache miss rate is **compiler-controlled prefetch**. This may reduce the cache miss rate. While this approach yields better prefetch "hit" rates than hardware prefetch, it does so at the expense of executing more instructions. Thus, the compiler tends to concentrate on prefetching data that are likely to be cache misses anyway. Loops are key targets, since they operate over large data spaces and their data accesses can be inferred from the loop index in advance.

Another method to reduce cache miss rate is **compiler optimizations**. This method does NOT require any hardware modifications, yet it can be the most efficient way to eliminate cache misses. The improvement results from better code and data organization. For example, code can be rearranged to avoid conflicts in a direct-mapped cache, and accesses to arrays can be reordered to operate on blocks of data rather than processing rows of the array.

**4. What is the cache coherence problem? Describe one method to remove this problem.** *[WBUT 2011, 2013, 2016, 2017]*
**OR, Explain the concept of cache coherence / miss penalty and discuss the techniques used to reduce it.** *[WBUT 2023]*

**Answer:**

A protocol for managing the caches of a multiprocessor system so that no data is lost or overwritten before the data is transferred from a cache to the target memory. When two or more computer processors work together on a single program (multiprocessing), each processor may have its own memory cache that is separate from the larger RAM that the individual processors access. Memory caching is effective because most programs access the same data or instructions over and over. When multiple processors with separate caches share a common memory, it is necessary to keep the caches in a state of coherence by ensuring that any shared operand that is changed in any cache is changed throughout the entire system.

This is done in either of two ways: through a **directory-based** or a **snooping** system. In a directory-based system, the data being shared is placed in a common directory that maintains the coherence between caches. The directory acts as a filter through which the processor must ask permission to load an entry from the primary memory to its cache. When an entry is changed, the directory either updates or invalidates the other caches with that entry. In a snooping system, all caches monitor (snoop) the bus to determine if they have a copy of the block of data that is requested on the bus.

**5. How does the principle of locality help in memory hierarchy design? Explain the concept of locality of reference and state its importance to memory systems.** *[WBUT 2017, 2018]*

**Answer:**

The effectiveness of a memory hierarchy depends on the principle of moving information into the fast memory infrequently and accessing it many times before replacing it with new information. This principle is possible due to a phenomenon called **locality of reference**; that is, within a given period of time, programs tend to reference a relatively confined area of memory repeatedly. Locality occurs often because of the way computer programs are created. Generally, related data is stored in nearby locations in storage.

**Different Types of Locality:**
- **Temporal Locality (Locality in Time):** The concept that a memory location that is referenced by a program at one point in time will be referenced again sometime in the near future. If a memory element is referenced, it will tend to be referenced again soon (e.g., loops, reuse). It refers to the phenomenon that once a particular memory location is referenced, it is most likely that it will be referenced next.
- **Spatial Locality (Locality in Space):** If an item is referenced, items whose addresses are close by tend to be referenced soon (e.g., straight-line code, array access). It refers to the phenomenon that when a given address has been referenced, it is most likely that addresses near it will be referenced within a short period of time.
- **Sequential Locality:** Instructions tend to be accessed in sequential order (program order) unless branch instructions create out-of-order executions.

**6. How is a block chosen for replacement in a set-associative cache to resolve a cache miss?** *[WBUT — year not legible]*

**Answer:**

The cache is divided into a number of sets containing an equal number of blocks. Each block in main memory maps into one set in cache memory, similar to direct mapping. Within the set, the cache acts as associative mapping, where a block can occupy any line within that set. Replacement algorithms may be used within the set. However, an incoming block maps to any block in the assigned cache set. Therefore, the address issued by the processor is divided into three distinct fields: the **Tag**, **Set**, and **Word** fields. The Set field is used to uniquely identify the specific cache set that should hold the targeted block. The Tag field uniquely identifies the targeted block within the determined set. The Word field identifies the element (word) within the block that is requested by the processor.

```
|<----------- Main Memory Address ----------->|
|  Tag Field  |  Set Field  |  Word Field  |
```
*Memory address field of set-associative mapped cache organization*

The protocol used by the MMU (Memory Management Unit) to satisfy a request:
1. Use the Set field to determine the specified set.
2. Use the Tag field to find a match with any of the blocks in the determined set. A match in the tag memory indicates that the specified set is currently holding the targeted block — that is, a cache hit.
3. Among the words contained in the hit cache block, the requested word is selected using a selector with the help of the Word field.

If in step 2 no match is found, this indicates a cache miss. The required block has to be brought from main memory, deposited in the specified set first, and the targeted element (word) is made available to the processor. The cache tag memory and the cache block memory are updated accordingly.

**7. A certain program generates the following sequence of word addresses: 4, 5, 12, 8, 10, 28, 6, 10. A page has four words; the number of page frames in main memory is 3. How many page faults are generated if the optimum page-replacement policy is used?** *[WBUT 2013]*

**Answer:**

Sequence of word addresses: 4, 5, 12, 8, 10, 28, 6, 10.

[The OCR page-frame trace is partially garbled.] `[OCR unclear]`

**Total page faults = 7** for the optimum page-replacement policy. `[OCR — unverified]`

**8. A system has a 48-bit virtual address, 36-bit physical address and 128 MB main memory address. If the system has 4096-byte pages, how many virtual / physical pages can have address support? How many page frames in main memory are there?** *[WBUT 2013]*

**Answer:**
$$128\ \text{MB} = 2^{27}\ \text{Bytes}$$
$$\text{Physical Address space} = 2^{36}\ \text{Bytes}$$
$$\text{Page size} = 4096\ \text{Bytes} = 2^{12}\ \text{Bytes}$$
$$\text{No. of Physical Pages} = 2^{36} / 2^{12} = 2^{24}$$
$$\text{No. of Virtual Pages} = 2^{48} / 2^{12} = 2^{36}$$
$$\text{No. of Page Frames in main memory} = 2^{27} / 2^{12} = 2^{15}$$
`[OCR — unverified]`

**9. What is the objective of the OPT page-replacement algorithm policy of virtual memory? Using LRU, show the page-fault rate for the reference string 7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1.** *[WBUT 2013]*

**Answer:**

The page to be replaced is the one that will not be used for the longest period of time. This algorithm requires future knowledge of the reference string, which is not usually available.

[Size of the page frame is not given; assume it is 4.]

[The OCR LRU frame trace is partially garbled.] `[OCR unclear]`

**Total page faults = 8.** `[OCR — unverified]`

**10. An address space is specified by 28 bits and a corresponding memory space of 26 bits. If a page consists of 4K words:** *[WBUT 2013]*
i) How many pages and blocks are there in the system?
ii) The associative-memory page table contains the following entries; make a list of all virtual addresses (in decimal and in binary) that will cause a page fault.

| Page | Block |
|------|-------|
| 0 | 0 |
| 1 | 1 |
| 5 | 2 |
| 6 | 3 |

**Answer:**

[Page size = 4 K = $2^{12}$.]
$$\text{No. of pages} = 2^{28} / 2^{12} = 2^{16}$$
$$\text{No. of blocks} = 2^{26} / 2^{12} = 2^{14}$$

The pages that cause a page fault are pages **2, 3, 4 and 7**. `[OCR — unverified]`

**11. What is cache memory and how is it different from main memory?** *[WBUT 2023]*

**Answer:**

*1st Part:* Refer to "Chapter at a Glance".

*2nd Part:* RAM is the main memory of a computer that stores the operating system, applications, and data, while cache is a small amount of memory used to store frequently accessed data and instructions to speed up processing time. Cache memory is faster but has a smaller capacity than RAM, and it is more expensive.

**12. What is a cache miss and what are the causes of cache misses in a computer system?** *[WBUT 2023]*

**Answer:**

A cache miss occurs when a system seeks data in the cache, but it is absent, necessitating retrieval from another source.

Three reasons for cache misses:
- **Compulsory miss:** the item has never been in the cache.
- **Capacity miss:** the item has been in the cache, but space was tight and it was forced out.
- **Conflict miss:** the item was in the cache, but the cache was not associative enough, so it was forced out.

**13. What is the role of the Memory Management Unit (MMU) in virtual memory management?** *[WBUT 2023]*

**Answer:**

The Memory Management Unit (MMU) is responsible for the translation of virtual addresses used by software to physical addresses used in the memory system.

The MMU contains the following:
- The **table walk unit**, which contains logic that reads the translation tables from memory.
- **Translation Lookaside Buffers (TLBs)**, which cache recently used translations.

All memory addresses issued by software are virtual. These addresses are passed to the MMU, which checks the TLBs for a recently used cached translation. If the MMU does not find a recently cached translation, the table walk unit reads the appropriate table entry (or entries) from memory.

[diagram: virtual address → MMU (TLB caches + table walk unit, with translation tables in memory) → physical address]

A virtual address must be translated to a physical address before a memory access can take place (because we must know which physical memory location we are accessing). This need for translation also applies to cached data, because on ARMv6 and later processors the data caches store data using the physical address (physically tagged). Therefore, the address must be translated before a cache lookup can complete.

---

## Long Answer Type Questions

**1.** *[WBUT 2007, 2011, 2013, 2015]*
**a) How does cache memory affect the throughput of a computer system?**
**b) Distinguish between write-back and write-through cache. / Briefly explain the two write policies: write-through and write-back, with advantages and disadvantages.**
**c) What effect does memory bandwidth have on the effective memory access time?**
**d) What is cache coherence? How can this problem be overcome?**

**Answer:**

**a)** In general, throughput is the amount of data transferred from sender to receiver in a specified period of time. Throughput strongly depends on latency; however, in many cases it can provide better performance than expected by simply dividing cache-line size by latency, because many cache lines can be transferred in parallel. A cache memory system immediately supplies data codes to a central processing unit, and new data codes are written from the CPU into the cache memory system so as to enhance the hit ratio. The new data codes are transferred to a main memory system while there are no predicted bus requests or communication between the CPU, the main memory system, and the cache memory system, so that data throughput is improved without negatively affecting the hit ratio. The performance of cache-based multiprocessors for general-purpose computing and for multitasking is analyzed with simple throughput models. A private cache is associated with each processor, and multiple buses connect the processors to the shared, interleaved memory. With these models, one can obtain a first estimate of the MIPS (millions of instructions per second) rate of a multiprocessor.

**b) Write-through:** Data is updated both in the cache and in main memory. If there is a write buffer for main memory and it is empty, information is written into the cache and the write buffer, and the CPU continues working while the write buffer writes the word to memory. If the write buffer is full, the cache and the CPU must wait until the buffer is empty.

```
CPU <--> L1 Cache <--> L2 Cache <--> MM
```
*Fig: Write-through policy (all the memories have the same copy)*

**Write-back:** Data is written to the cache and updated in main memory only when the cache line is replaced. Information is written only to the block in the cache. The modified cache block is written to main memory only when it is replaced. This requires additional information (hardware or software) called **dirty bits**. A dirty bit is attached to each tag of the cache. Whenever the information in the cache is different from the one in main memory, then it is written back to main memory.

```
CPU <--> L1 Cache <--> L2 Cache <--> MM
```
*Fig: Write-back policy*

**c)** The bandwidth provides a measure of the number of bits per second that can be accessed. The bandwidth $b_i$ refers to the rate at which information is transferred from the $i$-th level to its adjacent levels. Access time refers to how quickly the memory can respond to a read or write request; the access time $t_i$ refers to the time between a request to the $i$-th level of memory and the word arriving from that level of memory to the processor. According to the above definitions, it is obvious that if we increase bandwidth, the access time will be less, because increasing bandwidth increases the bit-transfer rate.

**d)** Memory coherence property can manage the memories of a multiprocessor system so that no data is lost or overwritten before the data is transferred from a cache to the target memory. Memory caching is effective because most programs access the same data or instructions over and over. When multiple processors with separate caches share a common memory, it is necessary to keep the caches in a state of coherence by ensuring that any shared operand that is changed in any cache is changed throughout the entire system. This is done by a directory-based system. In a directory-based system, the data being shared is placed in a common directory that maintains the coherence between caches. The directory acts as a filter through which the processor must ask permission to load an entry from the primary memory to its cache. When an entry is changed, the directory either updates or invalidates the other caches with that entry.

**2.** *[WBUT 2010, 2018, 2019]*
**a) What is cache memory? Define global miss & local miss with a suitable example.**
**b) Describe different techniques to reduce miss penalty. / What is miss penalty?**

**Answer:**

**a)** Cache memory is extremely fast memory that is built into a computer's central processing unit (CPU), or located next to it on a separate chip. The CPU uses cache memory to store instructions that are repeatedly required to run programs, improving overall system speed. Most modern desktop and server CPUs have at least three independent caches: an instruction cache to speed up executable instruction fetch, a data cache to speed up data fetch and store, and a translation lookaside buffer (TLB) to speed up virtual-to-physical address translation for both instructions and data. When the processor needs to read or write a location in main memory, it first checks whether that memory location is in the cache, by comparing the address of the memory location to all tags in the cache that might contain that address. If the processor finds that the memory location is in the cache, a **cache hit** has occurred; otherwise we speak of a **cache miss**. In the case of a cache hit, the processor immediately reads or writes the data in the cache line.

- **Local miss:** the misses with respect to the memory accesses to this cache memory, i.e. the misses in this cache divided by the total number of memory accesses to this cache memory.
- **Global miss:** the misses with respect to the memory accesses by the CPU, i.e. the misses in this cache divided by the total number of memory accesses generated by the CPU.

**b)** Many techniques to reduce miss penalty affect the CPU. One technique ignores the CPU, concentrating on the interface between the cache and main memory: **adding another level of cache** between the original cache and memory. The first-level cache can be small enough to match the clock-cycle time of the fast CPU, yet the second-level cache can be large enough to capture many accesses that would otherwise go to main memory, thereby lessening the effective miss penalty.

Multilevel caches require extra hardware. A second technique is based on the observation that the CPU normally needs just one word of the block at a time. Don't wait for the full block to be loaded before sending the requested word and restarting the CPU. Here are two specific strategies:
- **Critical word first:** Request the missed word first from memory and send it to the CPU as soon as it arrives; let the CPU continue execution while filling the rest of the words in the block. (Also called wrapped fetch and requested word first.)
- **Early restart:** Fetch the words in normal order, but as soon as the requested word of the block arrives, send it to the CPU and let the CPU continue execution.

Generally these techniques only benefit designs with large cache blocks, since the benefit is low unless blocks are large. Given spatial locality, there is more than random chance that the next miss is to the remainder of the block.

Another approach to lower miss penalty is to remember what was discarded in case it is needed again. Since the discarded data has already been fetched, it can be used again at small cost. Such "recycling" requires a small, fully associative cache between a cache and its refill path. This **victim cache** contains only blocks that are discarded from a cache because of a miss, and it is checked on a miss to see if it has the desired data before going to the next lower-level memory. If found there, the victim block and the cache block are swapped.

**3.** *[WBUT 2012]*
**a) An 8 KB 4-way set-associative write-back cache is organized as multiple blocks, each of 32-byte size. Assume that the processor generates 36-bit addresses. Calculate the total size of memory required by the cache controller to store the tags for the cache.**
**b) What are the approaches to improve miss penalty?**
**c) A CPU generates 32-bit virtual addresses. The page size is 4 kB. The processor has a TLB which can hold a total of 256 page-table entries. The TLB is 8-way set-associative. Calculate the TLB tag size.**

**Answer:**

**a)** Total size of the cache memory $= 8\ \text{KB} = 2^{13}$ bytes. 4-way set-associative means each set has 4 blocks, i.e. $2^2$. Size of each block is 32 bytes, i.e. $2^5$. So the address field contains 5-bit word, 2-bit set and 11-bit tag field. `[OCR — unverified]`

**b)** Refer to Question No. 2(b) of Long Answer Type Questions.

**c)** 32-bit virtual address. The page size is 4 KB $= 2^{12}$. The TLB can hold 256 page-table entries, i.e. $2^8$. The TLB is 8-way set-associative, i.e. $2^3$. So the size of the tag field $= 32 - (12 + 8 + 3) = 9$. `[OCR — unverified]`

**4. What are the major differences between segmentation and paging? Why is the page size usually a power of 2?** *[WBUT 2013]*

**Answer:**

*1st Part:*
- **Paging:** Computer memory is divided into small partitions that are all the same size and referred to as **page frames**. Pages are fixed units of computer memory allocated for storing and processing information. Paging is a virtual memory scheme that is transparent to the program at the application level. When a process is loaded, it gets divided into pages which are the same size as the frames. The process pages are then loaded into the frames.
- **Segmentation:** Computer memory is allocated in various sizes (**segments**) depending on the need for address space by the process. The address space is typically divided into a preset number of segments such as data segment (read/write), code segment (read-only), stack (read/write), etc. These segments may be individually protected or shared between processes. "Segmentation faults" in programs occur because the data about to be read or written is outside the permitted address space of that process.

*2nd Part:* Paging is implemented by breaking up an address into a page number and an offset. It is most efficient to break the address into $X$ page bits and $Y$ offset bits, rather than performing arithmetic on the address to calculate the page number and offset. Because each bit position represents a power of 2, splitting an address at a bit boundary results in a page size that is a power of 2.

**5. A computer has a 1 KB 4-way set-associative cache and 1 MB main memory. If the block size is 64 B, then in which cache set are the words (ABCDE)₁₆ and (EDCBA)₁₆ mapped?** *[WBUT 2014]*

**Answer:**
$$\text{Cache size} = 1\ \text{KB} = 2^{10}$$
$$\text{Block size} = 64\ \text{Bytes} = 2^{6}$$
$$\text{No. of blocks in cache memory} = 2^{10} / 2^{6} = 2^{4}$$
This is 4-way set-associative mapping, so:
$$\text{No. of sets in cache memory} = 2^{4} / 2^{2} = 2^{2}$$
$$\text{Size of main memory} = 1\ \text{MB} = 2^{20}$$
$$\text{No. of blocks in main memory} = 2^{20} / 2^{6} = 2^{14}$$

So the word (ABCDE)₁₆ will be in block no. (10995)₁₀. [Take the binary value of (ABCDE)₁₆ and consider the first 14 bits as the block number.] This block will be in set no. $= 10995 \bmod 4 = 3$.

Similarly, the word (EDCBA)₁₆ will be in block no. (15218)₁₀, and this will be in set no. $= 15218 \bmod 4 = 2$. `[OCR — unverified]`

**6.** *[WBUT 2015]*
**a) What is meant by the cache miss penalty? Briefly discuss the "early restart" technique to reduce miss penalty.**
**b) Consider a memory system consisting of main memory and cache memory. In case of a cache miss, assume the basic memory organization performance as:**
- 4 clock cycles to send the address
- 24 clock cycles for the access time per word
- 4 clock cycles to send a word of data

**i) What will be the miss penalty, given a cache block of four words?**
**ii) What will be the memory bandwidth?**

**Answer:**

**a)** Refer to Question No. 3 of Long Answer Type Questions.
**b)** Refer to Question No. 1 of Short Answer Type Questions.

**7. What is the difference between broadcast and invalidate protocols? Explain the MESI protocol. The value of X (shared memory) is 50. P1 and P3 want to read X and store it in their cache. At time t1, P1 wants to write on X three times. After that, P3 wants to read twice. After that, first P3 writes on X and then P2 wants to read. Explain the above scenario using write-through update, write-back update, write-through invalidate, and write-back invalidate protocols.** *[WBUT 2016]*

**Answer:**

*1st part — Difference between broadcast and invalidate protocols:* The performance differences between write-broadcast (update) and write-invalidate protocols arise from three characteristics:
1. Multiple writes to the same word with no intervening reads require multiple write broadcasts in an update protocol, but only one initial invalidation in a write-invalidate protocol.
2. With multiword cache blocks, each word written in a cache block requires a write broadcast in an update protocol, although only the first write to any word in the block needs to generate an invalidate in an invalidation protocol. An invalidation protocol works on cache blocks, while an update protocol must work on individual words (or bytes, when bytes are written).
3. The delay between writing a word in one processor and reading the written value in another processor is usually less in a write-update scheme, since the written data are immediately updated in the reader's cache.

*2nd part — MESI protocol:* The MESI protocol is an invalidate-based cache coherence protocol and is one of the most common protocols that support write-back caches. By using write-back caches, we save a lot on bandwidth that is generally wasted on a write-through cache. There is always a dirty state present in write-back caches which indicates that the data in the cache is different from that in main memory. This protocol reduces the number of main-memory transactions with respect to the MSI protocol, a significant improvement in performance.

*3rd part:*
- **Write-update:** When a local cache block is updated, the new data block is broadcast to all caches containing a copy of the block, updating them. Every write is observable and every write goes on the bus, i.e. only one write can take place at a time in any processor. So P1 performs 3 write operations first, then P3 performs one write operation.
- **Write-invalidate:** Invalidate all remote copies of a cache block when a local cache block is updated. The simplest snoopy protocol is the write-invalidate protocol based on write-through caches. The caches and memory are interconnected by a bus. At the start, each processor sends its first request to its cache and, when it receives a response, issues the next request in the succeeding clock period. Any packet sent to the bus is forwarded to all the caches and the memory. The memory only responds to packets sent to it; a packet sent from the memory contains the same source address as the packet it received.

The state of a cache-block copy of a local processor can take one of two states:
- **Valid State:** All processors can read safely; the local processor can also write.
- **Invalid State (not in cache):** Block is being invalidated; block is being replaced.

When a remote processor writes to its cache copy, all other cache copies become invalidated.

**8. What do you mean by memory fragmentation? What is the advantage of using paging? Explain the virtual memory concept with an example where the logical address space is 8 kB, physical address space is 4 kB, page size is 1 kB. Find the page faults with FIFO and LRU algorithms.** *[WBUT 2016]*

**Answer:**

*1st part:* Memory fragmentation occurs when a system contains memory that is technically free but that the computer can't utilize. The memory allocator, which assigns needed memory to various tasks, divides and allocates memory blocks as required by programs. When data is deleted, more memory blocks are freed up and added back to the pool of available memory. When the allocator's actions or the restoration of previously occupied memory segments leads to blocks (or even bytes) of memory that are too small or too isolated to be used, fragmentation has occurred. It is of two types:
1. External fragmentation
2. Internal fragmentation

*2nd part — Advantages of using paging:*
- Allocating memory is easy and cheap.
- Eliminates external fragmentation.
- Data (page frames) can be scattered all over physical memory; pages are mapped appropriately anyway.
- Allows demand paging.
- More efficient swapping.
- No need for considerations about fragmentation — just swap out the page least likely to be used.

*3rd part:* The size of the page and page frame are the same. The system loads pages into frames and translates addresses. We can represent:
- logical address: $va = (p, w)$
- physical address: $pa = (f, w)$, where
  - $|p|$ determines the number of pages in virtual memory
  - $|f|$ determines the number of frames in physical memory
  - $|w|$ determines the page/frame size

With logical address space 8 kB, physical address space 4 kB, and page size 1 kB, there are 8 pages in virtual memory and 4 frames in physical memory.

[diagram: mapping between virtual address (Page 0–7, page table maintained by OS, one entry per page) and physical address (Frame 0–3)]

*4th part — FIFO:*
- A simple and obvious page-replacement strategy is FIFO (first-in-first-out).
- As new pages are brought in, they are added to the tail of a queue, and the page at the head of the queue is the next victim. In the example given, 20 page requests result in **15 page faults**. `[OCR — unverified]`

[diagram: FIFO page-replacement algorithm trace for reference string 7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1]

*LRU:* Refer to Question No. 9 of Short Answer Type Questions. `[reference number per OCR cross-reference; OCR — unverified]`

**9.** *[WBUT 2017]*
**a) A computer has 512 kB cache memory and 2 MB main memory. If the block size is 64 bytes, find the subfields for:**
i) associative memory
ii) direct mapping
iii) set-associative mapping
**b) How does cache memory increase the speed of processing? Explain.**

**Answer:**

**a)** Block size $= 64$ bytes.

i) **Associative memory:**

```
| Tag field | Word field |
|  T bits   |   6 bits   |    (Word field = log2(64) = 6 bits)
```

ii) **Direct mapping:**

```
| Tag field | Block field | Word field |
| (s-r) bits |   r bits   |   w bits   |
```
[OCR shows generic field widths; specific bit counts for this size are not legibly given.] `[OCR unclear]`

iii) **Set-associative mapping:** Set-associative mapping should be $m$-way set-associative. The value of $m$ may be 2, 4, 8, 16, etc. Here no value of $m$ is given, so (per the source) the question is treated as incomplete. `[OCR — unverified]`

**b)** Reducing the cache miss rate lets cache memory increase the speed of processing. Three techniques to reduce the miss rate:
- **Larger cache block size:** A larger block size reduces compulsory misses. Assuming cache size is constant, a larger block size also reduces the number of blocks and increases conflict misses. If a program were one long basic block, doubling the block size would result in half as many instruction-cache misses: every new instruction-cache block executed would be a compulsory miss (because it was never visited before), but the program would span half as many blocks.
- **Larger caches:** Large caches reduce capacity misses. They might increase the hit time. Larger caches take more advantage of temporal locality, since cache blocks are not replaced as quickly. This is particularly important for scientific computing data caches that may work on large matrices. However, larger caches are slower caches — the miss reduction comes at the expense of longer hit time, and the size of the cache is limited by cost. So these are the limitations of large caches.
- **[Non-blocking caches / prefetching of data]:** [OCR unclear]

**10. A hierarchical cache–main memory subsystem has the following characteristics: cache access time 50 ns; main memory access time 500 ns; 80% of memory requests are for read; hit ratio 0.9 for read access; and a write-through scheme is used.** *[WBUT 2017]*
**i) Calculate the average access time of the memory system considering only memory read cycles.**
**ii) Calculate the average access time of the memory system considering both read and write cycles.**

**Answer:**

i) Average access time considering only memory read cycle:
$$(50 \times 0.9 + 500 \times 0.1) \times 0.8 = 76\ \text{ns} \quad \texttt{[OCR — unverified]}$$

ii) Average access time of the memory system for both read and write cycles:
$$(50 \times 0.9 + \ldots) \quad \texttt{[OCR unclear — remainder of expression not legible]}$$

**11. What is cache mapping? What is set-associative mapping in cache memory?** *[WBUT 2018]*

**Answer:**

*1st Part:* Cache mapping is the method by which the contents of main memory are brought into the cache and referenced by the CPU. The mapping method used directly affects the performance of the entire computer system.

*2nd Part — Set-associative mapping:* Set-associative cache mapping combines the best of direct and associative cache mapping techniques. As with a direct-mapped cache, blocks of main-memory data still map into a specific set, but they can now be in any of the $N$ cache block frames within each set.

[diagram: set-associative mapping — main-memory block frames BLK(0)…BLK(n-1) mapping into SET(0), SET(1), SET(2)… of the cache, with cache control to CPU]

**12.** *[WBUT 2023]*
**a) Describe the concept of virtual memory.**
**b) Explain how it is implemented in modern computer systems.**

**Answer:**

**a)** Refer to "Chapter at a Glance".
**b)** Refer to Question No. 1(d) of Long Answer Type Questions. `[OCR cross-reference partially garbled; OCR — unverified]`

**13. A system has a 64-bit virtual address space and 4 KB page size. The page table is stored in main memory, which has a memory access time of 100 ns. The TLB has a hit rate of 90% and a TLB miss takes 500 ns to service. What is the effective memory access time?** *[WBUT 2023]*

**Answer:**

The TLB is used with page tables as follows. The TLB contains page-table entries. When a logical address is generated by the CPU, its page number is presented to the TLB. If the page number is found, its frame number is immediately available and is used to access memory. If the page number is not in the TLB (a TLB miss), a memory reference to the page table must be made; when the frame number is obtained, it is used to access memory, and the page number and frame number are added to the TLB so they will be found quickly on the next reference. If the TLB is already full, the operating system selects an entry for replacement (policies range from least-recently-used (LRU) to random). Some TLBs allow entries to be wired down so that they cannot be removed; typically TLB entries for kernel code are wired down.

$$\text{Effective access time} = H \times (\text{TLB access time} + \text{Memory access time}) + (1-H) \times (\text{TLB access time} + \text{Page table access time} + \text{Memory access time})$$

- Hit ratio $H = 90\% = 0.9$
- Miss ratio $(1 - H) = 10\% = 0.1$
- TLB access time $= T$
- Memory access time $= M = 100$ ns

Page found in TLB $= T + M$.
Page not found in TLB $= T + 2M = 500$ ns $\Rightarrow T + 2 \times 100 = 500 \Rightarrow T + 200 = 500 \Rightarrow T = 300$ ns.

So, page found in TLB $= T + M = 300 + 100 = 400$ ns. Hence:
$$\text{Effective access time} = 0.9 \times 400 + 0.1 \times 500 = 360 + 50 = 410\ \text{ns} \quad \texttt{[OCR — unverified]}$$

**14. Write short notes on the following:**
**a) Cache coherence problem and its solutions** *[WBUT 2012, 2014, 2018]*
**b) Virtual memory** *[WBUT 2019]*
**c) TLB** *[WBUT 2018]*
**d) Paging** *[WBUT 2019]*

**Answer:**

**a) Cache coherence problem and its solutions:** Refer to Question No. 4 of Short Answer Type Questions.

**b) Virtual memory:** Virtual memory is a valuable concept in computer architecture that allows you to run large, sophisticated programs on a computer even if it has a relatively small amount of RAM. A computer with virtual memory artfully juggles the conflicting demands of multiple programs within a fixed amount of physical memory. A PC that is low on memory can run the same programs as one with abundant RAM, although more slowly.

*Physical vs. Virtual Addresses:* A computer accesses the contents of its RAM through a system of addresses, which are essentially numbers that locate each byte. Because the amount of memory varies from PC to PC, determining which software will work [OCR unclear — passage truncated at end of chapter].

**c) TLB:** [The source directs this note to the TLB material covered in the MMU / TLB answers above; standalone note text not separately legible in OCR.] `[OCR unclear]`

**d) Paging:** [The source directs this note to the paging material covered above; standalone note text not separately legible in OCR.] `[OCR unclear]`

---

*End of Chapter 2 (Memory).*
