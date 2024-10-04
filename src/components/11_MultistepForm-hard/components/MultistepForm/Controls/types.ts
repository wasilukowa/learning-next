import { THandleStepNumberChange, TMultistepLabels, TSubmit } from "../types";

export type ControlsProps = {
    labels: TMultistepLabels,
    handleStepNumberChange: THandleStepNumberChange, 
    currentStepNumber: number,
    numberOfSteps: number, 
    submit: TSubmit,
}