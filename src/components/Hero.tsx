import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { CONTRACT } from '../data/programme'
import { Bi } from './ui/Bi'

const FACTS = [
  { n: '04', label: 'Structured sessions' },
  { n: '6–8', label: 'Weeks, start to finish' },
  { n: '1', label: 'Language leading throughout — Gaeilge' },
]

/** The campaign launch moment: one full-bleed colour field, one giant
 *  bilingual statement, one action — carried by type, colour and real
 *  programme numbers rather than a photograph of anyone. */
export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-atlantic text-paper">
      <div className="wrap pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-24">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[.72rem] font-semibold uppercase tracking-[.16em] text-paper/70">
            Munster Technological University / Údarás na Gaeltachta
          </p>

          <h1 className="display-huge mt-6 max-w-[20ch]">
            <Bi
              v={{ en: CONTRACT.title, ga: CONTRACT.titleGa, needsValidation: CONTRACT.titleGaNeedsValidation }}
            />
          </h1>

          <p className="mt-8 max-w-md text-lg leading-snug text-paper/85">
            AI literacy for real Gaeltacht workplaces — understand it, question it, use it safely.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#/session/s1" className="btn-cta">
              Tosaigh leis an Seisiún 1
              <ArrowRight className="h-5 w-5" aria-hidden />
            </a>
            <span className="text-sm text-paper/90">Start Session 1</span>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid gap-8 border-t border-paper/25 pt-10 sm:mt-20 sm:grid-cols-3 sm:gap-10 sm:pt-12"
        >
          {FACTS.map(f => (
            <div key={f.label}>
              <p className="fig-num text-5xl text-gold sm:text-6xl">{f.n}</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-paper/90">{f.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
