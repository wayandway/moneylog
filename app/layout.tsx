import RootLayout from '@/app/layouts';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
