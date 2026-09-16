import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { CONTRACT } from '../data/programme'
import { Bi } from './ui/Bi'
import aoifeMorning from '../assets/aoife-morning.jpg'

/** The campaign launch moment: one full-bleed colour field, one giant
 *  bilingual statement, one photograph, one action. Everything else the
 *  homepage needs to say happens in the sections below, at rest. */
export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-atlantic text-paper">
      <div className="wrap grid gap-10 pb-16 pt-12 lg:grid-cols-12 lg:items-center lg:gap-8 lg:pb-0 lg:pt-24">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 lg:py-20"
        >
          <p className="text-[.72rem] font-semibold uppercase tracking-[.16em] text-paper/65">
            Munster Technological University / Údarás na Gaeltachta
          </p>

          <h1 className="display-huge mt-6 max-w-[18ch]">
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
            <span className="text-sm text-paper/70">Start Session 1</span>
          </div>
        </motion.div>

        <motion.figure
          initial={reduce ? false : { opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 lg:h-full"
        >
          <img
            src={aoifeMorning}
            alt="A woman working at a laptop in a Gaeltacht kitchen-office, looking out over the coast — the course's recurring workplace scene."
            className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:h-full"
            width={450}
            height={350}
          />
        </motion.figure>
      </div>
    </section>
  )
}
