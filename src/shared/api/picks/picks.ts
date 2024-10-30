import { instance } from '../base'
import { Picks } from './types'
import { AxiosRequestConfig } from 'axios'

export const getCurrentPicks = async (
  managerId: number,
  eventId: number,
  config?: AxiosRequestConfig
) => {
  return await instance.get<Picks>(
    `/entry/${managerId}/event/${eventId}/picks`,
    config
  )
}
