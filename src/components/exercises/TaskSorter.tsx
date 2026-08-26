import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { SORT_TASKS } from '../../data/exerciseContent'

const BUCKETS = [
  { id: 'ai', label: 'AI', hint: 'Go ahead' },
  { id: 'both', label: 'AI + Human', hint: 'Draft, then check' },
  { id: 'human', label: 'Human', hint: 'Not the tool’s call' },
] as const

export function TaskSorter() {
  const [choice, setChoice] = useState<Record<string, string>>({})
  const answered = Object.keys(choice).length

  return (
    <div>
      <div className="prose-note"><p>
        Place each task. There is a suggested answer, but the disagreements in the room are the point —
        the line is not about difficulty, it is about consequence.
      </p></div>

      <div className="mt-5 space-y-3">
        {SORT_TASKS.map(t => {
          const c = choice[t.id]
          return (
            <div key={t.id} className="card p-4 sm:p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm font-semibold text-ink">{t.label}</p>
                <div className="flex shrink-0 gap-1.5" role="group" aria-label={t.label}>
                  {BUCKETS.map(b => {
                    const on = c === b.id
                    return (
                      <button
                        key={b.id}
                        onClick={() => setChoice(p => ({ ...p, [t.id]: b.id }))}
                        aria-pressed={on}
                        className={`rounded-full border px-3 py-1.5 text-[.72rem] font-semibold transition-colors ${
                          on ? 'border-moss-600 bg-moss-700 text-paper' : 'border-ink/12 text-ink-mute hover:border-moss-300 hover:text-ink'
                        }`}
                      >
                        {b.label}
                      </button>
                    )
                  })}
                </div>
              </div>
              <AnimatePresence>
                {c && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.28 }} className="overflow-hidden"
                  >
                    <div className="mt-3 border-t border-ink/8 pt-3">
                      <p className="text-[.7rem] font-bold uppercase tracking-wider text-moss-600">
                        Suggested: {BUCKETS.find(b => b.id === t.suggested)?.label}
                        {c !== t.suggested && <span className="ml-2 font-medium normal-case tracking-normal text-lichen-deep">— worth arguing about</span>}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{t.why}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>

      <p className="mt-5 text-center text-sm text-ink-mute">
        {answered} of {SORT_TASKS.length} placed
      </p>
    </div>
  )
}
