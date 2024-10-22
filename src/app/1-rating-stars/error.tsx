'use client';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <div>
      <h2 className="text-center">
        Something went wrong!!!!!!!!! {error.message}
      </h2>
    </div>
  );
}
