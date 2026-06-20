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
};
