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
    url: '/1-rating-stars',
  },

  {
    name: 'UseMemo Hook usage',
    id: 'use-memo',
    url: '/2-use-memo',
  },
  {
    name: 'UseGeo Hook usage',
    id: 'use-geo',
    url: '/3-use-geo',
  },
  {
    name: 'Modal',
    id: 'modal',
    url: '/4-modal',
  },

  {
    name: 'Search with dropdown',
    id: 'search',
    url: '/5-search',
  },
  {
    name: 'Table with pagination',
    id: 'pagination-table',
    url: '/6-paginated-table',
  },
  {
    name: 'Masonry grid',
    id: 'masonry-grid',
    url: '/7-masonry-grid',
  },
  {
    name: 'useIntersectionObserver',
    id: 'intersection-observer',
    url: '/8-intersection-observer',
  },
  {
    name: 'Infinite Human List',
    id: 'infinite-human-list',
    url: '/9-infinite-human-list',
  },
  {
    name: 'Password Input',
    id: 'password-input',
    url: '/10-password-input',
  },
  {
    name: 'Multistep Form',
    id: 'multistep-form',
    url: '/11-multistep-form',
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
