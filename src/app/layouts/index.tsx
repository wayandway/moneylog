import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../../shared/styles/globals.css';

const geistSans = localFont({
  src: '../../../public/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: '../../../public/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: '머니로그',
  description: '경제 블로그 플랫폼',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
