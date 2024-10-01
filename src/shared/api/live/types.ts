export interface Live {
  elements: LiveElement[]
}

export interface LiveElement {
  id: number
  stats: LiveStats
  explain: Explain[]
}

export interface LiveStats {
  assists: number
  bonus: number
  bps: number
  clean_sheets: number
  creativity: string
  expected_assists: string
  expected_goal_involvements: string
  expected_goals: string
  expected_goals_conceded: string
  goals_conceded: number
  goals_scored: number
  ict_index: string
  in_dreamteam: boolean
  influence: string
  minutes: number
  own_goals: number
  penalties_missed: number
  penalties_saved: number
  red_cards: number
  saves: number
  starts: number
  threat: string
  total_points: number
  yellow_cards: number
}

export interface Explain {
  fixture: number
  stats: ExplainStat[]
}

export interface ExplainStat {
  identifier: string
  points: number
  value: number
}
