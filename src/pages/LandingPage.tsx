import { ArrowRight } from 'lucide-react'
import { Hero } from '../components/Hero'
import { Journey } from '../components/Journey'
import { MeetFacilitator } from '../components/MeetFacilitator'
import { Reveal } from '../components/ui/Reveal'
import { CONTRACT, TEN_QUESTIONS, FRAMEWORKS } from '../data/programme'
import { Bi } from '../components/ui/Bi'

export function LandingPage() {
  return (
    <>
      <Hero />

      {/* At a glance — one editorial line, not a four-tile stat grid */}
      <section aria-label="Programme at a glance" className="border-y border-ink/10 bg-paper-card">
        <div className="wrap py-8">
          <p className="max-w-3xl text-[1.05rem] leading-relaxed text-ink-soft">
            <strong className="font-semibold text-ink">Four sessions, plus a planning day</strong> — 6–8 weeks,
            August to October 2026 — <strong className="font-semibold text-ink">delivered through the medium of
            Irish</strong> at Campas Íosagáin.
          </p>
        </div>
      </section>

      <Journey />

      <MeetFacilitator />

      {/* Ten questions */}
      <section aria-labelledby="ten-h" className="border-y border-ink/10 bg-moss-800 text-paper">
        <div className="wrap grid gap-12 py-20 lg:grid-cols-[minmax(0,22rem)_1fr] lg:py-24">
          <Reveal>
            <p className="eyebrow text-moss-200">The pedagogical spine</p>
            <h2 id="ten-h" className="mt-3 font-display text-3xl font-semibold leading-[1.15] sm:text-4xl">
              This course is not trying to make anyone an AI engineer
            </h2>
            <p className="mt-4 text-[1.02rem] leading-relaxed text-moss-100/85">
              It is trying to make people literate enough to answer ten questions with confidence. Every session,
              exercise and slide on this site earns its place by answering one of them.
            </p>
          </Reveal>
          <ol className="grid gap-x-8 gap-y-px sm:grid-cols-2">
            {TEN_QUESTIONS.map((q, i) => (
              <li key={q} className="flex items-baseline gap-4 border-b border-paper/10 py-4">
                <span aria-hidden className="font-mono text-[.72rem] font-bold text-moss-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[1.05rem] font-medium leading-snug">{q}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Frameworks teaser — a divided list, like the ten questions above,
          not a fourth card grid on the same page */}
      <section aria-labelledby="fw-h" className="wrap py-20 sm:py-24">
        <Reveal>
          <p className="eyebrow">Four frameworks</p>
          <h2 id="fw-h" className="mt-3 max-w-2xl text-3xl font-semibold leading-[1.15] sm:text-4xl">
            The same four shapes, used all the way through
          </h2>
          <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-ink-soft">
            Participants should leave able to draw these from memory. They are what turns a good day into a habit.
          </p>
        </Reveal>

        <ol className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
          {FRAMEWORKS.map((f, i) => (
            <li key={f.id}>
              <a href="#/frameworks" className="group flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:gap-8">
                <span aria-hidden className="font-mono text-[.75rem] font-bold text-ink-faint sm:w-6">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold"><Bi v={f.title} /></h3>
                  <p className="mt-1 text-sm text-ink-soft">{f.question}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-moss-700 sm:self-center">
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
              <p className="text-[.72rem] font-bold uppercase tracking-wider text-moss-700">Contractual</p>
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
              <p className="text-[.72rem] font-bold uppercase tracking-wider text-lichen-deep">Notes</p>
              <ul className="mt-4 space-y-3">
                {CONTRACT.contractNotes.map(n => (
                  <li key={n} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                    <span aria-hidden className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-lichen" />
                    {n}
                  </li>
                ))}
              </ul>
              <div className="mt-5 border-l-2 border-moss-400 pl-5">
                <p className="kicker text-moss-600">The iterative principle</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{CONTRACT.iterativePrinciple}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
