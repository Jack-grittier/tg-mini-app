import { FixtureType } from './types'
import { isObject } from '@shared/lib/isObject/isObject'

export const isFixture = (obj: any): obj is FixtureType => {
  return isObject(obj) && 'team_a' in obj && 'team_h' in obj
}
