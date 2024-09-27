import { instance } from '../base'
import { Picks } from './types'

export const getCurrentPicks = async (managerId: number, eventId: number) => {
  return await instance.get<Picks>(`/entry/${managerId}/event/${eventId}/picks`)
}
