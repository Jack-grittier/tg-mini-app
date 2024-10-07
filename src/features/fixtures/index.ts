export { FixturesSender } from './ui/fixtures-sender/ui/fixtures-sender'
export { FixturesEventSwitch } from './ui/fixtures-event-switch/ui/fixtures-event-switch'
export { FixturesGetterList } from './ui/fixtures-getter-list/ui/fixtures-getter-list'

export {
  default as fixturesReducer,
  /**
   * ACTION
   */
  setInitialEvent,
  /**
   * THINK
   */
  fetchScheduler,
} from './model/fixtures.slice'
