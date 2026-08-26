import type { SessionMeta } from './types'

/** Preparatory planning session — contractual, and deliberately not a
 *  teaching day. Its purpose is to make the four sessions fit the room. */
export const sessionPrep: SessionMeta = {
  id: 'prep',
  index: 'Preparatory Session',
  title: { en: 'Preparatory Planning Day, Campas Íosagáin', ga: 'Lá Pleanála Ullmhúcháin, Campas Íosagáin', needsValidation: true },
  strapline: { en: 'The course is shaped before it is delivered.', ga: 'Múnlaítear an cúrsa sula gcuirtear ar fáil é.', needsValidation: true },
  duration: 'Planning day',
  week: 'Prior to delivery',
  location: 'Campas Íosagáin',
  centralQuestion: {
    en: 'What do the people in this room actually need?',
    ga: 'Cad go díreach atá ag teastáil ó na daoine sa seomra seo?',
    needsValidation: true,
  },
  narrative: { en: 'Nothing is taught before the context is understood.', ga: 'Ní mhúintear tada sula dtuigtear an comhthéacs.', needsValidation: true },
  outcomes: [
    'Agreed participant profile and range of digital confidence in the group.',
    'Agreed sector mix and the real workplace tasks the course will use as examples.',
    'Agreed language balance for delivery and materials.',
    'Agreed logistics: venue setup, devices, connectivity, accounts, accessibility needs.',
    'Agreed approach to participants who are sceptical about AI.',
    'Agreed feedback mechanism that feeds Sessions 2, 3 and 4.',
  ],
  timetable: [
    { time: '—', kind: 'activity', title: { en: 'Participant profile and expectations' }, detail: 'Who is coming, what they do, what digital confidence looks like across the group.' },
    { time: '—', kind: 'activity', title: { en: 'Real tasks, real examples' }, detail: 'Collecting genuine workplace tasks so nothing in the course is hypothetical.' },
    { time: '—', kind: 'activity', title: { en: 'Language of delivery and materials' }, detail: 'Register, terminology, and how bilingual handouts will work.' },
    { time: '—', kind: 'activity', title: { en: 'Practicalities' }, detail: 'Room, devices, connectivity, tool accounts, accessibility.' },
    { time: '—', kind: 'activity', title: { en: 'Feedback loop design' }, detail: 'How participant feedback after each session reaches the next one. This is the mechanism the contract’s iterative principle depends on.' },
  ],
  slideGroups: [],
  exercises: [],
  keyMessages: [
    'This ensures the course content is practical, relevant, and tailored to the lived experience of participants from the outset.',
    'Údarás na Gaeltachta coordinates participant attendance and logistics; MTU delivers.',
  ],
  irishComponent: 'Delivery language, register and terminology decisions are made here, with Údarás input, before any material is finalised.',
  safetyComponent: 'Agreement on which tools participants will use, on what accounts, and what organisational rules already apply to them.',
  outputs: [
    'A confirmed participant profile.',
    'A bank of real workplace tasks to use as course examples.',
    'Confirmed logistics and language decisions.',
    'A feedback mechanism connecting each session to the next.',
  ],
}
