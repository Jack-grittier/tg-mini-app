import { type PropsWithChildren, useState } from 'react'

import { Header } from '../header/header'
import { Icon } from '@shared/ui/Icon'
import { FixtureStatsType, FixtureWithTeam } from '@features/fixtures'
import { IconName } from '@shared/config/assets/icons/_list.ts'

import styles from './styles.module.css'
import { Score } from '../score/score'
import { Accordion } from '@telegram-apps/telegram-ui'
import { Stats } from '../stats/ui/stats'

interface PropsType {
  entry: FixtureWithTeam
  stats: FixtureStatsType[]
}

const _icon_size = 30

export const Item = ({
  entry,
  children,
  stats,
}: PropsWithChildren<PropsType>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <Accordion expanded={isOpen} onChange={setIsOpen}>
      <Accordion.Summary>
        <li className={styles['fixture-item']}>
          <div>
            {entry.team_h.name}
            <Icon
              as={entry.team_h.short_name as IconName}
              width={_icon_size}
              height={_icon_size}
            />
          </div>
          {children}
          <div>
            <Icon
              as={entry.team_a.short_name as IconName}
              width={_icon_size}
              height={_icon_size}
            />
            {entry.team_a.name}
          </div>
        </li>
      </Accordion.Summary>
      <Accordion.Content>
        <Stats stats={stats} />
      </Accordion.Content>
    </Accordion>
  )
}

Item.Header = Header
Item.Score = Score
