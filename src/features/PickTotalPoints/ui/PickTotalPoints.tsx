import { useAppSelector } from '@app/store'

import { IconButton, Title } from '@telegram-apps/telegram-ui'
import { Icon } from '@shared/ui/Icon'
import styles from './PickTotalPoints.module.css'

export const PickTotalPoints = () => {
  const teamInfo = useAppSelector((state) => state.team.data) ?? []
  const stats = teamInfo.map((t) => ({
    multiplier: t.multiplier,
    points: t.stats.total_points,
  }))

  const total__ = stats.reduce((acc, item) => {
    const aa = item.multiplier * item.points
    acc += aa

    return acc
  }, 0)

  return (
    <div className={styles.container}>
      <Title weight={'2'} level={'1'}>
        Points: {total__}
      </Title>
      <IconButton mode="plain" size="l">
        <Icon as={'retry'} width={28} height={28} />
      </IconButton>
    </div>
  )
}
