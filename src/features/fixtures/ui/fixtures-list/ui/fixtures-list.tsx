import type { PropsWithChildren } from 'react'
import { useAppSelector } from '@app/store'

interface PropsType {}

export const FixturesList = ({}: PropsWithChildren<PropsType>) => {
  const matchSchedule = useAppSelector((state) => state.fixtures.matchSchedule)

  console.log('matchSchedule', matchSchedule)

  return <div>FixturesList</div>
}
