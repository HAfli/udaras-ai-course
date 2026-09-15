import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import type { TimetableSlot } from '../data/types'
import { Bi } from './ui/Bi'

const KIND = {
  teach:    { label: 'Teaching' },
  activity: { label: 'Activity' },
  lab:      { label: 'Hands-on' },
  reflect:  { label: 'Reflection' },
  break:    { label: 'Break' },
} as const

export function Timetable({ slots }: { slots: TimetableSlot[] }) {
  const [open, setOpen] = useState<number | null>(null)
  const reduce = useReducedMotion()

  return (
    <ol className="relative">
      <span aria-hidden className="absolute bottom-4 left-[4.9rem] top-4 hidden w-px bg-ink/10 sm:block" />
      {slots.map((s, i) => {
        const k = KIND[s.kind]
        const isBreak = s.kind === 'break'
        const on = open === i
        return (
          <motion.li
            key={`${s.time}-${i}`}
            initial={reduce ? false : { opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.3) }}
            className="relative"
          >
            <button
              type="button"
              disabled={!s.detail}
              onClick={() => setOpen(on ? null : i)}
              aria-expanded={s.detail ? on : undefined}
              className={`flex w-full items-start gap-4 px-2 py-3 text-left transition-colors ${
                s.detail ? 'hover:bg-paper-card' : 'cursor-default'
              } ${isBreak ? 'opacity-65' : ''}`}
            >
              <span className="w-[4.3rem] shrink-0 pt-0.5 text-right font-mono text-[.72rem] font-medium text-ink-mute">
                {s.time}
              </span>
              <span className="min-w-0 flex-1 pt-0.5">
                <span className={`block text-[.95rem] font-semibold leading-snug ${isBreak ? 'text-ink-mute' : ''}`}>
                  <Bi v={s.title} />
                </span>
                <span className="mt-0.5 block text-[.68rem] font-semibold uppercase tracking-wider text-ink-faint">
                  {k.label}
                </span>
                {on && s.detail && (
                  <motion.span
                    initial={reduce ? false : { opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 block text-sm leading-relaxed text-ink-soft"
                  >
                    {s.detail}
                  </motion.span>
                )}
              </span>
            </button>
          </motion.li>
        )
      })}
    </ol>
  )
}
