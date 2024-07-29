import { RatingStars } from '../../../_components/1_RatingStars-easy/components';

import data from '../../../data/homePageData.json';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ratingsJson = data['rating-stars'].data.ratings;

  return (
    <>
      <RatingStars ratings={ratingsJson} />
    </>
  );
}
