import { Rating } from "./Rating";
import style from "./rwd.module.scss";

const { wrapper } = style; // wrapper

import { RatingsListProps } from "./types";

export const RatingsList = ({ ratings }: RatingsListProps) => {
  return (
    <ul className={wrapper}>
      {ratings.map((rating) => (
        <Rating key={rating.recordId} rating={rating} />
      ))}
    </ul>
  );
};
