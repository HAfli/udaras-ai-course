import { sessionPrep } from './sessionPrep'
import { session1 } from './session1'
import { session2 } from './session2'
import { session3 } from './session3'
import { session4 } from './session4'
import type { SessionMeta } from './types'

export const SESSIONS: SessionMeta[] = [sessionPrep, session1, session2, session3, session4]
export const byId = (id: string) => SESSIONS.find(s => s.id === id)
export { sessionPrep, session1, session2, session3, session4 }
