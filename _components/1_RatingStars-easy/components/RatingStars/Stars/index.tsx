import clsx from 'clsx';

import { isValidNumberOfStars } from '../../../utils';

import { Star } from './Star';
import { StarsProps } from './types';

import style from './rwd.module.scss';
const { wrapperForAverage } = style;

// clsx

export const Stars = ({ score, id, isAverageStars }: StarsProps) => {
  const arePropsValid = isValidNumberOfStars(score);
  if (!arePropsValid) return null;

  // const averageClass = className;
  // 3.47
  // fullStars: 3,
  // halfStar: 0,47,
  // blankedStars: 1

  return (
    <div className={clsx(isAverageStars && wrapperForAverage)}>
      {[...new Array(5)].map((element, index) => {
        return (
          <Star
            key={id + '_' + (index + 1)}
            index={index}
            score={score}
            id={id}
          />
        );
      })}
    </div>
  );
};
