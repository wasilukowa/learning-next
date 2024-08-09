'use client';

import style from './rwd.module.scss';

const { wrapper, wrapperButton } = style;

import { useMemoState } from './useMemoState';
import { UseMemoStateUsageProps } from './types';
import { useRef, useState } from 'react';
import { Input } from './Input';
import { RadioButton } from './RadioButton';
import { ObjectInput } from './ObjectInput';

export const UseMemoStateUsageExample = () => {
  const {
    infoReference,
    showRenderingInfo,
    handleValueChange,
    typeOfT,
    setTypeOfT,
  } = useMemoState();

  const inputReference = useRef<HTMLInputElement | null>(null);

  showRenderingInfo();

  return (
    <>
      <div>
        <div>
          <RadioButton typeOfT={typeOfT} setTypeOfT={setTypeOfT} />
          {typeOfT === 'string' && (
            <Input typeOfInput={'text'} reference={inputReference} />
          )}
          {typeOfT === 'number' && (
            <Input typeOfInput={'number'} reference={inputReference} />
          )}

          {typeOfT === 'object' && <ObjectInput reference={inputReference} />}

          <button
            className={`${wrapperButton} button-default`}
            onClick={() => handleValueChange(inputReference.current?.value)}
          >
            Memorize it!
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div ref={infoReference}>
        This is your initial value: {inputReference.current?.value}
      </div>
    </>
  );
};
