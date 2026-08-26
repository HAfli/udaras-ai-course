/* Short, accessible research case study.
 * ---------------------------------------------------------------------
 * NO specific publications, datasets, figures or results are asserted here.
 * Anything requiring the instructor's own material is marked PLACEHOLDER and
 * rendered visibly as such in the interface.
 * ------------------------------------------------------------------- */

export const RESEARCH_FRAME = {
  eyebrow: 'Research case study · Session 3',
  title: 'Why the machine finds Irish harder',
  standfirst:
    'A short, non-technical detour into the research behind the session. The point is not the methods. The point is a single claim that participants can carry into their own decisions.',
  claim:
    'Language models need to adapt to languages and cultures — not simply transfer assumptions from English.',
  instructor: {
    name: 'Dr Haithem Afli',
    affiliation: 'Munster Technological University',
    fields: [
      'Natural language processing',
      'Machine translation',
      'Multilingual language technologies',
      'Low-resource language processing',
      'Speech and language technology',
    ],
  },
}

export const CONCEPTS = [
  {
    id: 'lowres',
    term: 'Low-resource language processing',
    plain:
      'Building language technology for languages that do not have vast quantities of digital text and speech behind them.',
    depth:
      'Modern systems learn from very large amounts of written and spoken material. English has an enormous amount. Irish has a great deal less — not because it is a lesser language, but because far less of it has been written down, digitised, transcribed and made available in machine-readable form. Every method in this field is, in one way or another, an answer to the question: how do you build something good when you cannot simply add more data?',
    matters: 'It explains, without mysticism, why the same tool feels sharper in English than in Irish.',
  },
  {
    id: 'multilingual',
    term: 'Multilingual NLP',
    plain:
      'One model handling many languages at once, so that what it learns in one can help it in another.',
    depth:
      'Training across many languages lets a system carry structure learned from data-rich languages over to data-poor ones. It genuinely helps. It also has a cost: the model’s default assumptions — about word order, about how formality works, about what a normal sentence looks like — are shaped disproportionately by the languages that dominated its training. That is the mechanism behind Irish output that is grammatically defensible and still sounds like translated English.',
    matters: 'Sharing between languages is why Irish works at all in these tools — and why it can sound borrowed.',
  },
  {
    id: 'mt',
    term: 'Machine translation',
    plain: 'Automatic translation between languages.',
    depth:
      'Quality is uneven in a specific and predictable way: common, everyday, well-attested material translates well; specialised terminology, regional usage, institutional register and culturally specific content degrade fastest. For a business, that is precisely the material with your name on it.',
    matters: 'The output is a draft. Treating it as a finished translation is where the trouble starts.',
  },
  {
    id: 'speech',
    term: 'Speech and language technology',
    plain: 'Systems that recognise speech, produce speech, or work with the two together.',
    depth:
      'Speech recognition has to cope with dialect, accent, speed, background noise and code-switching between Irish and English mid-sentence. For a language with strong regional variation and comparatively little transcribed audio, every one of those is harder than the English equivalent.',
    matters: 'Automatic transcription of Irish is useful, and it is not yet a service you can leave unattended.',
  },
  {
    id: 'cultural',
    term: 'Cultural adaptation of language models',
    plain: 'Making a model fit the culture of its users, not just the grammar of their language.',
    depth:
      'Correct grammar is the floor, not the goal. What makes text usable is register, convention, the right idiom for the occasion, and knowing what is normally left unsaid. These are cultural properties, and they do not arrive automatically with a larger model or a bigger dataset. They have to be built for.',
    matters: 'This is why a competent Irish speaker, not a better prompt, is the thing that makes output publishable.',
  },
  {
    id: 'variation',
    term: 'Dialect and linguistic variation',
    plain: 'Irish is not one uniform target.',
    depth:
      'Regional varieties differ in vocabulary, pronunciation and idiom. A system trained on whatever mixture happened to be available will tend towards an average that belongs to nobody in particular — recognisable everywhere, native nowhere.',
    matters: 'If your community speaks a particular Irish, generic AI Irish will read as an outsider’s.',
  },
]


/* ------------------------------------------------------------------ *
 *  THE IRISH AI PIPELINE
 *  Six stages. Each carries three facets, because the point of the
 *  visual is not the diagram — it is where the human belongs.
 * ------------------------------------------------------------------ */

export interface PipelineStage {
  id: string
  label: string
  ga: string
  gaNeedsValidation?: boolean
  summary: string
  does: string
  wrong: string[]
  human: string
}

export const PIPELINE: PipelineStage[] = [
  {
    id: 'p1',
    label: 'Irish speech',
    ga: 'Caint Ghaeilge',
    summary: 'A person speaking, in their own dialect, at their own pace.',
    does: 'Nothing yet. This is the input — a real human voice, with an accent, a speed, a room and a background noise level that no system chose.',
    wrong: [
      'Recording quality varies more than people expect, and it sets the ceiling for everything downstream.',
      'Speakers switch between Irish and English mid-sentence, which is entirely normal and which systems handle badly.',
    ],
    human: 'Deciding what is worth recording, and in whose voice. A recording of the wrong person saying the wrong thing is not fixed by better technology.',
  },
  {
    id: 'p2',
    label: 'Speech recognition',
    ga: 'Aithint chainte',
    summary: 'Audio converted to text.',
    does: 'Matches sound patterns against what it learned from transcribed audio, and produces the most probable sequence of words.',
    wrong: [
      'Less transcribed Irish audio to learn from than the English equivalent, so it is working from a thinner picture of what Irish sounds like.',
      'Dialect variation: a speaker from one region may be recognised less accurately than another, depending on the training material.',
      'Pronunciation, speed and code-switching all reduce accuracy — and the transcript comes out looking equally confident either way.',
    ],
    human: 'Reading the transcript against the audio. This is the cheapest correction in the whole chain and the one most often skipped.',
  },
  {
    id: 'p3',
    label: 'Irish text',
    ga: 'Téacs Gaeilge',
    summary: 'A transcript — already carrying whatever the recogniser got wrong.',
    does: 'Nothing. It is a handover point, which is exactly why it matters: everything after this treats it as the truth.',
    wrong: [
      'Errors from the previous step are now indistinguishable from what was actually said.',
      'Punctuation and sentence boundaries are guesses, and they change meaning.',
    ],
    human: 'A competent Irish speaker fixing the text here, before anything else is built on it. Correcting at this point costs minutes; correcting after publication costs more.',
  },
  {
    id: 'p4',
    label: 'Language processing',
    ga: 'Próiseáil teanga',
    gaNeedsValidation: true,
    summary: 'The text is summarised, rewritten, classified or otherwise worked on.',
    does: 'Applies a language model to the Irish text — summarising it, extracting points, changing its register, or preparing it for translation.',
    wrong: [
      'Models are shaped disproportionately by the languages that dominated their training, so Irish gets handled with borrowed assumptions.',
      'Summarising can quietly drop the one clause that mattered, and the summary reads perfectly well without it.',
      'Register and formality are handled by rules learned mostly from English.',
    ],
    human: 'Judging whether the output still means what the speaker meant. A model can preserve the words and lose the point.',
  },
  {
    id: 'p5',
    label: 'Translation',
    ga: 'Aistriúchán',
    summary: 'Irish text converted to another language.',
    does: 'Maps the Irish onto the most probable equivalent in the target language, phrase by phrase, in context.',
    wrong: [
      'Terminology: specialised and institutional terms are exactly where less data hurts most, and exactly where a business needs to be right.',
      'Cultural context: register, idiom and implication do not survive the crossing well. What arrives is accurate in content and wrong in tone.',
      'Names, places and titles are treated as ordinary words unless something stops them being translated.',
    ],
    human: 'Someone who knows both the language and the subject. Bilingual is not the same qualification as bilingual in this field.',
  },
  {
    id: 'p6',
    label: 'English',
    ga: 'Béarla',
    summary: 'The final output, several steps from what was actually said.',
    does: 'Presents a fluent, confident English text — with no signal anywhere on the page about which parts are reliable.',
    wrong: [
      'Nothing downstream announces that something upstream went wrong. Fluency is the disguise.',
      'The reader has no way to see how far this is from the original, and no reason to suspect it.',
    ],
    human: 'The decision to publish, made by a named person who understands what the chain did and can stand over the result.',
  },
]

export const ERROR_LESSON =
  'Each step is imperfect, and the errors compound. Nothing downstream announces that something upstream went wrong — the final English reads perfectly fluently. That is the whole problem in one sentence.'

export const REAL_EXAMPLE_PLACEHOLDER = {
  marker: '[REAL IRISH-LANGUAGE EXAMPLE TO BE PROVIDED]',
  intro:
    'The strongest single slide in Session 3 would be one real Irish sentence taken through this chain, showing the actual errors where they actually occurred. That example is deliberately not invented here.',
  willShow: [
    'The Irish sentence, as spoken',
    'What the speech recogniser produced',
    'The Irish text after correction',
    'What language processing did to it',
    'The translation',
    'The final English — with the real errors marked where they entered',
  ],
}

export const RESEARCH_PLACEHOLDERS = [
  'Selected publications — to be supplied. No references are listed here rather than risk inventing them.',
  'Named projects, datasets or tools to reference.',
  'Any figures, evaluation results or comparative statistics intended for the slide.',
]
