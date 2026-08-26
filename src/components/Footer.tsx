import { ArrowUpRight } from 'lucide-react'
import { useLang } from '../i18n/LangContext'
import { CONTRACT } from '../data/programme'
import { FACILITATOR, FEEDBACK } from '../data/facilitator'

export function Footer() {
  const { t } = useLang()
  return (
    <footer className="mt-24 border-t border-ink/10 bg-paper-deep/50">
      <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <p className="font-display text-lg font-semibold">{CONTRACT.title}</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft">
            Delivered by {CONTRACT.provider} for {CONTRACT.client}, through the medium of Irish, at {CONTRACT.venue}.
          </p>
          <p className="mt-4 text-xs leading-relaxed text-ink-mute">{t('validationLegend')}</p>
          <p className="mt-2 text-xs leading-relaxed text-ink-mute">
            Course planning interface. {t('notLegal')} Commercial terms of the engagement are not reproduced here.
            No official MTU or Údarás na Gaeltachta logo assets have been used or reproduced.
          </p>
        </div>

        <div>
          <p className="kicker">Facilitator</p>
          <p className="mt-2 text-sm font-semibold">{FACILITATOR.name}</p>
          <p className="mt-1 text-sm leading-relaxed text-ink-soft">{FACILITATOR.credentials}</p>
          <a
            href={FACILITATOR.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-moss-700 hover:underline"
          >
            Academic website
            <ArrowUpRight className="h-3 w-3" aria-hidden />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>

        <div>
          <p className="kicker">Feedback</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            The programme is designed to be revised between sessions. Your feedback is what does the revising.
          </p>
          <a
            href={FEEDBACK.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-moss-700 hover:underline"
          >
            {FEEDBACK.label}
            <ArrowUpRight className="h-3 w-3" aria-hidden />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
