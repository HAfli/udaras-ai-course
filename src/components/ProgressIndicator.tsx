import { motion, useReducedMotion } from 'framer-motion'
import { JOURNEY } from '../data/programme'
import { Check } from 'lucide-react'
import { Bi } from './ui/Bi'

/** Compact rail showing where the current stage sits in the whole journey. */
export function ProgressIndicator({ currentId }: { currentId: string }) {
  const reduce = useReducedMotion()
  const idx = JOURNEY.findIndex(s => s.id === currentId)

  return (
    <nav aria-label="Programme progress" className="scrollbar-thin overflow-x-auto">
      <ol className="flex min-w-max items-center gap-1.5">
        {JOURNEY.map((s, i) => {
          const done = i < idx
          const now = i === idx
          return (
            <li key={s.id} className="flex items-center gap-1.5">
              <a
                href={s.route}
                aria-current={now ? 'step' : undefined}
                className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-[.72rem] font-semibold transition-colors ${
                  now
                    ? 'border-moss-600 bg-moss-700 text-paper'
                    : done
                      ? 'border-moss-200 bg-moss-50 text-moss-700'
                      : 'border-ink/12 bg-paper-card text-ink-mute hover:border-moss-300 hover:text-ink'
                }`}
              >
                {done ? (
                  <Check className="h-3 w-3" aria-hidden />
                ) : (
                  <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${now ? 'bg-paper' : 'bg-ink-faint'}`} />
                )}
                <span className="whitespace-nowrap"><Bi v={s.label} /></span>
              </a>
              {i < JOURNEY.length - 1 && (
                <motion.span
                  aria-hidden
                  className={`h-px w-4 ${i < idx ? 'bg-moss-300' : 'bg-ink/12'}`}
                  initial={reduce ? false : { scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                />
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
