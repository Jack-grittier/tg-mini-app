import { Player, Team } from './types'
import { isObject } from '@shared/lib/isObject/isObject'

export const isPlayer = (obj: any): obj is Player => {
  return isObject(obj) && 'web_name' in obj && 'yellow_cards' in obj
}

export const isTeam = (obj: any): obj is Team => {
  return isObject(obj) && 'short_name' in obj && 'name' in obj
}
