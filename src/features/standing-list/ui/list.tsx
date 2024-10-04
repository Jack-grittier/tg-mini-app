import { useAppSelector } from '@app/store'
import { StandingItem } from './item'

import styles from './list.module.css'

export const StandingList = () => {
  const data = useAppSelector((state) => state.standingsData.results)
  return (
    <ul className={styles.list}>
      {data.map((d, index) => {
        return <StandingItem key={`standing-item-${index}`} item={d} />
      })}
    </ul>
  )
}
