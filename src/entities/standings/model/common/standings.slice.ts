import {
  asyncThunkCreator,
  buildCreateSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { getStandings, StandingLeague } from '@shared/api/standings'
import { setStandingsData } from '../standings-data/standings-data.slice'
import { IStandingCommonState } from './types'
import { getCurrentPicks } from '@shared/api/picks'
import { binarySearch } from '@shared/lib'
import { Player } from '@shared/api/bootstrap-static'

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})

const standingsSlice = createSliceWithThunks({
  name: 'standings',
  initialState: {
    loading: false,
  } as IStandingCommonState,
  reducers: (create) => ({
    getNewPageStandings: create.asyncThunk<
      { last_updated_data: Date; league: StandingLeague },
      { leagueId: number; page: number }
    >(
      async ({ leagueId, page }, { rejectWithValue, dispatch, getState }) => {
        const state = getState() as unknown as RootState
        const currentEvent = state.common.currentEvent
        const fullPlayers = state.bootstrapStatic.static?.elements ?? []
        try {
          const {
            data: { standings, last_updated_data, league },
          } = await getStandings(leagueId, page)
          const resultWithAllPicks = await Promise.all(
            standings.results.map(async (s) => {
              const resp = await getCurrentPicks(s.entry, currentEvent)
              return resp.data.picks.map((p) => {
                const currentPlayer = binarySearch<Player>(
                  fullPlayers,
                  p.element
                )
                return {
                  ...p,
                  element: currentPlayer ? currentPlayer : p.element,
                }
              })
            })
          )
          const data = {
            ...standings,
            results: standings.results.map((r, index) => ({
              ...r,
              squad: resultWithAllPicks[index],
            })),
          }

          console.log('resultWithAllPicks!!!!', data)
          //@ts-ignore
          dispatch(setStandingsData(data))

          return { last_updated_data, league }
        } catch (e) {
          return rejectWithValue('getNewPageStandings')
        }
      },
      {
        pending: (state) => {
          state.loading = true
        },
        fulfilled: (
          state,
          action: PayloadAction<Omit<IStandingCommonState, 'loading'>>
        ) => {
          state.last_updated_data = action.payload.last_updated_data
          state.league = action.payload.league
          state.loading = false
        },
        rejected: (state) => {
          state.loading = false
        },
      }
    ),
  }),
})

const { reducer } = standingsSlice

export const { getNewPageStandings } = standingsSlice.actions

export default reducer
