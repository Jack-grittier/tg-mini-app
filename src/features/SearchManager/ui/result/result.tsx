import type { PropsWithChildren } from 'react'
import { useAppSelector } from '@app/store.ts'
import { Navigate } from 'react-router-dom'

interface ResultPropsType {}

export const Result = ({}: PropsWithChildren<ResultPropsType>) => {
  const user = useAppSelector((state) => state.search?.manager)
  if (!user) return null
  return <Navigate to="/main" />
}
