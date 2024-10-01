import { PropsWithChildren } from 'react'
import { Button, Modal, Spinner, Title } from '@telegram-apps/telegram-ui'

import styles from './Login.module.css'
import { Search } from '@features/SearchManager'
import { useAppSelector } from '@app/store'

interface LoginPropsType {}

export const Login = ({}: PropsWithChildren<LoginPropsType>) => {
  const isLoading = useAppSelector((state) => state.bootstrapStatic.loading)
  return (
    <main>
      <div className={styles['wrapper-title']}>
        <Title level="1" weight="1">
          Fantasy App
        </Title>
      </div>
      {isLoading ? (
        <Spinner size="s" />
      ) : (
        <>
          <Search />
          <Modal
            header={<Modal.Header>Only iOS header</Modal.Header>}
            trigger={
              <Button size="m" mode={'plain'} className={styles['button-hint']}>
                How do I find my team ID?
              </Button>
            }
          >
            <div>123</div>
          </Modal>
        </>
      )}
    </main>
  )
}
