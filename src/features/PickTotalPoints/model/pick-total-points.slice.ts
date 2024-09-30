import { createSlice } from '@reduxjs/toolkit'
import { IPickTotalPointState } from './types'

const pickTotalPointsSlice = createSlice({
  name: 'pick-total-points',
  initialState: {
    total: 0,
  } as IPickTotalPointState,
  reducers: {
    initTotalPoints: (state, action) => {
      state.total = action.payload
    },
  },
})

const { reducer } = pickTotalPointsSlice

export const { initTotalPoints } = pickTotalPointsSlice.actions

export default reducer
