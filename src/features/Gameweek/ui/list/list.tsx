import { useAppDispatch, useAppSelector } from '@app/store'
import { Icon } from '@shared/ui/Icon'
import { useEffect, useMemo } from 'react'
import { ActionChangeEvent, Mode } from './ActionChangeEvent/ActionChangeEvent'
import { setActiveEvent } from '@features/Gameweek'

import styles from './List.module.css'
import { Title } from '@telegram-apps/telegram-ui'
import { getPicks } from '@features/TeamField/index.ts'

export const List = () => {
  const activeEventIndex = useAppSelector((state) => state.gameweek.activeEvent)
  const events = useAppSelector((state) => state.bootstrapStatic.static?.events)

  const dispatch = useAppDispatch()

  const currentEvent = useMemo(
    () => events?.[activeEventIndex],
    [activeEventIndex]
  )

  useEffect(() => {
    if (activeEventIndex > -1) {
      dispatch(getPicks({ eventId: events![activeEventIndex].id ?? -1 }))
    }
  }, [activeEventIndex])

  if (!currentEvent) {
    return (
      <div>
        <span>Ooopps...</span>
      </div>
    )
  }

  const incrementAction = () => {
    if ((events?.length ?? 0) - 1 === activeEventIndex) {
      return
    }
    dispatch(setActiveEvent(activeEventIndex + 1))
  }

  const decrementAction = () => {
    if (activeEventIndex === 0) {
      return
    }
    dispatch(setActiveEvent(activeEventIndex - 1))
  }

  const changeIndex = (action: 'decrement' | 'increment') => {
    if (action === 'increment') {
      incrementAction()
      return
    }
    if (action === 'decrement') {
      decrementAction()
      return
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <ActionChangeEvent
          mode={Mode.left}
          onClick={() => changeIndex('decrement')}
        >
          <Icon as={'arrow'} width={20} height={20} />
        </ActionChangeEvent>
        <Title caps level="1" weight="1">
          {currentEvent?.name}
        </Title>
        <ActionChangeEvent
          mode={Mode.right}
          onClick={() => changeIndex('increment')}
        >
          <Icon as={'arrow'} width={20} height={20} />
        </ActionChangeEvent>
      </div>
    </div>
  )
}
