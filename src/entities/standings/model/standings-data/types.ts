import { StandingResultItem, StandingStandings } from '@shared/api/standings'
import { type Pick as PickType } from '@shared/api/picks'
import { type Player } from '@shared/api/bootstrap-static'

export type Squad = {
  squad: (PickType & { element: number | Player })[]
}

export type StandingResultItemWithSquad = StandingResultItem & Squad

export interface IStandingsDataState extends StandingStandings {
  results: StandingResultItemWithSquad[]
  page: number
  has_next: boolean
}
