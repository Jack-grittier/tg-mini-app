import { PropsWithChildren, useEffect, useState } from 'react'
import { Icon } from '@shared/ui/Icon'
import { IconButton } from '@telegram-apps/telegram-ui'
import { useAppDispatch, useAppSelector } from '@app/store'
import { getPicks } from '@features/TeamField'

import styles from './styles.module.css'

interface PropsType {}

export const RefreshTeam = ({}: PropsWithChildren<PropsType>) => {
  const [triggerReload, setTriggerReload] = useState(0)

  const managerId = useAppSelector((state) => state.common.primary.managerId)
  const events = useAppSelector((state) => state.bootstrapStatic.static?.events)

  const loading = useAppSelector((state) => state.team.loading)

  const activeEventIndex = useAppSelector(
    (state) => state.common.primary.activeEvent
  )

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (triggerReload === 0) {
      return
    }
    const promise = dispatch(
      getPicks({ eventId: events![activeEventIndex].id ?? -1, managerId })
    )
    return () => {
      promise.abort()
    }
  }, [triggerReload])

  return (
    <IconButton
      mode="plain"
      size="l"
      onClick={() => setTriggerReload((prev) => prev + 1)}
      className={loading ? styles.load : ''}
    >
      <Icon as={'retry'} width={28} height={28} />
    </IconButton>
  )
}
