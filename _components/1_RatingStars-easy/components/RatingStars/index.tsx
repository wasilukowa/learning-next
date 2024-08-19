import { AverageScore } from './AverageScore';
import { RatingsList } from './RatingsList';
import { TRating } from '../../types';

import style from './rwd.module.scss';
const { wrapper } = style;

export type RatingStarsProps = {
  ratings: TRating[];
};

export const RatingStars = async ({ ratings }: RatingStarsProps) => {
  const data = await fetch('http://localhost:3001/api/data/ratingStars').then(
    (res) => res.json(),
  );

  console.log(data.data.ratings);

  return (
    <section className={wrapper}>
      <AverageScore ratings={data.data.ratings} />
      <RatingsList ratings={data.data.ratings} />
    </section>
  );
};
