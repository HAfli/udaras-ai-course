import { motion, useReducedMotion } from 'framer-motion'
import { OPENING_SCENE, CLOSING_SCENE, STORY_ACTS, STORY_CHARACTER } from '../../data/story1'
import { session1 } from '../../data/session1'
import { MULTIMEDIA_RESOURCES, resourcesFor } from '../../data/multimedia'
import { MultimediaResourceCard } from '../MultimediaResourceCard'
import { PromptModelOutput } from '../diagrams/PromptModelOutput'
import { IrishChain } from '../diagrams/IrishChain'
import { AoifeDecisionCard } from './AoifeDecisionCard'

export function StoryPanel() {
  const reduce = useReducedMotion()

  return (
    <div className="space-y-10">
      <section className="rounded-xl2 border border-ink/10 bg-paper-deep/40 p-6 sm:p-8">
        <p className="kicker text-moss-600">{OPENING_SCENE.time} · {OPENING_SCENE.label}</p>
        <p className="mt-2 font-display text-2xl font-semibold leading-snug sm:text-3xl">{OPENING_SCENE.line}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {OPENING_SCENE.tasks.map(t => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
        <div className="mt-4 space-y-1.5">
          {OPENING_SCENE.questions.map(q => (
            <p key={q} className="font-display text-lg text-ink">{q}</p>
          ))}
        </div>
        <p className="mt-4 text-sm text-ink-mute">{STORY_CHARACTER.name} — {STORY_CHARACTER.role}</p>
      </section>

      <section aria-labelledby="acts-h">
        <h2 id="acts-h" className="eyebrow">The six acts of today</h2>
        <div className="mt-4 space-y-3">
          {STORY_ACTS.map((a, i) => (
            <motion.div
              key={a.id}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.3) }}
              className="card p-5"
            >
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-[.7rem] font-bold text-moss-600">ACT {a.act} · {a.id}</span>
                <h3 className="font-display text-lg font-semibold">{a.title}</h3>
              </div>
              <p className="mt-2 font-display text-base leading-snug text-moss-700">{a.question}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{a.beat}</p>
              {(a.exerciseIds?.length ?? 0) > 0 && (
                <p className="mt-2 flex flex-wrap gap-x-2 gap-y-1 text-[.78rem]">
                  {a.exerciseIds!.map(id => {
                    const ex = session1.exercises.find(e => e.id === id)
                    return (
                      <a key={id} href={`#/session/s1/exercises/${id}`} className="font-semibold text-moss-700 hover:underline">
                        {ex ? `${ex.number} →` : `${id.toUpperCase()} →`}
                      </a>
                    )
                  })}
                </p>
              )}
              {a.slideIds.length > 0 && (
                <p className="mt-1 text-[.78rem] text-ink-faint">
                  See the Slide plan tab, slides {a.slideIds[0].replace('S1-', '')}–{a.slideIds[a.slideIds.length - 1].replace('S1-', '')}.
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <section aria-labelledby="diagrams-h" className="grid gap-5 sm:grid-cols-2">
        <div>
          <h2 id="diagrams-h" className="eyebrow mb-3">How a language model actually answers</h2>
          <PromptModelOutput />
        </div>
        <div>
          <h2 className="eyebrow mb-3">Why Irish matters</h2>
          <IrishChain />
        </div>
      </section>

      <section aria-labelledby="decide-h">
        <h2 id="decide-h" className="eyebrow mb-3">Now you decide</h2>
        <AoifeDecisionCard />
      </section>

      <section aria-labelledby="video-h">
        <h2 id="video-h" className="eyebrow mb-3">Video and multimedia</h2>
        <p className="text-sm text-ink-mute">
          Live demonstrations do most of the work in Session 1. These are optional further-viewing links —
          none is embedded or auto-played, and each has a fallback that needs no internet connection.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {MULTIMEDIA_RESOURCES.map(r => <MultimediaResourceCard key={r.id} r={r} />)}
        </div>
      </section>

      <section className="rounded-xl2 border border-ink/10 bg-paper-deep/40 p-6 sm:p-8">
        <p className="kicker text-moss-600">{CLOSING_SCENE.time} · {CLOSING_SCENE.label}</p>
        <p className="mt-2 font-display text-xl font-semibold leading-snug">{CLOSING_SCENE.line}</p>
        <div className="mt-3 space-y-1.5">
          {CLOSING_SCENE.questions.map(q => (
            <p key={q} className="font-display text-lg text-ink">{q}</p>
          ))}
        </div>
      </section>
    </div>
  )
}

/** Used by the course-map generation and by tests — keeps the "which
 *  video belongs to which act" lookup in one place. */
export function multimediaForAct(actId: string) {
  return resourcesFor(actId)
}
