import { motion } from "motion/react";
import {
  MusicNotes, ForkKnife, Armchair, ToggleRight, Storefront, Printer,
  Question, Lightbulb, Path, ListNumbers, Warning, Sparkle,
  Coins, Ruler, ArrowsDownUp, Clock, Ladder, SortAscending,
  Medal, Handshake, ArrowsClockwise, Package, CirclesThree,
  Circuitry, CheckSquare, Scales, UsersThree,
} from "@phosphor-icons/react";
import { Rich } from "../lib/rich.jsx";

const ANALOGY_ICONS = {
  playlist: MusicNotes, restaurant: ForkKnife, seat: Armchair, switch: ToggleRight, vending: Storefront, printer: Printer,
  coins: Coins, ruler: Ruler, backsub: ArrowsDownUp, clock: Clock, ladder: Ladder, sort: SortAscending,
  podium: Medal, handshake: Handshake, circular: ArrowsClockwise, boxes: Package, clubs: CirclesThree,
  circuitry: Circuitry, checklist: CheckSquare, balance: Scales, crowd: UsersThree,
};
const reveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
};

function Rung({ children, label, icon: Icon }) {
  return (
    <motion.section {...reveal} className="relative pl-9">
      <span className="absolute left-0 top-1 grid h-6 w-6 place-items-center rounded-full border border-line bg-surface text-amber">
        <Icon size={13} weight="bold" />
      </span>
      <span className="absolute left-[11px] top-8 h-[calc(100%-1rem)] w-px bg-line" />
      {label && <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.22em] text-dim">{label}</p>}
      {children}
    </motion.section>
  );
}

export default function TeachLadder({ teach }) {
  const AnalogyIcon = ANALOGY_ICONS[teach.analogy?.icon] || Lightbulb;
  return (
    <div className="mt-6 space-y-7">
      {/* what it is — the headline answer, no rail */}
      <motion.p {...reveal} className="font-display text-[22px] font-medium leading-snug tracking-tight text-text">
        <Rich inline>{teach.what}</Rich>
      </motion.p>

      <div className="space-y-7">
        <Rung label="why it exists" icon={Question}>
          <Rich className="text-[15px] leading-relaxed text-muted">{teach.why}</Rich>
        </Rung>

        <Rung label="intuition" icon={Lightbulb}>
          <Rich className="text-[15px] leading-relaxed text-muted">{teach.intuition}</Rich>
        </Rung>

        {teach.analogy && (
          <Rung label="analogy" icon={Path}>
            <div className="rounded-[var(--radius-tile)] border border-line bg-surface/50 p-4">
              <div className="mb-2 flex items-center gap-2 text-amber">
                <AnalogyIcon size={20} weight="duotone" />
                <span className="font-display text-[15px] font-medium text-text">{teach.analogy.label}</span>
              </div>
              <Rich className="text-[15px] leading-relaxed text-muted">{teach.analogy.text}</Rich>
              <p className="mt-3 border-t border-line pt-2.5 text-[13px] leading-relaxed text-dim">
                <span className="text-muted">Where it breaks: </span>
                <Rich inline>{teach.analogy.breaks}</Rich>
              </p>
            </div>
          </Rung>
        )}

        <Rung label="how it works" icon={ListNumbers}>
          <ol className="space-y-2.5">
            {teach.steps.map((s, i) => (
              <motion.li key={i} {...reveal} transition={{ ...reveal.transition, delay: i * 0.05 }} className="flex gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-raised font-mono text-[11px] text-amber">{i + 1}</span>
                <Rich className="text-[15px] leading-relaxed text-muted">{s}</Rich>
              </motion.li>
            ))}
          </ol>
        </Rung>

        <Rung label="example" icon={Sparkle}>
          <div className="rounded-[var(--radius-tile)] border border-line bg-ink-2/70 p-4 text-[15px] leading-relaxed">
            <Rich>{teach.example}</Rich>
          </div>
        </Rung>
      </div>

      {/* misconception — warning treatment */}
      <motion.div {...reveal} className="rounded-[var(--radius-tile)] border border-rose/40 bg-rose/10 p-4">
        <div className="mb-1.5 flex items-center gap-2 text-rose">
          <Warning size={18} weight="fill" />
          <span className="font-mono text-[11px] uppercase tracking-[0.22em]">Common misconception</span>
        </div>
        <Rich className="text-[15px] leading-relaxed text-text">{teach.misconception}</Rich>
      </motion.div>

      {/* rule of thumb — amber highlight */}
      <motion.div {...reveal} className="rounded-[var(--radius-tile)] border border-amber/40 bg-amber/10 p-4">
        <div className="mb-1.5 flex items-center gap-2 text-amber">
          <Lightbulb size={18} weight="fill" />
          <span className="font-mono text-[11px] uppercase tracking-[0.22em]">Rule of thumb</span>
        </div>
        <Rich className="font-display text-[17px] font-medium leading-snug tracking-tight text-text">{teach.rule}</Rich>
      </motion.div>
    </div>
  );
}
