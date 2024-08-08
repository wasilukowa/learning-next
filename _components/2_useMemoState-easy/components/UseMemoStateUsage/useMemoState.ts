'use client';

import { useState, useMemo, useRef } from 'react';
import { TUseMemo } from './types';
import { isEqual } from 'lodash';

export const useMemoState = <T>(initialValue: T): ReturnType<TUseMemo<T>> => {
  const [value, setValue] = useState(initialValue);

  const handleValueChange = useMemo(() => {
    return (newValue: T) => {
      const areEqualLodash = isEqual(newValue, value);
      if (!areEqualLodash) setValue((prevState) => newValue);
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
    value,
    handleValueChange,
  };
};
