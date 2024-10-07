import { FixtureType } from '@shared/api/fixtures'

export interface IFixtureState {
  matchSchedule: Nullable<FixtureType[]>
  event: number
}
