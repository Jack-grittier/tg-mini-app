import type { PropsWithChildren } from 'react'
import { useFormattedDate } from '@shared/lib'

interface PropsType {
  deadline_time: Date
}

export const Time = ({ deadline_time }: PropsWithChildren<PropsType>) => {
  const data = useFormattedDate(new Date(deadline_time), {
    format: 'FULL_DATE',
  })
  return <span>{data}</span>
}
