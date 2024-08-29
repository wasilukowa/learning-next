import { BlankStar } from './BlankStar';
import { FullStar } from './FullStar';
import { StarPercentage } from './StarPercentage';

export const Star = ({ index, id, score }) => {
  const keyNumber = id + '_' + (index + 1);
  const isFullStar = index < Math.floor(score);
  if (isFullStar) return <FullStar key={keyNumber} />;

  const isHalfStar = !Number.isInteger(score) && index === Math.floor(score);

  if (isHalfStar) {
    return <StarPercentage score={score} key={keyNumber} />;
  }

  return <BlankStar key={keyNumber} />;
};
