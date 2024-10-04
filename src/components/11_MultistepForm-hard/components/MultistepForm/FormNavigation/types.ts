import { TMultistepLabels, THandleStepNumberChange } from "../types"

export type NavigationButtonsProps = {
    labels: TMultistepLabels,
    currentStep: number, 
    numberOfSteps: number, 
    handleStepNumberChange: THandleStepNumberChange, 
}