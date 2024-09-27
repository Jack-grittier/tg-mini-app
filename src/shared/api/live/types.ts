export interface Live {
  elements: LiveElement[]
  fixtures: LiveFixture[]
  stats: Stat[]
}

export interface LiveElement {
  id: number
  stats: LiveStats
  explain: Explain[]
}

export interface LiveStats {
  minutes: number
  goals_scored: number
  assists: number
  clean_sheets: number
  goals_conceded: number
  own_goals: number
  penalties_saved: number
  penalties_missed: number
  yellow_cards: number
  red_cards: number
  saves: number
  bonus: number
  bps: number
  influence: string
  creativity: string
  threat: string
  ict_index: string
  total_points: number
  in_dreamteam: boolean
}

interface Explain {
  fixture: number
  stats: ExplainStat[]
}

interface ExplainStat {
  identifier: string
  points: number
  value: number
}

interface LiveFixture {
  code: number
  event: number
  finished: boolean
  finished_provisional: boolean
  id: number
  kickoff_time: string
  minutes: number
  provisional_start_time: boolean
  started: boolean
  team_a: number
  team_a_score: number | null
  team_h: number
  team_h_score: number | null
  stats: FixtureStat[]
  team_h_difficulty: number
  team_a_difficulty: number
  pulse_id: number
}

interface FixtureStat {
  identifier: string
  a: StatValue[]
  h: StatValue[]
}

interface StatValue {
  value: number
  element: number
}

interface Stat {
  label: string
  points: number
}
