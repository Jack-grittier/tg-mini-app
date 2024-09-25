import type { PropsWithChildren } from 'react'
import { Button, Input } from '@telegram-apps/telegram-ui'

import styles from './Search.module.css'
import { useAppDispatch } from '@app/store'
import { searchManager } from '@features/SearchManager'

interface SearchPropsType {}

export const Search = ({}: PropsWithChildren<SearchPropsType>) => {
  const dispatch = useAppDispatch()
  const asd = () => {
    dispatch(searchManager({ managerId: '288593' }))
  }
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBox}>
        <Input header="Input" placeholder={'Enter your team ID'} />
        <Button mode={'filled'} size="l" onClick={asd}>
          Search
        </Button>
      </div>
    </div>
  )
}
