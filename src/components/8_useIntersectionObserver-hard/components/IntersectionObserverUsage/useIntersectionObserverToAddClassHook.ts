import { useEffect } from 'react';
import { TUseIntersectionObserverToAddClass } from './types';

export const useIntersectionObserverToAddClass: TUseIntersectionObserverToAddClass =
  (options, classActive) => {
    useEffect(() => {
      const elements = document.querySelectorAll('[data-observe]');

      if (!elements) return;

      const observer = new IntersectionObserver(callbackFunction, options);

      elements.forEach((element) => {
        observer.observe(element);
      });

      return () => {
        elements.forEach((element) => {
          observer.unobserve(element);
        });
      };
    }, []);
    const isDocumentDefined = typeof document === 'undefined';
    if (!isDocumentDefined) return;

    const callbackFunction = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver,
    ) => {
      entries.map((entry) => {
        const test = entry.target.getAttribute('data-observe');

        if (entry.isIntersecting) {
          entry.target.classList.add(classActive);
          if (test === 'once') observer.unobserve(entry.target);
        }

        if (!entry.isIntersecting) {
          entry.target.classList.remove(classActive);
        }
      });
    };
  };
