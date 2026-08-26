import type { Framework } from './types'

/* ------------------------------------------------------------------ *
 *  CONTRACTUAL LAYER — sourced verbatim from the MTU Terms of
 *  Engagement / Appendix A Project Plan (Údarás na Gaeltachta).
 *  Do not alter without a corresponding change to the signed document.
 * ------------------------------------------------------------------ */

export const CONTRACT = {
  title: 'Building AI Confidence in the Gaeltacht Workplace',
  titleGa: 'Muinín in AI a Thógáil in Ionad Oibre na Gaeltachta',
  titleGaNeedsValidation: true,
  provider: 'Munster Technological University',
  client: 'Údarás na Gaeltachta',
  duration: '6–8 week period',
  dates: 'Commencing mid-to-late August 2026, concluding October 2026',
  language: 'Delivered through the medium of Irish',
  venue: 'Campas Íosagáin',
  model:
    'A collaborative, iterative learning journey: a preparatory planning session at Campas Íosagáin, followed by four structured learning touchpoints combining practical AI training, workplace application, participant reflection and a final consolidation session.',
  clientRole:
    'Údarás na Gaeltachta coordinates participant attendance and logistics; MTU delivers on-site at Campas Íosagáin.',
  iterativePrinciple:
    'Content for later sessions is developed and refined from participant feedback. Participants are asked to apply learning between sessions and to bring questions and observations back into the room.',
  contractNotes: [
    'The four-session structure, the preparatory planning day and the 6–8 week duration are contractual and are reproduced here unchanged.',
    'Session timetables, slide plans, exercises and between-session tasks on this site are proposed pedagogical detail developed for delivery — not contractual commitments.',
    'The signed document notes that where new requirements emerge, MTU and Údarás na Gaeltachta re-evaluate and prioritise deliverables together within available budget.',
    'Appendix A carries an internal inconsistency: the Session 4 heading reads “Half-Day Wrap-Up (Week 8)” while the paragraph beneath refers to “week twelve”. Week 8 is used throughout this site, consistent with the heading and the stated 6–8 week duration. Worth confirming in writing with Údarás.',
  ],
  disclaimer:
    'Educational guidance — not legal advice. Financial and commercial terms of the engagement are deliberately not reproduced on this site.',
} as const

/* ------------------------------------------------------------------ *
 *  THE LEARNING JOURNEY
 * ------------------------------------------------------------------ */

export interface Stage {
  id: string
  stage: number
  kind: 'session' | 'between'
  route: string
  label: { ga?: string; en: string; needsValidation?: boolean }
  sub: string
  when: string
  blurb: string
}

export const JOURNEY: Stage[] = [
  {
    id: 'prep', stage: 0, kind: 'session', route: '#/session/prep',
    label: { en: 'Preparatory Day', ga: 'Lá Ullmhúcháin', needsValidation: true },
    sub: 'Planning together', when: 'Before Week 2',
    blurb: 'The full team convenes at Campas Íosagáin so the course is shaped by the lived experience of participants from the outset.',
  },
  {
    id: 's1', stage: 1, kind: 'session', route: '#/session/s1',
    label: { en: 'Understand AI', ga: 'Tuig an AI', needsValidation: true },
    sub: 'Session 1 · Full day', when: 'Week 2',
    blurb: 'What AI is, what it can and cannot do, and why fluent output is not the same thing as fact.',
  },
  {
    id: 'b1', stage: 2, kind: 'between', route: '#/between/b1',
    label: { en: 'Experiment', ga: 'Bí ag Triail', needsValidation: true },
    sub: 'Between 1 and 2', when: 'Weeks 2–4',
    blurb: 'Three real work tasks, three prompts, three honest verdicts.',
  },
  {
    id: 's2', stage: 3, kind: 'session', route: '#/session/s2',
    label: { en: 'Use AI Safely', ga: 'Úsáid AI go Sábháilte', needsValidation: true },
    sub: 'Session 2 · Full day', when: 'Week 4',
    blurb: 'Responsible use, the AI Act in plain language, and AI that earns its place in everyday business.',
  },
  {
    id: 'b2', stage: 4, kind: 'between', route: '#/between/b2',
    label: { en: 'Apply', ga: 'Cuir i bhFeidhm', needsValidation: true },
    sub: 'Between 2 and 3', when: 'Weeks 4–6',
    blurb: 'Turn one repetitive task into a workflow you would trust to repeat.',
  },
  {
    id: 's3', stage: 5, kind: 'session', route: '#/session/s3',
    label: { en: 'AI + Irish', ga: 'AI agus an Ghaeilge' },
    sub: 'Session 3 · Half day', when: 'Week 6',
    blurb: 'The signature session: how AI can strengthen rather than weaken Irish in the workplace.',
  },
  {
    id: 's4', stage: 6, kind: 'session', route: '#/session/s4',
    label: { en: 'Confidence Clinic', ga: 'Clinic Muiníne', needsValidation: true },
    sub: 'Session 4 · Half day', when: 'Week 8',
    blurb: 'Your questions, your workflow, your responsible AI plan for the next thirty days.',
  },
]

/* ------------------------------------------------------------------ *
 *  THE TEN QUESTIONS — the pedagogical spine of the programme
 * ------------------------------------------------------------------ */

export const TEN_QUESTIONS = [
  'What is AI?',
  'What can it do?',
  'What can’t it do?',
  'When should I use it?',
  'When should I not use it?',
  'What are the risks?',
  'How do I use it safely?',
  'How do I check its output?',
  'How can it help my business?',
  'How can AI help strengthen Irish in the digital economy?',
]

/* ------------------------------------------------------------------ *
 *  THE FOUR FRAMEWORKS
 * ------------------------------------------------------------------ */

export const FRAMEWORKS: Framework[] = [
  {
    id: 'mindset',
    title: { en: 'The AI Mindset', ga: 'Meon an AI', needsValidation: true },
    question: 'What do I bring to the tool?',
    tone: 'moss',
    steps: [
      { label: { en: 'Curious', ga: 'Fiosrach' }, body: 'Try it on real work. You cannot judge a tool you have never used, and reading about AI is not the same as using it.' },
      { label: { en: 'Sceptical', ga: 'Amhrasach' }, body: 'Fluent is not the same as correct. Scepticism is not hostility to AI — it is the skill that makes AI safe to use.' },
      { label: { en: 'Responsible', ga: 'Freagrach' }, body: 'The tool never carries the consequence. A person signs off, a person answers for it, a person stays accountable.' },
    ],
  },
  {
    id: 'before',
    title: { en: 'Before Using AI', ga: 'Sula n-Úsáideann Tú AI', needsValidation: true },
    question: 'Should I use AI for this at all?',
    tone: 'lichen',
    steps: [
      { label: { en: 'Value', ga: 'Luach', needsValidation: true }, body: 'What would this actually save or improve? If the honest answer is “nothing much”, stop here — that is a legitimate outcome.' },
      { label: { en: 'Risk', ga: 'Riosca' }, body: 'What is the worst plausible outcome if the output is wrong and nobody notices? Reputational, legal, financial, human.' },
      { label: { en: 'Data', ga: 'Sonraí' }, body: 'What information would I have to hand over to get a useful answer — and am I allowed to hand it over?' },
      { label: { en: 'Human judgement', ga: 'Breithiúnas Daonna', needsValidation: true }, body: 'Which part of this decision must stay with a person, no matter how good the output looks?' },
    ],
  },
  {
    id: 'using',
    title: { en: 'Using AI', ga: 'AI a Úsáid', needsValidation: true },
    question: 'How do I actually work with it?',
    tone: 'moss',
    steps: [
      { label: { en: 'Context', ga: 'Comhthéacs' }, body: 'Tell it who you are, who the reader is and what world this sits in. Most bad output is a context problem, not a model problem.' },
      { label: { en: 'Prompt', ga: 'Leid', needsValidation: true }, body: 'Role, context, task, constraints, output. Vague in, vague out.' },
      { label: { en: 'Output', ga: 'Aschur' }, body: 'Read it as a draft from a confident stranger who has never met your customers.' },
      { label: { en: 'Check', ga: 'Seiceáil' }, body: 'Facts, names, figures, quotations, legal claims, Irish. Check what you would be embarrassed to get wrong.' },
      { label: { en: 'Improve', ga: 'Feabhsaigh' }, body: 'Tell it what was wrong and why. The second attempt is usually where the value is.' },
    ],
  },
  {
    id: 'irish',
    title: { en: 'Irish-Language Workflow', ga: 'Sruth Oibre Gaeilge', needsValidation: true },
    question: 'How does Irish content actually get made?',
    tone: 'heather',
    steps: [
      { label: { en: 'Generate', ga: 'Gin' }, body: 'Use AI for the first draft, the variations, the boring scaffolding — not for the final word.' },
      { label: { en: 'Validate', ga: 'Bailíochtaigh' }, body: 'A competent Irish speaker checks grammar, register and terminology. This step is not optional and cannot be delegated to the model.' },
      { label: { en: 'Adapt', ga: 'Oiriúnaigh' }, body: 'Dialect, place, audience, house style. Translated Irish and written Irish are not the same craft.' },
      { label: { en: 'Publish', ga: 'Foilsigh' }, body: 'A named person approves. What goes out under your name is yours.' },
    ],
  },
]
