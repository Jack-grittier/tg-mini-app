import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit'
import { ISearchState } from '@features/SearchManager/model/types.ts'
import { getManagerById } from '@shared/api/entry-manager'

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})

const searchSlice = createSliceWithThunks({
  name: 'search',
  initialState: { loading: false, manager: null, error: '' } as ISearchState,
  reducers: (create) => ({
    searchManager: create.asyncThunk<any, { managerId: string }>(
      async ({ managerId }) => {
        try {
          const resp = await getManagerById(managerId)
          console.log('resp', resp)
          return resp
        } catch (e) {
          console.log('error', e)
        }
      },
      {
        pending: () => {},
        fulfilled: () => {},
        rejected: () => {},
      }
    ),
  }),
})

// export const searchManager = createAsyncThunk<any, { managerId: string }>(
//   'search/searchManager',
//   async ({ managerId }) => {
//     try {
//       const resp = await getManagerById(managerId)
//       console.log('resp', resp)
//       return resp
//     } catch (e) {
//       console.log('error', e)
//     }
//   }
// )
//
// const searchSlice = createSlice({
//   name: 'search',
//   initialState: { loading: false, manager: null, error: '' } as ISearchState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(searchManager.fulfilled, () => {})
//   },
// })

const { reducer } = searchSlice

export const { searchManager } = searchSlice.actions

export default reducer
