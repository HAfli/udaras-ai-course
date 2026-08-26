import { useEffect, useRef, useState } from 'react'

const parse = (h: string) => h.replace(/^#\/?/, '').split('/').filter(Boolean)

export function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash || '#/')
  const last = useRef<string>('')

  useEffect(() => {
    const on = () => {
      const next = window.location.hash || '#/'
      const parts = parse(next)
      const key = `${parts[0] ?? ''}/${parts[1] ?? ''}`

      setHash(next)

      // Only jump to the top when the page actually changed. In-page anchors
      // (#meet-h, #plan, #journey) keep their natural scroll behaviour.
      if (key !== last.current) {
        last.current = key
        const target = next.startsWith('#/') ? null : document.getElementById(next.slice(1))
        if (!target) window.scrollTo({ top: 0, behavior: 'auto' })
      }
    }
    last.current = `${parse(window.location.hash || '#/')[0] ?? ''}/${parse(window.location.hash || '#/')[1] ?? ''}`
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])

  const parts = parse(hash)
  return { hash, route: parts[0] ?? '', param: parts[1] ?? '', parts }
}

export function go(to: string) {
  window.location.hash = to.startsWith('#') ? to : `#${to}`
}
