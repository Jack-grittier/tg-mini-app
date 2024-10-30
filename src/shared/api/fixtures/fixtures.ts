import { instance } from '../base'
import { FixtureType } from './types'
import { AxiosRequestConfig } from 'axios'

export const getFixturesEvent = async (
  eventId: number,
  config?: AxiosRequestConfig
) => {
  return await instance.get<FixtureType[]>(
    `/fixtures/?event=${eventId}`,
    config
  )
}
