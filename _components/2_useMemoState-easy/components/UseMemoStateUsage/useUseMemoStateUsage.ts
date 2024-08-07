'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import { TUseUseMemoStateUsage } from './types';
import { isEqual } from 'lodash';

export const useMemoState: TUseUseMemoStateUsage = (
  value,
  // number,
  // object,
  // array,
  // string,
) => {
  const useMemoState = <T>(initialState: T): [T, (newState: T) => void] => {
    const [state, setState] = useState(initialState);

    const memoizedSetter = useMemo(() => {
      return (newState: T) => {
        const areEqualLodash = _.isEqual(newState, state);
        if (!areEqualLodash) setState(newState);
      };
    }, [state]);

    return [state, memoizedSetter];
  };

  const infoReference = useRef<HTMLDivElement>(null);

  const showRenderingInfo = () => {
    const potentialReference = infoReference.current;
    const isInfoReferenceDefined = potentialReference !== null;
    if (!isInfoReferenceDefined) return;

    const postNode = document.createElement('div');
    postNode.innerText = 'Yes!!';
    potentialReference.appendChild(postNode);
  };

  const [v1, setter1] = useMemoState(number.initialValue);
  const [v2, setter2] = useMemoState(object.initialValue);
  const [v3, setter3] = useMemoState(array.initialValue);
  const [v4, setter4] = useMemoState(string.initialValue);

  const handleNumberVal = () => {
    setter1(number.newValue);
  };

  const handleChangeToObject = () => {
    setter2(object.newValue);
  };

  const handleArrVal = () => {
    setter3(array.newValue);
  };

  const handleStringVal = () => {
    setter4(string.newValue);
  };

  return {
    infoReference,
    showRenderingInfo,
    handleNumberVal,
    handleChangeToObject,
    handleArrVal,
    handleStringVal,
  };
};
