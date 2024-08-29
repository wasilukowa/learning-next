import { Explanation } from './Explanation';

import styles from './rwd.module.scss';
const { wrapper, wrapperTextarea, wrapperExplanation, wrapperTextareaButton } =
  styles;

export const Input = ({ reference, typeOfInput }) => {
  const isTypeNumber = typeOfInput === 'number';
  if (isTypeNumber)
    return <input className={wrapperTextarea} type="number" ref={reference} />;

  return (
    <div className={wrapper}>
      <textarea className={wrapperTextarea} ref={reference} />
    </div>
  );
};
