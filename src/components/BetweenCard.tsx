import { motion, useReducedMotion } from 'framer-motion'
import { CheckCircle2, Circle, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import type { BetweenWork } from '../data/types'
import { Bi } from './ui/Bi'
import { ExperimentLog } from './exercises/ExperimentLog'

export function BetweenCard({ w }: { w: BetweenWork }) {
  const [done, setDone] = useState(0)
  const reduce = useReducedMotion()
  const target = w.target ?? 0

  return (
    <div className="card overflow-hidden">
      <div className="border-b border-ink/8 bg-lichen-soft/25 p-6 sm:p-8">
        <p className="eyebrow text-lichen-deep">Between sessions</p>
        <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl"><Bi v={w.title} /></h2>
        <p className="mt-3 max-w-2xl text-[1.02rem] leading-relaxed text-ink-soft">{w.brief}</p>
      </div>

      <div className="p-6 sm:p-8">
        {target > 0 && (
          <div className="mb-7">
            <div className="flex items-center justify-between">
              <p className="kicker">Progress</p>
              <p className="font-mono text-sm font-bold text-moss-700">{done} / {target}</p>
            </div>
            <div className="mt-3 flex gap-2">
              {Array.from({ length: target }, (_, i) => {
                const on = i < done
                return (
                  <button
                    key={i}
                    onClick={() => setDone(d => (i < d ? i : i + 1))}
                    aria-pressed={on}
                    aria-label={`Experiment ${i + 1}`}
                    className={`flex flex-1 items-center justify-center gap-2 rounded-xl border py-3 text-sm font-semibold transition-colors ${
                      on ? 'border-moss-600 bg-moss-700 text-paper' : 'border-ink/12 text-ink-mute hover:border-moss-300'
                    }`}
                  >
                    {on ? <CheckCircle2 className="h-4 w-4" aria-hidden /> : <Circle className="h-4 w-4" aria-hidden />}
                    {i + 1}
                  </button>
                )
              })}
            </div>
            <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-ink/8">
              <motion.div
                className="h-full rounded-full bg-moss-500"
                initial={reduce ? false : { width: 0 }}
                animate={{ width: `${(done / target) * 100}%` }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        )}

        {w.steps.length > 0 && (
          <>
            <p className="kicker">Record for each</p>
            <ol className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-2">
              {w.steps.map((s, i) => (
                <motion.li
                  key={s}
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  className="flex items-center gap-2"
                >
                  <span className="chip">{s}</span>
                  {i < w.steps.length - 1 && <ArrowRight className="h-3 w-3 text-ink-faint" aria-hidden />}
                </motion.li>
              ))}
            </ol>
            <div className="mt-6"><ExperimentLog count={target || 1} /></div>
          </>
        )}

        {w.flow && (
          <>
            <p className="kicker">Worked example — a weekly newsletter</p>
            <ol className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-2">
              {w.flow.map((s, i) => (
                <motion.li
                  key={s}
                  initial={reduce ? false : { opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.09 }}
                  className="flex items-center gap-2"
                >
                  <span className={`rounded-lg border px-3 py-2 text-sm font-medium ${
                    s.toLowerCase().includes('human') || s.toLowerCase().includes('approval')
                      ? 'border-moss-400 bg-moss-50 text-moss-800'
                      : 'border-ink/12 bg-paper-card text-ink-soft'
                  }`}>
                    {s}
                  </span>
                  {i < w.flow!.length - 1 && <ArrowRight className="h-3.5 w-3.5 text-ink-faint" aria-hidden />}
                </motion.li>
              ))}
            </ol>
            <p className="mt-3 text-sm text-ink-mute">
              The two green steps are the ones that keep it yours. Everything else is machinery.
            </p>
          </>
        )}

        {w.fields && (
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {w.fields.map(f => (
              <label key={f} className="card block p-4">
                <span className="kicker text-moss-600">{f}</span>
                <input className="mt-1.5 w-full border-0 border-b border-ink/12 bg-transparent px-0 py-1.5 text-sm focus:border-moss-500 focus:outline-none focus:ring-0" />
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
