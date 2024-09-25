declare type RootState = ReturnType<typeof import('./store').store.getState>
declare type RootDispatch = typeof import('./store').store.dispatch

declare type Nullable<T> = T | null
