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
import {
  SEVEN_STEPS, WORKSHOP1_QUESTIONS,
  REFLECTION1_QUESTIONS, REFLECTION1_CONNECTION,
  REFLECTION2_QUESTIONS, REFLECTION2_CONNECTION,
} from '../data/exerciseContent'

function body(ex: Exercise): ReactNode {
  if (ex.id === 'e5b') return <ExperimentLog />
  if (ex.id === 'e1r') return <Reflection questions={REFLECTION1_QUESTIONS} connection={REFLECTION1_CONNECTION} />
  if (ex.id === 'e2r') return <Reflection questions={REFLECTION2_QUESTIONS} connection={REFLECTION2_CONNECTION} />
  switch (ex.kind) {
    case 'hallucination-quiz': return <HallucinationQuiz />
    case 'sorter': return <TaskSorter />
    case 'traffic-light': return <TrafficLight />
    case 'prompt-ladder': return <PromptLadder />
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
      <div>
        <div className="prose-note"><p>Groups of three or four. The last two questions are the ones that matter.</p></div>
        <div className="mt-5"><InteractiveWorkflow steps={WORKSHOP1_QUESTIONS} /></div>
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
