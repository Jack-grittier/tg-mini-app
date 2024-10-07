import { ManagerInfo } from '@features/ManagerInfo'
import { PickTotalPoints } from '@features/PickTotalPoints'
import { Chip } from '@features/ActiveChip'
import { List } from '@features/Gameweek'
import { TeamField } from '@features/TeamField'

import styles from './Team.module.css'

interface TeamPropsType {
  isPrimary: boolean
  managerId: number
}

export const Team = ({ isPrimary, managerId }: TeamPropsType) => {
  return (
    <div>
      <div className={styles['wrapper-top-box']}>
        <ManagerInfo />
        <PickTotalPoints />
      </div>
      <Chip />
      <List isPrimary={isPrimary} managerId={managerId} />
      <TeamField />
    </div>
  )
}
