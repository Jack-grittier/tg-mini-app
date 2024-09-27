import type {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from 'react'

import styles from './ActionChangeEvent.module.css'
import { classNames } from '@telegram-apps/sdk'

type DefaultProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export enum Mode {
  top = 'top',
  bottom = 'bottom',
  left = 'left',
  right = 'right',
}

interface PropsType extends DefaultProps {
  mode?: Mode
}

export const ActionChangeEvent = ({
  children,
  mode = Mode.right,
  ...restProps
}: PropsWithChildren<PropsType>) => {
  return (
    <button
      {...restProps}
      className={classNames(styles.box, {
        [styles.left]: mode === Mode.left,
        [styles.right]: mode === Mode.right,
        [styles.top]: mode === Mode.top,
        [styles.bottom]: mode === Mode.bottom,
      })}
    >
      {children}
    </button>
  )
}
