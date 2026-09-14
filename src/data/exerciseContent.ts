/* Interactive payloads for the exercises. Kept separate from session
   metadata so facilitators can edit the content without touching layout. */

/* ---------- Exercise 1 · Hallucination quiz ---------- */
export interface QuizItem {
  id: string
  prompt: string
  answer: string
  verdict: 'correct' | 'partly' | 'wrong'
  explain: string
}
export const HALLUCINATION_QUIZ: QuizItem[] = [
  {
    id: 'h1',
    prompt: 'A participant asks an AI assistant: “Summarise the grant supports available to a small Gaeltacht food producer.”',
    answer:
      'A general, sensible-sounding summary of typical enterprise supports — capital grants, employment supports, mentoring, market development — with no scheme names, no figures and no dates.',
    verdict: 'correct',
    explain:
      'Vague, but not wrong. This is what a well-behaved answer looks like when the model does not have reliable specifics: it stays general. It is a starting point for a conversation with a development officer, not a source.',
  },
  {
    id: 'h2',
    prompt: 'Same question, asked again in a new chat.',
    answer:
      'The same summary, but now with two named schemes, precise percentage rates and an application deadline — one scheme real, one an invented blend of two others.',
    verdict: 'partly',
    explain:
      'The most dangerous category. The true material makes the invented material credible. If you check only the part you recognise, you will confirm the answer and publish the error.',
  },
  {
    id: 'h3',
    prompt: 'A participant asks: “Give me three published studies on Irish-language machine translation quality.”',
    answer:
      'Three citations with plausible authors, journal names, years and page numbers, formatted perfectly. None of them exist.',
    verdict: 'wrong',
    explain:
      'Fabricated citations are the classic case, and formatting is what sells them. A reference that looks perfectly formatted has told you nothing about whether it exists. Check every one.',
  },
]

/* ---------- Exercise 2 · AI, AI+Human, Human ---------- */
export interface SortItem { id: string; label: string; suggested: 'ai' | 'both' | 'human'; why: string }
export const SORT_TASKS: SortItem[] = [
  { id: 't1', label: 'Writing a routine email', suggested: 'both', why: 'Fine for a draft. You still read it before it goes — tone is your responsibility, not the tool’s.' },
  { id: 't2', label: 'Summarising a long report', suggested: 'both', why: 'Strong use case. But a summary can quietly drop the one paragraph that mattered, so spot-check against the source.' },
  { id: 't3', label: 'Deciding whether to dismiss an employee', suggested: 'human', why: 'A decision about a person’s livelihood. Beyond the legal exposure, this is exactly the kind of consequence that must stay with an accountable human.' },
  { id: 't4', label: 'Brainstorming marketing ideas', suggested: 'ai', why: 'Low risk, high volume, easy to discard. One of the cleanest uses there is.' },
  { id: 't5', label: 'Translating a draft', suggested: 'both', why: 'Useful for a first pass; the Irish still needs a competent speaker before publication.' },
  { id: 't6', label: 'Making an important financial decision', suggested: 'human', why: 'Use AI to lay out options and pressure-test your reasoning. The decision, and the responsibility for it, stays yours.' },
]

/* ---------- Exercise 3 · Traffic light ---------- */
export interface RiskItem { id: string; label: string; level: 'green' | 'amber' | 'red'; why: string }
export const RISK_ITEMS: RiskItem[] = [
  { id: 'r1', label: 'Text from your public brochure', level: 'green', why: 'Already public. Nothing is disclosed that the world does not have.' },
  { id: 'r2', label: 'A customer’s phone number', level: 'red', why: 'Personal data belonging to someone who did not agree to this. Strip it out — the task almost never needs it.' },
  { id: 'r3', label: 'A confidential business plan', level: 'red', why: 'Commercially sensitive and often contractually protected. Describe the shape of the problem instead of pasting the document.' },
  { id: 'r4', label: 'A recipe you use in the café', level: 'amber', why: 'Depends entirely on whether it is a trade secret or a leaflet. Ask that question first.' },
  { id: 'r5', label: 'An unpublished contract', level: 'red', why: 'Another party’s confidential information as well as your own. Not yours alone to share.' },
  { id: 'r6', label: 'A draft social-media post', level: 'green', why: 'Written to be published. Low risk — the check is on the output, not the input.' },
]

/* ---------- Workshop 2 · Prompt challenge ---------- */
export const PROMPT_LADDER: { rung: string; text: string; critique: string }[] = [
  { rung: 'Prompt 1', text: 'Write a newsletter about our business.',
    critique: 'The vague request. No audience, no purpose, no tone, no length, no language. The model will invent all of it, and you will not like its choices.' },
  { rung: 'Prompt 2', text: 'Write a newsletter about our business, for existing customers, to tell them about our new opening hours.',
    critique: 'Add who it is for and what it is for. There is now an audience and a purpose — the output will be generic but usable as a starting point.' },
  { rung: 'Prompt 3', text: 'Write a newsletter about our business, for existing customers, to tell them about our new opening hours. Warm and plain in tone, around 150 words, and it must mention the new hours, the reason for the change, and the effective date.',
    critique: 'Add how it should sound, how long, and the facts. Tone, length and key information are now fixed rather than guessed.' },
  { rung: 'Prompt 4', text: 'Write a newsletter about our business, for existing customers, to tell them about our new opening hours. Warm and plain in tone, around 150 words, and it must mention the new hours, the reason for the change, and the effective date. Three short paragraphs, no exclamation marks, do not invent any detail I have not given you. Give me the Irish version first, then a natural English version — not a word-for-word translation — and list any Irish terms you were unsure about.',
    critique: 'Add shape, limits, source discipline and language. Format, things to avoid, source discipline and bilingual output are all present. This is the level at which AI starts saving real time.' },
]

/* ---------- Workshop 1 · Can AI help me? ----------
   Groups of three or four, twenty-five minutes on one real task from a
   participant's own week, then sixty seconds each to report back. */
export const WORKSHOP1_QUESTIONS: { step: string; body: string }[] = [
  { step: 'What is the task?', body: 'A real one from your own week, not a hypothetical.' },
  { step: 'How do we currently do it?', body: 'Who does it, how long it takes, what usually goes wrong.' },
  { step: 'Could AI help?', body: '“No” is a legitimate and useful answer.' },
  { step: 'Which part could AI do?', body: 'Be specific. Rarely the whole task.' },
  { step: 'Which part needs a human?', body: 'If you cannot name one, look harder.' },
  { step: 'What could go wrong?', body: 'Reputational, factual, legal, linguistic.' },
  { step: 'What would we need to check?', body: 'The specific thing, and the named person who checks it.' },
]

/* ---------- Workshop 3 · AI judges AI ----------
   One task (a 150-word promotional message for a fictional Gaeltacht
   business), three AI outputs, one rubric. Score all three before any
   model is asked for an opinion. */
export interface RubricCriterion { id: string; label: string; ask: string }
export const RUBRIC_CRITERIA: RubricCriterion[] = [
  { id: 'rc1', label: 'Accuracy', ask: 'Is everything it says actually supported?' },
  { id: 'rc2', label: 'Relevance', ask: 'Does it speak to the audience we named?' },
  { id: 'rc3', label: 'Clarity', ask: 'Would a customer understand it on one reading?' },
  { id: 'rc4', label: 'Creativity', ask: 'Anything a template would not have produced?' },
  { id: 'rc5', label: 'Appropriate tone', ask: 'Does it sound like us, or like an advertisement?' },
  { id: 'rc6', label: 'Irish-language quality', ask: 'Grammar, naturalness, register, terminology — where Irish is used.' },
]
export const RUBRIC_CLOSING =
  'Agreement between several AI systems does not make an answer true. The human makes the final decision.'
export const RUBRIC_CHOICE_PROMPT =
  'Which output would you choose? Not which scored highest — which would you put your organisation’s name on, and why?'

/* ---------- Workshop 4 · Trust, verify, improve ----------
   FICTIONAL EXERCISE: THESE CLAIMS ARE INTENTIONALLY UNVERIFIED.
   West Bay Enterprise Board and the Coastal Craft Grant do not exist. The
   organisation, the scheme, the figures and the claims were all invented
   for this exercise, and nothing here describes any real organisation,
   funding scheme or policy. */
export const WORKSHOP4_FICTION_WARNING =
  'FICTIONAL EXERCISE: THESE CLAIMS ARE INTENTIONALLY UNVERIFIED. West Bay Enterprise Board and the Coastal Craft Grant do not exist. The organisation, the scheme, the figures and the claims were all invented for this exercise.'

export type Workshop4Category = 'nothing' | 'factual' | 'unsupported' | 'irrelevant' | 'overconfident' | 'irish'
export interface Workshop4Item { id: string; text: string; category: Workshop4Category; explain: string }
export const WORKSHOP4_CATEGORIES: { id: Workshop4Category; label: string }[] = [
  { id: 'nothing', label: 'Nothing wrong' },
  { id: 'factual', label: 'Factual error' },
  { id: 'unsupported', label: 'Unsupported claim' },
  { id: 'irrelevant', label: 'Irrelevant' },
  { id: 'overconfident', label: 'Overconfident' },
  { id: 'irish', label: 'Irish-language problem' },
]
export const WORKSHOP4_ITEMS: Workshop4Item[] = [
  {
    id: 'w4-1',
    text: 'West Bay Enterprise Board has supported local enterprise since it was established, and continues to work with businesses across the region.',
    category: 'irrelevant',
    explain: 'True in shape, pleasant to read, and beside the point — it supports nothing the reader actually needs to decide.',
  },
  {
    id: 'w4-2',
    text: 'Grant support of up to 60% of capital costs is available to all businesses in the region under the Coastal Craft Grant.',
    category: 'factual',
    explain: 'A precise figure and a named scheme that were never given to it. Numbers, percentages and scheme names are exactly where fabrication concentrates — perfect formatting is not evidence that something exists.',
  },
  {
    id: 'w4-3',
    text: 'Businesses operating through Irish consistently outperform their English-language counterparts in the region.',
    category: 'unsupported',
    explain: 'Flattering, plausible, and stated with no source or basis. No such claim is asserted anywhere in this course — we do not invent Irish-language performance statistics, and neither should a paragraph you are about to publish.',
  },
  {
    id: 'w4-4',
    text: 'Ireland has a long and rich literary tradition stretching back over a thousand years.',
    category: 'nothing',
    explain: 'True and checkable, but it is doing no work in this paragraph. The presence of a correct sentence does not make the paragraph around it trustworthy.',
  },
  {
    id: 'w4-5',
    text: 'Any business can be certain of approval provided the application is submitted correctly.',
    category: 'overconfident',
    explain: 'A guarantee nobody is in a position to give. This is the hardest one to spot, because it reads like the most reliable sentence in the paragraph.',
  },
  {
    id: 'w4-6',
    text: 'Déanaimid tacaíocht a thabhairt do ghnóanna áitiúla.',
    category: 'irish',
    explain:
      'AI-generated Irish, shown deliberately as an example of an error — not a model to copy. There are three separate problems in it: the plural of "gnó" is not the standard form, the noun after the preposition should be lenited, and the overall shape is English word order wearing Irish vocabulary.',
  },
]
export const WORKSHOP4_IRISH_CORRECTION = {
  faulty: 'Déanaimid tacaíocht a thabhairt do ghnóanna áitiúla.',
  corrected: 'Tugaimid tacaíocht do ghnóthaí áitiúla.',
  note:
    'A grammar checker such as An Gramadóir catches the plural and the missing lenition. It does not catch the third problem — that the sentence is shaped like English, not Irish. That is exactly the point: a checker catches spelling and mutation; a person catches whether it actually sounds like Irish. Treat Cadhan/An Gramadóir as a useful additional check, never as the final word.',
}
export const WORKSHOP4_VERIFY_QUESTION = 'How would you verify this?'

/* ---------- Reflection 1 (S1-W1-REFLECTION) — after Workshop 1 ----------
   Ten minutes. Not a lecture: the facilitator asks, the room answers,
   3-5 observations go on the board, then an explicit connection back to
   the morning. */
export const REFLECTION1_QUESTIONS = [
  'Where did AI look genuinely useful?',
  'Where did we decide NOT to use AI?',
  'What surprised you?',
  'What could go wrong?',
  'What information would you not give an AI system?',
  'Who remains responsible for the final result?',
]
export const REFLECTION1_CONNECTION = {
  morningIdea: 'AI can help, but it has limitations.',
  lesson: '“Can AI do it?” is not the same question as “Should AI do it?”',
  closing: 'AI is an assistant, not an authority.',
}

/* ---------- Reflection 2 (S1-W2-REFLECTION) — after Workshop 2 ---------- */
export const REFLECTION2_QUESTIONS = [
  'What changed when we improved the prompt?',
  'Which instruction made the biggest difference?',
  'Did the better prompt eliminate all errors?',
  'What did the AI still misunderstand?',
  'What would you check before using the answer?',
  'Would you use the same prompt again?',
]
export const REFLECTION2_CONNECTION = {
  prediction: 'The model responds to the information we give it.',
  fluency: 'A polished answer can still contain errors.',
  irish: 'A fluent-looking Irish answer still needs human review.',
  closing: 'A better prompt can improve an answer. It does not remove the need for judgement.',
}

/* ---------- Exercise 5 · Irish review criteria ---------- */
export const IRISH_REVIEW_CRITERIA = [
  { id: 'c1', label: 'Grammar', ga: 'Gramadach', ask: 'Is it correct? Look hard at initial mutations, the genitive, and verb forms.' },
  { id: 'c2', label: 'Naturalness', ga: 'Nádúrthacht', ask: 'Would a person say this, or does it read as English wearing Irish clothes?' },
  { id: 'c3', label: 'Cultural fit', ga: 'Oiriúnacht chultúrtha', ask: 'Does the register suit the audience and the occasion?' },
  { id: 'c4', label: 'Terminology', ga: 'Téarmaíocht', ask: 'Are the technical and business terms the ones actually used here?' },
  { id: 'c5', label: 'Would you publish it?', ga: 'An bhfoilseofá é?', ask: 'The only question that finally matters. Under your own name.' },
]

/* ---------- Exercise 6 · AI Act scenarios ---------- */
export interface Scenario {
  id: string
  title: string
  body: string
  answers: { q: string; a: string }[]
  flag: 'routine' | 'care' | 'serious'
}
export const SCENARIO_QUESTIONS = [
  'What AI system is being used?',
  'What could go wrong?',
  'What information is involved?',
  'Who is responsible?',
  'What human review is needed?',
  'What should the business do?',
]
export const AI_ACT_SCENARIOS: Scenario[] = [
  {
    id: 'sc1', flag: 'routine',
    title: 'A café uses AI to write its social media posts',
    body: 'The owner drafts weekly posts with a general-purpose chatbot, in Irish and English, and publishes them directly.',
    answers: [
      { q: 'What AI system is being used?', a: 'A general-purpose generative AI assistant, used for content drafting. Low-risk use in itself.' },
      { q: 'What could go wrong?', a: 'Wrong opening hours or prices; Irish that reads badly to local customers; a claim about the food that is not true.' },
      { q: 'What information is involved?', a: 'Public marketing information only — which is why this sits at the easy end.' },
      { q: 'Who is responsible?', a: 'The owner. The tool has no accountability and the platform will not carry it either.' },
      { q: 'What human review is needed?', a: 'A read-through before posting, and an Irish speaker on the Irish version.' },
      { q: 'What should the business do?', a: 'Carry on — with a two-minute check step. This is a good, ordinary use of AI.' },
    ],
  },
  {
    id: 'sc2', flag: 'serious',
    title: 'A company uses AI to shortlist job applicants',
    body: 'A manager pastes CVs into an AI tool and asks it to rank the candidates and recommend a shortlist.',
    answers: [
      { q: 'What AI system is being used?', a: 'AI used for recruitment and candidate selection. Employment is one of the areas the AI Act treats as high-risk, and specific obligations attach when those rules apply.' },
      { q: 'What could go wrong?', a: 'Systematic bias against candidates by name, address, career gap, or the language their CV is written in — applied consistently and invisibly across everyone.' },
      { q: 'What information is involved?', a: 'Substantial personal data belonging to people who applied for a job, not for their data to be processed this way.' },
      { q: 'Who is responsible?', a: 'The employer, as deployer. Under both data protection law and the AI Act, this does not transfer to the tool vendor.' },
      { q: 'What human review is needed?', a: 'Far more than a glance at the output. Meaningful human decision-making, documented, with the ability to explain why a candidate was rejected.' },
      { q: 'What should the business do?', a: 'Take advice before doing this at all. If it goes ahead: no automated rejection, human assessment of every candidate, records kept, and candidates informed. “The AI suggested it” is not a defence anyone will accept.' },
    ],
  },
  {
    id: 'sc3', flag: 'care',
    title: 'A customer-service chatbot on the website',
    body: 'A business adds an AI chatbot that answers customer questions in Irish and English, out of hours.',
    answers: [
      { q: 'What AI system is being used?', a: 'A customer-facing conversational AI system. Article 50 transparency obligations are directly relevant here.' },
      { q: 'What could go wrong?', a: 'Confidently wrong answers about price, availability or entitlements — given to a customer who reasonably believes them; and weaker Irish than English answers.' },
      { q: 'What information is involved?', a: 'Whatever customers type in, which will include personal details whether you asked for them or not.' },
      { q: 'Who is responsible?', a: 'The business deploying it, for what it says and for what it collects.' },
      { q: 'What human review is needed?', a: 'Regular review of real transcripts, and a clear route to a human.' },
      { q: 'What should the business do?', a: 'Make it unmistakable that the customer is talking to an AI system — that is a transparency requirement, not a courtesy. Scope it to questions you can stand over, test the Irish properly, and give people an easy way to reach a person.' },
    ],
  },
  {
    id: 'sc4', flag: 'care',
    title: 'AI analysis of customer complaints',
    body: 'A manager feeds a year of complaint emails into an AI tool to find themes.',
    answers: [
      { q: 'What AI system is being used?', a: 'Generative AI used for text analysis and summarisation.' },
      { q: 'What could go wrong?', a: 'A confident summary that misses a small but serious pattern; or personal data disclosed to a third-party service without a basis for it.' },
      { q: 'What information is involved?', a: 'Named customers, their complaints, sometimes health or financial detail. This is the part people underestimate.' },
      { q: 'Who is responsible?', a: 'The business, as data controller and as deployer.' },
      { q: 'What human review is needed?', a: 'Read the actual complaints behind each theme. A theme without examples is not a finding.' },
      { q: 'What should the business do?', a: 'Remove names and identifiers before analysis — the themes do not need them. Check the terms of the tool you are using. Treat output as a hypothesis to verify, not a conclusion.' },
    ],
  },
  {
    id: 'sc5', flag: 'care',
    title: 'An AI-generated advertising image',
    body: 'A business generates a photorealistic image of its premises and staff for an advertising campaign.',
    answers: [
      { q: 'What AI system is being used?', a: 'A generative image model producing synthetic content.' },
      { q: 'What could go wrong?', a: 'A depiction customers reasonably read as real that is not; likeness or copyright problems; and a place that does not look like the place people know.' },
      { q: 'What information is involved?', a: 'Whatever was uploaded as reference — including photographs of identifiable people.' },
      { q: 'Who is responsible?', a: 'The advertiser, for both the advertising claims and the disclosure.' },
      { q: 'What human review is needed?', a: 'A decision on whether it could mislead, and on whether it needs to be marked as AI-generated.' },
      { q: 'What should the business do?', a: 'Do not present synthetic imagery as a photograph of your actual premises or staff. Article 50 requires AI-generated content to be marked in machine-readable form, and content that resembles real people or places to be disclosed as artificially generated. In a small community, the reputational test bites before the legal one does.' },
    ],
  },
]

/* ---------- Exercise 7 · STOP ---------- */
export const STOP_FRAMEWORK = [
  { letter: 'S', word: 'Sensitive?', question: 'Is there anything in here that belongs to somebody else — a customer, a colleague, another business?',
    examples: ['A name, an address, a phone number', 'A colleague’s performance', 'Another company’s confidential document', 'Anything you would not read aloud in a full room'] },
  { letter: 'T', word: 'Trust?', question: 'How much does it matter if this output is wrong, and would I notice?',
    examples: ['A figure going into a funding application', 'A legal or regulatory claim', 'A statement about what a grant covers', 'Anything a customer will act on'] },
  { letter: 'O', word: 'Ownership?', question: 'Who owns what goes in, and who owns what comes out?',
    examples: ['Copyright in material you paste in', 'Whether the tool trains on your input', 'Client material you hold but do not own', 'What your own terms with customers allow'] },
  { letter: 'P', word: 'Person responsible?', question: 'Who is the named human who signs off on this before it leaves the building?',
    examples: ['Who reviews it', 'Who approves the Irish', 'Who answers if it is wrong', '“The AI wrote it” is not an answer'] },
]

/* ---------- Exercise 8 / 14 · Seven-step workflow ---------- */
export const SEVEN_STEPS = [
  { step: 'Define',   body: 'Say the problem out loud in one sentence, without mentioning AI. If you cannot, that is the actual task.' },
  { step: 'Decide',   body: 'Should AI be involved at all? Run VALUE → RISK → DATA → HUMAN JUDGEMENT. “No” is a legitimate answer.' },
  { step: 'Prompt',   body: 'Role, context, task, constraints, output. Write it somewhere you can find it again.' },
  { step: 'Generate', body: 'Get output. Do not stop at the first attempt — the first is a diagnostic, not a draft.' },
  { step: 'Verify',   body: 'Check what would embarrass you: facts, figures, names, quotations, legal claims, Irish.' },
  { step: 'Improve',  body: 'Tell it what was wrong and why. Specific correction beats “try again”.' },
  { step: 'Save',     body: 'Keep the prompt that worked. This is the step everyone skips and the one that turns a trick into a process.' },
]

/* ---------- Exercise 12 · Never automate ---------- */
export const NEVER_AUTOMATE = [
  { label: 'Sensitive customer communication', why: 'Bereavement, hardship, a mistake you made. The person can tell, and it costs you more than the time it saved.' },
  { label: 'Public statements', why: 'What you say publicly is what you are on record as meaning. A named person writes it and a named person approves it.' },
  { label: 'Complaints', why: 'A complaint is a relationship problem before it is an information problem. AI can help you prepare; it should not answer.' },
  { label: 'Important announcements', why: 'Closures, redundancies, changes affecting people’s livelihoods. Draft with help if you like. Do not publish without full human authorship.' },
  { label: 'Community communications', why: 'In a Gaeltacht community, tone and register carry meaning that a model has never had to live with.' },
]

/* ---------- Exercise 10 · Irish-first business types ---------- */
export const BUSINESS_TYPES = [
  { id: 'b1', label: 'Gaeltacht tourism', ga: 'Turasóireacht Ghaeltachta', prompts: ['Bilingual visitor information that stays current', 'Irish-language social content at a sustainable pace', 'Signage, menus, trail notes drafted in Irish first'] },
  { id: 'b2', label: 'Food producer', ga: 'Táirgeoir bia', prompts: ['Irish-language packaging and label copy', 'Product descriptions for online sale', 'Bilingual trade documentation'] },
  { id: 'b3', label: 'Craft business', ga: 'Gnó ceardaíochta', prompts: ['Telling the story of a piece in Irish', 'Bilingual listings for online marketplaces', 'Irish-language customer correspondence'] },
  { id: 'b4', label: 'Childcare', ga: 'Cúram leanaí', prompts: ['Irish-language notices for parents', 'Activity and song material in Irish', 'Bilingual policy documents'] },
  { id: 'b5', label: 'Consultancy', ga: 'Comhairleacht', prompts: ['Irish-language proposals and reports', 'Bilingual presentation material', 'Terminology consistency across documents'] },
  { id: 'b6', label: 'Community organisation', ga: 'Eagraíocht phobail', prompts: ['Newsletters produced weekly rather than occasionally', 'Funding applications drafted in Irish', 'Bilingual event material'] },
]

/* ---------- Irish-language AI opportunities (Session 3 / AI + Irish page) ---------- */
export const IRISH_OPPORTUNITIES = [
  { label: 'Irish social media', body: 'Posting in Irish at a pace you can actually sustain, rather than in bursts when someone has time.' },
  { label: 'Bilingual websites', body: 'Keeping the Irish side of the site as current as the English side, instead of a year behind it.' },
  { label: 'Marketing', body: 'Campaign copy drafted in Irish first, then given a proper English version rather than a mirror translation.' },
  { label: 'Customer communications', body: 'Routine replies and confirmations in Irish — with the sensitive ones still written by a person.' },
  { label: 'Newsletters', body: 'The single most common “we would if we had time” task, and the one AI changes most.' },
  { label: 'Product descriptions', body: 'Long catalogues in two languages, which is otherwise simply unaffordable for a small producer.' },
  { label: 'Training material', body: 'Internal guides and induction material in Irish, kept current as things change.' },
  { label: 'Translation', body: 'A first pass on documents, so the human time goes into judgement rather than typing.' },
  { label: 'Transcription', body: 'Meetings, interviews and recordings turned into text you can search — with the transcript checked.' },
  { label: 'Digital content', body: 'Captions, alt text, summaries and metadata in Irish, which is where Irish usually disappears first.' },
]
