import { StandingResultItemWithSquad } from '@entities/standings'
import { PickPreviewList } from '@features/pick-list'

import styles from './item.module.css'
import { RankIndicator } from '@features/league-list/ui/rank-indicator.tsx'
import { useAppDispatch } from '@app/store'
import { useNavigate } from 'react-router-dom'
import { resetAllTeam, setSecondaryManagerId } from '@features/team'
import { Caption, Card, Subheadline } from '@telegram-apps/telegram-ui'

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
    <Card>
      <li className={styles.item}>
        <div className={styles.inner}>
          <div className={styles.innerWrapper}>
            <div className={styles.rankBox}>
              <RankIndicator
                entry_last_rank={item.last_rank}
                entry_rank={item.rank}
              />
              <Caption level="1" weight="3">
                {item.rank}
              </Caption>
            </div>
            <div className={styles['name-box']}>
              <Subheadline
                onClick={toAction}
                className={styles.entry_name}
                level="2"
                weight="2"
              >
                {/*<button onClick={toAction}>*/}
                {item.entry_name}
                {/*</button>*/}
              </Subheadline>
              <Caption className={styles.player_name} level="1" weight="3">
                {item.player_name}
              </Caption>
            </div>
          </div>

          <div className={styles['points']}>
            <div className={styles['event-info']}>
              <Caption className={styles.gw_tot} level={'1'} weight="3">
                GW
              </Caption>
              <Caption className={styles.gw_tot} level={'1'} weight="3">
                {item.event_total}
              </Caption>
            </div>
            <div className={styles['event-info']}>
              <Caption className={styles.gw_tot} level={'1'} weight="3">
                TOT
              </Caption>
              <Caption className={styles.gw_tot} level={'1'} weight="3">
                {item.total}
              </Caption>
            </div>
          </div>
        </div>

        <PickPreviewList data={item.squad} />
      </li>
    </Card>
  )
}
