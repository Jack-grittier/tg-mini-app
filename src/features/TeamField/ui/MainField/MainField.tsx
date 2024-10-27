import { TeamFieldType } from '@features/TeamField'
import { Player } from '../Player/ui/Player'
import { useAppSelector } from '@app/store.ts'
import styles from './MainField.module.css'

interface PropsType {
  data: TeamFieldType[]
}

export const MainField = ({ data }: PropsType) => {
  const elementTypes =
    useAppSelector((state) => state.bootstrapStatic.static?.element_types) ?? []
  return (
    <div className={styles.container}>
      {elementTypes.map((t, index) => {
        const plToLine = data.filter((pl) => pl.player.element_type === t.id)
        return (
          <div
            key={`element-${t.id}-${index}`}
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              gap: 12,
            }}
          >
            {plToLine.map((pl) => (
              <Player key={`player-${pl.element}`} {...pl} />
            ))}
          </div>
        )
      })}
    </div>
  )
}
