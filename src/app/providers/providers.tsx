import { PropsWithChildren, useEffect } from 'react'
import { Provider } from 'react-redux'
import store from '@app/store.ts'
import { SDKProvider, useLaunchParams } from '@telegram-apps/sdk-react'

export const Providers = ({ children }: PropsWithChildren) => {
  const debug = useLaunchParams().startParam === 'debug'
  useEffect(() => {
    if (debug) {
      import('eruda').then((lib) => lib.default.init())
    }
  }, [debug])

  return (
    <SDKProvider acceptCustomStyles debug={debug}>
      <Provider store={store}>{children}</Provider>
    </SDKProvider>
  )
}
