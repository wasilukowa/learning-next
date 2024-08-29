import { isValidNumberOfStars } from '../../../utils';
import { FullStar } from './Star/FullStar';
import { BlankStar } from './Star/BlankStar';
import { StarPercentage } from './Star/StarPercentage';

import { StarsProps } from './types';

import clsx from 'clsx';
import style from './rwd.module.scss';
import { Star } from './Star';
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
