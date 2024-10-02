export enum CHIPS_LIST {
  bboost = ' Bench Boost played',
  '3xc' = 'Triple Captain played',
  wildcard = 'Wildcard played',
  freehit = 'Free Hit played',
}

export type ChipListType = keyof typeof CHIPS_LIST
