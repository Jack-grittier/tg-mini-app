import { useAppSelector } from '@app/store'

import styles from './PickTotalPoints.module.css'

export const PickTotalPoints = () => {
  const total = useAppSelector((state) => state.pickTotalPoints.total)
  return (
    <div className={styles.total}>
      <span>{total}</span>
    </div>
  )
}
