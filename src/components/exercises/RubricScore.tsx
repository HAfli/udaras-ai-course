import { useState } from 'react'
import { RUBRIC_CRITERIA, RUBRIC_CLOSING, RUBRIC_CHOICE_PROMPT } from '../../data/exerciseContent'

const OUTPUTS = ['Output A', 'Output B', 'Output C'] as const
const SCALE = [1, 2, 3, 4, 5] as const

export function RubricScore() {
  const [scores, setScores] = useState<Record<string, number>>({})
  const [choice, setChoice] = useState<string | null>(null)

  return (
    <div>
      <div className="prose-note"><p>
        One task — a 150-word promotional message for a fictional Gaeltacht business of your choice. Three AI
        outputs. Score all three against the rubric before any model is asked for an opinion.
      </p></div>

      <div className="mt-5 space-y-3">
        {RUBRIC_CRITERIA.map(c => (
          <div key={c.id} className="card p-4">
            <p className="text-sm font-semibold">{c.label}</p>
            <p className="mt-1 text-sm text-ink-soft">{c.ask}</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              {OUTPUTS.map(o => {
                const key = `${c.id}:${o}`
                const val = scores[key]
                return (
                  <div key={o} className="flex items-center justify-between gap-1 rounded-lg border border-ink/10 px-2 py-1.5">
                    <span className="text-[.68rem] font-semibold uppercase tracking-wide text-ink-faint">{o.slice(-1)}</span>
                    <div className="flex gap-1">
                      {SCALE.map(n => {
                        const on = val === n
                        return (
                          <button
                            key={n}
                            onClick={() => setScores(p => ({ ...p, [key]: n }))}
                            aria-pressed={on}
                            aria-label={`${o}, ${c.label}, score ${n} of 5`}
                            className={`h-6 w-6 rounded-full border text-[.68rem] font-semibold transition-colors ${
                              on ? 'border-moss-600 bg-moss-700 text-paper' : 'border-ink/12 text-ink-mute hover:border-moss-300 hover:text-ink'
                            }`}
                          >
                            {n}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="card mt-5 p-5">
        <p className="text-sm font-semibold">{RUBRIC_CHOICE_PROMPT}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {OUTPUTS.map(o => {
            const on = choice === o
            return (
              <button
                key={o}
                onClick={() => setChoice(o)}
                aria-pressed={on}
                className={`rounded-full border px-3 py-1.5 text-[.78rem] font-semibold transition-colors ${
                  on ? 'border-moss-600 bg-moss-700 text-paper' : 'border-ink/12 text-ink-mute hover:border-moss-300 hover:text-ink'
                }`}
              >
                {o}
              </button>
            )
          })}
        </div>
      </div>

      {choice && (
        <p className="mt-5 rounded-xl2 bg-moss-700 px-5 py-4 text-center font-display text-lg font-semibold text-paper">
          {RUBRIC_CLOSING}
        </p>
      )}
    </div>
  )
}
