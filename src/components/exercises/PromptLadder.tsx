import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight, RotateCcw } from 'lucide-react'
import { useState } from 'react'
import { PROMPT_LADDER } from '../../data/exerciseContent'

export function PromptLadder() {
  const [shown, setShown] = useState(1)
  const done = shown >= PROMPT_LADDER.length

  return (
    <div>
      <div className="prose-note"><p>
        One prompt, improved a rung at a time. Reveal each level and read what changed — and why the last rung
        is the one that matters most for Irish.
      </p></div>

      <ol className="mt-5 space-y-3">
        <AnimatePresence initial={false}>
          {PROMPT_LADDER.slice(0, shown).map((p, i) => (
            <motion.li
              key={p.rung}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={`card p-5 ${i === shown - 1 ? 'border-moss-300' : ''}`}
            >
              <div className="flex items-baseline gap-3">
                <span className="kicker text-moss-600">{p.rung}</span>
                {i === PROMPT_LADDER.length - 1 && <span className="chip border-moss-300 bg-moss-50 text-moss-700">Bilingual</span>}
              </div>
              <p className="mt-2 rounded-lg bg-paper-deep/60 px-4 py-3 font-mono text-[.82rem] leading-relaxed text-ink">
                {p.text}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.critique}</p>
            </motion.li>
          ))}
        </AnimatePresence>
      </ol>

      <div className="mt-5 flex flex-wrap gap-2">
        {!done ? (
          <button onClick={() => setShown(s => s + 1)} className="btn-primary">
            Reveal {PROMPT_LADDER[shown]?.rung}
            <ChevronRight className="h-4 w-4" aria-hidden />
          </button>
        ) : (
          <p className="rounded-xl2 bg-moss-50 px-5 py-3 text-sm font-medium text-moss-800">
            The last sentence is the important one: asking the model to flag its own uncertainty in Irish turns it
            into a partner in the review rather than a source of hidden errors.
          </p>
        )}
        {shown > 1 && (
          <button onClick={() => setShown(1)} className="btn-ghost">
            <RotateCcw className="h-3.5 w-3.5" aria-hidden /> Reset
          </button>
        )}
      </div>
    </div>
  )
}
