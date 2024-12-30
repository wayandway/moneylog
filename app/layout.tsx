import type { Metadata } from 'next';

import { ClientThemeProvider } from '@/app/providers';
import '@/shared/styles/reset.css';
import '@/shared/styles/globals.css';
import { Header, Footer } from '@/widgets/layouts';

export const metadata: Metadata = {
  title: '머니로그',
  description: '경제 블로그 플랫폼',
  openGraph: {
    title: '머니로그',
    description: '경제 블로그 플랫폼',
    type: 'website',
    // url: '',
    // images: [
    //   {
    //     url: '',
    //     width: 800,
    //     height: 600,
    //   },
    // ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <ClientThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ClientThemeProvider>
      </body>
    </html>
  );
}
