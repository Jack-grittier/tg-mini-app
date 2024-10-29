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
            <Search buttonText={'Search'} />
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
                  <Text weight="3" className={styles.text}>
                    To find your team ID, follow these steps:
                    <br />
                    <br />
                    1. Open the web version of the Fantasy app and go to the
                    &#34;Points&#34; page.
                    <br />
                    <br />
                    2.In the browser&#39;s address bar, you will see a link like
                    this:&nbsp;
                    <span style={{ fontWeight: 500 }}>
                      https://fantasy.premierleague.com/entry/3094856/event/7
                    </span>
                    <br />
                    <br />
                    3. The number between entry/ and /event is your team ID. In
                    this example, the team ID is{' '}
                    <span style={{ fontWeight: 500 }}>3094856</span>.
                    <br />
                    <br />
                    4. You can also change this value in the &#34;Settings&#34;
                    tab.
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
