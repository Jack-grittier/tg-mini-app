import { useAppSelector } from '@app/store.ts'
import { Text } from '@telegram-apps/telegram-ui'

import styles from './ManagerInfo.module.css'

export const ManagerInfo = () => {
  const user = useAppSelector((state) => state.search.manager)
  return (
    <div className={styles.box}>
      <Text weight="3">
        {user?.player_first_name} {user?.player_last_name}
      </Text>
      <Text> | </Text>
      <Text weight="3">{user?.name}</Text>
    </div>
  )
}
