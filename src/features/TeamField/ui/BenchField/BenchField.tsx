import type { PropsWithChildren } from 'react'
import { TeamFieldType } from '@features/TeamField'
import { useAppSelector } from '@app/store.ts'
import { Player } from '@features/TeamField/ui/Player/ui/Player.tsx'

interface BenchFieldPropsType {
  data: TeamFieldType[]
}

export const BenchField = ({
  data,
}: PropsWithChildren<BenchFieldPropsType>) => {
  const elementTypes =
    useAppSelector((state) => state.bootstrapStatic.static?.element_types) ?? []
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {data.map((pl) => {
        const plToLine = elementTypes.find(
          (t) => t.id === pl.player.element_type
        )
        console.log('plToLine', plToLine)
        return <Player key={`player-${pl.element}`} {...pl} />
      })}
    </div>
  )
}
