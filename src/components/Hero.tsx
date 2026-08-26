import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { CONTRACT } from '../data/programme'
import { Contours } from './Contours'
import { GaLine } from './ui/Bi'
import { FACILITATOR } from '../data/facilitator'

const SEQUENCE = [
  { en: 'UNDERSTAND', ga: 'TUIG' },
  { en: 'QUESTION', ga: 'CEISTIGH' },
  { en: 'USE', ga: 'ÚSÁID' },
  { en: 'CHECK', ga: 'SEICEÁIL' },
  { en: 'CREATE', ga: 'CRUTHAIGH' },
]

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="contour relative overflow-hidden">
      <Contours className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px] w-full text-moss-700" />

      <div className="wrap relative pb-20 pt-16 sm:pb-28 sm:pt-24">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[.7rem] font-semibold uppercase tracking-[.16em]"
        >
          <span className="rounded-full bg-moss-700 px-3 py-1.5 text-paper">Munster Technological University</span>
          <span className="text-ink-faint" aria-hidden>×</span>
          <span className="rounded-full border border-ink/15 px-3 py-1.5 text-ink-soft">Údarás na Gaeltachta</span>
        </motion.div>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-[19ch] text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.02em] sm:text-6xl lg:text-[4.4rem]"
        >
          Building AI Confidence in the Gaeltacht Workplace
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 font-display text-xl text-moss-600 sm:text-2xl"
          lang="ga"
        >
          <GaLine ga={CONTRACT.titleGa} needsValidation={CONTRACT.titleGaNeedsValidation} />
        </motion.p>

        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="mt-6 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm font-medium text-ink-soft"
        >
          <span>AI Literacy</span><span aria-hidden className="text-lichen">•</span>
          <span>AI Safety</span><span aria-hidden className="text-lichen">•</span>
          <span>Business</span><span aria-hidden className="text-lichen">•</span>
          <span lang="ga">Gaeilge</span>
        </motion.p>

        {/* Opening statement */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 max-w-3xl border-l-2 border-moss-400 pl-6 sm:pl-8"
        >
          <p className="font-display text-2xl leading-[1.3] sm:text-[2rem]">
            AI literacy is not about becoming an AI expert. It is about becoming confident enough to
            <span className="text-moss-600"> make good decisions about AI.</span>
          </p>
        </motion.div>

        {/* Animated sequence */}
        <div className="mt-14">
          <ol className="flex flex-wrap items-center gap-x-3 gap-y-3">
            {SEQUENCE.map((w, i) => (
              <motion.li
                key={w.en}
                initial={reduce ? false : { opacity: 0, y: 10, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3"
              >
                <span className="group relative">
                  <span className="block text-[.95rem] font-bold uppercase tracking-[.14em] text-ink sm:text-lg">
                    {w.en}
                  </span>
                  <span className="block text-[.7rem] font-semibold uppercase tracking-[.14em] text-moss-500" lang="ga">
                    {w.ga}
                  </span>
                </span>
                {i < SEQUENCE.length - 1 && (
                  <ArrowRight className="h-4 w-4 shrink-0 text-lichen" aria-hidden />
                )}
              </motion.li>
            ))}
          </ol>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.7 }}
          className="mt-12 rounded-xl2 border border-moss-200 bg-moss-50/70 px-6 py-5 sm:inline-block"
        >
          <p className="font-display text-xl font-semibold text-moss-800 sm:text-2xl" lang="ga">
            AI don Ghaeilge — ní AI in ionad na Gaeilge.
          </p>
          <p className="mt-1 text-sm text-moss-600">AI for Irish — not AI instead of Irish.</p>
        </motion.div>

        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-soft"
        >
          <span className="kicker">Facilitated by</span>
          <a href="#meet" className="font-semibold text-moss-700 hover:underline">
            {FACILITATOR.name}
          </a>
          <span className="text-ink-mute">· {FACILITATOR.institution}</span>
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.9 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a href="#journey" className="btn-primary">
            Explore the programme
            <ArrowDown className="h-4 w-4" aria-hidden />
          </a>
          <a href="#/session/s1" className="btn-ghost">
            Go straight to Session 1
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
