'use client';

import { useEffect, useRef } from 'react';
import { TUseProgressBar } from './types';

export const useProgressBar: TUseProgressBar = (currentStep, numberOfSteps) => {
  const stepMarkerRef = useRef<HTMLSpanElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // odmontowywanie
  useEffect(() => {
    const isStepMarkerRefDefined = stepMarkerRef !== undefined;
    if (!isStepMarkerRefDefined) return;

    const potentialStepMarkerRefCurrent = stepMarkerRef.current;
    const isPotentialStepMarkerRefCurrentDefined =
      potentialStepMarkerRefCurrent !== null;
    if (!isPotentialStepMarkerRefCurrentDefined) return;

    const isProgressBarRefDefined = progressBarRef !== undefined;
    if (!isProgressBarRefDefined) return;

    const potentialProgressBarRefCurrent = progressBarRef.current;
    const isPotentialProgressBarRefCurrentDefined =
      potentialProgressBarRefCurrent !== null;
    if (!isPotentialProgressBarRefCurrentDefined) return;

    const progressBarWidth = potentialProgressBarRefCurrent.offsetWidth;
    const progressBarHeight = potentialProgressBarRefCurrent.offsetHeight;

    const isProgressBarWidthDefined = progressBarWidth !== undefined;
    if (!isProgressBarWidthDefined) return;

    const isProgressBarHeightDefined = progressBarHeight !== undefined;
    if (!isProgressBarHeightDefined) return;

    const stepIncreaseWidth = progressBarWidth / (numberOfSteps - 1);

    const progressBarMarkerWidth =
      stepIncreaseWidth * currentStep + progressBarHeight;

    potentialStepMarkerRefCurrent.style.width = `${progressBarMarkerWidth}px`;
  }, [progressBarRef.current, currentStep]);

  return {
    progressBarRef,
    stepMarkerRef,
  };
};
