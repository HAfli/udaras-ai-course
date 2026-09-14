import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { AOIFE_DECISION } from '../../data/story1'

export function AoifeDecisionCard() {
  const [choice, setChoice] = useState<string | null>(null)
  const chosen = AOIFE_DECISION.options.find(o => o.id === choice)

  return (
    <div className="card p-5 sm:p-6">
      <p className="kicker text-moss-600">Your decision</p>
      <p className="mt-2 font-display text-lg leading-snug text-ink">{AOIFE_DECISION.prompt}</p>
      <p className="mt-2 text-sm text-ink-mute">{AOIFE_DECISION.context}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {AOIFE_DECISION.options.map(o => {
          const on = choice === o.id
          return (
            <button
              key={o.id}
              onClick={() => setChoice(o.id)}
              aria-pressed={on}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                on ? 'border-moss-600 bg-moss-700 text-paper' : 'border-ink/12 text-ink-mute hover:border-moss-300 hover:text-ink'
              }`}
            >
              {o.label}
            </button>
          )
        })}
      </div>

      <AnimatePresence>
        {chosen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }} className="overflow-hidden"
          >
            <div className="mt-4 rounded-xl2 border border-ink/10 bg-paper-deep/40 p-4">
              <p className="text-[.72rem] font-bold uppercase tracking-wider text-ink-faint">{chosen.outcome}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{chosen.reasoning}</p>
            </div>
            <p className="mt-4 rounded-xl2 bg-moss-700 px-5 py-4 text-center font-display text-lg font-semibold text-paper">
              {AOIFE_DECISION.lesson}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
