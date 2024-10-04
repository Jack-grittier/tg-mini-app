import { createRoot } from 'react-dom/client'
import './index.css'
import '@telegram-apps/telegram-ui/dist/styles.css'
import { Root } from '@app/Root'

import ReactGA from 'react-ga4'

import './mockENV.ts'

const isProduction = import.meta.env.PROD
if (isProduction) {
  const token = import.meta.env.VITE_GA_TOKEN
  ReactGA.initialize(token)
}

createRoot(document.getElementById('root')!).render(<Root />)
