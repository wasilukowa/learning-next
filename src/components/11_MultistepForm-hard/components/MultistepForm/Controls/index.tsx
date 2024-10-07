import { NavigationButtons } from "../FormNavigation"
import { SubmitButton } from "../SubmitButton"
import { ControlsProps } from "./types"

export const Controls = ({labels, handleStepNumberChange, currentStepNumber, numberOfSteps, submit}: ControlsProps) => {

    const isSubmitButtonVisible = currentStepNumber === numberOfSteps;

    return (
        <>
        <NavigationButtons 
            labels={labels}
            handleStepNumberChange={handleStepNumberChange} 
            currentStep={currentStepNumber} 
            numberOfSteps={numberOfSteps} 
        />
        { isSubmitButtonVisible && <SubmitButton submit={submit} label={labels["submitButtonLabel"]} />}
        </>
    )
}