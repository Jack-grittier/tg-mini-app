import { PropsWithChildren, useEffect, useMemo } from 'react'
import { Navigate, Route, Router, Routes } from 'react-router-dom'
import { initNavigator } from '@telegram-apps/sdk'
import { useIntegration } from '@telegram-apps/react-router-integration'
import { Login } from '@pages/login/index.ts'
import { Main } from '@pages/main/index.ts'
import { TabBar } from '@widgets/Tabbar/ui/Tabbar.tsx'
import { Private } from '@app/providers/ui/Private/ui/Private.tsx'

interface AppRouterPropsType {}

export const AppRouter = ({}: PropsWithChildren<AppRouterPropsType>) => {
  const navigator = useMemo(() => initNavigator('app-navigation-state'), [])
  const [location, reactNavigator] = useIntegration(navigator)

  useEffect(() => {
    navigator.attach()
    return () => navigator.detach()
  }, [navigator])

  return (
    <Router location={location} navigator={reactNavigator}>
      <Routes>
        <Route path={'/'} element={<Navigate to={'/login'} />} />
        <Route path={'/login'} element={<Login />} />
        <Route
          path={'/main'}
          element={
            <Private>
              <TabBar />
            </Private>
          }
        >
          <Route path={'/main'} element={<Main />} />
        </Route>
      </Routes>
    </Router>
  )
}
