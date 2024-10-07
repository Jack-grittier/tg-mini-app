import { useFormattedDate } from '@shared/lib'

interface PropsType {
  time: Date
}

export const Timer = ({ time }: PropsType) => {
  const t = useFormattedDate(new Date(time), { format: 'FULL_TIME' })
  return <div>{t}</div>
}
