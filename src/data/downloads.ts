/* Participant-facing downloads — PDF ONLY. Built by scripts/build_public_downloads.py from the final
 * course materials. No PPTX, DOCX, ZIP, facilitator guides, answer keys or QA reports are published.
 * ga / en: the button label in each language (only the selected one is shown); *Detail: the fuller
 * description used for the screen-reader label. */

export interface Download { file: string; ga: string; en: string; gaDetail: string; enDetail: string; pages: number }

export const DOWNLOADS: Record<'s1' | 's2' | 's3', Download[]> = {
  s1: [
    { file: 'Session-1-Participant-Package.pdf', ga: 'Pacáiste an Rannpháirtí', en: 'Participant Package', pages: 16,
      gaDetail: 'Pacáiste an Rannpháirtí — Ceardlanna 1 agus 2, i nGaeilge agus i mBéarla', enDetail: 'Participant Package — Workshops 1 and 2, Irish and English' },
    { file: 'Session-1-Slides.pdf', ga: 'Sleamhnáin', en: 'Slides', pages: 55, gaDetail: 'Sleamhnáin', enDetail: 'Slides' },
  ],
  s2: [
    { file: 'Session-2-Participant-Package.pdf', ga: 'Pacáiste an Rannpháirtí', en: 'Participant Package', pages: 21,
      gaDetail: 'Pacáiste an Rannpháirtí — Eolas Gasta, Leabhar Oibre, Togra Ficseanúil', enDetail: 'Participant Package — Quick Guide, Workbook, Fictional Proposal' },
    { file: 'Session-2-Slides.pdf', ga: 'Sleamhnáin', en: 'Slides', pages: 33, gaDetail: 'Sleamhnáin', enDetail: 'Slides' },
  ],
  s3: [
    { file: 'Session-3-Participant-Package.pdf', ga: 'Pacáiste an Rannpháirtí', en: 'Participant Package', pages: 37,
      gaDetail: 'Pacáiste an Rannpháirtí — Eolas Gasta, Leabhar Oibre, Cás Ficseanúil', enDetail: 'Participant Package — Quick Guide, Workbook, Fictional Scenario' },
    { file: 'Session-3-Slides.pdf', ga: 'Sleamhnáin', en: 'Slides', pages: 40, gaDetail: 'Sleamhnáin', enDetail: 'Slides' },
    { file: 'Session-3-Source-Pack.pdf', ga: 'An Pacáiste Foinsí', en: 'Supporting Source Pack', pages: 8,
      gaDetail: 'An Pacáiste Foinsí — ocht bhfoinse fhicseanúla don ghníomhaíocht “Tabhair fillteán do AI”', enDetail: 'Supporting Source Pack — eight fictional sources for “Give AI a folder”' },
  ],
}
