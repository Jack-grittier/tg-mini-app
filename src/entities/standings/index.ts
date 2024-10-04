export {
  default as standingsReducer,
  getNewPageStandings,
} from './model/common/standings.slice'

export {
  default as standingsDataReducer,
  setStandingsData,
} from './model/standings-data/standings-data.slice'

export {
  type IStandingsDataState,
  type Squad,
  type StandingResultItemWithSquad,
} from './model/standings-data/types'
