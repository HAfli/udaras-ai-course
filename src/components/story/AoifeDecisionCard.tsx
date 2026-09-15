import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { AOIFE_DECISION } from '../../data/story1'
import aoifeFocus from '../../assets/aoife-focus.jpg'

/** The one branching, graded moment in the whole story — deliberately
 *  given its own visual shape (image + editorial text + a real choice)
 *  rather than the generic card-and-pill-buttons treatment used for
 *  comparable-item content elsewhere on the site. */
export function AoifeDecisionCard() {
  const [choice, setChoice] = useState<string | null>(null)
  const chosen = AOIFE_DECISION.options.find(o => o.id === choice)

  return (
    <div className="grid gap-8 sm:grid-cols-[13rem_1fr] sm:items-start">
      <img
        src={aoifeFocus}
        alt="Close-up of Aoife, considering the reply before it goes out."
        className="aspect-[6/5] w-full rounded-xl2 border border-ink/10 object-cover sm:aspect-[4/5]"
        width={360}
        height={340}
      />

      <div>
        <p className="eyebrow">Now you decide</p>
        <p className="mt-2.5 font-display text-xl leading-snug text-ink sm:text-2xl">{AOIFE_DECISION.prompt}</p>
        <p className="mt-2.5 text-sm leading-relaxed text-ink-mute">{AOIFE_DECISION.context}</p>

        <div className="mt-5 flex flex-wrap gap-2.5">
          {AOIFE_DECISION.options.map(o => {
            const on = choice === o.id
            return (
              <button
                key={o.id}
                onClick={() => setChoice(o.id)}
                aria-pressed={on}
                className={`border-b-2 px-0.5 pb-1 text-[1.05rem] font-semibold transition-colors ${
                  on ? 'border-moss-600 text-moss-800' : 'border-transparent text-ink-mute hover:border-ink/25 hover:text-ink'
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
              <p className="pull-quote mt-6 text-moss-800">{AOIFE_DECISION.lesson}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
