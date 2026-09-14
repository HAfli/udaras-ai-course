import { ReflectionCard, type ReflectionPrompt } from '../ReflectionCard'

interface ReflectionProps {
  questions: string[]
  connection: Record<string, string>
  closingKey?: string
}

/** Ten minutes, not a lecture: the facilitator asks, the room answers, a
 *  few observations go on the board, then an explicit connection back to
 *  the morning. Reuses the site's existing ReflectionCard for the
 *  question/notes UI (which already discloses that nothing is saved or
 *  sent anywhere) and adds the same connection callout shown on the
 *  matching slide. */
export function Reflection({ questions, connection, closingKey = 'closing' }: ReflectionProps) {
  const prompts: ReflectionPrompt[] = questions.map((q, i) => ({ id: `q${i}`, prompt: `${i + 1}. ${q}` }))
  const entries = Object.entries(connection).filter(([k]) => k !== closingKey)
  const closing = connection[closingKey]

  return (
    <div>
      <div className="prose-note"><p>
        Not another lecture — the facilitator asks, the room answers, a handful of observations go on the board.
      </p></div>
      <div className="mt-5">
        <ReflectionCard prompts={prompts} columns={2} />
      </div>
      <div className="mt-5 grid gap-4 rounded-xl2 bg-paper-deep p-4 sm:grid-cols-3">
        {entries.map(([label, text]) => (
          <div key={label}>
            <p className="text-[.68rem] font-bold uppercase tracking-wide text-ink-faint">
              {label.replace(/([a-z])([A-Z])/g, '$1 $2')}
            </p>
            <p className="mt-1 text-sm text-ink-soft">{text}</p>
          </div>
        ))}
      </div>
      {closing && (
        <div className="mt-4 rounded-xl2 px-4 py-3 text-center font-bold text-ink" style={{ background: '#FFC700' }}>
          {closing}
        </div>
      )}
    </div>
  )
}
