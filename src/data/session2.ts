import type { SessionMeta, SlideGroup, TimetableSlot } from './types'
import { S2 } from './session2Content'

/* Session 2 — Monday 28 September 2026, 10:00–13:00 (half day).
 * Timetable, exercises and Irish wording come from the same source as the slides and Word
 * documents (scripts/session2). All Irish is grammar-checked and dictionary-checked but still
 * awaiting a native-speaker read, so it carries needsValidation. */

const bi = (b: { readonly ga: string; readonly en: string }) => ({ ga: b.ga, en: b.en, needsValidation: true })

const timetable: TimetableSlot[] = S2.TIMETABLE.map(t => ({
  time: t.time,
  kind: t.kind,
  title: bi(t.title),
  ...('detail' in t && t.detail ? { detail: t.detail.en } : {}),
}))

const s = (n: number, ga: string, en: string, note?: string) => ({ n, title: { ga, en, needsValidation: true }, ...(note ? { note } : {}) })

const slideGroups: SlideGroup[] = [
  {
    id: 's2g1', range: '1–4', title: { ga: 'Fáilte ar ais', en: 'Welcome back', needsValidation: true },
    slides: [
      s(1, 'Seisiún 2', 'Title'),
      s(2, 'Clár ama', 'Timetable'),
      s(3, 'Fáilte ar ais', 'Welcome back'),
      s(4, 'Do thrí thriail', 'Your three experiments'),
    ],
    callout: { label: 'Design note', body: 'The session is built on what participants bring back from their own three experiments — failures first.' },
  },
  {
    id: 's2g2', range: '5–7', title: { ga: 'Cad a chuaigh amú?', en: 'What went wrong?', needsValidation: true },
    slides: [
      s(5, 'Cad a chuaigh amú?', 'Nine kinds of failure'),
      s(6, 'Cén tseiceáil a ghabhann é?', 'Which check catches it?'),
      s(7, 'Do theipeanna féin', 'Your own failures'),
    ],
  },
  {
    id: 's2g3', range: '8–10', title: { ga: 'An tástáil STOP', en: 'The STOP test', needsValidation: true },
    slides: [
      s(8, 'An tástáil STOP', 'Source · Trust · Ownership · Privacy'),
      s(9, 'Dhá STOP, dhá threo', 'Two STOPs: what comes out, what goes in'),
      s(10, 'STOP i bhfeidhm', 'Six cases: go, fix first, or stop'),
    ],
    callout: { label: 'Two STOPs', body: 'Session 1’s STOP (Stop · Think · Observe · Proceed) is for what comes OUT of AI. Session 2’s STOP (Source · Trust · Ownership · Privacy) is for what goes IN.' },
  },
  {
    id: 's2g4', range: '11–14', title: { ga: 'Príobháideacht agus rúndacht', en: 'Privacy and confidentiality', needsValidation: true },
    slides: [
      s(11, 'Príobháideacht, rúndacht agus sonraí pearsanta', 'Three kinds of information'),
      s(12, 'Na rialacha go gairid', 'The rules on one slide (GDPR, AI Act Articles 4 and 50)', 'Educational, not legal advice.'),
      s(13, 'Cártaí a rangú', 'Sort twelve cards'),
      s(14, 'Déan sábháilte é', 'Make it safe'),
    ],
    callout: { label: 'Framing', body: 'Educational guidance — not legal advice. Checked against the primary EU texts; see the AI Act page for detail.' },
  },
  {
    id: 's2g5', range: '15–28', title: { ga: 'Ó AI go hObair', en: 'From AI to work', needsValidation: true },
    slides: [
      s(15, 'Sos', 'Break'),
      s(16, 'Ó AI go hObair', 'The chain: Proposal → AI review → Human revision → AI promotion → Human approval'),
      s(17, 'Dúshlán 1: AI → AI', 'Challenge 1'),
      s(18, 'Seiceáil an prompt', 'Check the prompt'),
      s(19, 'Dúshlán 2: Togra → Athbhreithniú', 'Challenge 2'),
      s(20, 'An prompt tagartha', 'Reference reviewer prompt'),
      s(21, 'Eagarthóireacht dhaonna', 'Human revision: accept, edit or reject'),
      s(22, 'Naoi seiceáil', 'Nine checks'),
      s(23, 'Seiceálacha Gaeilge', 'Irish-language checks'),
      s(24, 'Dúshlán 3: Togra → Cur chun cinn', 'Challenge 3: AI-assisted communication'),
      s(25, 'An prompt do Dhúshlán 3', 'Prompt template'),
      s(26, 'Ná lig do AI iad seo a chumadh', 'What AI must not invent'),
      s(27, 'Canva agus dearadh', 'Canva helps with presentation; it does not verify facts'),
      s(28, 'Ní hé AI a cheadaíonn', 'Final human approval'),
    ],
    callout: { label: 'The chain', body: 'AI can draft, review and suggest. A person checks, revises and approves.' },
  },
  {
    id: 's2g6', range: '29–33', title: { ga: 'Sruth oibre sábháilte', en: 'A safe workflow, and the bridge', needsValidation: true },
    slides: [
      s(29, 'Sruth oibre sábháilte AI', 'Task → Source → Prompt → Generate → Verify → Improve → Approve'),
      s(30, 'Do shruth oibre féin', 'Your own workflow'),
      s(31, 'A bhfuil pléite againn inniu', 'What we said today'),
      s(32, 'Ar aghaidh go Seisiún 3', 'Bridge to Session 3'),
      s(33, 'Go raibh maith agaibh', 'Closing'),
    ],
  },
]

export const session2: SessionMeta = {
  id: 's2',
  index: 'Session 2',
  title: bi(S2.META.title),
  strapline: bi(S2.META.strapline),
  duration: 'Half day · 10:00–13:00 · Monday 28 September 2026',
  week: 'Week 4',
  location: S2.META.venue,
  centralQuestion: bi(S2.META.question),
  narrative: { en: 'AI can draft. AI can review. AI can suggest. AI does not approve.', ga: 'Ní hé AI a cheadaíonn.', needsValidation: true },
  outcomes: [
    'Name nine ways AI output goes wrong, and the check that catches each.',
    'Run the STOP test — Source, Trust, Ownership, Privacy — before putting anything into an AI tool.',
    'Tell personal data, confidential information and public information apart, and make a piece of text safe to use.',
    'State in plain language what the AI Act and data-protection rules ask of a small organisation — as educational guidance, not legal advice.',
    'Review a proposal with AI, decide what to accept, edit or reject, and verify the rest by hand.',
    'Turn a verified summary into an announcement, a social post and an email invitation, in Irish and in English, and check every one before it goes anywhere.',
    'Build a safe workflow for a real task, with a named person who approves.',
  ],
  timetable,
  slideGroups,
  exercises: [
    { id: 'e6', number: 'Exercise 6', kind: 's2-failures', minutes: 20,
      title: bi({ ga: 'Cad a chuaigh amú?', en: 'What went wrong?' }),
      purpose: 'Nine kinds of failure, sorted against participants’ own experiments, each with the check that would have caught it.',
      lesson: 'Most failures are caught by one plain check made at the right moment.' },
    { id: 'e7', number: 'Exercise 7', kind: 's2-stop', minutes: 20,
      title: bi({ ga: 'An tástáil STOP', en: 'The STOP test' }),
      purpose: 'Four questions before information goes into an AI tool, then six cases: go, fix first or stop.',
      lesson: 'A check you can remember beats a policy you cannot.' },
    { id: 'e8', number: 'Exercise 8', kind: 's2-privacy', minutes: 25,
      title: bi({ ga: 'Príobháideacht: cártaí a rangú', en: 'Privacy: sort the cards' }),
      purpose: 'Twelve cards sorted green, amber or red, then a fictional complaint made safe.',
      lesson: 'Confidential is not the same as personal, and neither is the same as public.' },
    { id: 'e9', number: 'Challenge 1', kind: 's2-ai-to-ai', minutes: 10,
      title: bi({ ga: 'Dúshlán 1: AI → AI', en: 'Challenge 1: AI → AI' }),
      purpose: 'One AI designs a reviewer prompt for another. People check it against six questions.',
      lesson: 'A better prompt does not guarantee a correct answer.' },
    { id: 'e9b', number: 'Challenge 2', kind: 's2-review', minutes: 18,
      title: bi({ ga: 'Dúshlán 2: Togra → Athbhreithniú', en: 'Challenge 2: Proposal → Review' }),
      purpose: 'A fictional training proposal is reviewed by AI and by people, and revised by a human who accepts, edits or rejects each suggestion.',
      lesson: 'Review first, rewrite second. AI misses some things and invents others.' },
    { id: 'e9c', number: 'Challenge 3', kind: 's2-promotion', minutes: 22,
      title: bi({ ga: 'Dúshlán 3: Togra → Cur chun cinn', en: 'Challenge 3: Proposal → Promotion' }),
      purpose: 'From one verified summary, AI drafts an Irish announcement, an English version, a social post and an email invitation; people run nine checks and approve.',
      lesson: 'AI can draft. AI can review. AI can suggest. AI does not approve.' },
    { id: 'e9d', number: 'Exercise 9', kind: 's2-workflow', minutes: 5,
      title: bi({ ga: 'Sruth oibre sábháilte AI', en: 'A safe AI workflow' }),
      purpose: 'A real task taken through seven steps — Task, Source, Prompt, Generate, Verify, Improve, Approve — with a named approver.',
      lesson: 'If nobody approves it, it is not finished.' },
    { id: 'e10', number: 'Reflection', kind: 's2-reflection', minutes: 5,
      title: bi({ ga: 'Machnamh', en: 'Reflection' }),
      purpose: 'Three sentences, written alone, and the bridge to Session 3.' },
  ],
  keyMessages: [
    'Don’t trust what you haven’t checked.',
    'STOP before it goes in: Source, Trust, Ownership, Privacy.',
    'Confidential is not the same as personal, and neither is the same as public.',
    'AI-generated Irish is always checked by a person with good Irish.',
    'AI can draft. AI can review. AI can suggest. AI does not approve.',
  ],
  irishComponent:
    'Every participant-facing page is Irish first, with English support. In the workshop, one verified summary becomes an Irish announcement, a natural English version, a social post and an email invitation — and the Irish is checked against the English and against the facts. New Irish wording is looked up in the dictionaries and Téarma, never invented, and is marked as awaiting native-speaker validation.',
  safetyComponent:
    'The STOP test for what goes in, the privacy sort, and one plain rule for the whole session: nothing real goes into a public AI tool. Every exercise uses fictional material. The AI Act and data-protection points are educational guidance, not legal advice.',
  outputs: [
    'A sorted list of your own AI failures, each with its check.',
    'A verified eight-line summary of a fictional proposal.',
    'Four checked pieces of communication, or a clear note of what is missing.',
    'A safe workflow for one real task, with a named approver.',
  ],
  betweenAfter: {
    id: 'b2',
    title: bi(S2.BETWEEN.title),
    brief: S2.BETWEEN.brief.en,
    steps: [],
    flow: ['Task', 'Source', 'Prompt', 'Generate', 'Verify', 'Improve', 'Approve'],
    fields: ['The task', 'How often it happens', 'The source you would use', 'Where AI enters', 'Where a person checks', 'Who approves'],
  },
}
