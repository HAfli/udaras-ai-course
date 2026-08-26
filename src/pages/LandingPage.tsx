import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, CalendarDays, MapPin, Languages, Layers } from 'lucide-react'
import { Hero } from '../components/Hero'
import { Journey } from '../components/Journey'
import { MeetFacilitator } from '../components/MeetFacilitator'
import { Reveal } from '../components/ui/Reveal'
import { CONTRACT, TEN_QUESTIONS, FRAMEWORKS } from '../data/programme'
import { Bi } from '../components/ui/Bi'

const FACTS = [
  { Icon: Layers, label: 'Structure', value: '4 sessions + planning day' },
  { Icon: CalendarDays, label: 'Duration', value: '6–8 weeks · Aug–Oct 2026' },
  { Icon: Languages, label: 'Language', value: 'Through the medium of Irish' },
  { Icon: MapPin, label: 'Venue', value: 'Campas Íosagáin' },
]

export function LandingPage() {
  const reduce = useReducedMotion()

  return (
    <>
      <Hero />

      {/* At a glance */}
      <section aria-label="Programme at a glance" className="border-y border-ink/10 bg-paper-card">
        <div className="wrap grid gap-px sm:grid-cols-2 lg:grid-cols-4">
          {FACTS.map((f, i) => (
            <motion.div
              key={f.label}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="flex items-start gap-3.5 py-7 sm:pr-8"
            >
              <f.Icon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-moss-500" aria-hidden />
              <div>
                <p className="kicker">{f.label}</p>
                <p className="mt-1 text-[.95rem] font-semibold leading-snug">{f.value}</p>
              </div>
            </motion.div>
          ))}
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
              <motion.li
                key={q}
                initial={reduce ? false : { opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.5) }}
                className="flex items-baseline gap-4 border-b border-paper/10 py-4"
              >
                <span aria-hidden className="font-mono text-[.72rem] font-bold text-moss-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[1.05rem] font-medium leading-snug">{q}</span>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Frameworks teaser */}
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

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {FRAMEWORKS.map((f, i) => (
            <motion.a
              key={f.id}
              href="#/frameworks"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="card card-hover group p-6"
            >
              <p className="kicker text-moss-600">Framework {i + 1}</p>
              <h3 className="mt-2 font-display text-xl font-semibold"><Bi v={f.title} /></h3>
              <p className="mt-2 text-sm text-ink-soft">{f.question}</p>
              <p className="mt-4 flex flex-wrap gap-x-2 gap-y-1 text-[.78rem] font-bold uppercase tracking-wide text-ink-mute">
                {f.steps.map((s, si) => (
                  <span key={s.label.en}>
                    {s.label.en}{si < f.steps.length - 1 && <span className="ml-2 text-lichen" aria-hidden>→</span>}
                  </span>
                ))}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-moss-700">
                Open framework
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Contractual basis */}
      <section aria-labelledby="contract-h" className="wrap pb-24">
        <div className="card overflow-hidden">
          <div className="border-b border-ink/8 bg-paper-deep/50 px-6 py-5 sm:px-8">
            <p className="eyebrow">Source of truth</p>
            <h2 id="contract-h" className="mt-1.5 font-display text-2xl font-semibold">
              What is contractual, and what is proposed
            </h2>
          </div>
          <div className="grid gap-8 px-6 py-7 sm:px-8 lg:grid-cols-2">
            <div>
              <span className="chip border-moss-300 bg-moss-50 text-moss-700">Contractual</span>
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
              <span className="chip border-lichen/40 bg-lichen-soft/40 text-lichen-deep">Notes</span>
              <ul className="mt-4 space-y-3">
                {CONTRACT.contractNotes.map(n => (
                  <li key={n} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                    <span aria-hidden className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-lichen" />
                    {n}
                  </li>
                ))}
              </ul>
              <div className="mt-5 rounded-xl2 border border-moss-200 bg-moss-50/70 p-5">
                <p className="kicker text-moss-600">The iterative principle</p>
                <p className="mt-1.5 text-sm leading-relaxed text-moss-800">{CONTRACT.iterativePrinciple}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
