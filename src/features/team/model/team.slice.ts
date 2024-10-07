import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITeamState } from './types'

const teamSlice = createSlice({
  name: 'team',
  initialState: {
    currentEvent: -1,
    primary: {
      managerId: 288593, // 794535
      eventId: -1,
      activeEvent: -1,
    },
    secondary: {
      managerId: -1,
      eventId: -1,
      activeEvent: -1,
    },
  } as ITeamState,
  reducers: {
    initCommonActiveEvent: (state, action: PayloadAction<number>) => {
      state.currentEvent = action.payload
      state.primary.activeEvent = action.payload
      state.secondary.activeEvent = action.payload
    },
    setCommonActiveEvent: (
      state,
      action: PayloadAction<{
        field: 'primary' | 'secondary'
        activeEvent: number
      }>
    ) => {
      const { field, activeEvent } = action.payload
      state[field].activeEvent = activeEvent
    },
    setSecondaryManagerId: (state, action: PayloadAction<number>) => {
      state.secondary.managerId = action.payload
    },
    resetAllTeam: (state) => {
      state.secondary.managerId = -1
    },
  },
})

const { reducer } = teamSlice

export const {
  initCommonActiveEvent,
  setCommonActiveEvent,
  setSecondaryManagerId,
  resetAllTeam,
} = teamSlice.actions

export default reducer
