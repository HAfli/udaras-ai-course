import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { PLAN_SECTIONS } from '../../data/finalPlan'

/** "My Responsible AI Plan" — Session 4's take-away document.
 *  Everything typed here stays in memory in this browser. Nothing is stored,
 *  transmitted or persisted anywhere. */
export function Charter() {
  const [v, setV] = useState<Record<string, string>>({})
  const reduce = useReducedMotion()

  const totalFields = PLAN_SECTIONS.reduce((n, s) => n + (s.kind === 'lines' ? s.lines ?? 0 : 1), 0)
  const filled = Object.values(v).filter(x => x.trim()).length

  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <div className="prose-note max-w-xl">
          <p>
            The one document that leaves the building with each participant. Written in their words, not the
            facilitator’s — and deliberately short enough to be finished in the room.
          </p>
        </div>
        <span className="chip">{filled}/{totalFields} completed</span>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        {PLAN_SECTIONS.map((s, si) => (
          <motion.section
            key={s.id}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: Math.min(si * 0.06, 0.4) }}
            className={`card p-5 ${s.irish ? 'border-heather/40 bg-heather-soft/25' : ''} ${
              s.kind === 'lines' ? '' : 'lg:col-span-1'
            }`}
          >
            <h3 className="font-display text-lg font-semibold leading-snug">{s.title}</h3>
            <p className="mt-1 text-xs leading-relaxed text-ink-mute">{s.hint}</p>

            {s.kind === 'lines' ? (
              <ol className="mt-3 space-y-2">
                {Array.from({ length: s.lines ?? 3 }, (_, i) => {
                  const key = `${s.id}-${i}`
                  return (
                    <li key={key} className="flex items-center gap-3">
                      <span aria-hidden className="w-4 shrink-0 text-right text-[.7rem] font-bold text-ink-mute">
                        {i + 1}
                      </span>
                      <input
                        value={v[key] ?? ''}
                        onChange={e => setV(p => ({ ...p, [key]: e.target.value }))}
                        aria-label={`${s.title} — ${i + 1}`}
                        className="w-full border-0 border-b border-ink/15 bg-transparent px-0 py-1.5 text-sm focus:border-moss-500 focus:outline-none focus:ring-0"
                      />
                    </li>
                  )
                })}
              </ol>
            ) : (
              <textarea
                rows={3}
                value={v[s.id] ?? ''}
                onChange={e => setV(p => ({ ...p, [s.id]: e.target.value }))}
                aria-label={s.title}
                className="mt-3 w-full resize-none rounded-xl border border-ink/12 bg-paper-deep/40 px-3.5 py-2.5 text-sm leading-relaxed focus:border-moss-400 focus:bg-paper-card"
              />
            )}
          </motion.section>
        ))}
      </div>

      <p className="mt-5 text-center text-sm text-ink-mute">
        Nothing typed here is stored, sent or remembered. Write it down or photograph it before you close the page.
      </p>
    </div>
  )
}
