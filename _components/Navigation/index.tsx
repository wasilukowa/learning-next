// 'use client';

import { NavigationItem } from './NavigationItem';

// import data from '../../data/homePageData.json';
// import { createRoutesObject } from '../../utils';

import style from './rwd.module.scss';
const { wrapper, tableOfContent } = style;

// const routes = createRoutesObject(data);

export const Navigation = async () => {
  const routes = await fetch(
    'http://localhost:3001/api/data/navigationMenu',
  ).then((res) => res.json());

  console.log(routes);
  console.log('no hej');

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
