import styles from './styles.module.css'

interface Props {
  label: string
}

export const RolePlayerLabel = ({ label }: Props) => {
  return (
    <div className={styles['box']}>
      <span>{label}</span>
    </div>
  )
}
