'use client';

import { useMemoState } from './useMemoState';
import { Input } from './Input';
import { InputSelection } from './InputSelection';
import { Explanation } from './Explanation';

import style from './rwd.module.scss';

const {
  wrapper,
  wrapperInput,
  wrapperInputBlockHolder,
  wrapperError,
  wrapperButton,
} = style;

export const UseMemoStateUsageExample = () => {
  const {
    inputReference,
    textAreaReference,
    errorMessage,
    typeOfInput,
    handleMemorizeItButton,
    handleTypeChange,
  } = useMemoState();

  const isErrorVisible = errorMessage !== null;

  return (
    <div className={wrapper}>
      <InputSelection
        typeOfInput={typeOfInput}
        handleTypeChange={handleTypeChange}
      />
      <div className={wrapperInputBlockHolder}>
        <div className={wrapperInput}>
          <Input
            typeOfInput={typeOfInput}
            inputReference={inputReference}
            textAreaReference={textAreaReference}
          />
          <div className={wrapperError}>{isErrorVisible && errorMessage}</div>
          <button
            className={`${wrapperButton} button-default`}
            onClick={handleMemorizeItButton}
          >
            Memorize it!
          </button>
        </div>
        <Explanation typeOfInput={typeOfInput} />
      </div>
    </div>
  );
};
