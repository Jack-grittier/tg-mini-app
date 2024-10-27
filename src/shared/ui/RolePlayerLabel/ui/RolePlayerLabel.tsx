import styles from './styles.module.css'
import { Caption } from '@telegram-apps/telegram-ui'

interface Props {
  label: string
}

export const RolePlayerLabel = ({ label }: Props) => {
  return (
    <div className={styles['box']}>
      <Caption level={'1'} weight="3">
        {label}
      </Caption>
    </div>
  )
}
