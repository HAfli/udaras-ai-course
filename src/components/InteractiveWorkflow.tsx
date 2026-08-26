import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

export interface Step { step: string; body?: string }

/** Horizontal on desktop, vertical on mobile. Click a step to expand it. */
export function InteractiveWorkflow({
  steps, accent = 'moss', compact = false,
}: { steps: Step[]; accent?: 'moss' | 'heather' | 'lichen'; compact?: boolean }) {
  const [active, setActive] = useState(0)
  const reduce = useReducedMotion()
  const tone =
    accent === 'heather' ? 'bg-heather text-paper' : accent === 'lichen' ? 'bg-lichen text-paper' : 'bg-moss-700 text-paper'

  return (
    <div>
      <ol className="flex flex-col gap-2 lg:flex-row lg:items-stretch">
        {steps.map((s, i) => {
          const on = i === active
          return (
            <li key={s.step} className="flex flex-1 items-center gap-2">
              <motion.button
                onClick={() => setActive(i)}
                aria-pressed={on}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className={`w-full rounded-xl2 border px-3 py-3 text-left transition-all duration-300 ${
                  on ? `${tone} border-transparent shadow-lift` : 'border-ink/12 bg-paper-card hover:border-moss-300'
                }`}
              >
                <span className={`block text-[.62rem] font-bold uppercase tracking-[.16em] ${on ? 'text-paper/85' : 'text-ink-faint'}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className={`mt-0.5 block text-sm font-semibold ${on ? 'text-paper' : 'text-ink'}`}>{s.step}</span>
              </motion.button>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden h-4 w-4 shrink-0 text-ink-faint lg:block" aria-hidden />
              )}
            </li>
          )
        })}
      </ol>

      {!compact && steps[active]?.body && (
        <motion.div
          key={active}
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28 }}
          className="card mt-4 p-5"
        >
          <p className="kicker text-moss-600">{steps[active].step}</p>
          <p className="mt-2 text-[.95rem] leading-relaxed text-ink-soft">{steps[active].body}</p>
        </motion.div>
      )}
    </div>
  )
}
