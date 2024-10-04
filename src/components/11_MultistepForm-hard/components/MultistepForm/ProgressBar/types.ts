export type ProgressBarProps = {
    currentStep: number;
    numberOfSteps: number;
    stepNaming: string;
}

export type UseProgressBarReturn = {
    progressBarRef: React.RefObject<HTMLDivElement>,
    stepMarkerRef: React.RefObject<HTMLSpanElement>,
}

export type TUseProgressBar = (currentStep: number, numberOfSteps: number) => UseProgressBarReturn;
