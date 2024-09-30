import { Roboto, Roboto_Condensed } from 'next/font/google';
// import '../globals.scss';

export const roboto = Roboto({
  weight: ['300'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const roboto_condensed = Roboto_Condensed({
  weight: ['300'],
  subsets: ['latin'],
  variable: '--font-roboto-condensed',
});
