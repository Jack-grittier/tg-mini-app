/**
 * TEAMS ICON
 */
import ARS from './Arsenal.svg?react'
import AVL from './AstonVilla.svg?react'
import BOU from './Bournemouth.svg?react'
import BRE from './Brentford.svg?react'
import BHA from './Brighton&HoveAlbion.svg?react'
import CHE from './Chelsea.svg?react'
import CRY from './CrystalPalace.svg?react'
import EVE from './Everton.svg?react'
import FUL from './Fulham.svg?react'
import IPS from './IpswichTown.svg?react'
import LEI from './LeicesterCity.svg?react'
import LIV from './Liverpool.svg?react'
import MCI from './ManchesterCity.svg?react'
import MUN from './ManchesterUnited.svg?react'
import NEW from './NewcastleUnited.svg?react'
import NFO from './NottinghamForest.svg?react'
import SOU from './Southampton.svg?react'
import TOT from './TottenhamHotspur.svg?react'
import WHU from './WestHamUnited.svg?react'
import WOL from './WolverhamptonWanderers.svg?react'

/**
 * COMMON ICON
 */
import arrow from './chevron_down_20.svg?react'

export const list = {
  // COMMON ICON
  arrow,
  // TEAMS ICON
  ARS,
  AVL,
  BOU,
  BRE,
  BHA,
  CHE,
  CRY,
  EVE,
  FUL,
  IPS,
  LEI,
  LIV,
  MCI,
  MUN,
  NEW,
  NFO,
  SOU,
  TOT,
  WHU,
  WOL,
}

export type IconName = keyof typeof list
