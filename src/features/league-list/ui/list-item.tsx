import type { PropsWithChildren } from 'react'
import { ClassicLeague } from '@shared/api/entry-manager'

import { RankIndicator } from './rank-indicator'

import styles from './list-item.module.css'
import { Link } from '@shared/ui/Link'
import { Subheadline } from '@telegram-apps/telegram-ui'

interface ListItemPropsType extends ClassicLeague {}

export const ListItem = ({
  name,
  entry_last_rank,
  entry_rank,
  id,
}: PropsWithChildren<ListItemPropsType>) => {
  return (
    <li className={styles.item}>
      <Link className={styles.link} to={`/leagues/${id}`}>
        <Subheadline level={'2'} weight={'3'}>
          {name}
        </Subheadline>
      </Link>
      <div className={styles.entry_rank}>
        <Subheadline level={'2'} weight={'3'}>
          {entry_rank}{' '}
        </Subheadline>
        <RankIndicator
          entry_last_rank={entry_last_rank}
          entry_rank={entry_rank}
        />
      </div>
      <Subheadline level={'2'} weight={'3'} className={styles.entry_last_rank}>
        {entry_last_rank}
      </Subheadline>
    </li>
  )
}
