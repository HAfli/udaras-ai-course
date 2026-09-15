import { JOURNEY } from '../data/programme'
import { Bi } from './ui/Bi'

/** Compact rail showing where the current stage sits in the whole
 *  journey — plain text separated by a rule, not a row of coloured
 *  pill badges. */
export function ProgressIndicator({ currentId }: { currentId: string }) {
  const idx = JOURNEY.findIndex(s => s.id === currentId)

  return (
    <nav aria-label="Programme progress" className="scrollbar-thin overflow-x-auto">
      <ol className="flex min-w-max items-center text-[.72rem] font-semibold uppercase tracking-wide">
        {JOURNEY.map((s, i) => {
          const now = i === idx
          return (
            <li key={s.id} className="flex items-center">
              {i > 0 && <span aria-hidden className="mx-2.5 text-ink-faint">/</span>}
              <a
                href={s.route}
                aria-current={now ? 'step' : undefined}
                className={`whitespace-nowrap pb-0.5 transition-colors ${
                  now ? 'border-b-2 border-ink text-ink' : 'text-ink-faint hover:text-ink-mute'
                }`}
              >
                {/* compact: this is a wayfinding rail, not the content itself —
                    the destination page's own <h1> carries the full bilingual heading */}
                <Bi v={s.label} compact />
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
