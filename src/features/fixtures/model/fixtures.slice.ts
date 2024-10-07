import {
  asyncThunkCreator,
  buildCreateSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { IFixtureState } from './types'
import { FixtureType, getFixturesEvent } from '@shared/api/fixtures'

const initialState: IFixtureState = {
  matchSchedule: null,
  event: -1,
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

    fetchScheduler: create.asyncThunk<FixtureType[], { eventId: number }>(
      async ({ eventId }, { rejectWithValue }) => {
        try {
          const resp = await getFixturesEvent(eventId)

          return resp.data
        } catch (e) {
          return rejectWithValue('fetchScheduler')
        }
      },
      {}
    ),
  }),
})

const { reducer } = fixturesSlice

export const { setInitialEvent, fetchScheduler } = fixturesSlice.actions

export default reducer
