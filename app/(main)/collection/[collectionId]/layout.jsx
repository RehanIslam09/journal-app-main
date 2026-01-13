import Link from 'next/link';
import { Suspense } from 'react';
import Loading from './loading';

export default function CollectionLayout({ children }) {
  return (
    <div className="px-4 py-8">
      <div className="mb-8">
        <Link
          href="/dashboard"
          className="text-sm text-rose-600 hover:text-rose-700 transition-colors"
        >
          ← Back to Dashboard
        </Link>
      </div>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
}
