import { useState } from 'react'
import { IRISH_REVIEW_CRITERIA } from '../../data/exerciseContent'
import { GaLine } from '../ui/Bi'

const SCALE = ['Poor', 'Acceptable', 'Good'] as const

export function IrishReview() {
  const [text, setText] = useState('')
  const [scores, setScores] = useState<Record<string, string>>({})
  const publish = scores['c5']

  return (
    <div>
      <div className="rounded-xl2 border border-dashed border-lichen/50 bg-lichen-soft/25 p-4">
        <p className="kicker text-lichen-deep">Facilitator note</p>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
          No sample Irish is pre-loaded here. Generate it live, on the day, from a tool the participants are
          actually using — the exercise only works on real output, and pre-written examples would be an invention
          rather than evidence.
        </p>
      </div>

      <label className="mt-5 block">
        <span className="kicker">Paste the AI-generated Irish here</span>
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          rows={5}
          lang="ga"
          placeholder="Greamaigh an téacs anseo…"
          className="mt-2 w-full rounded-xl2 border border-ink/15 bg-paper-card px-4 py-3 text-sm leading-relaxed focus:border-moss-400"
        />
      </label>

      <div className="mt-5 space-y-3">
        {IRISH_REVIEW_CRITERIA.map(c => (
          <div key={c.id} className="card p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <p className="text-sm font-semibold">
                  {c.label} <span className="font-normal text-ink-mute">· <GaLine ga={c.ga} needsValidation /></span>
                </p>
                <p className="mt-1 text-sm text-ink-soft">{c.ask}</p>
              </div>
              <div className="flex shrink-0 gap-1.5">
                {(c.id === 'c5' ? (['No', 'Not yet', 'Yes'] as const) : SCALE).map(s => {
                  const on = scores[c.id] === s
                  return (
                    <button
                      key={s}
                      onClick={() => setScores(p => ({ ...p, [c.id]: s }))}
                      aria-pressed={on}
                      className={`rounded-full border px-3 py-1.5 text-[.72rem] font-semibold transition-colors ${
                        on ? 'border-moss-600 bg-moss-700 text-paper' : 'border-ink/12 text-ink-mute hover:border-moss-300 hover:text-ink'
                      }`}
                    >
                      {s}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {publish && (
        <p className="mt-5 rounded-xl2 bg-moss-700 px-5 py-4 text-center font-display text-lg font-semibold text-paper">
          AI-generated Irish needs human linguistic and cultural validation. Every time.
        </p>
      )}
    </div>
  )
}
