import { FixtureType } from '@shared/api/fixtures'
import { useAppSelector } from '@app/store'
import { binarySearch } from '@shared/lib'
import { isTeam } from '@shared/api/bootstrap-static'
import styles from './MatchScore.module.css'
import { Card, Subheadline } from '@telegram-apps/telegram-ui'

interface MatchScorePropsType {
  fixture: number | FixtureType
}

export const MatchScore = ({ fixture }: MatchScorePropsType) => {
  const teams =
    useAppSelector((state) => state.bootstrapStatic.static?.teams) ?? []

  if (typeof fixture === 'number') {
    return null
  }

  const team_a = binarySearch(teams, fixture.team_a)
  const team_h = binarySearch(teams, fixture.team_h)

  if (isTeam(team_a) && isTeam(team_h)) {
    return (
      <div className={styles.container}>
        <Subheadline level={'1'} weight={'3'}>
          {team_h.name}
        </Subheadline>
        <Card className={styles.card}>
          <Subheadline level={'1'} weight={'2'}>
            <span>{fixture.team_h_score}</span>
            <span>:</span>
            <span>{fixture.team_a_score}</span>
          </Subheadline>
        </Card>
        <Subheadline level={'1'} weight={'3'}>
          {team_a.name}
        </Subheadline>
      </div>
    )
  } else {
    return null
  }
}
