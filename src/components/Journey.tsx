import { JOURNEY, type Stage } from '../data/programme'
import { Bi } from './ui/Bi'
import { Reveal } from './ui/Reveal'

const RHYTHM = ['border-atlantic', 'border-emerald', 'border-gold', 'border-coral']

/** One stage of the journey. Only the actual sessions are numbered in
 *  sequence (00, 01, 02…) — the work that happens between them is
 *  labelled BETWEEN rather than given a number of its own, exactly as
 *  the programme itself distinguishes the two. */
function Entry({ s, seq, colour }: { s: Stage; seq: number; colour: string }) {
  const between = s.kind === 'between'

  return (
    <li>
      <a href={s.route} className={`group grid grid-cols-[4.5rem_1fr] gap-x-5 border-t-4 py-8 sm:grid-cols-[7rem_1fr] sm:gap-x-8 ${colour}`}>
        {between ? (
          <span aria-hidden className="pt-1 text-[.85rem] font-bold uppercase tracking-[.1em] text-ink-faint sm:text-base">
            Between
          </span>
        ) : (
          <span aria-hidden className="fig-num text-4xl sm:text-6xl">
            {String(seq).padStart(2, '0')}
          </span>
        )}
        <div>
          <p className="text-[.68rem] font-semibold uppercase tracking-[.14em] text-ink-faint">
            {s.when}
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold leading-snug group-hover:underline sm:text-3xl">
            <Bi v={s.label} />
          </h3>
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
  let seq = -1
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

      <ol className="mt-10 divide-y divide-ink/10">
        {JOURNEY.map((s, i) => {
          if (s.kind !== 'between') seq += 1
          return <Entry key={s.id} s={s} seq={seq} colour={RHYTHM[i % RHYTHM.length]} />
        })}
      </ol>
    </section>
  )
}
