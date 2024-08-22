import { NavigationItem } from './NavigationItem';

import style from './rwd.module.scss';
const { wrapper, tableOfContent } = style;

const routes = [
  {
    name: 'Home Page',
    id: 'home',
    url: '/',
  },
  {
    name: 'Rating Stars',
    id: 'rating-stars',
    url: '/rating-stars',
  },

  {
    name: 'UseMemo Hook usage',
    id: 'use-memo',
    url: '/use-memo',
  },
  {
    name: 'UseGeo Hook usage',
    id: 'use-geo',
    url: '/use-geo',
  },
  {
    name: 'Modal',
    id: 'modal',
    url: '/modal',
  },

  {
    name: 'Search with dropdown',
    id: 'search',
    url: '/search',
  },
  {
    name: 'Table with pagination',
    id: 'pagination-table',
    url: '/paginated-table',
  },
  {
    name: 'Masonry grid',
    id: 'masonry-grid',
    url: '/masonry-grid',
  },
  {
    name: 'useIntersectionObserver',
    id: 'intersection-observer',
    url: '/intersection-observer',
  },
  {
    name: 'Infinite Human List',
    id: 'infinite-human-list',
    url: '/infinite-human-list',
  },
  {
    name: 'Password Input',
    id: 'password-input',
    url: '/password-input',
  },
  {
    name: 'Multistep Form',
    id: 'multistep-form',
    url: '/multistep-form',
  },
];

export const Navigation = async () => {
  return (
    <nav className={wrapper}>
      <ul className={tableOfContent}>
        {routes.map((route) => {
          return (
            <NavigationItem key={route.id} name={route.name} url={route.url} />
          );
        })}
      </ul>
    </nav>
  );
};
