import { useLang } from '../../i18n/LangContext'

type Val = { ga?: string; en: string; needsValidation?: boolean }

/** A quiet notation marking "this string is awaiting linguistic
 *  validation" — content-status metadata, not a decoration laid across
 *  the Irish text itself. The Irish heading it follows carries no
 *  styling change at all, so the language reads as fully confident. */
function ValidationMark() {
  return (
    <span className="validation-mark" title="Irish awaiting linguistic validation">
      <span aria-hidden>†</span>
      <span className="sr-only"> (Irish awaiting linguistic validation)</span>
    </span>
  )
}

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
    return (
      <span className={className}>
        {text}
        {flagged && <ValidationMark />}
      </span>
    )
  }

  return (
    <span className={className}>
      <span lang="ga" className="bi-ga block">
        {v.ga}
        {v.needsValidation && <ValidationMark />}
      </span>
      <span lang="en" className="bi-en">{v.en}</span>
    </span>
  )
}

/** Always shows the Irish, regardless of the active language — used where
 *  the Irish line is part of the message rather than a translation. */
export function GaLine({ ga, needsValidation, className }: { ga: string; needsValidation?: boolean; className?: string }) {
  return (
    <span className={`${className ?? ''} gaeilge`} lang="ga">
      {ga}
      {needsValidation && <ValidationMark />}
    </span>
  )
}
