import type { SessionMeta } from './types'

/**
 * SESSION 1 — kept in sync with
 * Udaras_AI_Course_Session_1_MTU_v6.0_DRAFT.pptx (52 slides): a
 * pedagogical redesign of the afternoon down to TWO workshops (Can AI
 * help me? / The prompt challenge), each followed by a short reflection,
 * instead of four. Workshop 3 (AI judges AI) and Workshop 4 (Trust,
 * verify, improve) are no longer run as Session 1 participant
 * workshops — their concepts (AI can be wrong, output needs checking,
 * Irish needs human judgement) are still taught in passing, and the
 * deeper exercises are reserved for Session 2 (see `Session 2 preview`
 * below and `docs/session1-course-map.md`). Their underlying components
 * (RubricScore.tsx, ErrorSpot.tsx) and content (exerciseContent.ts) are
 * kept in the codebase, not deleted, for that future move.
 *
 * The day itself is also reordered: Welcome and expectations (10:00)
 * now comes BEFORE Mary's cybersecurity foundations (10:05), not after.
 *
 * See src/data/exerciseContent.ts for the workshop/reflection payloads,
 * src/data/story1.ts for the six-act story layer, and
 * src/data/multimedia.ts for the video/diagram registry. Slide ids used
 * elsewhere (story1.ts, multimedia.ts, the PPTX, the workshop sheets) are
 * S1-<n>, matching the `n` field on each slide below — this file's slide
 * count and numbering are the single source of truth and must always
 * match the live PPTX exactly (no intentional mismatch).
 */
export const session1: SessionMeta = {
  id: 's1',
  index: 'Session 1',
  title: { en: 'Understanding AI: Opportunity, Limitations and Trust', ga: 'Tuiscint ar AI: Deis, Teorainneacha agus Muinín', needsValidation: true },
  strapline: { en: 'Don’t fear what you don’t understand.', ga: 'Ná bíodh eagla ort roimh rud nach dtuigeann tú.', needsValidation: true },
  duration: '10:00–15:30 · welcome first, then Mary’s cybersecurity foundations from 10:05',
  week: 'Week 2',
  location: 'Campas Íosagáin',
  centralQuestion: {
    en: 'What is AI, why does it matter to my work, and why should I not blindly trust it?',
    ga: 'Cad is AI ann, cén tábhacht atá leis do mo chuid oibre, agus cén fáth nár cheart dom muinín dhall a bheith agam as?',
    needsValidation: true,
  },
  narrative: { en: 'Fluent is not the same as factual.', ga: 'Ní hionann líofa agus fírinneach.', needsValidation: true },
  outcomes: [
    'Explain in plain language what AI is doing — to a colleague, without jargon.',
    'Identify realistic workplace tasks where AI may genuinely help.',
    'Identify tasks or information that should remain under human control.',
    'Write a clearer, more useful prompt.',
    'Recognise that better prompting does not guarantee factual accuracy.',
    'Identify the need for human checking, and name who does it.',
    'Recognise the additional care required for Irish-language output.',
    'Plan one safe, realistic AI experiment for their own work.',
    'State the basic purpose of AI literacy under the EU AI Act (the detail is covered in Session 2).',
  ],
  timetable: [
    { time: '10:00–10:05', kind: 'reflect',  title: { en: 'Welcome and expectations', ga: 'Fáilte agus ionchais', needsValidation: true }, detail: 'Five minutes, then straight to Mary. Not a technical AI course; scepticism is welcome; today’s structure and ground rules.' },
    { time: '10:05–10:25', kind: 'teach',    title: { en: 'Cybersecurity foundations', ga: 'Bunphrionsabail na cibearshlándála', needsValidation: true }, detail: 'Delivered by Mary. Protecting ourselves and our organisation online — her own material, not part of this deck.' },
    { time: '10:25–10:35', kind: 'reflect',  title: { en: 'What do you think? (the concerns wall)' }, detail: 'Three quick questions and a concerns wall, recorded live and answered across the programme.' },
    { time: '10:35–10:55', kind: 'teach',    title: { en: 'AI in the Irish context', ga: 'AI i gcomhthéacs na hÉireann', needsValidation: true }, detail: 'The honest answer on what AI can and cannot do with Irish, and the "Why Irish matters" moment.' },
    { time: '10:55–11:15', kind: 'teach',    title: { en: 'What actually is AI?' }, detail: 'Traditional software → machine learning → generative AI.' },
    { time: '11:15–11:30', kind: 'break',    title: { en: 'Coffee break', ga: 'Sos caife' } },
    { time: '11:30–11:55', kind: 'activity', title: { en: 'Software, automation or AI?' }, detail: 'Six examples, sorted. Two of them split the room, and that split is the lesson.' },
    { time: '11:55–12:15', kind: 'teach',    title: { en: 'Large language models' }, detail: 'Prompt → model → output. Prediction is not understanding; fluent is not the same as factual.' },
    { time: '12:15–12:25', kind: 'activity', title: { en: 'Live demonstration' }, detail: 'The same question, put to three audiences, run without tidying the results.' },
    { time: '12:25–13:10', kind: 'break',    title: { en: 'Lunch break', ga: 'Sos lóin' } },
    { time: '13:10–13:30', kind: 'teach',    title: { en: 'What can AI do for my work?' }, detail: 'Five short live demonstrations. AI as an assistant, not an authority — what to delegate, what to supervise, what to keep human. What never goes into a public AI tool.' },
    { time: '13:30–13:40', kind: 'teach',    title: { en: 'Real case: could AI get this wrong?' }, detail: 'The real GAA match-programme artwork case (Irish Independent, 18 May 2024) — clearly a REAL case, not the fictional exercise.' },
    { time: '13:40–14:05', kind: 'lab',      title: { en: 'Workshop 1 — Can AI help me?', ga: 'Ceardlann 1 — An féidir le AI cabhrú liom?', needsValidation: true }, detail: '5 groups of 3: task owner, AI operator, checker. Twenty-five minutes on a real task, then a 60-second report.' },
    { time: '14:05–14:15', kind: 'reflect',  title: { en: 'Reflection 1 — What did we learn?', ga: 'Machnamh 1 — Cad a d’fhoghlaimíomar?', needsValidation: true }, detail: 'Not a lecture: the facilitator asks, the room answers, 3–5 observations go on the board.' },
    { time: '14:15–14:40', kind: 'lab',      title: { en: 'Workshop 2 — Prompt challenge', ga: 'Ceardlann 2 — Dúshlán na leide', needsValidation: true }, detail: 'Everyone starts from the same weak prompt. Four rungs, run the first and the last live.' },
    { time: '14:40–14:55', kind: 'break',    title: { en: 'Coffee break', ga: 'Sos caife' } },
    { time: '14:55–15:05', kind: 'reflect',  title: { en: 'Reflection 2 — What changed?', ga: 'Machnamh 2 — Cad a d’athraigh?', needsValidation: true }, detail: 'A better prompt can improve an answer. It does not remove the need for judgement.' },
    { time: '15:05–15:20', kind: 'reflect',  title: { en: 'My first AI experiment', ga: 'Mo chéad turgnamh le AI', needsValidation: true }, detail: 'Fifteen minutes, written alone. This is what connects today to Session 2.' },
    { time: '15:20–15:30', kind: 'reflect',  title: { en: 'What we said today, and close' }, detail: 'The concerns wall gets an answer, or an honest "not yet". Session 2 bridge.' },
  ],
  slideGroups: [
    {
      id: 's1g1', range: '1–12', title: { en: 'Opening, welcome and Mary' },
      slides: [
        { n: 1, title: { en: 'Building AI Confidence in the Gaeltacht Workplace' } },
        { n: 2, title: { en: 'Meet Aoife.' }, note: '08:47 · Monday morning. Someone says: "Why don’t you use AI?"' },
        { n: 3, title: { en: 'Her workload grows.' }, note: '09:02 · Emails, funding proposal, survey feedback, newsletter, Irish communication.' },
        { n: 4, title: { en: 'She looks at the workload.' }, note: '09:08 · Could AI actually help? What would you trust it with?' },
        { n: 5, title: { en: 'Welcome and expectations' }, note: '10:00–10:05. Purpose of the day, different experience levels, scepticism welcome, structure, ground rules — then straight to Mary.' },
        { n: 6, title: { en: 'Following on from Mary' }, note: 'From protecting ourselves to inviting AI in — the bridge: cybersecurity asks "what are we allowing in?"; AI asks "what are we handing over, and what will we do with what comes back?"' },
        { n: 7, title: { en: 'Today’s question' }, note: 'What is AI, why does it matter to my work, and why should I not blindly trust it?' },
        { n: 8, title: { en: 'Before we start: what do you think?' }, note: 'Three questions, no wrong answers, nothing argued with today.' },
        { n: 9, title: { en: 'The wall' }, note: 'Concerns recorded live. These are the questions the rest of the programme has to answer.' },
        { n: 10, title: { en: 'All three are true' }, note: 'AI is exciting, useful and worrying. All three positions are reasonable, and all three are partly right.' },
        { n: 11, title: { en: 'How today runs' }, note: 'The fully recalculated timetable: welcome, then Mary; morning to understand; two workshops with a reflection after each in the afternoon.' },
        { n: 12, title: { en: 'Cybersecurity foundations' }, note: '10:05–10:25, delivered by Mary. "What are we allowing into our organisation?" — the question this section answers.' },
      ],
      callout: {
        label: 'The five rules',
        body: 'Be curious · Be sceptical · Protect information · Check AI outputs · Keep humans responsible',
      },
    },
    {
      id: 's1g2', range: '13–30', title: { en: 'What is AI?' },
      slides: [
        { n: 13,  title: { en: 'What is AI?' } },
        { n: 14,  title: { en: 'AI is already around us' }, note: 'Spam filters, maps, banking fraud alerts, phone cameras, predictive text.' },
        { n: 15, title: { en: 'Closer to home' }, note: 'Where is AI already being used in Ireland? Ask the room before showing the slide.' },
        { n: 16, title: { en: 'AI in Irish context' }, note: 'Can AI understand Irish? It can produce Irish, often fluently, and it is markedly better at English than at Irish — a gap in the amount of digital Irish it learned from, not in the language itself. We will not claim a number, benchmark or percentage.' },
        {
          n: 17,
          title: { en: 'Why Irish matters' },
          note:
            'A short, personal research-story moment — not an academic talk (about two minutes). "My research is about language and AI, particularly multilingual and low-resource languages. Irish is a really interesting example because AI systems are much stronger in some languages than others. So today I’m not only interested in what AI can do. I’m interested in asking: can we use AI in a way that strengthens Irish rather than simply asking Irish speakers to adapt to systems built primarily for English?"',
        },
        { n: 18, title: { en: 'AI is not one single technology' }, note: 'An umbrella over quite different things, which is why general claims about "AI" are usually wrong.' },
        { n: 19, title: { en: 'Traditional software' }, note: 'Stage 1 of 3. A person wrote every rule; the machine applies them exactly.' },
        { n: 20, title: { en: 'Machine learning' }, note: 'Stage 2 of 3. Nobody wrote the rules — the system worked them out from examples.' },
        { n: 21, title: { en: 'Generative AI' }, note: 'Stage 3 of 3. It produces something that did not exist before.' },
        { n: 22, title: { en: 'Coffee break', ga: 'Sos caife' } },
        { n: 23, title: { en: 'Software, automation or AI?' }, note: 'Six examples, sorted. Two of them split the room, and that split is the lesson.' },
        { n: 24, title: { en: 'Where each one usually lands' }, note: 'And why the disagreement is the point.' },
        { n: 25, title: { en: 'Large language models' } },
        {
          n: 26,
          title: { en: 'What is a large language model?' },
          note: 'At its core, a language model generates likely continuations from learned patterns. Some AI products can also connect to external information and tools.',
        },
        {
          n: 27,
          title: { en: 'Prediction is not understanding' },
          note: 'By itself, a language model does not automatically know whether what it has generated is true.',
        },
        { n: 28, title: { en: 'Fluent is not the same as factual' }, note: 'The tone of an answer tells you nothing about whether it is true. The single hardest habit to build.' },
        { n: 29, title: { en: 'The prompt is the variable' }, note: 'Live demonstration: the same question, to three audiences, run one after another without tidying the results.' },
        { n: 30, title: { en: 'Lunch break', ga: 'Sos lóin' } },
      ],
      callout: { label: 'AI for Irish', body: 'AI for Irish — not AI instead of Irish.' },
    },
    {
      id: 's1g3', range: '31–40', title: { en: 'AI as a workplace assistant' },
      slides: [
        { n: 31, title: { en: 'What can AI do for my work?' } },
        {
          n: 32,
          title: { en: 'AI as an assistant, not an authority' },
          note: 'A capable, fast, slightly unreliable colleague. DELEGATE: first drafts, alternatives, summaries, structure, scaffolding, second opinions. SUPERVISE: facts, numbers, dates, Irish-language output, anything going out under your name. KEEP HUMAN: decisions about people, sensitive communication, final approval, accountability.',
        },
        {
          n: 33,
          title: { en: 'What never goes into a public AI tool' },
          note: 'The same instinct from Mary’s cybersecurity section, applied: confidential, personal, customer or commercially sensitive information; passwords; private organisational information; sensitive documents; anything policy says must not leave the building. Use fictional, public or anonymised examples.',
        },
        { n: 34, title: { en: 'Live demonstration: generate content' }, note: 'A short promotional post for a fictional Gaeltacht food producer.' },
        { n: 35, title: { en: 'Live demonstration: edit a proposal' }, note: 'Improve the structure of a draft funding proposal without inventing new content.' },
        { n: 36, title: { en: 'Live demonstration: create a newsletter' }, note: 'A short monthly newsletter for a fictional Gaeltacht community organisation.' },
        { n: 37, title: { en: 'Live demonstration: analyse survey feedback' }, note: 'Forty anonymous responses from a fictional training feedback form — what are the three main themes?' },
        { n: 38, title: { en: 'Live demonstration: ask questions of documents' }, note: 'Using only the attached documents — what does this scheme cover, and what does it exclude?' },
        {
          n: 39,
          title: { en: 'Real case: GAA match-programme artwork' },
          note: 'A real, publicly posted X/Twitter case (Barry Masterson, May 2024): AI-generated GAA illustration with distorted hands and an invented crest. "What’s wrong here?" — shown as the original screenshot, unmodified. Source: Irish Independent, "GAA defends use of AI applications to create artwork for match programmes following criticism", 18 May 2024. This is real — kept clearly separate from any fictional exercise, and is not itself a participant task.',
        },
        {
          n: 40,
          title: { en: 'Real case: more than the strange hands' },
          note: 'Zoomed detail on the real artwork: the county name is misspelt on the crest ("CIR COGHAIN" for Tír Eoghain). Reveals: context, culture, community, expertise, human judgement. Key message: AI can be culturally recognisable without being culturally appropriate.',
        },
      ],
    },
    {
      id: 's1g4', range: '41–47', title: { en: 'Two workshops, two reflections' },
      slides: [
        { n: 41, title: { en: 'Afternoon workshops' }, note: 'Workshop 1 → Reflection 1 → Workshop 2 → Reflection 2 → My first experiment. Two workshops, two reflections, 5 groups of 3.' },
        { n: 42, title: { en: 'Workshop 1 — Can AI help me?' }, note: '5 groups of 3: task owner, AI operator, checker — roles can rotate. Twenty-five minutes on a real task, then a 60-second report.' },
        { n: 43, title: { en: 'Reflection 1 — What did we learn?' }, note: 'Ten minutes. Where AI looked useful, where we said no, what surprised us, what we would not give an AI, who stays responsible.' },
        { n: 44, title: { en: 'Workshop 2 — Prompt challenge' }, note: 'Everyone starts from the same weak prompt. Four rungs — run the first and the last live. Leave a marked gap rather than inventing a missing detail; list any Irish terms you were unsure about.' },
        { n: 45, title: { en: 'Coffee break', ga: 'Sos caife' } },
        { n: 46, title: { en: 'Reflection 2 — What changed?' }, note: 'Ten minutes. What changed, what did not, prediction/fluency/Irish-language care, and "a better prompt improves an answer — it does not remove the need for judgement."' },
        { n: 47, title: { en: 'A method you can keep — STOP' }, note: 'Stop · Think · Observe · Proceed. A method to carry forward — the deeper trust/verify exercise built on it moves to Session 2.' },
      ],
    },
    {
      id: 's1g5', range: '48–52', title: { en: 'Closing' },
      slides: [
        { n: 48, title: { en: 'My first AI experiment' }, note: 'Fifteen minutes, written alone, no discussion. Includes: what information will I NOT put into the AI, and who makes the final decision? This is what connects today to Session 2.' },
        { n: 49, title: { en: 'Before Session 2: try AI three times' }, note: 'Also note how long the task took, how long checking took, and whether it was worth using. Bring a failure.' },
        { n: 50, title: { en: 'What we said today' }, note: 'You do not need to become an AI expert. AI is an assistant, not an authority.' },
        { n: 51, title: { en: 'Session 2 preview' }, note: 'Responsible AI and AI for everyday business — including the deeper AI-judges-AI and trust/verify exercises we made room for today.' },
        { n: 52, title: { en: 'Go raibh maith agaibh', needsValidation: true }, note: 'AI is an assistant, not an authority. AI for Irish — not AI instead of Irish.' },
      ],
    },
  ],
  exercises: [
    {
      id: 'e1', number: 'Workshop 1', kind: 'workshop1', minutes: 25,
      title: { en: 'Can AI help me?', ga: 'An féidir le AI cabhrú liom?', needsValidation: true },
      purpose: '5 groups of 3 — task owner, AI operator, checker (roles can rotate). Twenty-five minutes on one real task from a participant’s own week, then a 60-second report: our task, where AI could help, what a human must still do, the main risk, how we would check it.',
      lesson: 'The objective is not "use AI" — it is "decide whether AI is appropriate." The last two questions are the ones groups skip if nobody pushes.',
    },
    {
      id: 'e1r', number: 'Reflection 1', kind: 'reflection', minutes: 10,
      title: { en: 'What did we learn?', ga: 'Cad a d’fhoghlaimíomar?', needsValidation: true },
      purpose: 'Not another lecture: six quick questions, a handful of observations on the board, then an explicit connection back to the morning.',
      lesson: '“Can AI do it?” is not the same question as “Should AI do it?”',
    },
    {
      id: 'e2', number: 'Workshop 2', kind: 'prompt-ladder', minutes: 25,
      title: { en: 'Prompt challenge', ga: 'Dúshlán na leide', needsValidation: true },
      purpose: 'Everyone starts from the same weak prompt. Climb the four rungs, then build your own. Leave a clearly marked gap rather than inventing a missing detail, and list any Irish terms you were unsure about.',
      lesson: 'Prompt engineering is communication — a better prompt makes the answer more useful, not more true.',
    },
    {
      id: 'e2r', number: 'Reflection 2', kind: 'reflection', minutes: 10,
      title: { en: 'What changed?', ga: 'Cad a d’athraigh?', needsValidation: true },
      purpose: 'Same method as Reflection 1: what changed, what did not, and what that tells us about prediction, fluency and Irish-language care.',
      lesson: 'A better prompt can improve an answer. It does not remove the need for judgement.',
    },
    {
      id: 'e5b', number: 'Final activity', kind: 'workflow', minutes: 15,
      title: { en: 'My first AI experiment', ga: 'Mo chéad turgnamh le AI', needsValidation: true },
      purpose: 'Each participant picks a real task and records: task, prompt, output, what worked, what was wrong, what they changed, whether they would use it again, what information they would NOT put into the AI, and who makes the final decision.',
      lesson: 'Honest records beat enthusiasm. The "what was wrong" column is the valuable one.',
    },
  ],
  keyMessages: [
    'You do not need to become an AI expert. You need to become confident enough to make good decisions about AI.',
    'AI is an assistant, not an authority.',
    'Prediction is not understanding.',
    'Fluent is not the same as factual.',
    'You remain responsible for what you use and publish.',
    'AI performance is not equal across languages — and Irish is one of the languages where that shows. That is a reason to shape how AI is used, not only a limitation to note.',
    'Scepticism is welcome here. It is a professional skill, not an obstacle.',
  ],
  irishComponent:
    'The Irish thread is introduced early — right after "AI is already around us" and before the traditional-software/ML/generative-AI explanation — with an honest answer on what AI can and cannot do with Irish, and no invented benchmark or figure. Immediately after it, a short (about two-minute) "Why Irish matters" moment frames this as a research question — using AI in a way that strengthens Irish, rather than only asking Irish speakers to adapt to English-first systems — before the deeper technical content resumes. Workshop 2 (the prompt challenge) asks participants to flag Irish terms they were unsure about, and Reflection 2 names explicitly that a fluent-looking Irish answer still needs human review. The deeper Irish-language rubric scoring (Workshop 3) and the deliberate AI-generated Irish error exercise (Workshop 4) move to Session 2 alongside the rest of those two workshops, with Cadhan/An Gramadóir presented as a useful additional check rather than a final authority — it catches spelling and mutation, not whether a sentence truly sounds like Irish.',
  safetyComponent:
    'AI can be wrong, its output needs checking, and human responsibility remains essential — taught through direct instruction across the morning (prediction ≠ understanding, fluent ≠ factual) and made concrete before the workshops with an explicit "what never goes into a public AI tool" list, directly connected to Mary’s cybersecurity section. A real, publicly documented case (AI-generated GAA match-programme artwork, May 2024 — shown as the original screenshot, clearly labelled as real, not an exercise) makes the same point about cultural and contextual judgement, not only factual accuracy, immediately before Workshop 1. The STOP method (Stop · Think · Observe · Proceed) is introduced as a method to carry forward; the deeper hands-on Workshop 4 exercise built on it — the fictional, explicitly labelled paragraph with a factual error, an unsupported claim, an irrelevant statement, an overconfident statement and a deliberate Irish-language error — moves to Session 2, alongside Workshop 3 (AI judges AI). Neither is run as a Session 1 participant workshop.',
  outputs: [
    'A wall of participant concerns about AI, recorded on day one and answered across the programme.',
    'A named human check for each participant’s Workshop 1 task.',
    'One completed prompt ladder per participant.',
    'A first honest experiment log.',
    'A signed-up-to between-session challenge.',
  ],
  betweenAfter: {
    id: 'b1',
    title: { en: 'Try AI three times', ga: 'Bain triail as AI trí huaire', needsValidation: true },
    brief:
      'Between Session 1 and Session 2, use AI for three different real work tasks. Not exercises — actual work. Record each one and bring it with you: also note how long the task took, how long checking took, and whether it was worth using. Bring a failure — it teaches the room more than a success.',
    steps: ['Task', 'Prompt', 'Output', 'What worked', 'What didn’t', 'What I learned', 'How I checked it'],
    target: 3,
  },
}
