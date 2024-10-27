import { Timer } from './ui/timer/Timer'

import styles from './styles.module.css'
import { Card, Subheadline } from '@telegram-apps/telegram-ui'

interface PropsType {
  score: {
    score_a: Nullable<number>
    score_h: Nullable<number>
  }
  time: Date
}

export const Score = ({ score, time }: PropsType) => {
  if (score.score_a === null && score.score_h === null) {
    return <Timer time={time} />
  }
  return (
    <Card className={styles.score}>
      <Subheadline level="1" weight="2">
        {score.score_h}
      </Subheadline>
      <Subheadline level="1" weight="2">
        :
      </Subheadline>
      <Subheadline level="1" weight="2">
        {score.score_a}
      </Subheadline>
    </Card>
  )
}
