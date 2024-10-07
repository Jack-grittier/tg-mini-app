import { createSlice } from '@reduxjs/toolkit'
import { IPickTotalPointState } from './types'
import { resetAllTeam } from '@features/team'

const initialState: IPickTotalPointState = {
  total: 0,
}

const pickTotalPointsSlice = createSlice({
  name: 'pick-total-points',
  initialState,
  reducers: {
    initTotalPoints: (state, action) => {
      state.total = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetAllTeam, () => {
      return initialState
    })
  },
})

const { reducer } = pickTotalPointsSlice

export const { initTotalPoints } = pickTotalPointsSlice.actions

export default reducer
