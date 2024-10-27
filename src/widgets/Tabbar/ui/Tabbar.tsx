import { PropsWithChildren } from 'react'
import { Tabbar } from '@telegram-apps/telegram-ui'
import { Link } from '@shared/ui/Link'
import { Outlet, useLocation } from 'react-router-dom'
import { Icon28Devices } from '@telegram-apps/telegram-ui/dist/icons/28/devices'
import { Icon28Chat } from '@telegram-apps/telegram-ui/dist/icons/28/chat'
import styles from './Tabbar.module.css'

interface TabBarPropsType {}

const tabs = [
  {
    id: 0,
    Icon: Icon28Devices,
    text: 'Team',
    href: '/main',
  },
  {
    id: 1,
    Icon: Icon28Chat,
    text: 'Leagues',
    href: '/leagues',
  },
  {
    id: 2,
    Icon: Icon28Chat,
    text: 'Fixtures',
    href: '/fixtures',
  },
  {
    id: 3,
    Icon: Icon28Chat,
    text: 'Settings',
    href: '/settings',
  },
]

export const TabBar = ({}: PropsWithChildren<TabBarPropsType>) => {
  const { pathname } = useLocation()
  return (
    <>
      <Tabbar className={styles.container}>
        {tabs.map(({ id, text, Icon, href }) => {
          const active = pathname.split('/').filter(Boolean)[0]
          const hrefLink = href.split('/').filter(Boolean)[0]
          return (
            <Tabbar.Item key={id} text={text} selected={hrefLink === active}>
              <Link to={href}>
                <Icon />
              </Link>
            </Tabbar.Item>
          )
        })}
      </Tabbar>
      <Outlet />
    </>
  )
}
