import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, ClipboardList, ExternalLink, LayoutGrid } from 'lucide-react'
import { FINAL_REFLECTION, CLOSING, THIRTY_DAYS, PLAN_SECTIONS } from '../data/finalPlan'
import { FACILITATOR, FEEDBACK } from '../data/facilitator'
import { Charter } from '../components/exercises/Charter'
import { ReflectionCard } from '../components/ReflectionCard'
import { InteractiveWorkflow } from '../components/InteractiveWorkflow'
import { Reveal } from '../components/ui/Reveal'
import { SEVEN_STEPS } from '../data/exerciseContent'

const ACTIONS = [
  {
    id: 'review',
    label: 'Review the course',
    body: 'Back through the four sessions, the frameworks, the AI Act and the Irish-language work.',
    href: '#/',
    Icon: LayoutGrid,
    external: false,
  },
  {
    id: 'plan',
    label: 'Create my AI action plan',
    body: 'Seven short sections. The one document you take away with you.',
    href: '#plan',
    Icon: ClipboardList,
    external: false,
  },
  {
    id: 'feedback',
    label: 'Give feedback',
    body: 'What worked, what did not, and what the next session should do differently.',
    href: FEEDBACK.url,
    Icon: ExternalLink,
    external: true,
  },
]

export function PlanPage() {
  const reduce = useReducedMotion()

  return (
    <div>
      <header className="contour border-b border-ink/10">
        <div className="wrap py-12 sm:py-16">
          <p className="eyebrow">Session 4 · What participants take away</p>
          <h1 className="mt-3 max-w-3xl text-[2.1rem] font-semibold leading-[1.1] sm:text-5xl">
            My Responsible AI Plan
          </h1>
          <p className="mt-5 max-w-2xl text-[1.1rem] leading-relaxed text-ink-soft">
            Everything on this page is written by the participant, in their own words. It is the only deliverable of
            the programme that leaves the building with them.
          </p>
        </div>
      </header>

      <section aria-labelledby="wf-h" className="wrap py-14">
        <Reveal>
          <p className="eyebrow">Build my AI workflow</p>
          <h2 id="wf-h" className="mt-3 text-3xl font-semibold sm:text-4xl">Seven steps, written down</h2>
          <p className="mt-4 max-w-2xl text-[1.02rem] leading-relaxed text-ink-soft">
            A workflow you have written down is one you can hand to someone else, improve, and defend.
          </p>
        </Reveal>
        <div className="mt-8"><InteractiveWorkflow steps={SEVEN_STEPS} /></div>
      </section>

      <section id="plan" aria-labelledby="ch-h" className="scroll-mt-20 border-y border-ink/10 bg-paper-card">
        <div className="wrap py-16">
          <Reveal>
            <p className="eyebrow">Exercise 15</p>
            <h2 id="ch-h" className="mt-3 text-3xl font-semibold sm:text-4xl">My Responsible AI Plan</h2>
            <p className="mt-4 max-w-2xl text-[1.02rem] leading-relaxed text-ink-soft">
              {PLAN_SECTIONS.length} sections. The Irish-language one is not an afterthought — it is the reason the
              programme exists in the form it does.
            </p>
          </Reveal>
          <div className="mt-8"><Charter /></div>
        </div>
      </section>

      <section aria-labelledby="td-h" className="wrap py-16">
        <Reveal>
          <p className="eyebrow">Afterwards</p>
          <h2 id="td-h" className="mt-3 text-3xl font-semibold sm:text-4xl">The next thirty days</h2>
        </Reveal>
        <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {THIRTY_DAYS.map((d, i) => (
            <motion.li
              key={d.when}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card p-5"
            >
              <p className="kicker text-moss-600">{d.when}</p>
              <p className="mt-2 text-[.98rem] leading-relaxed text-ink-soft">{d.what}</p>
            </motion.li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="fr-h" className="border-t border-ink/10 bg-paper-card">
        <div className="wrap py-16">
          <Reveal>
            <p className="eyebrow">Final reflection</p>
            <h2 id="fr-h" className="mt-3 text-3xl font-semibold sm:text-4xl">Five questions to close</h2>
          </Reveal>
          <div className="mt-8">
            <ReflectionCard prompts={FINAL_REFLECTION} columns={2} />
          </div>
        </div>
      </section>

      {/* Three actions */}
      <section aria-labelledby="act-h" className="wrap py-16">
        <Reveal>
          <h2 id="act-h" className="text-3xl font-semibold sm:text-4xl">Three things to do now</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {ACTIONS.map((a, i) => (
            <motion.a
              key={a.id}
              href={a.href}
              {...(a.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.09 }}
              className="card card-hover group flex flex-col p-6"
            >
              <span aria-hidden className="grid h-10 w-10 place-items-center rounded-xl bg-moss-100 text-moss-700 transition-colors group-hover:bg-moss-700 group-hover:text-paper">
                <a.Icon className="h-[18px] w-[18px]" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{a.label}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{a.body}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-moss-700">
                {a.external ? 'Open the form' : 'Go'}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
                {a.external && <span className="sr-only"> (opens in a new tab)</span>}
              </span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="wrap pb-20">
        <div className="rounded-xl2 bg-moss-800 px-6 py-14 text-paper sm:px-14 sm:py-20">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl font-display text-2xl leading-snug sm:text-4xl"
          >
            {CLOSING.line1}
          </motion.p>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-3 max-w-3xl font-display text-2xl leading-snug text-moss-200 sm:text-4xl"
          >
            {CLOSING.line2}
          </motion.p>
          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 max-w-2xl border-t border-paper/15 pt-8 text-[1.1rem] leading-relaxed text-moss-100/85"
          >
            {CLOSING.line3}
          </motion.p>
          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-8 font-display text-xl sm:text-2xl"
            lang="ga"
          >
            AI don Ghaeilge — ní AI in ionad na Gaeilge.
          </motion.p>

          <div className="mt-12 border-t border-paper/15 pt-8">
            <p className="font-display text-xl font-semibold">{FACILITATOR.name}</p>
            <p className="mt-1 text-sm italic text-moss-100/80">{FACILITATOR.credentials}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={FACILITATOR.website}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-paper text-moss-800 hover:bg-moss-50"
              >
                Visit Dr Haithem Afli’s academic website
                <ArrowUpRight className="h-4 w-4" aria-hidden />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a
                href={FEEDBACK.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn border border-paper/30 text-paper hover:border-paper/60"
              >
                {FEEDBACK.short}
                <ArrowUpRight className="h-4 w-4" aria-hidden />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
            <p className="mt-4 text-xs text-moss-100/60">{FEEDBACK.note}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
