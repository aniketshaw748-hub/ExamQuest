import { useState } from "react";
import { motion } from "motion/react";

// RISC vs CISC, side by side. Toggle to highlight one philosophy; the rows show where each
// puts the complexity (simple fixed instructions + clever compiler vs rich variable ones).
const ROWS = [
  { k: "instructions", risc: "few, simple", cisc: "many, complex" },
  { k: "encoding", risc: "fixed length", cisc: "variable length" },
  { k: "cycles / instr", risc: "mostly 1 (pipelined)", cisc: "varies, multi-cycle" },
  { k: "memory access", risc: "load/store only", cisc: "operate on memory directly" },
  { k: "registers", risc: "many", cisc: "fewer" },
  { k: "complexity in", risc: "the compiler", cisc: "the hardware" },
];

export default function RiscCiscExplainer() {
  const [sel, setSel] = useState(null); // "risc" | "cisc" | null

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
        <div className="flex gap-1.5">
          <button onClick={() => setSel(sel === "risc" ? null : "risc")} className={"rounded-full border px-2.5 py-1 text-[11px] " + (sel === "risc" ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>RISC</button>
          <button onClick={() => setSel(sel === "cisc" ? null : "cisc")} className={"rounded-full border px-2.5 py-1 text-[11px] " + (sel === "cisc" ? "border-[#6aa6f0] bg-[#6aa6f0]/15 text-[#6aa6f0]" : "border-line text-dim")}>CISC</button>
        </div>
      </div>

      <div className="mt-3 overflow-x-auto">
        <table className="w-full min-w-[320px] border-collapse text-[12px]">
          <thead>
            <tr className="text-dim">
              <th className="px-2 py-1 text-left"></th>
              <th className={"px-2 py-1 " + (sel === "risc" ? "text-amber" : "text-muted")}>RISC</th>
              <th className={"px-2 py-1 " + (sel === "cisc" ? "text-[#6aa6f0]" : "text-muted")}>CISC</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r) => (
              <tr key={r.k} className="border-t border-line">
                <td className="px-2 py-1.5 font-mono text-[11px] text-dim">{r.k}</td>
                <motion.td animate={{ opacity: sel === "cisc" ? 0.4 : 1 }} className={"px-2 py-1.5 " + (sel === "risc" ? "text-amber" : "text-text")}>{r.risc}</motion.td>
                <motion.td animate={{ opacity: sel === "risc" ? 0.4 : 1 }} className={"px-2 py-1.5 " + (sel === "cisc" ? "text-[#6aa6f0]" : "text-text")}>{r.cisc}</motion.td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-[12px] text-muted">Same goal, opposite bet: RISC keeps instructions simple and uniform so they pipeline well (complexity moves to the compiler); CISC packs more work per instruction (complexity stays in hardware). Modern x86 chips translate CISC into RISC-like micro-ops internally.</p>
    </div>
  );
}
