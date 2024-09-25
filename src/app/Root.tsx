import { FC } from 'react'
import { App } from './App'
import { ErrorBoundary } from '@app/providers/ui/ErrorBoundary/ui/ErrorBoundary.tsx'
import { Providers } from '@app/providers/providers.tsx'

const ErrorBoundaryError: FC<{ error: unknown }> = ({ error }) => (
  <div>
    <p>An unhandled error occurred:</p>
    <blockquote>
      <code>
        {error instanceof Error
          ? error.message
          : typeof error === 'string'
            ? error
            : JSON.stringify(error)}
      </code>
    </blockquote>
  </div>
)

const Inner: FC = () => {
  return (
    <Providers>
      <App />
    </Providers>
  )
}

export const Root: FC = () => (
  <ErrorBoundary fallback={ErrorBoundaryError}>
    <Inner />
  </ErrorBoundary>
)
