import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ISearchState } from './types'
import { Entry, getManagerById } from '@shared/api/entry-manager'
import { resetAllTeam } from '@features/team'

export const searchManager = createAsyncThunk<Entry, { managerId: number }>(
  'search/searchManager',
  async ({ managerId }, { rejectWithValue }) => {
    try {
      return await getManagerById(managerId)
    } catch (e) {
      console.log('error', e)
      return rejectWithValue('searchManager')
    }
  }
)

const initialState: ISearchState = {
  loading: false,
  manager: null,
  error: '',
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchManager.pending, (state) => {
        state.loading = true
      })
      .addCase(searchManager.rejected, (state) => {
        state.loading = false
      })
      .addCase(searchManager.fulfilled, (state, action) => {
        state.loading = false
        state.manager = action.payload
      })
      .addCase(resetAllTeam, () => {
        return initialState
      })
  },
})

const { reducer } = searchSlice

export const {} = searchSlice.actions

export default reducer
