import { useLang } from '../../i18n/LangContext'

type Val = { ga?: string; en: string; needsValidation?: boolean }

const VALIDATION_CLS = 'decoration-dotted decoration-lichen underline underline-offset-[6px] decoration-2'

/** Renders a bilingual content value. Irish leads, at full size in the
 *  display face; English follows as a supporting line sized relative to
 *  its parent (never below ~75%, never dimmed, never hidden behind the
 *  language toggle) — Irish is a primary language of this course, not a
 *  translation of the English site. When no Irish exists, only English
 *  is shown; nothing is ever invented to fill the gap.
 *
 *  `compact` opts a single call site out of the stacked treatment for
 *  pure wayfinding chrome (see ProgressIndicator) where the destination
 *  itself carries the full bilingual heading — it must not be used for
 *  anything a person reads as the actual message. */
export function Bi({ v, className, compact }: { v: Val; className?: string; compact?: boolean }) {
  const { tx } = useLang()

  if (compact || !v.ga) {
    const { text, flagged } = tx(v)
    if (!flagged) return <span className={className}>{text}</span>
    return (
      <span className={`${className ?? ''} ${VALIDATION_CLS}`} title="Irish awaiting linguistic validation">
        {text}
        <span className="sr-only"> (Irish awaiting linguistic validation)</span>
      </span>
    )
  }

  return (
    <span className={className}>
      <span
        lang="ga"
        className={`bi-ga block ${v.needsValidation ? VALIDATION_CLS : ''}`}
        title={v.needsValidation ? 'Irish awaiting linguistic validation' : undefined}
      >
        {v.ga}
        {v.needsValidation && <span className="sr-only"> (Irish awaiting linguistic validation)</span>}
      </span>
      <span lang="en" className="bi-en">{v.en}</span>
    </span>
  )
}

/** Always shows the Irish, regardless of the active language — used where
 *  the Irish line is part of the message rather than a translation. */
export function GaLine({ ga, needsValidation, className }: { ga: string; needsValidation?: boolean; className?: string }) {
  return (
    <span
      className={`${className ?? ''} gaeilge ${needsValidation ? 'decoration-dotted decoration-lichen underline underline-offset-[6px] decoration-2' : ''}`}
      title={needsValidation ? 'Irish awaiting linguistic validation' : undefined}
      lang="ga"
    >
      {ga}
    </span>
  )
}
