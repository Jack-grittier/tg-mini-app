import { instance } from '../base'
import { StandingsType } from './types'

export const getStandings = async (leagueId: number, page: number) => {
  return await instance.get<StandingsType>(
    `/leagues-classic/${leagueId}/standings/?page_new_entries=1&page_standings=${page}&phase=1`
  )
}
