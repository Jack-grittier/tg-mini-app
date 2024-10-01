import { Player, Team } from './types'
import { isObject } from '@shared/lib/isObject/isObject'

export const isPlayer = (player: Player): player is Player => {
  return 'web_name' in player
}

export const isTeam = (obj: any): obj is Team => {
  return isObject(obj) && 'short_name' in obj && 'name' in obj
}
