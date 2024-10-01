export interface FixtureType {
  code: number
  event: number
  finished: boolean
  finished_provisional: boolean
  id: number
  kickoff_time: Date // '2024-09-28T11:30:00Z'
  minutes: number
  provisional_start_time: boolean
  pulse_id: number
  started: boolean
  stats: FixtureStatType[]
  team_a: number
  team_a_difficulty: number
  team_a_score: number
  team_h: number
  team_h_difficulty: number
  team_h_score: number
}

export interface FixtureStatType {
  identifier: string
  a: PlayerStatType[]
  h: PlayerStatType[]
}

interface PlayerStatType {
  value: number
  element: number
}
