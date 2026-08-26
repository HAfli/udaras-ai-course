import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect, useId, useRef, type ReactNode } from 'react'

export function Modal({
  open, onClose, title, children,
}: { open: boolean; onClose: () => void; title: ReactNode; children: ReactNode }) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const titleId = useId()

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    ref.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
        >
          <div className="absolute inset-0 bg-ink/45 backdrop-blur-[2px]" onClick={onClose} aria-hidden />
          <motion.div
            ref={ref}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-t-xl2 border border-ink/10 bg-paper-card shadow-lift sm:rounded-xl2"
            initial={reduce ? false : { y: 28, opacity: 0, scale: 0.99 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={reduce ? undefined : { y: 20, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="sticky top-0 z-10 flex items-start gap-4 border-b border-ink/10 bg-paper-card/95 px-5 py-4 backdrop-blur sm:px-7">
              <div className="min-w-0 flex-1" id={titleId}>{title}</div>
              <button type="button" onClick={onClose} className="btn-quiet -mr-1 shrink-0" aria-label="Close">
                <X className="h-4 w-4" aria-hidden />
              </button>
            </div>
            <div className="px-5 py-6 sm:px-7">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
