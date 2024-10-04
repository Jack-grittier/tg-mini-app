import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IGameWeekState } from '@features/Gameweek/model/types.ts'

const gameweekSlice = createSlice({
  name: 'gameweek',
  initialState: {
    activeEvent: -1,
    currentEvent: -1,
    error: '',
    loading: false,
  } as IGameWeekState,
  reducers: {
    initActiveEvent: (state, action: PayloadAction<number>) => {
      state.activeEvent = action.payload
      state.currentEvent = action.payload
    },
    setActiveEvent: (state, action: PayloadAction<number>) => {
      state.activeEvent = action.payload
    },
  },
})

const { reducer } = gameweekSlice

export const { initActiveEvent, setActiveEvent } = gameweekSlice.actions

export default reducer
