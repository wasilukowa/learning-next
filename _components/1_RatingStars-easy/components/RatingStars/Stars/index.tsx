import { isValidNumberOfStars } from '../../../utils';
import { FullStar } from './FullStar';
import { BlankStar } from './BlankStar';
import { StarPercentage } from './StarPercentage';

import { StarsProps } from './types';

import clsx from 'clsx';
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
    // <div className={listOfClasses}>
    <div className={clsx(isAverageStars && wrapperForAverage)}>
      {[...new Array(5)].map((element, index) => {
        const keyNumber = id + '_' + (index + 1);
        const isFullStar = index < Math.floor(score);

        if (isFullStar) return <FullStar key={keyNumber} />;
        const isHalfStar =
          !Number.isInteger(score) && index === Math.floor(score);

        if (isHalfStar) {
          return <StarPercentage score={score} key={keyNumber} />;
        }

        return <BlankStar key={keyNumber} />;
      })}
    </div>
  );
};
