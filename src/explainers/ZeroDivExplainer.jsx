import { useState } from "react";
import { Tex } from "../lib/rich.jsx";
import { znTable, zeroDivisors, isPrime } from "../lib/algebra.js";

// Zn multiplication table. Zero-divisor products (a·b ≡ 0 with a,b ≠ 0) glow rose.
// n prime => no zero divisors => Zn is a field; n composite => zero divisors => not even a domain.
export default function ZeroDivExplainer() {
  const [n, setN] = useState(6);
  const T = znTable(n, "x");
  const zds = new Set(zeroDivisors(n));
  const prime = isPrime(n);

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
      <div className="mt-3"><Slider label="n" value={n} set={setN} min={2} max={9} /></div>

      <div className="mt-4 overflow-x-auto">
        <table className="border-collapse text-center font-mono text-[12px]">
          <thead>
            <tr><th className="px-2 py-1 text-amber"><Tex>\times</Tex></th>{T[0].map((_, j) => <th key={j} className="px-2 py-1 text-dim">{j}</th>)}</tr>
          </thead>
          <tbody>
            {T.map((row, i) => (
              <tr key={i}>
                <th className="px-2 py-1 text-dim">{i}</th>
                {row.map((v, j) => {
                  const zero = v === 0 && i !== 0 && j !== 0; // nonzero × nonzero = 0
                  return <td key={j} className={"px-2 py-1 " + (zero ? "rounded bg-rose/25 font-bold text-rose" : v === 1 ? "text-emerald" : "text-text")}>{v}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-[12px]">
        <span className="text-dim">zero divisors:</span>
        {zds.size ? [...zds].map((z) => <span key={z} className="rounded bg-rose/20 px-1.5 font-mono text-rose">{z}</span>) : <span className="text-emerald">none</span>}
      </div>
      <p className="mt-3 text-[13px]">
        {prime
          ? <span className="text-emerald"><Tex>{`\\mathbb{Z}_{${n}}`}</Tex> has no zero divisors and every non-zero element is a unit, so it is a <b>field</b> (and a finite integral domain).</span>
          : <span className="text-rose"><Tex>{`\\mathbb{Z}_{${n}}`}</Tex> has zero divisors (e.g. a non-zero product hitting 0), so it is <b>not</b> an integral domain, hence not a field.</span>}
      </p>
      <p className="mt-2 text-[12px] text-muted">Key theorem: every finite integral domain is a field. $\\mathbb{Z}_n$ is a field exactly when $n$ is prime.</p>
    </div>
  );
}

function Slider({ label, value, set, min, max }) {
  return (
    <label className="block">
      <span className="text-[12px] text-muted">{label} = <b className="text-text tabular-nums">{value}</b></span>
      <input type="range" min={min} max={max} step={1} value={value} onChange={(e) => set(+e.target.value)} className="mt-1.5 w-full accent-amber" />
    </label>
  );
}
