import { Stars } from "../Stars";
import { AverageScoreProps } from "./types";
import { getAverageRating } from "../../../utils";

import style from "./rwd.module.scss";

const { wrapper, wrapperScore } = style;

export const AverageScore = ({ ratings }: AverageScoreProps) => {
  const average = getAverageRating(ratings);

  return (
    <div className={wrapper}>
      <span className={wrapperScore}>{average}</span>
      <Stars score={average} id="average" isAverageStars={true} />
    </div>
  );
};
