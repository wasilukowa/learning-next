import { NavigationItem } from './NavigationItem';
import { getNavigationItemsFromAPI } from '@/app/lib/data';

import style from './rwd.module.scss';
const { wrapper, tableOfContent } = style;

export const Navigation = async () => {
  const routes = await getNavigationItemsFromAPI();

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
