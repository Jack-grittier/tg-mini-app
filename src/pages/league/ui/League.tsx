import { StandingAction } from '@features/standing-action'
import { StandingList } from '@features/standing-list'
import { Container } from '@widgets/Container/ui/Container.tsx'

export const League = () => {
  return (
    <Container>
      <StandingList />
      <StandingAction />
    </Container>
  )
}
