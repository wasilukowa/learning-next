'use client';

import style from './rwd.module.scss';

const { wrapper, wrapperButton } = style;

import { useMemoState } from './useMemoState';
import { UseMemoStateUsageProps } from './types';

export const UseMemoStateUsageExample = () => {
  const initialValue = 1;
  const { infoReference, showRenderingInfo, value, handleValueChange } =
    useMemoState(initialValue);

  // const [example, setExample] = useMemoState({ qwe: 'asd', numericValue: 3 });

  showRenderingInfo();

  return (
    <>
      <div className={wrapper}>
        <button
          className={`${wrapperButton} button-default`}
          onClick={() => handleValueChange(4)}
        >
          {'DUpa'}
        </button>
      </div>
      <div ref={infoReference}>Is it renders?</div>
    </>
  );
};
