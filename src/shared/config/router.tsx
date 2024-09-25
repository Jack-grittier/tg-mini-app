import { Login } from '@pages/login'
import { Main } from '@pages/main'
import { RouteProps } from 'react-router-dom'

export enum AppRoutes {
  LOGIN = 'login',
  MAIN = 'main',
}

export const RouterPath: Record<AppRoutes, string> = {
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.MAIN]: '/main',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RouterPath.main,
    element: <Main />,
  },
  [AppRoutes.LOGIN]: {
    path: RouterPath.login,
    element: <Login />,
  },
}
