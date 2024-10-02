import type { PropsWithChildren } from 'react'
import { List } from '@features/Gameweek'
import { ManagerInfo } from '@features/ManagerInfo'
import { TeamField } from '@features/TeamField'
import { PickTotalPoints } from '@features/PickTotalPoints'

import styles from './Main.module.css'
import { Chip } from '@features/ActiveChip'

interface MainPropsType {}

export const Main = ({}: PropsWithChildren<MainPropsType>) => {
  return (
    <div>
      <div className={styles['wrapper-top-box']}>
        <ManagerInfo />
        <PickTotalPoints />
      </div>
      <Chip />
      <List />
      <TeamField />
    </div>
  )
}
