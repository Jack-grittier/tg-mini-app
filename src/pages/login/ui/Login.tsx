import { PropsWithChildren } from 'react'
import { Title } from '@telegram-apps/telegram-ui'

import styles from './Login.module.css'
import { Search } from '@features/SearchManager'
import { Result } from '@features/SearchManager/ui/result/result.tsx'

interface LoginPropsType {}

export const Login = ({}: PropsWithChildren<LoginPropsType>) => {
  return (
    <main>
      <div className={styles['wrapper-title']}>
        <Title level="1" weight="1">
          Fantasy App
        </Title>
      </div>
      <Search />
      <Result />
    </main>
  )
}
