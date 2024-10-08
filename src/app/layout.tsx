import type { Metadata } from 'next';
import { Navigation } from '../components/Navigation';
import { roboto, roboto_condensed } from '../styles/fonts';

import '../styles/globals.scss';
import styles from '../styles/rwd.module.scss';

const { wrapper } = styles;

export const metadata: Metadata = {
  title: 'JS Gladiators Academy',
  description: 'Generated by create next app',
};

const allUsedFonts = [roboto.variable, roboto_condensed.variable];
const computedFonts = allUsedFonts.join(' ');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={computedFonts}>
      <body>
        <Navigation />
        <main className={wrapper}>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
