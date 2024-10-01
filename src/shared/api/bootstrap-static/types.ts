export interface BootstrapStatic {
  element_stats: ElementStat[]
  element_types: ElementType[]
  elements: Player[]
  events: Event[]
  game_settings: GameSettings
  phases: Phase[]
  teams: Team[]
  total_players: number
}

interface Event {
  average_entry_score: number
  chip_plays: ChipPlay[]
  cup_leagues_created: boolean
  deadline_time: string
  deadline_time_epoch: number
  deadline_time_game_offset: number
  finished: boolean
  h2h_ko_matches_created: false
  highest_score: number
  highest_scoring_entry: number
  id: number
  is_current: boolean
  is_next: boolean
  is_previous: boolean
  most_captained: number
  most_selected: number
  most_transferred_in: number
  most_vice_captained: number
  name: string
  ranked_count: number
  release_time: Nullable<any> //XZ
  top_element: number
  top_element_info: TopElementInfo
  transfers_made: number
}

interface ChipPlay {
  chip_name: string
  num_played: number
}

interface TopElementInfo {
  id: number
  points: number
}

interface GameSettings {
  cup_qualifying_method: Nullable<number> // MB number
  cup_start_event_id: Nullable<number> // MB number
  cup_stop_event_id: Nullable<number> // MB number
  cup_type: Nullable<number> // MB number
  featured_entries: any[] // MB number
  league_h2h_tiebreak_stats: ['+goals_scored', '-goals_conceded']
  league_join_private_max: number
  league_join_public_max: number
  league_ko_first_instead_of_random: boolean
  league_max_ko_rounds_private_h2h: number
  league_max_size_private_h2h: number
  league_max_size_public_classic: number
  league_max_size_public_h2h: number
  league_points_h2h_draw: number
  league_points_h2h_lose: number
  league_points_h2h_win: number
  league_prefix_public: string // 'League'
  max_extra_free_transfers: number
  percentile_ranks: number[]
  squad_squadplay: number
  squad_squadsize: number
  squad_team_limit: number
  squad_total_spend: number
  stats_form_days: number
  sys_vice_captain_enabled: boolean
  timezone: string // 'UTC'
  transfers_cap: number
  transfers_sell_on_fee: number
  ui_currency_multiplier: number
  ui_special_shirt_exclusions: any[]
  ui_use_special_shirts: boolean
}

interface Phase {
  highest_score: Nullable<number>
  id: number
  name: string
  start_event: number
  stop_event: number
}

export interface Team {
  code: number
  draw: number
  form: null
  id: number
  loss: number
  name: string // "Arsenal"
  played: number
  points: number
  position: number
  pulse_id: number
  short_name: string // "ARS"
  strength: number
  strength_attack_away: number
  strength_attack_home: number
  strength_defence_away: number
  strength_defence_home: number
  strength_overall_away: number
  strength_overall_home: number
  team_division: null
  unavailable: boolean
  win: number
}

export interface Player {
  assists: number
  bonus: number
  bps: number
  chance_of_playing_next_round: Nullable<number>
  chance_of_playing_this_round: Nullable<number>
  clean_sheets: number
  clean_sheets_per_90: number
  code: number
  corners_and_indirect_freekicks_order: Nullable<any> //any
  corners_and_indirect_freekicks_text: string
  cost_change_event: number
  cost_change_event_fall: number
  cost_change_start: number
  cost_change_start_fall: number
  creativity: string
  creativity_rank: number
  creativity_rank_type: number
  direct_freekicks_order: Nullable<number>
  direct_freekicks_text: string
  dreamteam_count: number
  element_type: number
  ep_next: string
  ep_this: string
  event_points: number //
  expected_assists: string // "0.00"
  expected_assists_per_90: number // 0
  expected_goal_involvements: string // "0.00"
  expected_goal_involvements_per_90: number // 0
  expected_goals: string // "0.00"
  expected_goals_conceded: string // "0.00"
  expected_goals_conceded_per_90: number // 0
  expected_goals_per_90: number // 0
  first_name: string
  form: string //
  form_rank: number // 642
  form_rank_type: number // 292
  goals_conceded: number
  goals_conceded_per_90: number
  goals_scored: number
  ict_index: string
  ict_index_rank: number
  ict_index_rank_type: number
  id: number
  in_dreamteam: boolean
  influence: string
  influence_rank: number
  influence_rank_type: number
  minutes: number
  news: string
  news_added: string
  now_cost: number
  now_cost_rank: number // 144
  now_cost_rank_type: number // 86
  own_goals: number
  penalties_missed: number
  penalties_order: number | null
  penalties_saved: number
  penalties_text: string //
  photo: string
  points_per_game: string
  points_per_game_rank: number // 648
  points_per_game_rank_type: number //  295
  red_cards: number
  region: Nullable<any> // тут хз что за тип
  saves: number
  saves_per_90: number //
  second_name: string
  selected_by_percent: string
  selected_rank: number // 608
  selected_rank_type: number // 269
  special: boolean
  squad_number: Nullable<number>
  starts: number // 0
  starts_per_90: number // 0
  status: string
  team: number
  team_code: number
  threat: string
  threat_rank: number
  threat_rank_type: number
  total_points: number
  transfers_in: number
  transfers_in_event: number
  transfers_out: number
  transfers_out_event: number
  value_form: string
  value_season: string
  web_name: string
  yellow_cards: number
}

interface ElementStat {
  label: string
  name: string
}

interface ElementType {
  element_count: number
  id: number
  plural_name: string
  plural_name_short: string
  singular_name: string
  singular_name_short: string
  squad_max_play: number
  squad_max_select: number
  squad_min_play: number
  squad_select: number
  sub_positions_locked: number[]
  ui_shirt_specific: boolean
}
