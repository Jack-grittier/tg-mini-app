import { FixtureStatsType } from '@features/fixtures'

interface PropsType {
  stats: FixtureStatsType[]
}

export const Stats = ({ stats }: PropsType) => {
  return (
    <div>
      {stats.map((s, index) => {
        return (
          <div key={`stat-${s.identifier}-${index}`}>
            <div>{s.identifier}</div>
            {s.h.map((_h, i) => {
              return (
                <div key={`identifier-${index}-${i}`}>
                  <div>{_h.element?.second_name}</div>
                  <div>{_h.value}</div>
                </div>
              )
            })}

            {s.a.map((_h, i) => {
              return (
                <div key={`identifier-${index}-${i}`}>
                  <div>{_h.element?.second_name}</div>
                  <div>{_h.value}</div>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
