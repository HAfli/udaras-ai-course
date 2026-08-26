import { useCallback, useState } from 'react'

/** In-memory only, by design: this prototype stores nothing about anybody.
 *  Swap for a persisted store if the platform ever needs to remember. */
export function useProgress() {
  const [visited, setVisited] = useState<Set<string>>(new Set())
  const mark = useCallback((id: string) => {
    setVisited(prev => (prev.has(id) ? prev : new Set(prev).add(id)))
  }, [])
  return { visited, mark }
}
