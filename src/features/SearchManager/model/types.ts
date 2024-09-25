import { Entry } from '@shared/api/entry-manager'

export interface ISearchState {
  /** Info manager. */
  readonly manager: Nullable<Entry>
  /** Data loading indicator. */
  readonly loading: boolean
  /** Error message. */
  readonly error: Nullable<any>
}
