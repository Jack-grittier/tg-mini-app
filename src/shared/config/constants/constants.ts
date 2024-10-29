export enum CHIPS_LIST {
  bboost = ' Bench Boost',
  '3xc' = 'Triple Captain',
  wildcard = 'Wildcard',
  freehit = 'Free Hit',
}

export type ChipListType = keyof typeof CHIPS_LIST

export enum CLOUD_KEY {
  manager = 'manager-id',
}
