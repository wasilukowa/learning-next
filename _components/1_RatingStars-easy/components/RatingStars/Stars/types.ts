import { StarProps } from './Star/types';

export type StarsProps = Pick<StarProps, 'score' | 'id'> & {
  isAverageStars: boolean;
};
