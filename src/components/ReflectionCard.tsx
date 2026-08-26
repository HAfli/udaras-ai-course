import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'

export interface ReflectionPrompt { id: string; prompt: string; ga?: string; needsValidation?: boolean }

export function ReflectionCard({ prompts, columns = 1 }: { prompts: ReflectionPrompt[]; columns?: 1 | 2 }) {
  const [v, setV] = useState<Record<string, string>>({})
  const reduce = useReducedMotion()
  const done = prompts.filter(p => (v[p.id] ?? '').trim().length > 2).length

  return (
    <div>
      <div className={`grid gap-4 ${columns === 2 ? 'sm:grid-cols-2' : ''}`}>
        {prompts.map((p, i) => (
          <motion.label
            key={p.id}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="card block p-5"
          >
            <span className="block font-display text-lg leading-snug">{p.prompt}</span>
            {p.ga && (
              <span
                lang="ga"
                className={`mt-1 block text-sm text-moss-600 ${p.needsValidation ? 'gaeilge decoration-dotted decoration-lichen underline underline-offset-4 decoration-2' : 'gaeilge'}`}
                title={p.needsValidation ? 'Irish awaiting linguistic validation' : undefined}
              >
                {p.ga}
              </span>
            )}
            <textarea
              rows={3}
              value={v[p.id] ?? ''}
              onChange={e => setV(x => ({ ...x, [p.id]: e.target.value }))}
              className="mt-3 w-full resize-none rounded-xl border border-ink/12 bg-paper-deep/40 px-3.5 py-2.5 text-sm leading-relaxed focus:border-moss-400 focus:bg-paper-card"
              placeholder="…"
            />
          </motion.label>
        ))}
      </div>
      <p className="mt-4 text-center text-sm text-ink-mute">
        {done} of {prompts.length} answered · nothing here is saved or sent anywhere
      </p>
    </div>
  )
}
