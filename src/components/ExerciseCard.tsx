import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Clock } from 'lucide-react'
import { useEffect, useState, type ReactNode } from 'react'
import type { Exercise } from '../data/types'
import { Modal } from './ui/Modal'
import { Bi } from './ui/Bi'

import { HallucinationQuiz } from './exercises/HallucinationQuiz'
import { TaskSorter } from './exercises/TaskSorter'
import { TrafficLight } from './exercises/TrafficLight'
import { PromptLadder } from './exercises/PromptLadder'
import { IrishReview } from './exercises/IrishReview'
import { ExperimentLog } from './exercises/ExperimentLog'
import { ScenarioCards } from './ScenarioCard'
import { StopFramework } from './exercises/StopFramework'
import { InteractiveWorkflow } from './InteractiveWorkflow'
import { UseCaseTable } from './exercises/UseCaseTable'
import { IrishFirstBusiness } from './exercises/IrishFirstBusiness'
import { BilingualLab } from './exercises/BilingualLab'
import { NeverAutomate } from './exercises/NeverAutomate'
import { Clinic } from './exercises/Clinic'
import { Charter } from './exercises/Charter'
import { RubricScore } from './exercises/RubricScore'
import { ErrorSpot } from './exercises/ErrorSpot'
import { Reflection } from './exercises/Reflection'
import { PrivacyNotice, AIToolsNotice, SelfStudySteps, FacilitatorNotes, SlideLink } from './exercises/WorkshopExtras'
import {
  SEVEN_STEPS, WORKSHOP1_QUESTIONS,
  REFLECTION1_QUESTIONS, REFLECTION1_CONNECTION,
  REFLECTION2_QUESTIONS, REFLECTION2_CONNECTION,
  MY_FIRST_EXPERIMENT_FIELDS,
  WORKSHOP1_REPORT_BACK, WORKSHOP1_SELF_STUDY, WORKSHOP1_FACILITATOR,
  WORKSHOP2_PRESERVED_INSTRUCTIONS, WORKSHOP2_OUTPUT_STRUCTURE, WORKSHOP2_SELF_STUDY, WORKSHOP2_FACILITATOR,
} from '../data/exerciseContent'

/** Slide-page numbers in Udaras_AI_Course_Session_1_MTU_v6.1_DRAFT.pptx
 *  (and the published participant PDF, same page numbers) for each
 *  activity — verified against the actual file, never guessed. */
const SLIDE_PAGE: Record<string, number> = {
  e1: 42, e1r: 43, e2: 44, e2r: 46, e5b: 48,
}

function body(ex: Exercise): ReactNode {
  if (ex.id === 'e5b') return (
    <div>
      <div className="prose-note"><p>Fifteen minutes, written alone, no discussion. This is what connects today to Session 2.</p></div>
      <div className="mt-5"><ExperimentLog fields={MY_FIRST_EXPERIMENT_FIELDS} /></div>
      <div className="mt-5"><SlideLink page={SLIDE_PAGE.e5b} /></div>
    </div>
  )
  if (ex.id === 'e1r') return (
    <div>
      <Reflection questions={REFLECTION1_QUESTIONS} connection={REFLECTION1_CONNECTION} />
      <div className="mt-5"><SlideLink page={SLIDE_PAGE.e1r} /></div>
    </div>
  )
  if (ex.id === 'e2r') return (
    <div>
      <Reflection questions={REFLECTION2_QUESTIONS} connection={REFLECTION2_CONNECTION} />
      <div className="mt-5"><SlideLink page={SLIDE_PAGE.e2r} /></div>
    </div>
  )
  switch (ex.kind) {
    case 'hallucination-quiz': return <HallucinationQuiz />
    case 'sorter': return <TaskSorter />
    case 'traffic-light': return <TrafficLight />
    case 'prompt-ladder': return (
      <div className="space-y-5">
        <div className="flex flex-wrap gap-3 text-sm text-ink-mute">
          <span className="chip">25 minutes</span>
          <span className="chip">5 groups of 3</span>
        </div>
        <PromptLadder />
        <div className="rounded-xl2 border border-ink/10 bg-paper-card p-4">
          <p className="text-[.72rem] font-bold uppercase tracking-wide text-ink-faint">Keep to exactly</p>
          <ul className="mt-2 space-y-1.5 text-sm font-medium text-ink">
            {WORKSHOP2_PRESERVED_INSTRUCTIONS.map(s => <li key={s}>“{s}”</li>)}
          </ul>
        </div>
        <AIToolsNotice />
        <div>
          <p className="text-[.72rem] font-bold uppercase tracking-wide text-ink-faint">Group output</p>
          <ol className="mt-2 space-y-1 text-sm text-ink-soft">
            {WORKSHOP2_OUTPUT_STRUCTURE.map((s, i) => <li key={s}>{i + 1}. {s}</li>)}
          </ol>
        </div>
        <p className="rounded-xl2 bg-moss-50 px-4 py-3 text-sm font-semibold text-moss-800">
          Did the better prompt make the answer more useful? Not: did it make the answer true.
        </p>
        <SelfStudySteps steps={WORKSHOP2_SELF_STUDY} />
        <FacilitatorNotes>
          <p><strong>Timing:</strong> {WORKSHOP2_FACILITATOR.timing} · <strong>Grouping:</strong> {WORKSHOP2_FACILITATOR.grouping}</p>
          <ul className="list-disc space-y-1 pl-5">
            {WORKSHOP2_FACILITATOR.steps.map(s => <li key={s}>{s}</li>)}
          </ul>
          <p>{WORKSHOP2_FACILITATOR.keyPoint}</p>
        </FacilitatorNotes>
        <SlideLink page={SLIDE_PAGE.e2} />
      </div>
    )
    case 'irish-review': return <IrishReview />
    case 'scenarios': return <ScenarioCards />
    case 'stop': return <StopFramework />
    case 'workflow': return (
      <div>
        <div className="prose-note"><p>Seven steps, in order. Bring a real problem — a hypothetical one will not push back.</p></div>
        <div className="mt-5"><InteractiveWorkflow steps={SEVEN_STEPS} /></div>
      </div>
    )
    case 'table-builder': return <UseCaseTable />
    case 'ideas': return <IrishFirstBusiness />
    case 'bilingual-lab': return <BilingualLab />
    case 'never-automate': return <NeverAutomate />
    case 'clinic': return <Clinic />
    case 'charter': return <Charter />
    case 'workshop1': return (
      <div className="space-y-5">
        <div className="flex flex-wrap gap-3 text-sm text-ink-mute">
          <span className="chip">25 minutes</span>
          <span className="chip">5 groups of 3</span>
        </div>
        <div>
          <p className="text-[.72rem] font-bold uppercase tracking-wide text-ink-faint">Roles (can rotate)</p>
          <ol className="mt-2 space-y-1 text-sm text-ink-soft">
            <li>1. Task owner</li>
            <li>2. AI operator / prompt writer</li>
            <li>3. Checker / sceptic</li>
          </ol>
        </div>
        <div className="prose-note"><p>Work through the seven questions on one real task. The last two are the ones that matter, and the ones groups skip if nobody pushes.</p></div>
        <InteractiveWorkflow steps={WORKSHOP1_QUESTIONS} />
        <div>
          <p className="text-[.72rem] font-bold uppercase tracking-wide text-ink-faint">60-second report back</p>
          <ol className="mt-2 space-y-1 text-sm text-ink-soft">
            {WORKSHOP1_REPORT_BACK.map((s, i) => <li key={s}>{i + 1}. {s}</li>)}
          </ol>
        </div>
        <PrivacyNotice />
        <SelfStudySteps steps={WORKSHOP1_SELF_STUDY} />
        <FacilitatorNotes>
          <p><strong>Timing:</strong> {WORKSHOP1_FACILITATOR.timing} · <strong>Grouping:</strong> {WORKSHOP1_FACILITATOR.grouping}</p>
          <p><strong>Key question:</strong> {WORKSHOP1_FACILITATOR.keyQuestion}</p>
          <p><strong>Second question:</strong> {WORKSHOP1_FACILITATOR.secondQuestion}</p>
          <ul className="list-disc space-y-1 pl-5">
            {WORKSHOP1_FACILITATOR.watchFor.map(s => <li key={s}>{s}</li>)}
          </ul>
          <p><strong>Mary's role:</strong> {WORKSHOP1_FACILITATOR.marysRole}</p>
          <p><strong>If a group is stuck for a task:</strong> {WORKSHOP1_FACILITATOR.exampleTasks.join(', ')}. Examples only — use a fictional or anonymised version.</p>
        </FacilitatorNotes>
        <SlideLink page={SLIDE_PAGE.e1} />
      </div>
    )
    case 'rubric': return <RubricScore />
    case 'error-spot': return <ErrorSpot />
    default: return null
  }
}

export function ExerciseCard({ ex, i, autoOpen }: { ex: Exercise; i: number; autoOpen?: boolean }) {
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  // Deep-linked from the PPTX (e.g. #/session/s1/exercises/e1) — open this
  // exercise's modal straight away instead of just landing on the tab.
  useEffect(() => {
    if (autoOpen) setOpen(true)
  }, [autoOpen])

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45, delay: Math.min(i * 0.06, 0.4) }}
        className="card card-hover group flex h-full flex-col p-5 text-left"
      >
        <div className="flex items-center gap-3">
          <span className="kicker text-moss-600">{ex.number}</span>
          {ex.minutes && (
            <span className="ml-auto inline-flex items-center gap-1 text-[.7rem] font-medium text-ink-faint">
              <Clock className="h-3 w-3" aria-hidden /> {ex.minutes} min
            </span>
          )}
        </div>
        <h3 className="mt-2.5 font-display text-lg font-semibold leading-snug">
          <Bi v={ex.title} />
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{ex.purpose}</p>
        {ex.lesson && (
          <p className="mt-3 border-l-2 border-lichen/50 pl-3 text-sm italic leading-relaxed text-ink-mute">
            {ex.lesson}
          </p>
        )}
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-moss-700">
          Open exercise
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
        </span>
      </motion.button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={
          <>
            <p className="kicker text-moss-600">{ex.number}</p>
            <h3 className="mt-1 font-display text-xl font-semibold leading-snug sm:text-2xl">
              <Bi v={ex.title} />
            </h3>
          </>
        }
      >
        {body(ex)}
      </Modal>
    </>
  )
}
