import type { Metadata } from 'next';

import { Poppins } from 'next/font/google';

import './globals.css';
import './styles/slider.css';

export const metadata: Metadata = {
  title: 'Le Fredo | Menu',
};

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}
