import Link from 'next/link';

import { NavigationItemProps } from './types';

import style from './rwd.module.scss';
const { navigationItem, navigationItemLink } = style;

export const NavigationItem = ({ name, url }: NavigationItemProps) => {
  return (
    <li className={navigationItem}>
      <Link className={navigationItemLink} href={url}>
        {name}
      </Link>
    </li>
  );
};
