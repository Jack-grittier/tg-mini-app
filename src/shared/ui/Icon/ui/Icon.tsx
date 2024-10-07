import { IconName, list } from '@shared/config/assets/icons/_list'

interface PropsType {
  as: IconName
  width?: number | string
  height?: number | string
  color?: string
}

export const Icon = ({ as, height, color, width }: PropsType) => {
  const IconComponent = list[as]
  return (
    <IconComponent
      width={width ?? '100%'}
      height={height ?? '100%'}
      color={color}
    />
  )
}
