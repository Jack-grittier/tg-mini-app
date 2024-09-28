import { PropsWithChildren } from 'react'
import { Button, Modal, Title } from '@telegram-apps/telegram-ui'

import styles from './Login.module.css'
import { Search } from '@features/SearchManager'
import { Result } from '@features/SearchManager/ui/result/result.tsx'
import { ModalHeader } from '@telegram-apps/telegram-ui/dist/cjs/components/Overlays/Modal/components/ModalHeader/ModalHeader'

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
      <Modal
        header={<ModalHeader>Only iOS header</ModalHeader>}
        trigger={
          <Button size="m" mode={'plain'} className={styles['button-hint']}>
            How do I find my team ID?
          </Button>
        }
      >
        <div>123</div>
      </Modal>
    </main>
  )
}
