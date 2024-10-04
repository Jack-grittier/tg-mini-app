export interface ITeamState {
  currentEvent: number
  primary: InfoFiled
  secondary: InfoFiled
}

export interface InfoFiled {
  managerId: number
  eventId: number
  activeEvent: number
}
