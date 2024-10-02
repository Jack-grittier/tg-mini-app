import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IActiveChipState } from './types'
import { ChipListType } from '@shared/config/constants/constants'

const activeChipSlice = createSlice({
  name: 'activeChip',
  initialState: {
    activeChip: null,
  } as IActiveChipState,
  reducers: {
    setActiveChip: (state, action: PayloadAction<Nullable<ChipListType>>) => {
      state.activeChip = action.payload
    },
  },
})

const { reducer } = activeChipSlice

export const { setActiveChip } = activeChipSlice.actions

export default reducer
