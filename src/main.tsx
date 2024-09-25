import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@telegram-apps/telegram-ui/dist/styles.css'
import { Root } from '@app/Root'

import './mockENV.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>
)
