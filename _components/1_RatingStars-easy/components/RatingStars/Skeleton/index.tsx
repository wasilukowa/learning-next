import styles from './base.module.scss';

const { wrapper, wrapperAverageScorePlaceholder, wrapperRatingPlaceholder } =
  styles;

export const RatingStarsSkeleton = () => {
  return (
    <div className={wrapper}>
      <div className={wrapperAverageScorePlaceholder}></div>
      <div className={wrapperRatingPlaceholder}></div>
      <div className={wrapperRatingPlaceholder}></div>
      <div className={wrapperRatingPlaceholder}></div>
      <div className={wrapperRatingPlaceholder}></div>
    </div>
  );
};
