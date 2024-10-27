import type { PropsWithChildren } from 'react'
import { useFormattedDate } from '@shared/lib'
import { Title } from '@telegram-apps/telegram-ui'

interface PropsType {
  deadline_time: Date
}

export const Time = ({ deadline_time }: PropsWithChildren<PropsType>) => {
  const data = useFormattedDate(new Date(deadline_time), {
    format: 'FULL_DATE',
  })
  return (
    <Title caps level="1" weight="2">
      {data}
    </Title>
  )
}
