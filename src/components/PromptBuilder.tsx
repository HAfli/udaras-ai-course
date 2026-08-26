import { motion } from 'framer-motion'
import { Copy, Check, Eraser } from 'lucide-react'
import { useMemo, useState } from 'react'

const FIELDS = [
  { id: 'role', label: 'Role', ga: 'Ról', ph: 'You are writing for a small artisan food producer in the Gaeltacht.' },
  { id: 'context', label: 'Context', ga: 'Comhthéacs', ph: 'Our new season’s produce is available at the Saturday market. Local customers already know us.' },
  { id: 'task', label: 'Task', ga: 'Tasc', ph: 'Write a warm, plain Facebook post announcing it.' },
  { id: 'constraints', label: 'Constraints', ga: 'Srianta', ph: '60–80 words. No exclamation marks, no hashtags.' },
  { id: 'output', label: 'Output', ga: 'Aschur', ph: 'Irish first, then a natural English version. List any Irish terms you were unsure about.' },
] as const

export function PromptBuilder() {
  const [v, setV] = useState<Record<string, string>>({})
  const [copied, setCopied] = useState(false)

  const prompt = useMemo(
    () => FIELDS.map(f => v[f.id]?.trim()).filter(Boolean).join('\n\n'),
    [v],
  )

  const filled = FIELDS.filter(f => v[f.id]?.trim()).length

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div>
        <p className="eyebrow">Build it</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          Five parts. Fill what you can — the placeholder text is a worked example you can lift, or replace with
          your own.
        </p>
        <div className="mt-5 space-y-3">
          {FIELDS.map((f, i) => (
            <label key={f.id} className="block">
              <span className="flex items-baseline gap-2">
                <span className="kicker text-moss-600">{f.label}</span>
                <span className="text-[.68rem] text-ink-faint" lang="ga">{f.ga}</span>
                <span aria-hidden className="ml-auto text-[.62rem] font-bold text-ink-faint">{i + 1}/5</span>
              </span>
              <textarea
                rows={2}
                value={v[f.id] ?? ''}
                onChange={e => { setV(p => ({ ...p, [f.id]: e.target.value })); setCopied(false) }}
                placeholder={f.ph}
                className="mt-1.5 w-full rounded-xl border border-ink/15 bg-paper-card px-3.5 py-2.5 text-sm leading-relaxed placeholder:text-ink-faint/80 focus:border-moss-400"
              />
            </label>
          ))}
        </div>
        <button
          onClick={() => { setV({}); setCopied(false) }}
          className="btn-ghost mt-4"
        >
          <Eraser className="h-3.5 w-3.5" aria-hidden /> Clear
        </button>
      </div>

      <div className="lg:sticky lg:top-24 lg:self-start">
        <div className="flex items-baseline justify-between">
          <p className="eyebrow">Your prompt</p>
          <span className="text-[.7rem] font-semibold text-ink-mute">{filled}/5 parts</span>
        </div>
        <motion.div
          layout
          className="mt-2 min-h-[14rem] rounded-xl2 border border-ink/12 bg-ink p-5 font-mono text-[.82rem] leading-relaxed text-paper/95"
        >
          {prompt ? (
            <p className="whitespace-pre-wrap">{prompt}</p>
          ) : (
            <p className="text-paper/40">Your prompt will build here as you type.</p>
          )}
        </motion.div>
        <button
          disabled={!prompt}
          onClick={() => {
            navigator.clipboard?.writeText(prompt).then(() => {
              setCopied(true)
              setTimeout(() => setCopied(false), 2000)
            }).catch(() => setCopied(false))
          }}
          className="btn-primary mt-3 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {copied ? <><Check className="h-4 w-4" aria-hidden /> Copied</> : <><Copy className="h-4 w-4" aria-hidden /> Copy prompt</>}
        </button>
        <p className="mt-3 text-xs leading-relaxed text-ink-mute">
          Nothing you type here leaves your browser. This page stores nothing about anybody.
        </p>
      </div>
    </div>
  )
}
