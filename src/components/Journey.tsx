import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, FlaskConical, Users, Sparkles, ShieldCheck, Wrench, Languages, Stethoscope } from 'lucide-react'
import { JOURNEY, type Stage } from '../data/programme'
import { Bi } from './ui/Bi'
import { Reveal } from './ui/Reveal'

const ICONS: Record<string, typeof Users> = {
  prep: Users, s1: Sparkles, b1: FlaskConical, s2: ShieldCheck, b2: Wrench, s3: Languages, s4: Stethoscope,
}

function Node({ s }: { s: Stage }) {
  const Icon = ICONS[s.id] ?? Users
  const between = s.kind === 'between'

  return (
    <a
      href={s.route}
      className={`group relative flex flex-1 flex-col rounded-xl2 border p-5 text-left transition-all duration-300 focus-visible:outline-offset-4 ${
        between
          ? 'border-dashed border-ink/20 bg-paper-deep/40 hover:border-lichen hover:bg-lichen-soft/30'
          : 'border-ink/10 bg-paper-card shadow-soft hover:-translate-y-1 hover:border-moss-300 hover:shadow-lift'
      }`}
    >
      <div className="flex items-center gap-3">
        <span
          aria-hidden
          className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-colors ${
            between ? 'bg-lichen-soft/70 text-lichen-deep' : 'bg-moss-100 text-moss-700 group-hover:bg-moss-700 group-hover:text-paper'
          }`}
        >
          <Icon className="h-[18px] w-[18px]" />
        </span>
        <span className="min-w-0">
          <span className="block text-[.65rem] font-bold uppercase tracking-[.16em] text-ink-faint">
            {between ? 'Between' : `Stage ${s.stage}`}
          </span>
          <span className="block truncate text-[.72rem] font-medium text-ink-mute">{s.when}</span>
        </span>
      </div>

      <h3 className="mt-4 font-display text-[1.15rem] font-semibold leading-snug">
        <Bi v={s.label} />
      </h3>
      <p className="mt-1 text-[.75rem] font-medium uppercase tracking-wide text-moss-500">{s.sub}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{s.blurb}</p>

      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-moss-700">
        Open
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
      </span>
    </a>
  )
}

export function Journey() {
  const reduce = useReducedMotion()
  return (
    <section id="journey" aria-labelledby="journey-h" className="scroll-mt-20 wrap py-20 sm:py-24">
      <Reveal>
        <p className="eyebrow">The learning journey</p>
        <h2 id="journey-h" className="mt-3 max-w-2xl text-3xl font-semibold leading-[1.15] sm:text-4xl">
          Seven stages over six to eight weeks
        </h2>
        <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-ink-soft">
          Four sessions and a planning day — with the work that happens between them treated as part of the
          course, not homework. Every stage below opens.
        </p>
      </Reveal>

      <div className="relative mt-12">
        <motion.div
          aria-hidden
          className="absolute left-0 right-0 top-[38px] hidden h-px origin-left bg-gradient-to-r from-moss-200 via-moss-300 to-lichen-soft 2xl:block"
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
        <ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-7">
          {JOURNEY.map(s => (
            <li key={s.id} className="flex">
              <Node s={s} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
