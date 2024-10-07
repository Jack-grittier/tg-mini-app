import { Player, Team } from '@shared/api/bootstrap-static'
import { FixtureStatType, FixtureType } from '@shared/api/fixtures'
import { PlayerStatType } from '@shared/api/fixtures/types'

interface Team_a {
  team_a: Team
}

interface Team_h {
  team_h: Team
}

interface FixtureWithoutField
  extends Omit<FixtureType, 'team_a' | 'team_h' | 'stats'> {}

export interface FixtureStatWithPlayerType
  extends Omit<PlayerStatType, 'element'> {
  element: Nullable<Player>
}

export interface FixtureStatsType extends Omit<FixtureStatType, 'a' | 'h'> {
  a: FixtureStatWithPlayerType[]
  h: FixtureStatWithPlayerType[]
}

export interface FixtureWithTeam extends FixtureWithoutField, Team_a, Team_h {
  stats: FixtureStatsType[]
}

export interface IFixtureState {
  matchSchedule: Nullable<FixtureWithTeam[]>
  event: number
  loading: boolean
}
