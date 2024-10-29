import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { initCloudStorage } from '@telegram-apps/sdk'
import { ICloudModel } from './types'

export const initializeCloudStorage = createAsyncThunk(
  'cloudStorage/initialize',
  async () => {
    const instance = await initCloudStorage()
    return instance
  }
)

const cloudStorageSlice = createSlice({
  name: 'cloudStorage',
  initialState: {
    instance: null,
    status: 'idle',
    error: null,
  } as ICloudModel,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initializeCloudStorage.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(initializeCloudStorage.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.instance = action.payload
      })
      .addCase(initializeCloudStorage.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default cloudStorageSlice.reducer
