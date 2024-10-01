import { createSlice } from '@reduxjs/toolkit'
import { IFixtureState } from './types'

const fixturesSlice = createSlice({
  name: 'fixtures',
  initialState: {
    data: [],
  } as IFixtureState,
  reducers: {},
})
