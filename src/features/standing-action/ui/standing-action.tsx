import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@app/store'
import { useEffect, useState } from 'react'
import { getNewPageStandings } from '@entities/standings'

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
    <div>
      {page > 1 && (
        <button onClick={() => setPage((prev) => prev - 1)}>PREV page</button>
      )}
      <button onClick={() => setPage((prev) => prev + 1)}>NEXT page</button>
    </div>
  )
}
