import { FRAMEWORKS } from '../data/programme'
import { FrameworkCard } from '../components/FrameworkCard'
import { DecisionTree } from '../components/DecisionTree'
import { PromptBuilder } from '../components/PromptBuilder'
import { Reveal } from '../components/ui/Reveal'

export function FrameworksPage() {
  return (
    <div>
      <header className="contour border-b border-ink/10">
        <div className="wrap py-12 sm:py-16">
          <p className="eyebrow">Core frameworks</p>
          <h1 className="mt-3 max-w-3xl text-[2.1rem] font-semibold leading-[1.1] sm:text-5xl">
            Four shapes participants should be able to draw from memory
          </h1>
          <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-ink-soft">
            Everything else on this course is detail. These are the parts that have to survive contact with a
            normal working week.
          </p>
        </div>
      </header>

      <div className="wrap space-y-4 py-12 sm:py-16">
        <h2 className="sr-only">The four frameworks</h2>
        {FRAMEWORKS.map((f, i) => <FrameworkCard key={f.id} f={f} i={i} />)}
      </div>

      <section aria-labelledby="dt-h" className="wrap pb-16">
        <Reveal>
          <p className="eyebrow">Framework 2, made interactive</p>
          <h2 id="dt-h" className="mt-3 text-3xl font-semibold sm:text-4xl">Should I use AI for this?</h2>
          <p className="mt-4 max-w-2xl text-[1.02rem] leading-relaxed text-ink-soft">
            Value, risk, data, human judgement — asked as a sequence rather than a list. Run a real task through it.
          </p>
          <div className="mt-8"><DecisionTree /></div>
        </Reveal>
      </section>

      <section aria-labelledby="pb-h" className="border-t border-ink/10 bg-paper-card">
        <div className="wrap py-16 sm:py-20">
          <Reveal>
            <p className="eyebrow">Framework 3, made interactive</p>
            <h2 id="pb-h" className="mt-3 text-3xl font-semibold sm:text-4xl">Prompt builder</h2>
            <p className="mt-4 max-w-2xl text-[1.02rem] leading-relaxed text-ink-soft">
              Role, context, task, constraints, output. Used live in Session 1 and again in Session 3 for bilingual work.
            </p>
            <div className="mt-8"><PromptBuilder /></div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
