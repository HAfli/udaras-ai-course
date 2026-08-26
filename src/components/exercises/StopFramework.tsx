import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { STOP_FRAMEWORK } from '../../data/exerciseContent'

export function StopFramework() {
  const [active, setActive] = useState(0)
  const s = STOP_FRAMEWORK[active]

  return (
    <div>
      <div className="prose-note"><p>
        Four questions, asked in order, before anything goes into an AI tool. A checklist you can remember beats a
        policy you cannot.
      </p></div>

      <div className="mt-5 grid gap-2 sm:grid-cols-4">
        {STOP_FRAMEWORK.map((x, i) => {
          const on = i === active
          return (
            <button
              key={x.letter}
              onClick={() => setActive(i)}
              aria-pressed={on}
              className={`rounded-xl2 border p-4 text-left transition-all duration-300 ${
                on ? 'border-moss-600 bg-moss-700 text-paper shadow-lift' : 'border-ink/12 bg-paper-card hover:border-moss-300 hover:shadow-soft'
              }`}
            >
              <span className={`font-display text-3xl font-bold ${on ? 'text-paper' : 'text-moss-600'}`}>{x.letter}</span>
              <span className={`mt-1 block text-sm font-semibold ${on ? 'text-paper' : 'text-ink'}`}>{x.word}</span>
            </button>
          )
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={s.letter}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.3 }}
          className="card mt-4 p-6"
        >
          <p className="font-display text-xl leading-snug">{s.question}</p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {s.examples.map(e => (
              <li key={e} className="flex gap-2.5 text-sm text-ink-soft">
                <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-lichen" />
                {e}
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
