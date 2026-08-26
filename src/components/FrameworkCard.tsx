import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Plus } from 'lucide-react'
import { useState } from 'react'
import type { Framework } from '../data/types'
import { Bi } from './ui/Bi'

const TONE = {
  moss:    { chip: 'bg-moss-100 text-moss-800', node: 'border-moss-300 bg-moss-50', on: 'bg-moss-700 text-paper border-moss-700', rule: 'bg-moss-300' },
  lichen:  { chip: 'bg-lichen-soft text-lichen-deep', node: 'border-lichen/40 bg-lichen-soft/40', on: 'bg-lichen text-paper border-lichen', rule: 'bg-lichen/50' },
  heather: { chip: 'bg-heather-soft text-heather', node: 'border-heather/35 bg-heather-soft/40', on: 'bg-heather text-paper border-heather', rule: 'bg-heather/40' },
}

export function FrameworkCard({ f, i }: { f: Framework; i: number }) {
  const [active, setActive] = useState<number | null>(null)
  const reduce = useReducedMotion()
  const tone = TONE[f.tone]

  return (
    <motion.section
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      className="card p-6 sm:p-8"
      aria-labelledby={`fw-${f.id}`}
    >
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
        <span className={`rounded-full px-3 py-1 text-[.68rem] font-bold uppercase tracking-wider ${tone.chip}`}>
          Framework {i + 1}
        </span>
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
                className={`w-full rounded-xl2 border px-4 py-3.5 text-left transition-all duration-300 ${on ? tone.on : `${tone.node} hover:-translate-y-0.5`}`}
              >
                <span className="flex items-center justify-between gap-2">
                  <span className={`text-[.95rem] font-bold uppercase tracking-wide ${on ? 'text-paper' : 'text-ink'}`}>
                    <Bi v={s.label} />
                  </span>
                  <Plus className={`h-3.5 w-3.5 shrink-0 transition-transform duration-300 ${on ? 'rotate-45 text-paper/90' : 'text-ink-faint'}`} aria-hidden />
                </span>
                {s.label.ga && (
                  <span lang="ga" className={`gaeilge mt-0.5 block text-[.72rem] ${on ? 'text-paper/90' : 'text-ink-mute'}`}>
                    {s.label.ga}
                  </span>
                )}
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
            initial={reduce ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={reduce ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-5 border-l-2 border-ink/15 pl-5 text-[1.02rem] leading-relaxed text-ink-soft">
              {f.steps[active].body}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}
