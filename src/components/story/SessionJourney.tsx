import { ArrowDown, ArrowRight } from 'lucide-react'
import { session1 } from '../../data/session1'
import type { TimetableSlot } from '../../data/types'

/** The one place the timetable is turned into "today's journey" —
 *  reads straight from session1.timetable (the same data the Timetable
 *  tab renders), so this can never drift into a second, contradictory
 *  version of the day. Workshop/Reflection/final-activity rows become
 *  large linked activity cards; everything else is a plain step chip. */
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

function ActivityCard({ time, title, kind, id }: { time: string; title: string; kind: 'workshop' | 'reflection' | 'final'; id: string }) {
  const styles = {
    workshop: 'border-moss-500 bg-moss-700 text-paper shadow-lift',
    reflection: 'border-lichen/50 bg-lichen-soft/40 text-ink',
    final: 'border-moss-400 bg-moss-50 text-moss-900',
  }[kind]
  const label = { workshop: 'WORKSHOP', reflection: 'REFLECTION', final: 'FINAL ACTIVITY' }[kind]
  return (
    <a
      href={`#/session/s1/exercises/${id}`}
      className={`block rounded-xl2 border-2 px-5 py-4 text-left transition-transform hover:-translate-y-0.5 ${styles} ${kind === 'workshop' ? 'w-full sm:w-80' : 'w-full sm:w-64'}`}
    >
      <p className="text-[.68rem] font-bold uppercase tracking-wide opacity-80">{label} · {time}</p>
      <p className="mt-1 font-display text-lg font-semibold leading-snug">{title}</p>
      <span className="mt-2 inline-flex items-center gap-1 text-[.78rem] font-semibold opacity-90">
        Open activity <ArrowRight className="h-3 w-3" aria-hidden />
      </span>
    </a>
  )
}

function StepChip({ time, title, isBreak }: { time: string; title: string; isBreak?: boolean }) {
  return (
    <div className={`rounded-lg border px-3 py-2 text-sm ${isBreak ? 'border-dashed border-ink/15 text-ink-faint' : 'border-ink/12 bg-paper-card text-ink-soft'}`}>
      <span className="font-mono text-[.68rem] text-ink-faint">{time}</span>
      <span className="ml-2">{title}</span>
    </div>
  )
}

function Flow({ slots, keyPrefix }: { slots: TimetableSlot[]; keyPrefix: string }) {
  return (
    <div className="flex flex-col items-start gap-2">
      {slots.map((slot, i) => {
        const activity = findActivity(slot)
        return (
          <div key={`${keyPrefix}-${i}`} className="flex w-full flex-col items-start gap-2">
            {activity ? (
              <ActivityCard time={slot.time} title={slot.title.en} kind={activity.kind} id={activity.id} />
            ) : (
              <StepChip time={slot.time} title={slot.title.en} isBreak={slot.kind === 'break'} />
            )}
            {i < slots.length - 1 && <ArrowDown className="ml-3 h-3.5 w-3.5 text-ink-faint" aria-hidden />}
          </div>
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
    <section aria-labelledby="journey-h" className="rounded-xl2 border border-ink/10 bg-paper-deep/30 p-6 sm:p-8">
      <h2 id="journey-h" className="eyebrow">Today's journey</h2>
      <p className="mt-2 max-w-2xl text-sm text-ink-mute">
        Understand in the morning, try it in the afternoon. Workshop 1 and Workshop 2 are the two hands-on
        activities — open either one directly from here.
      </p>
      <div className="mt-6 grid gap-8 lg:grid-cols-2">
        <div>
          <p className="kicker text-moss-600">Morning · understand</p>
          <div className="mt-3"><Flow slots={morning} keyPrefix="am" /></div>
        </div>
        <div>
          <p className="kicker text-moss-600">Afternoon · try</p>
          <div className="mt-3"><Flow slots={afternoon} keyPrefix="pm" /></div>
        </div>
      </div>
    </section>
  )
}
