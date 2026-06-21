import { Sigma, TreeStructure, Robot, Cpu, Flask, Leaf, Dna } from "@phosphor-icons/react";

// The Sem-4 subjects. `bespoke` marks subjects with authored ladders + interactive explainers for
// every lesson. `video` is a topic-complete YouTube explainer playlist (for learners who prefer
// video), mapped to the MAKAUT syllabus.
export const SUBJECTS = [
  { key: "dmaths", name: "Discrete Mathematics", file: "data/dmaths.json", icon: Sigma, world: "World II", title: "The Logic\nKingdom", blurb: "Sets, induction, counting, logic, structures and graphs. Learn each idea through motion, then beat the questions the exam asks most.", bespoke: true, video: { url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiH2wwES9vPWsEL6ipTaUSl3", channel: "Gate Smashers" } },
  { key: "daa", name: "Design & Analysis of Algorithms", file: "data/daa.json", icon: TreeStructure, world: "World III", title: "The Algorithm\nForge", blurb: "Greedy, divide and conquer, dynamic programming, graph traversal and the tractable vs intractable frontier.", bespoke: true, video: { url: "https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O", channel: "Abdul Bari" } },
  { key: "automata", name: "Formal Language & Automata Theory", file: "data/automata.json", icon: Robot, world: "World IV", title: "The Machine\nLattice", blurb: "Finite automata, regular and context-free languages, pushdown automata and Turing machines.", bespoke: true, video: { url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgp46KUv4ZY69yXmpwKOIev", channel: "Neso Academy" } },
  { key: "ca", name: "Computer Architecture", file: "data/ca.json", icon: Cpu, world: "World V", title: "The Silicon\nCitadel", blurb: "Pipelines, memory hierarchy, vector processors, Flynn's taxonomy and RISC vs CISC.", bespoke: true, video: { url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX", channel: "Gate Smashers" } },
  { key: "chemistry", name: "Chemistry", file: "data/chemistry.json", icon: Flask, world: "Sem 2 · back paper", title: "The Reaction\nLab", blurb: "Atomic structure, spectroscopy, thermodynamics, electrochemistry and organic synthesis.", bespoke: true, back: true, video: { url: "https://www.youtube.com/playlist?list=PLM9E7EXMIP3i13N_8lljeiENTCxip7vIa", channel: "IAE Academy" } },
  { key: "evs", name: "Environmental Science", file: "data/evs.json", icon: Leaf, world: "World VII", title: "The Living\nBiome", blurb: "Ecology, air, water, land and noise pollution control, and environmental management.", bespoke: true, video: { url: "https://www.youtube.com/playlist?list=PLecD98TA83BXrotSi6JB9rocThXORyhLP", channel: "Makaut Smashers" } },
  { key: "biology", name: "Biology for Engineers", file: "data/biology.json", icon: Dna, world: "World VIII", title: "The Living\nCode", blurb: "Cells, genetics, biomolecules, enzymes, the central dogma, metabolism and microbiology, built for the BSC401 exam.", bespoke: false, video: { url: "https://www.youtube.com/playlist?list=PLM9E7EXMIP3gA8-IoVr3wg019u8fX79__", channel: "IAE Academy" } },
];

export const getSubject = (key) => SUBJECTS.find((s) => s.key === key) || SUBJECTS[0];
