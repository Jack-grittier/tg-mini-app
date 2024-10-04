export interface StandingsType {
  new_entries: StandingNewEntry
  last_updated_data: Date
  league: StandingLeague
  standings: StandingStandings
}

export interface StandingNewEntry {
  has_next: boolean
  page: 1
  results: any[]
}

export interface StandingLeague {
  id: number
  name: string // 'Overall'
  created: Date // '2024-07-17T11:51:48.594925Z'
  closed: boolean
  max_entries: Nullable<any>
  league_type: string // 's'
  scoring: string // 'c'
  admin_entry: Nullable<any> // null
  start_event: number
  code_privacy: string // 'p'
  has_cup: boolean
  cup_league: Nullable<any>
  rank: Nullable<any>
}

export interface StandingStandings {
  has_next: boolean
  page: number
  results: StandingResultItem[]
}

export interface StandingResultItem {
  id: number // 32864780
  event_total: number // 85
  player_name: string // 'Qwame Getto'
  rank: number // 99
  last_rank: number // 2011
  rank_sort: number // 101
  total: number // 495
  entry: number // 4567021
  entry_name: string // 'GETTO FC'
}
