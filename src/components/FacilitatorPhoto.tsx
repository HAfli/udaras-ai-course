import { useState } from 'react'
import { FACILITATOR } from '../data/facilitator'
import portrait from '../assets/haithem-afli.jpg'

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
        className={`grid place-items-center rounded-xl2 border-2 border-dashed border-lichen bg-lichen-soft/30 p-6 text-center ${className}`}
        role="img"
        aria-label={FACILITATOR.photoPlaceholder}
      >
        <p className="text-sm font-semibold leading-relaxed text-lichen-deep">
          {FACILITATOR.photoPlaceholder}
        </p>
        <p className="mt-2 max-w-[22ch] text-xs leading-relaxed text-ink-mute">
          Replace <code className="font-mono">src/assets/haithem-afli.jpg</code> and rebuild — see the README.
        </p>
      </div>
    )
  }

  return (
    <img
      src={SOURCES[step]}
      alt={`${FACILITATOR.name}, ${FACILITATOR.role}`}
      width={880}
      height={1100}
      loading="lazy"
      decoding="async"
      onError={() => setStep(s => s + 1)}
      className={`h-full w-full rounded-xl2 border border-ink/10 object-cover shadow-soft ${className}`}
    />
  )
}
