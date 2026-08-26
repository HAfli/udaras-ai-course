import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { AI_ACT_SCENARIOS, SCENARIO_QUESTIONS, type Scenario } from '../data/exerciseContent'

const FLAG = {
  routine: { label: 'Ordinary use', cls: 'border-risk-green/40 bg-moss-50 text-risk-green', symbol: '●' },
  care:    { label: 'Handle with care', cls: 'border-risk-amber/40 bg-lichen-soft/50 text-risk-amber', symbol: '◐' },
  serious: { label: 'Take advice first', cls: 'border-risk-red/40 bg-red-50 text-risk-red', symbol: '■' },
} as const

function Card({ s }: { s: Scenario }) {
  const [open, setOpen] = useState<number | null>(null)
  const f = FLAG[s.flag]

  return (
    <div className="card overflow-hidden">
      <div className="border-b border-ink/8 p-5">
        <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[.68rem] font-bold uppercase tracking-wider ${f.cls}`}>
          <span aria-hidden>{f.symbol}</span>{f.label}
        </span>
        <h4 className="mt-3 font-display text-lg font-semibold leading-snug">{s.title}</h4>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.body}</p>
      </div>

      <ol className="divide-y divide-ink/8">
        {SCENARIO_QUESTIONS.map((q, i) => {
          const on = open === i
          const a = s.answers.find(x => x.q === q)?.a
          return (
            <li key={q}>
              <button
                onClick={() => setOpen(on ? null : i)}
                aria-expanded={on}
                className="flex w-full items-center gap-3 px-5 py-3 text-left transition-colors hover:bg-moss-50/60"
              >
                <span aria-hidden className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-paper-deep text-[.68rem] font-bold text-ink-mute">
                  {i + 1}
                </span>
                <span className="flex-1 text-sm font-medium">{q}</span>
                <span aria-hidden className={`text-xs font-semibold text-moss-600 transition-opacity ${on ? 'opacity-0' : 'opacity-100'}`}>
                  Reveal
                </span>
              </button>
              <AnimatePresence>
                {on && a && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }} className="overflow-hidden"
                  >
                    <p className="bg-paper-deep/40 px-5 pb-4 pl-14 pt-1 text-sm leading-relaxed text-ink-soft">{a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export function ScenarioCards() {
  return (
    <div>
      <div className="prose-note"><p>
        Work the six questions as a group before revealing anything. The reasoning is the exercise; the answers
        below are one considered view, not the only one.
      </p></div>
      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        {AI_ACT_SCENARIOS.map(s => <Card key={s.id} s={s} />)}
      </div>
      <p className="mt-5 text-center text-xs text-ink-mute">Educational guidance — not legal advice.</p>
    </div>
  )
}
