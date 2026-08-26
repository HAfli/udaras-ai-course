import { AnimatePresence, motion } from 'framer-motion'
import { RotateCcw } from 'lucide-react'
import { useState } from 'react'

type Node =
  | { kind: 'q'; id: string; text: string; hint?: string; yes: string; no: string }
  | { kind: 'end'; id: string; verdict: 'go' | 'careful' | 'stop'; text: string; body: string }

const TREE: Record<string, Node> = {
  value: { kind: 'q', id: 'value', text: 'Would AI actually save time or improve this?', hint: 'Be honest. “It would be interesting to try” is not a value case.', yes: 'risk', no: 'novalue' },
  novalue: { kind: 'end', id: 'novalue', verdict: 'stop', text: 'Then don’t.', body: 'Not using AI for a task is a legitimate, professional answer. Spend the effort where it pays.' },
  risk: { kind: 'q', id: 'risk', text: 'If the output were wrong and nobody noticed, would it matter?', hint: 'Reputational, legal, financial, or to a person.', yes: 'data-high', no: 'data-low' },
  'data-low': { kind: 'q', id: 'data-low', text: 'Does it need anyone’s personal or confidential information?', yes: 'strip', no: 'go', hint: 'Names, contact details, another party’s documents.' },
  'data-high': { kind: 'q', id: 'data-high', text: 'Does it need anyone’s personal or confidential information?', yes: 'stop', no: 'human', hint: 'Names, contact details, another party’s documents.' },
  strip: { kind: 'end', id: 'strip', verdict: 'careful', text: 'Strip it out first.', body: 'The task almost never needs the identifying detail. Remove names and numbers, then proceed — and check the output before it goes anywhere.' },
  human: { kind: 'q', id: 'human', text: 'Can a person meaningfully check the output before it is used?', hint: 'Not a glance. An actual check, by someone who could tell.', yes: 'careful', no: 'stop' },
  go: { kind: 'end', id: 'go', verdict: 'go', text: 'Go ahead.', body: 'Low stakes, no sensitive information. Use it, read the output, get on with your day.' },
  careful: { kind: 'end', id: 'careful', verdict: 'careful', text: 'Yes — with a named human check.', body: 'Use AI for the draft. Write down who checks it and what they check. That step is the whole safeguard.' },
  stop: { kind: 'end', id: 'stop', verdict: 'stop', text: 'Not like this.', body: 'Either the information should not go in, or nobody can verify what comes out. Change the task, or keep it human.' },
}

const VERDICT = {
  go: { label: 'Go ahead', symbol: '●', cls: 'border-risk-green/40 bg-moss-50 text-risk-green' },
  careful: { label: 'With care', symbol: '◐', cls: 'border-risk-amber/40 bg-lichen-soft/50 text-risk-amber' },
  stop: { label: 'Stop', symbol: '■', cls: 'border-risk-red/40 bg-red-50 text-risk-red' },
}

export function DecisionTree() {
  const [path, setPath] = useState<string[]>(['value'])
  const current = TREE[path[path.length - 1]]

  return (
    <div className="card p-6 sm:p-8">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <p className="eyebrow">Decision tree</p>
          <h3 className="mt-1.5 font-display text-2xl font-semibold">Should I use AI for this?</h3>
        </div>
        {path.length > 1 && (
          <button onClick={() => setPath(['value'])} className="btn-quiet shrink-0">
            <RotateCcw className="h-3.5 w-3.5" aria-hidden /> Start over
          </button>
        )}
      </div>

      <ol className="mt-6 space-y-3">
        {path.slice(0, -1).map(id => {
          const n = TREE[id]
          if (n.kind !== 'q') return null
          const nextId = path[path.indexOf(id) + 1]
          return (
            <li key={id} className="flex items-start gap-3 text-sm text-ink-mute">
              <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-moss-300" />
              <span className="flex-1">{n.text}</span>
              <span className="shrink-0 font-semibold text-moss-600">{nextId === n.yes ? 'Yes' : 'No'}</span>
            </li>
          )
        })}
      </ol>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="mt-5"
        >
          {current.kind === 'q' ? (
            <div className="rounded-xl2 border border-moss-200 bg-moss-50/60 p-5">
              <p className="font-display text-xl leading-snug">{current.text}</p>
              {current.hint && <p className="mt-1.5 text-sm text-ink-mute">{current.hint}</p>}
              <div className="mt-4 flex gap-2">
                <button onClick={() => setPath(p => [...p, current.yes])} className="btn-primary">Yes</button>
                <button onClick={() => setPath(p => [...p, current.no])} className="btn-ghost">No</button>
              </div>
            </div>
          ) : (
            <div className="rounded-xl2 border border-ink/10 bg-paper-deep/50 p-5">
              <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[.7rem] font-bold uppercase tracking-wider ${VERDICT[current.verdict].cls}`}>
                <span aria-hidden>{VERDICT[current.verdict].symbol}</span>{VERDICT[current.verdict].label}
              </span>
              <p className="mt-3 font-display text-2xl font-semibold">{current.text}</p>
              <p className="mt-2 text-[.95rem] leading-relaxed text-ink-soft">{current.body}</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
