import type { PropsWithChildren } from 'react'
import { ClassicLeague } from '@shared/api/entry-manager'

import { RankIndicator } from './rank-indicator'

import styles from './list-item.module.css'
import { Link } from '@shared/ui/Link'

interface ListItemPropsType extends ClassicLeague {}

export const ListItem = ({
  name,
  entry_last_rank,
  entry_rank,
  id,
}: PropsWithChildren<ListItemPropsType>) => {
  return (
    <li className={styles.item}>
      <Link to={`/leagues/${id}`}>
        <div>{name}</div>
      </Link>
      <RankIndicator
        entry_last_rank={entry_last_rank}
        entry_rank={entry_rank}
      />
      <div>{entry_rank}</div>
      <div>{entry_last_rank}</div>
    </li>
  )
}
