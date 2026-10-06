/* Participant-facing downloads — PDF ONLY. Built by scripts/build_public_downloads.py from the final
 * course materials. No PPTX, DOCX, ZIP, facilitator guides, answer keys or QA reports are published. */

export interface Download { file: string; ga: string; en: string; pages: number }

export const DOWNLOADS: Record<'s1' | 's2' | 's3', Download[]> = {
  s1: [
    { file: 'Session-1-Participant-Package.pdf', ga: 'Pacáiste an Rannpháirtí', en: 'Participant Package — Workshops 1 and 2, Irish and English', pages: 16 },
    { file: 'Session-1-Slides.pdf', ga: 'Sleamhnáin', en: 'Slides', pages: 55 },
  ],
  s2: [
    { file: 'Session-2-Participant-Package.pdf', ga: 'Pacáiste an Rannpháirtí', en: 'Participant Package — Quick Guide, Workbook, Fictional Proposal', pages: 21 },
    { file: 'Session-2-Slides.pdf', ga: 'Sleamhnáin', en: 'Slides', pages: 33 },
  ],
  s3: [
    { file: 'Session-3-Participant-Package.pdf', ga: 'Pacáiste an Rannpháirtí', en: 'Participant Package — Quick Guide, Workbook, Fictional Scenario', pages: 37 },
    { file: 'Session-3-Slides.pdf', ga: 'Sleamhnáin', en: 'Slides', pages: 40 },
    { file: 'Session-3-Source-Pack.pdf', ga: 'An Pacáiste Foinsí', en: 'Supporting Source Pack — eight fictional sources for “Give AI a folder”', pages: 8 },
  ],
}
