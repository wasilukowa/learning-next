import { RatingStars } from '../../../_components/1_RatingStars-easy/components';

import { RatingStarsSkeleton } from '../../../_components/1_RatingStars-easy/components/RatingStars/Skeleton';
import { Suspense } from 'react';

// type UtilityComponent<T> = (
//   props: MyUtilityReactChildrenType<T>,
// ) => JSX.Element;

const RatingStarsPage = async () => {
  console.log('Rating stars page');
  return (
    <Suspense fallback={<RatingStarsSkeleton />}>
      <RatingStars />
    </Suspense>
  );
};

export default RatingStarsPage;

// function DashboardLayout({ children }: ReactChildren) {
//   const ratingsJson = data['rating-stars'].data.ratings;

//   // tutaj zaciagniecie danych ( jakas promise'a , jakis setTimeout)
//   // AbortController

//   return <RatingStars ratings={ratingsJson} />;
// }
