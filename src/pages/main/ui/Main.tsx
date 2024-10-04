import type { PropsWithChildren } from 'react'
import { SenderTeam } from '@features/team/index.ts'
import { useAppSelector } from '@app/store.ts'

interface MainPropsType {}

export const Main = ({}: PropsWithChildren<MainPropsType>) => {
  const managerId = useAppSelector((state) => state.common.primary.managerId)
  return <SenderTeam isPrimary managerId={managerId} />
}
