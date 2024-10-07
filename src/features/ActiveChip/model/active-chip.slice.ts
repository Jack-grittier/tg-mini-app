import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IActiveChipState } from './types'
import { ChipListType } from '@shared/config/constants/constants'
import { resetAllTeam } from '@features/team'

const initialState: IActiveChipState = {
  activeChip: null,
}

const activeChipSlice = createSlice({
  name: 'activeChip',
  initialState,
  reducers: {
    setActiveChip: (state, action: PayloadAction<Nullable<ChipListType>>) => {
      state.activeChip = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetAllTeam, () => {
      return initialState
    })
  },
})

const { reducer } = activeChipSlice

export const { setActiveChip } = activeChipSlice.actions

export default reducer
