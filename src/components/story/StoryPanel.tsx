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

export function StoryPanel() {
  const gaa = GAA_CASE_RESOURCES

  return (
    <div className="space-y-16">
      {/* Opening scene — image and text as one composition, not a card */}
      <section className="grid gap-8 sm:grid-cols-[16rem_1fr] sm:items-center">
        <img
          src={aoifeMorning}
          alt="Aoife at her laptop, early on Monday morning, with the Gaeltacht coast through the window behind her."
          className="aspect-[6/5] w-full rounded-xl2 border border-ink/10 object-cover"
          width={450}
          height={350}
        />
        <div>
          <p className="kicker">{OPENING_SCENE.time} · {OPENING_SCENE.label}</p>
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
        </div>
      </section>

      {/* The six acts — a real sequence, so numbering earns its place */}
      <section aria-labelledby="acts-h">
        <h2 id="acts-h" className="eyebrow">The six acts of today</h2>
        <ol className="mt-6 divide-y divide-ink/10 border-t border-ink/10">
          {STORY_ACTS.map(a => (
            <li key={a.id} className="grid gap-3 py-7 sm:grid-cols-[3.5rem_1fr] sm:gap-6">
              <span aria-hidden className="font-display text-3xl font-semibold leading-none text-ink-faint sm:text-4xl">
                {String(a.act).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold leading-snug sm:text-2xl">{a.title}</h3>
                <p className="mt-1.5 font-display text-lg italic text-ink-soft">{a.question}</p>
                <p className="mt-2.5 max-w-2xl text-[.98rem] leading-relaxed text-ink-soft">{a.beat}</p>

                {a.id === 'S1-A4' && (
                  <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_10rem]">
                    <figure>
                      <img
                        src={gaaTweet}
                        alt={gaa[0].title}
                        className="w-full max-w-sm rounded-xl2 border border-ink/10"
                      />
                      <figcaption className="mt-2 max-w-sm text-[.78rem] leading-relaxed text-ink-faint">
                        {gaa[0].description} — {gaa[0].source}
                      </figcaption>
                    </figure>
                    <figure>
                      <img
                        src={gaaCrest}
                        alt={gaa[1].title}
                        className="w-full rounded-xl2 border border-ink/10"
                      />
                      <figcaption className="mt-2 text-[.78rem] leading-relaxed text-ink-faint">
                        {gaa[1].description}
                      </figcaption>
                    </figure>
                  </div>
                )}

                {(a.exerciseIds?.length ?? 0) > 0 && (
                  <p className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[.85rem]">
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
                  <p className="mt-1.5 text-[.8rem] text-ink-faint">
                    Slide plan tab, slides {a.slideIds[0].replace('S1-', '')}–{a.slideIds[a.slideIds.length - 1].replace('S1-', '')}.
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="diagrams-h" className="grid gap-8 sm:grid-cols-2">
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
        <h2 id="decide-h" className="eyebrow mb-6">Now you decide</h2>
        <Reveal><AoifeDecisionCard /></Reveal>
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

      {/* Closing scene — the day's light has changed */}
      <section className="grid gap-8 sm:grid-cols-[16rem_1fr] sm:items-center">
        <img
          src={aoifeDusk}
          alt="Aoife, from behind, looking out at the sea at sunset — the same working day, later."
          className="aspect-[6/5] w-full rounded-xl2 border border-ink/10 object-cover"
          width={240}
          height={160}
        />
        <div>
          <p className="kicker">{CLOSING_SCENE.time} · {CLOSING_SCENE.label}</p>
          <p className="mt-2 font-display text-xl font-semibold leading-snug sm:text-2xl">{CLOSING_SCENE.line}</p>
          <div className="mt-3 space-y-1.5">
            {CLOSING_SCENE.questions.map(q => (
              <p key={q} className="font-display text-lg text-ink">{q}</p>
            ))}
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
