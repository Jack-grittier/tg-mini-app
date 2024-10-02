import type { PropsWithChildren } from 'react'
import { TeamFieldType } from '@features/TeamField'
import { Player } from '@features/TeamField/ui/Player/ui/Player.tsx'

interface BenchFieldPropsType {
  data: TeamFieldType[]
}

export const BenchField = ({
  data,
}: PropsWithChildren<BenchFieldPropsType>) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {data.map((pl) => {
        return <Player key={`player-${pl.element}`} {...pl} isBench />
      })}
    </div>
  )
}
