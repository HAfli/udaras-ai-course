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

/** The opening spread: a masthead line, one full-measure Irish title at
 *  genuine editorial scale, then an asymmetric two-column body where the
 *  photograph rises above the text baseline rather than sitting in a
 *  matched hero-image box beside it. */
export function Hero() {
  const reduce = useReducedMotion()
  const { t } = useLang()

  return (
    <section className="border-b border-ink/15">
      <div className="wrap pb-16 pt-14 sm:pb-24 sm:pt-16">
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[.72rem] font-semibold uppercase tracking-[.14em] text-ink-mute"
        >
          Munster Technological University / Údarás na Gaeltachta
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-[22ch] text-[2.65rem] font-semibold leading-[0.98] tracking-[-0.02em] sm:text-[4.4rem] lg:text-[5.4rem]"
        >
          <Bi
            v={{ en: CONTRACT.title, ga: CONTRACT.titleGa, needsValidation: CONTRACT.titleGaNeedsValidation }}
          />
        </motion.h1>

        <div className="mt-14 grid gap-x-12 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-ink-mute">
              AI Literacy, AI Safety, Business, <span lang="ga">Gaeilge</span>
            </p>

            <p className="pull-quote mt-8 border-t border-ink/15 pt-6">
              AI literacy is not about becoming an AI expert. It is about becoming
              <em className="not-italic text-atlantic"> confident enough to make good decisions about AI.</em>
            </p>

            <ol className="mt-10 flex flex-wrap items-start gap-x-5 gap-y-4">
              {SEQUENCE.map((w, i) => (
                <li key={w.en} className="flex items-center gap-3">
                  <span>
                    <span className="block text-[.92rem] font-bold uppercase tracking-[.1em] text-ink" lang="ga">
                      {w.ga}
                    </span>
                    <span className="mt-0.5 block text-[.66rem] font-semibold uppercase tracking-[.1em] text-ink-faint">
                      {w.en}
                    </span>
                  </span>
                  {i < SEQUENCE.length - 1 && (
                    <span aria-hidden className="text-ink-faint">·</span>
                  )}
                </li>
              ))}
            </ol>

            <div className="mt-10 border-t border-ink/15 pt-6">
              <p className="font-display text-xl font-semibold text-ink sm:text-2xl" lang="ga">
                AI don Ghaeilge — ní AI in ionad na Gaeilge.
              </p>
              <p className="mt-1.5 text-[.78em] text-ink-mute">AI for Irish — not AI instead of Irish.</p>
            </div>

            <p className="mt-8 text-sm text-ink-soft">
              <span className="kicker">Facilitated by</span>{' '}
              <a href="#meet" className="font-semibold text-atlantic hover:underline">
                {FACILITATOR.name}
              </a>{' '}
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
          </div>

          <motion.figure
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <img
              src={aoifeMorning}
              alt="A woman working at a laptop in a Gaeltacht kitchen-office, looking out over the coast — the course's recurring workplace scene."
              className="aspect-[4/3] w-full object-cover"
              width={450}
              height={350}
            />
            <figcaption className="mt-3 max-w-md text-[.75rem] leading-snug text-ink-faint">
              08:47, Monday morning. This is where the course's Session&nbsp;1 story starts.
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  )
}
