import { PropsWithChildren, useEffect, useMemo } from 'react'
import { Navigate, Route, Router, Routes } from 'react-router-dom'
import { initNavigator } from '@telegram-apps/sdk'
import { useIntegration } from '@telegram-apps/react-router-integration'

import { Login } from '@pages/login'
import { Main } from '@pages/main'
import { Settings } from '@pages/settings'
import { Leagues } from '@pages/leagues'
import { League } from '@pages/league'

import { TabBar } from '@widgets/Tabbar/ui/Tabbar'
import { Fixtures } from '@pages/fixtures'

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
        <Route path={'/'} element={<Login />} />
        <Route element={<TabBar />}>
          <Route path={'/main'} element={<Main />} />
          <Route path={'/settings'} element={<Settings />} />
          <Route path={'/leagues'} element={<Leagues />} />
          <Route path={'/leagues/:id'} element={<League />} />
          <Route path={'/fixtures'} element={<Fixtures />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}
