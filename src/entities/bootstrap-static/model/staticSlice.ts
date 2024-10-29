import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit'
import { IStaticState } from './types'
import {
  BootstrapStatic,
  getBootstrapStatic,
} from '@shared/api/bootstrap-static'
import { initCommonActiveEvent } from '@features/team'

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})

const staticSlice = createSliceWithThunks({
  name: 'bootstrap-static',
  initialState: {
    loading: false,
    static: null,
    error: '',
    status: 'ожидание',
  } as IStaticState,
  reducers: (create) => ({
    getBootstrapStaticData: create.asyncThunk<BootstrapStatic>(
      async (_, { rejectWithValue, dispatch }) => {
        try {
          const resp = await getBootstrapStatic()

          const events = resp.events
          const activeEventIndex = events.findIndex((e) => e.is_current)
          if (activeEventIndex > -1) {
            dispatch(initCommonActiveEvent(activeEventIndex))
          }
          return resp
        } catch (e) {
          console.log('error', e)
          return rejectWithValue('getBootstrapStaticData')
        }
      },
      {
        pending: (state) => {
          state.loading = true
          state.status = 'загружается'
        },
        fulfilled: (state, action) => {
          state.static = action.payload
          state.loading = false
          state.status = 'загружен'
        },
        rejected: (state) => {
          state.loading = false
          state.status = 'ошибка загрузки'
        },
      }
    ),
  }),
})

const { reducer } = staticSlice

export const { getBootstrapStaticData } = staticSlice.actions

export default reducer
