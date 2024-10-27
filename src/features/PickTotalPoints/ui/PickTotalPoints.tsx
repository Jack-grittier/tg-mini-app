import { useAppSelector } from '@app/store'

import { IconButton, Title } from '@telegram-apps/telegram-ui'
import { Icon } from '@shared/ui/Icon'
import styles from './PickTotalPoints.module.css'
// import { Icon } from '@shared/ui/Icon'

export const PickTotalPoints = () => {
  const total = useAppSelector((state) => state.pickTotalPoints.total)
  return (
    <div className={styles.container}>
      <Title weight={'2'} level={'1'}>
        Points: {total}
      </Title>
      <IconButton mode="plain" size="l">
        <Icon as={'retry'} width={28} height={28} />
      </IconButton>
    </div>
  )
}
