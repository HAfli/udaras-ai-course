/**
 * Multimedia resource registry — single source of truth for every video,
 * diagram or screenshot referenced from the Session 1 story, the slide
 * plan and the PPTX. Nothing here is embedded or auto-played: every real
 * external video is a link with its own metadata, so it can be reviewed
 * before use and swapped without touching the story or slide data.
 *
 * `verified` means: found via web search and corroborated across more than
 * one independent source at the time of writing (see `verifiedNote`). It
 * is not a guarantee the video still exists — check before presenting.
 * No video ID, URL, licence or duration on this page has been invented;
 * anywhere real research did not turn up something short enough and
 * reputable enough for live use, that slot is a labelled placeholder
 * instead, per course policy (no invented sources).
 */

export type MultimediaKind = 'video' | 'diagram' | 'screenshot' | 'photo'

export interface MultimediaResource {
  id: string
  kind: MultimediaKind
  title: string
  description: string
  /** Where this is used in the story/slide plan */
  slideIds: string[]
  activityId?: string
  /** For kind: 'video' */
  source?: string
  url?: string
  durationLabel?: string
  liveUseSuitable?: boolean
  attribution?: string
  licence?: string
  verified?: boolean
  verifiedNote?: string
  questionWhileWatching?: string
  fallback: string
  altText?: string
  caption?: string
  transcriptAvailable?: boolean
}

/** The five demo "example output" cards added to the v4 PPTX — generic,
 *  unbranded mockups (not real product screenshots), doubling as each
 *  demo's offline fallback if live AI access fails on the day. */
export const DEMO_MOCKUP_SCREENSHOTS: MultimediaResource[] = [
  { id: 'S1-SCR1', kind: 'screenshot', title: 'Generate content — example output', description: 'Illustrative chat-style mockup, not a real product screenshot.', slideIds: [], activityId: 'S1-D1', fallback: 'This mockup is itself the fallback if the live tool is unavailable.', verified: true },
  { id: 'S1-SCR2', kind: 'screenshot', title: 'Edit a proposal — example output', description: 'Illustrative chat-style mockup, not a real product screenshot.', slideIds: [], activityId: 'S1-D2', fallback: 'This mockup is itself the fallback if the live tool is unavailable.', verified: true },
  { id: 'S1-SCR3', kind: 'screenshot', title: 'Create a newsletter — example output', description: 'Illustrative chat-style mockup, not a real product screenshot.', slideIds: [], activityId: 'S1-D3', fallback: 'This mockup is itself the fallback if the live tool is unavailable.', verified: true },
  { id: 'S1-SCR4', kind: 'screenshot', title: 'Analyse survey feedback — example output', description: 'Illustrative chat-style mockup, not a real product screenshot.', slideIds: [], activityId: 'S1-D4', fallback: 'This mockup is itself the fallback if the live tool is unavailable.', verified: true },
  { id: 'S1-SCR5', kind: 'screenshot', title: 'Ask questions of documents — example output', description: 'Illustrative chat-style mockup, not a real product screenshot.', slideIds: [], activityId: 'S1-D5', fallback: 'This mockup is itself the fallback if the live tool is unavailable.', verified: true },
]

/** The real GAA case study (v5.2 PPTX, slides S1-42/S1-43). The tweet
 *  screenshot is used unmodified; the artwork crop is a zoomed detail of
 *  the same publicly posted images, cropped only — never altered. This is
 *  a REAL CASE — keep it clearly distinguished from the FICTIONAL Coastal
 *  Craft exercise that follows it in Workshop 4. */
export const GAA_CASE_RESOURCES: MultimediaResource[] = [
  {
    id: 'S1-GAA1', kind: 'screenshot',
    title: 'Barry Masterson X post, 18 May 2024',
    description: 'Real, publicly posted screenshot questioning whether the GAA used AI-generated match-programme artwork. Used unmodified — not recreated or altered.',
    slideIds: ['S1-42'], activityId: 'S1-A4',
    source: 'X (@BarryMasterson); Irish Independent, "GAA defends use of AI applications to create artwork for match programmes following criticism", 18 May 2024, https://www.independent.ie/irish-news/gaa-defends-use-of-ai-applications-to-create-artwork-for-match-programmes-following-criticism/a/129643374.html',
    verified: true,
    verifiedNote: 'Supplied directly as a screenshot by the course author; used as-is, cropped only for layout. Corroborated by the Irish Independent report of 18 May 2024.',
    fallback: 'If the image cannot display, read the post text aloud — it is fully quoted in the speaker notes.',
  },
  {
    id: 'S1-GAA2', kind: 'photo',
    title: 'GAA artwork detail — misspelt crest',
    description: 'Zoomed crop of the real artwork from the same post: the county name reads "CIR COGHAIN" rather than Tír Eoghain (Tyrone) — an AI-introduced Irish-language error on a GAA crest.',
    slideIds: ['S1-43'], activityId: 'S1-A4',
    source: 'Crop of the artwork attached to the same real X post', verified: true,
    fallback: 'Describe the misspelling verbally if the image is unavailable; the point survives without the visual.',
  },
]

/** Original course-created visuals of the fictional character Aoife and
 *  the Gaeltacht scenes (v5.2 PPTX). These are illustrative course
 *  artwork, NOT photographs and NOT any real person's likeness — Aoife
 *  is a fictional character (see story1.ts). Debug labels baked into the
 *  original exports were removed by cropping/clone-stamping adjacent
 *  pixels from the same asset — no content was invented and no
 *  background was replaced with anything not already in the original. */
export const AOIFE_PHOTO_RESOURCES: MultimediaResource[] = [
  { id: 'S1-PH1', kind: 'photo', title: 'Aoife, 08:47 — opening scene', description: 'Original course-created visual of the fictional character Aoife, cropped clean. The same visual is reframed — wide, then medium, then close-up — across slides S1-2 to S1-4 for the 08:47 → 09:02 → 09:08 opening sequence.', slideIds: ['S1-2', 'S1-3', 'S1-4'], activityId: 'S1-A1', verified: true, fallback: 'Slide text alone (title + banner) carries the scene without the image.' },
  { id: 'S1-PH2', kind: 'photo', title: 'Signpost + AI→Language→Irish→Business→Judgement chain', description: 'Original course-created visual with the chain already composited in.', slideIds: ['S1-15'], activityId: 'S1-A2', verified: true, fallback: 'The research-quote text below the image stands alone.' },
  { id: 'S1-PH3', kind: 'photo', title: 'Notes → AI draft → human review', description: 'Original course-created sticky-note style visual for the proposal demo.', slideIds: ['S1-32'], activityId: 'S1-D2', verified: true, fallback: 'The three prompt boxes on the same slide are self-sufficient.' },
  { id: 'S1-PH4', kind: 'photo', title: 'Coastal Craft paragraph + STOP', description: 'Original course-created visual combining the (already-revealed, Irish-language) paragraph with the STOP sign — used only after Workshop 4’s reveal is complete, on the STOP slide, so nothing is spoiled.', slideIds: ['S1-47'], verified: true, fallback: 'The four STOP boxes on the same slide stand alone.' },
  { id: 'S1-PH5', kind: 'photo', title: '08:47 → 15:25 closing bookend', description: 'Original course-created split visual of the fictional character Aoife, echoing the opening scene.', slideIds: ['S1-52'], activityId: 'S1-A6', verified: true, fallback: 'The closing text (title + key messages) stands alone.' },
]

export const MULTIMEDIA_RESOURCES: MultimediaResource[] = [
  {
    id: 'S1-V1',
    kind: 'video',
    title: 'Large Language Models explained briefly',
    description: 'A short, well-known visual explanation of how a large language model generates text, from a widely cited maths/CS explainer channel.',
    slideIds: ['S1-24'],
    activityId: 'S1-A2',
    source: '3Blue1Brown (YouTube)',
    url: 'https://www.youtube.com/watch?v=LPZh9BOjkQs',
    durationLabel: 'several minutes (confirm exact runtime before use)',
    liveUseSuitable: false,
    verified: true,
    verifiedNote: 'Title and channel corroborated across multiple independent search results at time of writing (Sept 2026); exact runtime not independently confirmed, so treated as a pre/post-session resource rather than a timed in-room video.',
    attribution: '3Blue1Brown',
    licence: 'Standard YouTube licence — link out, do not re-host.',
    questionWhileWatching: 'Where in this explanation does "predicting the next likely word" stop being the whole story?',
    fallback: 'Live demo (Section 3 / S1-D3) plus the on-screen Prompt → Model → Output diagram (S1-DG1) cover the same idea without needing internet access.',
    transcriptAvailable: true,
  },
  {
    id: 'S1-V2',
    kind: 'video',
    title: 'AI, Machine Learning, Deep Learning and Generative AI Explained',
    description: 'IBM Technology (Jeff Crume) walking through how these terms relate to each other.',
    slideIds: ['S1-16'],
    activityId: 'S1-A2',
    source: 'IBM Technology (YouTube)',
    url: 'https://www.youtube.com/watch?v=qYNweeDHiyU',
    durationLabel: 'approx. 10 minutes — too long for the live timetable',
    liveUseSuitable: false,
    verified: true,
    verifiedNote: 'Title, presenter and channel corroborated across multiple independent sources including IBM’s own site.',
    attribution: 'IBM Technology',
    licence: 'Standard YouTube licence — link out, do not re-host.',
    questionWhileWatching: '(For between-session viewing) Which of the four terms had you already used correctly before today, and which had you mixed up?',
    fallback: 'Not used live. Offered as an optional between-session link only (see Session 1 website, "Go further" list).',
  },
  {
    id: 'S1-V3',
    kind: 'video',
    title: 'AI hallucinations explained',
    description: 'IBM Technology (Martin Keen) on why large language models hallucinate and how to reduce it.',
    slideIds: ['S1-26'],
    activityId: 'S1-A4',
    source: 'IBM Technology (YouTube)',
    url: 'https://www.youtube.com/watch?v=gllsVqE8s44',
    durationLabel: 'approx. 9–10 minutes — too long for the live timetable',
    liveUseSuitable: false,
    verified: true,
    verifiedNote: 'Corroborated across independent search results; treated conservatively as a between-session resource rather than a timed live video given its length.',
    attribution: 'IBM Technology',
    licence: 'Standard YouTube licence — link out, do not re-host.',
    questionWhileWatching: '(For between-session viewing) Which of the fixes mentioned would actually be practical in your own organisation?',
    fallback: 'The live Workshop 4 exercise (S1-W4) delivers the same lesson hands-on and needs no internet connection.',
  },
  {
    id: 'S1-V4-PLACEHOLDER',
    kind: 'video',
    title: '[Placeholder — no verified short video found]',
    description:
      'A genuinely short (30s–2min), reputable, professionally produced explainer on multilingual/low-resource-language AI was searched for and not found with enough confidence to present as verified. Per course policy, nothing was substituted or invented.',
    slideIds: ['S1-14', 'S1-15'],
    activityId: 'S1-A2',
    verified: false,
    fallback: 'The live "Why Irish matters" moment (S1-15) and the Irish-thread slide (S1-14) carry this content without a video. If a suitable video is identified later, it can be added here without touching the story or slide data.',
  },
]

/** Small helper so the website and any future PPTX-generation script read
 *  from the same place rather than re-typing lookups. */
export function resourcesFor(slideOrActivityId: string): MultimediaResource[] {
  return MULTIMEDIA_RESOURCES.filter(
    r => r.slideIds.includes(slideOrActivityId) || r.activityId === slideOrActivityId,
  )
}
