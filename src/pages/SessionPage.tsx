import { motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight, CalendarDays, Clock, MapPin, FileDown } from 'lucide-react'
import { byId, SESSIONS } from '../data/sessions'
import { JOURNEY } from '../data/programme'
import { useLang } from '../i18n/LangContext'
import { Bi, GaLine } from '../components/ui/Bi'
import { Tabs } from '../components/ui/Tabs'
import { Timetable } from '../components/Timetable'
import { SlideDeck } from '../components/SlideDeck'
import { ExerciseCard } from '../components/ExerciseCard'
import { ProgressIndicator } from '../components/ProgressIndicator'
import { BetweenCard } from '../components/BetweenCard'
import { Reveal } from '../components/ui/Reveal'
import { FeedbackLink } from '../components/FeedbackLink'
import { StoryPanel } from '../components/story/StoryPanel'
import { SessionJourney } from '../components/story/SessionJourney'
import { StudySession1 } from '../components/story/StudySession1'
import { PrintableWorkshopSheets } from '../components/PrintableWorkshopSheets'

// A rotating campaign colour per session, so each stage of the
// programme reads as its own chapter rather than an identical template.
const HEADER_COLOUR: Record<string, string> = {
  prep: 'bg-ink', s1: 'bg-atlantic', s2: 'bg-coral-deep', s3: 'bg-emerald', s4: 'bg-gold',
}
const HEADER_TEXT: Record<string, string> = {
  prep: 'text-paper', s1: 'text-paper', s2: 'text-paper', s3: 'text-paper', s4: 'text-ink',
}

function Overview({ s }: { s: NonNullable<ReturnType<typeof byId>> }) {
  const { t } = useLang()
  const reduce = useReducedMotion()

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,20rem)]">
      <div className="space-y-10">
        {s.outcomes && (
          <section aria-labelledby="oc">
            <h2 id="oc" className="eyebrow">{t('outcomes')}</h2>
            <p className="mt-2 text-sm text-ink-mute">By the end of this session, participants should be able to:</p>
            <ul className="mt-4 space-y-2.5">
              {s.outcomes.map((o, i) => (
                <motion.li
                  key={o}
                  initial={reduce ? false : { opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.35, delay: Math.min(i * 0.05, 0.4) }}
                  className="flex gap-3.5 text-[.98rem] leading-relaxed text-ink-soft"
                >
                  <span aria-hidden className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink-faint" />
                  {o}
                </motion.li>
              ))}
            </ul>
          </section>
        )}

        <section aria-labelledby="km">
          <h2 id="km" className="eyebrow">{t('keyMessages')}</h2>
          <div className="mt-4 divide-y divide-ink/12 border-t border-ink/12">
            {s.keyMessages.map(m => (
              <p key={m} className="py-3.5 font-display text-lg leading-snug">
                {m}
              </p>
            ))}
          </div>
        </section>

        <section aria-labelledby="out">
          <h2 id="out" className="eyebrow">{t('outputs')}</h2>
          <ul className="mt-4 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {s.outputs.map(o => (
              <li key={o} className="border-l-2 border-ink/20 pl-3 text-sm leading-relaxed text-ink-soft">{o}</li>
            ))}
          </ul>
        </section>
      </div>

      <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
        <div className="border-t-2 border-ink pt-4">
          <p className="kicker">{t('irishComponent')}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.irishComponent}</p>
        </div>
        <div className="border-t border-ink/25 pt-4">
          <p className="kicker">{t('safetyComponent')}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.safetyComponent}</p>
        </div>
      </div>
    </div>
  )
}

export function SessionPage({ id, initialTab, openExercise }: { id: string; initialTab?: string; openExercise?: string }) {
  const { t } = useLang()
  const s = byId(id)
  const reduce = useReducedMotion()

  if (!s) {
    return (
      <div className="wrap py-24">
        <p className="font-display text-2xl">That session doesn’t exist.</p>
        <a href="#/" className="btn-primary mt-5">Back to the programme</a>
      </div>
    )
  }

  const order = SESSIONS.map(x => x.id)
  const i = order.indexOf(s.id)
  const prev = i > 0 ? SESSIONS[i - 1] : null
  const next = i < SESSIONS.length - 1 ? SESSIONS[i + 1] : null
  const stage = JOURNEY.find(j => j.id === s.id)

  const tabs = [
    ...(s.id === 's1' ? [{ id: 'story', label: 'The story', content: <StoryPanel /> }] : []),
    { id: 'overview', label: t('overview'), content: <Overview s={s} /> },
    { id: 'timetable', label: t('timetable'), content: <Timetable slots={s.timetable} /> },
    ...(s.slideGroups.length ? [{
      id: 'slides',
      label: t('slides'),
      content: (
        <>
          {s.id === 's1' && (
            <a
              href={`${import.meta.env.BASE_URL}session1-slides.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mb-6 inline-flex"
            >
              <FileDown className="h-4 w-4" aria-hidden /> Session 1 — Slides (PDF, 52 slides, no speaker notes)
            </a>
          )}
          <SlideDeck groups={s.slideGroups} />
        </>
      ),
    }] : []),
    ...(s.exercises.length
      ? [{
          id: 'exercises',
          label: s.id === 's1' ? `Workshops & activities (${s.exercises.length})` : `${t('exercises')} (${s.exercises.length})`,
          content: (
            <>
              <h2 className="sr-only">Exercises</h2>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {s.exercises.map(e => <ExerciseCard key={e.id} ex={e} autoOpen={e.id === openExercise} />)}
              </div>
            </>
          ),
        }]
      : []),
    ...(s.id === 's1' ? [{ id: 'study', label: 'Learn it yourself', content: <StudySession1 /> }] : []),
  ]

  return (
    <div key={s.id}>
      <motion.header
        initial={reduce ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`${HEADER_COLOUR[s.id] ?? 'bg-ink'} ${HEADER_TEXT[s.id] ?? 'text-paper'}`}
      >
        <div className="wrap py-14 sm:py-20">
          <a href="#/" className="-ml-3 mb-6 inline-flex items-center gap-1.5 px-3 py-1.5 text-[.8rem] font-semibold text-current opacity-90 hover:opacity-100">
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden /> {t('backToProgramme')}
          </a>

          <ProgressIndicator currentId={s.id} />

          <p className="mt-8 text-[.72rem] font-semibold uppercase tracking-[.16em] opacity-90">
            {s.index}{stage ? ` · Stage ${stage.stage}` : ''}
          </p>
          <h1 className="display-huge mt-4 max-w-4xl text-[2.4rem] sm:text-[3.6rem] lg:text-[4.4rem]">
            <Bi v={s.title} />
          </h1>

          <p className="mt-5 font-display text-xl italic opacity-90 sm:text-2xl">
            {s.strapline.ga ? <GaLine ga={s.strapline.ga} needsValidation={s.strapline.needsValidation} /> : s.strapline.en}
          </p>
          {s.strapline.ga && <p className="mt-1 text-sm opacity-90">{s.strapline.en}</p>}

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium uppercase tracking-wide opacity-90">
            <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" aria-hidden /> {s.duration}</span>
            <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" aria-hidden /> {s.week}</span>
            {s.location && <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" aria-hidden /> {s.location}</span>}
          </div>

          <div className="mt-8 max-w-3xl border-l-2 border-current pl-6">
            <p className="text-[.7rem] font-semibold uppercase tracking-[.16em] opacity-90">{t('centralQuestion')}</p>
            <p className="mt-2 font-display text-xl leading-snug sm:text-2xl">
              <Bi v={s.centralQuestion} />
            </p>
          </div>
        </div>
      </motion.header>

      {s.id === 's1' && (
        <div className="wrap space-y-8 pt-10">
          <SessionJourney />
          <PrintableWorkshopSheets />
        </div>
      )}

      <div className="wrap py-12 sm:py-16">
        {/* key remounts Tabs when the deep-linked tab segment changes (e.g. a
            PPTX link opened while the session page is already showing) so the
            requested tab is honoured, not just on first mount. */}
        <Tabs key={initialTab ?? 'default'} tabs={tabs} initial={initialTab} />
      </div>

      {s.betweenAfter && (
        <div className="wrap pb-8">
          <Reveal><BetweenCard w={s.betweenAfter} /></Reveal>
        </div>
      )}

      {s.id !== 'prep' && (
        <div className="wrap pt-10">
          <Reveal><FeedbackLink /></Reveal>
        </div>
      )}

      <nav aria-label="Session navigation" className="wrap flex flex-wrap gap-3 pb-24 pt-8">
        {prev && (
          <a href={`#/session/${prev.id}`} className="btn-ghost">
            <ArrowLeft className="h-4 w-4" aria-hidden /> {prev.index}
          </a>
        )}
        {next && (
          <a href={`#/session/${next.id}`} className="btn-primary ml-auto">
            {next.index} <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        )}
      </nav>
    </div>
  )
}
