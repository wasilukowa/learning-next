import { useProgressBar } from "./useProgressBar";

import { ProgressBarProps } from "./types";

import styles from "./rwd.module.scss";

const { wrapper, wrapperStepTitle, wrapperProgressBar, wrapperProgressBarStepMarker } = styles;

export const ProgressBar = ({currentStep, numberOfSteps, stepNaming}: ProgressBarProps) => {

    const { progressBarRef, stepMarkerRef } = useProgressBar(currentStep, numberOfSteps);

    return (
        <div className={wrapper}>
            <p className={wrapperStepTitle}>{stepNaming} {currentStep + 1} / {numberOfSteps}</p>
            <div className={wrapperProgressBar} ref={progressBarRef}>
                <span className={wrapperProgressBarStepMarker} ref={stepMarkerRef}></span>
            </div>
        </div>
    )
}