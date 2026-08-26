import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Play, RotateCcw } from 'lucide-react'
import { useEffect, useState } from 'react'

const STAGES = [
  { id: 1, label: 'Irish post', ga: 'Postáil Ghaeilge', body: 'Write it in Irish first. Not translated into Irish — written in Irish. This is the decision that changes everything downstream.', who: 'You, with AI help' },
  { id: 2, label: 'English version', ga: 'Leagan Béarla', body: 'A proper English version carrying the same message, not a word-for-word rendering of the Irish.', who: 'AI, then you' },
  { id: 3, label: 'AI critique', ga: 'Léirmheas AI', body: 'Ask the tool what it is unsure about in the Irish, and where it thinks the register may be off. Its uncertainty list is useful even when its Irish is not.', who: 'AI' },
  { id: 4, label: 'Human review', ga: 'Athbhreithniú daonna', body: 'A competent Irish speaker reads it. Grammar, naturalness, terminology, register. Short — but not skippable.', who: 'A named person' },
  { id: 5, label: 'Published version', ga: 'Leagan foilsithe', body: 'What actually goes out, under your organisation’s name, approved by someone who can stand over it.', who: 'A named person' },
]

export function BilingualLab() {
  const [step, setStep] = useState(0)
  const [playing, setPlaying] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!playing) return
    if (step >= STAGES.length - 1) { setPlaying(false); return }
    const t = setTimeout(() => setStep(s => s + 1), reduce ? 400 : 1400)
    return () => clearTimeout(t)
  }, [playing, step, reduce])

  return (
    <div>
      <div className="prose-note"><p>
        The same piece of content, all the way through. Play it once, then run a real post through it in the room.
      </p></div>

      <div className="mt-5 flex gap-2">
        <button onClick={() => { setStep(0); setPlaying(true) }} className="btn-primary">
          <Play className="h-3.5 w-3.5" aria-hidden /> Play the workflow
        </button>
        <button onClick={() => { setPlaying(false); setStep(0) }} className="btn-ghost">
          <RotateCcw className="h-3.5 w-3.5" aria-hidden /> Reset
        </button>
      </div>

      <ol className="mt-6 grid gap-2 lg:grid-cols-5">
        {STAGES.map((s, i) => {
          const on = i === step
          const done = i < step
          return (
            <li key={s.id} className="flex items-center gap-2">
              <motion.button
                onClick={() => { setPlaying(false); setStep(i) }}
                aria-pressed={on}
                animate={on && !reduce ? { scale: 1.02 } : { scale: 1 }}
                className={`w-full rounded-xl2 border p-3.5 text-left transition-colors duration-500 ${
                  on ? 'border-heather bg-heather text-paper shadow-lift'
                     : done ? 'border-heather/40 bg-heather-soft/50' : 'border-ink/12 bg-paper-card'
                }`}
              >
                <span className={`block text-[.62rem] font-bold uppercase tracking-[.14em] ${on ? 'text-paper/85' : 'text-ink-faint'}`}>
                  Step {i + 1}
                </span>
                <span className={`mt-0.5 block text-sm font-semibold ${on ? 'text-paper' : 'text-ink'}`}>{s.label}</span>
                <span lang="ga" className={`gaeilge block text-[.72rem] ${on ? 'text-paper/90' : 'text-ink-mute'}`}>{s.ga}</span>
              </motion.button>
              {i < STAGES.length - 1 && <ArrowRight className="hidden h-4 w-4 shrink-0 text-ink-faint lg:block" aria-hidden />}
            </li>
          )
        })}
      </ol>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.3 }}
          className="card mt-4 p-5"
        >
          <div className="flex flex-wrap items-baseline gap-3">
            <p className="kicker text-heather">{STAGES[step].label}</p>
            <span className="chip">{STAGES[step].who}</span>
          </div>
          <p className="mt-2 text-[.95rem] leading-relaxed text-ink-soft">{STAGES[step].body}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
