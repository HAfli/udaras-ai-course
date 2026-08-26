import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { RISK_ITEMS } from '../../data/exerciseContent'
import { RiskIndicator } from '../RiskIndicator'

const LEVELS = [
  { id: 'green', label: 'Low risk', symbol: '●' },
  { id: 'amber', label: 'Check first', symbol: '◐' },
  { id: 'red', label: 'Don’t do it', symbol: '■' },
] as const

export function TrafficLight() {
  const [choice, setChoice] = useState<Record<string, string>>({})

  return (
    <div>
      <div className="prose-note"><p>
        Before anything is typed into a tool: would you put this in? Shape and label carry the meaning as well as
        colour, so the exercise works for everyone in the room.
      </p></div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {RISK_ITEMS.map(it => {
          const c = choice[it.id]
          const right = c === it.level
          return (
            <div key={it.id} className="card flex flex-col p-4">
              <p className="text-sm font-semibold">{it.label}</p>
              <div className="mt-3 flex gap-1.5">
                {LEVELS.map(l => {
                  const on = c === l.id
                  return (
                    <button
                      key={l.id}
                      onClick={() => setChoice(p => ({ ...p, [it.id]: l.id }))}
                      aria-pressed={on}
                      aria-label={l.label}
                      className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg border px-2 py-2 text-[.7rem] font-semibold transition-colors ${
                        on
                          ? l.id === 'green' ? 'border-risk-green bg-moss-50 text-risk-green'
                            : l.id === 'amber' ? 'border-risk-amber bg-lichen-soft/50 text-risk-amber'
                            : 'border-risk-red bg-red-50 text-risk-red'
                          : 'border-ink/12 text-ink-mute hover:border-ink/30'
                      }`}
                    >
                      <span aria-hidden>{l.symbol}</span>
                      <span className="hidden sm:inline">{l.label}</span>
                    </button>
                  )
                })}
              </div>
              <AnimatePresence>
                {c && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.28 }} className="overflow-hidden"
                  >
                    <div className="mt-3 border-t border-ink/8 pt-3">
                      <RiskIndicator level={it.level} note={right ? undefined : 'Different from your answer'} />
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{it.why}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  )
}
