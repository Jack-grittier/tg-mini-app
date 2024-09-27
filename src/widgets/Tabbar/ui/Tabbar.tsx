import { PropsWithChildren, useState } from 'react'
import { Tabbar } from '@telegram-apps/telegram-ui'
import { Link } from '@shared/ui/Link'
import { Outlet } from 'react-router-dom'
import { Icon28Devices } from '@telegram-apps/telegram-ui/dist/icons/28/devices'
import { Icon28Chat } from '@telegram-apps/telegram-ui/dist/icons/28/chat'

interface TabBarPropsType {}

const tabs = [
  {
    id: 0,
    Icon: Icon28Devices,
    text: 'Team',
  },
  {
    id: 1,
    Icon: Icon28Chat,
    text: 'Settings',
  },
]

export const TabBar = ({}: PropsWithChildren<TabBarPropsType>) => {
  const [currentTab, setCurrentTab] = useState(tabs[0].id)

  return (
    <>
      <Tabbar>
        {tabs.map(({ id, text, Icon }) => (
          <Tabbar.Item
            key={id}
            text={text}
            selected={id === currentTab}
            onClick={() => setCurrentTab(id)}
          >
            <Link to={text.toLowerCase()}>
              <Icon />
            </Link>
          </Tabbar.Item>
        ))}
      </Tabbar>
      <Outlet />
    </>
  )
}
