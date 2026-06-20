// Graph helpers shared by the ch6 explainers.

export const vpos = (n, cx = 70, cy = 70, r = 52) =>
  Array.from({ length: n }, (_, i) => {
    const a = (-90 + (360 / n) * i) * (Math.PI / 180);
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a), i };
  });

export const ekey = (a, b) => (a < b ? `${a}-${b}` : `${b}-${a}`);

export function degrees(n, edgeSet) {
  const d = Array(n).fill(0);
  for (const e of edgeSet) { const [a, b] = e.split("-").map(Number); d[a]++; d[b]++; }
  return d;
}

// chromatic polynomials P(G,k)
export const chromComplete = (n, k) => { let p = 1; for (let i = 0; i < n; i++) p *= k - i; return p; }; // k(k-1)...(k-n+1)
export const chromTree = (n, k) => (n >= 1 ? k * Math.pow(k - 1, n - 1) : 0);
export const chromCycle = (n, k) => Math.pow(k - 1, n) + Math.pow(-1, n) * (k - 1);
export const chromNull = (n, k) => Math.pow(k, n); // no edges

export const chromCompleteTex = (n) => Array.from({ length: n }, (_, i) => (i === 0 ? "k" : `(k-${i})`)).join("");
