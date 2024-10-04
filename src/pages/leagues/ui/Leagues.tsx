import type { PropsWithChildren } from 'react'
import { LeaguesList } from '@features/league-list'

interface LeaguesPropsType {}

export const Leagues = ({}: PropsWithChildren<LeaguesPropsType>) => {
  return (
    <div>
      <LeaguesList />
    </div>
  )
}
