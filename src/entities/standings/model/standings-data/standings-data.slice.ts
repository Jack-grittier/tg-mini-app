import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IStandingsDataState } from './types'

const standingsSlice = createSlice({
  name: 'standings-data',
  initialState: {
    page: 1,
    has_next: false,
    results: [],
  } as IStandingsDataState,
  reducers: {
    setStandingsData: (_, action: PayloadAction<IStandingsDataState>) => {
      return action.payload
    },
  },
})

const { reducer } = standingsSlice

export const { setStandingsData } = standingsSlice.actions

export default reducer
