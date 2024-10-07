import type { PropsWithChildren } from 'react'
import { useAppDispatch, useAppSelector } from '@app/store'
import { setInitialEvent } from '@features/fixtures'
import { Time } from './time'

interface PropsType {}

export const FixturesEventSwitch = ({}: PropsWithChildren<PropsType>) => {
  const dispatch = useAppDispatch()
  const activeEventIndex = useAppSelector((state) => state.fixtures.event)

  const events =
    useAppSelector((state) => state.bootstrapStatic.static?.events) ?? []
  const currentEvent = events[activeEventIndex]

  return (
    <div>
      <div>
        <button
          onClick={() => {
            dispatch(setInitialEvent(activeEventIndex - 1))
          }}
        >
          prev
        </button>
        <div>
          <span>{currentEvent?.name}:</span>
          {currentEvent?.deadline_time && (
            <Time deadline_time={currentEvent.deadline_time} />
          )}
        </div>
        <button
          onClick={() => {
            dispatch(setInitialEvent(activeEventIndex + 1))
          }}
        >
          next
        </button>
      </div>
    </div>
  )
}
