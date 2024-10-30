import {
  asyncThunkCreator,
  buildCreateSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { getCurrentPicks } from '@shared/api/picks'
import { getLive } from '@shared/api/live'
import { binarySearch, quickSort } from '@shared/lib'
import { type ITeamState, TeamField } from './types'
import { type Player } from '@shared/api/bootstrap-static'
import { LiveElement } from '@shared/api/live'
import { initTotalPoints } from '@features/PickTotalPoints'
import { getFixturesEvent, isFixture } from '@shared/api/fixtures'
import { setActiveChip } from '@features/ActiveChip'
import { resetAllTeam } from '@features/team/index.ts'

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})

const teamSlice = createSliceWithThunks({
  name: 'team',
  initialState: {} as ITeamState,
  reducers: (create) => ({
    getPicks: create.asyncThunk<any, { eventId: number; managerId: number }>(
      async (
        { eventId, managerId },
        { rejectWithValue, getState, dispatch, signal }
      ) => {
        const globalState = getState() as unknown as RootState
        const fullPlayer = globalState.bootstrapStatic.static?.elements ?? []
        try {
          const respPick = await getCurrentPicks(managerId, eventId, { signal })
          const respLife = await getLive(eventId, { signal })
          const respFixtures = await getFixturesEvent(eventId, { signal })

          dispatch(initTotalPoints(respPick.data.entry_history.points))
          dispatch(setActiveChip(respPick.data.active_chip))

          const myPicks = respPick.data.picks
          const allStats = respLife.data.elements
          const fullFixtures = quickSort(respFixtures.data)

          const data = myPicks.map((p) => {
            const currentStats = binarySearch<LiveElement>(allStats, p.element)
            const currentPlayer = binarySearch<Player>(fullPlayer, p.element)

            const stats =
              currentStats !== null && typeof currentStats === 'object'
                ? {
                    ...currentStats.stats,
                    explain: currentStats.explain.map((ex) => {
                      const currentFixture = binarySearch(
                        fullFixtures,
                        ex.fixture
                      )

                      const fixture = isFixture(currentFixture)
                        ? currentFixture
                        : ex.fixture

                      return {
                        stats: ex.stats,
                        fixture,
                      }
                    }),
                  }
                : {}

            return {
              ...p,
              stats: { ...stats },
              player: currentPlayer,
            }
          })

          return data
        } catch (e) {
          return rejectWithValue('getPicks')
        }
      },
      {
        pending: (state) => {
          state.loading = true
        },
        fulfilled: (state, action: PayloadAction<TeamField[]>) => {
          state.data = action.payload
          state.loading = false
        },
        rejected: (state) => {
          state.loading = false
        },
      }
    ),
  }),
  extraReducers: (builder) => {
    builder.addCase(resetAllTeam, () => {
      return {} as ITeamState
    })
  },
})

const { reducer } = teamSlice

export const { getPicks } = teamSlice.actions

export default reducer
