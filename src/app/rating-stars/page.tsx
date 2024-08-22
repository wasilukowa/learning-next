import { RatingStars } from '../../../_components/1_RatingStars-easy/components';

import { RatingStarsSkeleton } from '../../../_components/1_RatingStars-easy/components/RatingStars/Skeleton';
import { Suspense } from 'react';

const RatingStarsPage = async () => {
  return (
    <Suspense fallback={<RatingStarsSkeleton />}>
      <RatingStars />
    </Suspense>
  );
};

export default RatingStarsPage;
