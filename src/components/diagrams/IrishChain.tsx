import { ArrowDown } from 'lucide-react'
import signpost from '../../assets/gaeltacht-signpost.jpg'

const STEPS = [
  { label: 'AI', colour: 'text-atlantic', note: 'Systems that learn patterns from data.' },
  { label: 'Language', colour: 'text-emerald', note: 'Most of what those systems learn is language — and language is not evenly represented online.' },
  { label: 'Irish', colour: 'text-gold-text', note: 'A language with far less digital material behind it than English.' },
  { label: 'Business', colour: 'text-coral', note: 'Newsletters, replies, documents — real Gaeltacht workplace tasks in Irish and English.' },
  { label: 'Human judgement', colour: 'text-ink', note: 'The validation step that makes AI-generated Irish publishable.' },
]

/** AI → Language → Irish → Business → Human judgement — the chain behind
 *  the "Why Irish matters" moment, kept deliberately free of any invented
 *  statistic or benchmark. Set beside a real Gaeltacht signpost rather
 *  than an icon row, since this is a real place, not an abstract idea. */
export function IrishChain() {
  return (
    <div className="grid gap-8 sm:grid-cols-[12rem_minmax(0,1fr)]">
      <img
        src={signpost}
        alt="A Gaeltacht signpost reading Fáilte, Gaeltacht, An Ceantar, Ár dTeanga, Ár bPobal, above a coastal view."
        className="h-full w-full object-cover"
        width={225}
        height={381}
      />
      <div>
        <p className="eyebrow">Why this matters</p>
        <ol className="mt-4">
          {STEPS.map((s, i) => (
            <li key={s.label}>
              <p className={`font-display text-3xl font-bold uppercase leading-none sm:text-4xl ${s.colour}`}>
                {s.label}
              </p>
              <p className="mt-1.5 max-w-md text-sm leading-relaxed text-ink-soft">{s.note}</p>
              {i < STEPS.length - 1 && (
                <ArrowDown className="my-3 h-5 w-5 text-ink-faint" aria-hidden />
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
