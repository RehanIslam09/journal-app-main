import Header from '@/components/header';
import './globals.css';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from 'sonner';
import 'react-quill-new/dist/quill.snow.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Reflct',
  description: 'A calm, private space to reflect and write.',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`
            ${inter.className}
            bg-gradient-to-b 
            from-rose-50 
            via-neutral-50 
            to-violet-50
            text-neutral-800
          `}
        >
          {/* Soft paper texture */}
          <div className="fixed inset-0 -z-10 bg-[url('/bg.jpg')] opacity-40" />

          {/* Optional dreamy wash */}
          <div className="fixed inset-0 -z-20 bg-gradient-to-br from-rose-100/40 via-transparent to-violet-100/40" />

          <Header />

          <main className="min-h-screen">{children}</main>

          <Toaster richColors />

          {/* Footer */}
          <footer className="mt-24 py-12 bg-white/60 backdrop-blur-sm border-t border-neutral-200">
            <div className="container mx-auto px-4 text-center text-neutral-600">
              <p>
                Made with <span className="text-rose-500">💗</span> by Rehan
              </p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
