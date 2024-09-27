import { Player } from './types'

export const isPlayer = (player: Player): player is Player => {
  return 'web_name' in player
}
