/**
 * Session 1 story layer — the narrative frame over the existing content
 * in session1.ts. This file adds NOTHING new to what is taught; it cross-
 * references the slide numbers, exercise ids and multimedia ids that
 * already exist so the PowerPoint, the website and the workshop sheets
 * can all point at the same six acts without three separately maintained
 * copies of the same structure.
 *
 * IDs follow S1-A{act}, S1-{slide number}, S1-W{workshop}, S1-D{demo} —
 * layered on top of the existing session1.ts ids (s1g*, e1–e5b, slide n)
 * rather than replacing them.
 */

export const STORY_CHARACTER = {
  name: 'Aoife',
  role: 'Works in a small Gaeltacht organisation — funding proposals, a newsletter, customer queries, some Irish, some English.',
  note: 'No further biography is invented. Aoife exists only to give the day continuity, the way "a participant" would in a live room.',
}

export const OPENING_SCENE = {
  time: '08:47',
  label: 'Monday morning',
  line: 'Someone says: "Why don’t you use AI?"',
  tasks: ['Emails', 'Newsletter', 'Funding proposal', 'Survey feedback', 'Documents', 'Irish + English'],
  questions: [
    'Could AI help?',
    'What would you trust it with?',
  ],
}

export const CLOSING_SCENE = {
  time: '15:20',
  label: 'Monday, later',
  line: 'Aoife’s working day is nearly over.',
  questions: [
    'What would you do differently tomorrow morning?',
    'What is YOUR first AI experiment?',
  ],
}

export interface StoryAct {
  id: string
  act: number
  title: string
  question: string
  beat: string
  slideIds: string[]
  exerciseIds?: string[]
  multimediaIds?: string[]
}

export const STORY_ACTS: StoryAct[] = [
  {
    id: 'S1-A1',
    act: 1,
    title: 'AI has already entered the room',
    question: 'How much AI have you already used before 9am?',
    beat: 'A short welcome, then Mary takes us through protecting ourselves online. Now we ask a different question: how do we invite AI in without giving up our judgement?',
    slideIds: Array.from({ length: 12 }, (_, i) => `S1-${i + 1}`),
  },
  {
    id: 'S1-A2',
    act: 2,
    title: 'What are we actually dealing with?',
    question: 'Wait — what actually IS AI?',
    beat: 'From Aoife’s everyday experience of AI to the honest answer on Irish, the "why Irish matters" moment, and then the technology itself: traditional software, machine learning, generative AI, and how a language model actually generates a sentence.',
    slideIds: Array.from({ length: 18 }, (_, i) => `S1-${i + 13}`),
    multimediaIds: ['S1-V1', 'S1-V2', 'S1-V4-PLACEHOLDER'],
  },
  {
    id: 'S1-A3',
    act: 3,
    title: 'AI as a workplace assistant',
    question: 'Could it help me?',
    beat: 'Aoife tries AI on five real tasks — each one: real problem → prompt → output → what might go wrong → what would you check → human decision — then a real case (not a demo): could AI get this wrong even when it looks fine?',
    slideIds: Array.from({ length: 10 }, (_, i) => `S1-${i + 31}`),
    exerciseIds: [],
  },
  {
    id: 'S1-A4',
    act: 4,
    title: 'The moment AI fools us',
    question: 'Would you believe this?',
    beat: 'A real case (AI-generated GAA match-programme artwork, May 2024 — genuinely posted, shown as the original screenshot): culturally recognisable, not culturally appropriate. Fluent is not the same as factual — introduced early, this is where it lands this afternoon. The deeper fictional-paragraph exercise built on the same idea (Workshop 4) is not run in Session 1 — it moves to Session 2.',
    slideIds: ['S1-27', 'S1-28', 'S1-39', 'S1-40'],
    multimediaIds: ['S1-GAA1', 'S1-GAA2'],
  },
  {
    id: 'S1-A5',
    act: 5,
    title: 'Now you are the reviewer',
    question: 'Should AI do this? Not just "can it."',
    beat: 'Two workshops, one mission each, with a reflection straight after: help Aoife decide where AI fits, then sharpen a weak prompt. The deeper AI-judges-AI exercise (Workshop 3) is not run in Session 1 — it moves to Session 2. STOP is introduced as a method to carry forward.',
    slideIds: Array.from({ length: 7 }, (_, i) => `S1-${i + 41}`),
    exerciseIds: ['e1', 'e1r', 'e2', 'e2r'],
  },
  {
    id: 'S1-A6',
    act: 6,
    title: 'Back to Monday morning',
    question: 'What would you do differently tomorrow morning?',
    beat: 'Aoife’s day is ending. We close the loop: what is YOUR first AI experiment?',
    slideIds: Array.from({ length: 5 }, (_, i) => `S1-${i + 48}`),
    exerciseIds: ['e5b'],
  },
]

/** The interactive "you decide" moment — the only place the fictional
 *  character is used for a graded/branching decision, deliberately once,
 *  not gamified further. */
export const AOIFE_DECISION = {
  id: 'S1-DECIDE',
  prompt:
    'AI has drafted this reply for Aoife to send to a customer: "Thank you for your enquiry — yes, we can confirm your order qualifies for our loyalty discount and will be dispatched within 24 hours."',
  context: 'Aoife has not checked whether this customer is actually enrolled in a loyalty scheme, or what the real dispatch time is.',
  options: [
    {
      id: 'accept',
      label: 'Accept',
      outcome: 'Risky',
      reasoning: 'It reads perfectly — which is exactly why it is dangerous to send unchecked. Two specific, checkable claims (loyalty status, dispatch time) are stated as fact with no evidence they are true.',
    },
    {
      id: 'check',
      label: 'Check',
      outcome: 'Right call',
      reasoning: 'Confirm the loyalty status and the real dispatch time before anything goes to the customer. This costs two minutes and prevents a promise Aoife cannot keep.',
    },
    {
      id: 'rewrite',
      label: 'Rewrite',
      outcome: 'Only after checking',
      reasoning: 'Rewriting the tone without checking the two factual claims first just produces a better-written version of the same problem.',
    },
    {
      id: 'reject',
      label: 'Reject',
      outcome: 'Overcautious, but never wrong to be cautious',
      reasoning: 'Not wrong — but throws away a perfectly good draft. The structure and tone are fine; only two facts need verifying.',
    },
  ],
  lesson: 'The AI is not wrong to draft this. It is wrong to send it unchecked. That distinction is the whole of Session 1.',
}
