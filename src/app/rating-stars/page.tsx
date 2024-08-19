import { RatingStars } from '../../../_components/1_RatingStars-easy/components';

// type UtilityComponent<T> = (
//   props: MyUtilityReactChildrenType<T>,
// ) => JSX.Element;

const RatingStarsPage = () => {
  return <RatingStars />;
};

export default RatingStarsPage;

// function DashboardLayout({ children }: ReactChildren) {
//   const ratingsJson = data['rating-stars'].data.ratings;

//   // tutaj zaciagniecie danych ( jakas promise'a , jakis setTimeout)
//   // AbortController

//   return <RatingStars ratings={ratingsJson} />;
// }
