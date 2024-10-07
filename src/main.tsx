import { createRoot } from 'react-dom/client'
import './index.css'
import '@telegram-apps/telegram-ui/dist/styles.css'
import { Root } from '@app/Root'

import ReactGA from 'react-ga4'

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

import './mockENV.ts'

const isProduction = import.meta.env.PROD
if (isProduction) {
  const token = import.meta.env.VITE_GA_TOKEN
  ReactGA.initialize(token)
}

createRoot(document.getElementById('root')!).render(<Root />)
