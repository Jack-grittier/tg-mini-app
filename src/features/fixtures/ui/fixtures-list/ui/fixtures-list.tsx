import type { PropsWithChildren } from 'react'
import { useAppSelector } from '@app/store'
import { Item } from '@features/fixtures/ui/fixture-item'

import styles from './styles.module.css'

interface PropsType {}

export const FixturesList = ({}: PropsWithChildren<PropsType>) => {
  const matchSchedule = useAppSelector((state) => state.fixtures.matchSchedule)

  if (matchSchedule === null) {
    return null
  }

  const groups = Object.groupBy(
    matchSchedule,
    ({ kickoff_time }) => new Date(kickoff_time).toISOString().split('T')[0]
  )

  return (
    <ul className={styles.list}>
      {Object.entries(groups).map(([d, entry]) => {
        return (
          <li key={`fixtures-list-${d}`}>
            <Item.Header period={new Date(d)} />
            <ul className={styles.list}>
              {entry?.map((e) => {
                return (
                  <Item
                    key={`fixtures-list-${d}-item-${e.code}`}
                    entry={e}
                    stats={e.stats}
                  >
                    <Item.Score
                      score={{
                        score_a: e.team_a_score,
                        score_h: e.team_h_score,
                      }}
                      time={e.kickoff_time}
                    />
                  </Item>
                )
              })}
            </ul>
          </li>
        )
      })}
    </ul>
  )
}
