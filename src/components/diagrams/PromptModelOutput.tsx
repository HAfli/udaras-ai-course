import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

const CONTEXTS = [
  {
    id: 'child',
    label: 'To a seven-year-old',
    prompt: 'Explain what a large language model is.',
    output: '"It’s like a machine that has read a huge number of books and learned to guess a good next word — the same way you guess the end of a story you’ve heard before."',
  },
  {
    id: 'board',
    label: 'To a board of directors',
    prompt: 'Explain what a large language model is.',
    output: '"A statistical model trained on very large text corpora to predict likely continuations of a given input — useful for drafting, summarising and search, but not a source of verified fact."',
  },
  {
    id: 'customer',
    label: 'To a worried customer',
    prompt: 'Explain what a large language model is.',
    output: '"It’s a tool that helps us draft replies faster. A person on our team still checks anything that matters before it reaches you."',
  },
] as const

/** Prompt → Model → Output, with a live "context changes output" toggle
 *  using the same question put to three audiences — mirrors the deck’s
 *  own "the prompt is the variable" live demonstration. */
export function PromptModelOutput() {
  const [active, setActive] = useState<(typeof CONTEXTS)[number]['id']>('child')
  const current = CONTEXTS.find(c => c.id === active)!

  return (
    <div className="card p-5 sm:p-6">
      <p className="kicker text-moss-600">Prompt → Model → Output</p>
      <div className="mt-3 flex flex-wrap items-center gap-2 text-sm font-semibold">
        <span className="rounded-xl2 border border-ink/12 bg-paper-deep/60 px-3 py-2">Prompt</span>
        <ArrowRight className="h-4 w-4 text-ink-faint" aria-hidden />
        <span className="rounded-xl2 border border-ink/12 bg-paper-deep/60 px-3 py-2">Model</span>
        <ArrowRight className="h-4 w-4 text-ink-faint" aria-hidden />
        <span className="rounded-xl2 border border-moss-300 bg-moss-50 px-3 py-2 text-moss-800">Output</span>
      </div>

      <p className="mt-5 text-sm text-ink-soft">
        Same question, put to three audiences. The model does not change — only the context does. Watch what happens to the output.
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {CONTEXTS.map(c => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            aria-pressed={active === c.id}
            className={`rounded-full border px-3 py-1.5 text-[.78rem] font-semibold transition-colors ${
              active === c.id ? 'border-moss-600 bg-moss-700 text-paper' : 'border-ink/12 text-ink-mute hover:border-moss-300 hover:text-ink'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="mt-4 rounded-xl2 border border-ink/10 bg-paper-deep/40 p-4">
        <p className="text-[.72rem] font-bold uppercase tracking-wider text-ink-faint">Prompt</p>
        <p className="mt-1 font-mono text-[.82rem] text-ink">{current.prompt}</p>
        <p className="mt-3 text-[.72rem] font-bold uppercase tracking-wider text-ink-faint">Output</p>
        <p className="mt-1 text-sm leading-relaxed text-ink-soft">{current.output}</p>
      </div>
      <p className="mt-3 text-sm font-semibold text-moss-700">Context changes output. That is almost everything you can control.</p>
    </div>
  )
}
