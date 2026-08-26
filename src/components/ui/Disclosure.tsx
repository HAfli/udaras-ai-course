import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useId, useState, type ReactNode } from 'react'

export function Disclosure({
  summary, children, defaultOpen = false, tone = 'plain', meta,
}: {
  summary: ReactNode
  children: ReactNode
  defaultOpen?: boolean
  tone?: 'plain' | 'card'
  meta?: ReactNode
}) {
  const [open, setOpen] = useState(defaultOpen)
  const reduce = useReducedMotion()
  const id = useId()

  return (
    <div className={tone === 'card' ? 'card overflow-hidden' : 'border-b border-ink/10'}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(o => !o)}
        className="flex w-full items-center gap-4 px-4 py-4 text-left transition-colors hover:bg-moss-50/60 sm:px-5"
      >
        <span className="min-w-0 flex-1">{summary}</span>
        {meta}
        <ChevronDown
          aria-hidden
          className={`h-4 w-4 shrink-0 text-ink-mute transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            key="c"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-5 pt-1 sm:px-5">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
