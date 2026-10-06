import type { SessionMeta, SlideGroup, TimetableSlot } from './types'
import { S3 } from './session3Content'

/* Session 3 — half day (contract: "Session 3 — Half Day (Week 6)"): Friday 9 October 2026, 10:00–13:00, hybrid.
 * Timetable, exercises and Irish wording come from the same source as the slides and Word
 * documents (scripts/session3). Irish reused from the native-reviewed Session 1/2 decks is
 * copied exactly; all new Irish is grammar-checked but awaiting native review (needsValidation). */

const bi = (b: { readonly ga: string; readonly en: string }) => ({ ga: b.ga, en: b.en, needsValidation: true })

const timetable: TimetableSlot[] = S3.TIMETABLE.map(t => ({
  time: t.time,
  kind: t.kind,
  title: bi(t.title),
  ...(t.detail ? { detail: t.detail.en } : {}),
}))

const s = (n: number, ga: string, en: string, note?: string) => ({ n, title: { ga, en, needsValidation: true }, ...(note ? { note } : {}) })

const slideGroups: SlideGroup[] = [
  {
    id: 's3g1', range: '1–7', title: { ga: 'Fáilte ar ais agus trí chúntóir', en: 'Welcome back, and three assistants', needsValidation: true },
    slides: [
      s(1, 'An Ghaeilge i ré AI', 'Title'),
      s(2, 'Clár ama', 'Timetable'),
      s(3, 'Fáilte ar ais', 'Your workflow, and where it broke'),
      s(4, 'Cé na huirlisí atá agat inniu?', 'Which tools can you open today?'),
      s(5, 'Trí chúntóir AI', 'ChatGPT, Claude and Microsoft Copilot'),
      s(6, 'Saor in aisce, íoctha nó oibre?', 'Free, paid or organisational'),
      s(7, 'Taispeántas: an cheist chéanna', 'Live demo: one question, three tools'),
    ],
    callout: { label: 'Verified', body: `Product features checked against the vendors’ own pages on ${S3.CHECKED}. They change often — re-check before use.` },
  },
  {
    id: 's3g2', range: '8–11', title: { ga: 'An prompt céanna, trí chóras', en: 'Same prompt, three systems', needsValidation: true },
    slides: [
      s(8, 'Comharchumann Chois Cuain', 'The fictional scenario and fact card'),
      s(9, 'An prompt céanna, trí chóras', 'One prompt, word for word, in each tool'),
      s(10, 'Cuir i gcomparáid: cúig cheist', 'Language · Meaning · Culture · Usefulness · Trust'),
      s(11, 'Is é an tasc a shocraíonn', 'No tool is always best'),
    ],
  },
  {
    id: 's3g3', range: '12–17', title: { ga: 'Níos faide ná an chatbot', en: 'AI beyond the chatbot', needsValidation: true },
    slides: [
      s(12, 'Níos faide ná an chatbot', 'Question → answer, or sources → evidence → decision'),
      s(13, 'Sruth oibre doiciméad AI', 'Gather · Check · Choose · Ask · Analyse · Evidence · Decide'),
      s(14, 'Seiceáil sula n-uaslódálann tú', 'STOP, for documents'),
      s(15, 'An fillteán: ocht bhfoinse', 'The fictional source pack, and three ways in'),
      s(16, 'Tabhair fillteán do AI', 'Seven steps in Gemini Notebook (formerly NotebookLM) or any assistant'),
      s(17, 'Freagra → Foinse → Fianaise → Breithiúnas daonna', 'Evidence tracing'),
    ],
    callout: { label: 'The skill', body: 'Document-grounded AI analysis. Gemini Notebook is the example; the workflow is what participants keep.' },
  },
  {
    id: 's3g4', range: '18–24', title: { ga: 'An Ghaeilge i ré AI', en: 'Irish in the age of AI', needsValidation: true },
    slides: [
      s(18, 'Sos', 'Break'),
      s(19, 'An Ghaeilge i ré AI', 'An apprentice in a library'),
      s(20, 'An príomhsmaoineamh', 'Five plain words'),
      s(21, 'Dhá thaobh an scéil', 'What AI can do for Irish — and what can go wrong'),
      s(22, 'Cén Ghaeilge?', 'Which Irish? Dialects, the written standard, and the Múscraí Gaeltacht'),
      s(23, 'Cad a deir an taighde?', 'Two 2025 research snapshots', 'IRLBench and Irish-BLiMP, with the caveat that models change.'),
      s(24, 'An deis', 'The opportunity'),
    ],
    callout: { label: 'Which Irish?', body: 'AI does not simply work with “Irish”: it works with particular varieties, registers and usages. The question is not only “is this correct?” but “is this appropriate for this community?”' },
  },
  {
    id: 's3g5', range: '25–30', title: { ga: 'Dúshlán na Gaeilge', en: 'The Irish-language challenge', needsValidation: true },
    slides: [
      s(25, 'Údarás teanga daonna', 'AI generates → speaker/community recognises → local knowledge checks → human edits → approval'),
      s(26, 'An tseiceáil IRISH', 'Intent · Register · Irish · Sense · Human — plus dialect and local context'),
      s(27, 'Roimh, tar éis, ag an deireadh', 'STOP · IRISH · Approval'),
      s(28, 'Dúshlán A: Léamh profaí', 'Nine problems in an AI draft'),
      s(29, 'Cén Ghaeilge? Bain triail as', 'Prompt A vs a Múscraí prompt — what would you change?'),
      s(30, 'Dúshlán B: Doiciméid Ghaeilge', 'AI analysis of Irish-language documents, incl. source 8'),
    ],
  },
  {
    id: 's3g6', range: '31–36', title: { ga: 'Sruth oibre, socruithe agus cás fíorshaoil', en: 'Workflow, settings and the real-world challenge', needsValidation: true },
    slides: [
      s(31, 'Cén sruth oibre? Cén uirlis?', 'Five tasks, four workflows'),
      s(32, 'Sé shocrú a bhfuil tábhacht leo', 'Six settings that matter'),
      s(33, 'Cá bhfuil na socruithe príobháideachta?', 'Where the privacy settings are'),
      s(34, 'Cad a d’athraigh?', 'Plan 2025 against plan 2026'),
      s(35, 'Roghnaigh aschur amháin', 'One output; optional Múscraí audience'),
      s(36, 'Ní hé AI a cheadaíonn', 'Final human approval'),
    ],
  },
  {
    id: 's3g7', range: '37–40', title: { ga: 'Foireann uirlisí agus machnamh', en: 'Toolkit and reflection', needsValidation: true },
    slides: [
      s(37, 'M’fhoireann uirlisí AI', 'My AI toolkit'),
      s(38, 'A bhfuil pléite againn inniu', 'What we said today'),
      s(39, 'Ar aghaidh go Seisiún 4', 'Reflection, the task between sessions, the concerns wall'),
      s(40, 'Go raibh maith agaibh', 'Closing'),
    ],
  },
]

export const session3: SessionMeta = {
  id: 's3',
  index: 'Session 3',
  title: bi(S3.META.title),
  strapline: { ga: S3.META.strapline.ga, en: S3.META.strapline.en },
  duration: `Half day · ${S3.META.time} · ${S3.META.date.en} · hybrid`,
  week: 'Week 6',
  location: `${S3.META.venue} + Microsoft Teams`,
  centralQuestion: bi(S3.META.question),
  secondaryQuestion: bi(S3.META.theme),
  narrative: { ga: S3.PRINCIPLE[3].ga, en: S3.PRINCIPLE[3].en, needsValidation: true },
  outcomes: S3.OUTCOMES.map(o => o.en),
  timetable,
  slideGroups,
  exercises: [
    { id: 's3-compare', number: 'Part 3', kind: 's3-compare', minutes: 25,
      title: bi({ ga: 'An prompt céanna, trí chóras AI', en: 'Same prompt, three AI systems' }),
      purpose: 'Run one realistic Irish-language task in ChatGPT, Claude and Copilot, then compare on language, meaning, culture, usefulness and trust.',
      lesson: 'Different tools can behave differently. The best tool depends on the task.' },
    { id: 's3-notebook', number: 'Part 4', kind: 's3-notebook', minutes: 30,
      title: bi({ ga: 'Níos faide ná an chatbot: tabhair fillteán do AI', en: 'AI beyond the chatbot: give AI a folder' }),
      purpose: 'Check eight fictional sources before upload, ask questions across them in Gemini Notebook (formerly NotebookLM) or any assistant, and trace a claim back to its source.',
      lesson: 'AI output is not evidence. Answer → Source → Evidence → Human judgement.' },
    { id: 's3-irish', number: 'Part 6 · A', kind: 's3-irish', minutes: 12,
      title: bi({ ga: 'An tseiceáil IRISH agus léamh profaí', en: 'The IRISH check and proofreading' }),
      purpose: 'Five questions after every Irish text from AI, then find nine problems in an AI draft.',
      lesson: 'A grammar checker finds some problems. A person finds the rest.' },
    { id: 's3-dialect', number: 'Part 6 · Cén Ghaeilge?', kind: 's3-dialect', minutes: 8,
      title: bi({ ga: 'Cén Ghaeilge?', en: 'Which Irish?' }),
      purpose: 'The same English, two prompts — one plain, one for a Múscraí audience. Mark what you would change and why: grammar, vocabulary, register, local preference or English influence.',
      lesson: 'A more specific prompt can provide context, but a prompt cannot turn an AI model into a dialect expert.' },
    { id: 's3-irishdocs', number: 'Part 6 · B', kind: 's3-irishdocs', minutes: 8,
      title: bi({ ga: 'Doiciméid Ghaeilge', en: 'Irish-language documents' }),
      purpose: 'Ask the AI to summarise the Irish feedback, compare the Irish and English fact sheets and explain what is unclear — then judge how well it understood the Irish.',
      lesson: 'AI can help us work with Irish-language information. That does not make it an authority on Irish.' },
    { id: 's3-which', number: 'Part 7', kind: 's3-which', minutes: 6,
      title: bi({ ga: 'Cén sruth oibre?', en: 'Which workflow?' }),
      purpose: 'Five realistic tasks, four workflows: chat, assistant with files, source notebook, or no AI / anonymise first.',
      lesson: 'There is no single right tool. The task, the sources and the risk decide.' },
    { id: 's3-settings', number: 'Part 7 · reference', kind: 's3-settings', minutes: 4,
      title: bi({ ga: 'Socruithe AI a bhfuil tábhacht leo', en: 'AI settings that matter' }),
      purpose: 'Six settings — standing instructions, memory, temporary chat, training data, projects, work vs personal account — in your own tool.',
      lesson: 'No setting grants permission. STOP still applies.' },
    { id: 's3-scenario', number: 'Part 8', kind: 's3-scenario', minutes: 20,
      title: bi({ ga: 'Cás fíorshaoil: Comharchumann Chois Cuain', en: 'Real-world challenge: Comharchumann Chois Cuain' }),
      purpose: 'What changed between last year’s plan and this year’s? Then one output, checked and approved by a named person.',
      lesson: 'What is missing is the easiest thing to miss. A named person approves.' },
    { id: 's3-toolkit', number: 'Part 9', kind: 's3-toolkit', minutes: 7,
      title: bi({ ga: 'M’fhoireann uirlisí AI', en: 'My AI toolkit' }),
      purpose: 'Two tools, a document-analysis workflow, three prompts, a safety rule, an Irish-checking rule, a task for next week and one thing never delegated.',
      lesson: 'Specific beats general: one tool, one task, one person who checks your Irish.' },
    { id: 's3-reflection', number: 'Part 9', kind: 's3-reflection', minutes: 3,
      title: bi({ ga: 'Machnamh', en: 'Reflection' }),
      purpose: 'Two sentences, written alone, and the bridge to Session 4.' },
    { id: 's3-translate', number: 'Optional', kind: 's3-translate',
      title: bi({ ga: 'Aistriúchán: Gaeilge → Béarla', en: 'Translation: Irish → English (optional extension)' }),
      purpose: 'Translate a culturally loaded community notice in two tools and check meaning, tone, names, idiom and ambiguity.',
      lesson: 'Some words carry a culture. Good translation keeps them and explains them.' },
  ],
  keyMessages: [
    'AI for Irish — not AI instead of Irish.',
    'AI can write Irish. That does not make AI an authority on Irish.',
    'Different tools give different results. The task determines what matters.',
    'AI output is not evidence: Answer → Source → Evidence → Human judgement.',
    'AI can generate Irish. That does not mean it understands the linguistic variety, community or cultural context in which it is used.',
    'For a Múscraí audience the question is not only “Is this correct Irish?” but “Is this appropriate Irish for this community?”',
    'The more information we give an AI system, the more carefully we need to think about what it contains.',
    'IRISH after every AI-generated Irish text: Intent, Register, Irish, Sense, Human.',
    'The future of Irish in AI will also be shaped by how people use, evaluate, correct and create with it.',
  ],
  irishComponent:
    'The whole session. Participants compare AI-generated Irish across three tools, proofread an AI draft with planted problems, check an AI’s analysis of Irish-language documents (and the gaps between the Irish and English versions), and apply the IRISH check and a human-language-authority workflow. Irish reused from earlier sessions is copied exactly; all new Irish is marked as awaiting native-speaker validation.',
  safetyComponent:
    'STOP before anything goes in — including before documents are uploaded — IRISH after any Irish comes out, and a named person approves. Six settings that affect privacy and data handling. Every exercise uses fictional material; no paid account or new account is required.',
  outputs: [
    'A scored comparison of three AI systems on the same Irish-language task.',
    'A source-grounded briefing with one claim traced to its evidence.',
    'A checked list of what changed between two plans.',
    'A proofread AI draft and a checked translation.',
    'Your settings checked on your own account.',
    'An approved (or honestly “not yet”) piece of bilingual communication for the fictional co-op.',
    'A personal AI toolkit to use next week.',
  ],
  betweenAfter: {
    id: 'b3',
    title: bi(S3.BETWEEN.title),
    brief: S3.BETWEEN.brief.en,
    steps: [],
    fields: ['The task', 'The tool I used', 'The AI version', 'My corrected version', 'What I changed', 'Who checked the Irish'],
  },
}
