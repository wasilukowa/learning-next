import { AverageScore } from './AverageScore';
import { RatingsList } from './RatingsList';
import { TRating } from '../../types';

import style from './rwd.module.scss';
import { getRatingStarsFromAPI } from '@/app/lib/data';
const { wrapper } = style;

export type RatingStarsProps = {
  ratings: TRating[];
};

export const RatingStars = async () => {
  const data = await getRatingStarsFromAPI();
  console.log('rating stars data: ', data.data);

  return (
    <section className={wrapper}>
      <AverageScore ratings={data.data.ratings} />
      <RatingsList ratings={data.data.ratings} />
    </section>
  );
};
