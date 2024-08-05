'use client';

import { useMemoState } from '../../hooks/useMemoState';

import style from './rwd.module.scss';

const { wrapper, buttonGlobal } = style;

import { UseMemoStateUsageProps } from './types';

export const UseMemoStateUsage = ({
  number,
  object,
  array,
  string,
}: UseMemoStateUsageProps) => {
  const [v1, setter1] = useMemoState(number.initialValue);
  const [v2, setter2] = useMemoState(object.initialValue);
  const [v3, setter3] = useMemoState(array.initialValue);
  const [v4, setter4] = useMemoState(string.initialValue);

  const handleNumberVal = () => {
    setter1(number.newValue);
  };

  const handleChangeToObject = () => {
    setter2(object.newValue);
  };

  const handleArrVal = () => {
    setter3(array.newValue);
  };

  const handleStringVal = () => {
    setter4(string.newValue);
  };

  return (
    <div className={wrapper}>
      <button className={buttonGlobal} onClick={handleNumberVal}>
        {number.buttonLabel}
      </button>
      <br />
      <button className={buttonGlobal} onClick={handleChangeToObject}>
        {object.buttonLabel}
      </button>
      <br />
      <button className={buttonGlobal} onClick={handleArrVal}>
        {array.buttonLabel}
      </button>
      <br />
      <button className={buttonGlobal} onClick={handleStringVal}>
        {string.buttonLabel}
      </button>
      {/* {console.log("RENDERS...")} */}
    </div>
  );
};
