import type { FC } from 'react'
import styles from './Player.module.css'
// import kit from '../../../assets/shirt_54-66.png'
import { Modal } from '@telegram-apps/telegram-ui'

import { type TeamFieldType } from '@features/TeamField'

interface PlayerProps extends TeamFieldType {}

//https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_3-66.png игроки
//https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_3_1-66.png вратарь

export const Player: FC<PlayerProps> = ({ player, stats }) => {
  return (
    <>
      <Modal
        header={<Modal.Header>Only iOS header</Modal.Header>}
        trigger={
          <button className={styles['container']}>
            <div className={styles['inner']}>
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
        <div>123</div>
      </Modal>
    </>
  )
}
