import { PropsWithChildren, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@app/store'
import { fetchScheduler } from '@features/fixtures'
import { FixturesList } from '../../fixtures-list/ui/fixtures-list'

interface PropsType {}

export const FixturesGetterList = ({}: PropsWithChildren<PropsType>) => {
  const eventId = useAppSelector((state) => state.fixtures.event)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (eventId > -1) {
      dispatch(fetchScheduler({ eventId }))
    }
  }, [eventId])

  return (
    <>
      {Intl.DateTimeFormat().resolvedOptions().timeZone}
      <FixturesList />
    </>
  )
}
