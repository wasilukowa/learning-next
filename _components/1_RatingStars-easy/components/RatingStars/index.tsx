import { AverageScore } from './AverageScore';
import { RatingsList } from './RatingsList';
import { TRating } from '../../types';

import style from './rwd.module.scss';
const { wrapper } = style;

export type RatingStarsProps = {
  ratings: TRating[];
};

export const RatingStars = ({ ratings }: RatingStarsProps) => {
  return (
    <section className={wrapper}>
      <AverageScore ratings={ratings} />
      <RatingsList ratings={ratings} />
    </section>
  );
};
