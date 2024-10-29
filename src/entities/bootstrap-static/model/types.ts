import { BootstrapStatic } from '@shared/api/bootstrap-static'

export interface IStaticState {
  /** Info manager. */
  readonly static: Nullable<BootstrapStatic>
  /** Data loading indicator. */
  readonly loading: boolean
  /** Error message. */
  readonly error: Nullable<any>
  readonly status: 'ожидание' | 'загружается' | 'загружен' | 'ошибка загрузки'
}
