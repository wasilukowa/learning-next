'use client';

import style from './rwd.module.scss';

const { wrapper, wrapperButton } = style;

import { useMemoState } from './useUseMemoStateUsage';
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
  } = useMemoState(number, object, array, string);

  const [example, setExample] = useMemoState({ qwe: 'asd', numericValue: 3 });

  showRenderingInfo();

  return (
    <>
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
      </div>
      <div ref={infoReference}>Is it renders?</div>
    </>
  );
};
