import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// Two ways processes communicate: shared memory (both touch one region, needs
// synchronization) or message passing (they send copies through a channel).
export default function IpcExplainer() {
  const [mode, setMode] = useState("shared");

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Interactive</p>
        <div className="flex gap-1.5">
          <button onClick={() => setMode("shared")} className={"rounded-full border px-2.5 py-1 text-[11px] " + (mode === "shared" ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>shared memory</button>
          <button onClick={() => setMode("message")} className={"rounded-full border px-2.5 py-1 text-[11px] " + (mode === "message" ? "border-amber bg-amber/15 text-amber" : "border-line text-dim")}>message passing</button>
        </div>
      </div>

      <svg viewBox="0 0 300 110" className="mt-3 w-full">
        <g>
          <rect x="10" y="40" width="64" height="30" rx="6" fill="rgba(106,166,240,0.1)" stroke="#6aa6f0" strokeWidth="1.3" />
          <text x="42" y="59" textAnchor="middle" fontSize="11" fontFamily="var(--font-mono)" fill="#6aa6f0">P1</text>
          <rect x="226" y="40" width="64" height="30" rx="6" fill="rgba(52,211,154,0.1)" stroke="#34d39a" strokeWidth="1.3" />
          <text x="258" y="59" textAnchor="middle" fontSize="11" fontFamily="var(--font-mono)" fill="#34d39a">P2</text>

          {mode === "shared" ? (
            <>
              <rect x="120" y="35" width="60" height="40" rx="8" fill="rgba(246,181,61,0.12)" stroke="var(--color-amber)" strokeWidth="1.4" />
              <text x="150" y="52" textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill="var(--color-amber)">shared</text>
              <text x="150" y="63" textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill="var(--color-amber)">memory</text>
              <line x1="74" y1="55" x2="118" y2="55" stroke="var(--color-line)" strokeWidth="1.4" />
              <line x1="182" y1="55" x2="226" y2="55" stroke="var(--color-line)" strokeWidth="1.4" />
            </>
          ) : (
            <>
              <line x1="74" y1="55" x2="226" y2="55" stroke="var(--color-line)" strokeWidth="1.4" strokeDasharray="3 3" />
              <AnimatePresence>
                <motion.rect key="msg" x="86" y="48" width="16" height="14" rx="3" fill="var(--color-amber)"
                  initial={{ x: 86 }} animate={{ x: [86, 200, 86] }} transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }} />
              </AnimatePresence>
              <text x="150" y="40" textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill="var(--color-dim)">channel</text>
            </>
          )}
        </g>
      </svg>

      <p className="mt-2 text-[13px]">
        {mode === "shared"
          ? <span className="text-muted">Both processes read and write one shared region. It is fast, but they must <span className="text-amber">synchronise</span> (locks, semaphores) to avoid races.</span>
          : <span className="text-muted">Processes exchange copies through a channel (pipe, queue, socket). No shared state to corrupt, but copying and the kernel add overhead.</span>}
      </p>
      <p className="mt-2 text-[12px] text-muted">Shared memory trades safety for speed; message passing trades speed for isolation. Most systems offer both.</p>
    </div>
  );
}
