import type { Pick as PickType } from '@shared/api/picks'
import { Player } from '@shared/api/bootstrap-static'
import { useMemo } from 'react'
import { FirstSquad } from './first-squad'

import styles from './list.module.css'

interface ListPropsType {
  data: (PickType & { element: number | Player })[]
}

export const PickPreviewList = ({ data }: ListPropsType) => {
  const matrix = useMemo(() => {
    return [
      [
        ...data.filter((el) => el.is_captain),
        ...data.filter((el) => el.is_vice_captain),
      ],
    ]
  }, [data])

  return (
    <div className={styles.list}>
      {matrix.map((s, index) => {
        return <FirstSquad key={`list-main-${index}`} data={s} />
      })}
    </div>
  )
}
