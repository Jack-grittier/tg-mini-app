import type { PropsWithChildren } from 'react'
import { Container } from '@widgets/Container/ui/Container.tsx'
import { Subheadline } from '@telegram-apps/telegram-ui'
import styles from './Settings.module.css'
import { Search } from '@features/SearchManager'

interface SettingsPropsType {}

export const Settings = ({}: PropsWithChildren<SettingsPropsType>) => {
  return (
    <Container>
      <Subheadline className={styles.label} level={'1'} weight="2">
        My pinned team
      </Subheadline>
      <Search buttonText={'Change'} />
    </Container>
  )
}
