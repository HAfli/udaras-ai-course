import type { ReactNode } from 'react'
import { session1 } from '../../data/session1'
import { OPENING_SCENE } from '../../data/story1'
import { GAA_CASE_RESOURCES } from '../../data/multimedia'
import { InteractiveWorkflow } from '../InteractiveWorkflow'
import { PromptLadder } from '../exercises/PromptLadder'
import { Reflection } from '../exercises/Reflection'
import { ExperimentLog } from '../exercises/ExperimentLog'
import { PrivacyNotice, AIToolsNotice, SelfStudySteps, PrintLink } from '../exercises/WorkshopExtras'
import {
  WORKSHOP1_QUESTIONS, WORKSHOP1_REPORT_BACK, WORKSHOP1_SELF_STUDY,
  WORKSHOP2_PRESERVED_INSTRUCTIONS, WORKSHOP2_OUTPUT_STRUCTURE, WORKSHOP2_SELF_STUDY,
  REFLECTION1_QUESTIONS, REFLECTION1_CONNECTION,
  REFLECTION2_QUESTIONS, REFLECTION2_CONNECTION,
  MY_FIRST_EXPERIMENT_FIELDS,
} from '../../data/exerciseContent'

/** "Learn Session 1 yourself" — the self-study path. Not a second,
 *  independently-maintained version of the course: every step reuses
 *  the exact same data and components as the live session (session1.ts,
 *  story1.ts, exerciseContent.ts, and the same workshop/reflection
 *  components used in the live exercise modals). A visitor who was
 *  never in the room can read this top to bottom and do the same
 *  activities a live participant does. */
function Step({ n, title, ga, children }: { n: number; title: string; ga?: string; children: ReactNode }) {
  return (
    <section aria-labelledby={`step-${n}`} className="scroll-mt-24 border-t border-ink/10 pt-8 first:border-0 first:pt-0">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-sm font-bold text-moss-600">{n}</span>
        <h2 id={`step-${n}`} className="font-display text-2xl font-semibold">{title}</h2>
      </div>
      {ga && <p lang="ga" className="gaeilge mt-1 text-sm text-moss-600">{ga}</p>}
      <div className="mt-5 space-y-5">{children}</div>
    </section>
  )
}

/** Single source of truth: pull each activity's title/Irish title from
 *  session1.ts's own exercises array rather than re-typing it here, so
 *  the self-study page can never quietly drift from the live cards. */
function exTitle(id: string) {
  const ex = session1.exercises.find(e => e.id === id)
  return { en: ex?.title.en ?? '', ga: ex?.title.ga, number: ex?.number ?? '' }
}

export function StudySession1() {
  const gaa = GAA_CASE_RESOURCES[0]
  const w1 = exTitle('e1'); const r1 = exTitle('e1r'); const w2 = exTitle('e2'); const r2 = exTitle('e2r'); const exp = exTitle('e5b')

  return (
    <div className="space-y-10">
      <div className="rounded-xl2 border border-moss-300 bg-moss-50/60 p-6 sm:p-8">
        <p className="kicker text-moss-600">Learn Session 1 yourself</p>
        <p className="mt-2 font-display text-xl leading-snug">
          Everything below is the same course a live participant does — read it top to bottom, and do the two
          workshops as you reach them. No facilitator, no group and no live room are required.
        </p>
      </div>

      <Step n={1} title="What will I learn?">
        <ul className="grid gap-2.5 sm:grid-cols-2">
          {session1.outcomes?.map(o => (
            <li key={o} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
              <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-moss-400" />{o}
            </li>
          ))}
        </ul>
      </Step>

      <Step n={2} title="Morning concepts">
        <p className="text-sm leading-relaxed text-ink-soft">
          {OPENING_SCENE.line} That question — {OPENING_SCENE.questions.join(' / ')} — is where this session
          starts, before any definition of AI. The morning covers, in order: AI already around us, the honest
          answer on AI and Irish ("why Irish matters"), traditional software vs machine learning vs generative
          AI, and how a large language model actually produces an answer.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {session1.keyMessages.map(m => (
            <p key={m} className="rounded-xl2 border border-ink/8 bg-paper-card px-4 py-3 text-sm font-medium leading-snug">{m}</p>
          ))}
        </div>
      </Step>

      <Step n={3} title="A real example: could AI get this wrong?">
        <p className="text-sm leading-relaxed text-ink-soft">
          Before the workshops, the course looks at a <strong>REAL case</strong> — not a fictional exercise — where
          AI-generated artwork for a GAA match programme was culturally recognisable but not culturally
          appropriate (misspelt crest included). {gaa?.description}
        </p>
        <p className="text-sm leading-relaxed text-ink-soft">
          The lesson: AI can look fine and still be wrong, especially on anything involving language, culture or
          context.
        </p>
      </Step>

      <Step n={4} title={`${w1.number} — ${w1.en}`} ga={w1.ga}>
        <div className="flex flex-wrap gap-3 text-sm text-ink-mute">
          <span className="chip">25 minutes live · self-paced here</span>
          <span className="chip">Live: 5 groups of 3</span>
        </div>
        <p className="text-sm leading-relaxed text-ink-soft">
          Pick one real workplace task (use a fictional or anonymised version if it involves anything sensitive)
          and work through these seven questions:
        </p>
        <InteractiveWorkflow steps={WORKSHOP1_QUESTIONS} />
        <div>
          <p className="text-[.72rem] font-bold uppercase tracking-wide text-ink-faint">Then decide and report to yourself</p>
          <ol className="mt-2 space-y-1 text-sm text-ink-soft">
            {WORKSHOP1_REPORT_BACK.map((s, i) => <li key={s}>{i + 1}. {s}</li>)}
          </ol>
        </div>
        <PrivacyNotice />
        <SelfStudySteps steps={WORKSHOP1_SELF_STUDY} />
        <PrintLink exerciseId="e1" />
      </Step>

      <Step n={5} title={`${r1.number} — ${r1.en}`} ga={r1.ga}>
        <Reflection questions={REFLECTION1_QUESTIONS} connection={REFLECTION1_CONNECTION} />
      </Step>

      <Step n={6} title={`${w2.number} — ${w2.en}`} ga={w2.ga}>
        <div className="flex flex-wrap gap-3 text-sm text-ink-mute">
          <span className="chip">25 minutes live · self-paced here</span>
          <span className="chip">Live: 5 groups of 3</span>
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
          <p className="text-[.72rem] font-bold uppercase tracking-wide text-ink-faint">Record for yourself</p>
          <ol className="mt-2 space-y-1 text-sm text-ink-soft">
            {WORKSHOP2_OUTPUT_STRUCTURE.map((s, i) => <li key={s}>{i + 1}. {s}</li>)}
          </ol>
        </div>
        <p className="rounded-xl2 bg-moss-50 px-4 py-3 text-sm font-semibold text-moss-800">
          A better prompt can make an answer more useful. It does not make the answer automatically true.
        </p>
        <SelfStudySteps steps={WORKSHOP2_SELF_STUDY} />
        <PrintLink exerciseId="e2" />
      </Step>

      <Step n={7} title={`${r2.number} — ${r2.en}`} ga={r2.ga}>
        <Reflection questions={REFLECTION2_QUESTIONS} connection={REFLECTION2_CONNECTION} />
      </Step>

      <Step n={8} title={exp.en} ga={exp.ga}>
        <p className="text-sm leading-relaxed text-ink-soft">
          A practical workplace experiment, written alone: one real task, planned honestly, including what you
          will not put into the AI and who makes the final call.
        </p>
        <ExperimentLog fields={MY_FIRST_EXPERIMENT_FIELDS} />
      </Step>

      <Step n={9} title="What should I try next?">
        {session1.betweenAfter && (
          <p className="text-sm leading-relaxed text-ink-soft">
            {session1.betweenAfter.brief} Record: {session1.betweenAfter.steps.join(' → ')}.
          </p>
        )}
        <p className="rounded-xl2 border border-ink/10 bg-paper-deep/40 px-4 py-3 text-sm font-medium text-ink">
          The central messages to keep: “AI is an assistant, not an authority.” “Prediction is not
          understanding.” “Fluent is not the same as factual.” “You remain responsible for what you use and
          publish.” “AI for Irish — not AI instead of Irish.”
        </p>
      </Step>
    </div>
  )
}
