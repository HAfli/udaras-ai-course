import { motion, useReducedMotion } from 'framer-motion'
import {
  AlertTriangle, ArrowDown, ArrowRight, ArrowUpRight, Bot, Braces, FileQuestion,
  Globe, HeartPulse, Languages, MessagesSquare, ShieldCheck, UserCheck,
} from 'lucide-react'
import { useState } from 'react'
import {
  RESEARCH_FRAME, CONCEPTS, PIPELINE, ERROR_LESSON,
  RESEARCH_PLACEHOLDERS, REAL_EXAMPLE_PLACEHOLDER,
} from '../data/research'
import { FACILITATOR, RESEARCH_AREAS, RESEARCH_TO_WORKPLACE } from '../data/facilitator'
import { FacilitatorPhoto } from '../components/FacilitatorPhoto'
import { Reveal } from '../components/ui/Reveal'
import { Disclosure } from '../components/ui/Disclosure'
import { GaLine } from '../components/ui/Bi'

const AREA_ICONS = { MessagesSquare, Languages, Globe, Braces, ShieldCheck, HeartPulse } as const

function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-lichen bg-lichen-soft/40 px-2 py-0.5 text-[.85em] font-semibold text-lichen-deep">
      <FileQuestion className="h-3.5 w-3.5" aria-hidden />
      {children}
    </span>
  )
}

/* ---------------- The Irish AI pipeline ---------------- */

function Pipeline() {
  const [active, setActive] = useState(1)
  const reduce = useReducedMotion()
  const s = PIPELINE[active]

  return (
    <div>
      <ol className="grid gap-2 lg:grid-cols-6">
        {PIPELINE.map((p, i) => {
          const on = i === active
          return (
            <li key={p.id} className="flex items-center gap-2">
              <motion.button
                onClick={() => setActive(i)}
                aria-pressed={on}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className={`w-full rounded-xl2 border p-4 text-left transition-all duration-300 ${
                  on
                    ? 'border-heather bg-heather text-paper shadow-lift'
                    : 'border-ink/12 bg-paper-card hover:-translate-y-0.5 hover:border-heather/50'
                }`}
              >
                <span className={`block text-[.62rem] font-bold uppercase tracking-[.16em] ${on ? 'text-paper/85' : 'text-ink-mute'}`}>
                  Stage {i + 1}
                </span>
                <span className={`mt-1 block text-sm font-semibold leading-snug ${on ? 'text-paper' : 'text-ink'}`}>
                  {p.label}
                </span>
                <span lang="ga" className={`gaeilge block text-[.72rem] ${on ? 'text-paper/90' : 'text-ink-mute'}`}>
                  {p.ga}
                </span>
              </motion.button>
              {i < PIPELINE.length - 1 && (
                <ArrowRight className="hidden h-4 w-4 shrink-0 text-ink-faint lg:block" aria-hidden />
              )}
            </li>
          )
        })}
      </ol>

      <motion.div
        key={s.id}
        initial={reduce ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-4"
      >
        <p className="mb-4 font-display text-xl leading-snug">
          {s.label}
          <span className="text-ink-mute"> · </span>
          <span lang="ga" className="text-heather">
            {s.gaNeedsValidation ? <GaLine ga={s.ga} needsValidation /> : <GaLine ga={s.ga} />}
          </span>
          <span className="mt-1 block text-[.95rem] font-normal text-ink-soft">{s.summary}</span>
        </p>

        <div className="grid gap-3 lg:grid-cols-3">
          <div className="card p-5">
            <p className="flex items-center gap-2 kicker text-moss-600">
              <Bot className="h-3.5 w-3.5" aria-hidden /> What AI does
            </p>
            <p className="mt-2.5 text-[.95rem] leading-relaxed text-ink-soft">{s.does}</p>
          </div>

          <div className="card border-lichen/30 bg-lichen-soft/20 p-5">
            <p className="flex items-center gap-2 kicker text-lichen-deep">
              <AlertTriangle className="h-3.5 w-3.5" aria-hidden /> What can go wrong
            </p>
            <ul className="mt-2.5 space-y-2">
              {s.wrong.map(w => (
                <li key={w} className="flex gap-2.5 text-[.95rem] leading-relaxed text-ink-soft">
                  <span aria-hidden className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-lichen" />
                  {w}
                </li>
              ))}
            </ul>
          </div>

          <div className="card border-moss-200 bg-moss-50/60 p-5">
            <p className="flex items-center gap-2 kicker text-moss-600">
              <UserCheck className="h-3.5 w-3.5" aria-hidden /> Where human expertise matters
            </p>
            <p className="mt-2.5 text-[.95rem] leading-relaxed text-moss-800">{s.human}</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

/* ---------------- Research → workplace ---------------- */

function ResearchToWorkplace() {
  const reduce = useReducedMotion()
  return (
    <ol className="mx-auto max-w-2xl">
      {RESEARCH_TO_WORKPLACE.map((r, i) => {
        const last = i === RESEARCH_TO_WORKPLACE.length - 1
        return (
          <motion.li
            key={r.label}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: Math.min(i * 0.09, 0.5) }}
          >
            <div
              className={`rounded-xl2 border px-5 py-4 text-center ${
                last
                  ? 'border-moss-600 bg-moss-700 text-paper'
                  : i === 0
                    ? 'border-heather bg-heather text-paper'
                    : 'border-ink/12 bg-paper-card'
              }`}
            >
              <p className={`text-[.95rem] font-bold uppercase tracking-[.12em] ${last || i === 0 ? 'text-paper' : 'text-ink'}`}>
                {r.label}
              </p>
              <p className={`mt-1 text-[.85rem] leading-relaxed ${last || i === 0 ? 'text-paper/90' : 'text-ink-soft'}`}>
                {r.note}
              </p>
            </div>
            {!last && (
              <div className="flex justify-center py-2" aria-hidden>
                <ArrowDown className="h-4 w-4 text-ink-faint" />
              </div>
            )}
          </motion.li>
        )
      })}
    </ol>
  )
}

/* ---------------- Page ---------------- */

export function ResearchPage() {
  const reduce = useReducedMotion()

  return (
    <div>
      <header className="contour border-b border-ink/10">
        <div className="wrap py-12 sm:py-16">
          <p className="eyebrow">{RESEARCH_FRAME.eyebrow}</p>
          <h1 className="mt-3 max-w-3xl text-[2.1rem] font-semibold leading-[1.1] sm:text-5xl">
            {RESEARCH_FRAME.title}
          </h1>
          <p className="mt-5 max-w-2xl text-[1.1rem] leading-relaxed text-ink-soft">{RESEARCH_FRAME.standfirst}</p>
          <p className="mt-8 max-w-3xl border-l-2 border-heather pl-6 font-display text-xl leading-snug sm:text-2xl">
            {RESEARCH_FRAME.claim}
          </p>
        </div>
      </header>

      {/* Research in practice */}
      <section aria-labelledby="rip-h" className="wrap py-14">
        <div className="card grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,15rem)_1fr] lg:gap-10">
          <div className="mx-auto w-full max-w-[15rem] lg:mx-0">
            <div className="aspect-[4/5] w-full">
              <FacilitatorPhoto />
            </div>
          </div>
          <div>
            <p className="eyebrow">Research in practice</p>
            <h2 id="rip-h" className="mt-2 font-display text-3xl font-semibold">{FACILITATOR.name}</h2>
            <p className="mt-1.5 text-[1.02rem] text-moss-600">{FACILITATOR.role}</p>
            <p className="mt-4 max-w-2xl text-[1.02rem] leading-relaxed text-ink-soft">
              Session 3 is not a lecture on machine learning. Dr Afli brings worked examples from his own field —
              natural language processing, machine translation, multilingual AI, low-resource language processing,
              language models and culturally aware AI — and puts them beside the tasks people in the room actually do.
              No prior technical knowledge is assumed at any point.
            </p>
            <a
              href={FACILITATOR.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6"
            >
              {FACILITATOR.websiteLabel}
              <ArrowUpRight className="h-4 w-4" aria-hidden />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </section>

      {/* Why this matters to my research */}
      <section aria-labelledby="why-h" className="border-y border-ink/10 bg-moss-800 text-paper">
        <div className="wrap py-16">
          <Reveal>
            <p className="eyebrow text-moss-200">In his own words</p>
            <h2 id="why-h" className="mt-3 text-3xl font-semibold sm:text-4xl">Why this matters to my research</h2>
          </Reveal>
          <blockquote className="mt-8 max-w-3xl space-y-5 border-l-2 border-moss-300 pl-6 sm:pl-8">
            {FACILITATOR.researchStory.map((para, i) => (
              <motion.p
                key={i}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="font-display text-xl leading-relaxed sm:text-2xl"
              >
                {para}
              </motion.p>
            ))}
            <footer className="pt-2 text-sm text-moss-100/75">{FACILITATOR.name}</footer>
          </blockquote>
        </div>
      </section>

      {/* Selected research areas */}
      <section aria-labelledby="ra-h" className="wrap py-16">
        <Reveal>
          <p className="eyebrow">Selected research areas</p>
          <h2 id="ra-h" className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
            Six strands, and where each one touches this course
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RESEARCH_AREAS.map((a, i) => {
            const Icon = AREA_ICONS[a.icon as keyof typeof AREA_ICONS]
            return (
              <motion.article
                key={a.id}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: Math.min(i * 0.07, 0.4) }}
                className="card card-hover flex flex-col p-6"
              >
                <span aria-hidden className="grid h-10 w-10 place-items-center rounded-xl bg-heather-soft text-heather">
                  <Icon className="h-[18px] w-[18px]" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug">{a.title}</h3>
                <p className="mt-2 text-[.95rem] leading-relaxed text-ink-soft">{a.body}</p>
              </motion.article>
            )
          })}
        </div>
        <p className="mt-6 text-sm text-ink-mute">
          Areas of work, described in general terms. No publications, datasets, results or statistics are claimed.
        </p>
      </section>

      {/* Research to workplace */}
      <section aria-labelledby="rtw-h" className="border-y border-ink/10 bg-paper-card">
        <div className="wrap py-16">
          <Reveal>
            <p className="eyebrow">How the research reaches the room</p>
            <h2 id="rtw-h" className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
              From a research question to a task on your desk
            </h2>
            <p className="mt-4 max-w-2xl text-[1.02rem] leading-relaxed text-ink-soft">
              The chain matters because it ends where it does. Research is upstream; responsibility is downstream;
              and human judgement sits between them, not after them.
            </p>
          </Reveal>
          <div className="mt-10"><ResearchToWorkplace /></div>
        </div>
      </section>

      {/* Concepts */}
      <section aria-labelledby="con-h" className="wrap py-16">
        <Reveal>
          <p className="eyebrow">Six ideas, without the jargon</p>
          <h2 id="con-h" className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
            What the research field actually studies
          </h2>
          <p className="mt-4 max-w-2xl text-[1.02rem] leading-relaxed text-ink-soft">
            Each one opens into more detail. In the room, the plain-language line is usually enough — the depth is
            there for whoever asks.
          </p>
        </Reveal>
        <div className="mt-10 space-y-2.5">
          {CONCEPTS.map(c => (
            <Disclosure
              key={c.id}
              tone="card"
              summary={
                <span className="block">
                  <span className="block font-display text-lg font-semibold">{c.term}</span>
                  <span className="mt-0.5 block text-sm text-ink-soft">{c.plain}</span>
                </span>
              }
            >
              <p className="max-w-3xl text-[1.02rem] leading-relaxed text-ink-soft">{c.depth}</p>
              <p className="mt-4 border-l-2 border-moss-400 pl-4 text-[.98rem] font-medium leading-relaxed">
                <span className="kicker mr-2">Why it matters here</span>{c.matters}
              </p>
            </Disclosure>
          ))}
        </div>
      </section>

      {/* Pipeline */}
      <section aria-labelledby="pl-h" className="border-y border-ink/10 bg-paper-card">
        <div className="wrap py-16">
          <Reveal>
            <p className="eyebrow">The Irish AI pipeline</p>
            <h2 id="pl-h" className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
              Six stages, and where the human belongs at each one
            </h2>
            <p className="mt-4 max-w-2xl text-[1.02rem] leading-relaxed text-ink-soft">
              Irish speech → speech recognition → Irish text → language processing → translation → English.
              Select any stage to see what AI does there, what can go wrong, and where human expertise matters.
            </p>
          </Reveal>
          <div className="mt-10"><Pipeline /></div>
          <p className="mt-8 max-w-3xl rounded-xl2 border border-moss-200 bg-moss-50/70 p-6 font-display text-xl leading-snug text-moss-800">
            {ERROR_LESSON}
          </p>
        </div>
      </section>

      {/* Real example placeholder */}
      <section aria-labelledby="ex-h" className="wrap py-16">
        <div className="rounded-xl2 border-2 border-dashed border-lichen bg-lichen-soft/25 p-6 sm:p-10">
          <p className="eyebrow text-lichen-deep">Session 3 · to be supplied</p>
          <h2 id="ex-h" className="mt-3 font-display text-2xl font-semibold text-lichen-deep sm:text-3xl">
            {REAL_EXAMPLE_PLACEHOLDER.marker}
          </h2>
          <p className="mt-4 max-w-2xl text-[1.02rem] leading-relaxed text-ink-soft">
            {REAL_EXAMPLE_PLACEHOLDER.intro}
          </p>
          <ol className="mt-6 grid gap-2 sm:grid-cols-2">
            {REAL_EXAMPLE_PLACEHOLDER.willShow.map((w, i) => (
              <li key={w} className="flex items-baseline gap-3 rounded-xl border border-lichen/30 bg-paper-card/70 px-4 py-3">
                <span aria-hidden className="font-mono text-[.7rem] font-bold text-lichen-deep">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-sm leading-relaxed text-ink-soft">{w}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-6 rounded-xl2 border border-dashed border-ink/20 p-6">
          <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
            <FileQuestion className="h-4 w-4 text-lichen-deep" aria-hidden /> Other placeholders
          </h3>
          <ul className="mt-3 space-y-2">
            {RESEARCH_PLACEHOLDERS.map(p => (
              <li key={p} className="flex gap-3 text-[.95rem] leading-relaxed text-ink-soft">
                <span aria-hidden className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-lichen" />{p}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-ink-mute">
            Nothing on this page asserts a specific publication, dataset, result or statistic. Where such material
            belongs, it is marked <Placeholder>like this</Placeholder> rather than invented.
          </p>
        </div>
      </section>
    </div>
  )
}
