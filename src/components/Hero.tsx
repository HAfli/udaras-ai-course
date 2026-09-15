import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { CONTRACT } from '../data/programme'
import { Bi } from './ui/Bi'
import { FACILITATOR } from '../data/facilitator'
import { useLang } from '../i18n/LangContext'
import aoifeMorning from '../assets/aoife-morning.jpg'

const SEQUENCE = [
  { en: 'UNDERSTAND', ga: 'TUIG' },
  { en: 'QUESTION', ga: 'CEISTIGH' },
  { en: 'USE', ga: 'ÚSÁID' },
  { en: 'CHECK', ga: 'SEICEÁIL' },
  { en: 'CREATE', ga: 'CRUTHAIGH' },
]

export function Hero() {
  const reduce = useReducedMotion()
  const { t } = useLang()

  return (
    <section className="relative overflow-hidden border-b border-ink/10 bg-paper-deep/40">
      <div className="wrap grid gap-10 pb-16 pt-14 sm:pb-20 sm:pt-18 lg:grid-cols-[1fr_22rem] lg:items-end lg:gap-14">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1 text-[.72rem] font-semibold uppercase tracking-[.14em] text-ink-mute">
            <span>Munster Technological University</span>
            <span aria-hidden className="text-ink-faint">/</span>
            <span>Údarás na Gaeltachta</span>
          </p>

          <h1 className="mt-6 max-w-2xl text-[2.6rem] leading-[1.04] tracking-[-0.015em] sm:text-6xl lg:text-[4rem]">
            <Bi
              v={{ en: CONTRACT.title, ga: CONTRACT.titleGa, needsValidation: CONTRACT.titleGaNeedsValidation }}
              className="font-semibold"
            />
          </h1>

          <p className="mt-7 text-sm font-medium text-ink-mute">
            AI Literacy, AI Safety, Business, <span lang="ga">Gaeilge</span>
          </p>

          <div className="mt-10 max-w-xl border-l-2 border-moss-400 pl-6 sm:pl-8">
            <p className="pull-quote">
              AI literacy is not about becoming an AI expert. It is about becoming confident enough to
              <span className="text-moss-600"> make good decisions about AI.</span>
            </p>
          </div>

          <ol className="mt-12 flex flex-wrap items-start gap-x-4 gap-y-4">
            {SEQUENCE.map((w, i) => (
              <li key={w.en} className="flex items-center gap-3">
                <span>
                  <span className="block text-[.95rem] font-bold uppercase tracking-[.12em] text-ink" lang="ga">
                    {w.ga}
                  </span>
                  <span className="mt-0.5 block text-[.68rem] font-semibold uppercase tracking-[.12em] text-ink-faint">
                    {w.en}
                  </span>
                </span>
                {i < SEQUENCE.length - 1 && (
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-ink-faint" aria-hidden />
                )}
              </li>
            ))}
          </ol>

          <div className="mt-10 max-w-xl border-t border-ink/12 pt-5">
            <p className="font-display text-xl font-semibold text-ink sm:text-2xl" lang="ga">
              AI don Ghaeilge — ní AI in ionad na Gaeilge.
            </p>
            <p className="mt-1.5 text-[.78em] text-ink-mute">AI for Irish — not AI instead of Irish.</p>
          </div>

          <p className="mt-9 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm text-ink-soft">
            <span className="kicker">Facilitated by</span>
            <a href="#meet" className="font-semibold text-moss-700 hover:underline">
              {FACILITATOR.name}
            </a>
            <span className="text-ink-mute">— {FACILITATOR.institution}</span>
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#journey" className="btn-primary">
              {t('explore')}
              <ArrowDown className="h-4 w-4" aria-hidden />
            </a>
            <a href="#/session/s1" className="btn-ghost">
              Go straight to Session 1
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </motion.div>

        <motion.figure
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-[26rem] lg:mx-0 lg:max-w-none"
        >
          <img
            src={aoifeMorning}
            alt="A woman working at a laptop in a Gaeltacht kitchen-office, looking out over the coast — the course's recurring workplace scene."
            className="aspect-[6/5] w-full object-cover lg:aspect-[4/5]"
            width={450}
            height={350}
          />
          <figcaption className="mt-3 text-[.75rem] leading-snug text-ink-faint">
            08:47, Monday morning. This is where the course's Session&nbsp;1 story starts.
          </figcaption>
        </motion.figure>
      </div>
    </section>
  )
}
