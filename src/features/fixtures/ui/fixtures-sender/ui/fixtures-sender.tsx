import { FixturesEventSwitch, FixturesGetterList } from '@features/fixtures'
import { Container } from '@widgets/Container/ui/Container.tsx'

interface PropsType {}

export const FixturesSender = ({}: PropsType) => {
  return (
    <Container>
      <FixturesEventSwitch />
      <FixturesGetterList />
    </Container>
  )
}
