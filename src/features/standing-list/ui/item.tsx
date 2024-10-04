import { StandingResultItemWithSquad } from '@entities/standings'
import { PickPreviewList } from '@features/pick-list'

import styles from './item.module.css'
import { RankIndicator } from '@features/league-list/ui/rank-indicator.tsx'

interface ItemPropsType {
  item: StandingResultItemWithSquad
}

export const StandingItem = ({ item }: ItemPropsType) => {
  return (
    <li className={styles.item}>
      <div className={styles.inner}>
        <div className={styles.innerWrapper}>
          <div className={styles.rankBox}>
            <RankIndicator
              entry_last_rank={item.last_rank}
              entry_rank={item.rank}
            />
            <span>{item.rank}</span>
          </div>
          <div className={styles['name-box']}>
            <div>{item.player_name}</div>
            <div>{item.entry_name}</div>
          </div>
        </div>

        <div className={styles['points']}>
          <div className={styles['event-info']}>
            <div>GW</div>
            <div>{item.event_total}</div>
          </div>
          <div className={styles['event-info']}>
            <div>TOT</div>
            <div>{item.total}</div>
          </div>
        </div>
      </div>

      <PickPreviewList data={item.squad} />
    </li>
  )
}
