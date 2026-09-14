import { ArrowDown } from 'lucide-react'

const STEPS = [
  { label: 'AI', note: 'Systems that learn patterns from data.' },
  { label: 'Language', note: 'Most of what those systems learn is language — and language is not evenly represented online.' },
  { label: 'Irish', note: 'A language with far less digital material behind it than English.' },
  { label: 'Business', note: 'Newsletters, replies, documents — real Gaeltacht workplace tasks in Irish and English.' },
  { label: 'Human judgement', note: 'The validation step that makes AI-generated Irish publishable.' },
]

/** AI → Language → Irish → Business → Human judgement — the chain behind
 *  the "Why Irish matters" moment, kept deliberately free of any invented
 *  statistic or benchmark. */
export function IrishChain() {
  return (
    <div className="card p-5 sm:p-6">
      <p className="kicker text-moss-600">Why this matters</p>
      <ol className="mt-4 space-y-1">
        {STEPS.map((s, i) => (
          <li key={s.label}>
            <div className="flex items-start gap-3 rounded-xl2 border border-ink/10 bg-paper-deep/40 px-4 py-3">
              <span className="font-mono text-[.7rem] font-bold text-ink-faint">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <p className="font-display text-base font-semibold text-ink">{s.label}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-ink-soft">{s.note}</p>
              </div>
            </div>
            {i < STEPS.length - 1 && (
              <div className="flex justify-center py-1">
                <ArrowDown className="h-4 w-4 text-ink-faint" aria-hidden />
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}
