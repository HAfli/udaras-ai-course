import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { LangProvider } from './i18n/LangContext'
import { useHashRoute } from './hooks/useHashRoute'
import { LandingPage } from './pages/LandingPage'
import { SessionPage } from './pages/SessionPage'
import { BetweenPage } from './pages/BetweenPage'
import { FrameworksPage } from './pages/FrameworksPage'
import { AIActPage } from './pages/AIActPage'
import { IrishAIPage } from './pages/IrishAIPage'
import { ResearchPage } from './pages/ResearchPage'
import { PlanPage } from './pages/PlanPage'

function Router() {
  const { route, param } = useHashRoute()
  const reduce = useReducedMotion()

  let page: React.ReactNode
  switch (route) {
    case 'session': page = <SessionPage id={param} />; break
    case 'between': page = <BetweenPage id={param} />; break
    case 'frameworks': page = <FrameworksPage />; break
    case 'ai-act': page = <AIActPage />; break
    case 'irish-ai': page = <IrishAIPage />; break
    case 'research': page = <ResearchPage />; break
    case 'plan': page = <PlanPage />; break
    default: page = <LandingPage />
  }

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={`${route}/${param}`}
        id="main"
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduce ? undefined : { opacity: 0 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        {page}
      </motion.main>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <LangProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-moss-700 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-paper"
      >
        Skip to content
      </a>
      <Nav />
      <Router />
      <Footer />
    </LangProvider>
  )
}
