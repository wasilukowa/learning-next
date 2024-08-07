import { Stars } from '../../Stars';

import style from './rwd.module.scss';
import { TRating } from '../../../../types';
const {
  wrapper,
  wrapperHeader,
  wrapperHeaderName,
  wrapperTextComment,
  wrapperHeaderStars,
} = style;

export const Rating = ({ score, content, name, recordId }: TRating) => {
  return (
    <li className={wrapper}>
      <div className={wrapperHeader}>
        <span className={wrapperHeaderStars}>
          <Stars score={score} id={recordId} isAverageStars={false} />
        </span>
        <h3 className={wrapperHeaderName}>{name}</h3>
      </div>
      <p className={wrapperTextComment}>{content}</p>
    </li>
  );
};
