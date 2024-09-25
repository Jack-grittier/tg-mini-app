import { instance } from '../base'
import { BootstrapStatic } from './types'

const BASE_URL = '/bootstrap-static'

export const getBootstrapStatic = async () => {
  const resp = await instance.get<BootstrapStatic>(BASE_URL)

  return resp.data
}
