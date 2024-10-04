import { useEffect, useMemo } from 'react'
import { Title } from '@telegram-apps/telegram-ui'

import { useAppDispatch, useAppSelector } from '@app/store'
import { Icon } from '@shared/ui/Icon'
import { ActionChangeEvent, Mode } from './ActionChangeEvent/ActionChangeEvent'

import { getPicks } from '@features/TeamField'
import { setCommonActiveEvent } from '@features/team'

import styles from './List.module.css'

type PropsType = {
  isPrimary: boolean
}

export const List = ({ isPrimary }: PropsType) => {
  // const activeEventIndex = useAppSelector((state) => state.gameweek.activeEvent)
  const activeEventIndex = useAppSelector(
    (state) => state.common[isPrimary ? 'primary' : 'secondary'].activeEvent
  )
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
    dispatch(
      setCommonActiveEvent({
        activeEvent: activeEventIndex + 1,
        field: isPrimary ? 'primary' : 'secondary',
      })
    )
  }

  const decrementAction = () => {
    if (activeEventIndex === 0) {
      return
    }
    dispatch(
      setCommonActiveEvent({
        activeEvent: activeEventIndex - 1,
        field: isPrimary ? 'primary' : 'secondary',
      })
    )
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
          {currentEvent.name}
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
