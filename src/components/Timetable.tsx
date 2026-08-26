import { motion, useReducedMotion } from 'framer-motion'
import { Coffee, Lightbulb, MessagesSquare, PenLine, FlaskConical } from 'lucide-react'
import { useState } from 'react'
import type { TimetableSlot } from '../data/types'
import { Bi } from './ui/Bi'

const KIND = {
  teach:    { Icon: Lightbulb,      label: 'Teaching',  cls: 'bg-moss-100 text-moss-700' },
  activity: { Icon: MessagesSquare, label: 'Activity',  cls: 'bg-lichen-soft text-lichen-deep' },
  lab:      { Icon: FlaskConical,   label: 'Hands-on',  cls: 'bg-heather-soft text-heather' },
  reflect:  { Icon: PenLine,        label: 'Reflection',cls: 'bg-paper-deep text-ink-soft' },
  break:    { Icon: Coffee,         label: 'Break',     cls: 'bg-transparent text-ink-faint' },
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
              className={`flex w-full items-start gap-4 rounded-xl px-2 py-3 text-left transition-colors ${
                s.detail ? 'hover:bg-moss-50/70' : 'cursor-default'
              } ${isBreak ? 'opacity-65' : ''}`}
            >
              <span className="w-[4.3rem] shrink-0 pt-0.5 text-right font-mono text-[.72rem] font-medium text-ink-mute">
                {s.time}
              </span>
              <span aria-hidden className={`relative z-10 grid h-8 w-8 shrink-0 place-items-center rounded-lg ${k.cls}`}>
                <k.Icon className="h-[15px] w-[15px]" />
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
