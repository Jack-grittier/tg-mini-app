import type { PropsWithChildren } from 'react'
import { SenderTeam } from '@features/team'
import { useAppSelector } from '@app/store'

interface MainPropsType {}

export const Main = ({}: PropsWithChildren<MainPropsType>) => {
  const managerId = useAppSelector((state) => state.common.primary.managerId)
  const secondaryManagerId = useAppSelector(
    (state) => state.common.secondary.managerId
  )
  return (
    <SenderTeam
      isPrimary={secondaryManagerId === -1}
      managerId={secondaryManagerId > -1 ? secondaryManagerId : managerId}
    />
  )
}
