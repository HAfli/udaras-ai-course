import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { FACILITATOR } from '../data/facilitator'
import { FacilitatorPhoto } from './FacilitatorPhoto'
import { Reveal } from './ui/Reveal'

export function MeetFacilitator() {
  const reduce = useReducedMotion()

  return (
    <section id="meet" aria-labelledby="meet-h" className="scroll-mt-20 border-y border-ink/10 bg-paper-card">
      <div className="wrap grid gap-10 py-16 sm:py-20 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-14">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-[20rem] lg:mx-0"
        >
          <div className="aspect-[4/5] w-full">
            <FacilitatorPhoto />
          </div>
        </motion.div>

        <div>
          <Reveal>
            <p className="eyebrow">Course facilitator</p>
            <h2 id="meet-h" className="mt-3 text-3xl font-semibold leading-[1.12] sm:text-[2.6rem]">
              Meet {FACILITATOR.name}
            </h2>
            <p className="mt-3 font-display text-lg text-moss-600 sm:text-xl">{FACILITATOR.role}</p>
          </Reveal>

          <div className="mt-7 max-w-2xl space-y-4">
            {FACILITATOR.bio.map((para, i) => (
              <motion.p
                key={i}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="text-[1.02rem] leading-relaxed text-ink-soft"
              >
                {para}
              </motion.p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={FACILITATOR.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {FACILITATOR.websiteLabel}
              <ArrowUpRight className="h-4 w-4" aria-hidden />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a href="#/research" className="btn-ghost">
              His research in this course
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
