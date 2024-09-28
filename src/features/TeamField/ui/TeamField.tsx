import type { PropsWithChildren } from 'react'
import { useAppSelector } from '@app/store.ts'
import styles from './TeamField.module.css'
import { Player } from '@features/Player/ui/Player.tsx'

interface TeamFieldPropsType {}

export const TeamField = ({}: PropsWithChildren<TeamFieldPropsType>) => {
  const teamInfo = useAppSelector((state) => state.team.data) ?? []
  console.log('teamInfo', teamInfo)

  return (
    <div className={styles['container']}>
      {teamInfo.map((pl) => (
        <Player key={`player-${pl.element}`} playerData={pl} />
      ))}
    </div>
  )
}
