import { useEffect, useRef } from "react";
import { TUseIntersectionObserver } from "./types";

export const useIntersectionObserver: TUseIntersectionObserver = (
  callback,
  options,
) => {
  if (typeof document === "undefined") return;

  const isCallbackFunctionType = typeof callback === "function";
  if (!isCallbackFunctionType) return;

  const refferenceForIO = useRef<HTMLDivElement | null>(null);

  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        callback();
      }
    });
  };

  useEffect(() => {
    const referenceForIOIsDefined = refferenceForIO.current !== null;
    if (!referenceForIOIsDefined) return;

    const observer = new IntersectionObserver(callbackFunction, options);

    observer.observe(refferenceForIO.current);

    return () => {
      observer.unobserve(refferenceForIO.current);
    };
  }, []);

  return {
    refferenceForIO,
  };
};
