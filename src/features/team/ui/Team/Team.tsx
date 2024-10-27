import { ManagerInfo } from '@features/ManagerInfo'
import { PickTotalPoints } from '@features/PickTotalPoints'
import { Chip } from '@features/ActiveChip'
import { List } from '@features/Gameweek'
import { TeamField } from '@features/TeamField'

import styles from './Team.module.css'
import { Container } from '@widgets/Container/ui/Container.tsx'
import { Card } from '@telegram-apps/telegram-ui'

interface TeamPropsType {
  isPrimary: boolean
  managerId: number
}

export const Team = ({ isPrimary, managerId }: TeamPropsType) => {
  return (
    <Container>
      <div>
        <List isPrimary={isPrimary} managerId={managerId} />
        <Card className={styles.card}>
          <div className={styles.inner}>
            <ManagerInfo />
            <PickTotalPoints />
            <Chip />
          </div>
        </Card>
        <TeamField />
      </div>
    </Container>
  )
}
