import { PropsWithChildren } from 'react'
import { useAppSelector } from '@app/store.ts'
import { Navigate } from 'react-router-dom'

export const Private = ({ children }: PropsWithChildren) => {
  const user = useAppSelector((state) => state.search.manager)
  if (!user) {
    return <Navigate to="/login" />
  }
  return <>{children}</>
}
