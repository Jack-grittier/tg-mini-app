import styles from './Container.module.css'
import { type PropsWithChildren } from 'react'

export const Container = ({ children }: PropsWithChildren) => {
  return <div className={styles.container}>{children}</div>
}
