import type { Pick as PickType } from '@shared/api/picks'
import type { Player } from '@shared/api/bootstrap-static'

import styles from './item.module.css'
import { RolePlayerLabel } from '../../../shared/ui/RolePlayerLabel'

interface ItemPropsType {
  item: PickType & { element: Player }
}

export const PickListItem = ({ item }: ItemPropsType) => {
  return (
    <div className={styles.item}>
      {item.is_captain || item.is_vice_captain ? (
        <RolePlayerLabel label={item.is_captain ? 'C' : 'V'} />
      ) : null}
      <div>{item.element.first_name}</div>
      <div>{item.element.web_name}</div>
    </div>
  )
}
