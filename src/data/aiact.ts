/* EU AI Act — educational content, verified against EU and legal sources in
   August 2026. See SOURCES at the foot of this file. Not legal advice. */

export const AI_ACT_INTRO = {
  disclaimer: 'Educational guidance — not legal advice.',
  standfirst:
    'The AI Act is the EU’s law on artificial intelligence. For most Gaeltacht businesses it is not a compliance project. It is a set of expectations that scale with how much harm the system could do — and an explicit expectation that the people using AI at work understand what they are using.',
  whyRegulate: [
    'AI systems increasingly make or shape decisions about people — who gets a job, a loan, a place, a service.',
    'The people affected usually cannot see the system, question it, or know it was involved.',
    'A single flawed system applies the same flaw to everybody, consistently and invisibly.',
    'The Act’s answer is proportionality: almost nothing for low-risk uses, real obligations where the stakes are high.',
  ],
}

export const RISK_TIERS = [
  {
    id: 'prohibited', tone: 'red', label: 'Unacceptable risk',
    summary: 'Banned outright across the EU.',
    detail:
      'A defined set of practices considered a clear threat to safety, livelihoods and rights. They include harmful manipulation, social scoring, untargeted scraping of facial images to build recognition databases, and emotion recognition in the workplace and in education. Two further prohibitions — AI-generated child sexual abuse material, and non-consensual intimate imagery of identifiable people — were added by the 2026 amendment.',
    forYou:
      'Two of these touch ordinary employers directly: do not use AI to infer employees’ emotions from their face or voice at work, and do not build face databases by scraping.',
  },
  {
    id: 'high', tone: 'amber', label: 'High risk',
    summary: 'Permitted, with substantial obligations.',
    detail:
      'Systems used in areas such as employment and worker management, education, essential services, biometrics, critical infrastructure, law enforcement and migration. Obligations include risk management, data quality, logging, documentation, human oversight and robustness.',
    forYou:
      'The one that reaches a small business is recruitment and staff management. If you are using AI to sift, rank or evaluate people, you are in this territory — take advice before, not after.',
  },
  {
    id: 'transparency', tone: 'moss', label: 'Transparency risk',
    summary: 'Permitted — but people must be told.',
    detail:
      'Where someone could be misled about what they are dealing with, disclosure is required: that you are interacting with an AI system; that content is artificially generated or manipulated; and that you are subject to emotion recognition or biometric categorisation. AI-generated content must also be marked in a machine-readable form.',
    forYou:
      'This is the tier that most often applies to a small business — chatbots on your website, and AI-generated images or text you publish.',
  },
  {
    id: 'minimal', tone: 'grey', label: 'Minimal risk',
    summary: 'No specific obligations under the Act.',
    detail:
      'The large majority of AI in use — spam filters, recommendation features, ordinary productivity assistance.',
    forYou:
      'Most of what you will do on this course sits here. Your data protection duties still apply, and they are the ones you are more likely to trip over.',
  },
] as const

export const CURRENT_POSITION = {
  banner: 'EU AI Act — current position: August 2026',
  disclaimer: 'Educational guidance — not legal advice.',
  note:
    'Checked against EU and legal sources in August 2026 and updated for Regulation (EU) 2026/1744. Verify before repeating any date in front of a room.',
}

export const LITERACY = {
  article: 'Article 4 — AI literacy',
  applied: 'Applies since 2 February 2025; amended July 2026',
  framing:
    'Providers and deployers of AI systems must take measures to support a sufficient level of AI literacy among the people who use those systems on their behalf — appropriate to those people’s role, knowledge, experience, training, and the context the AI is used in.',
  quote:
    'Providers and deployers of AI systems shall take measures to ensure, to their best extent, a sufficient level of AI literacy of their staff and other persons dealing with the operation and use of AI systems on their behalf…',
  quoteNote:
    'The original wording of Article 4. It was amended by Regulation (EU) 2026/1744 in July 2026: the obligation is now framed as taking measures to support the development of AI literacy, and expressly does not require providers or deployers to guarantee any specific level of it.',
  plain: [
    'It applies to the organisation, not to the individual employee. Working it out alone in the evenings is not the model the Act has in mind.',
    'It is proportionate — to the person’s role, knowledge, experience, training, and the context the system is used in.',
    'It is about measures taken to support AI literacy, not about guaranteeing that any particular person reaches a particular level.',
    'There is no prescribed syllabus, no register, and no certification that any individual is required to hold.',
  ],
  meansForSmallBusiness: [
    'The people using AI understand roughly what it is and where it fails.',
    'They know what must not be put into it.',
    'They know that output gets checked, and how.',
    'They know who is accountable for what goes out.',
    'You can show what you did about it — a session attended, a written rule, a short internal note.',
  ],
  courseClaim:
    'This programme can form part of an organisation’s measures to support AI literacy under Article 4 of the AI Act.',
  courseCaveat:
    'It does not, on its own, make any organisation legally compliant, and no individual is required to hold a certificate. What the Act asks for is proportionate measures suited to the people and the context — attendance here is one such measure among others, not a substitute for the organisation’s own judgement or, where the stakes are high, its own legal advice.',
  misconceptions: [
    { wrong: 'Staff need an AI certificate.', right: 'No certification is prescribed for individuals. The obligation is on the organisation to take measures.' },
    { wrong: 'Attending a course makes us compliant.', right: 'It can form part of your measures. Compliance depends on your circumstances, taken as a whole.' },
    { wrong: 'The AI Act bans AI.', right: 'A defined set of practices is prohibited. Almost everything a small business does with AI is not among them.' },
    { wrong: 'This only applies to tech companies.', right: 'Article 4 applies to deployers — organisations using AI systems professionally. That includes small Gaeltacht businesses and public bodies.' },
  ],
}

export const TIMELINE = [
  { date: '1 August 2024', label: 'The AI Act enters into force', note: 'Regulation (EU) 2024/1689.' },
  { date: '2 February 2025', label: 'Prohibited practices and AI literacy apply', note: 'Articles 5 and 4.' },
  { date: '2 August 2025', label: 'Governance and general-purpose AI rules apply', note: 'Obligations on the makers of general-purpose models.' },
  { date: '27 July 2026', label: 'The Digital Omnibus on AI enters into force', note: 'Regulation (EU) 2026/1744, published in the Official Journal on 24 July 2026. It amends the AI Act.', accent: true },
  { date: '2 August 2026', label: 'Transparency obligations apply', note: 'Article 50 — chatbot disclosure, marking of synthetic content, deepfake labelling. Not deferred.', accent: true },
  { date: '2 December 2026', label: 'End of transitional periods', note: 'For marking of some pre-existing systems, and for the two newly added prohibitions.' },
  { date: '2 December 2027', label: 'High-risk systems (Annex III)', note: 'Deferred from 2 August 2026 by the Digital Omnibus.' },
  { date: '2 August 2028', label: 'High-risk systems in regulated products (Annex I)', note: 'Deferred from 2 August 2027.' },
]

export const OMNIBUS_NOTE = {
  title: 'What changed in July 2026 — and what did not',
  changed: [
    'High-risk obligations for stand-alone systems (Annex III) deferred to 2 December 2027.',
    'High-risk obligations for AI embedded in regulated products (Annex I) deferred to 2 August 2028.',
    'Article 4 softened: measures to support AI literacy, with no requirement to guarantee a specific level.',
    'Two prohibitions added, covering AI-generated child sexual abuse material and non-consensual intimate imagery.',
  ],
  unchanged: [
    'The prohibitions in Article 5 — in force since February 2025.',
    'The general-purpose AI rules — in force since August 2025.',
    'The transparency obligations in Article 50 — applying from 2 August 2026.',
    'The AI literacy expectation itself, which still stands.',
  ],
  caution:
    'This is a live area. Verify dates against the Official Journal or the Commission’s own pages before repeating them in front of a room — and say so to participants. Showing people how to check is part of the lesson.',
}

export const RESPONSIBILITIES = [
  { role: 'Provider', body: 'Develops an AI system or a general-purpose AI model and puts it on the market. Most course participants are not providers.' },
  { role: 'Deployer', body: 'Uses an AI system under its own authority, in a professional capacity. This is what a Gaeltacht business or public body is. Article 4 applies to you.' },
  { role: 'Affected person', body: 'Someone on the receiving end of an AI-assisted decision. Your customers, your applicants, your community.' },
]

export const SOURCES = [
  { label: 'European Commission — Regulatory framework for AI', url: 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai' },
  { label: 'AI Act, Article 4 — AI literacy (full text)', url: 'https://artificialintelligenceact.eu/article/4/' },
  { label: 'European Commission — AI talent, skills and literacy', url: 'https://digital-strategy.ec.europa.eu/en/policies/ai-talent-skills-and-literacy' },
  { label: 'White & Case — EU AI Omnibus enters into force', url: 'https://www.whitecase.com/insight-alert/eu-ai-omnibus-enters-force-amending-ai-act' },
  { label: 'Gibson Dunn — Omnibus agreement and postponed deadlines', url: 'https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/' },
]
