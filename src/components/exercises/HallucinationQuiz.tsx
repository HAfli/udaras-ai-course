import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { CheckCircle2, AlertTriangle, XCircle } from 'lucide-react'
import { HALLUCINATION_QUIZ } from '../../data/exerciseContent'

const OPTIONS = [
  { id: 'correct', label: 'Correct', Icon: CheckCircle2, cls: 'text-risk-green border-risk-green/40 bg-moss-50' },
  { id: 'partly', label: 'Partly correct', Icon: AlertTriangle, cls: 'text-risk-amber border-risk-amber/40 bg-lichen-soft/40' },
  { id: 'wrong', label: 'Confidently wrong', Icon: XCircle, cls: 'text-risk-red border-risk-red/40 bg-red-50' },
] as const

export function HallucinationQuiz() {
  const [picked, setPicked] = useState<Record<string, string>>({})

  return (
    <div className="space-y-4">
      <div className="prose-note"><p>Read each answer. Decide before you reveal — the guess is the exercise.</p></div>
      {HALLUCINATION_QUIZ.map((q, i) => {
        const choice = picked[q.id]
        const right = choice === q.verdict
        return (
          <div key={q.id} className="card p-5">
            <p className="kicker">Answer {i + 1}</p>
            <p className="mt-2 text-sm font-medium text-ink">{q.prompt}</p>
            <blockquote className="mt-3 rounded-lg border-l-2 border-ink/15 bg-paper-deep/50 px-4 py-3 text-sm leading-relaxed text-ink-soft">
              {q.answer}
            </blockquote>

            <div className="mt-4 flex flex-wrap gap-2">
              {OPTIONS.map(o => {
                const on = choice === o.id
                return (
                  <button
                    key={o.id}
                    onClick={() => setPicked(p => ({ ...p, [q.id]: o.id }))}
                    aria-pressed={on}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[.78rem] font-semibold transition-all ${
                      on ? o.cls : 'border-ink/12 text-ink-mute hover:border-ink/30 hover:text-ink'
                    }`}
                  >
                    <o.Icon className="h-3.5 w-3.5" aria-hidden />
                    {o.label}
                  </button>
                )
              })}
            </div>

            <AnimatePresence>
              {choice && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className={`mt-4 rounded-lg border px-4 py-3 ${right ? 'border-moss-200 bg-moss-50' : 'border-lichen/30 bg-lichen-soft/30'}`}>
                    <p className="text-[.72rem] font-bold uppercase tracking-wider text-ink-mute">
                      {right ? 'Yes — and here is why it matters' : `Actually: ${OPTIONS.find(o => o.id === q.verdict)?.label.toLowerCase()}`}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{q.explain}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
      <p className="rounded-xl2 bg-moss-700 px-5 py-4 text-center font-display text-lg font-semibold text-paper">
        Fluent ≠ factual.
      </p>
    </div>
  )
}
