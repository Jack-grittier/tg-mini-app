import { StandingResultItemWithSquad } from '@entities/standings'
import { PickPreviewList } from '@features/pick-list'

import styles from './item.module.css'
import { RankIndicator } from '@features/league-list/ui/rank-indicator.tsx'
import { useAppDispatch } from '@app/store'
import { useNavigate } from 'react-router-dom'
import { resetAllTeam, setSecondaryManagerId } from '@features/team'

interface ItemPropsType {
  item: StandingResultItemWithSquad
  managerId: number
}

export const StandingItem = ({ item, managerId }: ItemPropsType) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const isMyManagerId = item.entry === managerId

  const toAction = () => {
    dispatch(resetAllTeam())
    if (isMyManagerId) {
      navigate('/main')
      return
    }
    dispatch(setSecondaryManagerId(item.entry))
    navigate('/main')
  }

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
            <button onClick={toAction}>{item.entry_name}</button>
            <div>{item.player_name}</div>
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
