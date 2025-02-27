import { Metadata } from 'next';
import { Nunito } from 'next/font/google';

import '@/styles/global.css';

export const metadata: Metadata = {
  title: 'Le Fredo | Menu',
};

const nunito = Nunito({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR' className={nunito.variable}>
      <body>{children}</body>
    </html>
  );
}
