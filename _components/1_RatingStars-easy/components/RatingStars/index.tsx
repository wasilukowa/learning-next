import { AverageScore } from './AverageScore';
import { RatingsList } from './RatingsList';
import { RatingStarsProps } from './types';
import style from './rwd.module.scss';

const { wrapper } = style;

export const RatingStars = ({ ratings }: RatingStarsProps) => {
  return (
    <section className={wrapper}>
      <AverageScore ratings={ratings} />
      <RatingsList ratings={ratings} />
    </section>
  );
};
