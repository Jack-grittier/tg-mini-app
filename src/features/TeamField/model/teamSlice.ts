import {
  asyncThunkCreator,
  buildCreateSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { getCurrentPicks } from '@shared/api/picks'
import { getLive } from '@shared/api/live/live'
import { binarySearch } from '@shared/lib/binarySearch/binarySearch'
import { ITeamState, TeamField } from './types'
import { Player } from '@shared/api/bootstrap-static/types'
import { LiveStats } from '@shared/api/live/types'

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})

const teamSlice = createSliceWithThunks({
  name: 'team',
  initialState: {} as ITeamState,
  reducers: (create) => ({
    getPicks: create.asyncThunk<any, { eventId: number }>(
      async ({ eventId }, { rejectWithValue, getState }) => {
        const globalState = getState() as unknown as RootState
        const managerId = globalState.search.manager?.id ?? -1
        const fullPlayer = globalState.bootstrapStatic.static?.elements ?? []
        try {
          const respPick = await getCurrentPicks(managerId, eventId)
          const respLife = await getLive(eventId)

          const myPicks = respPick.data.picks
          const allStats = respLife.data.elements

          const data = myPicks.map((p) => {
            const currentStats = binarySearch(
              allStats,
              p.element
            )! as unknown as LiveStats
            const currentPlayer = binarySearch(
              fullPlayer,
              p.element
            ) as unknown as Player

            return { ...p, stats: currentStats, player: currentPlayer }
          })

          return data
        } catch (e) {
          return rejectWithValue('getPicks')
        }
      },
      {
        fulfilled: (state, action: PayloadAction<TeamField[]>) => {
          state.data = action.payload
        },
      }
    ),
  }),
})

const { reducer } = teamSlice

export const { getPicks } = teamSlice.actions

export default reducer
