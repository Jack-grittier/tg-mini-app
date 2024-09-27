import type { PropsWithChildren } from 'react'
import { Button, Input } from '@telegram-apps/telegram-ui'

import styles from './Search.module.css'
import { useAppDispatch } from '@app/store'
import { searchManager } from '@features/SearchManager'

interface SearchPropsType {}

export const Search = ({}: PropsWithChildren<SearchPropsType>) => {
  const dispatch = useAppDispatch()
  const searchAction = () => {
    dispatch(searchManager({ managerId: '288593' }))
  }
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBox}>
        <Input
          header="Input"
          placeholder={'Enter your team ID'}
          value={'288593'}
          onChange={() => {}}
        />
        <Button mode={'filled'} size="l" onClick={searchAction}>
          Search
        </Button>
      </div>
    </div>
  )
}
