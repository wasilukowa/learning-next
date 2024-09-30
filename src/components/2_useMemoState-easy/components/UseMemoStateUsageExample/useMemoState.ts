'use client';

import { useState, useMemo, useRef } from 'react';
import { TUseMemo } from './types';
import { isEqual } from 'lodash';

import { TtypeOfInput } from './types';

export const useMemoState = <T extends TtypeOfInput>(): ReturnType<
  TUseMemo<T>
> => {
  const [memorizedValue, setValue] = useState<T | null>(null);

  const [typeOfInput, setTypeOfInput] = useState<T>('string' as T);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const inputReference = useRef<HTMLInputElement | null>(null);
  const textAreaReference = useRef<HTMLTextAreaElement | null>(null);

  const handleTypeChange = (newType: T) => {
    setTypeOfInput(newType);

    const potentialReference =
      typeOfInput === 'number'
        ? inputReference.current
        : textAreaReference.current;

    if (potentialReference) {
      potentialReference.value = '';
      setErrorMessage(null);
    }
  };

  const isJSON = (value: string) => {
    try {
      JSON.parse(value);
      return true;
    } catch (error) {
      return false;
    }
  };

  const handleMemorizeItButton = () => {
    const potentialReference =
      typeOfInput === 'number'
        ? inputReference.current
        : textAreaReference.current;

    // const potentialReference = inputReference.current;
    if (!potentialReference) return () => {};

    const value = potentialReference.value;

    const isValueObject = typeOfInput === 'object';
    const isValueArray = typeOfInput === 'array';

    if (isValueObject || isValueArray) {
      const isValueValidJSON = isJSON(value);
      if (!isValueValidJSON) {
        setErrorMessage(
          `Incorrect JSON ${typeOfInput} format, please check and try again.`,
        );
        return () => {};
      }
      setErrorMessage('');
    }

    handleValueChange(value as T);
  };

  const handleValueChange = useMemo(() => {
    return (value: T) => {
      const areEqualLodash = isEqual(memorizedValue, value);
      if (!areEqualLodash) {
        setValue(value);
        console.log('Values are equal...');
      }
    };
  }, [memorizedValue]);

  return {
    inputReference,
    textAreaReference,
    errorMessage,
    typeOfInput,
    handleMemorizeItButton,
    handleTypeChange,
  };
};
