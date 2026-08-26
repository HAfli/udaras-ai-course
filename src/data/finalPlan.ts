export interface PlanSection {
  id: string
  title: string
  kind: 'lines' | 'text'
  lines?: number
  hint: string
  irish?: boolean
}

/** Session 4 deliverable — the one document participants take away. */
export const PLAN_SECTIONS: PlanSection[] = [
  {
    id: 'use', title: 'Three tasks where I will use AI', kind: 'lines', lines: 3,
    hint: 'Specific tasks, not categories. “Draft the Friday newsletter”, not “communications”.',
  },
  {
    id: 'not-use', title: 'Two tasks where I will NOT use AI', kind: 'lines', lines: 2,
    hint: 'Deciding what you will not automate is as much a strategy as deciding what you will.',
  },
  {
    id: 'safety', title: 'My AI safety check', kind: 'text',
    hint: 'What you ask yourself before anything goes in. STOP is a starting point: Sensitive? Trust? Ownership? Person responsible?',
  },
  {
    id: 'verify', title: 'How I will verify AI outputs', kind: 'text',
    hint: 'The actual method, not the intention. Which facts, checked against what, by whom.',
  },
  {
    id: 'irish', title: 'My Irish-language AI use case', kind: 'text', irish: true,
    hint: 'One piece of Irish-language work AI will help you do more of — and who validates it before it goes out.',
  },
  {
    id: 'approval', title: 'Who is responsible for final approval?', kind: 'text',
    hint: 'A name. “The AI wrote it” has never been an answer.',
  },
  {
    id: 'experiment', title: 'My next 30-day AI experiment', kind: 'text',
    hint: 'One thing you will try, and how you will know whether it worked.',
  },
]

export const FINAL_REFLECTION = [
  { id: 'f1', prompt: 'Before this course, I thought…', ga: 'Roimh an gcúrsa seo, cheap mé…', needsValidation: true },
  { id: 'f2', prompt: 'Now I understand…', ga: 'Anois tuigim…' },
  { id: 'f3', prompt: 'One thing I will start doing…', ga: 'Rud amháin a thosóidh mé…', needsValidation: true },
  { id: 'f4', prompt: 'One thing I will stop doing…', ga: 'Rud amháin a stopfaidh mé…', needsValidation: true },
  { id: 'f5', prompt: 'One way I will use AI to support Irish…', ga: 'Bealach amháin a úsáidfidh mé AI chun tacú leis an nGaeilge…', needsValidation: true },
]

export const CLOSING = {
  line1: 'AI literacy is not about becoming an AI expert.',
  line2: 'It is about becoming confident enough to make good decisions about AI.',
  line3:
    'We have an opportunity to ensure that Irish is not left behind in the AI revolution — but becomes part of the digital economy.',
}

export const THIRTY_DAYS = [
  { when: 'Week 1', what: 'Use your saved prompt on the task you chose. Once. Do not redesign it.' },
  { when: 'Week 2', what: 'Show the workflow to one colleague and watch where they get stuck.' },
  { when: 'Week 3', what: 'Do one piece of Irish-language content end to end: generate, validate, adapt, publish.' },
  { when: 'Week 4', what: 'Review your charter. Change what turned out to be wrong. It is meant to be revised.' },
]
