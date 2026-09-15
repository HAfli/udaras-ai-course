import { ExternalLink } from 'lucide-react'
import { FEEDBACK } from '../data/facilitator'

/** External Google Form. Nothing is passed to it from this site. */
export function FeedbackLink({ variant = 'card' }: { variant?: 'card' | 'button' | 'quiet' }) {
  if (variant === 'button') {
    return (
      <a href={FEEDBACK.url} target="_blank" rel="noopener noreferrer" className="btn-primary">
        {FEEDBACK.label}
        <ExternalLink className="h-3.5 w-3.5" aria-hidden />
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    )
  }

  if (variant === 'quiet') {
    return (
      <a
        href={FEEDBACK.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-atlantic hover:underline"
      >
        {FEEDBACK.short}
        <ExternalLink className="h-3 w-3" aria-hidden />
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    )
  }

  return (
    <aside aria-label="Session feedback" className="flex flex-col gap-4 border-t-2 border-ink py-6 sm:flex-row sm:items-center">
      <div className="min-w-0 flex-1">
        <p className="font-display text-lg font-semibold text-ink">How was this session?</p>
        <p className="mt-1 text-sm leading-relaxed text-ink-soft">
          Your feedback shapes the next one — the programme is designed to be revised between sessions.
        </p>
      </div>
      <a
        href={FEEDBACK.url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary shrink-0"
      >
        {FEEDBACK.label}
        <ExternalLink className="h-3.5 w-3.5" aria-hidden />
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </aside>
  )
}
