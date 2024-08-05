import { NavigationItem } from './NavigationItem';

import style from './rwd.module.scss';
const { wrapper, tableOfContent } = style;

type TLink = {
  key: string;
  name: string;
  url: string;
};

const links: TLink[] = [
  {
    key: 'nav-home',
    name: 'HOME',
    url: '/',
  },
  {
    key: 'nav-rating-stars',
    name: 'RATING STARS',
    url: '/rating-stars',
  },
  {
    key: 'nav-use-memo-usage',
    name: 'USE MEMO USAGE',
    url: '/use-memo-state',
  },
  {
    key: 'nav-use-geo',
    name: 'USE GEO',
    url: '/use-geo',
  },
];

export const Navigation = () => {
  return (
    <nav className={wrapper}>
      <ul className={tableOfContent}>
        {links.map((link) => {
          return (
            <NavigationItem key={link.key} name={link.name} url={link.url} />
          );
        })}
      </ul>
    </nav>
  );
};
