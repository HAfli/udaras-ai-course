/** Shared content types. All course content is data, not markup — so it can be
 *  edited, translated or replaced without touching a component. */

export type Bilingual = { ga?: string; en: string; needsValidation?: boolean }

export type SlotKind = 'teach' | 'activity' | 'break' | 'reflect' | 'lab'

export interface TimetableSlot {
  time: string
  title: Bilingual
  kind: SlotKind
  detail?: string
}

export interface SlideGroup {
  id: string
  title: Bilingual
  range: string
  slides: { n: number; title: Bilingual; note?: string }[]
  callout?: { label: string; body: string }
}

export type ExerciseKind =
  | 'hallucination-quiz'
  | 'sorter'
  | 'traffic-light'
  | 'prompt-ladder'
  | 'irish-review'
  | 'scenarios'
  | 'stop'
  | 'workflow'
  | 'table-builder'
  | 'clinic'
  | 'charter'
  | 'ideas'
  | 'bilingual-lab'
  | 'never-automate'
  | 'workshop1'
  | 'rubric'
  | 'error-spot'

export interface Exercise {
  id: string
  number: string
  title: Bilingual
  kind: ExerciseKind
  purpose: string
  lesson?: string
  minutes?: number
}

export interface SessionMeta {
  id: 'prep' | 's1' | 's2' | 's3' | 's4'
  index: string
  title: Bilingual
  strapline: Bilingual
  duration: string
  week: string
  location?: string
  centralQuestion: Bilingual
  secondaryQuestion?: Bilingual
  narrative: Bilingual
  outcomes?: string[]
  timetable: TimetableSlot[]
  slideGroups: SlideGroup[]
  exercises: Exercise[]
  keyMessages: string[]
  irishComponent: string
  safetyComponent: string
  outputs: string[]
  betweenAfter?: BetweenWork
}

export interface BetweenWork {
  id: string
  title: Bilingual
  brief: string
  steps: string[]
  target?: number
  fields?: string[]
  flow?: string[]
}

export interface Framework {
  id: string
  title: Bilingual
  question: string
  steps: { label: Bilingual; body: string }[]
  tone: 'moss' | 'lichen' | 'heather'
}
