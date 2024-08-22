import { AverageScore } from './AverageScore';
import { RatingsList } from './RatingsList';
import { TRating } from '../../types';

import { getRatingStarsFromAPI } from '@/app/lib/data';

import style from './rwd.module.scss';
const { wrapper } = style;

export type RatingStarsProps = {
  ratings: TRating[];
};

export const RatingStars = async () => {
  const data = await getRatingStarsFromAPI();

  return (
    <section className={wrapper}>
      <AverageScore ratings={data.data.ratings} />
      <RatingsList ratings={data.data.ratings} />
    </section>
  );
};
