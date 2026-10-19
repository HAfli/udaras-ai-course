import type { ExerciseKind, SessionMeta, SlideGroup, TimetableSlot } from './types'
import { S4 } from './session4Content'

/* Session 4 — the final session: a full day, 10:00–15:00 (organiser's request; the contract's Appendix A describes a
 * "Half-Day Wrap-Up (Week 8)" — to be confirmed in writing, see CONTRACT.contractNotes). Date not yet confirmed.
 * Timetable, exercises and Irish wording come from the same source as the slides and Word documents
 * (scripts/session4). Reused Irish is copied exactly; all new Irish is grammar-checked but awaiting native
 * review (needsValidation). */

const bi = (b: { readonly ga: string; readonly en: string }) => ({ ga: b.ga, en: b.en, needsValidation: true })

const timetable: TimetableSlot[] = S4.TIMETABLE.map(t => ({
  time: t.time,
  kind: t.kind,
  title: bi(t.title),
  ...(t.detail ? { detail: t.detail.en } : {}),
}))

const slideGroups: SlideGroup[] = S4.SLIDE_GROUPS.map(g => ({
  id: g.id,
  range: g.range,
  title: bi(g.title),
  slides: g.slides.map(s => ({ n: s.n, title: { ga: s.ga, en: s.en, needsValidation: true } })),
}))

const PART: Record<number, string> = { 0: 'Reference', 2: 'Part 2', 3: 'Part 3', 4: 'Part 4', 5: 'Part 5', 6: 'Part 6', 7: 'Part 7', 8: 'Part 8', 9: 'Part 9' }

export const session4: SessionMeta = {
  id: 's4',
  index: 'Session 4',
  title: bi(S4.META.title),
  strapline: bi(S4.META.strapline),
  duration: S4.META.durationLabel.en,
  week: 'Week 8',
  location: S4.META.venue,
  centralQuestion: bi(S4.META.question),
  narrative: bi(S4.STRAPLINE_REUSED),
  outcomes: S4.OUTCOMES.map(o => o.en),
  timetable,
  slideGroups,
  exercises: S4.SITE.exercises.map(e => ({
    id: e.id,
    number: PART[e.part],
    kind: e.id as ExerciseKind,
    ...(e.minutes ? { minutes: e.minutes } : {}),
    title: bi(e.title),
    purpose: e.purpose.en,
    lesson: e.lesson.en,
  })),
  keyMessages: S4.SITE.keyMessages.map(m => m.en),
  irishComponent: S4.SITE.irishComponent.en,
  safetyComponent: S4.SITE.safetyComponent.en,
  outputs: S4.SITE.outputs.map(o => o.en),
}
