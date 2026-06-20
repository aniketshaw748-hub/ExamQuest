import { useState } from "react";
import { motion } from "motion/react";
import { Tex } from "../lib/rich.jsx";

// Alphabet -> strings -> language. List Sigma* up to a length, then highlight the strings
// that belong to a chosen language (a subset of Sigma*).
const LANGS = {
  ends0: { label: "ends in 0", test: (s) => s.endsWith("0") },
  has1: { label: "contains a 1", test: (s) => s.includes("1") },
  even: { label: "even length", test: (s) => s.length % 2 === 0 },
};

export default function LangSetExplainer() {
  const [maxLen, setMaxLen] = useState(2);
  const [key, setKey] = useState("ends0");
  const lang = LANGS[key];
  const strings = [];
  for (let L = 0; L <= maxLen; L++) for (let i = 0; i < 2 ** L; i++) strings.push(L === 0 ? "" : i.toString(2).padStart(L, "0"));

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
        <div className="flex flex-wrap gap-1.5">
          {Object.entries(LANGS).map(([k, v]) => (
            <button key={k} onClick={() => setKey(k)} className={"rounded-full border px-2.5 py-1 text-[11px] transition-colors " + (k === key ? "border-amber bg-amber/15 text-amber" : "border-line text-dim hover:text-muted")}>{v.label}</button>
          ))}
        </div>
      </div>
      <p className="mt-2 text-[12px] text-muted">Alphabet <Tex>{`\\Sigma = \\{0,1\\}`}</Tex>. Highlighted strings form the language <Tex>L</Tex> ("{lang.label}"), a subset of <Tex>{`\\Sigma^*`}</Tex>.</p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {strings.map((s) => {
          const inL = lang.test(s);
          return (
            <motion.span key={s || "eps"} layout initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              className="grid h-7 min-w-7 place-items-center rounded-[7px] border px-1.5 font-mono text-[12px]"
              style={{ borderColor: inL ? "var(--color-amber)" : "var(--color-line)", background: inL ? "rgba(246,181,61,0.15)" : "var(--color-surface)", color: inL ? "var(--color-amber)" : "var(--color-dim)" }}>
              {s === "" ? "ε" : s}
            </motion.span>
          );
        })}
      </div>

      <div className="mt-3"><label className="block">
        <span className="text-[12px] text-muted">show strings up to length <b className="text-text tabular-nums">{maxLen}</b> ({strings.length} strings)</span>
        <input type="range" min={0} max={4} step={1} value={maxLen} onChange={(e) => setMaxLen(+e.target.value)} className="mt-1.5 w-full accent-amber" />
      </label></div>
      <p className="mt-2 text-[12px] text-muted"><Tex>{`\\Sigma^*`}</Tex> is every string over <Tex>{`\\Sigma`}</Tex> (including the empty string <Tex>{`\\varepsilon`}</Tex>); a language is any subset you choose.</p>
    </div>
  );
}
