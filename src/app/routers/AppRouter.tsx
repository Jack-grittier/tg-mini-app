import { PropsWithChildren, useEffect, useMemo } from 'react'
import { Navigate, Route, Router, Routes } from 'react-router-dom'
import { initNavigator } from '@telegram-apps/sdk'
import { useIntegration } from '@telegram-apps/react-router-integration'
import { AppRoutes, routeConfig } from '@shared/config/router.tsx'

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
        <Route path={'/'} element={<Navigate to={AppRoutes.LOGIN} />} />
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<div className="page-wrapper">{element}</div>}
          />
        ))}
      </Routes>
    </Router>
  )
}
