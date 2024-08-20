'use client';

import { useEffect } from 'react';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  // useEffect(() => {
  //   // Optionally log the error to an error reporting service
  //   console.error(error);
  // }, [error]);

  return (
    <main>
      <h2 className="text-center">Something went wrong!!!!!!!!! {error.message}</h2>
    </main>
  );
}
