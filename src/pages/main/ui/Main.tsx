import type { PropsWithChildren } from 'react'
import { List } from '@features/Gameweek'
import { ManagerInfo } from '@features/ManagerInfo'
import { TeamField } from '@features/TeamField'

interface MainPropsType {}

export const Main = ({}: PropsWithChildren<MainPropsType>) => {
  return (
    <div>
      <ManagerInfo />
      <List />
      <TeamField />
    </div>
  )
}
