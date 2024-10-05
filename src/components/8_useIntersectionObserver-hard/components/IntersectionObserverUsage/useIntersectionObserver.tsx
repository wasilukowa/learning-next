'use client';

import { useEffect, useRef } from 'react';
import { TUseIntersectionObserver } from './types';

export const useIntersectionObserver: TUseIntersectionObserver = (
  callback,
  options,
) => {
  if (typeof document === 'undefined') return;

  const isCallbackFunctionType = typeof callback === 'function';
  if (!isCallbackFunctionType) return { referenceForIO: { current: null } };

  const referenceForIO = useRef<HTMLDivElement | null>(null);

  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        callback();
      }
    });
  };

  useEffect(() => {
    const referenceForIOIsDefined = referenceForIO.current !== null;
    if (!referenceForIOIsDefined) return { referenceForIO: { current: null } };

    const observer = new IntersectionObserver(callbackFunction, options);

    observer.observe(referenceForIO.current);

    return () => {
      observer.unobserve(referenceForIO.current);
    };
  }, []);

  return {
    referenceForIO,
  };
};
