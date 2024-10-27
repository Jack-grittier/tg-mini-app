import { PropsWithChildren, useState } from 'react'
import { Button, Input } from '@telegram-apps/telegram-ui'

import styles from './Search.module.css'
import { useAppDispatch, useAppSelector } from '@app/store'
import { searchManager } from '@features/SearchManager'
import { useNavigate } from 'react-router-dom'
import { onChangeManagerId } from '@features/team/model/team.slice'

interface SearchPropsType {}

export const Search = ({}: PropsWithChildren<SearchPropsType>) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const managerId = useAppSelector((state) => state.common.primary.managerId)
  const [error, setError] = useState(false)

  const searchAction = async () => {
    const resp = await dispatch(searchManager({ managerId }))
    if (!searchManager.fulfilled.match(resp)) {
      setError(true)
      return
    }
    navigate('/main')
  }

  return (
    <div className={styles.searchContainer}>
      <div className={`${styles.searchBox} ${error ? styles.error : ''}`}>
        <Input
          header="Input"
          placeholder={'Enter your team ID'}
          value={managerId}
          type={'text'}
          onChange={(e) => {
            if (/^\d*$/.test(e.currentTarget.value)) {
              dispatch(onChangeManagerId(+e.currentTarget.value))
            }
            setError(false)
          }}
        />
        <Button mode={'filled'} size={'l'} onClick={searchAction}>
          Search
        </Button>
      </div>
    </div>
  )
}
