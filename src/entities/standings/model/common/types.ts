import { StandingLeague } from '@shared/api/standings'

export interface IStandingCommonState {
  last_updated_data: Date
  league: StandingLeague
  loading: boolean
}
