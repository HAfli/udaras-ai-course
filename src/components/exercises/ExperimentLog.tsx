import { useState } from 'react'

const FIELDS = [
  { id: 'task', label: 'The task', ph: 'A real thing from your own week.' },
  { id: 'prompt', label: 'The prompt I used', ph: 'Exactly what you typed.' },
  { id: 'output', label: 'What it gave me', ph: 'In a sentence.' },
  { id: 'worked', label: 'What worked', ph: '' },
  { id: 'wrong', label: 'What was wrong', ph: 'The valuable column.' },
  { id: 'changed', label: 'What I changed', ph: '' },
  { id: 'again', label: 'Would I use AI for this again?', ph: 'Yes / no / only if…' },
]

export function ExperimentLog({ count = 1 }: { count?: number }) {
  const [n, setN] = useState(0)
  const [v, setV] = useState<Record<string, string>>({})

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
        {FIELDS.map((f, i) => (
          <label key={f.id} className={`card block p-4 ${i >= 4 && i <= 5 ? '' : ''} ${f.id === 'again' ? 'sm:col-span-2' : ''}`}>
            <span className="kicker text-moss-600">{f.label}</span>
            <textarea
              rows={f.id === 'again' ? 1 : 2}
              value={v[`${n}-${f.id}`] ?? ''}
              onChange={e => setV(p => ({ ...p, [`${n}-${f.id}`]: e.target.value }))}
              placeholder={f.ph}
              className="mt-1.5 w-full resize-none rounded-lg border border-ink/12 bg-paper-deep/40 px-3 py-2 text-sm leading-relaxed placeholder:text-ink-faint/80 focus:border-moss-400 focus:bg-paper-card"
            />
          </label>
        ))}
      </div>
    </div>
  )
}
