import type { PropsWithChildren } from 'react'
import { useAppSelector } from '@app/store'

import { ListItem } from './list-item'

import styles from './list.module.css'
import { Subheadline } from '@telegram-apps/telegram-ui'

interface ListPropsType {}

export const LeaguesList = ({}: PropsWithChildren<ListPropsType>) => {
  const classic =
    useAppSelector((state) => state.search.manager?.leagues?.classic) ?? []
  return (
    <div className={styles.table}>
      <div className={styles.header}>
        <Subheadline className={styles.headerItem} level={'2'} weight={'2'}>
          League
        </Subheadline>
        <Subheadline className={styles.headerItem} level={'2'} weight={'2'}>
          Current rank
        </Subheadline>
        <Subheadline className={styles.headerItem} level={'2'} weight={'2'}>
          Last rank
        </Subheadline>
      </div>
      <ul className={styles.list}>
        {classic.map((cl, index) => {
          return <ListItem key={`classic-${index}`} {...cl} />
        })}
      </ul>
    </div>
  )
}
