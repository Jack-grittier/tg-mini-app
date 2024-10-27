import type { PropsWithChildren } from 'react'
import { TeamFieldType } from '@features/TeamField'
import { Player } from '@features/TeamField/ui/Player/ui/Player.tsx'
import { Card } from '@telegram-apps/telegram-ui'
import styles from './BenchField.module.css'

interface BenchFieldPropsType {
  data: TeamFieldType[]
}

export const BenchField = ({
  data,
}: PropsWithChildren<BenchFieldPropsType>) => {
  return (
    <Card className={styles.container}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {data.map((pl) => {
          return <Player key={`player-${pl.element}`} {...pl} isBench />
        })}
      </div>
    </Card>
  )
}
