import { FixturesEventSwitch, FixturesGetterList } from '@features/fixtures'

interface PropsType {}

export const FixturesSender = ({}: PropsType) => {
  return (
    <div>
      <FixturesEventSwitch />
      <FixturesGetterList />
    </div>
  )
}
