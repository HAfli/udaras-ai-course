import { motion, useReducedMotion } from 'framer-motion'
import { useId, useState, type ReactNode } from 'react'

export interface Tab { id: string; label: ReactNode; content: ReactNode }

export function Tabs({ tabs, initial }: { tabs: Tab[]; initial?: string }) {
  const [active, setActive] = useState(initial ?? tabs[0]?.id)
  const reduce = useReducedMotion()
  const uid = useId()

  return (
    <div>
      <div role="tablist" aria-label="Section" className="scrollbar-thin -mx-1 mb-6 flex gap-1 overflow-x-auto border-b border-ink/10 px-1">
        {tabs.map(t => {
          const on = t.id === active
          return (
            <button
              key={t.id}
              role="tab"
              id={`${uid}-t-${t.id}`}
              aria-selected={on}
              aria-controls={`${uid}-p-${t.id}`}
              onClick={() => setActive(t.id)}
              className={`relative whitespace-nowrap px-4 py-3 text-sm font-semibold transition-colors ${
                on ? 'text-moss-700' : 'text-ink-mute hover:text-ink'
              }`}
            >
              {t.label}
              {on && (
                <motion.span
                  layoutId={reduce ? undefined : `${uid}-underline`}
                  className="absolute inset-x-3 -bottom-px h-[2px] rounded-full bg-moss-600"
                />
              )}
            </button>
          )
        })}
      </div>
      {tabs.map(t =>
        t.id === active ? (
          <div key={t.id} role="tabpanel" id={`${uid}-p-${t.id}`} aria-labelledby={`${uid}-t-${t.id}`}>
            {t.content}
          </div>
        ) : null,
      )}
    </div>
  )
}
