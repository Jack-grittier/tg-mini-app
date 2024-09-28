import type { FC } from 'react'
import styles from '@features/Player/ui/Player.module.css'
import kit from '../../../assets/shirt_54-66.png'
import { ModalHeader } from '@telegram-apps/telegram-ui/dist/cjs/components/Overlays/Modal/components/ModalHeader/ModalHeader'
import { Modal } from '@telegram-apps/telegram-ui'

interface PlayerProps {
  playerData: {
    element: string
    player: {
      web_name?: string
      second_name?: string
    }
    stats: {
      assists?: number
      minutes?: number
      total_points?: number
    }
  }
}

export const Player: FC<PlayerProps> = ({ playerData }) => {
  return (
    <>
      <Modal
        header={<ModalHeader>Only iOS header</ModalHeader>}
        key={`player-${playerData.element}`}
        trigger={
          <button className={styles['container']}>
            <div className={styles['inner']}>
              <div>
                <img src={kit} alt="kit-example" />
              </div>
              <div className={styles['name']}>
                {playerData?.player?.web_name ?? 'WebName'}
              </div>
              <div className={styles['points']}>
                {playerData?.stats?.total_points ?? '8'}
              </div>
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
