import { motion, useReducedMotion } from 'framer-motion'
import { Lock } from 'lucide-react'
import { useState } from 'react'
import { NEVER_AUTOMATE } from '../../data/exerciseContent'

export function NeverAutomate() {
  const [mine, setMine] = useState<string[]>(['', '', ''])
  const reduce = useReducedMotion()

  return (
    <div>
      <div className="prose-note"><p>
        Deciding what you will not automate is as much a strategy as deciding what you will. Start from these,
        then write your organisation’s own.
      </p></div>

      <ul className="mt-5 space-y-2.5">
        {NEVER_AUTOMATE.map((n, i) => (
          <motion.li
            key={n.label}
            initial={reduce ? false : { opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="card flex gap-4 p-4"
          >
            <span aria-hidden className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-red-50 text-risk-red">
              <Lock className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold">{n.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">{n.why}</p>
            </div>
          </motion.li>
        ))}
      </ul>

      <div className="card mt-4 p-5">
        <p className="eyebrow">In my organisation, we will never automate</p>
        <ol className="mt-3 space-y-2">
          {mine.map((v, i) => (
            <li key={i} className="flex items-center gap-3">
              <span aria-hidden className="w-4 text-right text-[.7rem] font-bold text-ink-faint">{i + 1}</span>
              <input
                value={v}
                aria-label={`Never automate — line ${i + 1}`}
                onChange={e => { const n = [...mine]; n[i] = e.target.value; setMine(n) }}
                className="w-full border-0 border-b border-ink/15 bg-transparent px-0 py-1.5 text-sm focus:border-risk-red focus:outline-none focus:ring-0"
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
