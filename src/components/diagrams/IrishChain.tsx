import signpost from '../../assets/gaeltacht-signpost.jpg'

const STEPS = [
  { label: 'AI', note: 'Systems that learn patterns from data.' },
  { label: 'Language', note: 'Most of what those systems learn is language — and language is not evenly represented online.' },
  { label: 'Irish', note: 'A language with far less digital material behind it than English.' },
  { label: 'Business', note: 'Newsletters, replies, documents — real Gaeltacht workplace tasks in Irish and English.' },
  { label: 'Human judgement', note: 'The validation step that makes AI-generated Irish publishable.' },
]

/** AI → Language → Irish → Business → Human judgement — the chain behind
 *  the "Why Irish matters" moment, kept deliberately free of any invented
 *  statistic or benchmark. Set against a real Gaeltacht signpost rather
 *  than an icon row, since this is a real place, not an abstract idea. */
export function IrishChain() {
  return (
    <div className="grid gap-5 sm:grid-cols-[9rem_1fr]">
      <img
        src={signpost}
        alt="A Gaeltacht signpost reading Fáilte, Gaeltacht, An Ceantar, Ár dTeanga, Ár bPobal, above a coastal view."
        className="h-full w-full object-cover"
        width={225}
        height={381}
      />
      <div>
        <p className="eyebrow">Why this matters</p>
        <ol className="mt-3 space-y-3.5">
          {STEPS.map((s, i) => (
            <li key={s.label} className="flex items-baseline gap-3 border-b border-ink/8 pb-3.5 last:border-0 last:pb-0">
              <span className="font-mono text-[.7rem] font-bold text-ink-faint">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <p className="font-display text-base font-semibold text-ink">{s.label}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-ink-soft">{s.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
