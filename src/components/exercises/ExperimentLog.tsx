import { useState } from 'react'
import { BETWEEN_SESSION_FIELDS } from '../../data/exerciseContent'

type Field = { id: string; label: string; ph: string }

export function ExperimentLog({ count = 1, fields = BETWEEN_SESSION_FIELDS }: { count?: number; fields?: Field[] }) {
  const [n, setN] = useState(0)
  const [v, setV] = useState<Record<string, string>>({})
  const FIELDS = fields

  return (
    <div>
      {count > 1 && (
        <div className="mb-5 flex items-center gap-2">
          {Array.from({ length: count }, (_, i) => (
            <button
              key={i}
              onClick={() => setN(i)}
              aria-pressed={i === n}
              className={`flex-1 rounded-xl border px-3 py-2.5 text-sm font-semibold transition-colors ${
                i === n ? 'border-moss-600 bg-moss-700 text-paper' : 'border-ink/12 text-ink-mute hover:border-moss-300'
              }`}
            >
              Experiment {i + 1}
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-3 sm:grid-cols-2">
        {FIELDS.map((f, i) => {
          const isLast = i === FIELDS.length - 1 && FIELDS.length % 2 === 1
          return (
          <label key={f.id} className={`card block p-4 ${isLast ? 'sm:col-span-2' : ''}`}>
            <span className="kicker text-moss-600">{f.label}</span>
            <textarea
              rows={2}
              value={v[`${n}-${f.id}`] ?? ''}
              onChange={e => setV(p => ({ ...p, [`${n}-${f.id}`]: e.target.value }))}
              placeholder={f.ph}
              className="mt-1.5 w-full resize-none rounded-lg border border-ink/12 bg-paper-deep/40 px-3 py-2 text-sm leading-relaxed placeholder:text-ink-faint/80 focus:border-moss-400 focus:bg-paper-card"
            />
          </label>
          )
        })}
      </div>
      <p className="mt-4 text-xs text-ink-faint">
        Your answers stay in this browser only — they are a personal worksheet, not something submitted to the course team.
      </p>
    </div>
  )
}
