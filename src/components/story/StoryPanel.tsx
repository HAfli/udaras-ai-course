import { OPENING_SCENE, CLOSING_SCENE, STORY_ACTS, STORY_CHARACTER } from '../../data/story1'
import { session1 } from '../../data/session1'
import { MULTIMEDIA_RESOURCES, GAA_CASE_RESOURCES, resourcesFor } from '../../data/multimedia'
import { MultimediaResourceCard } from '../MultimediaResourceCard'
import { PromptModelOutput } from '../diagrams/PromptModelOutput'
import { IrishChain } from '../diagrams/IrishChain'
import { AoifeDecisionCard } from './AoifeDecisionCard'
import { Reveal } from '../ui/Reveal'
import aoifeMorning from '../../assets/aoife-morning.jpg'
import aoifeDusk from '../../assets/aoife-dusk.jpg'
import gaaTweet from '../../assets/gaa-tweet.png'
import gaaCrest from '../../assets/gaa-crest.png'

const ACT_COLOUR = ['border-atlantic', 'border-emerald', 'border-gold', 'border-coral', 'border-atlantic', 'border-emerald']

export function StoryPanel() {
  const gaa = GAA_CASE_RESOURCES

  return (
    <div className="-mt-8 space-y-20">
      {/* Opening scene — a full-bleed photograph, then a bold colour-field
          caption band, the way a campaign film opens on its subject. */}
      <section>
        <div className="bleed">
          <img
            src={aoifeMorning}
            alt="Aoife at her laptop, early on Monday morning, with the Gaeltacht coast through the window behind her."
            className="aspect-[16/8] w-full object-cover"
            width={450}
            height={350}
          />
        </div>
        <div className="bleed bg-atlantic text-paper">
          <div className="wrap py-10 sm:py-14">
            <p className="text-[.72rem] font-semibold uppercase tracking-[.16em] text-paper/65">
              {OPENING_SCENE.time} · {OPENING_SCENE.label}
            </p>
            <p className="mt-3 font-display text-3xl font-semibold leading-snug sm:text-5xl">{OPENING_SCENE.line}</p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium uppercase tracking-wide text-paper/80">
              {OPENING_SCENE.tasks.map(t => <span key={t}>{t}</span>)}
            </div>
            <div className="mt-6 space-y-1.5 border-t border-paper/25 pt-6">
              {OPENING_SCENE.questions.map(q => (
                <p key={q} className="font-display text-xl sm:text-2xl">{q}</p>
              ))}
            </div>
            <p className="mt-5 text-sm text-paper/70">{STORY_CHARACTER.name} — {STORY_CHARACTER.role}</p>
          </div>
        </div>
      </section>

      {/* The six acts — major visual chapters, not cards */}
      <section aria-labelledby="acts-h" className="wrap">
        <h2 id="acts-h" className="eyebrow">The six acts of today</h2>
        <ol className="mt-8 divide-y divide-ink/15">
          {STORY_ACTS.map((a, i) => (
            <li key={a.id} className={`grid gap-4 border-t-4 py-10 sm:grid-cols-[6rem_1fr] sm:gap-8 ${ACT_COLOUR[i]}`}>
              <span aria-hidden className="fig-num text-5xl sm:text-7xl">
                {String(a.act).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold uppercase leading-snug sm:text-3xl">{a.title}</h3>
                <p className="mt-2 font-display text-lg italic text-ink-soft">{a.question}</p>
                <p className="mt-3 max-w-2xl text-[.98rem] leading-relaxed text-ink-soft">{a.beat}</p>

                {a.id === 'S1-A4' && (
                  <div className="mt-10 max-w-2xl border-t border-ink/15 pt-8">
                    <p className="eyebrow">Real case · May 2024</p>
                    <p className="mt-3 font-display text-[1.9rem] font-semibold leading-[1.1] sm:text-[2.6rem]">
                      When AI looks culturally familiar, but gets the culture wrong.
                    </p>
                    <figure className="mt-8">
                      <img src={gaaTweet} alt={gaa[0].title} className="w-full max-w-lg" />
                      <figcaption className="mt-2 max-w-lg text-[.78rem] leading-relaxed text-ink-faint">
                        {gaa[0].description} — {gaa[0].source}
                      </figcaption>
                    </figure>
                    <figure className="mt-6 flex items-start gap-5">
                      <img src={gaaCrest} alt={gaa[1].title} className="w-32 shrink-0" />
                      <figcaption className="text-[.85rem] leading-relaxed text-ink-soft">
                        {gaa[1].description}
                      </figcaption>
                    </figure>
                  </div>
                )}

                {(a.exerciseIds?.length ?? 0) > 0 && (
                  <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[.85rem]">
                    {a.exerciseIds!.map(id => {
                      const ex = session1.exercises.find(e => e.id === id)
                      return (
                        <a key={id} href={`#/session/s1/exercises/${id}`} className="font-semibold text-atlantic hover:underline">
                          {ex ? `${ex.number} →` : `${id.toUpperCase()} →`}
                        </a>
                      )
                    })}
                  </p>
                )}
                {a.slideIds.length > 0 && (
                  <p className="mt-1.5 text-[.8rem] text-ink-faint">
                    Slide plan tab, slides {a.slideIds[0].replace('S1-', '')}–{a.slideIds[a.slideIds.length - 1].replace('S1-', '')}.
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="diagrams-h" className="wrap grid gap-10 sm:grid-cols-2">
        <div>
          <h2 id="diagrams-h" className="eyebrow mb-4">How a language model actually answers</h2>
          <PromptModelOutput />
        </div>
        <div>
          <h2 className="eyebrow mb-4">Why Irish matters</h2>
          <IrishChain />
        </div>
      </section>

      <section aria-labelledby="decide-h" className="wrap">
        <h2 id="decide-h" className="eyebrow mb-6">Now you decide</h2>
        <Reveal><AoifeDecisionCard /></Reveal>
      </section>

      <section aria-labelledby="video-h" className="wrap">
        <h2 id="video-h" className="eyebrow mb-3">Video and multimedia</h2>
        <p className="max-w-2xl text-sm text-ink-mute">
          Live demonstrations do most of the work in Session 1. These are optional further-viewing links —
          none is embedded or auto-played, and each has a fallback that needs no internet connection.
        </p>
        <div className="mt-5 divide-y divide-ink/15 border-t border-ink/15">
          {MULTIMEDIA_RESOURCES.map(r => <MultimediaResourceCard key={r.id} r={r} />)}
        </div>
      </section>

      {/* Closing scene — the day's light has changed */}
      <section>
        <div className="bleed">
          <img
            src={aoifeDusk}
            alt="Aoife, from behind, looking out at the sea at sunset — the same working day, later."
            className="aspect-[16/8] w-full object-cover"
            width={240}
            height={160}
          />
        </div>
        <div className="bleed bg-ink text-paper">
          <div className="wrap py-10 sm:py-14">
            <p className="text-[.72rem] font-semibold uppercase tracking-[.16em] text-gold">
              {CLOSING_SCENE.time} · {CLOSING_SCENE.label}
            </p>
            <p className="mt-3 font-display text-2xl font-semibold leading-snug sm:text-4xl">{CLOSING_SCENE.line}</p>
            <div className="mt-5 space-y-1.5 border-t border-paper/20 pt-5">
              {CLOSING_SCENE.questions.map(q => (
                <p key={q} className="font-display text-lg sm:text-xl">{q}</p>
              ))}
            </div>
          </div>
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
