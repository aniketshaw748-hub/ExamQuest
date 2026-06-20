// Tiny propositional-logic engine shared by the ch4 explainers.
// Formulas are plain JS predicate functions over an assignment object {p:true,...},
// so every truth table / classification / normal form is computed, never hand-typed.

export const TF = (b) => (b ? "T" : "F");
export const NOT = (x) => !x;
export const AND = (x, y) => x && y;
export const OR = (x, y) => x || y;
export const IMP = (x, y) => !x || y;
export const IFF = (x, y) => x === y;

// all assignments for vars, in standard order (first var = most significant, T before F)
export function rows(vars) {
  const n = vars.length, out = [];
  for (let i = (1 << n) - 1; i >= 0; i--) {
    const a = {};
    for (let j = 0; j < n; j++) a[vars[j]] = !!(i & (1 << (n - 1 - j)));
    out.push(a);
  }
  return out;
}

export function table(vars, fn) {
  return rows(vars).map((a) => ({ a, v: fn(a) }));
}

export function classify(vars, fn) {
  const vs = table(vars, fn).map((r) => r.v);
  if (vs.every(Boolean)) return "tautology";
  if (vs.every((v) => !v)) return "contradiction";
  return "contingency";
}

export function equivalent(vars, f, g) {
  return table(vars, f).every((r, i) => r.v === g(r.a));
}

const minterm = (vars, a) => vars.map((v) => (a[v] ? v : `\\lnot ${v}`)).join("\\land ");
const maxterm = (vars, a) => vars.map((v) => (a[v] ? `\\lnot ${v}` : v)).join("\\lor ");

// DNF = OR of minterms on the true rows; CNF = AND of maxterms on the false rows
export function dnf(vars, fn) {
  const ts = table(vars, fn).filter((r) => r.v);
  if (!ts.length) return "F";
  return ts.map((r) => `(${minterm(vars, r.a)})`).join(" \\lor ");
}
export function cnf(vars, fn) {
  const fs = table(vars, fn).filter((r) => !r.v);
  if (!fs.length) return "T";
  return fs.map((r) => `(${maxterm(vars, r.a)})`).join(" \\land ");
}
