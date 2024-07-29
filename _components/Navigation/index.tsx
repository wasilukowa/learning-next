import { NavigationItem } from './NavigationItem';

import style from './rwd.module.scss';
const { wrapper, tableOfContent } = style;

export const Navigation = () => {
  return (
    <nav className={wrapper}>
      <ul className={tableOfContent}>
        <NavigationItem
          key={'navigationItem'}
          name={'RATING STARS'}
          url={'/rating-stars'}
        />
      </ul>
    </nav>
  );
};
