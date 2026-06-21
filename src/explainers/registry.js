import VennExplainer from "./VennExplainer.jsx";
import CartesianExplainer from "./CartesianExplainer.jsx";
import RelationExplainer from "./RelationExplainer.jsx";
import CountExplainer from "./CountExplainer.jsx";
import FunctionExplainer from "./FunctionExplainer.jsx";
import DomainRangeExplainer from "./DomainRangeExplainer.jsx";
import DivisionExplainer from "./DivisionExplainer.jsx";
import EuclidExplainer from "./EuclidExplainer.jsx";
import BezoutExplainer from "./BezoutExplainer.jsx";
import ModClockExplainer from "./ModClockExplainer.jsx";
import InductionExplainer from "./InductionExplainer.jsx";
import WellOrderExplainer from "./WellOrderExplainer.jsx";
import CountTreeExplainer from "./CountTreeExplainer.jsx";
import PermuteExplainer from "./PermuteExplainer.jsx";
import CombineExplainer from "./CombineExplainer.jsx";
import CircularExplainer from "./CircularExplainer.jsx";
import PigeonholeExplainer from "./PigeonholeExplainer.jsx";
import InclExclExplainer from "./InclExclExplainer.jsx";
import ConnectivesExplainer from "./ConnectivesExplainer.jsx";
import TruthTableExplainer from "./TruthTableExplainer.jsx";
import EquivalenceExplainer from "./EquivalenceExplainer.jsx";
import ImplicationExplainer from "./ImplicationExplainer.jsx";
import NormalFormExplainer from "./NormalFormExplainer.jsx";
import QuantifierExplainer from "./QuantifierExplainer.jsx";
import CayleyExplainer from "./CayleyExplainer.jsx";
import HierarchyExplainer from "./HierarchyExplainer.jsx";
import RingExplainer from "./RingExplainer.jsx";
import ZeroDivExplainer from "./ZeroDivExplainer.jsx";
import IdealExplainer from "./IdealExplainer.jsx";
import HomomorphismExplainer from "./HomomorphismExplainer.jsx";
import BigOExplainer from "./BigOExplainer.jsx";
import AutomatonExplainer from "./AutomatonExplainer.jsx";
import PumpingExplainer from "./PumpingExplainer.jsx";
import SubsetExplainer from "./SubsetExplainer.jsx";
import RegexExplainer from "./RegexExplainer.jsx";
import MinimizeExplainer from "./MinimizeExplainer.jsx";
import LangSetExplainer from "./LangSetExplainer.jsx";
import DerivationExplainer from "./DerivationExplainer.jsx";
import ChomskyExplainer from "./ChomskyExplainer.jsx";
import ComplexityExplainer from "./ComplexityExplainer.jsx";
import MasterExplainer from "./MasterExplainer.jsx";
import RecTreeExplainer from "./RecTreeExplainer.jsx";
import PdaExplainer from "./PdaExplainer.jsx";
import CflPumpExplainer from "./CflPumpExplainer.jsx";
import ParseTreeExplainer from "./ParseTreeExplainer.jsx";
import TuringExplainer from "./TuringExplainer.jsx";
import HaltingExplainer from "./HaltingExplainer.jsx";
import GreedyExplainer from "./GreedyExplainer.jsx";
import DpTableExplainer from "./DpTableExplainer.jsx";
import DijkstraExplainer from "./DijkstraExplainer.jsx";
import NpClassesExplainer from "./NpClassesExplainer.jsx";
import ReductionExplainer from "./ReductionExplainer.jsx";
import ApproxRatioExplainer from "./ApproxRatioExplainer.jsx";
import PipelineExplainer from "./PipelineExplainer.jsx";
import MemHierarchyExplainer from "./MemHierarchyExplainer.jsx";
import CacheExplainer from "./CacheExplainer.jsx";
import FlynnExplainer from "./FlynnExplainer.jsx";
import RiscCiscExplainer from "./RiscCiscExplainer.jsx";
import IpcExplainer from "./IpcExplainer.jsx";
import AtomExplainer from "./AtomExplainer.jsx";
import DeBroglieExplainer from "./DeBroglieExplainer.jsx";
import MotExplainer from "./MotExplainer.jsx";
import SpectrumExplainer from "./SpectrumExplainer.jsx";
import MassSpecExplainer from "./MassSpecExplainer.jsx";
import LjPotentialExplainer from "./LjPotentialExplainer.jsx";
import RealGasExplainer from "./RealGasExplainer.jsx";
import FirstLawExplainer from "./FirstLawExplainer.jsx";
import ReversibleExplainer from "./ReversibleExplainer.jsx";
import CarnotExplainer from "./CarnotExplainer.jsx";
import GibbsExplainer from "./GibbsExplainer.jsx";
import GraphDegreeExplainer from "./GraphDegreeExplainer.jsx";
import TreeExplainer from "./TreeExplainer.jsx";
import ColoringExplainer from "./ColoringExplainer.jsx";
import ChromaticPolyExplainer from "./ChromaticPolyExplainer.jsx";
import AdjMatrixExplainer from "./AdjMatrixExplainer.jsx";
import PlanarExplainer from "./PlanarExplainer.jsx";

export const EXPLAINERS = {
  // ch1 — sets, relations, functions
  venn: VennExplainer,
  cartesian: CartesianExplainer,
  relation: RelationExplainer,
  count: CountExplainer,
  function: FunctionExplainer,
  domainrange: DomainRangeExplainer,
  // ch2 — number theory & induction
  divalg: DivisionExplainer,
  euclid: EuclidExplainer,
  bezout: BezoutExplainer,
  modclock: ModClockExplainer,
  induction: InductionExplainer,
  wellorder: WellOrderExplainer,
  // ch3 — counting
  counttree: CountTreeExplainer,
  permute: PermuteExplainer,
  combine: CombineExplainer,
  circular: CircularExplainer,
  pigeonhole: PigeonholeExplainer,
  inclexcl: InclExclExplainer,
  // ch4 — propositional logic
  connectives: ConnectivesExplainer,
  truthtable: TruthTableExplainer,
  equivalence: EquivalenceExplainer,
  implication: ImplicationExplainer,
  normalform: NormalFormExplainer,
  quantifier: QuantifierExplainer,
  // ch5 — algebraic structures
  cayley: CayleyExplainer,
  hierarchy: HierarchyExplainer,
  ring: RingExplainer,
  zerodiv: ZeroDivExplainer,
  ideal: IdealExplainer,
  homomorphism: HomomorphismExplainer,
  // ch6 — graphs and trees
  graph: GraphDegreeExplainer,
  tree: TreeExplainer,
  coloring: ColoringExplainer,
  chromatic: ChromaticPolyExplainer,
  gmatrix: AdjMatrixExplainer,
  planar: PlanarExplainer,
  // daa
  bigo: BigOExplainer,
  // automata
  automaton: AutomatonExplainer,
  pumping: PumpingExplainer,
  subset: SubsetExplainer,
  regex: RegexExplainer,
  minimize: MinimizeExplainer,
  langset: LangSetExplainer,
  derivation: DerivationExplainer,
  chomsky: ChomskyExplainer,
  parsetree: ParseTreeExplainer,
  cflpump: CflPumpExplainer,
  pda: PdaExplainer,
  turing: TuringExplainer,
  halting: HaltingExplainer,
  // daa (more)
  complexity: ComplexityExplainer,
  master: MasterExplainer,
  rectree: RecTreeExplainer,
  greedy: GreedyExplainer,
  dptable: DpTableExplainer,
  dijkstra: DijkstraExplainer,
  npclasses: NpClassesExplainer,
  reduction: ReductionExplainer,
  approxratio: ApproxRatioExplainer,
  // ca
  pipeline: PipelineExplainer,
  memhierarchy: MemHierarchyExplainer,
  cache: CacheExplainer,
  flynn: FlynnExplainer,
  risccisc: RiscCiscExplainer,
  ipc: IpcExplainer,
  // chemistry
  atom: AtomExplainer,
  debroglie: DeBroglieExplainer,
  mot: MotExplainer,
  spectrum: SpectrumExplainer,
  massspec: MassSpecExplainer,
  ljpotential: LjPotentialExplainer,
  realgas: RealGasExplainer,
  firstlaw: FirstLawExplainer,
  reversible: ReversibleExplainer,
  carnot: CarnotExplainer,
  gibbs: GibbsExplainer,
};
