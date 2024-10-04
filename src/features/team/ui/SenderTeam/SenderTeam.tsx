import { useEffect } from 'react'
import { useAppDispatch } from '@app/store'
import { searchManager } from '@features/SearchManager'
import { Team } from '../Team/Team'

interface TeamPropsType {
  managerId: number
  isPrimary?: boolean
}

export const SenderTeam = ({ managerId, isPrimary = false }: TeamPropsType) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const getData = async () => {
      const resp = await dispatch(searchManager({ managerId }))
      if (searchManager.fulfilled.match(resp)) {
        // resp.payload
      }
    }
    getData()
    //dispatch(searchManager({ managerId }))
  }, [managerId])

  return <Team isPrimary={isPrimary} />
}
