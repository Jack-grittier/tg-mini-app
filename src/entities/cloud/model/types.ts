import { CloudStorage } from '@telegram-apps/sdk'

export type ICloudModel = {
  instance: Nullable<CloudStorage>
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error?: Nullable<string>
}
