import type { PropsWithChildren } from 'react'
import { LeaguesList } from '@features/league-list'
import { Container } from '@widgets/Container/ui/Container.tsx'

interface LeaguesPropsType {}

export const Leagues = ({}: PropsWithChildren<LeaguesPropsType>) => {
  return (
    <Container>
      <LeaguesList />
    </Container>
  )
}
