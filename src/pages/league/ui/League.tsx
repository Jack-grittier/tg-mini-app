import { StandingAction } from '@features/standing-action'
import { StandingList } from '@features/standing-list'

export const League = () => {
  return (
    <div>
      <StandingList />
      <StandingAction />
    </div>
  )
}
