import { instance } from '../base'
import { BootstrapStatic } from './types'
import { quickSort } from '@shared/lib/quickSort/quickSort.ts'

const BASE_URL = '/bootstrap-static'

export const getBootstrapStatic = async (): Promise<BootstrapStatic> => {
  const resp = await instance.get<BootstrapStatic>(BASE_URL)

  return { ...resp.data, elements: quickSort(resp.data.elements) }
}
