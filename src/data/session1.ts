import type { SessionMeta } from './types'

/**
 * SESSION 1 — kept in sync with
 * Udaras_AI_Course_Session_1_MTU_v5.2_FINAL_REVIEW.pptx (52 slides): the
 * original 44-slide deck, the "Why Irish matters" moment (slide 15), the
 * three-frame 08:47 → 09:02 → 09:08 opening sequence (slides 2–4, the same
 * fictional Aoife shown wide → medium → close-up), the real GAA
 * match-programme case study (slides 42–43, a genuine public case — not
 * fictional, sourced to Irish Independent, 18 May 2024 — see
 * GAA_CASE_RESOURCES in multimedia.ts), and Workshop 4's 3-stage reveal
 * (slides 44–46: paragraph unrevealed → two problems → all five). See
 * src/data/exerciseContent.ts for the Workshop 1–4 payloads,
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
  duration: '10:00–15:30 · cybersecurity foundations 10:00–10:20 (Mary), this programme from 10:20',
  week: 'Week 2',
  location: 'Campas Íosagáin',
  centralQuestion: {
    en: 'What is AI, why does it matter to my work, and why should I not blindly trust it?',
    ga: 'Cad is AI ann, cén tábhacht atá leis do mo chuid oibre, agus cén fáth nár cheart dom muinín dhall a bheith agam as?',
    needsValidation: true,
  },
  narrative: { en: 'Fluent is not the same as factual.', ga: 'Ní hionann líofa agus fírinneach.', needsValidation: true },
  outcomes: [
    'Explain in plain language what AI is — to a colleague, without jargon.',
    'Distinguish traditional software, automation and generative AI.',
    'Describe, at a working level, what a large language model does — and does not do on its own.',
    'Identify AI applications that are genuinely useful in their own role.',
    'Recognise the common ways AI fails, including overconfident and unsupported claims.',
    'Explain what a hallucination is and why fluency makes it dangerous.',
    'Say why human oversight matters and where it belongs.',
    'Hold a productive working conversation with a conversational AI tool, and improve a weak prompt one rung at a time.',
    'Explain why AI performance is not equal across languages, and why that makes Irish an active design question rather than only a limitation.',
    'State the basic purpose of AI literacy under the EU AI Act (the detail is covered in Session 2).',
  ],
  timetable: [
    { time: '10:00–10:20', kind: 'teach',    title: { en: 'Cybersecurity foundations' }, detail: 'Delivered by Mary, immediately before this programme. From protecting ourselves to inviting AI in.' },
    { time: '10:20–10:30', kind: 'reflect',  title: { en: 'Welcome and expectations', ga: 'Fáilte agus ionchais', needsValidation: true }, detail: 'Today’s question: what is AI, why does it matter to my work, and why should I not blindly trust it?' },
    { time: '10:30–10:50', kind: 'teach',    title: { en: 'AI is already around us' }, detail: 'Before any definition: most people in the room already used an AI-enabled system before they arrived.' },
    { time: '10:50–11:15', kind: 'teach',    title: { en: 'AI is not one single technology' }, detail: 'Traditional software → machine learning → generative AI. Includes the Irish thread and the new "Why Irish matters" moment.' },
    { time: '11:15–11:30', kind: 'break',    title: { en: 'Coffee', ga: 'Sos' } },
    { time: '11:30–12:00', kind: 'activity', title: { en: 'Software, automation or AI?' }, detail: 'Six examples, sorted. Two of them split the room, and that split is the lesson.' },
    { time: '12:00–12:20', kind: 'teach',    title: { en: 'What is a large language model?' }, detail: 'Prompt → model → output. Prediction is not understanding; fluent is not the same as factual.' },
    { time: '12:20–12:30', kind: 'activity', title: { en: 'The prompt is the variable' }, detail: 'Live demonstration: the same question, put to three audiences, run without tidying the results.' },
    { time: '12:30–13:15', kind: 'break',    title: { en: 'Lunch' } },
    { time: '13:15–13:35', kind: 'teach',    title: { en: 'What can AI do for my work?' }, detail: 'Five short live demonstrations: generate content, edit a proposal, draft a newsletter, analyse feedback, ask questions of documents. AI as an assistant, not an authority.' },
    { time: '13:35–14:10', kind: 'lab',      title: { en: 'Workshop 1 — Can AI help me?' }, detail: 'Groups of three or four, twenty-five minutes on a real task from a participant’s own week.' },
    { time: '14:10–14:30', kind: 'lab',      title: { en: 'Workshop 2 — The prompt challenge' }, detail: 'Everyone starts from the same weak prompt. Four rungs, run the first and the last live.' },
    { time: '14:30–14:45', kind: 'break',    title: { en: 'Coffee', ga: 'Sos' } },
    { time: '14:45–15:10', kind: 'lab',      title: { en: 'Workshop 3 — AI judges AI' }, detail: 'Same task, three models, one rubric — including Irish-language quality. The human makes the final decision.' },
    { time: '15:10–15:25', kind: 'lab',      title: { en: 'Workshop 4 — Trust, verify, improve' }, detail: 'A fictional, intentionally flawed paragraph. Includes the deliberate Irish-language error and its correction, then the STOP check.' },
    { time: '15:25–15:30', kind: 'reflect',  title: { en: 'My first AI experiment' }, detail: 'Five minutes, written alone. This is what connects today to Session 2.' },
  ],
  slideGroups: [
    {
      id: 's1g1', range: '1–10', title: { en: 'Opening' },
      slides: [
        { n: 1, title: { en: 'Building AI Confidence in the Gaeltacht Workplace' } },
        {
          n: 2,
          title: { en: 'Meet Aoife.' },
          note: '08:47 · Monday morning. Someone says: "Why don’t you use AI?"',
        },
        {
          n: 3,
          title: { en: 'Her workload grows.' },
          note: '09:02 · Emails, funding proposal, survey feedback, newsletter, Irish communication.',
        },
        {
          n: 4,
          title: { en: 'She looks at the workload.' },
          note: '09:08 · Could AI actually help? What would you trust it with?',
        },
        { n: 5, title: { en: 'Following on from Mary' }, note: 'From protecting ourselves to inviting AI in — the handover from the cybersecurity foundations session.' },
        { n: 6, title: { en: 'Today’s question' }, note: 'What is AI, why does it matter to my work, and why should I not blindly trust it?' },
        { n: 7, title: { en: 'Before we start: what do you think?' }, note: 'Three questions, no wrong answers, nothing argued with today.' },
        { n: 8, title: { en: 'The wall' }, note: 'Concerns recorded live. These are the questions the rest of the programme has to answer.' },
        { n: 9, title: { en: 'All three are true' }, note: 'AI is exciting, useful and worrying. All three positions are reasonable, and all three are partly right.' },
        { n: 10, title: { en: 'How today runs' } },
      ],
      callout: {
        label: 'The five rules',
        body: 'Be curious · Be sceptical · Protect information · Check AI outputs · Keep humans responsible',
      },
    },
    {
      id: 's1g2', range: '11–22', title: { en: 'What is AI?' },
      slides: [
        { n: 11,  title: { en: 'What is AI?' } },
        { n: 12,  title: { en: 'AI is already around us' }, note: 'Spam filters, maps, banking fraud alerts, phone cameras, predictive text.' },
        { n: 13, title: { en: 'Closer to home' }, note: 'Where is AI already being used in Ireland? Ask the room before showing the slide.' },
        { n: 14, title: { en: 'AI in Irish context' }, note: 'Can AI understand Irish? It can produce Irish, often fluently, and it is markedly better at English than at Irish — a gap in the amount of digital Irish it learned from, not in the language itself. We will not claim a number, benchmark or percentage.' },
        {
          n: 15,
          title: { en: 'Why Irish matters' },
          note:
            'A short, personal research-story moment — not an academic talk (about two minutes). "My research is about language and AI, particularly multilingual and low-resource languages. Irish is a really interesting example because AI systems are much stronger in some languages than others. So today I’m not only interested in what AI can do. I’m interested in asking: can we use AI in a way that strengthens Irish rather than simply asking Irish speakers to adapt to systems built primarily for English?"',
        },
        { n: 16, title: { en: 'AI is not one single technology' }, note: 'An umbrella over quite different things, which is why general claims about "AI" are usually wrong.' },
        { n: 17, title: { en: 'Traditional software' }, note: 'Stage 1 of 3. A person wrote every rule; the machine applies them exactly.' },
        { n: 18, title: { en: 'Machine learning' }, note: 'Stage 2 of 3. Nobody wrote the rules — the system worked them out from examples.' },
        { n: 19, title: { en: 'Generative AI' }, note: 'Stage 3 of 3. It produces something that did not exist before.' },
        { n: 20, title: { en: 'Coffee', ga: 'Sos' } },
        { n: 21, title: { en: 'Software, automation or AI?' }, note: 'Six examples, sorted. Two of them split the room, and that split is the lesson.' },
        { n: 22, title: { en: 'Where each one usually lands' }, note: 'And why the disagreement is the point.' },
      ],
      callout: { label: 'AI for Irish', body: 'AI for Irish — not AI instead of Irish.' },
    },
    {
      id: 's1g3', range: '23–28', title: { en: 'Large language models' },
      slides: [
        { n: 23, title: { en: 'Large language models' } },
        {
          n: 24,
          title: { en: 'What is a large language model?' },
          note: 'At its core, a language model generates likely continuations from learned patterns. Some AI products can also connect to external information and tools.',
        },
        {
          n: 25,
          title: { en: 'Prediction is not understanding' },
          note: 'By itself, a language model does not automatically know whether what it has generated is true.',
        },
        { n: 26, title: { en: 'Fluent is not the same as factual' }, note: 'The tone of an answer tells you nothing about whether it is true. The single hardest habit to build.' },
        { n: 27, title: { en: 'The prompt is the variable' }, note: 'Live demonstration: the same question, to three audiences, run one after another without tidying the results.' },
        { n: 28, title: { en: 'Lunch' } },
      ],
      callout: { label: 'Key message', body: 'Fluent ≠ factual. The tone of an answer tells you nothing about whether it is true.' },
    },
    {
      id: 's1g4', range: '29–35', title: { en: 'AI opportunities' },
      slides: [
        { n: 29, title: { en: 'What can AI do for my work?' } },
        { n: 30, title: { en: 'AI as an assistant, not an authority' }, note: 'A capable, fast, slightly unreliable colleague who has never met your customers.' },
        { n: 31, title: { en: 'Live demonstration: generate content' }, note: 'A short promotional post for a fictional Gaeltacht food producer.' },
        { n: 32, title: { en: 'Live demonstration: edit a proposal' }, note: 'Improve the structure of a draft funding proposal without inventing new content.' },
        { n: 33, title: { en: 'Live demonstration: create a newsletter' }, note: 'A short monthly newsletter for a fictional Gaeltacht community organisation.' },
        { n: 34, title: { en: 'Live demonstration: analyse survey feedback' }, note: 'Forty anonymous responses from a fictional training feedback form — what are the three main themes?' },
        { n: 35, title: { en: 'Live demonstration: ask questions of documents' }, note: 'Using only the attached documents — what does this scheme cover, and what does it exclude?' },
      ],
    },
    {
      id: 's1g5', range: '36–48', title: { en: 'Afternoon workshops' },
      slides: [
        { n: 36, title: { en: 'Afternoon workshops' }, note: 'Workshop 1 → Workshop 2 → Workshop 3 → the real GAA case → Workshop 4 → My first experiment.' },
        { n: 37, title: { en: 'Workshop 1 — Can AI help me?' }, note: 'Groups of three or four. Twenty-five minutes on a real task, then sixty seconds each to report back.' },
        { n: 38, title: { en: 'Workshop 2 — The prompt challenge' }, note: 'Everyone starts from the same weak prompt. Four rungs — run the first and the last live.' },
        { n: 39, title: { en: 'Coffee', ga: 'Sos' } },
        { n: 40, title: { en: 'Workshop 3 — AI judges AI' }, note: 'One task, three models, one rubric. Score all three before any model is asked for an opinion.' },
        { n: 41, title: { en: 'The point of Workshop 3' }, note: 'Agreement between several AI systems does not make an answer true. The human makes the final decision.' },
        {
          n: 42,
          title: { en: 'Real case: GAA match-programme artwork' },
          note: 'A real, publicly posted X/Twitter case (Barry Masterson, May 2024): AI-generated GAA illustration with distorted hands and an invented crest. "What’s wrong here?" — shown as the original screenshot, unmodified. Source: Irish Independent, "GAA defends use of AI applications to create artwork for match programmes following criticism", 18 May 2024.',
        },
        {
          n: 43,
          title: { en: 'Real case: more than the strange hands' },
          note: 'Zoomed detail on the real artwork: the county name is misspelt on the crest ("CIR COGHAIN" for Tír Eoghain). Reveals: context, culture, community, expertise, human judgement. Key message: AI can be culturally recognisable without being culturally appropriate.',
        },
        {
          n: 44,
          title: { en: 'Workshop 4 — the paragraph, unrevealed' },
          note: 'FICTIONAL EXERCISE: THESE CLAIMS ARE INTENTIONALLY UNVERIFIED. The full Coastal Craft paragraph shown with nothing marked yet. "Would you believe this?" — no problems revealed at this stage.',
        },
        {
          n: 45,
          title: { en: 'Workshop 4 — two problems revealed' },
          note: 'The unsupported claim and the overconfident statement are marked; the rest stays hidden until the group has looked again.',
        },
        {
          n: 46,
          title: { en: 'Workshop 4 — Trust, verify, improve' },
          note: 'All five problems now revealed: factual error, unsupported claim, irrelevant statement, overconfident statement, and the deliberate Irish-language error. West Bay Enterprise Board and the Coastal Craft Grant do not exist — the organisation, the scheme, the figures and the claims were all invented for this exercise.',
        },
        { n: 47, title: { en: 'A method you can keep — STOP' }, note: 'Stop · Think · Observe · Proceed. Four steps, in order, between reading an AI output and doing anything with it.' },
        { n: 48, title: { en: 'My first AI experiment' }, note: 'Five minutes, written alone, no discussion. This is what connects today to Session 2.' },
      ],
    },
    {
      id: 's1g6', range: '49–52', title: { en: 'Closing' },
      slides: [
        { n: 49, title: { en: 'Before Session 2: try AI three times' } },
        { n: 50, title: { en: 'What we said today' }, note: 'You do not need to become an AI expert. AI is an assistant, not an authority.' },
        { n: 51, title: { en: 'Session 2 preview' }, note: 'Responsible AI and AI for everyday business — built partly from what participants bring back.' },
        { n: 52, title: { en: 'Go raibh maith agaibh', needsValidation: true }, note: 'AI is an assistant, not an authority. AI for Irish — not AI instead of Irish.' },
      ],
    },
  ],
  exercises: [
    {
      id: 'e1', number: 'Workshop 1', kind: 'workshop1', minutes: 25,
      title: { en: 'Can AI help me?' },
      purpose: 'Groups of three or four. Twenty-five minutes on one real task from a participant’s own week, then sixty seconds each to report back.',
      lesson: 'Report back with two things only: the task, and the human check.',
    },
    {
      id: 'e2', number: 'Workshop 2', kind: 'prompt-ladder', minutes: 20,
      title: { en: 'The prompt challenge' },
      purpose: 'Everyone starts from the same weak prompt. Climb the ladder, then build your own — one rung at a time.',
      lesson: 'Prompt engineering is communication: the same skill as briefing a competent new colleague.',
    },
    {
      id: 'e3', number: 'Workshop 3', kind: 'rubric', minutes: 25,
      title: { en: 'AI judges AI' },
      purpose: 'One task — a 150-word promotional message for a fictional Gaeltacht business. Three AI outputs, one rubric, including Irish-language quality. Score all three before any model is asked for an opinion.',
      lesson: 'Agreement between several AI systems does not make an answer true. The human makes the final decision.',
    },
    {
      id: 'e4', number: 'Workshop 4', kind: 'error-spot', minutes: 15,
      title: { en: 'Trust, verify, improve' },
      purpose: 'FICTIONAL EXERCISE: THESE CLAIMS ARE INTENTIONALLY UNVERIFIED. One AI-generated paragraph about a fictional agency — mark what is wrong with each sentence, including a deliberate Irish-language error, then apply the STOP check.',
      lesson: 'The confident sentence is the hardest to spot, because it reads like the most reliable part of the text.',
    },
    {
      id: 'e5b', number: 'Final activity', kind: 'workflow', minutes: 5,
      title: { en: 'My first AI experiment' },
      purpose: 'Each participant picks a real task and records: task, prompt, output, what worked, what was wrong, what they changed, and whether they would use AI for it again.',
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
    'The Irish thread is introduced early — right after "AI is already around us" and before the traditional-software/ML/generative-AI explanation — with an honest answer on what AI can and cannot do with Irish, and no invented benchmark or figure. Immediately after it, a short (about two-minute) "Why Irish matters" moment frames this as a research question — using AI in a way that strengthens Irish, rather than only asking Irish speakers to adapt to English-first systems — before the deeper technical content resumes. Workshop 3 (AI judges AI) scores Irish-language quality alongside accuracy and tone, and Workshop 4 (Trust, verify, improve) contains a deliberate, clearly labelled AI-generated Irish error and its correction, with Cadhan/An Gramadóir presented as a useful additional check rather than a final authority — it catches spelling and mutation, not whether a sentence truly sounds like Irish.',
  safetyComponent:
    'Hallucination, overconfidence and unsupported claims are taught through direct instruction across the morning (prediction ≠ understanding, fluent ≠ factual) and rehearsed hands-on in Workshop 4, where a fictional, explicitly labelled paragraph carries a factual error, an unsupported claim, an irrelevant statement, an overconfident statement and the Irish-language error, revealed in three stages rather than all at once — closed out with the STOP check (Stop · Think · Observe · Proceed) before any hands-on lab work leaves the room. Immediately before it, a real, publicly documented case (AI-generated GAA match-programme artwork, May 2024 — shown as the original screenshot, clearly labelled as real rather than an exercise) makes the same point about cultural and contextual judgement, not only factual accuracy.',
  outputs: [
    'A wall of participant concerns about AI, recorded on day one and answered across the programme.',
    'A named human check for each participant’s Workshop 1 task.',
    'One completed prompt ladder per participant.',
    'A scored rubric and a defended choice from Workshop 3.',
    'A marked-up Workshop 4 sheet and a completed STOP check.',
    'A first honest experiment log.',
    'A signed-up-to between-session challenge.',
  ],
  betweenAfter: {
    id: 'b1',
    title: { en: 'Try AI three times', ga: 'Bain triail as AI trí huaire', needsValidation: true },
    brief:
      'Between Session 1 and Session 2, use AI for three different real work tasks. Not exercises — actual work. Record each one and bring it with you: failures are the valuable material, and will teach the room more than the ones that worked.',
    steps: ['Task', 'Prompt', 'Output', 'What worked', 'What didn’t', 'What I learned'],
    target: 3,
  },
}
