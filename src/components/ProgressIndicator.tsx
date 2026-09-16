import { JOURNEY } from '../data/programme'
import { Bi } from './ui/Bi'

/** Compact rail showing where the current stage sits in the whole
 *  journey — plain text separated by a rule, not a row of coloured
 *  pill badges. Uses `currentColor` throughout so it reads correctly
 *  against whichever campaign colour the current session's header is
 *  using. Every item stays at full opacity — the current/inactive
 *  distinction comes from the underline and weight, never from dimming
 *  text, since a dimmed opacity that clears one header colour (e.g.
 *  atlantic) can drop below WCAG AA on another (e.g. coral-deep). */
export function ProgressIndicator({ currentId }: { currentId: string }) {
  const idx = JOURNEY.findIndex(s => s.id === currentId)

  return (
    <nav aria-label="Programme progress" className="scrollbar-thin overflow-x-auto text-current">
      <ol className="flex min-w-max items-center text-[.72rem] font-semibold uppercase tracking-wide">
        {JOURNEY.map((s, i) => {
          const now = i === idx
          return (
            <li key={s.id} className="flex items-center">
              {i > 0 && <span aria-hidden className="mx-2.5 opacity-70">/</span>}
              <a
                href={s.route}
                aria-current={now ? 'step' : undefined}
                className={`whitespace-nowrap border-b-2 pb-0.5 transition-colors ${
                  now ? 'border-current' : 'border-transparent hover:border-current/50'
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
