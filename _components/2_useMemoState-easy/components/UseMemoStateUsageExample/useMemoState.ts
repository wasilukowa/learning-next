'use client';

import { useState, useMemo, useRef } from 'react';
import { TUseMemo } from './types';
import { isEqual } from 'lodash';

export const useMemoState = <T>(): ReturnType<TUseMemo<T>> => {
  const [value, setValue] = useState<T | null>(null);

  const [typeOfT, setTypeOfT] = useState<
    'string' | 'number' | 'object' | 'array'
  >('string');

  const handleValueChange = useMemo(() => {
    return (newValue: T) => {
      const areEqualLodash = isEqual(newValue, value);
      if (!areEqualLodash) setValue(newValue);
    };
  }, [value]);

  const infoReference = useRef<HTMLEmbedElement | null>(null);

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
    showRenderingInfo,
    handleValueChange,
    setTypeOfT,
    typeOfT,
  };
};
