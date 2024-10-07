import { useFormattedDate } from '@shared/lib'

interface PropsType {
  period: Date
}

export const Header = ({ period }: PropsType) => {
  const periodFormat = useFormattedDate(new Date(period), {
    format: 'FULL_DATE',
  })
  return <div>{periodFormat}</div>
}
