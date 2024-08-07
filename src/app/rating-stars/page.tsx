import { PropsWithChildren } from 'react';
import { RatingStars } from '../../../_components/1_RatingStars-easy/components';

import { FC, ReactElement } from 'react';

import data from '../../../data/homePageData.json';
import { TRating } from '../../../_components/1_RatingStars-easy/types';
import { RatingStarsProps } from '../../../_components/1_RatingStars-easy/components/RatingStars/types';

// type UtilityComponent<T> = (
//   props: MyUtilityReactChildrenType<T>,
// ) => JSX.Element;

export type ReactChildren = {
  children: ReactElement;
};

type MyUtilityReactChildrenType<T> = {
  children: React.ReactNode;
} & T;

type RatingStarsPageProps = {}; // ????

const RatingStarsPage = () => {
  const ratingsJson = data['rating-stars'].data.ratings;

  return <RatingStars ratings={ratingsJson} />;
};

export default RatingStarsPage;

// function DashboardLayout({ children }: ReactChildren) {
//   const ratingsJson = data['rating-stars'].data.ratings;

//   // tutaj zaciagniecie danych ( jakas promise'a , jakis setTimeout)
//   // AbortController

//   return <RatingStars ratings={ratingsJson} />;
// }
