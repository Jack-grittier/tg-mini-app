import { instance } from '../base'
import { FixtureType } from './types'

export const getFixturesEvent = async (eventId: number) => {
  return await instance.get<FixtureType[]>(`/fixtures/?event=${eventId}`)
}
