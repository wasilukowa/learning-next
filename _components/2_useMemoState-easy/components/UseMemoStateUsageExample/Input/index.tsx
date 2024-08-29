import { InputProps } from './types';

import styles from './rwd.module.scss';
const { wrapper, wrapperTextarea, wrapperNumber } = styles;

export const Input = ({ reference, typeOfInput }: InputProps) => {
  const isTypeNumber = typeOfInput === 'number';
  if (isTypeNumber)
    return (
      <input
        className={`${wrapperTextarea} ${wrapperNumber}`}
        type="number"
        ref={reference} // ROZWIAZAĆ PROBLEM!!!!
      />
    );

  return (
    <div className={wrapper}>
      <textarea className={wrapperTextarea} ref={reference} />
    </div>
  );
};
