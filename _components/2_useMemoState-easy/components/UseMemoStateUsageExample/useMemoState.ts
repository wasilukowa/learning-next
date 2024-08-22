'use client';

import { useState, useMemo, useRef } from 'react';
import { TUseMemo } from './types';
import { isEqual } from 'lodash';

import { TtypeOfT } from './types';

export const useMemoState = <T>(): ReturnType<TUseMemo<T>> => {
  const [value, setValue] = useState<T | null>(null);

  const [typeOfInput, setTypeOfInput] = useState<TtypeOfT>('string');

  const [errorMessage, setErrorMessage] = useState('');

  const infoReference = useRef<HTMLEmbedElement | null>(null);
  const inputReference = useRef<HTMLTextAreaElement | null>(null);

  const handleTypeChange = (newType: TtypeOfT) => {
    setTypeOfInput(newType);

    const potentialReference = inputReference.current;

    if (potentialReference) {
      potentialReference.value = '';
      setErrorMessage('');
    }
  };

  const handleValueChange = useMemo(() => {
    const value = inputReference.current?.value; // SPRAWDZIĆ

    const isNumber = typeOfInput === 'number';

    if (isNumber) {
      if (!value) return;
      const potentialNumberValue = parseFloat(value);
      const isNumberNaN = Number.isNaN(potentialNumberValue);
      if (isNumberNaN) {
        setErrorMessage('Invalid number, please check and try again');
      } else setErrorMessage('');
    }
    return (newValue: T) => {
      const areEqualLodash = isEqual(newValue, value);
      if (!areEqualLodash) setValue(newValue);
    };
  }, [value]);

  const showRenderingInfo = () => {
    const potentialReference = infoReference.current;
    const isInfoReferenceDefined = potentialReference !== null;
    if (!isInfoReferenceDefined) return;

    const postNode = document.createElement('div');
    postNode.innerText = 'Yes!!';
    potentialReference.appendChild(postNode);
  };

  return {
    infoReference,
    inputReference,
    errorMessage,
    showRenderingInfo,
    handleValueChange,
    setTypeOfInput,
    typeOfInput,

    handleTypeChange,
  };
};
