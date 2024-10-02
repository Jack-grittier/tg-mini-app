import { useAppSelector } from '@app/store'
import { CHIPS_LIST } from '@shared/config'

interface PropsType {}

export const Chip = ({}: PropsType) => {
  const activeChip = useAppSelector((state) => state.chip.activeChip)
  if (activeChip === null) {
    return null
  }
  return <div>{CHIPS_LIST[activeChip]}</div>
}
