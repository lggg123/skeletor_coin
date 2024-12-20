import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/ui/header';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '$SKELETOR - The Most Powerful Memecoin in the Universe',
  description: 'Join the most powerful memecoin army in the cryptoverse with $SKELETOR!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>{String(metadata.title) ?? 'Default Title'}</title>
        <meta name="description" content={metadata.description ?? 'Default description'} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}