import { ArrowLeft, ArrowRight } from 'lucide-react'
import { session1, session2 } from '../data/sessions'
import { BetweenCard } from '../components/BetweenCard'
import { ProgressIndicator } from '../components/ProgressIndicator'
import { Reveal } from '../components/ui/Reveal'

const MAP = {
  b1: { work: session1.betweenAfter!, from: 's1', to: 's2', label: 'Between Session 1 and Session 2' },
  b2: { work: session2.betweenAfter!, from: 's2', to: 's3', label: 'Between Session 2 and Session 3' },
}

export function BetweenPage({ id }: { id: string }) {
  const entry = MAP[id as keyof typeof MAP]
  if (!entry) {
    return (
      <div className="wrap py-24">
        <p className="font-display text-2xl">Nothing here.</p>
        <a href="#/" className="btn-primary mt-5">Back to the programme</a>
      </div>
    )
  }

  return (
    <div>
      <header className="contour border-b border-ink/10">
        <div className="wrap py-10 sm:py-14">
          <a href="#/" className="btn-quiet -ml-3 mb-6 text-[.8rem]">
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden /> Programme
          </a>
          <ProgressIndicator currentId={id} />
          <p className="eyebrow mt-8">{entry.label}</p>
          <h1 className="mt-3 max-w-3xl text-[2.1rem] font-semibold leading-[1.1] sm:text-5xl">
            The work between the sessions is part of the course
          </h1>
          <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-ink-soft">
            The contract describes this programme as an iterative learning journey. This is the mechanism: what
            participants try in their own work between sessions is what the next session is built from.
          </p>
        </div>
      </header>

      <div className="wrap py-12 sm:py-16">
        <Reveal><BetweenCard w={entry.work} /></Reveal>

        <nav aria-label="Adjacent sessions" className="mt-10 flex flex-wrap gap-3">
          <a href={`#/session/${entry.from}`} className="btn-ghost">
            <ArrowLeft className="h-4 w-4" aria-hidden /> Back to the session before
          </a>
          <a href={`#/session/${entry.to}`} className="btn-primary ml-auto">
            On to the session after <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </nav>
      </div>
    </div>
  )
}
