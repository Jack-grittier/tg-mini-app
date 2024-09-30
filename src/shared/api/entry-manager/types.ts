export interface Entry {
  current_event: number
  entered_events: number[]
  favourite_team: number
  id: number
  joined_time: Date
  kit: string // это длинная строка (ФОРМА МЕНЕДЖЕРА)
  last_deadline_bank: number
  last_deadline_total_transfers: number
  last_deadline_value: number
  leagues: Leagues
  name: string
  name_change_blocked: boolean
  player_first_name: string
  player_last_name: string
  player_region_id: number
  player_region_iso_code_long: string // "DEU"
  player_region_iso_code_short: string // "DE"
  player_region_name: string // "Germany"
  started_event: number
  summary_event_points: number
  summary_event_rank: number
  summary_overall_points: number
  summary_overall_rank: number
  years_active: number
}

interface Leagues {
  classic: ClassicLeague[]
  cup: Cup | null
  cup_matches: CupMatch[]
  h2h: H2HLeague[]
}

interface ClassicLeague {
  active_phases: ActivePhase[]
  admin_entry: null
  closed: boolean
  created: Date // "2024-07-17T11:51:46.332200Z"
  cup_league: null
  cup_qualified: null
  entry_can_admin: boolean
  entry_can_invite: boolean
  entry_can_leave: boolean
  entry_last_rank: number
  entry_percentile_rank: number
  entry_rank: number
  has_cup: boolean
  id: number
  league_type: 's'
  max_entries: null
  name: string // "Liverpool"
  rank: null
  rank_count: number
  scoring: 'c'
  short_name: string // "team-12"
  start_event: number
}

export type ActivePhase = {
  entry_percentile_rank: number
  last_rank: number
  league_id: number
  phase: number
  rank: number
  rank_count: number
  rank_sort: number
  total: number
}

interface H2HLeague {
  id: number
  name: string
  short_name: string | null
  created: string // Дата в формате ISO
  closed: boolean
  rank: number | null
  max_entries: number | null
  league_type: LeagueType
  scoring: ScoringType // 'h' для H2H
  admin_entry: number | null
  start_event: number
  entry_rank: number | null
  entry_last_rank: number | null
}

type LeagueType = 's' | 'x'
type ScoringType = 'c' | 'h'

interface Cup {
  cup_league: Nullable<any>
  matches: CupMatch[]
  status: CupStatus
}

interface CupMatch {
  id: number
  entry_1_entry: number
  entry_1_name: string
  entry_1_player_name: string
  entry_1_points: number | null
  entry_1_win: number | null
  entry_1_draw: number | null
  entry_1_loss: number | null
  entry_2_entry: number | null
  entry_2_name: string | null
  entry_2_player_name: string | null
  entry_2_points: number | null
  entry_2_win: number | null
  entry_2_draw: number | null
  entry_2_loss: number | null
  is_knockout: boolean
  winner: number | null
  event: number
}

interface CupStatus {
  qualification_event: number
  qualification_numbers: number
  qualification_rank: number | null
  qualification_state: string | null
}
