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

    console.log('ROBIE');

    const isValueObject = typeOfInput === 'object';

    if (isValueObject) {
      const isValueValidJSON = isJSON(value);
      if (!isValueValidJSON) {
        setErrorMessage('TO NIE JSON!');
        return () => {};
      } else {
        setErrorMessage('');
      }
    }
    handleValueChange(value as T);
  };

  const handleValueChange = useMemo(() => {
    // const potentialReference = inputReference.current;
    // if (!potentialReference) return () => {};

    // const value = potentialReference.value;

    return (value: T) => {
      const areEqualLodash = isEqual(memorizedValue, value);
      console.log(areEqualLodash, value);
      if (!areEqualLodash) {
        setValue(value);
        console.log('value change');
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
    handleValueChange,
    typeOfInput,
    handleMemorizeItButton,
    handleTypeChange,
  };
};
