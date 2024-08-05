'use client';

import { areTheyEqual } from '../utils';
import { useState, useMemo } from 'react';

var _ = require('lodash');

export const useMemoState = <T>(
  initialState: T,
): [T, (newState: T) => void] => {
  const [state, setState] = useState(initialState);

  const memoizedSetter = useMemo(() => {
    return (newState: T) => {
      const areEqual = areTheyEqual(newState, state);
      const areEqualLodash = _.isEqual(newState, state);
      if (!areEqualLodash) setState(newState);
    };
  }, [state]);

  return [state, memoizedSetter];
};
