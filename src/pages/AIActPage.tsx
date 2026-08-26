import { motion, useReducedMotion } from 'framer-motion'
import { CheckCircle2, ExternalLink, Info, XCircle } from 'lucide-react'
import { AI_ACT_INTRO, CURRENT_POSITION, RISK_TIERS, LITERACY, TIMELINE, OMNIBUS_NOTE, RESPONSIBILITIES, SOURCES } from '../data/aiact'
import { ScenarioCards } from '../components/ScenarioCard'
import { StopFramework } from '../components/exercises/StopFramework'
import { Reveal } from '../components/ui/Reveal'
import { Disclosure } from '../components/ui/Disclosure'

const TIER_CLS: Record<string, string> = {
  red: 'border-risk-red/35 bg-red-50',
  amber: 'border-risk-amber/35 bg-lichen-soft/35',
  moss: 'border-moss-300 bg-moss-50',
  grey: 'border-ink/12 bg-paper-deep/40',
}
const TIER_SYM: Record<string, string> = { red: '■', amber: '◐', moss: '◆', grey: '○' }

export function AIActPage() {
  const reduce = useReducedMotion()

  return (
    <div>
      <header className="contour border-b border-ink/10">
        <div className="wrap py-12 sm:py-16">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-moss-700 px-3.5 py-1.5 text-[.72rem] font-bold uppercase tracking-[.12em] text-paper">
              {CURRENT_POSITION.banner}
            </span>
            <span className="chip border-lichen/40 bg-lichen-soft/40 text-lichen-deep">
              <Info className="h-3.5 w-3.5" aria-hidden /> {CURRENT_POSITION.disclaimer}
            </span>
          </div>
          <h1 className="mt-5 max-w-3xl text-[2.1rem] font-semibold leading-[1.1] sm:text-5xl">
            The AI Act, in plain language
          </h1>
          <p className="mt-5 max-w-3xl text-[1.1rem] leading-relaxed text-ink-soft">{AI_ACT_INTRO.standfirst}</p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-mute">{CURRENT_POSITION.note}</p>
        </div>
      </header>

      {/* Why */}
      <section aria-labelledby="why-h" className="wrap py-14">
        <Reveal>
          <h2 id="why-h" className="text-3xl font-semibold sm:text-4xl">Why regulate AI at all?</h2>
        </Reveal>
        <ul className="mt-7 grid gap-3 sm:grid-cols-2">
          {AI_ACT_INTRO.whyRegulate.map((w, i) => (
            <motion.li
              key={w}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="card p-5 text-[.98rem] leading-relaxed text-ink-soft"
            >
              {w}
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Risk tiers */}
      <section aria-labelledby="tier-h" className="border-y border-ink/10 bg-paper-card">
        <div className="wrap py-16">
          <Reveal>
            <p className="eyebrow">Risk-based regulation</p>
            <h2 id="tier-h" className="mt-3 text-3xl font-semibold sm:text-4xl">Four tiers, not one rulebook</h2>
            <p className="mt-4 max-w-2xl text-[1.02rem] leading-relaxed text-ink-soft">
              The obligations scale with what could go wrong. Most small-business AI use sits in the bottom two tiers.
            </p>
          </Reveal>

          <div className="mt-10 space-y-3">
            {RISK_TIERS.map((tier, i) => (
              <motion.div
                key={tier.id}
                initial={reduce ? false : { opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className={`rounded-xl2 border p-6 ${TIER_CLS[tier.tone]}`}
              >
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                  <span aria-hidden className="font-mono text-lg">{TIER_SYM[tier.tone]}</span>
                  <h3 className="font-display text-2xl font-semibold">{tier.label}</h3>
                  <span className="text-sm font-medium text-ink-mute">{tier.summary}</span>
                </div>
                <p className="mt-3 max-w-3xl text-[.98rem] leading-relaxed text-ink-soft">{tier.detail}</p>
                <p className="mt-4 border-l-2 border-ink/20 pl-4 text-[.98rem] font-medium leading-relaxed">
                  <span className="kicker mr-2">For you</span>{tier.forYou}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Literacy */}
      <section aria-labelledby="lit-h" className="wrap py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,24rem)]">
          <div>
            <Reveal>
              <p className="eyebrow">{LITERACY.article}</p>
              <h2 id="lit-h" className="mt-3 text-3xl font-semibold sm:text-4xl">
                The part of the law that this course exists because of
              </h2>
              <p className="mt-6 max-w-3xl border-l-2 border-moss-400 pl-6 font-display text-xl leading-relaxed sm:text-2xl">
                {LITERACY.framing}
              </p>
              <p className="mt-2 pl-6 text-sm text-ink-mute">{LITERACY.applied}</p>
              <blockquote className="mt-7 rounded-xl2 border border-ink/10 bg-paper-deep/40 p-5">
                <p className="text-[1.02rem] leading-relaxed text-ink-soft">“{LITERACY.quote}”</p>
                <footer className="mt-3 text-sm text-ink-mute">{LITERACY.quoteNote}</footer>
              </blockquote>
            </Reveal>

            <ul className="mt-8 space-y-2.5">
              {LITERACY.plain.map(p => (
                <li key={p} className="flex gap-3.5 text-[1.02rem] leading-relaxed text-ink-soft">
                  <span aria-hidden className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-moss-400" />
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl2 border border-moss-200 bg-moss-50/70 p-6">
              <p className="kicker text-moss-600">What it means for a small business</p>
              <ul className="mt-3 space-y-2">
                {LITERACY.meansForSmallBusiness.map(m => (
                  <li key={m} className="flex gap-3 text-[.98rem] leading-relaxed text-moss-800">
                    <span aria-hidden className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-moss-500" />
                    {m}
                  </li>
                ))}
              </ul>
              <div className="mt-5 border-t border-moss-200 pt-5">
                <p className="font-display text-lg leading-snug text-moss-800">{LITERACY.courseClaim}</p>
                <p className="mt-2 text-sm leading-relaxed text-moss-700">{LITERACY.courseCaveat}</p>
              </div>
            </div>
          </div>

          <aside aria-label="AI Act roles" className="lg:sticky lg:top-24 lg:self-start">
            <p className="eyebrow">Who is who</p>
            <div className="mt-3 space-y-2.5">
              {RESPONSIBILITIES.map(r => (
                <div key={r.role} className="card p-4">
                  <p className="text-sm font-bold">{r.role}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{r.body}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* Misconceptions */}
      <section aria-labelledby="mis-h" className="border-t border-ink/10 bg-paper-card">
        <div className="wrap py-14">
          <Reveal>
            <p className="eyebrow">Four things people get wrong</p>
            <h2 id="mis-h" className="mt-3 text-3xl font-semibold sm:text-4xl">Clearing the air</h2>
          </Reveal>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {LITERACY.misconceptions.map((m, i) => (
              <motion.li
                key={m.wrong}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="card p-5"
              >
                <p className="flex gap-2.5 text-[.95rem] font-semibold text-ink-mute line-through decoration-risk-red/60">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-risk-red no-underline" aria-hidden />
                  <span>{m.wrong}</span>
                </p>
                <p className="mt-3 flex gap-2.5 text-[.98rem] leading-relaxed text-ink-soft">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-risk-green" aria-hidden />
                  <span>{m.right}</span>
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Timeline */}
      <section aria-labelledby="tl-h" className="border-y border-ink/10 bg-moss-800 text-paper">
        <div className="wrap py-16">
          <Reveal>
            <p className="eyebrow text-moss-200">Application timeline</p>
            <h2 id="tl-h" className="mt-3 text-3xl font-semibold sm:text-4xl">What applies, and when</h2>
          </Reveal>
          <ol className="mt-10 space-y-px">
            {TIMELINE.map((e, i) => (
              <motion.li
                key={e.date}
                initial={reduce ? false : { opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.06, 0.5) }}
                className={`flex flex-col gap-1 border-b border-paper/10 py-4 sm:flex-row sm:gap-6 ${e.accent ? 'bg-paper/5 px-4' : ''}`}
              >
                <span className="w-40 shrink-0 font-mono text-sm font-bold text-moss-200">{e.date}</span>
                <span>
                  <span className="block text-[1.05rem] font-semibold">{e.label}</span>
                  <span className="mt-0.5 block text-sm leading-relaxed text-moss-100/75">{e.note}</span>
                </span>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Omnibus */}
      <section aria-labelledby="om-h" className="wrap py-16">
        <Reveal>
          <h2 id="om-h" className="text-3xl font-semibold sm:text-4xl">{OMNIBUS_NOTE.title}</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <div className="card p-6">
            <p className="kicker text-lichen-deep">Changed in July 2026</p>
            <ul className="mt-3 space-y-2.5">
              {OMNIBUS_NOTE.changed.map(c => (
                <li key={c} className="flex gap-3 text-[.98rem] leading-relaxed text-ink-soft">
                  <span aria-hidden className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-lichen" />{c}
                </li>
              ))}
            </ul>
          </div>
          <div className="card border-moss-200 bg-moss-50/60 p-6">
            <p className="kicker text-moss-600">Unchanged</p>
            <ul className="mt-3 space-y-2.5">
              {OMNIBUS_NOTE.unchanged.map(c => (
                <li key={c} className="flex gap-3 text-[.98rem] leading-relaxed text-moss-800">
                  <span aria-hidden className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-moss-500" />{c}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-5 rounded-xl2 border border-dashed border-lichen/50 bg-lichen-soft/25 p-5 text-[.98rem] leading-relaxed text-ink-soft">
          <span className="kicker mr-2 text-lichen-deep">Caution</span>{OMNIBUS_NOTE.caution}
        </p>
      </section>

      {/* Practice */}
      <section aria-labelledby="pr-h" className="border-t border-ink/10 bg-paper-card">
        <div className="wrap space-y-12 py-16">
          <Reveal>
            <p className="eyebrow">In practice</p>
            <h2 id="pr-h" className="mt-3 text-3xl font-semibold sm:text-4xl">Two things to take into the room</h2>
          </Reveal>

          <div>
            <h3 className="font-display text-2xl font-semibold">The STOP check</h3>
            <div className="mt-5"><StopFramework /></div>
          </div>

          <div>
            <h3 className="font-display text-2xl font-semibold">Five business scenarios</h3>
            <div className="mt-5"><ScenarioCards /></div>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section aria-labelledby="src-h" className="wrap py-14">
        <h2 id="src-h" className="eyebrow">Sources</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
          Content on this page was checked against these in August 2026. Verify before repeating dates in front of a
          room — and show participants how you checked.
        </p>
        <ul className="mt-4 space-y-1.5">
          {SOURCES.map(s => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-moss-700 hover:underline">
                {s.label}
                <ExternalLink className="h-3 w-3" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Disclosure summary={<span className="text-sm font-semibold">A note on how this page should be used</span>}>
            <p className="text-sm leading-relaxed text-ink-soft">
              This is educational material for an AI literacy course, not legal advice, and it does not create or
              describe obligations for any particular organisation. Where a participant’s situation looks like it
              touches high-risk use — recruitment and staff management being the realistic case — the right answer in
              the room is “take advice”, not an interpretation from the front of the class.
            </p>
          </Disclosure>
        </div>
      </section>
    </div>
  )
}
