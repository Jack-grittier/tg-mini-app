import { useAppSelector } from '@app/store'
import { CHIPS_LIST } from '@shared/config'
import { Text } from '@telegram-apps/telegram-ui'

interface PropsType {}

export const Chip = ({}: PropsType) => {
  const activeChip = useAppSelector((state) => state.chip.activeChip)
  if (activeChip === null) {
    return null
  }
  return (
    <Text weight={'3'}>
      {CHIPS_LIST[activeChip]}:{' '}
      <Text style={{ color: '#32E55E' }} weight={'3'}>
        Active
      </Text>
    </Text>
  )
}
