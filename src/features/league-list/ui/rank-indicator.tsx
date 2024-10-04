import { classNames } from '@telegram-apps/sdk'

import styles from './rank-indicator.module.css'

export enum MODE_RANK_INDICATOR {
  up,
  down,
  dash,
}

interface PropsType {
  entry_last_rank: number
  entry_rank: number
}

const checkRank = (entry_last_rank: number, entry_rank: number) => {
  if (entry_last_rank < entry_rank) return MODE_RANK_INDICATOR.down
  else if (entry_last_rank > entry_rank) return MODE_RANK_INDICATOR.up
  else return MODE_RANK_INDICATOR.dash
}

export const RankIndicator = ({ entry_last_rank, entry_rank }: PropsType) => {
  const mode = checkRank(entry_last_rank, entry_rank)

  return (
    <div
      className={classNames(styles.common, {
        [styles[MODE_RANK_INDICATOR[mode]]]: true,
      })}
    >
      {/*{MODE_RANK_INDICATOR[mode]}*/}
    </div>
  )
}
