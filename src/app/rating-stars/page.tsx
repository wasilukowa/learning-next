import { RatingStars } from '../../../_components/1_RatingStars-easy/components';

import data from '../../../data/homePageData.json';

export type ReactChildren = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: ReactChildren) {
  // const ratingsJson = data['rating-stars'].data.ratings;

  // tutaj zaciagniecie danych ( jakas promise'a , jakis setTimeout)
  // AbortController

  return <RatingStars ratings={ratingsJson} />;
}
