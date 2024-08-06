'use client';

import style from './rwd.module.scss';

const { wrapper, wrapperButton } = style;

import { UseUseMemoStateUsage } from './useUseMemoStateUsage';
import { UseMemoStateUsageProps } from './types';

export const UseMemoStateUsage = ({
  number,
  object,
  array,
  string,
}: UseMemoStateUsageProps) => {
  const {
    infoReference,
    showRenderingInfo,
    handleNumberVal,
    handleChangeToObject,
    handleArrVal,
    handleStringVal,
  } = UseUseMemoStateUsage(number, object, array, string);

  showRenderingInfo();

  return (
    <div className={wrapper}>
      <button
        className={`${wrapperButton} button-default`}
        onClick={handleNumberVal}
      >
        {number.buttonLabel}
      </button>
      <button
        className={`${wrapperButton} button-default`}
        onClick={handleChangeToObject}
      >
        {object.buttonLabel}
      </button>
      <button
        className={`${wrapperButton} button-default`}
        onClick={handleArrVal}
      >
        {array.buttonLabel}
      </button>
      <button
        className={`${wrapperButton} button-default`}
        onClick={handleStringVal}
      >
        {string.buttonLabel}
      </button>
      <p>TUTAJ INFO O RENDEROWANIU:</p>
      <p ref={infoReference}></p>
    </div>
  );
};
