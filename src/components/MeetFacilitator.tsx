import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { FACILITATOR } from '../data/facilitator'
import { FacilitatorPhoto } from './FacilitatorPhoto'
import { Reveal } from './ui/Reveal'

/** An academic-publication profile: a full portrait running the height
 *  of the block, uncontained, with the biography set as running text
 *  alongside it rather than inside a "bio card." */
export function MeetFacilitator() {
  const reduce = useReducedMotion()

  return (
    <section id="meet" aria-labelledby="meet-h" className="scroll-mt-20 border-y border-ink/15">
      <div className="wrap grid gap-10 py-16 sm:py-20 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-16">
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto w-full max-w-[16rem] lg:mx-0 lg:max-w-none"
        >
          <div className="aspect-[4/5] w-full">
            <FacilitatorPhoto />
          </div>
        </motion.div>

        <div>
          <Reveal>
            <p className="eyebrow">Course facilitator</p>
            <h2 id="meet-h" className="mt-3 text-4xl font-semibold leading-[1.05] sm:text-[3.4rem]">
              {FACILITATOR.name}
            </h2>
            <p className="mt-2 font-display text-lg italic text-ink-soft sm:text-xl">{FACILITATOR.role}</p>
          </Reveal>

          <div className="col-read mt-8 ml-0 max-w-2xl space-y-4 border-t border-ink/15 pt-6">
            {FACILITATOR.bio.map((para, i) => (
              <p key={i} className="text-[1.02rem] leading-relaxed text-ink-soft">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={FACILITATOR.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-atlantic hover:underline"
            >
              {FACILITATOR.websiteLabel}
              <ArrowUpRight className="h-4 w-4" aria-hidden />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a href="#/research" className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-atlantic">
              His research in this course
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
