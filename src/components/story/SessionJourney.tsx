import { session1 } from '../../data/session1'
import type { TimetableSlot } from '../../data/types'

/** The one place the timetable is turned into "today's journey" —
 *  reads straight from session1.timetable (the same data the Timetable
 *  tab renders), so this can never drift into a second, contradictory
 *  version of the day. Workshops, reflections and the final activity
 *  are marked by a rule weight and label, not a filled colour block. */
const EXERCISE_FOR_TITLE: { match: string; id: string; kind: 'workshop' | 'reflection' | 'final' }[] = [
  { match: 'Workshop 1', id: 'e1', kind: 'workshop' },
  { match: 'Reflection 1', id: 'e1r', kind: 'reflection' },
  { match: 'Workshop 2', id: 'e2', kind: 'workshop' },
  { match: 'Reflection 2', id: 'e2r', kind: 'reflection' },
  { match: 'My first AI experiment', id: 'e5b', kind: 'final' },
]

function findActivity(slot: TimetableSlot) {
  return EXERCISE_FOR_TITLE.find(e => slot.title.en.includes(e.match))
}

function ActivityLine({ time, title, kind, id }: { time: string; title: string; kind: 'workshop' | 'reflection' | 'final'; id: string }) {
  const label = { workshop: 'Workshop', reflection: 'Reflection', final: 'Final activity' }[kind]
  const weight = kind === 'workshop' ? 'border-l-[3px] border-ink pl-4' : 'border-l border-ink/40 pl-4'
  return (
    <a href={`#/session/s1/exercises/${id}`} className={`group block py-2 ${weight}`}>
      <p className="text-[.68rem] font-bold uppercase tracking-wide text-ink-faint">{label} · {time}</p>
      <p className={`mt-0.5 font-display leading-snug group-hover:underline ${kind === 'workshop' ? 'text-lg font-semibold' : 'text-base font-medium italic'}`}>
        {title}
      </p>
    </a>
  )
}

function StepLine({ time, title, isBreak }: { time: string; title: string; isBreak?: boolean }) {
  return (
    <p className={`py-2 pl-4 text-sm ${isBreak ? 'italic text-ink-faint' : 'text-ink-soft'}`}>
      <span className="font-mono text-[.72rem] text-ink-faint">{time}</span>
      <span className="ml-2">{title}</span>
    </p>
  )
}

function Flow({ slots }: { slots: TimetableSlot[] }) {
  return (
    <div className="divide-y divide-ink/10">
      {slots.map((slot, i) => {
        const activity = findActivity(slot)
        return activity ? (
          <ActivityLine key={i} time={slot.time} title={slot.title.en} kind={activity.kind} id={activity.id} />
        ) : (
          <StepLine key={i} time={slot.time} title={slot.title.en} isBreak={slot.kind === 'break'} />
        )
      })}
    </div>
  )
}

export function SessionJourney() {
  const lunchIdx = session1.timetable.findIndex(t => t.title.en.toLowerCase().includes('lunch'))
  const morning = session1.timetable.slice(0, lunchIdx)
  const afternoon = session1.timetable.slice(lunchIdx)

  return (
    <section aria-labelledby="journey-h" className="border-y border-ink/15 py-8">
      <h2 id="journey-h" className="eyebrow">Today's journey</h2>
      <p className="mt-2 max-w-2xl text-sm text-ink-mute">
        Understand in the morning, try it in the afternoon. Workshop 1 and Workshop 2 are the two hands-on
        activities — open either one directly from here.
      </p>
      <div className="mt-6 grid gap-x-10 gap-y-8 lg:grid-cols-2">
        <div>
          <p className="kicker">Morning · understand</p>
          <div className="mt-3"><Flow slots={morning} /></div>
        </div>
        <div>
          <p className="kicker">Afternoon · try</p>
          <div className="mt-3"><Flow slots={afternoon} /></div>
        </div>
      </div>
    </section>
  )
}
