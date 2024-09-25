export interface Entry {
  id: number
  joined_time: string // Дата в формате ISO
  started_event: number
  favourite_team: number | null
  player_first_name: string
  player_last_name: string
  player_region_id: number
  player_region_name: string
  player_region_iso_code_short: string
  player_region_iso_code_long: string
  summary_overall_points: number
  summary_overall_rank: number
  summary_event_points: number
  summary_event_rank: number
  current_event: number
  leagues: Leagues
  name: string
  kit: Kit | null
  last_deadline_bank: number
  last_deadline_value: number
  last_deadline_total_transfers: number
}

interface Leagues {
  classic: ClassicLeague[]
  h2h: H2HLeague[]
  cup: Cup | null
  cup_matches: CupMatch[]
}

interface ClassicLeague {
  id: number
  name: string
  short_name: string | null
  created: string // Дата в формате ISO
  closed: boolean
  rank: number | null
  max_entries: number | null
  league_type: LeagueType // 's' или 'x'
  scoring: ScoringType // 'c' для классического
  admin_entry: number | null
  start_event: number
  entry_rank: number | null
  entry_last_rank: number | null
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

interface Kit {
  // Если вам нужны подробные данные о комплекте формы, вы можете добавить поля здесь
  // В противном случае можно оставить как any или null
  [key: string]: any
}
