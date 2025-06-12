import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/global.css';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Quiz',
  description: 'Best quiz in the world',
};

import React from 'react';
import { GameProvider } from '@/context/gameContext';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GameProvider>
          {children}
        </GameProvider>
      </body>
    </html>
  );
}
