import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bubatz Center - Moderne Digitale Wellness-Plattform',
  description: 'Einfache, schnelle und zugängliche Wellness-Lösungen direkt zu Ihnen nach Hause. Erleben Sie einen neuen Standard in digitaler Gesundheit.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
