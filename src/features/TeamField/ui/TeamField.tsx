import { PropsWithChildren, useMemo } from 'react'
import { useAppSelector } from '@app/store'
import styles from './TeamField.module.css'
import { TeamFieldType } from '@features/TeamField'
import { MainField } from '@features/TeamField/ui/MainField/MainField.tsx'
import { BenchField } from '@features/TeamField/ui/BenchField/BenchField.tsx'

interface TeamFieldPropsType {}

interface TeamGroup {
  main: TeamFieldType[]
  bench: TeamFieldType[]
}

export const TeamField = ({}: PropsWithChildren<TeamFieldPropsType>) => {
  const teamInfo = useAppSelector((state) => state.team.data) ?? []

  const teamGroup = useMemo(() => {
    return teamInfo.reduce<TeamGroup>(
      (acc, cur, index) => {
        if (index < 11) {
          acc.main.push(cur)
          return acc
        } else {
          acc.bench.push(cur)
          return acc
        }
      },
      { main: [], bench: [] }
    )
  }, [teamInfo])

  return (
    <div className={styles['container']}>
      <MainField data={teamGroup.main} />
      <span>bench</span>
      <BenchField data={teamGroup.bench} />
    </div>
  )
}
