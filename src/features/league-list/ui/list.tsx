import type { PropsWithChildren } from 'react'
import { useAppSelector } from '@app/store'

import { ListItem } from './list-item'

import styles from './list.module.css'

interface ListPropsType {}

export const LeaguesList = ({}: PropsWithChildren<ListPropsType>) => {
  const classic =
    useAppSelector((state) => state.search.manager?.leagues?.classic) ?? []
  return (
    <ul className={styles.list}>
      {classic.map((cl, index) => {
        return <ListItem key={`classic-${index}`} {...cl} />
      })}
    </ul>
  )
}
