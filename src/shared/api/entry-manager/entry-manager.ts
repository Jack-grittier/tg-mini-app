import { instance } from '../base'
import { Entry } from './types'

export const getManagerById = (id: string) => {
  return instance.get<Entry>(`/entry/${id}`).then((resp) => resp.data)
}
