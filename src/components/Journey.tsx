import { ArrowRight } from 'lucide-react'
import { JOURNEY, type Stage } from '../data/programme'
import { Bi } from './ui/Bi'
import { Reveal } from './ui/Reveal'

/** A single row in the sequence — differentiated from a regular stage by
 *  a label and lighter type, not by a second brand colour. */
function Row({ s, i }: { s: Stage; i: number }) {
  const between = s.kind === 'between'

  return (
    <li>
      <a
        href={s.route}
        className="group grid gap-2 py-7 sm:grid-cols-[3rem_1fr_auto] sm:items-baseline sm:gap-6"
      >
        <span aria-hidden className="font-mono text-[.75rem] font-bold text-ink-faint">
          {String(i + 1).padStart(2, '0')}
        </span>
        <div>
          <p className="text-[.68rem] font-semibold uppercase tracking-[.14em] text-ink-faint">
            {between ? 'Between sessions' : `Stage ${s.stage}`} · {s.when}
          </p>
          <h3 className="mt-1.5 font-display text-xl font-semibold leading-snug sm:text-2xl">
            <Bi v={s.label} />
          </h3>
          <p className={`mt-1 text-[.78rem] font-medium uppercase tracking-wide ${between ? 'italic normal-case text-ink-faint' : 'text-ink-mute'}`}>
            {s.sub}
          </p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">{s.blurb}</p>
        </div>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-moss-700 sm:self-center">
          Open
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
        </span>
      </a>
    </li>
  )
}

export function Journey() {
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

      <ol className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
        {JOURNEY.map((s, i) => <Row key={s.id} s={s} i={i} />)}
      </ol>
    </section>
  )
}
