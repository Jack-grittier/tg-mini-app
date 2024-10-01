import type { FC } from 'react'
import styles from './Player.module.css'
// import kit from '../../../assets/shirt_54-66.png'
import { Modal } from '@telegram-apps/telegram-ui'

import { type TeamFieldType } from '@features/TeamField'
import { MatchScore } from '../../MatchScore/MatchScore'

interface PlayerProps extends TeamFieldType {}

//https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_3-66.png игроки
//https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_3_1-66.png вратарь

export const Player: FC<PlayerProps> = ({
  player,
  stats,
  is_captain,
  is_vice_captain,
}) => {
  return (
    <>
      <Modal
        header={<Modal.Header>Only iOS header</Modal.Header>}
        snapPoints={[1]}
        trigger={
          <button className={styles['container']}>
            <div className={styles['inner']}>
              {is_captain && <div>C</div>}
              {is_vice_captain && <div>V</div>}
              <div className={styles.kit}>
                {/*<img*/}
                {/*  src={`https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_3-66.png`}*/}
                {/*  alt="kit-example"*/}
                {/*/>*/}
              </div>
              <div className={styles['name']}>{player.web_name}</div>
              <div className={styles['points']}>{stats.total_points}</div>
              {/*<div>{playerData?.stats?.assists ?? 'Assists'}</div>*/}
              {/*<div>{playerData?.stats?.minutes ?? 'Minutes'}</div>*/}
              {/*<div>{playerData?.player?.second_name ?? 'Second Name'}</div>*/}
            </div>
          </button>
        }
      >
        <div
          style={{
            height: 'var(--tg-viewport-height)',
          }}
        >
          <div>STATS</div>
          <div>
            {stats.explain.map((ex, index) => {
              console.log('ex.fixture', ex.fixture)
              return (
                <div key={`explain-${index}`}>
                  <MatchScore fixture={ex.fixture} />
                  {ex.stats.map((st) => {
                    return (
                      <div key={`explain-${index}-${st.identifier}`}>
                        <div>{st.identifier}</div>
                        <span>points: {st.points}</span>
                        <span>value: {st.value}</span>
                        <br />
                        <br />
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>
      </Modal>
    </>
  )
}
