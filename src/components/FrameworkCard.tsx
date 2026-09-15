import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Plus } from 'lucide-react'
import { useState } from 'react'
import type { Framework } from '../data/types'
import { Bi } from './ui/Bi'

// One functional accent for every framework's active step — the four
// frameworks are differentiated by their number and content, not by
// four different brand colours standing in for identity.
const NODE = 'border-ink/15 bg-paper-card'
const ON = 'bg-moss-700 text-paper border-moss-700'

export function FrameworkCard({ f, i }: { f: Framework; i: number }) {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section className="card p-6 sm:p-8" aria-labelledby={`fw-${f.id}`}>
      <div className="flex items-baseline gap-4">
        <span aria-hidden className="font-mono text-[.75rem] font-bold text-ink-faint">{String(i + 1).padStart(2, '0')}</span>
        <h3 id={`fw-${f.id}`} className="font-display text-2xl font-semibold"><Bi v={f.title} /></h3>
      </div>
      <p className="mt-2 text-[.95rem] text-ink-soft">{f.question}</p>

      <ol className="mt-6 flex flex-col gap-2 lg:flex-row lg:items-stretch">
        {f.steps.map((s, si) => {
          const on = active === si
          return (
            <li key={s.label.en} className="flex flex-1 items-center gap-2">
              <button
                onClick={() => setActive(on ? null : si)}
                aria-expanded={on}
                className={`w-full rounded-xl2 border px-4 py-3.5 text-left transition-all duration-300 ${on ? ON : `${NODE} hover:border-ink/30`}`}
              >
                <span className="flex items-start justify-between gap-2">
                  <span className={on ? 'text-paper' : 'text-ink'}>
                    <Bi v={s.label} className="text-[.95rem] font-bold uppercase tracking-wide" />
                  </span>
                  <Plus className={`mt-0.5 h-3.5 w-3.5 shrink-0 transition-transform duration-300 ${on ? 'rotate-45 text-paper/90' : 'text-ink-faint'}`} aria-hidden />
                </span>
              </button>
              {si < f.steps.length - 1 && <ArrowRight className="hidden h-4 w-4 shrink-0 text-ink-faint lg:block" aria-hidden />}
            </li>
          )
        })}
      </ol>

      <AnimatePresence initial={false}>
        {active !== null && (
          <motion.div
            key={active}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-5 border-l-2 border-ink/15 pl-5 text-[1.02rem] leading-relaxed text-ink-soft">
              {f.steps[active].body}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
