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

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})

const teamSlice = createSliceWithThunks({
  name: 'team',
  initialState: {} as ITeamState,
  reducers: (create) => ({
    getPicks: create.asyncThunk<any, { eventId: number }>(
      async ({ eventId }, { rejectWithValue, getState, dispatch }) => {
        const globalState = getState() as unknown as RootState
        const managerId = globalState.search.manager?.id ?? -1
        const fullPlayer = globalState.bootstrapStatic.static?.elements ?? []
        try {
          const respPick = await getCurrentPicks(managerId, eventId)
          const respLife = await getLive(eventId)
          const respFixtures = await getFixturesEvent(eventId)

          dispatch(initTotalPoints(respPick.data.entry_history.points))

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
