import React from 'react';

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert" className="tw-flex tw-flex-col tw-h-screen tw-w-full tw-justify-center tw-items-center">
      <p className="tw-text-black tw-text-xl">Something went wrong:</p>
      <pre className="tw-text-red-600 tw-text-md tw-py-2">{error.message}</pre>
      <button className="tw-bg-green-400 tw-p-3" onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

export default ErrorFallback;