import { Sigma, TreeStructure, Robot, Cpu, Flask, Leaf } from "@phosphor-icons/react";

// The six Sem-4 subjects. Every subject is now fully illustrated (authored ladders + interactive
// explainers for every lesson), so `bespoke` is true across the board.
export const SUBJECTS = [
  { key: "dmaths", name: "Discrete Mathematics", file: "data/dmaths.json", icon: Sigma, world: "World II", title: "The Logic\nKingdom", blurb: "Sets, induction, counting, logic, structures and graphs. Learn each idea through motion, then beat the questions the exam asks most.", bespoke: true },
  { key: "daa", name: "Design & Analysis of Algorithms", file: "data/daa.json", icon: TreeStructure, world: "World III", title: "The Algorithm\nForge", blurb: "Greedy, divide and conquer, dynamic programming, graph traversal and the tractable vs intractable frontier.", bespoke: true },
  { key: "automata", name: "Formal Language & Automata Theory", file: "data/automata.json", icon: Robot, world: "World IV", title: "The Machine\nLattice", blurb: "Finite automata, regular and context-free languages, pushdown automata and Turing machines.", bespoke: true },
  { key: "ca", name: "Computer Architecture", file: "data/ca.json", icon: Cpu, world: "World V", title: "The Silicon\nCitadel", blurb: "Pipelines, memory hierarchy, vector processors, Flynn's taxonomy and RISC vs CISC.", bespoke: true },
  { key: "chemistry", name: "Chemistry", file: "data/chemistry.json", icon: Flask, world: "World VI", title: "The Reaction\nLab", blurb: "Atomic structure, spectroscopy, thermodynamics, electrochemistry and organic synthesis.", bespoke: true },
  { key: "evs", name: "Environmental Science", file: "data/evs.json", icon: Leaf, world: "World VII", title: "The Living\nBiome", blurb: "Ecology, air, water, land and noise pollution control, and environmental management.", bespoke: true },
];

export const getSubject = (key) => SUBJECTS.find((s) => s.key === key) || SUBJECTS[0];
