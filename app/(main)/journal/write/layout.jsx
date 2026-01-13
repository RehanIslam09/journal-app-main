import Link from 'next/link';
import { Suspense } from 'react';
import { BarLoader } from 'react-spinners';

export default function WriteLayout({ children }) {
  return (
    <div className="px-4 py-8">
      <div>
        <Link
          href="/dashboard"
          className="text-sm text-rose-600 hover:text-rose-700 cursor-pointer transition-colors"
        >
          ← Back to Dashboard
        </Link>
      </div>
      <Suspense fallback={<BarLoader color="#e11d48" width="100%" />}>
        {children}
      </Suspense>
    </div>
  );
}
