import { PropsWithChildren } from 'react'
import { Button, Modal, Spinner, Title, Text } from '@telegram-apps/telegram-ui'

import styles from './Login.module.css'
import { Search } from '@features/SearchManager'
import { useAppSelector } from '@app/store'
import { Container } from '@widgets/Container/ui/Container.tsx'
import bg from '../../../assets/bgMain.jpeg'

interface LoginPropsType {}

export const Login = ({}: PropsWithChildren<LoginPropsType>) => {
  const isLoading = useAppSelector((state) => state.bootstrapStatic.loading)

  return (
    <Container>
      <main>
        <div className={styles['wrapper-title']}>
          <Title level="3" weight="2">
            Fantasy App
          </Title>
        </div>
        {isLoading ? (
          <Spinner size="s" />
        ) : (
          <>
            <Search />
            <Modal
              header={<Modal.Header>How do I find my team ID?</Modal.Header>}
              className={styles.modalBg}
              trigger={
                <Button
                  size="m"
                  mode={'plain'}
                  className={styles['button-hint']}
                >
                  How do I find my team ID?
                </Button>
              }
            >
              <div className={styles['modal']}>
                <ul className={styles.list}>
                  <Text weight="2" className={styles.text}>
                    To find the ID of your team, follow the steps below: <br />
                    Open the web version of the Fantasy app and go to the Points
                    page.
                    <br />
                    <br />
                    You will see a link of this type in the browser url:{' '}
                    <a href="https://fantasy.premierleague.com/entry/288593/event/7">
                      https://fantasy.premierleague.com/entry/288593/event/7
                    </a>
                    <br />
                    <br />
                    Where the numeric value between entry/ and /event will be
                    your ID. This value can be changed in the Settings tab.
                  </Text>
                </ul>
              </div>
            </Modal>
          </>
        )}
        <div className={styles.imgBox}>
          <img src={bg} alt="background" className={styles.img} />
        </div>
      </main>
    </Container>
  )
}
