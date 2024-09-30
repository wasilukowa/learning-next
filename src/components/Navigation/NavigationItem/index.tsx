'use client';

import Link from 'next/link';
import clsx from 'clsx';

import { NavigationItemProps } from './types';

import { usePathname } from 'next/navigation';

import style from './rwd.module.scss';
const { navigationItem, navigationItemLink, navigationItemLinkActive } = style;

export const NavigationItem = ({ name, url }: NavigationItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === url;

  return (
    <li className={navigationItem}>
      <Link
        className={clsx(
          navigationItemLink,
          isActive && navigationItemLinkActive,
        )}
        href={url}
      >
        {name}
      </Link>
    </li>
  );
};
