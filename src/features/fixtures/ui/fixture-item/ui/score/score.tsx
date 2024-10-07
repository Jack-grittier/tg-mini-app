import { Timer } from './ui/timer/Timer'

import styles from './styles.module.css'

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
    <div className={styles.score}>
      <div>{score.score_h}</div>
      <div>:</div>
      <div>{score.score_a}</div>
    </div>
  )
}
