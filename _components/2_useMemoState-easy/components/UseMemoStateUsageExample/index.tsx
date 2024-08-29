'use client';

import style from './rwd.module.scss';

const { wrapper, wrapperError, wrapperButton } = style;

import { useMemoState } from './useMemoState';
import { Input } from './Input';
import { InputSelection } from './InputSelection';
import { Explanation } from './Input/Explanation';

export const UseMemoStateUsageExample = () => {
  const {
    infoReference,
    inputReference,
    errorMessage,
    typeOfInput,
    handleMemorizeItButton,
    handleTypeChange,
  } = useMemoState();

  // showRenderingInfo();

  // const potentialReference =

  const isErrorVisible = errorMessage !== ''; // zmienić na NULL
  return (
    <div className={wrapper}>
      <InputSelection
        typeOfInput={typeOfInput}
        handleTypeChange={handleTypeChange}
      />
      <Input typeOfInput={typeOfInput} reference={inputReference} />
      <div className={wrapperError}>{isErrorVisible && errorMessage}</div>

      <button
        className={`${wrapperButton} button-default`}
        onClick={handleMemorizeItButton}
      >
        Memorize it!
      </button>
      <div ref={infoReference}>
        <div>Your value: {inputReference.current?.value}</div>
        <span></span>
      </div>
      <Explanation typeOfInput={typeOfInput} />
    </div>
  );
};
