import { ArrowRight } from 'lucide-react'
import { Hero } from '../components/Hero'
import { Journey } from '../components/Journey'
import { MeetFacilitator } from '../components/MeetFacilitator'
import { Reveal } from '../components/ui/Reveal'
import { CONTRACT, TEN_QUESTIONS, FRAMEWORKS } from '../data/programme'
import { FACILITATOR } from '../data/facilitator'
import { Bi } from '../components/ui/Bi'

const SEQUENCE = [
  { en: 'UNDERSTAND', ga: 'TUIG' },
  { en: 'QUESTION', ga: 'CEISTIGH' },
  { en: 'USE', ga: 'ÚSÁID' },
  { en: 'CHECK', ga: 'SEICEÁIL' },
  { en: 'CREATE', ga: 'CRUTHAIGH' },
]

const FW_COLOUR = ['text-atlantic', 'text-emerald', 'text-coral', 'text-gold-text']

export function LandingPage() {
  return (
    <>
      <Hero />

      {/* The manifesto — what the hero didn't have room to say */}
      <section aria-label="What this course is" className="border-b border-ink/15 bg-paper-card">
        <div className="wrap grid gap-12 py-16 sm:py-20 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="pull-quote">
              AI literacy is not about becoming an AI expert. It is about becoming
              <em className="not-italic text-atlantic"> confident enough to make good decisions about AI.</em>
            </p>
            <ol className="mt-10 flex flex-wrap items-start gap-x-6 gap-y-4">
              {SEQUENCE.map((w, i) => (
                <li key={w.en} className="flex items-center gap-3">
                  <span>
                    <span className="block text-[.95rem] font-bold uppercase tracking-[.1em] text-ink" lang="ga">
                      {w.ga}
                    </span>
                    <span className="mt-0.5 block text-[.66rem] font-semibold uppercase tracking-[.1em] text-ink-faint">
                      {w.en}
                    </span>
                  </span>
                  {i < SEQUENCE.length - 1 && <span aria-hidden className="text-ink-faint">·</span>}
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:col-span-6 lg:border-l lg:border-ink/15 lg:pl-12">
            <p className="font-display text-2xl font-semibold text-ink sm:text-3xl" lang="ga">
              AI don Ghaeilge — ní AI in ionad na Gaeilge.
            </p>
            <p className="mt-2 text-[.85em] text-ink-mute">AI for Irish — not AI instead of Irish.</p>
            <p className="mt-8 text-sm text-ink-soft">
              <span className="kicker">Facilitated by</span>{' '}
              <a href="#meet" className="font-semibold text-atlantic hover:underline">
                {FACILITATOR.name}
              </a>{' '}
              <span className="text-ink-mute">— {FACILITATOR.institution}</span>
            </p>
          </div>
        </div>
      </section>

      <Journey />

      <MeetFacilitator />

      {/* Ten questions — the pedagogical spine, told as ten huge statements */}
      <section aria-labelledby="ten-h" className="border-y border-ink/15 bg-ink text-paper">
        <div className="wrap py-20 sm:py-28">
          <Reveal>
            <p className="eyebrow text-paper/60">The pedagogical spine</p>
            <h2 id="ten-h" className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-[1.15] sm:text-5xl">
              This course is not trying to make anyone an AI engineer
            </h2>
            <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-paper/75">
              It is trying to make people literate enough to answer ten questions with confidence.
            </p>
          </Reveal>
          <ol className="mt-16 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {TEN_QUESTIONS.map((q, i) => (
              <li key={q} className="border-t border-paper/20 pt-4">
                <span aria-hidden className="fig-num block text-4xl text-gold sm:text-5xl">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="mt-2 block font-display text-xl font-semibold leading-snug sm:text-2xl">{q}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Four frameworks — four branded principles, each with its own colour */}
      <section aria-labelledby="fw-h" className="wrap py-20 sm:py-28">
        <Reveal>
          <p className="eyebrow">Four frameworks</p>
          <h2 id="fw-h" className="mt-3 max-w-2xl text-3xl font-semibold leading-[1.15] sm:text-4xl">
            The same four shapes, used all the way through
          </h2>
          <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-ink-soft">
            Participants should leave able to draw these from memory. They are what turns a good day into a habit.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {FRAMEWORKS.map((f, i) => (
            <li key={f.id} className="border-t-4 border-ink pt-5">
              <a href="#/frameworks" className="group block">
                <span aria-hidden className={`fig-num block text-5xl ${FW_COLOUR[i]}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 font-display text-2xl font-semibold group-hover:underline"><Bi v={f.title} /></h3>
                <p className="mt-1.5 text-sm text-ink-soft">{f.question}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                  Open
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      {/* Contractual basis — a document, not a feature card */}
      <section aria-labelledby="contract-h" className="wrap pb-24">
        <div className="doc">
          <div className="border-b border-ink/12 px-6 py-5 sm:px-8">
            <p className="eyebrow">Source of truth</p>
            <h2 id="contract-h" className="mt-1.5 font-display text-2xl font-semibold">
              What is contractual, and what is proposed
            </h2>
          </div>
          <div className="grid gap-8 px-6 py-7 sm:px-8 lg:grid-cols-2">
            <div>
              <p className="text-[.72rem] font-bold uppercase tracking-wider text-ink-mute">Contractual</p>
              <dl className="mt-4 space-y-3 text-sm">
                {[
                  ['Project title', CONTRACT.title],
                  ['Provider / Client', `${CONTRACT.provider} for ${CONTRACT.client}`],
                  ['Duration', `${CONTRACT.duration} — ${CONTRACT.dates}`],
                  ['Delivery', `${CONTRACT.language}, at ${CONTRACT.venue}`],
                  ['Structure', 'Preparatory planning session, then Sessions 1 (full day, Week 2), 2 (full day, Week 4), 3 (half day, Week 6), 4 (half-day wrap-up, Week 8)'],
                  ['Roles', CONTRACT.clientRole],
                ].map(([k, v]) => (
                  <div key={k} className="border-b border-ink/8 pb-3 last:border-0">
                    <dt className="kicker">{k}</dt>
                    <dd className="mt-1 leading-relaxed text-ink-soft">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <p className="text-[.72rem] font-bold uppercase tracking-wider text-ink-mute">Notes</p>
              <ul className="mt-4 space-y-3">
                {CONTRACT.contractNotes.map(n => (
                  <li key={n} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                    <span aria-hidden className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink-faint" />
                    {n}
                  </li>
                ))}
              </ul>
              <div className="mt-5 border-l-2 border-ink/20 pl-5">
                <p className="kicker">The iterative principle</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{CONTRACT.iterativePrinciple}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
