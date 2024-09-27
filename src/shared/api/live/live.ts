import { instance } from '../base'

import { Live } from './types'

export const getLive = async (eventId: number) => {
  return await instance.get<Live>(`/event/${eventId}/live`)
}
