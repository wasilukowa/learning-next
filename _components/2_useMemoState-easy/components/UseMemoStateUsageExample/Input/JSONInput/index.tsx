import { Explanation } from './Explanation';

import styles from './rwd.module.scss';
const { wrapper, wrapperTextarea, wrapperExplanation, wrapperTextareaButton } =
  styles;

export const JSONInput = ({ reference, typeOfInput }) => {
  return (
    <div className={wrapper}>
      <div className={wrapperTextarea}>
        <textarea ref={reference} />
      </div>
      <div className={wrapperExplanation}>
        {typeOfInput === 'object' && <Explanation />}
      </div>
    </div>
  );
};
