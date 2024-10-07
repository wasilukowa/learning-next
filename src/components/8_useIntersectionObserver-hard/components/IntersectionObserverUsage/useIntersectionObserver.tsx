'use client';

import { useEffect, useRef } from 'react';
import { TUseIntersectionObserver } from './types';

export const useIntersectionObserver: TUseIntersectionObserver = (
  callback,
  options,
) => {
  useEffect(() => {
    const potentialReference = referenceForIO.current;
    const referenceForIOIsDefined = potentialReference !== null;
    if (!referenceForIOIsDefined) return;

    const observer = new IntersectionObserver(callbackFunction, options);

    observer.observe(potentialReference);

    return () => {
      observer.unobserve(potentialReference);
    };
  }, []);

  // if (typeof document === 'undefined')
  //   return { referenceForIO: { current: null } };

  // const isCallbackFunctionType = typeof callback === 'function';
  // if (!isCallbackFunctionType) return { referenceForIO: { current: null } };

  const referenceForIO = useRef<HTMLDivElement | null>(null);

  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        callback();
      }
    });
  };

  return {
    referenceForIO,
  };
};
