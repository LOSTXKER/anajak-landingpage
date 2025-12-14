'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>เกิดข้อผิดพลาด</h2>
          <p>{error.message}</p>
          <button onClick={() => reset()}>ลองอีกครั้ง</button>
        </div>
      </body>
    </html>
  );
}
