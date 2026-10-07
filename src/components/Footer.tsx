import { ArrowUpRight } from 'lucide-react'
import { useLang } from '../i18n/LangContext'
import { CONTRACT } from '../data/programme'
import { FACILITATOR, FEEDBACK } from '../data/facilitator'
import { tr, pick } from '../i18n/lang'

export function Footer() {
  const { t, lang } = useLang()
  return (
    <footer className="mt-24 border-t border-ink/10 bg-paper-deep/50">
      <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <p className="font-display text-lg font-semibold">{pick({ en: CONTRACT.title, ga: CONTRACT.titleGa })}</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft">
            {tr('Delivered by {p} for {c}, through the medium of Irish, at {v}.', { p: tr(CONTRACT.provider), c: CONTRACT.client, v: CONTRACT.venue })}
          </p>
          {lang === 'ga' && <p className="mt-4 text-xs leading-relaxed text-ink-mute">{t('validationLegend')}</p>}
          <p className="mt-2 text-xs leading-relaxed text-ink-mute">
            {tr('Course planning interface.')} {t('notLegal')} {tr('Commercial terms of the engagement are not reproduced here. No official MTU or Údarás na Gaeltachta logo assets have been used or reproduced.')}
          </p>
        </div>

        <div>
          <p className="kicker">{tr('Facilitator')}</p>
          <p className="mt-2 text-sm font-semibold">{FACILITATOR.name}</p>
          <p className="mt-1 text-sm leading-relaxed text-ink-soft">{tr(FACILITATOR.credentials)}</p>
          <a
            href={FACILITATOR.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-moss-700 hover:underline"
          >
            {tr('Academic website')}
            <ArrowUpRight className="h-3 w-3" aria-hidden />
            <span className="sr-only"> ({tr('opens in a new tab')})</span>
          </a>
        </div>

        <div>
          <p className="kicker">{tr('Feedback')}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            {tr('The programme is designed to be revised between sessions. Your feedback is what does the revising.')}
          </p>
          <a
            href={FEEDBACK.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-moss-700 hover:underline"
          >
            {tr(FEEDBACK.label)}
            <ArrowUpRight className="h-3 w-3" aria-hidden />
            <span className="sr-only"> ({tr('opens in a new tab')})</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
