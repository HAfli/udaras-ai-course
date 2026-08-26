/* Facilitator profile. Biography text supplied by Dr Afli.
 * No claim, award, publication or metric has been added to what was supplied. */

export const FACILITATOR = {
  name: 'Dr Haithem Afli',
  role: 'AI, Natural Language Processing and Human-Centred AI Researcher',
  institution: 'Munster Technological University',
  websiteLabel: 'Learn more about Dr Haithem Afli',
  website: 'https://hafli.github.io/haithem-afli-academic-website/about.html',
  credentials: 'Human-Centred AI · NLP · Machine Translation · Responsible AI',

  /**
   * PHOTOGRAPH
   * The portrait is bundled with the site (src/assets/haithem-afli.jpg), so it
   * works offline, in the single-file build, and at any base path. To replace
   * it, drop a new 4:5 portrait JPEG at that path and rebuild.
   * photoRemote is only a fallback if the bundled file ever fails to load;
   * after that a clearly marked placeholder is shown. Never substitutes
   * another person's photograph.
   */
  photoRemote:
    'https://hafli.github.io/haithem-afli-academic-website/assets/img/haithem-afli-portrait-medium.jpg',
  photoAlt: 'Dr Haithem Afli',
  photoPlaceholder: '[Dr Haithem Afli — professional photograph]',

  bio: [
    'Dr Haithem Afli is a Lecturer in Computer Science at Munster Technological University (MTU), Ireland, and Director of the Human-Centred AI (HAI) Research Group. He is a Principal Investigator at the ADAPT Centre and works at the intersection of Artificial Intelligence, Natural Language Processing, Machine Translation and responsible AI.',
    'His research focuses particularly on how AI works with language, including multilingual and low-resource languages, machine translation, language models and culturally aware AI. His work also explores responsible and human-centred AI across areas including healthcare, life sciences and social sciences.',
    'Dr Afli is a Senior Member of IEEE and is actively involved in national and European AI research and innovation projects.',
  ],

  researchStory: [
    'My research is concerned with how AI understands, generates and translates human language. Working across multilingual and low-resource language technologies has shown me that AI does not perform equally across languages.',
    'Irish provides an especially interesting context: the challenge is not simply whether AI can produce Irish, but whether it can produce Irish that is accurate, natural, culturally appropriate and trustworthy.',
  ],
} as const

export const RESEARCH_AREAS = [
  {
    id: 'nlp',
    title: 'Natural Language Processing',
    body: 'How machines work with human language at all — reading it, generating it, and getting it wrong in ways that are worth understanding.',
    icon: 'MessagesSquare',
  },
  {
    id: 'mt',
    title: 'Machine Translation',
    body: 'Automatic translation between languages, and why quality falls away exactly where a business needs it most: terminology, register and culturally specific content.',
    icon: 'Languages',
  },
  {
    id: 'lowres',
    title: 'Multilingual & Low-Resource AI',
    body: 'Building language technology for languages without vast digital archives behind them. This is the strand that speaks most directly to Irish.',
    icon: 'Globe',
  },
  {
    id: 'llm',
    title: 'Large Language Models',
    body: 'What these systems actually do, how their behaviour is evaluated, and why fluent output is not the same thing as reliable output.',
    icon: 'Braces',
  },
  {
    id: 'responsible',
    title: 'Responsible & Human-Centred AI',
    body: 'Designing systems around the people affected by them, and keeping meaningful human judgement in the decisions that matter.',
    icon: 'ShieldCheck',
  },
  {
    id: 'applied',
    title: 'AI for Language, Healthcare and Life Sciences',
    body: 'Applied work where the cost of an error is real, which is where responsible practice stops being an abstraction.',
    icon: 'HeartPulse',
  },
] as const

/** Research → workplace chain shown on the research page. */
export const RESEARCH_TO_WORKPLACE = [
  { label: 'Research', note: 'Multilingual NLP, machine translation, language models.' },
  { label: 'AI + Language', note: 'What these systems can and cannot do with human language.' },
  { label: 'Irish', note: 'What that means for a language with less digital material behind it.' },
  { label: 'Real workplace tasks', note: 'Newsletters, posts, customer replies, documents, translation.' },
  { label: 'Human judgement', note: 'The validation step that makes the output publishable.' },
  { label: 'Responsible AI', note: 'A named person, a written rule, a workflow you can defend.' },
]

export const FEEDBACK = {
  url: 'https://forms.gle/cBW3zAxPVmBEeFoM7',
  label: 'Share your feedback',
  short: 'Give feedback',
  note: 'Opens Google Forms in a new tab. It is an external service, separate from this site.',
}
