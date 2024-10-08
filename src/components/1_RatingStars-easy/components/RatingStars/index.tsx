import { AverageScore } from './AverageScore';
import { RatingsList } from './RatingsList';

import { getRatingStarsFromAPI } from '@/data/data';

import style from './rwd.module.scss';
const { wrapper } = style;

export const RatingStars = async () => {
  const data = await getRatingStarsFromAPI();

  const { ratings } = data;

  return (
    <section className={wrapper}>
      <AverageScore ratings={ratings} />
      <RatingsList ratings={ratings} />
    </section>
  );
};
