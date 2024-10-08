import { CoordinateProps } from './types';
import styles from './base.module.scss';

const { wrapper, wrapperLabel } = styles;

export const Coordinate = ({ coordinate, label }: CoordinateProps) => {
  return (
    <div className={wrapper}>
      <p className={wrapperLabel}>{label}</p>
      <span>{coordinate}</span>
    </div>
  );
};
