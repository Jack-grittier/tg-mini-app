import { Player } from '@shared/api/bootstrap-static/types'
import { Explain, LiveStats } from '@shared/api/live/types'

export type TeamField = {
  stats: LiveStats & { explain: Explain[] }
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
