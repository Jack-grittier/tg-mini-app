import { PropsWithChildren, useEffect } from 'react'
import { FixturesSender, setInitialEvent } from '@features/fixtures'
import { useAppDispatch, useAppSelector } from '@app/store'

interface FixturesPropsType {}

export const Fixtures = ({}: PropsWithChildren<FixturesPropsType>) => {
  const dispatch = useAppDispatch()
  const events =
    useAppSelector((state) => state.bootstrapStatic.static?.events) ?? []
  const currentEvent = events.findIndex((e) => {
    if (!e.finished && e.is_current) {
      return true
    } else {
      return e.is_next
    }
  })
  useEffect(() => {
    if (currentEvent) {
      dispatch(setInitialEvent(currentEvent))
    }
    return () => {
      dispatch(setInitialEvent(-1))
    }
  }, [currentEvent])
  return (
    <div>
      <FixturesSender />
    </div>
  )
}
