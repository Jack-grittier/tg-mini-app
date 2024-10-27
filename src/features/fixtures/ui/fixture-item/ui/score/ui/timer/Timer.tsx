import { useFormattedDate } from '@shared/lib'
import { Subheadline } from '@telegram-apps/telegram-ui'

interface PropsType {
  time: Date
}

export const Timer = ({ time }: PropsType) => {
  const t = useFormattedDate(new Date(time), { format: 'FULL_TIME' })
  return (
    <Subheadline style={{ textAlign: 'center' }} level="1" weight="2">
      {t}
    </Subheadline>
  )
}
