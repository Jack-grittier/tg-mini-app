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
            <div className={styles['modal']}>
              <ul>
                <span>
                  To find the ID of your team, follow the steps below:
                </span>
                <p>
                  Open the web version of the Fantasy app and go to the Points
                  page. You will see a link of this type in the browser url:{' '}
                </p>
                <a href="https://fantasy.premierleague.com/entry/288593/event/7">
                  https://fantasy.premierleague.com/entry/288593/event/7
                </a>
                <p>
                  Where the numeric value between entry/ and /event will be your
                  ID. This value can be changed in the Settings tab.
                </p>
                {/*<img src={URLImg} alt="URL" width={'100%'} height={'100%'} />*/}
              </ul>
            </div>
          </Modal>
        </>
      )}
    </main>
  )
}
