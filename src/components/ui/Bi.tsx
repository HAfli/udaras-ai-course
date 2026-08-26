import { useLang } from '../../i18n/LangContext'

type Val = { ga?: string; en: string; needsValidation?: boolean }

/** Renders a bilingual content value, marking Irish that still needs
 *  linguistic validation with a dotted underline and an accessible note. */
export function Bi({ v, className }: { v: Val; className?: string }) {
  const { tx } = useLang()
  const { text, flagged } = tx(v)
  if (!flagged) return <span className={className}>{text}</span>
  return (
    <span
      className={`${className ?? ''} decoration-dotted decoration-lichen underline underline-offset-[6px] decoration-2`}
      title="Irish awaiting linguistic validation"
    >
      {text}
      <span className="sr-only"> (Irish awaiting linguistic validation)</span>
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
