import { type PropsWithChildren } from 'react'

import { Header } from '../header/header'
import { Icon } from '@shared/ui/Icon'
import { FixtureStatsType, FixtureWithTeam } from '@features/fixtures'
import { IconName } from '@shared/config/assets/icons/_list.ts'

import styles from './styles.module.css'
import { Score } from '../score/score'
import { Subheadline } from '@telegram-apps/telegram-ui'
import { Stats } from '@features/fixtures/ui/fixture-item/ui/stats/ui/stats.tsx'

interface PropsType {
  entry: FixtureWithTeam
  stats: FixtureStatsType[]
  isStats: boolean
}

const _icon_size = 48

export const Item = ({
  entry,
  children,
  isStats,
  stats,
}: PropsWithChildren<PropsType>) => {
  return (
    // <Accordion expanded={isOpen} onChange={setIsOpen}>
    //   <Accordion.Summary>
    <>
      <li className={styles['fixture-item']}>
        <div className={`${styles.team} ${styles.home}`}>
          <Subheadline level="1" weight="3">
            {entry.team_h.short_name}
          </Subheadline>

          <Icon
            as={entry.team_h.short_name as IconName}
            width={_icon_size}
            height={_icon_size}
          />
        </div>
        {children}
        <div className={`${styles.team} ${styles.away}`}>
          <Icon
            as={entry.team_a.short_name as IconName}
            width={_icon_size}
            height={_icon_size}
          />
          <Subheadline level="1" weight="3">
            {entry.team_a.short_name}
          </Subheadline>
        </div>
      </li>
      {isStats && <Stats stats={stats} />}
    </>
    // </Accordion.Summary>
    //   <Accordion.Content>
    //     <Stats stats={stats} />
    //   </Accordion.Content>
    // </Accordion>
  )
}

Item.Header = Header
Item.Score = Score
