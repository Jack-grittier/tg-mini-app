import { PropsWithChildren, useEffect, useState } from 'react'
import { Cell, Tabbar } from '@telegram-apps/telegram-ui'
import { Link } from '@shared/ui/Link'

interface TabBarPropsType {}

const tabs = [
  {
    id: 0,
    // Icon: Icon28Devices,
    text: 'Login',
  },
  {
    id: 1,
    // Icon: Icon28Chat,
    text: 'Main',
  },
]

export const TabBar = ({}: PropsWithChildren<TabBarPropsType>) => {
  const [currentTab, setCurrentTab] = useState(tabs[0].id)

  useEffect(() => {}, [])

  return (
    <Tabbar>
      {tabs.map(({ id, text }) => (
        <Tabbar.Item
          key={id}
          text={text}
          selected={id === currentTab}
          onClick={() => setCurrentTab(id)}
        >
          <Link to={text.toLowerCase()}>
            <Cell>{text}</Cell>
          </Link>
        </Tabbar.Item>
      ))}
    </Tabbar>
  )
}
