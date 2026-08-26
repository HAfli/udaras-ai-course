import { motion, useReducedMotion } from 'framer-motion'
import { Presentation } from 'lucide-react'
import type { SlideGroup } from '../data/types'
import { Disclosure } from './ui/Disclosure'
import { Bi } from './ui/Bi'

function Slide({ n, title, note, i }: { n: number; title: { ga?: string; en: string; needsValidation?: boolean }; note?: string; i: number }) {
  const reduce = useReducedMotion()
  return (
    <motion.li
      initial={reduce ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: Math.min(i * 0.035, 0.4) }}
      className="group flex gap-4 rounded-xl border border-ink/8 bg-paper-card p-3.5 transition-colors hover:border-moss-300"
    >
      <span
        aria-hidden
        className="grid h-11 w-14 shrink-0 place-items-center rounded-md border border-ink/10 bg-paper-deep/70 font-mono text-[.72rem] font-bold text-ink-mute transition-colors group-hover:border-moss-300 group-hover:bg-moss-50 group-hover:text-moss-700"
      >
        {String(n).padStart(2, '0')}
      </span>
      <span className="min-w-0 self-center">
        <span className="block text-sm font-medium leading-snug"><Bi v={title} /></span>
        {note && <span className="mt-1 block text-[.8rem] leading-relaxed text-ink-mute">{note}</span>}
      </span>
    </motion.li>
  )
}

export function SlideDeck({ groups }: { groups: SlideGroup[] }) {
  if (!groups.length) {
    return (
      <p className="card p-6 text-sm leading-relaxed text-ink-soft">
        No slide plan for this stage — it is a working session, not a taught one.
      </p>
    )
  }

  const total = groups.reduce((n, g) => n + g.slides.length, 0)

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <span className="chip"><Presentation className="h-3.5 w-3.5" aria-hidden /> {total} slides proposed</span>
        <span className="text-xs text-ink-mute">Proposed pedagogical detail — not part of the contracted structure.</span>
      </div>

      <div className="space-y-2.5">
        {groups.map((g, gi) => (
          <Disclosure
            key={g.id}
            tone="card"
            defaultOpen={gi === 0}
            meta={<span className="chip shrink-0">{g.slides.length}</span>}
            summary={
              <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-[.7rem] font-bold text-moss-600">{g.range}</span>
                <span className="font-display text-lg font-semibold"><Bi v={g.title} /></span>
              </span>
            }
          >
            <ol className="grid gap-2 sm:grid-cols-2">
              {g.slides.map((s, i) => <Slide key={s.n} n={s.n} title={s.title} note={s.note} i={i} />)}
            </ol>
            {g.callout && (
              <div className="mt-4 rounded-xl2 border border-moss-200 bg-moss-50/70 px-5 py-4">
                <p className="kicker text-moss-600">{g.callout.label}</p>
                <p className="mt-1.5 font-display text-lg leading-snug text-moss-800">{g.callout.body}</p>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  )
}
