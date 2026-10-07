import { useState } from 'react'
import { FACILITATOR } from '../data/facilitator'
import portrait from '../assets/haithem-afli.jpg'
import { tr } from '../i18n/lang'

/** Bundled portrait first — so it works offline, in the single-file build and
 *  at any base path. Falls back to the copy on Dr Afli's own official academic
 *  website, then to a clearly marked placeholder. Never substitutes another
 *  person's photograph. */
const SOURCES = [portrait, FACILITATOR.photoRemote]

export function FacilitatorPhoto({ className = '' }: { className?: string }) {
  const [step, setStep] = useState(0)

  if (step >= SOURCES.length) {
    return (
      <div
        className={`grid place-items-center border border-dashed border-ink/30 bg-paper-deep p-6 text-center ${className}`}
        role="img"
        aria-label={tr(FACILITATOR.photoPlaceholder)}
      >
        <p className="text-sm font-semibold leading-relaxed text-ink-mute">
          {tr(FACILITATOR.photoPlaceholder)}
        </p>
        <p className="mt-2 max-w-[22ch] text-xs leading-relaxed text-ink-mute">
          {tr('Replace the portrait file and rebuild — see the README.')} <code className="font-mono">src/assets/haithem-afli.jpg</code>
        </p>
      </div>
    )
  }

  return (
    <img
      src={SOURCES[step]}
      alt={`${FACILITATOR.name}, ${tr(FACILITATOR.role)}`}
      width={880}
      height={1100}
      loading="lazy"
      decoding="async"
      onError={() => setStep(s => s + 1)}
      className={`h-full w-full object-cover ${className}`}
    />
  )
}
