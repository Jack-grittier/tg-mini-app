import { searchReducer } from '@features/SearchManager'
import { gameweekReducer } from '@features/Gameweek'
import { bootstrapReducer } from '@entities/bootstrap-static'
import { pickTotalPointsReducer } from '@features/PickTotalPoints'
import { teamReducer } from '@features/TeamField'
import { chipReducer } from '@features/ActiveChip'
import { commonReducer } from '@features/team'
import { standingsDataReducer, standingsReducer } from '@entities/standings'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

const rootReducer = combineReducers({
  search: searchReducer,
  bootstrapStatic: bootstrapReducer,
  gameweek: gameweekReducer,
  team: teamReducer,
  pickTotalPoints: pickTotalPointsReducer,
  chip: chipReducer,
  standings: standingsReducer,
  standingsData: standingsDataReducer,
  common: commonReducer,
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
