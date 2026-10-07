import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { BUSINESS_TYPES } from '../../data/exerciseContent'
import { Bi } from '../ui/Bi'
import { tr } from '../../i18n/lang'

export function IrishFirstBusiness() {
  const [active, setActive] = useState(BUSINESS_TYPES[0].id)
  const [ideas, setIdeas] = useState<Record<string, string[]>>({})
  const b = BUSINESS_TYPES.find(x => x.id === active)!
  const mine = ideas[active] ?? ['', '', '', '', '']

  return (
    <div>
      <div className="prose-note"><p>
        {tr('Each group takes a business type and develops five ideas. The starters below are there to get the group moving, not to be the answer.')}
      </p></div>

      <div className="mt-5 flex flex-wrap gap-2">
        {BUSINESS_TYPES.map(x => {
          const on = x.id === active
          return (
            <button
              key={x.id}
              onClick={() => setActive(x.id)}
              aria-pressed={on}
              className={`rounded-full border px-3.5 py-2 text-sm font-semibold transition-colors ${
                on ? 'border-heather bg-heather text-paper' : 'border-ink/12 text-ink-mute hover:border-heather/50 hover:text-ink'
              }`}
            >
              {tr(x.label)}
            </button>
          )
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.28 }}
          className="mt-4 grid gap-4 lg:grid-cols-2"
        >
          <div className="card p-5">
            <p className="eyebrow">{tr('Starters')}</p>
            <p className="mt-1 font-display text-xl">
              <Bi v={{ en: b.label, ga: b.ga, needsValidation: true }} />
            </p>
            <ul className="mt-4 space-y-2.5">
              {b.prompts.map(p => (
                <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
                  <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-heather" />
                  {tr(p)}
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-5">
            <p className="eyebrow">{tr('Your five ideas')}</p>
            <ol className="mt-4 space-y-2">
              {mine.map((val, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span aria-hidden className="w-4 text-right text-[.7rem] font-bold text-ink-faint">{i + 1}</span>
                  <input
                    value={val}
                    aria-label={tr('Idea {n} for {b}', { n: i + 1, b: tr(b.label) })}
                    onChange={e => {
                      const next = [...mine]
                      next[i] = e.target.value
                      setIdeas(p => ({ ...p, [active]: next }))
                    }}
                    className="w-full border-0 border-b border-ink/15 bg-transparent px-0 py-1.5 text-sm focus:border-heather focus:outline-none focus:ring-0"
                  />
                </li>
              ))}
            </ol>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
