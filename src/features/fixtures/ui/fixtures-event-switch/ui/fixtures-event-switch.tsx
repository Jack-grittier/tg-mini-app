import type { PropsWithChildren } from 'react'
import { useAppDispatch, useAppSelector } from '@app/store'
import { setInitialEvent } from '@features/fixtures'
import {
  ActionChangeEvent,
  Mode,
} from '@features/Gameweek/ui/list/ActionChangeEvent/ActionChangeEvent.tsx'
import { Icon } from '@shared/ui/Icon'
import styles from './fixtures-event-switch.module.css'
import { Title } from '@telegram-apps/telegram-ui'

interface PropsType {}

export const FixturesEventSwitch = ({}: PropsWithChildren<PropsType>) => {
  const dispatch = useAppDispatch()
  const activeEventIndex = useAppSelector((state) => state.fixtures.event)

  const events =
    useAppSelector((state) => state.bootstrapStatic.static?.events) ?? []
  const currentEvent = events[activeEventIndex]

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <ActionChangeEvent
          className={styles.btnArrow}
          mode={Mode.left}
          onClick={() => {
            dispatch(setInitialEvent(activeEventIndex - 1))
          }}
        >
          <Icon as={'arrow'} width={20} height={20} />
        </ActionChangeEvent>

        <Title caps level="1" weight="2">
          {currentEvent?.name}
        </Title>
        {/*{currentEvent?.deadline_time && (*/}
        {/*  <Time deadline_time={currentEvent.deadline_time} />*/}
        {/*)}*/}

        <ActionChangeEvent
          className={styles.btnArrow}
          mode={Mode.right}
          onClick={() => {
            dispatch(setInitialEvent(activeEventIndex + 1))
          }}
        >
          <Icon as={'arrow'} width={20} height={20} />
        </ActionChangeEvent>
      </div>
    </div>
  )
}
