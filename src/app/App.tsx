import './App.css'
import { AppRouter } from '@app/routers/AppRouter.tsx'
import {
  bindMiniAppCSSVars,
  bindThemeParamsCSSVars,
  bindViewportCSSVars,
  useLaunchParams,
  useMiniApp,
  useThemeParams,
  useViewport,
} from '@telegram-apps/sdk-react'
import { AppRoot } from '@telegram-apps/telegram-ui'
import { useEffect } from 'react'
import { useAppDispatch } from '@app/store'
import { getBootstrapStaticData } from '@entities/bootstrap-static'

export const App = () => {
  const miniApp = useMiniApp()
  const lp = useLaunchParams()
  const themeParams = useThemeParams()
  const viewport = useViewport()
  const dispatch = useAppDispatch()

  useEffect(() => {
    return bindMiniAppCSSVars(miniApp, themeParams)
  }, [miniApp, themeParams])

  useEffect(() => {
    return bindThemeParamsCSSVars(themeParams)
  }, [themeParams])

  useEffect(() => {
    return viewport && bindViewportCSSVars(viewport)
  }, [viewport])
  useEffect(() => {
    dispatch(getBootstrapStaticData())
  }, [])

  return (
    <div className="App">
      <AppRoot
        appearance={miniApp.isDark ? 'dark' : 'light'}
        platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
      >
        <AppRouter />
      </AppRoot>
    </div>
  )
}
