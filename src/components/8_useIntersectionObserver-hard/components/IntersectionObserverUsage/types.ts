import { MutableRefObject } from 'react';

export type TIntersectionObserverParagrah = {
  id: string;
  data: string[];
};

export type TIntersectionObserverOptions = {
  root: any;
  rootMargin: string;
  threshold: number;
};

export type TObserveOptions = {
  observeOnce: boolean;
};

export type TIntersectionObserverToAddClassUsageProps = {
  options: TIntersectionObserverOptions;
  paragraphs: TIntersectionObserverParagrah[];
};

export type TUseIntersectionObserverToAddClass = (
  options: TIntersectionObserverOptions,
  classActive: string,
) => void;

export type UseIntersectionObserverReturn = {
  referenceForIO: MutableRefObject<HTMLDivElement | null>;
};

export type TUseIntersectionObserver = (
  callback: Function,
  options: TIntersectionObserverOptions,
) => UseIntersectionObserverReturn;
