import { FixtureType } from '@shared/api/fixtures'
import { useAppSelector } from '@app/store'
import { binarySearch } from '@shared/lib'
import { isTeam } from '@shared/api/bootstrap-static'

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
      <div>
        <span>{team_h.short_name}</span>
        <span>{fixture.team_h_score}</span>
        <span>-</span>
        <span>{fixture.team_a_score}</span>
        <span>{team_a.short_name}</span>
      </div>
    )
  } else {
    return null
  }
}
