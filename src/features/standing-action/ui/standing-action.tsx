import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@app/store'
import { useEffect, useState } from 'react'
import { getNewPageStandings } from '@entities/standings'
import styles from './standing-action.module.css'
import { Caption } from '@telegram-apps/telegram-ui'

export const StandingAction = () => {
  const { id } = useParams()
  console.log('id', id)
  const has_next = useAppSelector((state) => state.standingsData.has_next)
  const [page, setPage] = useState(1)

  const dispatch = useAppDispatch()

  const actionLoad = (leagueId: number, page: number) => {
    dispatch(getNewPageStandings({ leagueId, page }))
  }

  useEffect(() => {
    if (id) {
      actionLoad(+id, page)
    }
  }, [id, page])

  if (!has_next && page === 1) {
    return null
  }

  return (
    <div className={styles.container}>
      <Caption
        onClick={() => setPage((prev) => prev - 1)}
        disabled={page <= 1}
        level="1"
        weight="3"
        className={`${styles.element} ${page <= 1 ? styles.disabled : ''}`}
      >
        ← Previous Page
      </Caption>

      <Caption
        className={styles.element}
        onClick={() => setPage((prev) => prev + 1)}
        level="1"
        weight="3"
      >
        Next Page →
      </Caption>
    </div>
  )
}
