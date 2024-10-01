import { Player } from '@shared/api/bootstrap-static/types'
import { ExplainStat, LiveStats } from '@shared/api/live/types'
import { FixtureType } from '@shared/api/fixtures'

export type TeamField = {
  stats: LiveStats & {
    explain: {
      stats: ExplainStat[]
      fixture: FixtureType | number
    }[]
  }
  player: Player
  element: number
  position: number
  multiplier: number
  is_captain: boolean
  is_vice_captain: boolean
}

export type ITeamState = {
  data: TeamField[]
  loading: boolean
}
