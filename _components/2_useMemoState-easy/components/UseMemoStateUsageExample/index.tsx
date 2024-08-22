'use client';

import style from './rwd.module.scss';

const { wrapper, wrapperButton } = style;

import { useMemoState } from './useMemoState';
import { UseMemoStateUsageProps } from './types';
import { useRef, useState } from 'react';
import { Input } from './Input';
import { InputSelection } from './InputSelection';
import { JSONInput } from './Input/JSONInput';

export const UseMemoStateUsageExample = () => {
  const {
    infoReference,
    inputReference,
    showRenderingInfo,
    handleValueChange,
    errorMessage,

    typeOfInput,
    handleTypeChange,
  } = useMemoState();

  showRenderingInfo();

  return (
    <>
      <div>
        <div>
          <InputSelection
            typeOfInput={typeOfInput}
            handleTypeChange={handleTypeChange}
          />
          <Input typeOfInput={typeOfInput} reference={inputReference} />
          {errorMessage !== '' && 'BUM'}
          <div>{inputReference.current?.value}</div>
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
        <div>This is your initial value: {inputReference.current?.value}</div>
        <span></span>
      </div>
    </>
  );
};
