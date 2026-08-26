import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Plus, Stethoscope } from 'lucide-react'
import { useState } from 'react'

interface Q { id: string; text: string; resolved: boolean }

const COMMON = [
  'It gives me a different answer every time — which one do I trust?',
  'The Irish looks right but sounds wrong. How do I explain what is wrong with it?',
  'It made up a source. How do I stop that happening?',
  'Can I put a customer email into it to draft a reply?',
  'It was great the first week and now it feels worse. Did something change, or did I?',
  'My colleague uses it for everything. Should I be worried?',
]

export function Clinic() {
  const [qs, setQs] = useState<Q[]>(COMMON.map((t, i) => ({ id: `c${i}`, text: t, resolved: false })))
  const [draft, setDraft] = useState('')
  const open = qs.filter(q => !q.resolved).length

  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <div className="prose-note max-w-xl"><p>
          Questions come in ahead of the day and on the day. Each is opened, worked, and closed in front of the
          room. The board below is seeded with the questions that come up most often.
        </p></div>
        <span className="chip">{open} open · {qs.length - open} resolved</span>
      </div>

      <form
        className="mt-5 flex gap-2"
        onSubmit={e => {
          e.preventDefault()
          if (!draft.trim()) return
          setQs(p => [{ id: `u${Date.now()}`, text: draft.trim(), resolved: false }, ...p])
          setDraft('')
        }}
      >
        <input
          value={draft}
          onChange={e => setDraft(e.target.value)}
          placeholder="Add a question to the clinic board…"
          aria-label="Add a question"
          className="w-full rounded-full border border-ink/15 bg-paper-card px-4 py-2.5 text-sm focus:border-moss-400"
        />
        <button type="submit" className="btn-primary shrink-0"><Plus className="h-4 w-4" aria-hidden /> Add</button>
      </form>

      <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
        <AnimatePresence initial={false}>
          {qs.map(q => (
            <motion.li
              key={q.id}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className={`card flex items-start gap-3 p-4 transition-colors ${q.resolved ? 'bg-moss-50/60' : ''}`}
            >
              <span aria-hidden className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg ${q.resolved ? 'bg-moss-200 text-moss-800' : 'bg-paper-deep text-ink-mute'}`}>
                {q.resolved ? <CheckCircle2 className="h-4 w-4" /> : <Stethoscope className="h-4 w-4" />}
              </span>
              <p className={`flex-1 text-sm leading-relaxed ${q.resolved ? 'text-ink-mute line-through decoration-moss-300' : 'text-ink'}`}>
                {q.text}
              </p>
              <button
                onClick={() => setQs(p => p.map(x => (x.id === q.id ? { ...x, resolved: !x.resolved } : x)))}
                className="btn-quiet shrink-0 text-[.72rem]"
              >
                {q.resolved ? 'Reopen' : 'Resolve'}
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  )
}
