'use client';

import { useState, useMemo, useRef } from 'react';
import { TUseMemo } from './types';
import { isEqual, set } from 'lodash';

import { TtypeOfInput } from './types';

export const useMemoState = <T extends TtypeOfInput>(): ReturnType<
  TUseMemo<T>
> => {
  const [memorizedValue, setValue] = useState<T | null>(null);

  const [typeOfInput, setTypeOfInput] = useState<T>('string' as T);

  const [errorMessage, setErrorMessage] = useState('');

  const infoReference = useRef<HTMLEmbedElement | null>(null);
  const inputReference = useRef<HTMLTextAreaElement | null>(null);

  const handleTypeChange = (newType: T) => {
    setTypeOfInput(newType);

    const potentialReference = inputReference.current;

    if (potentialReference) {
      potentialReference.value = '';
      setErrorMessage('');
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
    const potentialReference = inputReference.current;
    if (!potentialReference) return () => {};

    const value = potentialReference.value;

    const isValueObject = typeOfInput === 'object';
    const isValueArray = typeOfInput === 'array';

    if (isValueObject || isValueArray) {
      const isValueValidJSON = isJSON(value);
      if (!isValueValidJSON) {
        setErrorMessage(
          `Incorrect JSON ${typeOfInput} format, please check and try again. Below you can find simple JSON ${typeOfInput} format explanation.`,
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
      console.log(areEqualLodash, value);
      if (!areEqualLodash) {
        setValue(value);
      }
    };
  }, [memorizedValue]);

  const showRenderingInfo = () => {
    const potentialReference = infoReference.current;
    const isInfoReferenceDefined = potentialReference !== null;
    if (!isInfoReferenceDefined) return;

    const postNode = document.createElement('span');
    postNode.innerText = 'Yes!!';
    potentialReference.appendChild(postNode);
  };

  return {
    infoReference,
    inputReference,
    errorMessage,
    showRenderingInfo,
    typeOfInput,
    handleMemorizeItButton,
    handleTypeChange,
  };
};
