import searchReducer from '@features/SearchManager/model/searchSlice'
import gameweekReducer from '@features/Gameweek/model/gameweekSlice'
import bootstrapReducer from '@entities/bootstrap-static/model/staticSlice'
import { pickTotalPointsReducer } from '@features/PickTotalPoints'
import teamReducer from '@features/TeamField/model/teamSlice'
import chipReducer from '@features/ActiveChip/model/active-chip.slice'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

const rootReducer = combineReducers({
  search: searchReducer,
  bootstrapStatic: bootstrapReducer,
  gameweek: gameweekReducer,
  team: teamReducer,
  pickTotalPoints: pickTotalPointsReducer,
  chip: chipReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const useAppDispatch = useDispatch.withTypes<RootDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

//@ts-ignore
window.store = store
