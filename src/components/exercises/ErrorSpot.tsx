import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import {
  WORKSHOP4_ITEMS,
  WORKSHOP4_CATEGORIES,
  WORKSHOP4_FICTION_WARNING,
  WORKSHOP4_IRISH_CORRECTION,
  WORKSHOP4_VERIFY_QUESTION,
} from '../../data/exerciseContent'

export function ErrorSpot() {
  const [picked, setPicked] = useState<Record<string, string>>({})

  return (
    <div className="space-y-4">
      <div className="rounded-xl2 border border-dashed border-risk-red/50 bg-red-50 p-4">
        <p className="kicker text-risk-red">Fictional exercise</p>
        <p className="mt-1.5 text-sm font-semibold leading-relaxed text-ink">{WORKSHOP4_FICTION_WARNING}</p>
      </div>

      <div className="prose-note"><p>
        One AI-generated paragraph about a fictional agency. Five minutes on your own, before any discussion — mark
        what is wrong with each sentence.
      </p></div>

      {WORKSHOP4_ITEMS.map((it, i) => {
        const choice = picked[it.id]
        const right = choice === it.category
        return (
          <div key={it.id} className="card p-5">
            <p className="kicker">Sentence {i + 1}</p>
            <p
              className={`mt-2 rounded-lg border-l-2 border-ink/15 bg-paper-deep/50 px-4 py-3 text-sm leading-relaxed text-ink ${
                it.category === 'irish' ? 'font-medium' : ''
              }`}
              lang={it.category === 'irish' ? 'ga' : undefined}
            >
              {it.text}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {WORKSHOP4_CATEGORIES.map(c => {
                const on = choice === c.id
                return (
                  <button
                    key={c.id}
                    onClick={() => setPicked(p => ({ ...p, [it.id]: c.id }))}
                    aria-pressed={on}
                    className={`rounded-full border px-3 py-1.5 text-[.72rem] font-semibold transition-colors ${
                      on ? 'border-moss-600 bg-moss-700 text-paper' : 'border-ink/12 text-ink-mute hover:border-moss-300 hover:text-ink'
                    }`}
                  >
                    {c.label}
                  </button>
                )
              })}
            </div>

            <AnimatePresence>
              {choice && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className={`mt-4 rounded-lg border px-4 py-3 ${right ? 'border-moss-200 bg-moss-50' : 'border-lichen/30 bg-lichen-soft/30'}`}>
                    <p className="text-[.72rem] font-bold uppercase tracking-wider text-ink-mute">
                      {right ? 'Yes' : `Actually: ${WORKSHOP4_CATEGORIES.find(c => c.id === it.category)?.label.toLowerCase()}`}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{it.explain}</p>

                    {it.category === 'irish' && (
                      <div className="mt-3 border-t border-ink/8 pt-3">
                        <p className="text-sm leading-relaxed text-ink-soft">
                          <span className="font-semibold text-ink">What a competent speaker would write: </span>
                          <span lang="ga">{WORKSHOP4_IRISH_CORRECTION.corrected}</span>
                        </p>
                        <p className="mt-2 text-xs leading-relaxed text-ink-faint">{WORKSHOP4_IRISH_CORRECTION.note}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}

      <div className="rounded-xl2 bg-moss-700 px-5 py-4 text-center">
        <p className="font-display text-lg font-semibold text-paper">{WORKSHOP4_VERIFY_QUESTION}</p>
        <p className="mt-1 text-sm text-paper/85">
          Stop. Think. Observe. Proceed — only after checking, with a named person.
        </p>
      </div>
    </div>
  )
}
