import type { Metadata } from 'next';

import { Nunito, Nunito_Sans } from 'next/font/google';

import './globals.css';
import './styles/slider.css';

export const metadata: Metadata = {
  title: 'Le Fredo | Menu',
};

export const nunito = Nunito({
  weight: ['500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

export const nunito_sans = Nunito_Sans({
  weight: ['400', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito-sans',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${nunito.variable} ${nunito_sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
