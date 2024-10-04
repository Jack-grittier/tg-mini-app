import type { PropsWithChildren } from 'react'
import type { Pick as PickType } from '@shared/api/picks'
import { isPlayer, Player } from '@shared/api/bootstrap-static'
import { PickListItem } from '@features/pick-list'

interface FirstSquadPropsType {
  data: (PickType & { element: number | Player })[]
}

export const FirstSquad = ({
  data,
}: PropsWithChildren<FirstSquadPropsType>) => {
  return (
    <>
      {data.map((el, index) => {
        if (isPlayer(el.element)) {
          return (
            <PickListItem
              key={`${el.element.id}-index-${index}`}
              item={el as unknown as PickType & { element: Player }}
            />
          )
        }
        return null
      })}
    </>
  )
}
