import type { FC } from 'react'
import styles from './Player.module.css'
import kit from './shirt.png'
import { Caption, Modal, Title } from '@telegram-apps/telegram-ui'

import { type TeamFieldType } from '@features/TeamField'
import { MatchScore } from '../../MatchScore/MatchScore'

interface PlayerProps extends TeamFieldType {
  isBench?: boolean
}

//https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_3-66.png игроки
//https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_3_1-66.png вратарь

export const Player: FC<PlayerProps> = ({
  player,
  stats,
  is_captain,
  is_vice_captain,
  multiplier,
  isBench = false,
}) => {
  return (
    <>
      <Modal
        header={
          <Modal.Header>
            <Title level={'3'} weight={'2'}>
              {player.first_name} {player.second_name}
            </Title>
          </Modal.Header>
        }
        snapPoints={[1]}
        className={styles.modal}
        trigger={
          <button className={styles['container']}>
            <div className={styles['inner']}>
              {is_captain && (
                <div className={styles.label}>
                  <Caption level="2" weight="2">
                    C
                  </Caption>
                </div>
              )}
              {is_vice_captain && (
                <div className={styles.label}>
                  <Caption level="2" weight="2">
                    V
                  </Caption>
                </div>
              )}
              <div className={styles.kit}>
                <img src={kit} alt="kit" />
              </div>
              <Caption level="1" weight="2" className={styles['name']}>
                {player.web_name}
              </Caption>
              <Caption level="1" weight="2" className={styles['points']}>
                {isBench ? stats.total_points : multiplier * stats.total_points}
              </Caption>
            </div>
          </button>
        }
      >
        <div
          style={{
            height: 'calc(var(--tg-viewport-height) / 2)',
          }}
        >
          <div>
            {stats.explain.map((ex, index) => {
              return (
                <div key={`explain-${index}`}>
                  <MatchScore fixture={ex.fixture} />
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                    }}
                  >
                    <div style={{ display: 'contents' }}>
                      <div>Statistic</div>
                      <div>Value</div>
                      <div>Points</div>
                    </div>
                    {ex.stats.map((st) => {
                      return (
                        <div
                          style={{ display: 'contents' }}
                          key={`explain-${index}-${st.identifier}`}
                        >
                          <div>{st.identifier}</div>
                          <div>{st.points}</div>
                          <div>{st.value}</div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Modal>
    </>
  )
}
