import type { Pick as PickType } from '@shared/api/picks'
import type { Player } from '@shared/api/bootstrap-static'

import styles from './item.module.css'
import { RolePlayerLabel } from '../../../shared/ui/RolePlayerLabel'
import { Caption } from '@telegram-apps/telegram-ui'

interface ItemPropsType {
  item: PickType & { element: Player }
}

export const PickListItem = ({ item }: ItemPropsType) => {
  return (
    <div className={styles.item}>
      {item.is_captain || item.is_vice_captain ? (
        <RolePlayerLabel label={item.is_captain ? 'Captain:' : 'Vice:'} />
      ) : null}
      <Caption level={'1'} weight="2">
        &nbsp;{item.element.web_name}
      </Caption>
    </div>
  )
}
