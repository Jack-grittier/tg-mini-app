import {
  asyncThunkCreator,
  buildCreateSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { FixtureStatsType, FixtureWithTeam, IFixtureState } from './types'
import { getFixturesEvent } from '@shared/api/fixtures'
import { binarySearch } from '@shared/lib/index.ts'
import { isPlayer, Team } from '@shared/api/bootstrap-static/index.ts'

const initialState: IFixtureState = {
  matchSchedule: null,
  event: -1,
  loading: false,
}

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})

const fixturesSlice = createSliceWithThunks({
  name: 'fixtures',
  initialState,
  reducers: (create) => ({
    setInitialEvent: create.reducer((state, action: PayloadAction<number>) => {
      state.event = action.payload
    }),

    fetchScheduler: create.asyncThunk<FixtureWithTeam[], { eventId: number }>(
      async ({ eventId }, { rejectWithValue, getState }) => {
        const globalState = getState() as unknown as RootState
        const teams = globalState.bootstrapStatic.static?.teams ?? []
        const players = globalState.bootstrapStatic.static?.elements ?? []
        try {
          const resp = await getFixturesEvent(eventId)
          const data: FixtureWithTeam[] = resp.data.map((f) => {
            const team_a = binarySearch(teams, f.team_a)
            const team_h = binarySearch(teams, f.team_h)

            const a = typeof team_a !== 'number' ? team_a : ({} as Team)
            const h = typeof team_h !== 'number' ? team_h : ({} as Team)

            const statsFull: FixtureStatsType[] = f.stats.map((s) => {
              const a = s.a.map((_a) => {
                const pl = binarySearch(players, _a.element)
                return {
                  ..._a,
                  element: isPlayer(pl) ? pl : null,
                }
              })

              const h = s.h.map((_h) => {
                const pl = binarySearch(players, _h.element)
                return {
                  ..._h,
                  element: isPlayer(pl) ? pl : null,
                }
              })

              return {
                ...s,
                a,
                h,
              }
            })

            return {
              ...f,
              team_a: a ?? ({} as Team),
              team_h: h ?? ({} as Team),
              stats: statsFull ?? null,
            }
          })
          return data
        } catch (e) {
          return rejectWithValue('fetchScheduler')
        }
      },
      {
        pending: (state) => {
          state.loading = true
        },
        rejected: (state) => {
          state.loading = false
        },
        fulfilled: (state, action) => {
          state.loading = false
          state.matchSchedule = action.payload
        },
      }
    ),
  }),
})

const { reducer } = fixturesSlice

export const { setInitialEvent, fetchScheduler } = fixturesSlice.actions

export default reducer
