import './App.css'
import {
  bindMiniAppCSSVars,
  bindThemeParamsCSSVars,
  bindViewportCSSVars,
  useMiniApp,
  useThemeParams,
  useViewport,
} from '@telegram-apps/sdk-react'
import { AppRoot } from '@telegram-apps/telegram-ui'
import { useEffect } from 'react'
import { useAppDispatch } from '@app/store'
import { getBootstrapStaticData } from '@entities/bootstrap-static'
import { AppRouter } from './routers/AppRouter'

export const App = () => {
  const miniApp = useMiniApp()
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
      <AppRoot appearance={'dark'} platform={'ios'}>
        <AppRouter />
      </AppRoot>
    </div>
  )
}
