import Image from 'next/image';

import style from './rwd.module.scss';
import { TPerson } from '../types';
const { wrapper, wrapperImage } = style;

export type AvatarProps = Pick<TPerson, 'avatarSrc'>;
export const Avatar = ({ avatarSrc }: AvatarProps) => {
  return (
    <div className={wrapper}>
      <Image
        className={wrapperImage}
        src={avatarSrc}
        width={100}
        height={0}
        alt={'random'} // TO BE GENERATED
      />
    </div>
  );
};
