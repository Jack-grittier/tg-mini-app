import { instance } from '../base'

import { Live } from './types'
import { AxiosRequestConfig } from 'axios'

export const getLive = async (eventId: number, config?: AxiosRequestConfig) => {
  return await instance.get<Live>(`/event/${eventId}/live`, config)
}
