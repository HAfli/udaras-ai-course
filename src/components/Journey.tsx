import { JOURNEY, type Stage } from '../data/programme'
import { Bi } from './ui/Bi'
import { Reveal } from './ui/Reveal'

/** One stage of the journey, set as a timeline entry: a large ghost
 *  numeral anchors the row, the stage name and rule follow it, and the
 *  whole row is the link — no repeated "Open →" button. */
function Entry({ s, i }: { s: Stage; i: number }) {
  const between = s.kind === 'between'

  return (
    <li>
      <a href={s.route} className="group grid grid-cols-[3.5rem_1fr] gap-x-5 py-8 sm:grid-cols-[5.5rem_1fr] sm:gap-x-8">
        <span aria-hidden className="fig-num text-4xl sm:text-6xl">
          {String(i + 1).padStart(2, '0')}
        </span>
        <div>
          <p className="text-[.68rem] font-semibold uppercase tracking-[.14em] text-ink-faint">
            {between ? 'Between sessions' : `Stage ${s.stage}`} · {s.when}
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold leading-snug decoration-1 underline-offset-4 group-hover:underline sm:text-3xl">
            <Bi v={s.label} />
          </h3>
          <div className="mt-2 h-px w-16 bg-ink/25" aria-hidden />
          <p className={`mt-3 text-[.78rem] font-medium uppercase tracking-wide ${between ? 'italic normal-case text-ink-faint' : 'text-ink-mute'}`}>
            {s.sub}
          </p>
          <p className="mt-2 max-w-xl text-[1rem] leading-relaxed text-ink-soft">{s.blurb}</p>
        </div>
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

      <ol className="mt-6 divide-y divide-ink/15 border-t border-ink/15">
        {JOURNEY.map((s, i) => <Entry key={s.id} s={s} i={i} />)}
      </ol>
    </section>
  )
}
