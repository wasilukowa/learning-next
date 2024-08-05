import { NavigationItem } from './NavigationItem';

import style from './rwd.module.scss';
const { wrapper, tableOfContent } = style;

import data from '../../data/homePageData.json';
import { createRoutesObject } from '../../utils';

const routes = createRoutesObject(data);

export const Navigation = () => {
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
