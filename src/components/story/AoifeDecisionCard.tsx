import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { AOIFE_DECISION } from '../../data/story1'

/** The one branching, graded moment in the whole story — given its own
 *  weight through scale and a real choice, not a photograph: the prompt
 *  set as a pull-quote, exactly the treatment this site already uses for
 *  its other load-bearing single lines. */
export function AoifeDecisionCard() {
  const [choice, setChoice] = useState<string | null>(null)
  const chosen = AOIFE_DECISION.options.find(o => o.id === choice)

  return (
    <div className="max-w-2xl">
      <p className="pull-quote text-ink">{AOIFE_DECISION.prompt}</p>
      <p className="mt-3 text-sm leading-relaxed text-ink-mute">{AOIFE_DECISION.context}</p>

      <div className="mt-6 flex flex-wrap gap-2.5">
        {AOIFE_DECISION.options.map(o => {
          const on = choice === o.id
          return (
            <button
              key={o.id}
              onClick={() => setChoice(o.id)}
              aria-pressed={on}
              className={`border-b-2 px-0.5 pb-1 text-[1.05rem] font-semibold transition-colors ${
                on ? 'border-ink text-ink' : 'border-transparent text-ink-mute hover:border-ink/25 hover:text-ink'
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
            <div className="mt-5 border-l-2 border-ink/15 pl-5">
              <p className="text-[.72rem] font-bold uppercase tracking-wider text-ink-faint">{chosen.outcome}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{chosen.reasoning}</p>
            </div>
            <p className="pull-quote mt-6 text-ink">{AOIFE_DECISION.lesson}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
