import { Info } from 'lucide-react'
import { S4 } from '../data/session4Content'
import { Bi } from './ui/Bi'
import { pick } from '../i18n/lang'

const V = (b: { readonly ga: string; readonly en: string }) => ({ ga: b.ga, en: b.en, needsValidation: true })

/** Session 4 (final session): the five questions, what to bring, and the format/date note. Selected language only. */
export function Session4Intro() {
  return (
    <div className="wrap pt-10">
      <div className="grid gap-8 border-t-2 border-ink pt-6 lg:grid-cols-[1.4fr_1fr]">
        <section aria-labelledby="s4-five">
          <h2 id="s4-five" className="kicker"><Bi v={V(S4.SITE.questionsTitle)} compact /></h2>
          <ol className="mt-3 space-y-2.5">
            {S4.FIVE_QUESTIONS.map((q, i) => (
              <li key={q.en} className="flex gap-3 text-[.98rem] leading-snug">
                <span aria-hidden className="fig-num w-6 shrink-0 text-lg text-gold-text">{i + 1}</span>
                <Bi v={V(q)} />
              </li>
            ))}
          </ol>
        </section>
        <section aria-labelledby="s4-bring">
          <h2 id="s4-bring" className="kicker"><Bi v={V(S4.SITE.bringTitle)} compact /></h2>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            {S4.MATERIALS.bring.map(b => <li key={b.en} className="border-l-2 border-ink/20 pl-3">{pick(b)}</li>)}
          </ul>
          <p className="mt-3 text-sm font-semibold">{pick(S4.MATERIALS.noNeed)}</p>
          <p className="mt-4 flex gap-2 border border-ink/20 bg-paper-card p-3 text-xs leading-relaxed text-ink-soft" role="note">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
            <span>{pick(S4.SITE.formatNote)}</span>
          </p>
        </section>
      </div>
    </div>
  )
}
