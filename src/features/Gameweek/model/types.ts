export interface IGameWeekState {
  /** Info active event. */
  activeEvent: number
  /** Event with is_current TRUE field */
  currentEvent: number
  /** Data loading indicator. */
  loading: boolean
  /** Error message. */
  error: Nullable<any>
}
